'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ThemeToggle } from '../atoms/ThemeToggle';
import LanguageSwitcher from '../molecules/LanguageSwitcher';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? 'var(--color-secondary)' : 'var(--color-text-primary)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--font-semibold)',
        fontSize: 'var(--text-base)',
        textDecoration: 'none',
        transition: `color var(--motion-normal) var(--ease-out)`,
      }}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [isMobile, setIsMobile]     = useState(false);
  const [mounted, setMounted]       = useState(false);  // ← key fix

  const t      = useTranslations('navbar');
  const locale = useLocale();
  const isRTL  = locale === 'ar';

  const navLinks = [
    { key: 'home',     href: '#home'     },
    { key: 'services', href: '#services' },
    { key: 'product',  href: '#product'  },
    { key: 'about',    href: '#about'    },
    { key: 'contact',  href: '#contact'  },
  ];

  useEffect(() => {
    setMounted(true);  // ← only runs on client
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Before mount, show a layout-safe shell that matches SSR output
  // Both desktop nav and hamburger are hidden until client takes over
  const showDesktop = mounted && !isMobile;
  const showMobile  = mounted && isMobile;

  return (
    <nav
      style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        width:           '100%',
        zIndex:          50,
        backgroundColor: scrolled ? 'var(--color-bg)' : 'var(--color-form)',
        backdropFilter:  scrolled ? 'blur(12px)' : 'none',
        boxShadow:       scrolled ? 'var(--shadow-md)' : 'none',
        transition:      `all var(--motion-normal) var(--ease-out)`,
        boxSizing:       'border-box',
      }}
    >
      <div
        style={{
          maxWidth:      '80rem',
          marginInline:  'auto',
          paddingInline: 'var(--space-md)',
          boxSizing:     'border-box',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems:          'center',
            paddingBlock:        'var(--space-md)',
          }}
        >
          {/* LEFT: Logo */}
          <Logo variant="dark" size="md" />

          {/* CENTER: Nav Links — desktop only */}
          {showDesktop ? (
            <div
              style={{
                display:        'flex',
                justifyContent: 'center',
                gap:            'var(--space-3xl)',
                direction:      isRTL ? 'rtl' : 'ltr',
              }}
            >
              {navLinks.map(link => (
                <NavItem key={link.key} href={link.href}>
                  {t(link.key)}
                </NavItem>
              ))}
            </div>
          ) : (
            <div /> // spacer to preserve grid layout on SSR and mobile
          )}

          {/* RIGHT: Actions */}
          <div
            style={{
              display:        'flex',
              justifyContent: 'flex-end',
              alignItems:     'center',
              gap:            'var(--space-md)',
            }}
          >
            {/* Desktop actions */}
            {showDesktop && (
              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            )}

            {/* Hamburger — mobile only */}
            {showMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  background: 'none',
                  border:     'none',
                  cursor:     'pointer',
                  color:      'var(--color-text-primary)',
                  padding:    0,
                  display:    'flex',
                  alignItems: 'center',
                }}
              >
                <Icon name={isMenuOpen ? 'x' : 'menu'} size={24} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {showMobile && isMenuOpen && (
          <div
            style={{
              paddingBlock:  'var(--space-md)',
              borderTop:     `var(--border-width-sm) solid var(--border-color-muted)`,
              display:       'flex',
              flexDirection: 'column',
              gap:           'var(--space-sm)',
            }}
          >
            {navLinks.map(link => (
              <NavItem key={link.key} href={link.href}>
                <span
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'block', paddingBlock: 'var(--space-xs)' }}
                >
                  {t(link.key)}
                </span>
              </NavItem>
            ))}

            <div
              style={{
                display:   'flex',
                flexWrap:  'wrap',
                gap:       'var(--space-md)',
                marginTop: 'var(--space-md)',
              }}
            >
              <LanguageSwitcher />
              <ThemeToggle />
              <Button variant="outline" size="sm">{t('login')}</Button>
              <Button size="sm">{t('signup')}</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}