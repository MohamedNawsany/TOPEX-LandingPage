'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import FeatureCard from '../molecules/FeatureCard';

export default function Features() {
  const t     = useTranslations('features');
  const items = useTranslations('features.items');

  const features = [
    { icon: 'rocket',   key: 'speed',       descriptionKey: 'speedDesc'      },
    { icon: 'target',   key: 'accuracy',    descriptionKey: 'accuracyDesc'   },
    { icon: 'settings', key: 'flexibility', descriptionKey: 'flexibilityDesc'},
    { icon: 'database', key: 'integrated',  descriptionKey: 'integratedDesc' },
    { icon: 'users',    key: 'support',     descriptionKey: 'supportDesc'    },
    { icon: 'star',     key: 'price',       descriptionKey: 'priceDesc'      },
  ];

  return (
    <section
      id="features"
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop:      'var(--space-6xl)',
        paddingBottom:   'var(--space-6xl)',
        transition:      `background-color var(--motion-normal) var(--ease-out)`,
      }}
    >
      <Container>
        {/* Header */}
        <div
          style={{
            textAlign:    'center',
            marginBottom: 'var(--space-5xl)',
            display:      'flex',
            flexDirection:'column',
            alignItems:   'center',
            gap:          'var(--space-md)',
          }}
        >
          <Heading level="h2" align="center">{t('title')}</Heading>
          {/* Reduced subtitle font size */}
          <Text variant="small" align="center" style={{ maxWidth: '42rem' }}>
            {t('subtitle')}
          </Text>
        </div>

        {/* Grid - 3 cards in a row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-2xl)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={items(feature.key)}
              description={items(feature.descriptionKey) || `${feature.key} description`}
            />
          ))}
        </div>

        {/* Responsive styles */}
        <style jsx>{`
          @media (max-width: 1024px) {
            div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: var(--space-xl) !important;
            }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
              grid-template-columns: 1fr !important;
              gap: var(--space-lg) !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}