'use client';

import React from 'react';
import Icon from '../atoms/Icon';
import Heading from '../atoms/Heading';

interface ModuleCardProps {
  icon: string;
  title: string;
}

export default function ModuleCard({ icon, title }: ModuleCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? 'var(--color-bg)' : 'white',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-2xl)',
        textAlign: 'center',
        transition: `all var(--motion-normal) var(--ease-out)`,
        boxShadow: isHovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
        border: '1px solid var(--color-primary-light)',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '56px',
          height: '56px',
          margin: '0 auto var(--space-md) auto',
          backgroundColor: 'var(--color-primary-light)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: `all var(--motion-normal) var(--ease-out)`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <Icon name={icon} size={28} color="var(--color-primary)" />
      </div>
      
      {/* Title - using h5 for smaller font */}
      <Heading level="h5" color="primary" style={{ margin: 0 }}>
        {title}
      </Heading>
    </div>
  );
}