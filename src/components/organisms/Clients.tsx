'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import { MapPin } from 'lucide-react';

export default function Clients() {
  const t = useTranslations('clients');

  const clients = [
    { name: t('client1') || 'Client 1', logo: '🏢' },
    { name: t('client2') || 'Client 2', logo: '🏭' },
    { name: t('client3') || 'Client 3', logo: '🏪' },
    { name: t('client4') || 'Client 4', logo: '🏦' },
    { name: t('client5') || 'Client 5', logo: '🏨' },
    { name: t('client6') || 'Client 6', logo: '🏛️' },
  ];

  const countries = [
    { name: t('egypt'), icon: MapPin, color: 'var(--color-primary)' },
    { name: t('saudi'), icon: MapPin, color: 'var(--color-secondary)' },
  ];

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

          {/* Countries with Icons */}
          <div
            style={{
              display:        'flex',
              justifyContent: 'center',
              flexWrap:       'wrap',
              gap:            'var(--space-4xl)',
              marginTop:      'var(--space-lg)',
            }}
          >
            {countries.map((country, index) => {
              const CountryIcon = country.icon;
              return (
                <div
                  key={index}
                  style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        'var(--space-md)',
                  }}
                >
                  <CountryIcon 
                    size={28} 
                    style={{ color: country.color }}
                  />
                  <Text weight="semibold" style={{ fontSize: 'var(--text-lg)' }}>
                    {country.name}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client cards grid - centered with space-between */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 'var(--space-3xl)', // Increased space between cards
            maxWidth: '1400px', // Increased max width for more space
            margin: '0 auto',
            justifyContent: 'center',
          }}
        >
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </div>

        {/* Responsive styles */}
        <style jsx>{`
          @media (max-width: 1200px) {
            div[style*="gridTemplateColumns: 'repeat(6, 1fr)'"] {
              gap: var(--space-2xl) !important;
            }
          }
          
          @media (max-width: 1024px) {
            div[style*="gridTemplateColumns: 'repeat(6, 1fr)'"] {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: var(--space-2xl) !important;
            }
            
            div[style*="justifyContent: 'center'"] {
              gap: var(--space-3xl) !important;
            }
          }
          
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 'repeat(6, 1fr)'"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: var(--space-xl) !important;
            }
            
            div[style*="justifyContent: 'center'"] {
              gap: var(--space-2xl) !important;
            }
          }
          
          @media (max-width: 480px) {
            div[style*="gridTemplateColumns: 'repeat(6, 1fr)'"] {
              grid-template-columns: 1fr !important;
              gap: var(--space-lg) !important;
            }
          }
        `}</style>

      </Container>
    </section>
  );
}

/* Client Card Component */
function ClientCard({ client }: { client: { name: string; logo: string } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--color-bg)',
        borderRadius:    'var(--radius-xl)',
        padding:         'var(--space-xl)',
        textAlign:       'center',
        boxShadow:       hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform:       hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition:      `all var(--motion-normal) var(--ease-out)`,
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>
        {client.logo}
      </div>
      <Text weight="semibold" align="center">{client.name}</Text>
    </div>
  );
}