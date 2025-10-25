'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { careTips } from '@/data/care-tips';

// Helper function to convert category to translation key
const getCategoryKey = (category: string): string => {
  return 'category' + category.replace(/\s+/g, '');
};

export default function CarePage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(careTips.map(t => t.category)))];

  const filteredTips = selectedCategory === 'All'
    ? careTips
    : careTips.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=600&fit=crop&crop=faces"
          alt="Dog Care"
          fill
          className="object-cover object-center brightness-80"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('care.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('care.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#tips" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg">
              {t('care.viewCareTips')}
            </Link>
            <Link href="/" className="bg-white text-purple-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition shadow-lg">
              {t('care.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div id="tips" className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {t(`care.${getCategoryKey(category)}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t('care.showingResults', { count: filteredTips.length })}
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {filteredTips.map(tip => (
            <div key={tip.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-sm rounded-full font-medium">
                  {t(`care.${getCategoryKey(tip.category)}`)}
                </span>
                {t(`care.care_${tip.id}_frequency`) && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">• {t(`care.care_${tip.id}_frequency`)}</span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t(`care.care_${tip.id}_title`)}</h2>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{t(`care.care_${tip.id}_description`)}</p>

              {(() => {
                const toolCount = parseInt(t(`care.care_${tip.id}_tools`));
                return toolCount > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{t('care.toolsNeeded')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: toolCount }).map((_, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded">
                          {t(`care.care_${tip.id}_tool_${idx}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {(() => {
                const tipCount = parseInt(t(`care.care_${tip.id}_tips`));
                return (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{t('care.tips')}</h3>
                    <ul className="space-y-2">
                      {Array.from({ length: tipCount }).map((_, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-purple-600 mr-2 mt-0.5">•</span>
                          <span className="text-gray-700 dark:text-gray-200">{t(`care.care_${tip.id}_tip_${idx}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}

              {(() => {
                const warningCount = parseInt(t(`care.care_${tip.id}_warnings`));
                return warningCount > 0 && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h3 className="text-sm font-semibold text-red-800 mb-2">{t('care.warnings')}</h3>
                    <ul className="space-y-1">
                      {Array.from({ length: warningCount }).map((_, idx) => (
                        <li key={idx} className="text-sm text-red-700">
                          • {t(`care.care_${tip.id}_warning_${idx}`)}
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
