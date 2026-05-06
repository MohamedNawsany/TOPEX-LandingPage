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
          <Text variant="large" align="center" >
            {t('subtitle')}
          </Text>
        </div>

        {/* Grid - 3 cards in a row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // Fixed 3 columns
            gap: 'var(--space-2xl)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={items(service.key)}
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