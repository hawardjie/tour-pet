'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { dogBehaviors } from '@/data/behaviors';

export default function BehaviorPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedBehavior, setExpandedBehavior] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(dogBehaviors.map(b => b.category)))];

  const filteredBehaviors = selectedCategory === 'All'
    ? dogBehaviors
    : dogBehaviors.filter(b => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">🐾 TourPet</Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">← {t('behavior.backToHome')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=600&fit=crop&crop=faces"
          alt="Dog Behavior"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('behavior.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('behavior.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#categories" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg">
              {t('behavior.exploreBehaviors')}
            </Link>
            <Link href="/" className="bg-white text-green-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('behavior.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div id="categories" className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'All' ? t('behavior.categoryAll') : t(`behavior.category${category}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-600 mb-6">
          {t('behavior.showingResults', { count: filteredBehaviors.length })}
        </p>

        <div className="space-y-4">
          {filteredBehaviors.map(behavior => (
            <div key={behavior.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedBehavior(expandedBehavior === behavior.id ? null : behavior.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{t(`behavior.behavior_${behavior.id}_name`)}</h2>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {t(`behavior.category${behavior.category}`)}
                      </span>
                    </div>
                    <p className="text-gray-600">{t(`behavior.behavior_${behavior.id}_description`)}</p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      expandedBehavior === behavior.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedBehavior === behavior.id && (
                <div className="px-6 pb-6 space-y-6 border-t">
                  {/* Meaning */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('behavior.whatItMeans')}</h3>
                    <p className="text-gray-700">{t(`behavior.behavior_${behavior.id}_meaning`)}</p>
                  </div>

                  {/* What To Do */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('behavior.whatToDo')}</h3>
                    <ul className="space-y-2">
                      {behavior.whatToDo.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{t(`behavior.behavior_${behavior.id}_whatToDo_${idx}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* When To Worry */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">{t('behavior.whenToWorry')}</h3>
                    <ul className="space-y-2">
                      {behavior.whenToWorry.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-600 mr-2 mt-1">⚠</span>
                          <span className="text-gray-700">{t(`behavior.behavior_${behavior.id}_whenToWorry_${idx}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('behavior.tips')}</h3>
                    <ul className="space-y-2">
                      {behavior.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">💡</span>
                          <span className="text-gray-700">{t(`behavior.behavior_${behavior.id}_tip_${idx}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
