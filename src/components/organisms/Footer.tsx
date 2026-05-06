'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Container from '../atoms/Container';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color:          hovered ? 'var(--color-secondary)' : 'rgba(255,255,255,0.65)',
        textDecoration: 'none',
        fontFamily:     'var(--font-sans)',
        fontSize:       'var(--text-base)',
        transition:     `color var(--motion-normal) var(--ease-out)`,
      }}
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color:      hovered ? 'var(--color-secondary)' : 'rgba(255,255,255,0.65)',
        transition: `color var(--motion-normal) var(--ease-out)`,
      }}
    >
      <Icon name={icon} size={24} />
    </a>
  );
}

export default function Footer() {
  const t      = useTranslations('footer');
  const locale = useLocale();

  const quickLinks   = ['home', 'services', 'product', 'about', 'contact'];
  const supportLinks = ['faq', 'technicalSupport', 'privacy', 'terms'];

  const colHeaderStyle: React.CSSProperties = {
    fontFamily:   'var(--font-heading)',
    fontWeight:   'var(--font-semibold)',
    fontSize:     'var(--text-lg)',
    color:        'var(--color-text-white)',
    marginBottom: 'var(--space-md)',
    display:      'block',
    textAlign:    'center', // Center headers
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary-dark)',
        paddingTop:      'var(--space-6xl)',
        paddingBottom:   'var(--space-3xl)',
        transition:      `background-color var(--motion-normal) var(--ease-out)`,
      }}
    >
      <Container>

        {/* Four-column grid - centered */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-3xl)',
            marginBottom: 'var(--space-5xl)',
            maxWidth: '1200px',
            margin: '0 auto var(--space-5xl) auto',
            textAlign: 'center',
          }}
        >
          {/* Company info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
            <Logo variant="light" size="md" />
            <Text style={{ color: 'rgba(255,255,255,0.65)', margin: 0, textAlign: 'center' }}>
              {t('description')}
            </Text>
          </div>

          {/* Quick links */}
          <div>
            <span style={colHeaderStyle}>{t('quickLinks')}</span>
            <ul style={{ 
              listStyle: 'none', 
              margin: 0, 
              padding: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--space-sm)',
              alignItems: 'center',
            }}>
              {quickLinks.map(link => (
                <li key={link}>
                  <FooterLink href={`/${locale}/${link === 'home' ? '' : link}`}>
                    {t(link)}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <span style={colHeaderStyle}>{t('support')}</span>
            <ul style={{ 
              listStyle: 'none', 
              margin: 0, 
              padding: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--space-sm)',
              alignItems: 'center',
            }}>
              {supportLinks.map(link => (
                <li key={link}>
                  <FooterLink href={`/${locale}/${link}`}>
                    {t(link)}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <span style={colHeaderStyle}>{t('followUs')}</span>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
              <SocialLink href="#" label="Facebook"  icon="globe" />
              <SocialLink href="#" label="Twitter"   icon="globe" />
              <SocialLink href="#" label="Instagram" icon="globe" />
              <SocialLink href="#" label="LinkedIn"  icon="globe" />
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          style={{
            borderTop:  '1px solid rgba(255,255,255,0.15)',
            paddingTop: 'var(--space-3xl)',
            textAlign:  'center',
          }}
        >
          <Text style={{ color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            {t('copyright')}
          </Text>
        </div>

      </Container>
    </footer>
  );
}