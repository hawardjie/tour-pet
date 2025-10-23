'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { healthConditions, emergencySigns, preventiveCare } from '@/data/health';

export default function HealthPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Common', 'Serious', 'Emergency', 'Chronic'];

  const filteredConditions = healthConditions.filter(condition => {
    const matchesSearch = condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         condition.symptoms.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'All' || condition.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Life-threatening': return 'bg-red-100 text-red-800 border-red-300';
      case 'Severe': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Mild': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">🐾 TourPet</Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">← {t('health.backToHome')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1920&h=600&fit=crop&crop=faces"
          alt="Dog Health"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('health.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('health.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#conditions" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg">
              {t('health.browseConditions')}
            </Link>
            <Link href="/" className="bg-white text-red-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('health.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-3">⚠️</span>
            {t('health.emergencyWarning')}
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {emergencySigns.map((sign, index) => (
              <div key={index} className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>{sign}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm bg-red-700 rounded p-3">
            {t('health.emergencyNote')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white shadow-sm border-b rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('health.searchConditions')}</label>
              <input
                type="text"
                placeholder={t('health.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('health.category')}</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <p className="text-gray-600 mb-6">
          {t('health.showingResults', { count: filteredConditions.length, total: healthConditions.length })}
        </p>

        {/* Health Conditions */}
        <div className="space-y-6 mb-12">
          {filteredConditions.map(condition => (
            <div key={condition.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{condition.name}</h3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(condition.severity)}`}>
                    {condition.severity}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {condition.category}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('health.symptoms')}</h4>
                  <ul className="space-y-1">
                    {condition.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('health.commonCauses')}</h4>
                  <ul className="space-y-1">
                    {condition.causes.map((cause, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-orange-600 mr-2">•</span>
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('health.treatment')}</h4>
                  <ul className="space-y-1">
                    {condition.treatment.map((tx, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        {tx}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('health.prevention')}</h4>
                  <ul className="space-y-1">
                    {condition.prevention.map((prev, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {prev}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {condition.affectedBreeds && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">{t('health.commonlyAffectedBreeds')}</span> {condition.affectedBreeds.join(', ')}
                  </p>
                </div>
              )}

              <div className="mt-4 bg-blue-50 rounded p-4">
                <p className="text-sm font-semibold text-gray-900">{t('health.whenToSeeVet')}</p>
                <p className="text-sm text-gray-700 mt-1">{condition.whenToSeeVet}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredConditions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('health.noResults')}</p>
          </div>
        )}

        {/* Preventive Care Schedule */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('health.preventiveCareSchedule')}</h2>
          <p className="text-gray-700 mb-6">
            {t('health.preventiveCareNote')}
          </p>

          <div className="space-y-8">
            {preventiveCare.map((care, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{care.category}</h3>
                <ul className="space-y-2">
                  {care.schedule.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* First Aid Kit */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('health.firstAidKit')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('health.supplies')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Gauze pads and rolls</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Adhesive tape</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Cotton balls and swabs</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Hydrogen peroxide (3%)</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Antibiotic ointment</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Digital thermometer</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Tweezers and scissors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('health.additionalItems')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Muzzle (even gentle dogs may bite when hurt)</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Blanket or towel</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Disposable gloves</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Flashlight</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Ice pack</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Emergency contact numbers</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Copy of medical records</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('health.relatedResources')}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/breeds" className="block p-4 bg-white rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-blue-600 mb-2">Dog Breeds →</h3>
              <p className="text-sm text-gray-600">Learn about breed-specific health concerns</p>
            </Link>
            <Link href="/nutrition" className="block p-4 bg-white rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-blue-600 mb-2">Nutrition Guide →</h3>
              <p className="text-sm text-gray-600">Proper diet for optimal health</p>
            </Link>
            <Link href="/services/booking" className="block p-4 bg-white rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-blue-600 mb-2">Book Health Checkup →</h3>
              <p className="text-sm text-gray-600">Schedule preventive care visits</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
