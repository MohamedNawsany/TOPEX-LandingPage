'use client';

import React from 'react';
import Card from './Card';
import Icon from '../atoms/Icon';
import Heading from '../atoms/Heading';

interface ModuleCardProps {
  icon: string;
  title: string;
}

export default function ModuleCard({ icon, title }: ModuleCardProps) {
  return (
    <Card padding="lg" textAlign="center" hover={true}>
      {({ isHovered }) => (
        <>
          <div
            style={{
              width: '56px',
              height: '56px',
              margin: '0 auto var(--space-md) auto',
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
              size={28} 
              color={isHovered ? 'var(--color-text-white)' : 'var(--color-primary)'} 
            />
          </div>
          
          <Heading 
            level="h6" 
           
            align="center"
            style={{ 
              margin: 0,
              fontSize: 'var(--text-base)', // Consistent font size
              lineHeight: 'var(--leading-normal)',
            }}
          >
            {title}
          </Heading>
        </>
      )}
    </Card>
  );
}