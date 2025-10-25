'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { saveProvider, getProviderByUserId } from '@/lib/services/provider-service';
import type { ServiceOffered } from '@/lib/services/provider-service';

export default function ProviderRegisterPage() {
  const t = useTranslations();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bio: '',
    location: '',
    city: '',
    zipCode: '',
    services: [] as ServiceOffered[],
    serviceRadius: 5,
    offersDropOff: false,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    },
  });

  const [serviceForm, setServiceForm] = useState({
    sittingEnabled: false,
    sittingPrice: 40,
    sittingDescription: '',
    walkingEnabled: false,
    walkingPrice: 25,
    walkingDescription: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }

    if (status === 'authenticated' && session?.user) {
      // Check if user is already a provider
      const existingProvider = getProviderByUserId(session.user.id);
      if (existingProvider) {
        router.push('/provider/dashboard');
      }

      // Pre-fill name and email
      setFormData(prev => ({
        ...prev,
        name: session.user.name || '',
      }));
    }
  }, [session, status, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAvailabilityChange = (day: string) => {
    setFormData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: !prev.availability[day as keyof typeof prev.availability],
      },
    }));
  };

  const handleServiceFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setServiceForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value,
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    setError('');

    switch (currentStep) {
      case 1:
        if (!formData.name || !formData.phone || !formData.bio) {
          setError(t('provider.fillAllFields'));
          return false;
        }
        break;
      case 2:
        if (!serviceForm.sittingEnabled && !serviceForm.walkingEnabled) {
          setError(t('provider.selectAtLeastOneService'));
          return false;
        }
        break;
      case 3:
        if (!formData.location || !formData.city || !formData.zipCode) {
          setError(t('provider.fillLocationFields'));
          return false;
        }
        break;
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    if (!validateStep(step)) return;
    if (!session?.user) return;

    setLoading(true);

    try {
      // Build services array
      const services: ServiceOffered[] = [];

      if (serviceForm.sittingEnabled) {
        services.push({
          type: 'sitting',
          price: serviceForm.sittingPrice,
          description: serviceForm.sittingDescription || t('provider.dogSittingService'),
        });
      }

      if (serviceForm.walkingEnabled) {
        services.push({
          type: 'walking',
          price: serviceForm.walkingPrice,
          description: serviceForm.walkingDescription || t('provider.dogWalkingService'),
        });
      }

      // Save provider
      saveProvider({
        userId: session.user.id,
        email: session.user.email || '',
        name: formData.name,
        phone: formData.phone,
        bio: formData.bio,
        location: formData.location,
        city: formData.city,
        zipCode: formData.zipCode,
        services,
        serviceRadius: formData.serviceRadius,
        offersDropOff: formData.offersDropOff,
        availability: formData.availability,
        verified: false,
      });

      router.push('/provider/dashboard');
    } catch (err) {
      setError(t('provider.errorSavingProfile'));
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('common.loading')}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('provider.becomeProvider')}</h1>
            <p className="mt-2 text-gray-600">{t('provider.registerDescription')}</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= num ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 4 && (
                    <div
                      className={`w-12 sm:w-24 h-1 ${step > num ? 'bg-blue-600' : 'bg-gray-300'}`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs sm:text-sm">
              <span className="text-center w-1/4">{t('provider.basicInfo')}</span>
              <span className="text-center w-1/4">{t('provider.services')}</span>
              <span className="text-center w-1/4">{t('provider.serviceArea')}</span>
              <span className="text-center w-1/4">{t('provider.availability')}</span>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 sm:p-8">
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">{t('provider.basicInfo')}</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t('provider.fullName')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t('provider.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t('provider.bio')}
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t('provider.bioPlaceholder')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <p className="mt-1 text-sm text-gray-500">{t('provider.bioHelp')}</p>
                </div>
              </div>
            )}

            {/* Step 2: Services */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">{t('provider.servicesOffered')}</h2>

                <div className="border border-gray-300 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      name="sittingEnabled"
                      checked={serviceForm.sittingEnabled}
                      onChange={handleServiceFormChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-lg font-medium text-gray-900">
                      {t('provider.dogSitting')}
                    </label>
                  </div>

                  {serviceForm.sittingEnabled && (
                    <div className="ml-6 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          {t('provider.pricePerDay')}
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="number"
                            name="sittingPrice"
                            value={serviceForm.sittingPrice}
                            onChange={handleServiceFormChange}
                            min="0"
                            step="5"
                            className="pl-7 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          {t('provider.serviceDescription')}
                        </label>
                        <textarea
                          name="sittingDescription"
                          value={serviceForm.sittingDescription}
                          onChange={handleServiceFormChange}
                          rows={2}
                          placeholder={t('provider.sittingDescPlaceholder')}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-gray-300 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      name="walkingEnabled"
                      checked={serviceForm.walkingEnabled}
                      onChange={handleServiceFormChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-lg font-medium text-gray-900">
                      {t('provider.dogWalking')}
                    </label>
                  </div>

                  {serviceForm.walkingEnabled && (
                    <div className="ml-6 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          {t('provider.pricePerWalk')}
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="number"
                            name="walkingPrice"
                            value={serviceForm.walkingPrice}
                            onChange={handleServiceFormChange}
                            min="0"
                            step="5"
                            className="pl-7 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          {t('provider.serviceDescription')}
                        </label>
                        <textarea
                          name="walkingDescription"
                          value={serviceForm.walkingDescription}
                          onChange={handleServiceFormChange}
                          rows={2}
                          placeholder={t('provider.walkingDescPlaceholder')}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Service Area */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">{t('provider.serviceArea')}</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t('provider.neighborhood')}
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Downtown, Mission District"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('provider.city')}
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('provider.zipCode')}
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('provider.serviceRadius')}
                  </label>
                  <div className="space-y-2">
                    {[2, 5, 10, 15, 20].map((radius) => (
                      <label key={radius} className="flex items-center">
                        <input
                          type="radio"
                          name="serviceRadius"
                          value={radius}
                          checked={formData.serviceRadius === radius}
                          onChange={(e) =>
                            setFormData({ ...formData, serviceRadius: parseInt(e.target.value) })
                          }
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">
                          {t('provider.milesRadius', { miles: radius })}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="offersDropOff"
                    checked={formData.offersDropOff}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    {t('provider.offersDropOff')}
                  </label>
                </div>
              </div>
            )}

            {/* Step 4: Availability */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">{t('provider.availability')}</h2>
                <p className="text-gray-600">{t('provider.selectAvailableDays')}</p>

                <div className="space-y-3">
                  {Object.keys(formData.availability).map((day) => (
                    <label key={day} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.availability[day as keyof typeof formData.availability]}
                        onChange={() => handleAvailabilityChange(day)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-gray-900 capitalize">{t(`provider.${day}`)}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {t('common.previous')}
                </button>
              )}

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {t('common.next')}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t('provider.submitting') : t('provider.completeRegistration')}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
