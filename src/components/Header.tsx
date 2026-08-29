'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, waUrl } from '@/lib/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
            alt=""
            aria-hidden="true"
            width={38}
            height={38}
            className="brand-img"
          />
          <div className="brand-info">
            <span className="brand-text">{SITE.orgName}</span>
            <span className="brand-subline">Pusat Pelatihan Korporat</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="site-nav" aria-label="Navigasi utama">
          <ul>
            {SITE.nav.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="btn btn-accent header-cta" href="/kontak/">
          <span>Konsultasi Gratis</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>

        {/* Mobile Burger Button */}
        <button
          className="nav-burger"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            className="mobile-nav-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {isOpen && (
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Menu navigasi">
            <div className="mobile-drawer-head">
              <div className="brand">
                <img
                  src="/assets/img/logo-wt.png"
                  alt={SITE.orgName}
                  width={34}
                  height={34}
                />
                <span className="brand-text" style={{ fontSize: '0.98rem' }}>{SITE.orgName}</span>
              </div>
              <button
                className="mobile-nav-close"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup menu"
              >
                ✕
              </button>
            </div>

            <ul className="mobile-drawer-links">
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

            <div className="mobile-drawer-cta">
              <Link className="btn btn-accent" href="/kontak/" onClick={() => setIsOpen(false)}>
                Konsultasi via Formulir
              </Link>
              <a className="btn btn-wa" href={waUrl()} target="_blank" rel="noopener">
                Chat WhatsApp ({SITE.waDisplay})
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
