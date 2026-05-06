'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Card from '../molecules/Card';
import Icon from '../atoms/Icon';

const techTags = ['C#', 'ASP.NET', 'SQL Server'];

export default function Product() {
  const t        = useTranslations('product');
  const features = useTranslations('product.features');

  const productFeatures = [
    { icon: 'cloud',     key: 'cloud'        },
    { icon: 'users',     key: 'multiCompany' },
    { icon: 'globe',     key: 'multiLang'    },
    { icon: 'chart',     key: 'excel'        },
    { icon: 'database',  key: 'reports'      },
  ];

  return (
    <section
      id="product"
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

          {/* Reduced subtitle font size - changed from 'large' to 'small' */}
          <Text variant="small" align="center" style={{ maxWidth: '42rem' }}>
            {t('subtitle')}
          </Text>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-sm)' }}>
            {techTags.map(tag => (
              <span
                key={tag}
                style={{
                  padding:         `var(--space-xs) var(--space-base)`,
                  backgroundColor: 'var(--color-primary-light)',
                  borderRadius:    'var(--radius-full)',
                  fontSize:        'var(--text-xs)', // Reduced from 'var(--text-sm)'
                  color:           'var(--color-text-primary)',
                  fontFamily:      'var(--font-sans)',
                  fontWeight:      'var(--font-semibold)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Feature cards - 3 in a row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', // Fixed 3 columns
            gap: 'var(--space-2xl)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {productFeatures.map((feature, index) => (
            <Card key={index} hover>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>

                {/* Icon box */}
                <div
                  style={{
                    flexShrink:      0,
                    width:           '48px',
                    height:          '48px',
                    borderRadius:    'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-light)',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                  }}
                >
                  <Icon
                    name={feature.icon}
                    size={24}
                    style={{ color: 'var(--color-primary)' }}
                  />
                </div>

                {/* Text - Reduced font sizes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  {/* Changed from h4 to h5 for smaller title */}
                  <Heading level="h5" style={{ margin: 0 }}>
                    {features(feature.key)}
                  </Heading>
                  {/* Changed variant from default to 'small' for smaller description */}
                  <Text variant="small" color="muted">
                    {t(`${feature.key}Desc`)}
                  </Text>
                </div>

              </div>
            </Card>
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