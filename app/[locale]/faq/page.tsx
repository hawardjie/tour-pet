'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { faqs } from '@/data/faqs';

// Helper function to convert category to translation key
const getCategoryKey = (category: string): string => {
  return 'category' + category.replace(/\s+/g, '');
};

export default function FAQPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

  const filteredFAQs = faqs.filter(faq => {
    const translatedQuestion = t(`faq.faq_${faq.id}_q`);
    const translatedAnswer = t(`faq.faq_${faq.id}_a`);
    const matchesSearch = translatedQuestion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         translatedAnswer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=600&fit=crop&crop=faces"
          alt="Dog FAQ"
          fill
          className="object-cover object-center brightness-80"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#search" className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition shadow-lg">
              {t('faq.searchQuestions')}
            </Link>
            <Link href="/" className="bg-white text-pink-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('faq.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <div id="search" className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
          <input
            type="text"
            placeholder={t('faq.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(`faq.${getCategoryKey(category)}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-600 mb-6">
          {t('faq.showingResults', { count: filteredFAQs.length })}
        </p>

        <div className="space-y-4">
          {filteredFAQs.map(faq => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full mb-2">
                      {t(`faq.${getCategoryKey(faq.category)}`)}
                    </span>
                    <h2 className="text-lg font-semibold text-gray-900">{t(`faq.faq_${faq.id}_q`)}</h2>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                      expandedFAQ === faq.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedFAQ === faq.id && (
                <div className="px-6 pb-6 border-t">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed mb-4">{t(`faq.faq_${faq.id}_a`)}</p>

                    {faq.relatedTopics && faq.relatedTopics.length > 0 && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-gray-600 mb-2">{t('faq.relatedTopics')}</p>
                        <div className="flex flex-wrap gap-2">
                          {faq.relatedTopics.map((topic, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('faq.noResults')}</p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('faq.stillHaveQuestions')}</h2>
          <p className="text-gray-700 mb-6">
            {t('faq.cantFindAnswer')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@tour.pet" className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
              {t('faq.emailUs')}
            </a>
            <a href="weixin://TourPet" className="bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition">
              {t('faq.callUs')}
            </a>
            <a href="https://line.me/R/oaMessage/%40TourPet" className="bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition">
              {t('faq.lineUs')}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
