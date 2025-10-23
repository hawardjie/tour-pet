'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, localeNames, type Locale } from '@/i18n';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    // Get the current path without the locale prefix
    let pathWithoutLocale = pathname;

    // Check if the path starts with a locale prefix
    for (const locale of locales) {
      if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
        pathWithoutLocale = pathname.replace(`/${locale}`, '');
        break;
      }
    }

    // Ensure path starts with /
    if (!pathWithoutLocale) {
      pathWithoutLocale = '/';
    }

    // Navigate to the new locale - always include locale prefix
    router.push(`/${newLocale}${pathWithoutLocale}`);

    // Refresh to ensure translations are loaded
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-3">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`px-6 py-3 rounded-lg font-medium transition text-left ${
            currentLocale === locale
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>{localeNames[locale as Locale]}</span>
            {currentLocale === locale && (
              <span className="ml-2">✓</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
