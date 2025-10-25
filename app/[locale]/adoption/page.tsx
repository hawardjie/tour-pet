'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { adoptionBenefits, adoptionSteps, adoptionTips, adoptionResources, detailedAdoptionProcedures } from '@/data/adoption';

export default function AdoptionPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<'Before' | 'During' | 'After' | 'All'>('All');
  const [expandedProcedure, setExpandedProcedure] = useState<string | null>(null);

  const filteredTips = selectedCategory === 'All'
    ? adoptionTips
    : adoptionTips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=600&fit=crop"
          alt="Dog Adoption"
          fill
          className="object-cover object-center brightness-80"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('adoption.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('adoption.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#benefits" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg">
              {t('adoption.whyAdopt')}
            </a>
            <a href="#resources" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition shadow-lg">
              {t('adoption.findDog')}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('adoption.benefitsTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('adoption.benefitsSubtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adoptionBenefits.map((benefit) => (
              <div key={benefit.id} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{t(`adoption.benefit_${benefit.id}_title`)}</h3>
                <p className="text-gray-600">{t(`adoption.benefit_${benefit.id}_description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('adoption.stepsTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('adoption.stepsSubtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adoptionSteps.map((step) => (
              <div key={step.id} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{t(`adoption.step_${step.id}_title`)}</h3>
                </div>
                <p className="text-gray-700 mb-4">{t(`adoption.step_${step.id}_description`)}</p>
                <ul className="space-y-2">
                  {step.tips.map((_, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-600">{t(`adoption.step_${step.id}_tip_${idx}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Procedures Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('adoption.detailedProceduresTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('adoption.detailedProceduresSubtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {detailedAdoptionProcedures.map((procedure) => (
              <div key={procedure.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
                <button
                  onClick={() => setExpandedProcedure(expandedProcedure === procedure.id ? null : procedure.id)}
                  className="w-full p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition flex justify-between items-start"
                >
                  <div className="flex items-start flex-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {procedure.phase}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{t(`adoption.procedure_${procedure.id}_title`)}</h3>
                      <p className="text-sm text-gray-600 mb-2">{t(`adoption.procedure_${procedure.id}_description`)}</p>
                      <div className="flex items-center text-sm text-green-700">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{t(`adoption.procedure_${procedure.id}_duration`)}</span>
                      </div>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                      expandedProcedure === procedure.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedProcedure === procedure.id && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <div className="pt-6 space-y-6">
                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {t('adoption.requirementsLabel')}
                        </h4>
                        <ul className="space-y-2">
                          {procedure.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-green-600 mr-2 mt-1">✓</span>
                              <span>{t(`adoption.procedure_${procedure.id}_requirement_${idx}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What to Expect */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {t('adoption.whatToExpectLabel')}
                        </h4>
                        <ul className="space-y-2">
                          {procedure.whatToExpect.map((item, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-blue-600 mr-2 mt-1">→</span>
                              <span>{t(`adoption.procedure_${procedure.id}_expect_${idx}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Common Questions */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {t('adoption.commonQuestionsLabel')}
                        </h4>
                        <div className="space-y-4">
                          {procedure.commonQuestions.map((qa, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                              <p className="font-semibold text-gray-900 mb-2">
                                Q: {t(`adoption.procedure_${procedure.id}_q_${idx}`)}
                              </p>
                              <p className="text-gray-700">
                                A: {t(`adoption.procedure_${procedure.id}_a_${idx}`)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-900 mb-2 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('adoption.proceduresReminder')}
            </h3>
            <p className="text-green-800">{t('adoption.proceduresReminderText')}</p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('adoption.tipsTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            {t('adoption.tipsSubtitle')}
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {(['All', 'Before', 'During', 'After'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(`adoption.category${category}`)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTips.map((tip) => (
              <div key={tip.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="text-xs font-semibold text-green-600 mb-2">
                  {t(`adoption.category${tip.category}`)}
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`adoption.tip_${tip.id}_title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`adoption.tip_${tip.id}_description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('adoption.resourcesTitle')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('adoption.resourcesSubtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adoptionResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{t(`adoption.resource_${resource.id}_name`)}</h3>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {t(`adoption.type${resource.type}`)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{t(`adoption.resource_${resource.id}_description`)}</p>
                {resource.website && (
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    {t('adoption.visitWebsite')} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('adoption.ctaTitle')}</h2>
          <p className="text-xl mb-8">{t('adoption.ctaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#resources"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition shadow-lg"
            >
              {t('adoption.browseResources')}
            </a>
            <Link
              href="/services/booking"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow-lg"
            >
              {t('adoption.scheduleConsult')}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
