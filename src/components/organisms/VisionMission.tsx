'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

export default function VisionMission() {
  const t = useTranslations('visionMission');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const items = [
    {
      icon:        'eye',
      title:       t('vision'),
      description: t('visionText'),
      gradient:    'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
    },
    {
      icon:        'target',
      title:       t('mission'),
      description: t('missionText'),
      gradient:    'linear-gradient(135deg, var(--color-secondary) 0%, #019a9c 100%)',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--color-form)',
        paddingTop:      'calc(var(--space-6xl) * 2)', // Increased from var(--space-6xl)
        paddingBottom:   'calc(var(--space-6xl) * 2)', // Increased from var(--space-6xl)
        transition:      `background-color var(--motion-normal) var(--ease-out)`,
        overflow: 'hidden', // Prevents overflow from transformed cards
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-3xl)',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'center',
            paddingTop: 'var(--space-5xl)', // Added extra padding on top
            paddingBottom: 'var(--space-5xl)', // Added extra padding on bottom
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: item.gradient,
                borderRadius: 'var(--radius-3xl)',
                minHeight: '450px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: `transform var(--motion-normal) var(--ease-out), box-shadow var(--motion-normal) var(--ease-out)`,
                transform: index === 0 
                  ? 'translateY(-80px)' // Vision card always higher
                  : 'translateY(80px)', // Mission card always lower
                boxShadow: hoveredIndex === index ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
                cursor: 'pointer',
                padding: 'var(--space-3xl)',
                zIndex: hoveredIndex === index ? 10 : 1,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--space-lg)',
                  maxWidth: '450px',
                  transition: `transform var(--motion-normal) var(--ease-out)`,
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px',
                    height: '100px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transition: `transform var(--motion-normal) var(--ease-out)`,
                    transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)',
                  }}
                >
                  <Icon
                    name={item.icon}
                    size={50}
                    style={{ color: 'var(--color-text-white)' }}
                  />
                </div>

                {/* Title */}
                <Heading 
                  level="h3" 
                  color="white" 
                  align="center"
                  style={{ 
                    margin: 0,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  {item.title}
                </Heading>

                {/* Description */}
                <Text
                  variant="large"
                  align="center"
                  style={{
                    color: 'white',
                    fontWeight: 'var(--font-medium)',
                    margin: 0,
                    lineHeight: '1.6',
                  }}
                >
                  {item.description}
                </Text>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive styles */}
        <style jsx>{`
          @media (max-width: 1024px) {
            div[style*="gridTemplateColumns: 'repeat(2, 1fr)'"] {
              gap: var(--space-2xl) !important;
            }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 'repeat(2, 1fr)'"] {
              grid-template-columns: 1fr !important;
              gap: var(--space-xl) !important;
              padding-top: var(--space-3xl) !important;
              padding-bottom: var(--space-3xl) !important;
            }
            
            /* Reset the offset on mobile */
            div[style*="transform"] {
              transform: translateY(0) !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}