'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Theme, applyTheme } from '@/lib/services/theme-service';
import { getSavedThemePreference, saveThemePreference } from '@/lib/services/user-preferences-service';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [theme, setThemeState] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize theme on mount
    const userId = session?.user?.id;
    const savedTheme = getSavedThemePreference(userId);
    const initialTheme = savedTheme || 'system';

    setThemeState(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [session]);

  useEffect(() => {
    if (mounted && theme === 'system') {
      applyTheme('system');
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    const userId = session?.user?.id;
    setThemeState(newTheme);
    saveThemePreference(newTheme, userId);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
