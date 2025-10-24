'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  puppyVaccinationSchedule,
  coreVaccines,
  nonCoreVaccines,
  vaccinationTips,
  vaccinationFAQs
} from '@/data/vaccinations';

export default function VaccinationsPage() {
  const t = useTranslations();
  const [expandedVaccine, setExpandedVaccine] = useState<string | null>(null);
  const [selectedFAQCategory, setSelectedFAQCategory] = useState<'all' | 'safety' | 'schedule' | 'necessity' | 'side_effects'>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const filteredFAQs = selectedFAQCategory === 'all'
    ? vaccinationFAQs
    : vaccinationFAQs.filter(faq => faq.category === selectedFAQCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('vaccinations.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('vaccinations.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#schedule" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('vaccinations.viewSchedule')}
            </a>
            <a href="#vaccines" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition shadow-lg">
              {t('vaccinations.learnAboutVaccines')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Vaccinate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('vaccinations.whyVaccinateTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('vaccinations.whyVaccinateSubtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">{t('vaccinations.reason1Title')}</h3>
              <p className="text-gray-700">{t('vaccinations.reason1Description')}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">{t('vaccinations.reason2Title')}</h3>
              <p className="text-gray-700">{t('vaccinations.reason2Description')}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">{t('vaccinations.reason3Title')}</h3>
              <p className="text-gray-700">{t('vaccinations.reason3Description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Schedule Timeline */}
      <section id="schedule" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('vaccinations.scheduleTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('vaccinations.scheduleSubtitle')}
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-purple-200"></div>

            <div className="space-y-8">
              {puppyVaccinationSchedule.map((schedule, index) => (
                <div key={schedule.id} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-8 top-6 w-4 h-4 -ml-2 bg-purple-600 rounded-full border-4 border-white"></div>

                  <div className="md:ml-20 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-purple-600 text-white px-6 py-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">{t(`vaccinations.schedule_${schedule.id}_age`)}</h3>
                        <div className="text-sm bg-purple-700 px-3 py-1 rounded">
                          {t('vaccinations.phase')} {index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{t('vaccinations.vaccinesLabel')}:</h4>
                        <div className="flex flex-wrap gap-2">
                          {schedule.vaccines.map((vaccine, idx) => (
                            <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                              {vaccine}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{t(`vaccinations.schedule_${schedule.id}_description`)}</p>
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                        <p className="text-sm text-amber-900">
                          <span className="font-semibold">⚠️ {t('vaccinations.important')}:</span> {t(`vaccinations.schedule_${schedule.id}_important`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Vaccines Explained */}
      <section id="vaccines" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('vaccinations.coreVaccinesTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('vaccinations.coreVaccinesSubtitle')}
          </p>

          <div className="space-y-4">
            {coreVaccines.map((vaccine) => (
              <div key={vaccine.id} className="bg-green-50 rounded-lg shadow-md border-2 border-green-200 overflow-hidden">
                <button
                  onClick={() => setExpandedVaccine(expandedVaccine === vaccine.id ? null : vaccine.id)}
                  className="w-full p-6 text-left hover:bg-green-100 transition flex justify-between items-start"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">
                        {t('vaccinations.coreLabel')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">{t(`vaccinations.vaccine_${vaccine.id}_name`)}</h3>
                    </div>
                    <p className="text-gray-600">{t(`vaccinations.vaccine_${vaccine.id}_description`)}</p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                      expandedVaccine === vaccine.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedVaccine === vaccine.id && (
                  <div className="px-6 pb-6 border-t border-green-200">
                    <div className="pt-6 space-y-6">
                      {/* Why Important */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">❗</span> {t('vaccinations.whyImportantLabel')}
                        </h4>
                        <p className="text-gray-700">{t(`vaccinations.vaccine_${vaccine.id}_whyImportant`)}</p>
                      </div>

                      {/* How Transmitted */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">🦠</span> {t('vaccinations.transmissionLabel')}
                        </h4>
                        <p className="text-gray-700">{t(`vaccinations.vaccine_${vaccine.id}_howTransmitted`)}</p>
                      </div>

                      {/* Symptoms */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">🤒</span> {t('vaccinations.symptomsLabel')}
                        </h4>
                        <ul className="space-y-1">
                          {vaccine.symptoms.map((_, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-red-600 mr-2">•</span>
                              <span>{t(`vaccinations.vaccine_${vaccine.id}_symptom_${idx}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Protection Level */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">🛡️</span> {t('vaccinations.protectionLabel')}
                        </h4>
                        <p className="text-gray-700">{t(`vaccinations.vaccine_${vaccine.id}_protectionLevel`)}</p>
                      </div>

                      {/* Booster Schedule */}
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">📅</span> {t('vaccinations.boosterScheduleLabel')}
                        </h4>
                        <p className="text-gray-700">{t(`vaccinations.vaccine_${vaccine.id}_boosterSchedule`)}</p>
                      </div>

                      {/* Side Effects */}
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">⚠️</span> {t('vaccinations.sideEffectsLabel')}
                        </h4>
                        <ul className="space-y-1">
                          {vaccine.sideEffects.map((_, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-yellow-600 mr-2">•</span>
                              <span>{t(`vaccinations.vaccine_${vaccine.id}_sideEffect_${idx}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Core Vaccines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('vaccinations.nonCoreVaccinesTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('vaccinations.nonCoreVaccinesSubtitle')}
          </p>

          <div className="space-y-4">
            {nonCoreVaccines.map((vaccine) => (
              <div key={vaccine.id} className="bg-blue-50 rounded-lg shadow-md border-2 border-blue-200 overflow-hidden">
                <button
                  onClick={() => setExpandedVaccine(expandedVaccine === vaccine.id ? null : vaccine.id)}
                  className="w-full p-6 text-left hover:bg-blue-100 transition flex justify-between items-start"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                        {t('vaccinations.nonCoreLabel')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">{t(`vaccinations.vaccine_${vaccine.id}_name`)}</h3>
                    </div>
                    <p className="text-gray-600">{t(`vaccinations.vaccine_${vaccine.id}_description`)}</p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                      expandedVaccine === vaccine.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedVaccine === vaccine.id && (
                  <div className="px-6 pb-6 border-t border-blue-200">
                    <div className="pt-6 space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">❗</span> {t('vaccinations.whyImportantLabel')}
                        </h4>
                        <p className="text-gray-700">{t(`vaccinations.vaccine_${vaccine.id}_whyImportant`)}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">🦠</span> {t('vaccinations.transmissionLabel')}
                        </h4>
                        <p className="text-gray-700">{t(`vaccinations.vaccine_${vaccine.id}_howTransmitted`)}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">🤒</span> {t('vaccinations.symptomsLabel')}
                        </h4>
                        <ul className="space-y-1">
                          {vaccine.symptoms.map((_, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-red-600 mr-2">•</span>
                              <span>{t(`vaccinations.vaccine_${vaccine.id}_symptom_${idx}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">🛡️</span> {t('vaccinations.protectionLabel')}
                        </h4>
                        <p className="text-gray-700">{t(`vaccinations.vaccine_${vaccine.id}_protectionLevel`)}</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">📅</span> {t('vaccinations.boosterScheduleLabel')}
                        </h4>
                        <p className="text-gray-700">{t(`vaccinations.vaccine_${vaccine.id}_boosterSchedule`)}</p>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <span className="text-2xl mr-2">⚠️</span> {t('vaccinations.sideEffectsLabel')}
                        </h4>
                        <ul className="space-y-1">
                          {vaccine.sideEffects.map((_, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-yellow-600 mr-2">•</span>
                              <span>{t(`vaccinations.vaccine_${vaccine.id}_sideEffect_${idx}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('vaccinations.tipsTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('vaccinations.tipsSubtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaccinationTips.map((tip) => (
              <div key={tip.id} className={`rounded-lg p-6 shadow-md ${
                tip.category === 'before' ? 'bg-gradient-to-br from-green-50 to-green-100' :
                tip.category === 'during' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                tip.category === 'after' ? 'bg-gradient-to-br from-purple-50 to-purple-100' :
                'bg-gradient-to-br from-gray-50 to-gray-100'
              }`}>
                <div className="text-xs font-semibold mb-2 uppercase">
                  {t(`vaccinations.category_${tip.category}`)}
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`vaccinations.tip_${tip.id}_title`)}</h3>
                <p className="text-gray-700 text-sm">{t(`vaccinations.tip_${tip.id}_description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('vaccinations.faqTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-8">{t('vaccinations.faqSubtitle')}</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(['all', 'safety', 'schedule', 'necessity', 'side_effects'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFAQCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedFAQCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {t(`vaccinations.faqCategory_${category}`)}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full p-5 text-left hover:bg-gray-50 transition flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold pr-4">{t(`vaccinations.faq_${faq.id}_question`)}</h3>
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
                  <div className="px-5 pb-5 border-t">
                    <p className="text-gray-700 pt-4">{t(`vaccinations.faq_${faq.id}_answer`)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('vaccinations.ctaTitle')}</h2>
          <p className="text-xl mb-8">{t('vaccinations.ctaSubtitle')}</p>
          <Link
            href="/services/booking"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            {t('vaccinations.scheduleVisit')}
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
