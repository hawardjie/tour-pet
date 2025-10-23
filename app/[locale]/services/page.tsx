'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">🐾 TourPet</Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">← {t('services.backToHome')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&h=600&fit=crop&crop=faces"
          alt="Dog Services"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/booking" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              {t('services.bookButton')}
            </Link>
            <Link href="/" className="bg-white text-blue-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('services.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Dog Sitting Service */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 relative overflow-hidden min-h-[300px] md:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&crop=faces"
                alt="Dog Sitting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.dogSitting')}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('services.dogSittingDesc')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.whatsIncluded')}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">{t('services.sittingFeature1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">{t('services.sittingFeature2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">{t('services.sittingFeature3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">{t('services.sittingFeature4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">{t('services.sittingFeature5')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">{t('services.sittingFeature6')}</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="font-semibold text-blue-900">{t('services.rates')}</p>
                <p className="text-blue-800">{t('services.sittingRates')}</p>
              </div>

              <Link href="/services/booking" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                {t('services.bookDogSitting')}
              </Link>
            </div>
          </div>
        </div>

        {/* Dog Walking Service */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 relative overflow-hidden min-h-[300px] md:min-h-full md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&h=600&fit=crop&crop=faces"
                alt="Dog Walking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.dogWalking')}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('services.dogWalkingDesc')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.serviceOptions')}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>{t('services.walkingOption1')}</strong> {t('services.walkingOption1Desc')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>{t('services.walkingOption2')}</strong> {t('services.walkingOption2Desc')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>{t('services.walkingOption3')}</strong> {t('services.walkingOption3Desc')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>{t('services.walkingOption4')}</strong> {t('services.walkingOption4Desc')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{t('services.walkingFeature1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{t('services.walkingFeature2')}</span>
                </li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="font-semibold text-green-900">{t('services.rates')}</p>
                <p className="text-green-800">{t('services.walkingRates')}</p>
              </div>

              <Link href="/services/booking" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                {t('services.bookDogWalking')}
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('services.whyChooseTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('services.certifiedTitle')}</h3>
              <p className="text-purple-100">{t('services.certifiedDesc')}</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('services.backgroundTitle')}</h3>
              <p className="text-purple-100">{t('services.backgroundDesc')}</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💙</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('services.petLoversTitle')}</h3>
              <p className="text-purple-100">{t('services.petLoversDesc')}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.readyToBook')}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('services.readyToBookDesc')}
          </p>
          <Link href="/services/booking" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
            {t('services.bookServiceNow')}
          </Link>
        </div>
      </div>
    </div>
  );
}
