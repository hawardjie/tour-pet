'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LostFoundPage() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<'lost' | 'found'>('lost');

  const lostDogSteps = [
    { id: 'search', title: t('lostFound.lost_step1_title'), description: t('lostFound.lost_step1_description') },
    { id: 'contact', title: t('lostFound.lost_step2_title'), description: t('lostFound.lost_step2_description') },
    { id: 'social', title: t('lostFound.lost_step3_title'), description: t('lostFound.lost_step3_description') },
    { id: 'flyers', title: t('lostFound.lost_step4_title'), description: t('lostFound.lost_step4_description') },
    { id: 'check', title: t('lostFound.lost_step5_title'), description: t('lostFound.lost_step5_description') },
    { id: 'stay-hopeful', title: t('lostFound.lost_step6_title'), description: t('lostFound.lost_step6_description') }
  ];

  const foundDogSteps = [
    { id: 'safety', title: t('lostFound.found_step1_title'), description: t('lostFound.found_step1_description') },
    { id: 'scan', title: t('lostFound.found_step2_title'), description: t('lostFound.found_step2_description') },
    { id: 'report', title: t('lostFound.found_step3_title'), description: t('lostFound.found_step3_description') },
    { id: 'post', title: t('lostFound.found_step4_title'), description: t('lostFound.found_step4_description') },
    { id: 'care', title: t('lostFound.found_step5_title'), description: t('lostFound.found_step5_description') },
    { id: 'patience', title: t('lostFound.found_step6_title'), description: t('lostFound.found_step6_description') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('lostFound.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('lostFound.subtitle')}
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('lost')}
              className={`px-6 py-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'lost'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('lostFound.lostTab')}
            </button>
            <button
              onClick={() => setActiveTab('found')}
              className={`px-6 py-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'found'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('lostFound.foundTab')}
            </button>
          </div>
        </div>
      </div>

      {/* Lost Dog Content */}
      {activeTab === 'lost' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-12">
              <h3 className="text-xl font-bold text-orange-900 mb-2">{t('lostFound.lostUrgent')}</h3>
              <p className="text-orange-800">{t('lostFound.lostUrgentText')}</p>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-center">{t('lostFound.lostStepsTitle')}</h2>

            <div className="space-y-6">
              {lostDogSteps.map((step, index) => (
                <div key={step.id} className="bg-white rounded-lg shadow-md p-6 flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Prevention Tips */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-6 text-center">{t('lostFound.preventionTitle')}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4">🏷️</div>
                  <h3 className="text-xl font-bold mb-2">{t('lostFound.prevention1_title')}</h3>
                  <p className="text-gray-600">{t('lostFound.prevention1_description')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4">💉</div>
                  <h3 className="text-xl font-bold mb-2">{t('lostFound.prevention2_title')}</h3>
                  <p className="text-gray-600">{t('lostFound.prevention2_description')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4">🚪</div>
                  <h3 className="text-xl font-bold mb-2">{t('lostFound.prevention3_title')}</h3>
                  <p className="text-gray-600">{t('lostFound.prevention3_description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Found Dog Content */}
      {activeTab === 'found' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{t('lostFound.foundThankYou')}</h3>
              <p className="text-blue-800">{t('lostFound.foundThankYouText')}</p>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-center">{t('lostFound.foundStepsTitle')}</h2>

            <div className="space-y-6">
              {foundDogSteps.map((step, index) => (
                <div key={step.id} className="bg-white rounded-lg shadow-md p-6 flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Notes */}
            <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">{t('lostFound.importantNotes')}</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠️</span>
                  <span className="text-yellow-800">{t('lostFound.note1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠️</span>
                  <span className="text-yellow-800">{t('lostFound.note2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠️</span>
                  <span className="text-yellow-800">{t('lostFound.note3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('lostFound.resourcesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{t('lostFound.resource1_title')}</h3>
              <p className="text-gray-600">{t('lostFound.resource1_description')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{t('lostFound.resource2_title')}</h3>
              <p className="text-gray-600">{t('lostFound.resource2_description')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{t('lostFound.resource3_title')}</h3>
              <p className="text-gray-600">{t('lostFound.resource3_description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('lostFound.ctaTitle')}</h2>
          <p className="text-xl mb-8">{t('lostFound.ctaSubtitle')}</p>
          <Link
            href="/microchip"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition shadow-lg"
          >
            {t('lostFound.learnMicrochip')}
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
