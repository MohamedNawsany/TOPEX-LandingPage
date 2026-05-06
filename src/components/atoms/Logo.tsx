'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { fontSize: 'var(--text-xl)' },
  md: { fontSize: 'var(--text-2xl)' },
  lg: { fontSize: 'var(--text-3xl)' },
};

const variantColors = {
  light: { top: 'var(--color-text-white)',   x: 'var(--color-secondary)' },
  dark:  { top: 'var(--color-primary)',       x: 'var(--color-secondary)' },
};

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const locale = useLocale();

  return (
    <Link href={`/${locale}`} style={{ display: 'inline-block', textDecoration: 'none' }}>
      <div
        style={{
          ...sizeStyles[size],
          fontFamily:    'var(--font-heading)',
          fontWeight:    'var(--font-bold)',
          letterSpacing: '-0.02em',
          lineHeight:    1,
        }}
      >
        <span style={{ color: variantColors[variant].top }}>Top</span>
        <span
          className="logo-x"   /* keeps the CSS animation from variables.css */
          style={{ color: variantColors[variant].x }}
        >
          EX
        </span>
      </div>
    </Link>
  );
}