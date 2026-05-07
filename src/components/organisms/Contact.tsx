'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Card from '../molecules/Card';
import Icon from '../atoms/Icon';

export default function Contact() {
  const t      = useTranslations('contact');
  const locale = useLocale();
  const isRTL  = locale === 'ar';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactInfo = [
    { icon: 'phone',    title: t('phone'),   value: '+20 120 009 2936'  },
    { icon: 'email',    title: t('email'),   value: 'eng.osama@topex-solutions.com'},
    { icon: 'location', title: t('address'), value: t('addressValue')  },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputStyle: React.CSSProperties = {
    width:           '100%',
    padding:         `var(--space-sm) var(--space-md)`,
    border:          `var(--border-width-sm) solid var(--border-color-muted)`,
    borderRadius:    'var(--radius-md)',
    backgroundColor: 'var(--color-bg)',
    color:           'var(--color-text-primary)',
    fontFamily:      'var(--font-sans)',
    fontSize:        'var(--text-base)',
    outline:         'none',
    transition:      `border-color var(--motion-fast) var(--ease-out),
                      box-shadow   var(--motion-fast) var(--ease-out)`,
    boxSizing:       'border-box',
  };

  const handleFocus  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-primary)';
    e.currentTarget.style.boxShadow   = `0 0 0 var(--focus-ring-width) var(--focus-ring-color)33`;
  };
  const handleBlur   = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--border-color-muted)';
    e.currentTarget.style.boxShadow   = 'none';
  };

  return (
    <section
      id="contact"
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
          <Text variant="large" align="center" style={{ maxWidth: '42rem' }}>
            {t('subtitle')}
          </Text>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 'var(--space-5xl)',
          }}
        >
          {/* Contact info list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                style={{
                  display:       'flex',
                  alignItems:    'flex-start',
                  gap:           'var(--space-md)',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    flexShrink:      0,
                    width:           '48px',
                    height:          '48px',
                    borderRadius:    'var(--radius-md)',
                    color:           'var(--color-text-white)',
                    backgroundColor: 'var(--color-primary)',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                  }}
                >
                  <Icon
                    name={info.icon}
                    size={20}
                    style={{ color: 'var(--color-text-white)' }}
                  />
                </div>

                {/* Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  <Text weight="semibold">{info.title}</Text>
                  <Text style={{ color: 'var(--color-primary)' }}>{info.value}</Text>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <Card>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
            >
              <input
                type="text"
                placeholder={t('name')}
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputStyle}
                required
              />
              <input
                type="email"
                placeholder={t('email')}
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputStyle}
                required
              />
              <textarea
                placeholder={t('message')}
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                onFocus={handleFocus as any}
                onBlur={handleBlur as any}
                style={{ ...inputStyle, resize: 'vertical' }}
                required
              />
              <Button type="submit" fullWidth>{t('send')}</Button>
            </form>
          </Card>

        </div>
      </Container>
    </section>
  );
}