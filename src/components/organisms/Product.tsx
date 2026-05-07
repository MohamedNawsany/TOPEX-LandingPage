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
        <div className="product-header">
          <Heading level="h2" align="center">{t('title')}</Heading>
          <Text variant="small" align="center" className="product-subtitle">
            {t('subtitle')}
          </Text>

          {/* Tech tags */}
          <div className="tech-tags">
            {techTags.map(tag => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Feature cards - 3 in a row */}
        <div className="features-grid">
          {productFeatures.map((feature, index) => (
            <Card key={index} padding="md" hover={true}>
              {({ isHovered }) => (
                <div className="feature-card-content">
                  {/* Icon box */}
                  <div
                    className="feature-icon"
                    style={{
                      backgroundColor: isHovered ? 'var(--color-primary)' : 'var(--color-primary-light)',
                    }}
                  >
                    <Icon
                      name={feature.icon}
                      size={24}
                      color={isHovered ? 'var(--color-text-white)' : 'var(--color-primary)'}
                    />
                  </div>

                  {/* Text */}
                  <div className="feature-text">
                    <Heading 
                      level="h5" 
                    >
                      {features(feature.key)}
                    </Heading>
                    <Text variant="small" color="muted">
                      {t(`${feature.key}Desc`)}
                    </Text>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <style jsx>{`
          .product-header {
            text-align: center;
            margin-bottom: var(--space-5xl);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }

          .product-subtitle {
            max-width: 42rem;
          }

          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: var(--space-sm);
            margin-top: var(--space-md);
          }

          .tech-tag {
            padding: var(--space-xs) var(--space-base);
            background-color: var(--color-primary-light);
            border-radius: var(--radius-full);
            font-size: var(--text-xs);
            color: var(--color-text-primary);
            font-family: var(--font-sans);
            font-weight: var(--font-semibold);
            transition: all var(--motion-normal) var(--ease-out);
            cursor: pointer;
          }

          .tech-tag:hover {
            background-color: var(--color-primary);
            color: var(--color-text-white);
            transform: translateY(-2px);
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-2xl);
            max-width: 1200px;
            margin: 0 auto;
          }

          .feature-card-content {
            display: flex;
            align-items: flex-start;
            gap: var(--space-md);
          }

          .feature-icon {
            flex-shrink: 0;
            width: 48px;
            height: 48px;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all var(--motion-normal) var(--ease-out);
          }

          .feature-text {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
            flex: 1;
          }

          /* Make all cards equal height */
          .features-grid > div {
            height: 100%;
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
              max-width: 500px;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}