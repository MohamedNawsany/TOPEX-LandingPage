'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-text-white)',
  },
  secondary: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-text-white)',
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    border: 'var(--border-width-md) solid var(--color-primary)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-secondary)',
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: {
    padding: 'var(--space-sm) var(--space-md)',
    fontSize: 'var(--text-sm)',
    borderRadius: 'var(--radius-md)',
  },
  md: {
    padding: 'var(--space-base) var(--space-xl)',
    fontSize: 'var(--text-base)',
    borderRadius: 'var(--radius-md)',
  },
  lg: {
    padding: 'var(--space-md) var(--space-3xl)',
    fontSize: 'var(--text-xl)',
    borderRadius: 'var(--radius-lg)',
  },
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const [hovered, setHovered] = React.useState(false);

  const hoverStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: hovered ? 'var(--color-primary-dark)' : 'var(--color-primary)',
      boxShadow: hovered ? 'var(--shadow-md)' : 'none',
    },
    secondary: {
      opacity: hovered ? 'var(--state-hover-opacity)' : '1',
      boxShadow: hovered ? 'var(--shadow-md)' : 'none',
    },
    outline: {
      backgroundColor: hovered ? 'var(--color-warning)' : 'var(--color-bg)',
      color: hovered ? 'var(--color-bg)' : 'var(--color-text-primary)',
      boxShadow: hovered ? 'var(--shadow-md)' : 'none',
    },
    ghost: {
      color: hovered ? 'var(--color-primary)' : 'var(--color-secondary)',
      backgroundColor: hovered ? 'var(--color-primary-light)' : 'transparent',
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      style={{
        // Base
        ...variantStyles[variant],
        ...sizeStyles[size],
        // Hover overrides
        ...hoverStyles[variant],
        // Shared
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--font-semibold)',
        transition: `all var(--motion-normal) var(--ease-out)`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 'var(--opacity-disabled)' : undefined,
        outline: 'none',
        border: variantStyles[variant].border ?? 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : undefined,
      }}
    >
      {children}
    </button>
  );
}