'use client';

import React, { useState } from 'react';

interface CardProps {
  children: React.ReactNode | ((props: { isHovered: boolean }) => React.ReactNode);
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  textAlign?: 'left' | 'center' | 'right';
  minHeight?: string | number;
}

const paddingStyles: Record<string, React.CSSProperties> = {
  none: { padding: 0 },
  sm:   { padding: 'var(--space-md)' },
  md:   { padding: 'var(--space-xl)' },
  lg:   { padding: 'var(--space-3xl)' },
  xl:   { padding: 'var(--space-5xl)' },
};

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
  textAlign = 'left',
  minHeight,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => hover && setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? 'var(--color-secondary)' : 'var(--color-primary-light)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: isHovered ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: hover ? 'pointer' : 'default',
        transition: hover ? `all var(--motion-normal) var(--ease-out)` : undefined,
        textAlign,
        minHeight: minHeight || 'auto',
        display: 'flex',
        flexDirection: 'column',
        ...paddingStyles[padding],
      }}
    >
      {typeof children === 'function' ? children({ isHovered }) : children}
    </div>
  );
}