'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { trainingTopics, trainingPrinciples } from '@/data/training';

export default function TrainingPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(trainingTopics.map(t => t.category)))];

  const filteredTopics = selectedCategory === 'All'
    ? trainingTopics
    : trainingTopics.filter(t => t.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">🐾 TourPet</Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">← {t('training.backToHome')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568572933382-74d440642117?w=1920&h=600&fit=crop&crop=faces"
          alt="Dog Training"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('training.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('training.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#principles" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
              {t('training.startTraining')}
            </Link>
            <Link href="/" className="bg-white text-indigo-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('training.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      {/* Training Principles */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('training.trainingGoldenRules')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('training.essentialPrinciples')}</h3>
              <ul className="space-y-2">
                {trainingPrinciples.golden_rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-indigo-600 mr-2">✓</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('training.commonTrainingMyths')}</h3>
              <ul className="space-y-2">
                {trainingPrinciples.common_myths.map((myth, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    <span className="font-semibold text-red-600">✗</span> {myth}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white shadow-sm border-b rounded-lg p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-600 mb-6">
          {t('training.showingResults', { count: filteredTopics.length })}
        </p>

        {/* Training Topics */}
        <div className="space-y-4">
          {filteredTopics.map(topic => (
            <div key={topic.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-2xl font-bold text-gray-900">{topic.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(topic.difficulty)}`}>
                        {topic.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {topic.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{t('training.age')} {topic.ageRecommendation}</p>
                    <p className="text-gray-700">{topic.description}</p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      expandedTopic === topic.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedTopic === topic.id && (
                <div className="px-6 pb-6 space-y-6 border-t">
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('training.trainingSteps')}</h3>
                    <ol className="space-y-2">
                      {topic.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="font-semibold text-indigo-600 mr-2">{idx + 1}.</span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('training.trainingTips')}</h3>
                    <ul className="space-y-2">
                      {topic.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">💡</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">{t('training.commonMistakes')}</h3>
                    <ul className="space-y-2">
                      {topic.commonMistakes.map((mistake, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-600 mr-2 mt-1">✗</span>
                          <span className="text-gray-700">{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <p className="text-sm font-semibold text-gray-900">{t('training.expectedTimeline')}</p>
                    <p className="text-sm text-gray-700 mt-1">{topic.timeline}</p>
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
