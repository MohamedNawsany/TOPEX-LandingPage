'use client';

import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { AbstractIntlMessages } from 'next-intl';

export function Providers({ 
  children, 
  messages, 
  locale 
}: { 
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}) {
  return (
    <ThemeProvider 
      attribute="class" 
      enableSystem={false} 
      defaultTheme="light"
      storageKey="theme"
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}