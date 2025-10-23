'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { microchipBenefits, microchipFAQs, microchipProcess } from '@/data/microchip';

export default function MicrochipPage() {
  const t = useTranslations();
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">🐾 TourPet</Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">← {t('microchip.backToHome')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('microchip.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('microchip.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#benefits" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('microchip.learnMore')}
            </a>
            <a href="#faq" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition shadow-lg">
              {t('microchip.faq')}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('microchip.benefitsTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('microchip.benefitsSubtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {microchipBenefits.map((benefit) => (
              <div key={benefit.id} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{t(`microchip.benefit_${benefit.id}_title`)}</h3>
                <p className="text-gray-700 mb-4">{t(`microchip.benefit_${benefit.id}_description`)}</p>
                <ul className="space-y-2">
                  {benefit.details.map((_, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-600">{t(`microchip.benefit_${benefit.id}_detail_${idx}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('microchip.processTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('microchip.processSubtitle')}
          </p>

          <div className="space-y-6">
            {microchipProcess.map((step) => (
              <div key={step.id} className="bg-white rounded-lg p-6 shadow-md flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{t(`microchip.step_${step.id}_title`)}</h3>
                  <p className="text-gray-700">{t(`microchip.step_${step.id}_description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('microchip.faqTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t('microchip.faqSubtitle')}
          </p>

          <div className="space-y-4">
            {microchipFAQs.map((faq) => (
              <div key={faq.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left hover:bg-gray-100 transition flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold pr-4">{t(`microchip.faq_${faq.id}_question`)}</h3>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ${
                      expandedFAQ === faq.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6 border-t">
                    <p className="text-gray-700 pt-4">{t(`microchip.faq_${faq.id}_answer`)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('microchip.ctaTitle')}</h2>
          <p className="text-xl mb-8">{t('microchip.ctaSubtitle')}</p>
          <Link
            href="/services/booking"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            {t('microchip.findVet')}
          </Link>
        </div>
      </section>
    </div>
  );
}
