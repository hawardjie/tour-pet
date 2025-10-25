'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function SettingsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&h=400&fit=crop&crop=faces"
          alt="Settings"
          fill
          className="object-cover object-center brightness-80"
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
        {/* Theme Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('settings.themeSettings')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('settings.selectTheme')}
          </p>

          <ThemeSwitcher />
        </div>

        {/* Language Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('settings.languageSettings')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('settings.selectLanguage')}
          </p>

          <LanguageSwitcher />
        </div>
      </div>
      <Footer />
    </div>
  );
}
