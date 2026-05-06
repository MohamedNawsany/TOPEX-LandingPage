'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Image from 'next/image';
import AboutImage from '@/assets/images/About.jpg';

export default function About() {
  const t = useTranslations('about');
  const [isImageHovered, setIsImageHovered] = React.useState(false);


  return (
    <section
      id="about"
     
      style={{
        backgroundColor: 'var(--color-bg)' ,
        paddingTop:      'var(--space-6xl)',
        paddingBottom:   'var(--space-6xl)',
        transition:      `background-color var(--motion-normal) var(--ease-out)`,
      }}
    >
      <Container>
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 'var(--space-5xl)',
            alignItems:          'center',
          }}
        >
          {/* ── Left / Text column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            <Heading level="h2">
              {t('title')}
            </Heading>

            <Text variant="large">
              {t('description')}
            </Text>

            <Text>
              {t('text')}
            </Text>

            <div>
              <Button variant="outline">
                {t('learnMore') || 'اعرف المزيد'}
              </Button>
            </div>
          </div>

          {/* ── Right / Image column ── */}
          <div
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
            style={{
              backgroundColor: isImageHovered ? 'var(--color-warning)' : 'var(--color-bg)',
              borderRadius:    'var(--radius-3xl)',
              height:          '384px',
              position:        'relative',
              overflow:        'hidden',
              transition:      `background-color var(--motion-normal) var(--ease-out)`,
            }}
          >
            <Image
              src={AboutImage}
              alt="About Us"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

        </div>
      </Container>
    </section>
  );
}