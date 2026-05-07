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
        <div className="testimonials-header">
          <Heading level="h2" align="center">{t('title')}</Heading>
          <Text variant="small" align="center" className="testimonials-subtitle">
            {t('subtitle')}
          </Text>
        </div>

        {/* Cards grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover padding="lg">
              <div className="testimonial-card-content">
                {/* Stars */}
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="star-icon"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="quote">
                  <Text
                    align="center"
                    variant="body"
                    color="secondary"
                    style={{ fontStyle: 'italic', lineHeight: '1.6' }}
                  >
                    "{testimonial.text}"
                  </Text>
                </div>

                {/* Author section */}
                <div className="author">
                  <Text weight="semibold" align="center" color="primary">
                    {testimonial.name}
                  </Text>
                  <Text variant="small" color="muted" align="center">
                    {testimonial.position} — {testimonial.company}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <style jsx>{`
          .testimonials-header {
            text-align: center;
            margin-bottom: var(--space-5xl);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }

          .testimonials-subtitle {
            max-width: 42rem;
          }

          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(300px, 1fr));
            gap: var(--space-3xl);
            max-width: 1200px;
            margin: 0 auto;
          }

          .testimonial-card-content {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 320px;
          }

          .stars {
            display: flex;
            gap: var(--space-xs);
            justify-content: center;
            margin-bottom: var(--space-lg);
            flex-shrink: 0;
          }

          .star-icon {
            color: var(--color-warning);
            fill: var(--color-warning);
          }

          .quote {
            flex: 1;
            display: flex;
            align-items: center;
            margin-bottom: var(--space-lg);
          }

          .author {
            margin-top: var(--space-lg);
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
            flex-shrink: 0;
          }

          /* Make all cards equal height */
          .testimonials-grid > div {
            height: 100%;
          }

          @media (max-width: 1024px) {
            .testimonials-grid {
              grid-template-columns: repeat(2, minmax(280px, 1fr));
              gap: var(--space-2xl);
            }
          }
          
          @media (max-width: 768px) {
            .testimonials-grid {
              grid-template-columns: 1fr;
              gap: var(--space-xl);
              max-width: 500px;
            }
            
            .testimonial-card-content {
              min-height: auto;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}