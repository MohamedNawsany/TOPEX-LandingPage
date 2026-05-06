'use client';

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted]   = useState(false);
  const [hovered, setHovered]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width:           '40px',
          height:          '40px',
          borderRadius:    'var(--radius-full)',
          backgroundColor: 'var(--color-primary-light)',
          opacity:         'var(--opacity-muted)',
        }}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Toggle Theme"
      style={{
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        width:           '40px',
        height:          '40px',
        borderRadius:    'var(--radius-full)',
        backgroundColor: 'var(--color-primary-light)',
        color:           isDark ? 'var(--color-secondary)' : 'var(--color-primary)',
        border:          'none',
        outline:         'none',
        cursor:          'pointer',
        transform:       hovered ? 'scale(1.1)' : 'scale(1)',
        transition:      `all var(--motion-normal) var(--ease-out)`,
        boxShadow:       hovered ? 'var(--shadow-sm)' : 'none',
      }}
    >
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}