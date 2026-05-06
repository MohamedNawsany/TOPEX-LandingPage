import React, { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles: Record<string, React.CSSProperties> = {
  none: { padding: 0 },
  sm:   { padding: 'var(--space-md)' },
  md:   { padding: 'var(--space-xl)' },
  lg:   { padding: 'var(--space-5xl)' },
};

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        backgroundColor: 'var(--color-bg)',
        borderRadius:    'var(--radius-xl)',
        boxShadow:       hovered ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
        transform:       hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition:      hover
          ? `all var(--motion-normal) var(--ease-out)`
          : undefined,
        ...paddingStyles[padding],
      }}
    >
      {children}
    </div>
  );
}