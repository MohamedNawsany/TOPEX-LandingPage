import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  color?: 'primary' | 'secondary' | 'white';
  align?: 'left' | 'center' | 'right';
}

const levelStyles: Record<string, React.CSSProperties> = {
  h1: { fontSize: 'var(--text-5xl)',  fontWeight: 'var(--font-bold)' },
  h2: { fontSize: 'var(--text-4xl)',  fontWeight: 'var(--font-bold)' },
  h3: { fontSize: 'var(--text-3xl)',  fontWeight: 'var(--font-semibold)' },
  h4: { fontSize: 'var(--text-2xl)',  fontWeight: 'var(--font-semibold)' },
  h5: { fontSize: 'var(--text-xl)',   fontWeight: 'var(--font-semibold)' },
  h6: { fontSize: 'var(--text-lg)',   fontWeight: 'var(--font-semibold)' },
};

const colorStyles: Record<string, React.CSSProperties> = {
  primary:   { color: 'var(--color-text-primary)' },
  secondary: { color: 'var(--color-secondary)' },
  white:     { color: 'var(--color-text-white)' },
};

export default function Heading({
  children,
  level = 'h2',
  className = '',
  color = 'primary',
  align = 'left',
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag
      className={className}
      style={{
        ...levelStyles[level],
        ...colorStyles[color],
        fontFamily:  'var(--font-heading)',
        lineHeight:  'var(--leading-tight)',
        textAlign:   align,
        margin:      0,
      }}
    >
      {children}
    </Tag>
  );
}