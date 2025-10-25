/**
 * User Preferences Service
 * Manages user preferences including language and theme settings
 */

import { Locale } from '@/i18n';
import { Theme } from './theme-service';

export interface UserPreferences {
  userId?: string; // Optional - for logged-in users
  locale: Locale;
  theme?: Theme; // User's preferred theme
  updatedAt: string;
}

const STORAGE_KEY = 'tourpet_user_preferences';
const LOCALE_COOKIE = 'NEXT_LOCALE';

/**
 * Get all user preferences from storage
 */
function getAllPreferences(): Record<string, UserPreferences> {
  if (typeof window === 'undefined') return {};

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error reading user preferences:', error);
    return {};
  }
}

/**
 * Save all user preferences to storage
 */
function saveAllPreferences(data: Record<string, UserPreferences>): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving user preferences:', error);
  }
}

/**
 * Get user preferences for a specific user or guest
 */
export function getUserPreferences(userId?: string): UserPreferences | null {
  const allData = getAllPreferences();
  const key = userId || 'guest';
  return allData[key] || null;
}

/**
 * Save language preference for a user
 */
export function saveLanguagePreference(locale: Locale, userId?: string): void {
  const allData = getAllPreferences();
  const key = userId || 'guest';

  allData[key] = {
    userId,
    locale,
    updatedAt: new Date().toISOString(),
  };

  saveAllPreferences(allData);

  // Also save to cookie for SSR
  setLocaleCookie(locale);
}

/**
 * Get saved language preference
 */
export function getSavedLanguagePreference(userId?: string): Locale | null {
  const preferences = getUserPreferences(userId);
  return preferences?.locale || null;
}

/**
 * Set locale cookie for SSR
 */
export function setLocaleCookie(locale: Locale): void {
  if (typeof document === 'undefined') return;

  // Set cookie with 1 year expiration
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
}

/**
 * Get locale from cookie
 */
export function getLocaleFromCookie(): Locale | null {
  if (typeof document === 'undefined') return null;

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === LOCALE_COOKIE) {
      return value as Locale;
    }
  }
  return null;
}

/**
 * Save theme preference for a user
 */
export function saveThemePreference(theme: Theme, userId?: string): void {
  const allData = getAllPreferences();
  const key = userId || 'guest';

  // Get existing preferences or create new
  const existing = allData[key] || {
    locale: 'en' as Locale,
    updatedAt: new Date().toISOString(),
  };

  allData[key] = {
    ...existing,
    theme,
    userId,
    updatedAt: new Date().toISOString(),
  };

  saveAllPreferences(allData);
}

/**
 * Get saved theme preference
 */
export function getSavedThemePreference(userId?: string): Theme | null {
  const preferences = getUserPreferences(userId);
  return preferences?.theme || null;
}

/**
 * Initialize user preferences on app load
 * Returns the preferred locale if found
 */
export function initializeUserPreferences(userId?: string): Locale | null {
  // First check localStorage
  const savedPreference = getSavedLanguagePreference(userId);
  if (savedPreference) {
    setLocaleCookie(savedPreference);
    return savedPreference;
  }

  // Then check cookie
  const cookieLocale = getLocaleFromCookie();
  if (cookieLocale) {
    return cookieLocale;
  }

  return null;
}
