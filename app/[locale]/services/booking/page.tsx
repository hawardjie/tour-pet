'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BookingPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    service: 'sitting',
    name: '',
    email: '',
    phone: '',
    dogName: '',
    breed: '',
    age: '',
    startDate: '',
    endDate: '',
    duration: '30',
    frequency: 'once',
    specialInstructions: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('booking.bookingReceived')}</h1>
            <p className="text-gray-600 mb-8">
              {t('booking.thankYou')}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-left">
              <p className="font-semibold text-blue-900 mb-2">{t('booking.whatsNext')}</p>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>✓ {t('booking.step1')}</li>
                <li>✓ {t('booking.step2Phone', { phone: formData.phone })}</li>
                <li>✓ {t('booking.step3Dog', { dogName: formData.dogName })}</li>
                <li>✓ {t('booking.step4')}</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                {t('booking.backToHome')}
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                {t('booking.bookAnother')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&h=600&fit=crop&crop=faces"
          alt="Book a Service"
          fill
          className="object-cover object-center brightness-80"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('booking.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('booking.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#form" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              {t('booking.startBooking')}
            </Link>
            <Link href="/services" className="bg-white text-blue-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('booking.viewServices')}
            </Link>
          </div>
        </div>
      </section>

      <div id="form" className="max-w-3xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {/* Service Type */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {t('booking.serviceType')} *
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <label className={`border-2 rounded-lg p-4 cursor-pointer transition ${
                formData.service === 'sitting'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input
                  type="radio"
                  name="service"
                  value="sitting"
                  checked={formData.service === 'sitting'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <span className="font-medium">{t('booking.dogSitting')}</span>
                <p className="text-sm text-gray-600 mt-1">{t('booking.dogSittingDesc')}</p>
              </label>

              <label className={`border-2 rounded-lg p-4 cursor-pointer transition ${
                formData.service === 'walking'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input
                  type="radio"
                  name="service"
                  value="walking"
                  checked={formData.service === 'walking'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <span className="font-medium">{t('booking.dogWalking')}</span>
                <p className="text-sm text-gray-600 mt-1">{t('booking.dogWalkingDesc')}</p>
              </label>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('booking.yourInformation')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('booking.yourName')} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('booking.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('booking.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Dog Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('booking.dogInformation')}</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('booking.dogName')} *
                </label>
                <input
                  type="text"
                  name="dogName"
                  required
                  value={formData.dogName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('booking.breed')}
                </label>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('booking.age')}
                </label>
                <input
                  type="number"
                  name="age"
                  min="0"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('booking.serviceDetails')}</h3>

            {formData.service === 'sitting' ? (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('booking.startDate')} *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('booking.endDate')} *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    required
                    value={formData.endDate}
                    onChange={handleChange}
                    min={formData.startDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('booking.walkDuration')} *
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="30">{t('booking.duration30')}</option>
                      <option value="60">{t('booking.duration60')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('booking.frequency')} *
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="once">{t('booking.once')}</option>
                      <option value="daily">{t('booking.daily')}</option>
                      <option value="weekly">{t('booking.weekly')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('booking.preferredStartDate')} *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </>
            )}
          </div>

          {/* Special Instructions */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('booking.specialInstructions')}
            </label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              rows={4}
              placeholder={t('booking.specialInstructionsPlaceholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Submit */}
          <div className="border-t pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
            >
              {t('booking.submitBooking')}
            </button>
            <p className="text-sm text-gray-500 text-center mt-3">
              {t('booking.contactNote')}
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
