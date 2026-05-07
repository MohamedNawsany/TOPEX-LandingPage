import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'small' | 'large' | 'caption';
  color?: 'primary' | 'secondary' | 'muted' | 'white';
  className?: string;
  align?: 'left' | 'center' | 'right';
  as?: 'p' | 'span' | 'div';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  style?: React.CSSProperties;
}

const variantStyles: Record<string, React.CSSProperties> = {
  body:    { fontSize: 'var(--text-base)' },
  small:   { fontSize: 'var(--text-sm)' },
  large:   { fontSize: 'var(--text-lg)' },
  caption: { fontSize: 'var(--text-xs)' },
};

const colorStyles: Record<string, React.CSSProperties> = {
  primary:   { color: 'var(--color-text-primary)' },
  secondary: { color: 'var(--color-text-secondary)' },
  muted:     { color: 'var(--color-text-muted)' },
  white:     { color: 'var(--color-text-white)' },
};

const weightStyles: Record<string, React.CSSProperties> = {
  normal:   { fontWeight: 'var(--font-regular)' },
  medium:   { fontWeight: '500' },
  semibold: { fontWeight: 'var(--font-semibold)' },
  bold:     { fontWeight: 'var(--font-bold)' },
};

export default function Text({
  children,
  variant = 'body',
  color = 'secondary',
  className = '',
  align = 'left',
  as: Component = 'p',
  weight = 'normal',
  style, 
}: TextProps) {
  return (
    <Component
      className={className}
      style={{
        ...variantStyles[variant],
        ...colorStyles[color],
        ...weightStyles[weight],
        fontFamily:  'var(--font-sans)',
        lineHeight:  'var(--leading-relaxed)',
        textAlign:   align,
        margin:      0,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}