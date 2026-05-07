'use client';

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  as?: 'div' | 'section' | 'article' | 'main';
  id?: string;
}

const paddingConfig = {
  none: {
    px: '0',
    py: '0',
  },
  sm: {
    px: 'px-4 sm:px-6',
    py: 'py-4 sm:py-6',
  },
  md: {
    px: 'px-4 sm:px-6 lg:px-8',
    py: 'py-6 sm:py-8 lg:py-12',
  },
  lg: {
    px: 'px-6 sm:px-8 lg:px-12',
    py: 'py-8 sm:py-12 lg:py-16',
  },
  xl: {
    px: 'px-8 sm:px-12 lg:px-16',
    py: 'py-12 sm:py-16 lg:py-20',
  },
} as const;

export default function Container({ 
  children, 
  className = '', 
  fluid = false,
  padding = 'md',
  as: Component = 'div',
  id,
}: ContainerProps) {
  const paddingStyles = paddingConfig[padding];
  
  return (
    <Component
      id={id}
      className={`
        mx-auto
        transition-all
        duration-var(--motion-normal)
        ease-var(--ease-out)
        ${paddingStyles.px}
        ${paddingStyles.py}
        ${!fluid ? 'max-w-7xl' : 'max-w-full'}
        ${className}
      `}
      style={{
        width: '100%',
      }}
    >
      {children}
    </Component>
  );
}