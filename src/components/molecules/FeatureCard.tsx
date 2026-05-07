'use client';

import React from 'react';
import Card from './Card';
import Icon from '../atoms/Icon';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card padding="lg" textAlign="center" hover={true}>
      {({ isHovered }) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              margin: '0 auto var(--space-lg) auto',
              backgroundColor: isHovered ? 'var(--color-primary)' : 'var(--color-primary-light)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: `all var(--motion-normal) var(--ease-out)`,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <Icon 
              name={icon} 
              size={32} 
              color={isHovered ? 'var(--color-text-white)' : 'var(--color-primary)'} 
            />
          </div>
          
          <Heading level="h5" color="primary" align="center" gutter>
            {title}
          </Heading>
          
          <Text variant="small" color="muted" align="center">
            {description}
          </Text>
        </>
      )}
    </Card>
  );
}