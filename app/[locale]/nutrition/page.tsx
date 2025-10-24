'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { nutritionInfo, feedingSchedule, portionGuide } from '@/data/nutrition';

// Helper function to convert category to translation key
const getCategoryKey = (category: string): string => {
  return 'category' + category.replace(/\s+/g, '');
};

export default function NutritionPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(nutritionInfo.map(n => n.category)))];

  const filteredInfo = selectedCategory === 'All'
    ? nutritionInfo
    : nutritionInfo.filter(n => n.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&h=600&fit=crop&crop=faces"
          alt="Dog Nutrition"
          fill
          className="object-cover object-center brightness-80"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('nutrition.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('nutrition.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#feeding" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition shadow-lg">
              {t('nutrition.feedingGuidelines')}
            </Link>
            <Link href="/" className="bg-white text-orange-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('nutrition.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Reference Cards */}
      <div id="feeding" className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feeding Schedule */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{t('nutrition.feedingSchedule')}</h2>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-900">{t('nutrition.puppies')}</div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>{t('nutrition.feedingSchedulePuppy6to12weeks')}: {t('nutrition.feedingSchedulePuppy6to12weeksValue')}</div>
                    <div>{t('nutrition.feedingSchedulePuppy3to6months')}: {t('nutrition.feedingSchedulePuppy3to6monthsValue')}</div>
                    <div>{t('nutrition.feedingSchedulePuppy6to12months')}: {t('nutrition.feedingSchedulePuppy6to12monthsValue')}</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('nutrition.adultDogs')}</div>
                  <div className="text-sm text-gray-700">{t('nutrition.feedingScheduleAdultValue')}</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('nutrition.seniorDogs')}</div>
                  <div className="text-sm text-gray-700">{t('nutrition.feedingScheduleSeniorValue')}</div>
                </div>
              </div>
            </div>

            {/* Portion Guide */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{t('nutrition.portionGuidelines')}</h2>
              <p className="text-sm text-gray-700 mb-3">{t('nutrition.portionGuideNote')}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('nutrition.portionGuideTip1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('nutrition.portionGuideTip2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('nutrition.portionGuideTip3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('nutrition.portionGuideTip4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(`nutrition.${getCategoryKey(category)}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-600 mb-6">
          {t('nutrition.showingResults', { count: filteredInfo.length })}
        </p>

        <div className="space-y-6">
          {filteredInfo.map(info => (
            <div key={info.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">
                  {t(`nutrition.${getCategoryKey(info.category)}`)}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">{t(`nutrition.nutrition_${info.id}_title`)}</h2>
              <p className="text-gray-700 mb-4">{t(`nutrition.nutrition_${info.id}_content`)}</p>

              {(() => {
                const itemCount = parseInt(t(`nutrition.nutrition_${info.id}_items`));
                return itemCount > 0 && (
                  <div className={`p-4 rounded-lg ${
                    info.category === 'Toxic Foods'
                      ? 'bg-red-50 border-l-4 border-red-500'
                      : info.category === 'Safe Foods'
                      ? 'bg-green-50 border-l-4 border-green-500'
                      : 'bg-gray-50'
                  }`}>
                    <ul className="space-y-2">
                      {Array.from({ length: itemCount }).map((_, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className={`mr-2 mt-0.5 ${
                            info.category === 'Toxic Foods'
                              ? 'text-red-600'
                              : info.category === 'Safe Foods'
                              ? 'text-green-600'
                              : 'text-gray-600'
                          }`}>
                            {info.category === 'Toxic Foods' ? '⚠' : '•'}
                          </span>
                          <span className="text-gray-700">{t(`nutrition.nutrition_${info.id}_item_${idx}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
