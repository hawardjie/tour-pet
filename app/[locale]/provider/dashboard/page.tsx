'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getProviderByUserId, updateProvider, type Provider } from '@/lib/services/provider-service';
import { getBookingsByProviderId, updateBookingStatus, type Booking } from '@/lib/services/booking-service';

export default function ProviderDashboardPage() {
  const t = useTranslations();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<Provider>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedTab, setSelectedTab] = useState<'profile' | 'bookings'>('profile');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }

    if (status === 'authenticated' && session?.user) {
      const providerData = getProviderByUserId(session.user.id);
      if (!providerData) {
        router.push('/provider/register');
      } else {
        setProvider(providerData);
        setEditData(providerData);
        // Load bookings for this provider
        const providerBookings = getBookingsByProviderId(providerData.id);
        setBookings(providerBookings);
      }
    }
  }, [session, status, router]);

  const handleEdit = () => {
    setIsEditing(true);
    setMessage('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(provider || {});
    setMessage('');
  };

  const handleSave = async () => {
    if (!provider) return;

    setLoading(true);
    setMessage('');

    try {
      const updated = updateProvider(provider.id, editData);
      if (updated) {
        setProvider(updated);
        setIsEditing(false);
        setMessage(t('provider.profileUpdated'));
      }
    } catch (err) {
      setMessage(t('provider.errorUpdating'));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setEditData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAvailabilityChange = (day: string) => {
    if (!editData.availability) return;

    setEditData(prev => ({
      ...prev,
      availability: {
        ...prev.availability!,
        [day]: !prev.availability![day as keyof typeof prev.availability],
      },
    }));
  };

  const handleBookingAction = (bookingId: string, action: 'accepted' | 'declined') => {
    const success = updateBookingStatus(bookingId, action);
    if (success && provider) {
      const updatedBookings = getBookingsByProviderId(provider.id);
      setBookings(updatedBookings);
      setMessage(t(`booking.status${action.charAt(0).toUpperCase() + action.slice(1)}`));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (status === 'loading' || !provider) {
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('provider.dashboard')}</h1>
            <p className="mt-2 text-gray-600">{t('provider.managingProfile')}</p>
          </div>

          {message && (
            <div className={`mb-6 px-4 py-3 rounded ${
              message.includes('Error') || message.includes('error')
                ? 'bg-red-50 border border-red-200 text-red-700'
                : 'bg-green-50 border border-green-200 text-green-700'
            }`}>
              {message}
            </div>
          )}

          {/* Tab Switcher */}
          <div className="mb-6 border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setSelectedTab('profile')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  selectedTab === 'profile'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t('provider.myProfile')}
              </button>
              <button
                onClick={() => setSelectedTab('bookings')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors relative ${
                  selectedTab === 'bookings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t('booking.myBookings')}
                {bookings.filter(b => b.status === 'pending').length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {bookings.filter(b => b.status === 'pending').length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Profile Tab */}
          {selectedTab === 'profile' && (
            <>
              {/* Profile Status Card */}
              <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{t('provider.profileStatus')}</h2>
                <div className="mt-2 flex items-center space-x-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    provider.verified
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {provider.verified ? t('provider.verified') : t('provider.pending')}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 font-medium">{provider.rating.toFixed(1)}</span>
                    <span className="ml-1 text-gray-500">({provider.reviewCount} {t('provider.reviews')})</span>
                  </div>
                </div>
              </div>
              {!isEditing && (
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {t('provider.editProfile')}
                </button>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('provider.profileDetails')}</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('provider.fullName')}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={editData.name || ''}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{provider.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('provider.phone')}</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={editData.phone || ''}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{provider.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">{t('provider.email')}</label>
                <p className="mt-1 text-gray-900">{provider.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">{t('provider.bio')}</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={editData.bio || ''}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="mt-1 text-gray-900">{provider.bio}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('provider.neighborhood')}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={editData.location || ''}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{provider.location}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('provider.city')}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="city"
                      value={editData.city || ''}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{provider.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('provider.zipCode')}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="zipCode"
                      value={editData.zipCode || ''}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{provider.zipCode}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('provider.servicesOffered')}</h2>
            <div className="space-y-4">
              {provider.services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {service.type === 'sitting' ? t('provider.dogSitting') : t('provider.dogWalking')}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    </div>
                    <span className="text-lg font-bold text-blue-600">${service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('provider.serviceArea')}</h2>
            <div className="space-y-2">
              <p className="text-gray-900">
                <span className="font-medium">{t('provider.radius')}:</span> {provider.serviceRadius} {t('provider.miles')}
              </p>
              <p className="text-gray-900">
                <span className="font-medium">{t('provider.dropOffService')}:</span>{' '}
                {provider.offersDropOff ? t('common.yes') : t('common.no')}
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('provider.availability')}</h2>
            {isEditing ? (
              <div className="space-y-3">
                {Object.keys(provider.availability).map((day) => (
                  <label key={day} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editData.availability?.[day as keyof typeof editData.availability] || false}
                      onChange={() => handleAvailabilityChange(day)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-gray-900 capitalize">{t(`provider.${day}`)}</span>
                  </label>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {Object.entries(provider.availability).map(([day, available]) => (
                  <span
                    key={day}
                    className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                      available
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {t(`provider.${day}`)}
                  </span>
                ))}
              </div>
            )}
          </div>

              {/* Edit Actions */}
              {isEditing && (
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    {t('common.cancel')}
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? t('provider.saving') : t('provider.saveChanges')}
                  </button>
                </div>
              )}
            </>
          )}

          {/* Bookings Tab */}
          {selectedTab === 'bookings' && (
            <div className="space-y-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('booking.myBookings')}</h2>

                {bookings.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">{t('booking.noBookings')}</h3>
                    <p className="mt-1 text-sm text-gray-500">{t('booking.waitingForBookings')}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{booking.customerName}</h3>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                                {t(`booking.status${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}`)}
                              </span>
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <p><span className="font-medium">{t('booking.serviceType')}:</span> {booking.serviceType}</p>
                              <p><span className="font-medium">{t('booking.dates')}:</span> {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</p>
                              <p><span className="font-medium">{t('booking.numberOfDogs')}:</span> {booking.numberOfDogs}</p>
                              <p><span className="font-medium">{t('booking.contact')}:</span> {booking.customerEmail} | {booking.customerPhone}</p>
                              {booking.dogDetails && (
                                <p><span className="font-medium">{t('booking.dogDetails')}:</span> {booking.dogDetails}</p>
                              )}
                              {booking.message && (
                                <p className="mt-2"><span className="font-medium">{t('booking.message')}:</span> {booking.message}</p>
                              )}
                            </div>
                          </div>
                          {booking.status === 'pending' && (
                            <div className="ml-4 flex flex-col space-y-2">
                              <button
                                onClick={() => handleBookingAction(booking.id, 'accepted')}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
                              >
                                {t('booking.accept')}
                              </button>
                              <button
                                onClick={() => handleBookingAction(booking.id, 'declined')}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium"
                              >
                                {t('booking.decline')}
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 border-t pt-3">
                          {t('booking.requestedOn')}: {new Date(booking.createdAt).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
