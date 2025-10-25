import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { dogBreeds } from '@/data/breeds';
import { getBreedGrowthData } from '@/data/breedGrowth';
import BreedGrowthCharts from '@/components/BreedGrowthCharts';

interface PageProps {
  params: Promise<{ id: string; locale: string }>;
}

export async function generateStaticParams() {
  return dogBreeds.map((breed) => ({
    id: breed.id,
  }));
}

export default async function BreedDetailPage({ params }: PageProps) {
  const { id } = await params;
  const breed = dogBreeds.find(b => b.id === id);

  if (!breed) {
    notFound();
  }

  const t = await getTranslations();

  // Get growth data for this breed
  const growthData = getBreedGrowthData(id);

  // Helper function to get size/group translation keys
  const getKey = (value: string): string => {
    return value.replace(/[\s-]+/g, '');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-bold">{t(`breeds.breed_${id}_name`)}</h1>
            <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-lg">
              {t(`breeds.size${getKey(breed.size)}`)}
            </span>
          </div>
          <p className="text-xl text-blue-100">{t(`breeds.group${getKey(breed.group)}`)} {t('breedDetail.group')} • {t(`breeds.breed_${id}_origin`)}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breed Hero Image */}
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src={breed.imageUrl}
            alt={t(`breeds.breed_${id}_name`)}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('breedDetail.overview')}</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{t(`breeds.breed_${id}_description`)}</p>
            </div>

            {/* Temperament */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('breedDetail.temperament')}</h2>
              <div className="flex flex-wrap gap-3">
                {breed.temperament.map((trait, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full font-medium">
                    {t(`breeds.breed_${id}_temperament_${idx}`)}
                  </span>
                ))}
              </div>
            </div>

            {/* Characteristics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('breedDetail.characteristics')}</h2>
              <div className="space-y-4">
                {Object.entries(breed.characteristics).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-200 capitalize">
                        {t(`breeds.breed_${id}_characteristic_${key}`)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">{value}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all"
                        style={{ width: `${value * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Notes */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('breedDetail.careNotes')}</h2>
              <ul className="space-y-3">
                {breed.careNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-200">{t(`breeds.breed_${id}_careNote_${idx}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth Charts - Only show if data is available */}
            {growthData && (
              <BreedGrowthCharts
                growthData={growthData}
                breedName={t(`breeds.breed_${id}_name`)}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('breedDetail.quickFacts')}</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('breedDetail.lifespan')}</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{t(`breeds.breed_${id}_lifespan`)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('breedDetail.exerciseNeeds')}</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{t(`breeds.breed_${id}_exercise`)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('breedDetail.groomingNeeds')}</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{t(`breeds.breed_${id}_grooming`)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('breedDetail.trainability')}</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{t(`breeds.breed_${id}_training`)}</div>
                </div>
              </div>
            </div>

            {/* Good With */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('breedDetail.goodWith')}</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-200">{t('breedDetail.children')}</span>
                  <span className={breed.goodWith.children ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {breed.goodWith.children ? t('breedDetail.yes') : t('breedDetail.no')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-200">{t('breedDetail.otherDogs')}</span>
                  <span className={breed.goodWith.dogs ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {breed.goodWith.dogs ? t('breedDetail.yes') : t('breedDetail.no')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-200">{t('breedDetail.cats')}</span>
                  <span className={breed.goodWith.cats ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {breed.goodWith.cats ? t('breedDetail.yes') : t('breedDetail.no')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-200">{t('breedDetail.strangers')}</span>
                  <span className={breed.goodWith.strangers ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {breed.goodWith.strangers ? t('breedDetail.yes') : t('breedDetail.no')}
                  </span>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('breedDetail.relatedResources')}</h2>
              <div className="space-y-2">
                <Link href="/care" className="block text-blue-600 hover:text-blue-700 font-medium">
                  {t('breedDetail.careTipsGuidelines')}
                </Link>
                <Link href="/nutrition" className="block text-blue-600 hover:text-blue-700 font-medium">
                  {t('breedDetail.nutritionGuide')}
                </Link>
                <Link href="/behavior" className="block text-blue-600 hover:text-blue-700 font-medium">
                  {t('breedDetail.behaviorTraining')}
                </Link>
                <Link href="/services/booking" className="block text-blue-600 hover:text-blue-700 font-medium">
                  {t('breedDetail.bookDogCareServices')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
