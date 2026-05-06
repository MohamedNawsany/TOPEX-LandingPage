'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router        = useRouter();
  const [hoveredEn, setHoveredEn] = useState(false);
  const [hoveredAr, setHoveredAr] = useState(false);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    setCookie('NEXT_LOCALE', newLocale);
    router.refresh();
  };

  const activeStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-primary)',
    color:           'var(--color-text-white)',
    boxShadow:       'var(--shadow-md)',
  };

  const inactiveStyle = (hovered: boolean): React.CSSProperties => ({
    backgroundColor: hovered ? 'var(--color-primary)'       : 'var(--color-primary-light)',
    color:           hovered ? 'var(--color-text-white)'    : 'var(--color-text-secondary)',
  });

  const baseStyle: React.CSSProperties = {
    padding:      'var(--space-xs) var(--space-base)',
    borderRadius: 'var(--radius-md)',
    fontSize:     'var(--text-sm)',
    fontWeight:   'var(--font-semibold)',
    fontFamily:   'var(--font-sans)',
    transition:   `all var(--motion-normal) var(--ease-out)`,
    cursor:       'pointer',
    border:       'none',
    outline:      'none',
  };

  return (
    <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
      <button
        onClick={() => switchLanguage('en')}
        onMouseEnter={() => setHoveredEn(true)}
        onMouseLeave={() => setHoveredEn(false)}
        style={{
          ...baseStyle,
          ...(currentLocale === 'en' ? activeStyle : inactiveStyle(hoveredEn)),
        }}
      >
        English
      </button>

      <button
        onClick={() => switchLanguage('ar')}
        onMouseEnter={() => setHoveredAr(true)}
        onMouseLeave={() => setHoveredAr(false)}
        style={{
          ...baseStyle,
          ...(currentLocale === 'ar' ? activeStyle : inactiveStyle(hoveredAr)),
        }}
      >
        العربية
      </button>
    </div>
  );
}