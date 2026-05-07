'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import TopExImage from '@/assets/images/TopExpert.jpeg';

export default function Hero() {
  const t      = useTranslations('hero');
  const locale = useLocale();

  const [isCta1Hovered, setIsCta1Hovered] = React.useState(false);
  const [isCta2Hovered, setIsCta2Hovered] = React.useState(false);

  return (
    <section
      id="home"
      style={{
        background:    'var(--gradient-hero)',
        minHeight:     'calc(120vh - 80px)',
        display:       'flex',
        alignItems:    'center',
        paddingTop:    'calc(var(--space-6xl) * 0.5)',
        paddingBottom: 'var(--space-6xl)',
        boxSizing:     'border-box',
        overflow:      'hidden',
      }}
    >
      <div
        style={{
          maxWidth:      '80rem',
          marginInline:  'auto',
          paddingInline: 'var(--space-md)',
          width:         '100%',
          boxSizing:     'border-box',
        }}
      >
        <div className="hero-grid">
          {/* Left / Text column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            <Heading level="h1" color="white">
              {t('title')}
            </Heading>

            <Text variant="large" color="white">
              {t('subtitle')}
            </Text>

            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Link href={`/${locale}/signup`} style={{ textDecoration: 'none' }}>
                <button
                  onMouseEnter={() => setIsCta1Hovered(true)}
                  onMouseLeave={() => setIsCta1Hovered(false)}
                  style={{
                    backgroundColor: isCta1Hovered ? 'var(--color-warning)' : 'var(--color-secondary)',
                    color:           'var(--color-text-white)',
                    border:          'none',
                    padding:         'var(--space-base) var(--space-xl)',
                    fontSize:        'var(--text-base)',
                    borderRadius:    'var(--radius-md)',
                    fontFamily:      'var(--font-sans)',
                    fontWeight:      'var(--font-semibold)',
                    transition:      `all var(--motion-normal) var(--ease-out)`,
                    cursor:          'pointer',
                    boxShadow:       isCta1Hovered ? 'var(--shadow-md)' : 'none',
                    whiteSpace:      'nowrap',
                  }}
                >
                  {t('cta1')}
                </button>
              </Link>

              <Link href={`/${locale}/contact`} style={{ textDecoration: 'none' }}>
                <button
                  onMouseEnter={() => setIsCta2Hovered(true)}
                  onMouseLeave={() => setIsCta2Hovered(false)}
                  style={{
                    backgroundColor: isCta2Hovered ? 'var(--color-warning)' : 'var(--color-bg)',
                    color:           isCta2Hovered ? 'var(--color-bg)' : 'var(--color-text-primary)',
                    border:          '2px solid white',
                    padding:         'var(--space-base) var(--space-xl)',
                    fontSize:        'var(--text-base)',
                    borderRadius:    'var(--radius-md)',
                    fontFamily:      'var(--font-sans)',
                    fontWeight:      'var(--font-semibold)',
                    transition:      `all var(--motion-normal) var(--ease-out)`,
                    cursor:          'pointer',
                    boxShadow:       isCta2Hovered ? 'var(--shadow-md)' : 'none',
                    whiteSpace:      'nowrap',
                  }}
                >
                  {t('cta2')}
                </button>
              </Link>
            </div>
          </div>

          {/* Right / Image column */}
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter:  'blur(12px)',
              borderRadius:    'var(--radius-3xl)',
              padding:         'var(--space-3xl)',
            }}
          >
            <div
              style={{
                position:     'relative',
                width:        '100%',
                borderRadius: 'var(--radius-lg)',
                overflow:     'hidden',
                aspectRatio:  '16/9',
              }}
            >
              <Image
                src={TopExImage}
                alt="TopX ERP Dashboard Preview"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-5xl);
          align-items: center;
          transform: translateY(-5%);
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            transform: none;
            gap: var(--space-3xl);
          }
        }
      `}</style>
    </section>
  );
}