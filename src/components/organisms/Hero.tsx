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
  
  // Hover states for each button
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
      }}
    >
      <div
        style={{
          maxWidth:      '80rem',
          marginInline:  'auto',
          paddingInline: 'var(--space-md)',
          width:         '100%',
        }}
      >
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 'var(--space-5xl)',
            alignItems:          'center',
            transform:           'translateY(-5%)',
          }}
        >
          {/* Left / Text column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            <Heading level="h1" color="white">
              {t('title')}
            </Heading>

            <Text variant="large" color="white">
              {t('subtitle')}
            </Text>

            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              {/* Button 1 - Primary CTA */}
              <Link href={`/${locale}/signup`} style={{ textDecoration: 'none' }}>
                <button
                  onMouseEnter={() => setIsCta1Hovered(true)}
                  onMouseLeave={() => setIsCta1Hovered(false)}
                  style={{
                    backgroundColor: isCta1Hovered ? 'var(--color-warning)' : 'var(--color-secondary)',
                    color: 'var(--color-text-white)',
                    border: 'none',
                    padding: 'var(--space-base) var(--space-xl)',
                    fontSize: 'var(--text-base)',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--font-semibold)',
                    transition: `all var(--motion-normal) var(--ease-out)`,
                    cursor: 'pointer',
                    boxShadow: isCta1Hovered ? 'var(--shadow-md)' : 'none',
                  }}
                >
                  {t('cta1')}
                </button>
              </Link>

              {/* Button 2 - Secondary CTA */}
              <Link href={`/${locale}/contact`} style={{ textDecoration: 'none' }}>
                <button
                  onMouseEnter={() => setIsCta2Hovered(true)}
                  onMouseLeave={() => setIsCta2Hovered(false)}
                  style={{
                    backgroundColor: isCta2Hovered ? 'var(--color-warning)' : 'var(--color-bg)',
                    color: isCta2Hovered ? 'var(--color-bg)' : 'var(--color-text-primary)',
                    border: '2px solid white',
                    padding: 'var(--space-base) var(--space-xl)',
                    fontSize: 'var(--text-base)',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--font-semibold)',
                    transition: `all var(--motion-normal) var(--ease-out)`,
                    cursor: 'pointer',
                    boxShadow: isCta2Hovered ? 'var(--shadow-md)' : 'none',
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
              transform:       'translateY(-3%)',
            }}
          >
            <div
              style={{
                position:     'relative',
                height:       'auto', // Changed from fixed height
                minHeight:    '300px', // Minimum height
                borderRadius: 'var(--radius-lg)',
                overflow:     'hidden',
                aspectRatio:  '16/9', // Maintain aspect ratio
              }}
            >
              <Image
                src={TopExImage}
                alt="TopX ERP Dashboard Preview"
                fill
                style={{ objectFit: 'contain' }} // Changed back to 'contain'
                priority
              />
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}