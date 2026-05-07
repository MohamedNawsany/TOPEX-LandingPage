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
        <div className="modules-header">
          <Heading level="h2" align="center">{t('title')}</Heading>
          <Text variant="small" align="center" className="modules-subtitle">
            {t('subtitle')}
          </Text>
        </div>

        {/* Grid - All cards in one row */}
        <div className="modules-grid">
          {modules.map((module, index) => (
            <ModuleCard key={index} icon={module.icon} title={items(module.key)} />
          ))}
        </div>

        <style jsx>{`
          .modules-header {
            text-align: center;
            margin-bottom: var(--space-5xl);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }

          .modules-subtitle {
            max-width: 42rem;
          }

          .modules-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: var(--space-2xl);
            max-width: 1400px;
            margin: 0 auto;
          }

          /* Make all cards equal height */
          .modules-grid > div {
            height: 100%;
          }

          @media (max-width: 1200px) {
            .modules-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: var(--space-2xl);
            }
          }
          
          @media (max-width: 768px) {
            .modules-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: var(--space-xl);
            }
          }
          
          @media (max-width: 480px) {
            .modules-grid {
              grid-template-columns: 1fr;
              gap: var(--space-lg);
              max-width: 300px;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}