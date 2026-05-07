'use client';

import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import ClientSlider from '../molecules/ClientSlider';
import { MapPin } from 'lucide-react';

// Logo mapping for specific clients
const getLogoForClient = (index: number): string => {
  const logoMap: Record<number, string> = {
    1: '🏢', 2: '🚚', 3: '🚛', 4: '🍞', 5: '📊', 6: '🛢️',
    7: '🤝', 8: '🏗️', 9: '🏘️', 10: '🚗', 11: '🏠', 12: '🏗️',
    13: '📦', 14: '🕳️', 15: '🤝', 16: '⚡', 17: '🛍️', 18: '📍',
    19: '🏗️', 20: '🏢', 21: '🤝', 22: '🍪', 23: '🛁', 24: '🏭',
    25: '🚪', 26: '🔴',
  };
  return logoMap[index] || '🏢';
};

export default function Clients() {
  const t = useTranslations('clients');

  const countries = [
    { name: t('egypt'), icon: MapPin, color: 'var(--color-primary)' },
    { name: t('saudi'), icon: MapPin, color: 'var(--color-secondary)' },
  ];

  // Generate clients dynamically based on available translations
  const clients = useMemo(() => {
    const clientList = [];
    
    for (let i = 1; i <= 26; i++) {
      try {
        const name = t(`client${i}`);
        // Only add if translation exists and is not the key itself
        if (name && typeof name === 'string' && !name.includes('client') && name !== `client${i}`) {
          clientList.push({
            id: i,
            name: name,
            logo: getLogoForClient(i),
          });
        }
      } catch (error) {
        // Skip if translation doesn't exist
        console.log(`Client ${i} translation not found`);
      }
    }
    
    // If no clients found, return default clients
    if (clientList.length === 0) {
      return [
        { id: 1, name: 'Sample Client 1', logo: '🏢' },
        { id: 2, name: 'Sample Client 2', logo: '🏭' },
        { id: 3, name: 'Sample Client 3', logo: '🏪' },
        { id: 4, name: 'Sample Client 4', logo: '🏦' },
        { id: 5, name: 'Sample Client 5', logo: '🏨' },
        { id: 6, name: 'Sample Client 6', logo: '🏛️' },
      ];
    }
    
    return clientList;
  }, [t]);

  // Ensure clients is always an array
  const safeClients = clients || [];

  return (
    <section
      id="clients"
      style={{
        backgroundColor: 'var(--color-form)',
        paddingTop:      'var(--space-6xl)',
        paddingBottom:   'var(--space-6xl)',
        transition:      `background-color var(--motion-normal) var(--ease-out)`,
      }}
    >
      <Container>
        {/* Header */}
        <div className="clients-header">
          <Heading level="h2" align="center">{t('title')}</Heading>

          <Text variant="small" align="center" className="clients-subtitle">
            {t('subtitle')}
          </Text>

          {/* Countries with Icons */}
          <div className="countries">
            {countries.map((country, index) => {
              const CountryIcon = country.icon;
              return (
                <div key={index} className="country-item">
                  <CountryIcon size={28} style={{ color: country.color }} />
                  <Text weight="semibold" style={{ fontSize: 'var(--text-lg)' }}>
                    {country.name}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Slider - Shows 6 clients at a time */}
        {safeClients.length > 0 ? (
          <ClientSlider clients={safeClients} slidesPerView={6} />
        ) : (
          <div className="clients-loading">
            <Text align="center" color="muted">Loading clients...</Text>
          </div>
        )}

        <style jsx>{`
          .clients-header {
            text-align: center;
            margin-bottom: var(--space-5xl);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }

          .clients-subtitle {
            max-width: 42rem;
          }

          .countries {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: var(--space-4xl);
            margin-top: var(--space-lg);
          }

          .country-item {
            display: flex;
            align-items: center;
            gap: var(--space-md);
          }

          .clients-loading {
            padding: var(--space-5xl);
            text-align: center;
          }
        `}</style>
      </Container>
    </section>
  );
}