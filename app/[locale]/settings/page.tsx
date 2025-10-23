import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function SettingsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">TourPet</Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">← {t('common.home')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&h=400&fit=crop&crop=faces"
          alt="Settings"
          fill
          className="object-cover object-center brightness-50"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('settings.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('settings.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Language Settings */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('settings.languageSettings')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('settings.selectLanguage')}
          </p>

          <LanguageSwitcher />
        </div>

        {/* Additional Settings Sections (Placeholder) */}
        {/* <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Settings Coming Soon
          </h2>
          <p className="text-gray-600">
            Additional personalization options will be available in future updates.
          </p>
        </div> */}
      </div>
    </div>
  );
}
