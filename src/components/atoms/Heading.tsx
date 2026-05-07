'use client';

import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  color?: 'primary' | 'secondary' | 'white' | 'muted';
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'semibold' | 'bold';
  gutter?: boolean;
  id?: string;
   style?: React.CSSProperties; 
}

const getFontSize = (level: string, isMobile: boolean = false) => {
  const sizes = {
    h1: isMobile ? 'var(--text-3xl)' : 'var(--text-5xl)',
    h2: isMobile ? 'var(--text-2xl)' : 'var(--text-4xl)',
    h3: isMobile ? 'var(--text-xl)' : 'var(--text-3xl)',
    h4: isMobile ? 'var(--text-xl)' : 'var(--text-2xl)',
    h5: isMobile ? 'var(--text-lg)' : 'var(--text-xl)',
    h6: isMobile ? 'var(--text-base)' : 'var(--text-lg)',
  };
  return sizes[level as keyof typeof sizes];
};

const getFontWeight = (level: string, weight?: string) => {
  if (weight) {
    return weight === 'bold' ? 'var(--font-bold)' : 
           weight === 'semibold' ? 'var(--font-semibold)' : 
           'var(--font-regular)';
  }
  return ['h1', 'h2'].includes(level) ? 'var(--font-bold)' : 'var(--font-semibold)';
};

const getColor = (color: string) => {
  const colors = {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-secondary)',
    white: 'var(--color-text-white)',
    muted: 'var(--color-text-muted)',
  };
  return colors[color as keyof typeof colors];
};

export default function Heading({
  children,
  level = 'h2',
  className = '',
  color = 'primary',
  align = 'left',
  weight,
  gutter = false,
  id,
  style,
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag
      id={id}
      className={className}
      style={{
        fontSize: getFontSize(level),
        fontWeight: getFontWeight(level, weight),
        color: getColor(color),
        textAlign: align,
        fontFamily: 'var(--font-heading)',
        lineHeight: 'var(--leading-tight)',
        marginBottom: gutter ? 'var(--space-md)' : 0,
        marginTop: 0,
        ...style,
      }}
    >
      {children}
      
      <style jsx>{`
        @media (max-width: 768px) {
          ${Tag} {
            font-size: ${getFontSize(level, true)};
          }
        }
      `}</style>
    </Tag>
  );
}