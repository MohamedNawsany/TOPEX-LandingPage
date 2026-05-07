import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  background?: 'primary' | 'secondary' | 'card' | 'transparent';
}

const spacingMap = {
  sm: { paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' },
  md: { paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-5xl)' },
  lg: { paddingTop: 'var(--space-6xl)', paddingBottom: 'var(--space-6xl)' },
  xl: { paddingTop: 'var(--space-7xl)', paddingBottom: 'var(--space-7xl)' },
  none: { paddingTop: '0', paddingBottom: '0' },
};

const backgroundMap = {
  primary: 'var(--color-bg)',
  secondary: 'var(--color-bg-alt)',
  card: 'var(--color-card-bg)',
  transparent: 'transparent',
};

export default function Section({ 
  children, 
  id, 
  className = '', 
  spacing = 'lg',
  background = 'primary' 
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        backgroundColor: backgroundMap[background],
        ...spacingMap[spacing],
        transition: 'background-color var(--motion-normal) var(--ease-out)',
      }}
    >
      {children}
    </section>
  );
}