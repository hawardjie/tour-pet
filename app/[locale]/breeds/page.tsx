'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { dogBreeds } from '@/data/breeds';

// Helper function to convert size/group/level to translation key
const getKey = (value: string): string => {
  return value.replace(/[\s-]+/g, '');
};

export default function BreedsPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState('All');
  const [groupFilter, setGroupFilter] = useState('All');

  const sizes = ['All', 'Small', 'Medium', 'Large', 'Giant'];
  const groups = ['All', ...Array.from(new Set(dogBreeds.map(b => b.group)))];

  const filteredBreeds = dogBreeds.filter(breed => {
    const matchesSearch = breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         breed.temperament.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSize = sizeFilter === 'All' || breed.size === sizeFilter;
    const matchesGroup = groupFilter === 'All' || breed.group === groupFilter;
    return matchesSearch && matchesSize && matchesGroup;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1920&h=600&fit=crop&crop=faces"
          alt="Dog Breeds"
          fill
          className="object-cover object-center brightness-80"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('breeds.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('breeds.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#filters" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              {t('breeds.browseAllBreeds')}
            </Link>
            <Link href="/" className="bg-white text-blue-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition shadow-lg">
              {t('breeds.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{t('breeds.searchLabel')}</label>
              <input
                type="text"
                placeholder={t('breeds.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{t('breeds.sizeLabel')}</label>
              <select
                value={sizeFilter}
                onChange={(e) => setSizeFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sizes.map(size => (
                  <option key={size} value={size}>
                    {size === 'All' ? t('breeds.categoryAll') : t(`breeds.size${getKey(size)}`)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{t('breeds.groupLabel')}</label>
              <select
                value={groupFilter}
                onChange={(e) => setGroupFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {groups.map(group => (
                  <option key={group} value={group}>
                    {group === 'All' ? t('breeds.categoryAll') : t(`breeds.group${getKey(group)}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-gray-600 dark:text-gray-300">
          {t('breeds.showingResults', { count: filteredBreeds.length, total: dogBreeds.length })}
        </p>
      </div>

      {/* Breed Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBreeds.map(breed => (
            <div key={breed.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={breed.imageUrl}
                  alt={t(`breeds.breed_${breed.id}_name`)}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t(`breeds.breed_${breed.id}_name`)}</h2>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full">
                    {t(`breeds.size${getKey(breed.size)}`)}
                  </span>
                </div>

                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="font-medium w-24">{t('breeds.groupColon')}</span>
                    <span>{t(`breeds.group${getKey(breed.group)}`)}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="font-medium w-24">{t('breeds.originColon')}</span>
                    <span>{t(`breeds.breed_${breed.id}_origin`)}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="font-medium w-24">{t('breeds.lifespanColon')}</span>
                    <span>{t(`breeds.breed_${breed.id}_lifespan`)}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3">{t(`breeds.breed_${breed.id}_description`)}</p>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">{t('breeds.temperamentLabel')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      const temperamentCount = parseInt(t(`breeds.breed_${breed.id}_temperament`));
                      return Array.from({ length: Math.min(temperamentCount, 3) }).map((_, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded">
                          {t(`breeds.breed_${breed.id}_temperament_${idx}`)}
                        </span>
                      ));
                    })()}
                    {(() => {
                      const temperamentCount = parseInt(t(`breeds.breed_${breed.id}_temperament`));
                      return temperamentCount > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded">
                          {t('breeds.moreTraits', { count: temperamentCount - 3 })}
                        </span>
                      );
                    })()}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">{t('breeds.exercise')}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{t(`breeds.exercise${getKey(breed.exercise)}`)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">{t('breeds.grooming')}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{t(`breeds.grooming${getKey(breed.grooming)}`)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">{t('breeds.training')}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{t(`breeds.training${getKey(breed.training)}`)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="flex items-center">
                    <span className={breed.goodWith.children ? 'text-green-600' : 'text-red-600'}>
                      {breed.goodWith.children ? '✓' : '✗'}
                    </span>
                    <span className="ml-1 text-gray-600 dark:text-gray-300">{t('breeds.goodWithKids')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className={breed.goodWith.dogs ? 'text-green-600' : 'text-red-600'}>
                      {breed.goodWith.dogs ? '✓' : '✗'}
                    </span>
                    <span className="ml-1 text-gray-600 dark:text-gray-300">{t('breeds.goodWithDogs')}</span>
                  </div>
                </div>

                <Link
                  href={`/breeds/${breed.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  {t('breeds.viewFullDetails')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredBreeds.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">{t('breeds.noResults')}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
