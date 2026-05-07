'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Card from './Card';
import Text from '../atoms/Text';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ClientSliderProps {
  clients: Array<{ id: number; name: string; logo: string }>;
  slidesPerView?: number;
}

export default function ClientSlider({ clients = [], slidesPerView = 6 }: ClientSliderProps) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);

  const safeClients = Array.isArray(clients) ? clients : [];

  if (safeClients.length === 0) {
    return (
      <div className="no-clients">
        <Text align="center" color="muted">No clients to display</Text>
        <style jsx>{`
          .no-clients {
            padding: var(--space-5xl);
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
    1280: {
      slidesPerView: slidesPerView,
      spaceBetween: 32,
    },
  };

  return (
    <div className="client-slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        loop={false}
        breakpoints={breakpoints}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="client-swiper"
      >
        {safeClients.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="client-card-wrapper">
              <ClientCard client={client} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Enhanced */}
      <button
        className={`custom-nav prev-nav ${isBeginning ? 'disabled' : ''}`}
        disabled={isBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous clients"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button
        className={`custom-nav next-nav ${isEnd ? 'disabled' : ''}`}
        disabled={isEnd}
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next clients"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style jsx>{`
        .client-slider-wrapper {
          position: relative;
          padding: 0 50px;
          margin: 0 -20px;
        }

        .client-swiper {
          padding: 20px 10px;
          overflow: hidden;
        }

        .client-card-wrapper {
          height: 100%;
          display: flex;
        }

        /* Make all cards the same size */
        .client-card-wrapper > div {
          width: 100%;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Enhanced Custom Navigation Arrows */
        .custom-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: white;
          border: 1px solid rgba(16, 48, 119, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          color: var(--color-primary);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(4px);
        }

        .custom-nav:hover:not(.disabled) {
          background: var(--color-primary);
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 4px 12px rgba(16, 48, 119, 0.25);
          border-color: transparent;
        }

        .custom-nav:active:not(.disabled) {
          transform: translateY(-50%) scale(0.95);
        }

        .custom-nav.disabled {
          opacity: 0.3;
          cursor: not-allowed;
          background: #f5f5f5;
          color: #999;
        }

        .prev-nav {
          left: -10px;
        }

        .next-nav {
          right: -10px;
        }

        /* Dark mode styles */
        :global(.dark) .custom-nav {
          background: rgba(26, 58, 107, 0.9);
          border-color: rgba(255, 255, 255, 0.1);
          color: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        :global(.dark) .custom-nav:hover:not(.disabled) {
          background: var(--color-primary);
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        :global(.dark) .custom-nav.disabled {
          background: rgba(26, 58, 107, 0.5);
          color: rgba(255, 255, 255, 0.3);
        }

        /* Override default swiper styles */
        :global(.swiper-pagination-bullet) {
          background: var(--color-text-muted);
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background: var(--color-primary);
          opacity: 1;
          width: 24px;
          border-radius: 12px;
        }

        :global(.swiper-pagination) {
          position: relative;
          margin-top: 30px;
        }

        @media (max-width: 768px) {
          .client-slider-wrapper {
            padding: 0 40px;
          }

          .custom-nav {
            width: 40px;
            height: 40px;
          }

          .custom-nav svg {
            width: 20px;
            height: 20px;
          }

          .prev-nav {
            left: -5px;
          }

          .next-nav {
            right: -5px;
          }

          .client-card-wrapper > div {
            min-height: 180px;
          }
        }

        @media (max-width: 480px) {
          .client-slider-wrapper {
            padding: 0 35px;
          }

          .custom-nav {
            width: 36px;
            height: 36px;
          }

          .custom-nav svg {
            width: 18px;
            height: 18px;
          }

          .client-card-wrapper > div {
            min-height: 160px;
          }
        }
      `}</style>
    </div>
  );
}

// Client Card Component (internal to slider)
function ClientCard({ client }: { client: { id: number; name: string; logo: string } }) {
  return (
    <Card padding="lg" textAlign="center" hover={true}>
      {({ isHovered }) => (
        <>
          <div 
            style={{ 
              fontSize: '3rem', 
              marginBottom: 'var(--space-md)',
              transition: `all var(--motion-normal) var(--ease-out)`,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80px',
            }}
          >
            {client.logo}
          </div>
          <Text 
            weight="semibold" 
            align="center" 
            color={isHovered ? 'secondary' : 'primary'}
            style={{
              transition: `all var(--motion-normal) var(--ease-out)`,
              fontSize: 'var(--text-sm)',
              lineHeight: '1.4',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {client.name}
          </Text>
        </>
      )}
    </Card>
  );
}