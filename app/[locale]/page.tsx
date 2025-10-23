'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">🐾 TourPet</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/breeds" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('common.breeds')}</Link>
              <Link href="/care" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('home.careGuide')}</Link>
              <Link href="/behavior" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('home.behaviorNav')}</Link>
              <Link href="/nutrition" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('home.nutritionNav')}</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('common.services')}</Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{t('home.faqNav')}</Link>
              <Link
                href="/settings"
                className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors"
                title="Settings"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&h=600&fit=crop&crop=faces"
          alt="Happy dogs"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/booking" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              {t('home.bookService')}
            </Link>
            <Link href="/breeds" className="bg-white text-blue-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('home.exploreBreeds')}
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{t('home.meetOurDogs')}</h2>
          <p className="text-center text-gray-600 mb-12">{t('home.meetOurDogsDesc')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop&crop=faces"
                alt="Golden Retriever"
                fill
                className="object-cover object-center hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&crop=faces"
                alt="Labrador"
                fill
                className="object-cover object-center hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop&crop=faces"
                alt="French Bulldog"
                fill
                className="object-cover object-center hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=300&fit=crop&crop=faces"
                alt="Beagle"
                fill
                className="object-cover object-center hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop&crop=faces"
                alt="German Shepherd"
                fill
                className="object-cover object-center hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop&crop=faces"
                alt="Poodle"
                fill
                className="object-cover object-center hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=300&fit=crop&crop=faces"
                alt="Bulldog"
                fill
                className="object-cover object-center hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&h=300&fit=crop&crop=faces"
                alt="Puppy"
                fill
                className="object-cover object-center hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Images */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('home.ourServices')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop&crop=faces"
                  alt="Dog sitting service"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.dogSitting')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('home.dogSittingDesc')}
                </p>
                <Link href="/services/sitting" className="text-blue-600 hover:text-blue-700 font-medium">
                  {t('home.learnMore')} →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=400&h=300&fit=crop&crop=faces"
                  alt="Dog walking service"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.dogWalking')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('home.dogWalkingDesc')}
                </p>
                <Link href="/services/walking" className="text-blue-600 hover:text-blue-700 font-medium">
                  {t('home.learnMore')} →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop&crop=faces"
                  alt="Easy booking"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.easyBooking')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('home.easyBookingDesc')}
                </p>
                <Link href="/services/booking" className="text-blue-600 hover:text-blue-700 font-medium">
                  {t('home.bookNow')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{t('home.knowledgeBase')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('home.knowledgeBaseDesc')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/breeds" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🐕</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.breedsCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.breedsCardDesc')}
              </p>
            </Link>

            <Link href="/behavior" className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.behaviorCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.behaviorCardDesc')}
              </p>
            </Link>

            <Link href="/training" className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.trainingCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.trainingCardDesc')}
              </p>
            </Link>

            <Link href="/nutrition" className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🥘</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.nutritionCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.nutritionCardDesc')}
              </p>
            </Link>

            <Link href="/health" className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.healthCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.healthCardDesc')}
              </p>
            </Link>

            <Link href="/care" className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.careCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.careCardDesc')}
              </p>
            </Link>

            <Link href="/service-dogs" className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🦮</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.serviceDogsCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.serviceDogsCardDesc')}
              </p>
            </Link>

            <Link href="/faq" className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">❓</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.faqCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.faqCardDesc')}
              </p>
            </Link>

            <Link href="/tools" className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.toolsCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.toolsCardDesc')}
              </p>
            </Link>

            <Link href="/microchip" className="p-6 bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">💉</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.microchipCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.microchipCardDesc')}
              </p>
            </Link>

            <Link href="/adoption" className="p-6 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.adoptionCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.adoptionCardDesc')}
              </p>
            </Link>

            <Link href="/lost-found" className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.lostFoundCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.lostFoundCardDesc')}
              </p>
            </Link>

            <Link href="/vaccinations" className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">💉</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('home.vaccinationsCardTitle')}</h3>
              <p className="text-sm text-gray-600">
                {t('home.vaccinationsCardDesc')}
              </p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link href="/gallery" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
              {t('home.viewFullGallery')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{t('home.stat1Number')}</div>
              <div className="text-blue-100">{t('home.stat1Label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('home.stat2Number')}</div>
              <div className="text-blue-100">{t('home.stat2Label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('home.stat3Number')}</div>
              <div className="text-blue-100">{t('home.stat3Label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('home.stat4Number')}</div>
              <div className="text-blue-100">{t('home.stat4Label')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{t('home.testimonialsTitle')}</h2>
          <p className="text-center text-gray-600 mb-12">{t('home.testimonialsSubtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&h=100&fit=crop&crop=faces"
                    alt="Golden Retriever Max"
                    fill
                    className="object-cover object-center"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('home.testimonial1Name')}</h3>
                  <p className="text-sm text-gray-600">{t('home.testimonial1Breed')}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{t('home.testimonial1Text')}&quot;</p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=100&h=100&fit=crop&crop=faces"
                    alt="French Bulldog Luna"
                    fill
                    className="object-cover object-center"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('home.testimonial2Name')}</h3>
                  <p className="text-sm text-gray-600">{t('home.testimonial2Breed')}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{t('home.testimonial2Text')}&quot;</p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=100&h=100&fit=crop&crop=faces"
                    alt="Labrador Buddy"
                    fill
                    className="object-cover object-center"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('home.testimonial3Name')}</h3>
                  <p className="text-sm text-gray-600">{t('home.testimonial3Breed')}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{t('home.testimonial3Text')}&quot;</p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('home.whyChooseUs')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.professionalCare')}</h3>
              <p className="text-gray-600">
                {t('home.professionalCareDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.expertKnowledge')}</h3>
              <p className="text-gray-600">
                {t('home.expertKnowledgeDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.easyToUse')}</h3>
              <p className="text-gray-600">
                {t('home.easyToUseDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t('home.readyToGive')}</h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('home.readyToGiveDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/booking" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              {t('home.bookService')}
            </Link>
            <Link href="/breeds" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition">
              {t('home.exploreKnowledgeBase')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🐾 TourPet</h3>
            <p className="text-gray-400">
              {t('home.footerTagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('home.footerServicesTitle')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/sitting" className="hover:text-white">{t('home.footerDogSitting')}</Link></li>
              <li><Link href="/services/walking" className="hover:text-white">{t('home.footerDogWalking')}</Link></li>
              <li><Link href="/services/booking" className="hover:text-white">{t('home.footerBookNow')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('home.footerResourcesTitle')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/breeds" className="hover:text-white">{t('home.footerBreeds')}</Link></li>
              <li><Link href="/care" className="hover:text-white">{t('home.footerCareGuide')}</Link></li>
              <li><Link href="/behavior" className="hover:text-white">{t('home.footerBehavior')}</Link></li>
              <li><Link href="/nutrition" className="hover:text-white">{t('home.footerNutrition')}</Link></li>
              <li><Link href="/faq" className="hover:text-white">{t('home.footerFAQ')}</Link></li>
              <li><Link href="/gallery" className="hover:text-white">{t('home.footerGallery')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('home.footerContactTitle')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('home.footerEmail')}</li>
              <li>{t('home.footerPhone')}</li>
              <li>{t('home.footerHours')}</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{t('home.footerCopyright')}</p>
        </div>
      </footer>
    </div>
  );
}
