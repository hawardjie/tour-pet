/**
 * Theme Service
 * Manages user theme preferences (light, dark, system)
 */

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'tourpet_theme';

/**
 * Get the saved theme preference from localStorage
 */
export function getSavedTheme(): Theme | null {
  if (typeof window === 'undefined') return null;

  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
      return savedTheme;
    }
    return null;
  } catch (error) {
    console.error('Error reading theme preference:', error);
    return null;
  }
}

/**
 * Save theme preference to localStorage
 */
export function saveTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.error('Error saving theme preference:', error);
  }
}

/**
 * Get the system's preferred color scheme
 */
export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Get the effective theme (resolves 'system' to actual theme)
 */
export function getEffectiveTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
}

/**
 * Apply theme to the document
 */
export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  const effectiveTheme = getEffectiveTheme(theme);

  if (effectiveTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * Initialize theme on app load
 * Returns the theme to use
 */
export function initializeTheme(): Theme {
  const savedTheme = getSavedTheme();
  const theme = savedTheme || 'system';

  applyTheme(theme);

  return theme;
}
