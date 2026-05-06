'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Card from '../molecules/Card';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      name:     t('client1.name')     || 'أحمد محمد',
      position: t('client1.position') || 'مدير عام',
      company:  t('client1.company')  || 'الأسس الوطنية',
      text:     t('client1.text')     || 'نظام توبكس غير طريقة عملنا بشكل كامل. أنصح به بشدة!',
    },
    {
      name:     t('client2.name')     || 'سارة أحمد',
      position: t('client2.position') || 'محاسب أول',
      company:  t('client2.company')  || 'شركة العرب موتورز',
      text:     t('client2.text')     || 'دقة النظام وسرعته جعلت إدارة الحسابات والمخازن سهلة للغاية.',
    },
    {
      name:     t('client3.name')     || 'محمد علي',
      position: t('client3.position') || 'CEO',
      company:  t('client3.company')  || 'Fast Click Logistics',
      text:     t('client3.text')     || 'أفضل استثمار قمنا به هذا العام. دعم فني ممتاز ومرونة كبيرة.',
    },
  ];

  return (
    <section
      id="testimonials"
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
          <Text variant="small" align="center" style={{ maxWidth: '42rem' }}>
            {t('subtitle')}
          </Text>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-3xl)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <div 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  minHeight: '300px',
                }}
              >
                {/* Stars - Filled using lucide-react Star with fill */}
                <div style={{ display: 'flex', gap: 'var(--space-xs)', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      style={{ 
                        color: 'var(--color-warning)',
                        fill: 'var(--color-warning)',
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div style={{ 
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <Text
                    align="center"
                    style={{
                      fontStyle: 'italic',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      lineHeight: '1.6',
                    }}
                  >
                    "{testimonial.text}"
                  </Text>
                </div>

                {/* Author section */}
                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-xs)',
                      textAlign: 'center',
                    }}
                  >
                    <Text weight="semibold" align="center" style={{ color: 'var(--color-text-primary)', margin: 0 }}>
                      {testimonial.name}
                    </Text>
                    <Text variant="small" color="muted" align="center" style={{ margin: 0 }}>
                      {testimonial.position} — {testimonial.company}
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: var(--space-2xl) !important;
            }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
              grid-template-columns: 1fr !important;
              gap: var(--space-xl) !important;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}