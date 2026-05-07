'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ThemeToggle } from '../atoms/ThemeToggle';
import LanguageSwitcher from '../molecules/LanguageSwitcher';
import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';

function NavItem({ 
  children, 
  onClick,
  isActive = false 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  isActive?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: isActive ? 'var(--color-secondary)' : (hovered ? 'var(--color-secondary)' : 'var(--color-text-primary)'),
        fontFamily: 'var(--font-sans)',
        fontWeight: isActive ? 'var(--font-bold)' : 'var(--font-semibold)',
        fontSize: 'var(--text-base)',
        textDecoration: 'none',
        transition: `color var(--motion-normal) var(--ease-out)`,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [isMobile, setIsMobile]     = useState(false);
  const [mounted, setMounted]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t      = useTranslations('navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isRTL  = locale === 'ar';

  const navLinks = [
    { key: 'home',     sectionId: '#home' },
    { key: 'services', sectionId: '#services' },
    { key: 'product',  sectionId: '#product' },
    { key: 'about',    sectionId: '#about' },
    { key: 'contact',  sectionId: '#contact' },
  ];

  // Scroll to section without hash in URL
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `/${locale}`);
    }
  };

  // Handle navigation
  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (pathname !== `/${locale}`) {
      router.push(`/${locale}`);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Track active section
      const sections = navLinks.map(link => link.sectionId);
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.replace('#', ''));
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showDesktop = mounted && !isMobile;
  const showMobile = mounted && isMobile;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: scrolled ? 'var(--color-bg)' : 'var(--color-form)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: `all var(--motion-normal) var(--ease-out)`,
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          marginInline: 'auto',
          paddingInline: 'var(--space-md)',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            paddingBlock: 'var(--space-md)',
            gap: 'var(--space-md)',
          }}
        >
          {/* LEFT: Logo */}
          <div onClick={() => handleNavigation('#home')} style={{ cursor: 'pointer', flexShrink: 0 }}>
            <Logo variant="dark" size="md" />
          </div>

          {/* CENTER: Nav Links — desktop only */}
          {showDesktop ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(var(--space-lg), 2vw, var(--space-3xl))',
                direction: isRTL ? 'rtl' : 'ltr',
                overflowX: 'auto',
                flexWrap: 'nowrap',
              }}
            >
              {navLinks.map(link => (
                <NavItem 
                  key={link.key} 
                  onClick={() => handleNavigation(link.sectionId)}
                  isActive={activeSection === link.key}
                >
                  {t(link.key)}
                </NavItem>
              ))}
            </div>
          ) : (
            <div /> // spacer
          )}

          {/* RIGHT: Actions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              flexShrink: 0,
            }}
          >
            {/* Desktop actions */}
            {showDesktop && (
              <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
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
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-text-primary)',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
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
              paddingBlock: 'var(--space-md)',
              borderTop: `var(--border-width-sm) solid var(--border-color-muted)`,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
            }}
          >
            {navLinks.map(link => (
              <NavItem 
                key={link.key} 
                onClick={() => handleNavigation(link.sectionId)}
                isActive={activeSection === link.key}
              >
                <span
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}