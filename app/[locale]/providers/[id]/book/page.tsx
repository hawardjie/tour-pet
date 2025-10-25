'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TimeSlotSelector from '@/components/booking/TimeSlotSelector';
import { getProviderById } from '@/lib/services/provider-service';
import type { Provider } from '@/lib/services/provider-service';

export default function BookProviderPage() {
  const t = useTranslations();
  const router = useRouter();
  const params = useParams();
  const { data: session } = useSession();
  const providerId = params.id as string;

  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceType: '',
    startDate: '',
    endDate: '',
    startTime: '',
    numberOfDogs: 1,
    dogDetails: '',
    message: '',
  });

  useEffect(() => {
    const providerData = getProviderById(providerId);
    if (!providerData) {
      router.push('/providers');
      return;
    }
    setProvider(providerData);

    // Pre-fill from session if logged in
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        customerName: session.user.name || '',
        customerEmail: session.user.email || '',
      }));
    }
  }, [providerId, session, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          providerId: provider?.id,
          providerName: provider?.name,
          providerEmail: provider?.email,
          customerId: session?.user?.id || 'guest',
        }),
      });

      if (!response.ok) throw new Error('Failed to create booking');

      setSuccess(true);
      setTimeout(() => router.push(`/providers/${providerId}`), 3000);
    } catch (err) {
      setError(t('booking.errorCreating'));
    } finally {
      setLoading(false);
    }
  };

  if (!provider) return null;

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('booking.requestService')}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{t('booking.from')} {provider.name}</p>

          {success ? (
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-200 px-6 py-4 rounded-lg">
              <h3 className="font-bold mb-2">{t('booking.successTitle')}</h3>
              <p>{t('booking.successMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sm:p-8 space-y-6">
              {error && (
                <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded">{error}</div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('booking.yourName')}</label>
                  <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('booking.yourEmail')}</label>
                  <input type="email" name="customerEmail" value={formData.customerEmail} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('booking.yourPhone')}</label>
                  <input type="tel" name="customerPhone" value={formData.customerPhone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('booking.serviceType')}</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white">
                    <option value="">{t('booking.selectService')}</option>
                    {provider.services.map(service => (
                      <option key={service.type} value={service.type}>{service.type}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Booking Date and Time */}
              <div className="col-span-2">
                <TimeSlotSelector
                  providerId={providerId}
                  selectedDate={formData.startDate}
                  selectedSlot={formData.startTime}
                  onDateChange={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
                  onSlotChange={(slot) => setFormData(prev => ({ ...prev, startTime: slot }))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('booking.numberOfDogs')}</label>
                  <input type="number" name="numberOfDogs" value={formData.numberOfDogs} onChange={handleChange} min="1" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('booking.dogDetails')}</label>
                <textarea name="dogDetails" value={formData.dogDetails} onChange={handleChange} rows={3} placeholder={t('booking.dogDetailsPlaceholder')} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('booking.additionalMessage')}</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
              </div>

              <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:opacity-50">
                {loading ? t('booking.submitting') : t('booking.submitRequest')}
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
