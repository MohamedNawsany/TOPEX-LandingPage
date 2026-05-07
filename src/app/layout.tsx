import { Inter, Cairo } from 'next/font/google';
import { Providers } from './providers';
import { getMessages } from 'next-intl/server';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TopEx',
  description: 'TopEx Solutions - ERP System for Small Businesses',
  
};

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get locale from next-intl
  const { getLocale } = await import('next-intl/server');
  const locale = await getLocale();
  
  // Load messages for this locale
  const messages = await getMessages();
  
  const font = locale === 'ar' ? cairo.className : inter.className;

  return (
    <html 
      lang={locale} 
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body className={font} suppressHydrationWarning>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}