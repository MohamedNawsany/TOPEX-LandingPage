'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import ServiceCard from '../molecules/ServiceCard';

export default function Services() {
  const t     = useTranslations('services');
  const items = useTranslations('services.items');

  const services = [
    { icon: 'database', key: 'accounting' },
    { icon: 'settings', key: 'custom'     },
    { icon: 'users',    key: 'consulting' },
    { icon: 'rocket',   key: 'solutions'  },
    { icon: 'cloud',    key: 'data'       },
    { icon: 'shield',   key: 'security'   },
  ];

  return (
    <section
      id="services"
      style={{
        backgroundColor: 'var(--color-form)',
        paddingTop:      'var(--space-6xl)',
        paddingBottom:   'var(--space-6xl)',
        transition:      `background-color var(--motion-normal) var(--ease-out)`,
      }}
    >
      <Container>
        {/* Header */}
        <div className="services-header">
          <Heading level="h2" align="center">{t('title')}</Heading>
          <Text variant="large" align="center" className="services-subtitle">
            {t('subtitle')}
          </Text>
        </div>

        {/* Grid - 3 cards in a row */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={items(service.key)}
            />
          ))}
        </div>

        <style jsx>{`
          .services-header {
            text-align: center;
            margin-bottom: var(--space-5xl);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }

          .services-subtitle {
            max-width: 42rem;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-2xl);
            max-width: 1200px;
            margin: 0 auto;
          }

          /* Make all cards equal height */
          .services-grid > div {
            height: 100%;
          }

          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: var(--space-xl);
            }
          }
          
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr;
              gap: var(--space-lg);
              max-width: 500px;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}