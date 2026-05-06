'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

export default function CTA() {
  const t      = useTranslations('cta');
  const locale = useLocale();
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  return (
    <section
      style={{
        background:    'var(--gradient-cta)',
        paddingTop:    'calc(var(--space-6xl) * 2)',
        paddingBottom: 'calc(var(--space-6xl) * 2)',
        transition:    `background-color var(--motion-normal) var(--ease-out)`,
        position:      'relative',
        overflow:      'hidden',
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }}
      />

      <Container>
        <div
          style={{
            textAlign:      'center',
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            gap:            'var(--space-3xl)',
            maxWidth:       '900px',
            margin:         '0 auto',
            position:       'relative',
            zIndex:         2,
          }}
        >
          <Heading 
            level="h2" 
            color="white" 
            align="center"
            style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 'var(--font-bold)',
              lineHeight: '1.2',
            }}
          >
            {t('title')}
          </Heading>

          <Text
            variant="large"
            align="center"
            color="white"  // Added explicit color prop
            style={{
              maxWidth:  '50rem',
              fontSize:  'var(--text-2xl)',
              lineHeight: '1.6',
            }}
          >
            {t('subtitle')}
          </Text>

          <div style={{ marginTop: 'var(--space-lg)' }}>
            <Link href={`/${locale}/contact`} style={{ textDecoration: 'none' }}>
              <button
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                style={{
                  backgroundColor: isButtonHovered ? 'var(--color-secondary)' : 'white',
                  color: isButtonHovered ? 'white' : 'var(--color-primary)',
                  border: 'none',
                  padding: 'var(--space-md) var(--space-2xl)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-semibold)',
                  borderRadius: 'var(--radius-2xl)',
                  cursor: 'pointer',
                  transition: `all var(--motion-normal) var(--ease-out)`,
                  transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isButtonHovered ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {t('button')}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}