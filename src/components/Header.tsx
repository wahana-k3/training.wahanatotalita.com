'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE, pageUrl } from '@/lib/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    if (href === '/' && (pathname === '/' || pathname === '')) return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label={`${SITE.orgName} — Beranda`}>
          <img
            src="/assets/img/logo-wt.png"
            alt={SITE.orgName}
            width={44}
            height={44}
            className="brand-img"
          />
          <span className="brand-text">{SITE.orgName}</span>
        </Link>

        <button
          className="nav-burger"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`site-nav ${isOpen ? 'is-open' : ''}`}
          aria-label="Navigasi utama"
        >
          <ul>
            {SITE.nav.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="btn btn-accent header-cta" href="/kontak/">
          Konsultasi Gratis
        </Link>
      </div>
    </header>
  );
}
