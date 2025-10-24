'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { searchProviders, initializeProviders, type Provider, type SearchFilters } from '@/lib/services/provider-service';

export default function ProvidersPage() {
  const t = useTranslations();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    initializeProviders();
    loadProviders();
  }, []);

  const loadProviders = (newFilters?: SearchFilters) => {
    const filtersToUse = newFilters || filters;
    const results = searchProviders(filtersToUse);
    setProviders(results);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newFilters = { ...filters, location: searchTerm };
    setFilters(newFilters);
    loadProviders(newFilters);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    loadProviders(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    setSearchTerm('');
    loadProviders({});
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">{t('provider.findProviders')}</h1>
            <p className="text-xl text-blue-100">{t('provider.findProvidersDesc')}</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder={t('provider.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                {t('provider.search')}
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow p-6 sticky top-20">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">{t('provider.filters')}</h2>
                  {(filters.serviceType || filters.minPrice || filters.maxPrice || filters.maxDistance) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {t('provider.clearAll')}
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Service Type Filter */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('provider.serviceType')}</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          checked={!filters.serviceType}
                          onChange={() => handleFilterChange('serviceType', undefined)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{t('provider.allServices')}</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          checked={filters.serviceType === 'sitting'}
                          onChange={() => handleFilterChange('serviceType', 'sitting')}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{t('provider.dogSitting')}</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="serviceType"
                          checked={filters.serviceType === 'walking'}
                          onChange={() => handleFilterChange('serviceType', 'walking')}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{t('provider.dogWalking')}</span>
                      </label>
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('provider.priceRange')}</h3>
                    <div className="space-y-2">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t('provider.minPrice')}</label>
                        <input
                          type="number"
                          min="0"
                          step="5"
                          placeholder="$0"
                          value={filters.minPrice || ''}
                          onChange={(e) => handleFilterChange('minPrice', e.target.value ? parseFloat(e.target.value) : undefined)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">{t('provider.maxPrice')}</label>
                        <input
                          type="number"
                          min="0"
                          step="5"
                          placeholder="$100"
                          value={filters.maxPrice || ''}
                          onChange={(e) => handleFilterChange('maxPrice', e.target.value ? parseFloat(e.target.value) : undefined)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Distance Filter */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('provider.maxDistance')}</h3>
                    <select
                      value={filters.maxDistance || ''}
                      onChange={(e) => handleFilterChange('maxDistance', e.target.value ? parseInt(e.target.value) : undefined)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">{t('provider.anyDistance')}</option>
                      <option value="2">2 {t('provider.miles')}</option>
                      <option value="5">5 {t('provider.miles')}</option>
                      <option value="10">10 {t('provider.miles')}</option>
                      <option value="15">15 {t('provider.miles')}</option>
                      <option value="20">20 {t('provider.miles')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Cards */}
            <div className="flex-1">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {providers.length} {t('provider.providersFound')}
                </h2>
              </div>

              {providers.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">{t('provider.noProvidersFound')}</h3>
                  <p className="mt-1 text-sm text-gray-500">{t('provider.tryDifferentFilters')}</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    {t('provider.clearFilters')}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {providers.map((provider) => (
                    <div key={provider.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center">
                              <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
                              {provider.verified && (
                                <svg className="ml-2 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                            <div className="flex items-center mt-1 text-sm text-gray-600">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {provider.location}, {provider.city}
                            </div>
                            <div className="flex items-center mt-1">
                              <div className="flex items-center text-yellow-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-1 font-medium">{provider.rating.toFixed(1)}</span>
                              </div>
                              <span className="ml-2 text-sm text-gray-500">({provider.reviewCount} {t('provider.reviews')})</span>
                            </div>
                          </div>

                          <div className="ml-4 text-right">
                            <div className="text-sm text-gray-600 mb-1">{t('provider.startingAt')}</div>
                            <div className="text-2xl font-bold text-blue-600">
                              ${Math.min(...provider.services.map(s => s.price))}
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 text-gray-700 line-clamp-2">{provider.bio}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {provider.services.map((service, idx) => (
                            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                              {service.type === 'sitting' ? t('provider.dogSitting') : t('provider.dogWalking')} - ${service.price}
                            </span>
                          ))}
                          {provider.offersDropOff && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              {t('provider.dropOffAvailable')}
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {t('provider.servicesWithin')} {provider.serviceRadius} {t('provider.miles')}
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
                          <Link
                            href={`/providers/${provider.id}`}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                          >
                            {t('provider.viewProfile')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
