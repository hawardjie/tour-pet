import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import AuthContext from '@/lib/auth-context';
import { ThemeProvider } from '@/components/ThemeProvider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params before accessing its properties (Next.js 15 requirement)
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <AuthContext>
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
    </AuthContext>
  );
}
