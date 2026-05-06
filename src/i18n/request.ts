import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { locales, defaultLocale } from './config';

async function getLocale(): Promise<string> {
  // Check cookie first
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  if (localeCookie && locales.includes(localeCookie.value as any)) {
    return localeCookie.value;
  }
  
  // Check browser language
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];
    if (locales.includes(preferredLocale as any)) {
      return preferredLocale;
    }
  }
  
  return defaultLocale;
}

export default getRequestConfig(async () => {
  const locale = await getLocale();
  
  try {
    const messages = (await import(`./${locale}.json`)).default;
    return {
      locale,
      messages,
      timeZone: 'Africa/Cairo',
      now: new Date(),
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    const fallbackMessages = (await import(`./en.json`)).default;
    return {
      locale: defaultLocale,
      messages: fallbackMessages,
      timeZone: 'Africa/Cairo',
      now: new Date(),
    };
  }
});