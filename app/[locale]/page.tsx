import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1920&h=600&fit=crop&crop=center"
          alt="Adorable puppies with their mother"
          fill
          className="object-cover object-center brightness-75"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {t('home.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/services/booking" className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg text-sm sm:text-base">
              {t('home.bookService')}
            </Link>
            <Link href="/breeds" className="bg-white text-blue-600 border-2 border-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition shadow-lg text-sm sm:text-base">
              {t('home.exploreBreeds')}
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">{t('home.meetOurDogs')}</h2>
          <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 px-4">{t('home.meetOurDogsDesc')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="relative h-40 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
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
      <section className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">{t('home.ourServices')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-48 sm:h-52">
                <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop&crop=faces"
                  alt="Dog sitting service"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('home.dogSitting')}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {t('home.dogSittingDesc')}
                </p>
                <Link href="/services/sitting" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base inline-block">
                  {t('home.learnMore')} →
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('home.dogWalking')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('home.dogWalkingDesc')}
                </p>
                <Link href="/services/walking" className="text-blue-600 hover:text-blue-700 font-medium">
                  {t('home.learnMore')} →
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('home.easyBooking')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">{t('home.knowledgeBase')}</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            {t('home.knowledgeBaseDesc')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/breeds" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🐕</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.breedsCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.breedsCardDesc')}
              </p>
            </Link>

            <Link href="/behavior" className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.behaviorCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.behaviorCardDesc')}
              </p>
            </Link>

            <Link href="/training" className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.trainingCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.trainingCardDesc')}
              </p>
            </Link>

            <Link href="/nutrition" className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🥘</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.nutritionCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.nutritionCardDesc')}
              </p>
            </Link>

            <Link href="/health" className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.healthCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.healthCardDesc')}
              </p>
            </Link>

            <Link href="/care" className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.careCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.careCardDesc')}
              </p>
            </Link>

            <Link href="/service-dogs" className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🦮</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.serviceDogsCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.serviceDogsCardDesc')}
              </p>
            </Link>

            <Link href="/faq" className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">❓</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.faqCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.faqCardDesc')}
              </p>
            </Link>

            <Link href="/tools" className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900 dark:to-cyan-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.toolsCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.toolsCardDesc')}
              </p>
            </Link>

            <Link href="/microchip" className="p-6 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900 dark:to-sky-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">💉</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.microchipCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.microchipCardDesc')}
              </p>
            </Link>

            <Link href="/adoption" className="p-6 bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900 dark:to-rose-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.adoptionCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.adoptionCardDesc')}
              </p>
            </Link>

            <Link href="/lost-found" className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.lostFoundCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('home.lostFoundCardDesc')}
              </p>
            </Link>

            <Link href="/vaccinations" className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">💉</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('home.vaccinationsCardTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
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
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">{t('home.testimonialsTitle')}</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">{t('home.testimonialsSubtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">{t('home.testimonial1Name')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.testimonial1Breed')}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">&quot;{t('home.testimonial1Text')}&quot;</p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">{t('home.testimonial2Name')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.testimonial2Breed')}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">&quot;{t('home.testimonial2Text')}&quot;</p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">{t('home.testimonial3Name')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.testimonial3Breed')}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">&quot;{t('home.testimonial3Text')}&quot;</p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{t('home.whyChooseUs')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('home.professionalCare')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.professionalCareDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('home.expertKnowledge')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.expertKnowledgeDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('home.easyToUse')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
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
            <Link href="/services/booking" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:bg-blue-900 transition">
              {t('home.bookService')}
            </Link>
            <Link href="/breeds" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition">
              {t('home.exploreKnowledgeBase')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Terms & Privacy Links */}
      <Footer />
    </div>
  );
}
