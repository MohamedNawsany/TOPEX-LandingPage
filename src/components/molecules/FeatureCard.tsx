'use client';

import React from 'react';
import Icon from '../atoms/Icon';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? 'var(--color-bg)' : 'white',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-3xl)',
        textAlign: 'center',
        transition: `all var(--motion-normal) var(--ease-out)`,
        boxShadow: isHovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
        border: '1px solid var(--color-primary-light)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // This ensures children are centered horizontally
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '64px',
          height: '64px',
          margin: '0 auto var(--space-lg) auto',
          backgroundColor: 'var(--color-primary-light)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: `all var(--motion-normal) var(--ease-out)`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <Icon name={icon} size={32} color="var(--color-primary)" />
      </div>
      
      {/* Title - centered */}
      <Heading 
        level="h5" 
        color="primary" 
        align="center"  // Explicitly center the heading
        style={{ marginBottom: 'var(--space-md)', width: '100%' }}
      >
        {title}
      </Heading>
      
      {/* Description - centered */}
      <Text 
        variant="small" 
        color="muted"
        align="center"  // Explicitly center the text
        style={{ width: '100%' }}
      >
        {description}
      </Text>
    </div>
  );
}