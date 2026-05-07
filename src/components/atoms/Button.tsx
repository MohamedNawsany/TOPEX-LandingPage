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
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

interface VariantConfig {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor?: string;
  hoverOpacity?: number;
  border: string;
}

const variantConfig: Record<string, VariantConfig> = {
  primary: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-text-white)',
    hoverBackgroundColor: 'var(--color-primary-dark)',
    border: 'none',
  },
  secondary: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-text-white)',
    hoverBackgroundColor: 'var(--color-secondary)',
    hoverOpacity: 0.9,
    border: 'none',
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    hoverBackgroundColor: 'var(--color-primary-light)',
    border: 'var(--border-width-md) solid var(--color-primary)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-secondary)',
    hoverBackgroundColor: 'var(--color-secondary-light)',
    border: 'none',
  },
};

const sizeConfig = {
  sm: {
    padding: 'var(--space-sm) var(--space-md)',
    fontSize: 'var(--text-sm)',
    borderRadius: 'var(--radius-md)',
    gap: 'var(--space-sm)',
  },
  md: {
    padding: 'var(--space-base) var(--space-xl)',
    fontSize: 'var(--text-base)',
    borderRadius: 'var(--radius-md)',
    gap: 'var(--space-md)',
  },
  lg: {
    padding: 'var(--space-md) var(--space-3xl)',
    fontSize: 'var(--text-lg)',
    borderRadius: 'var(--radius-lg)',
    gap: 'var(--space-md)',
  },
} as const;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const getButtonStyles = (): React.CSSProperties => {
    const variantStyle = variantConfig[variant];
    const sizeStyle = sizeConfig[size];
    
    // Base styles
    const styles: React.CSSProperties = {
      padding: sizeStyle.padding,
      fontSize: sizeStyle.fontSize,
      borderRadius: sizeStyle.borderRadius,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--font-semibold)',
      transition: `all var(--motion-normal) var(--ease-out)`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      outline: 'none',
      border: variantStyle.border,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizeStyle.gap,
      width: fullWidth ? '100%' : 'auto',
      backgroundColor: variantStyle.backgroundColor,
      color: variantStyle.color,
    };

    // Hover styles
    if (isHovered && !disabled) {
      if (variantStyle.hoverBackgroundColor) {
        styles.backgroundColor = variantStyle.hoverBackgroundColor;
      }
      if (variantStyle.hoverOpacity) {
        styles.opacity = variantStyle.hoverOpacity;
      }
      styles.boxShadow = 'var(--shadow-sm)';
      styles.transform = 'translateY(-1px)';
    }

    return styles;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={getButtonStyles()}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}