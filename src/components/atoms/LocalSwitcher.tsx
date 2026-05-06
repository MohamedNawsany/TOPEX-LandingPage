'use client';

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

type Props = {
  variant?: 'fixed' | 'navbar';
};

export default function LocaleSwitcher({ variant = 'navbar' }: Props) {
  const currentLocale = useLocale();
  const router = useRouter();
  const [hoveredFixed, setHoveredFixed] = useState(false);
  const [hoveredEn, setHoveredEn] = useState(false);
  const [hoveredAr, setHoveredAr] = useState(false);

  useEffect(() => {
    const dir = currentLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", currentLocale);
  }, [currentLocale]);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    setCookie('NEXT_LOCALE', newLocale);
    router.refresh();
  };

  if (variant === 'fixed') {
    const nextLocale = currentLocale === "en" ? "ar" : "en";
    return (
      <button
        onClick={() => switchLanguage(nextLocale)}
        onMouseEnter={() => setHoveredFixed(true)}
        onMouseLeave={() => setHoveredFixed(false)}
        style={{
          position:        'fixed',
          bottom:          'var(--space-md)',
          right:           'var(--space-md)',
          width:           '56px',
          height:          '56px',
          borderRadius:    'var(--radius-full)',
          backgroundColor: 'var(--color-primary)',
          color:           'var(--color-text-white)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          fontSize:        'var(--text-base)',
          fontFamily:      'var(--font-sans)',
          fontWeight:      'var(--font-semibold)',
          boxShadow:       'var(--shadow-xl)',
          transform:       hoveredFixed ? 'scale(1.05)' : 'scale(1)',
          transition:      `transform var(--motion-normal) var(--ease-out)`,
          cursor:          'pointer',
          zIndex:          50,
          border:          'none',
          outline:         'none',
        }}
      >
        {currentLocale === "en" ? "AR" : "EN"}
      </button>
    );
  }

  const activeStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-primary)',
    color:           'var(--color-text-white)',
  };

  const inactiveStyle = (hovered: boolean): React.CSSProperties => ({
    backgroundColor: hovered ? 'var(--color-primary)' : 'var(--color-primary-light)',
    color:           hovered ? 'var(--color-text-white)' : 'var(--color-text-secondary)',
  });

  return (
    <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
      <button
        onClick={() => switchLanguage('en')}
        onMouseEnter={() => setHoveredEn(true)}
        onMouseLeave={() => setHoveredEn(false)}
        style={{
          padding:      'var(--space-xs) var(--space-base)',
          borderRadius: 'var(--radius-md)',
          fontFamily:   'var(--font-sans)',
          fontWeight:   'var(--font-semibold)',
          fontSize:     'var(--text-sm)',
          transition:   `all var(--motion-normal) var(--ease-out)`,
          cursor:       'pointer',
          border:       'none',
          outline:      'none',
          ...(currentLocale === 'en' ? activeStyle : inactiveStyle(hoveredEn)),
        }}
      >
        EN
      </button>

      <button
        onClick={() => switchLanguage('ar')}
        onMouseEnter={() => setHoveredAr(true)}
        onMouseLeave={() => setHoveredAr(false)}
        style={{
          padding:      'var(--space-xs) var(--space-base)',
          borderRadius: 'var(--radius-md)',
          fontFamily:   'var(--font-sans)',
          fontWeight:   'var(--font-semibold)',
          fontSize:     'var(--text-sm)',
          transition:   `all var(--motion-normal) var(--ease-out)`,
          cursor:       'pointer',
          border:       'none',
          outline:      'none',
          ...(currentLocale === 'ar' ? activeStyle : inactiveStyle(hoveredAr)),
        }}
      >
        AR
      </button>
    </div>
  );
}