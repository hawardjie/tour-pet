'use client';

import { useTheme } from './ThemeProvider';
import { useTranslations } from 'next-intl';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  const themes = [
    {
      value: 'light' as const,
      label: t('settings.themeLight'),
      description: t('settings.themeLightDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      value: 'dark' as const,
      label: t('settings.themeDark'),
      description: t('settings.themeDarkDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
    },
    {
      value: 'system' as const,
      label: t('settings.themeSystem'),
      description: t('settings.themeSystemDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {themes.map((themeOption) => (
        <button
          key={themeOption.value}
          onClick={() => setTheme(themeOption.value)}
          className={`px-6 py-4 rounded-lg font-medium transition text-left border-2 ${
            theme === themeOption.value
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={theme === themeOption.value ? 'text-white' : 'text-gray-600 dark:text-gray-400'}>
                {themeOption.icon}
              </div>
              <div>
                <div className="font-semibold">{themeOption.label}</div>
                <div className={`text-sm ${theme === themeOption.value ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                  {themeOption.description}
                </div>
              </div>
            </div>
            {theme === themeOption.value && (
              <span className="ml-2 text-white">✓</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
