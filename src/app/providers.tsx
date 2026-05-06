'use client';

import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';

export function Providers({ 
  children, 
  messages, 
  locale 
}: { 
  children: React.ReactNode;
  messages: any;
  locale: string;
}) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}