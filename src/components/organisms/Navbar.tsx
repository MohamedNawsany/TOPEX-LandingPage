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
  const [scrolled, setScrolled] = useState(false);

  const t = useTranslations('navbar');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const navLinks = [
    { key: 'home', href: `/${locale}` },
    { key: 'services', href: `/${locale}/services` },
    { key: 'product', href: `/${locale}/product` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    backgroundColor: scrolled ? 'var(--color-bg)' : 'var(--color-form)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
    transition: `all var(--motion-normal) var(--ease-out)`,
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '80rem', marginInline: 'auto', paddingInline: 'var(--space-md)' }}>
        
        {/* Top bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            paddingBlock: 'var(--space-md)',
          }}
        >
          {/* LEFT: Logo */}
          <Logo variant="dark" size="md" />

          {/* CENTER: Nav Links */}
          <div
            className="hide-on-mobile"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-3xl)',
              direction: isRTL ? 'rtl' : 'ltr',
            }}
          >
            {navLinks.map(link => (
              <NavItem key={link.key} href={link.href}>
                {t(link.key)}
              </NavItem>
            ))}
          </div>

          {/* RIGHT: Actions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 'var(--space-md)',
            }}
          >
            {/* Desktop */}
            <div className="hide-on-mobile" style={{ display: 'flex', gap: 'var(--space-md)' }}>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger ONLY */}
            <button
              className="show-on-mobile"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-primary)',
              }}
            >
              <Icon name={isMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="show-on-mobile"
            style={{
              paddingBlock: 'var(--space-md)',
              borderTop: `var(--border-width-sm) solid var(--border-color-muted)`,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
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
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-md)',
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
      <style>
        {`
      .hide-on-mobile {
  display: flex;
}

.show-on-mobile {
  display: none;
}

@media (max-width: 768px) {
  .hide-on-mobile {
    display: none !important;
  }

  .show-on-mobile {
    display: block;
  }
}
        `}
      </style>
    </nav>
  );
}