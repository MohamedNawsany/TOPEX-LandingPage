'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import FeatureCard from '../molecules/FeatureCard';

const FEATURES_CONFIG = [
  { icon: 'rocket',   key: 'speed',       descriptionKey: 'speedDesc' },
  { icon: 'target',   key: 'accuracy',    descriptionKey: 'accuracyDesc' },
  { icon: 'settings', key: 'flexibility', descriptionKey: 'flexibilityDesc' },
  { icon: 'database', key: 'integrated',  descriptionKey: 'integratedDesc' },
  { icon: 'users',    key: 'support',     descriptionKey: 'supportDesc' },
  { icon: 'star',     key: 'price',       descriptionKey: 'priceDesc' },
];

export default function Features() {
  const t = useTranslations('features');
  const items = useTranslations('features.items');

  return (
    <section
      id="features"
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'var(--space-6xl)',
        paddingBottom: 'var(--space-6xl)',
        transition: 'background-color var(--motion-normal) var(--ease-out)',
      }}
    >
      <Container className="fade-in">
        {/* Header Section */}
        <div className="features-header">
          <Heading level="h2" align="center">
            {t('title')}
          </Heading>
          <Text variant="small" align="center" className="features-subtitle">
            {t('subtitle')}
          </Text>
        </div>

        {/* Cards Grid */}
        <div className="features-grid">
          {FEATURES_CONFIG.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={items(feature.key)}
              description={items(feature.descriptionKey) || `${feature.key} description`}
              variant="elevated"
            />
          ))}
        </div>

        {/* Styles */}
        <style jsx>{`
          .features-header {
            text-align: center;
            margin-bottom: var(--space-5xl);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }

          .features-subtitle {
            max-width: 42rem;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-2xl);
            max-width: 1200px;
            margin: 0 auto;
          }

          @media (max-width: 1024px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: var(--space-xl);
            }
          }
          
          @media (max-width: 768px) {
            .features-grid {
              grid-template-columns: 1fr;
              gap: var(--space-lg);
            }
          }
        `}</style>
      </Container>
    </section>
  );
}