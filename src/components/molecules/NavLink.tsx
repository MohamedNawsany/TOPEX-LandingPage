'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname  = usePathname();
  const isActive  = pathname === href;
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color:          isActive || hovered ? 'var(--color-primary)' : 'var(--color-text-secondary)',
        fontWeight:     'var(--font-semibold)',
        fontFamily:     'var(--font-sans)',
        fontSize:       'var(--text-base)',
        textDecoration: 'none',
        transition:     `color var(--motion-normal) var(--ease-out)`,
        borderBottom:   isActive
          ? `var(--border-width-md) solid var(--color-primary)`
          : `var(--border-width-md) solid transparent`,
        paddingBottom:  'var(--space-xs)',
      }}
    >
      {children}
    </Link>
  );
}