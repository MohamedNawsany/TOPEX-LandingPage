'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import ModuleCard from '../molecules/ModuleCard';

export default function Modules() {
  const t     = useTranslations('modules');
  const items = useTranslations('modules.items');

  const modules = [
    { icon: 'chart',    key: 'accounts'   },
    { icon: 'database', key: 'warehouses' },
    { icon: 'users',    key: 'sales'      },
    { icon: 'settings', key: 'salaries'   },
    { icon: 'rocket',   key: 'projects'   },
    { icon: 'globe',    key: 'shipping'   },
  ];

  return (
    <section
      id="modules"
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
          <Text variant="small" align="center" style={{ maxWidth: '42rem' }}>
            {t('subtitle')}
          </Text>
        </div>

        {/* Grid - All cards in one row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${modules.length}, 1fr)`, // Dynamic based on number of modules
            gap: 'var(--space-3xl)', // Increased space between cards
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {modules.map((module, index) => (
            <ModuleCard key={index} icon={module.icon} title={items(module.key)} />
          ))}
        </div>

        {/* Responsive styles - Stack on smaller screens */}
        <style jsx>{`
          @media (max-width: 1200px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: var(--space-2xl) !important;
            }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: var(--space-xl) !important;
            }
          }
          
          @media (max-width: 480px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: 1fr !important;
              gap: var(--space-lg) !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}