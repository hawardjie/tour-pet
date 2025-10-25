'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { initializeUserPreferences } from '@/lib/services/user-preferences-service';

export default function Navigation() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize language preference on mount
  useEffect(() => {
    const userId = session?.user?.id;
    const savedLocale = initializeUserPreferences(userId);

    // If saved locale differs from current locale, redirect
    if (savedLocale && savedLocale !== locale) {
      const segments = pathname.split('/');
      segments[1] = savedLocale;
      router.replace(segments.join('/'));
    }
  }, [session]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-48.png" alt="TourPet Logo" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12" />
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">TourPet</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href={`/${locale}/breeds`} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">{t('common.breeds')}</Link>
            <Link href={`/${locale}/care`} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">{t('home.careGuide')}</Link>
            <Link href={`/${locale}/behavior`} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">{t('home.behaviorNav')}</Link>
            <Link href={`/${locale}/nutrition`} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">{t('home.nutritionNav')}</Link>
            <Link href={`/${locale}/services`} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">{t('common.services')}</Link>
            <Link href={`/${locale}/providers`} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">{t('provider.findProviders')}</Link>
            <Link href={`/${locale}/provider/register`} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700">{t('provider.becomeProvider')}</Link>
            <Link href={`/${locale}/faq`} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">{t('home.faqNav')}</Link>

            <Link
              href={`/${locale}/settings`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors"
              title="Settings"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href={`/${locale}/breeds`} className="block text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t('common.breeds')}
            </Link>
            <Link href={`/${locale}/care`} className="block text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t('home.careGuide')}
            </Link>
            <Link href={`/${locale}/behavior`} className="block text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t('home.behaviorNav')}
            </Link>
            <Link href={`/${locale}/nutrition`} className="block text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t('home.nutritionNav')}
            </Link>
            <Link href={`/${locale}/services`} className="block text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t('common.services')}
            </Link>
            <Link href={`/${locale}/providers`} className="block text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t('provider.findProviders')}
            </Link>
            <Link href={`/${locale}/provider/register`} className="block text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium border border-blue-600 dark:border-blue-400" onClick={() => setMobileMenuOpen(false)}>
              {t('provider.becomeProvider')}
            </Link>
            <Link href={`/${locale}/faq`} className="block text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t('home.faqNav')}
            </Link>

            <Link href={`/${locale}/settings`} className="block text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium border-t border-gray-200 dark:border-gray-700 mt-2 pt-2" onClick={() => setMobileMenuOpen(false)}>
              Settings
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
