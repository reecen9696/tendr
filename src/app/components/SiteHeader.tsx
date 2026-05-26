"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { CALENDAR_URL } from "./constants";

// Shared across all three routes. Anchor links are root-relative (`/#...`) so they
// resolve from /sample and /pricing too. The CTA fires `cta_book_call` (location: header).
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const bookCall = () => track("cta_book_call", { location: "header" });

  return (
    <header>
      <div className="wrap nav">
        <Link href="/" className="logo" aria-label="tendr home" onClick={close}>
          <Image
            src="/logo.png"
            alt="tendr"
            width={785}
            height={208}
            priority
            className="bar-logo"
          />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>

        <div className="nav-right">
          <a
            className="bar-cta nav-cta"
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={bookCall}
          >
            Book a 20-min call
          </a>
          <button
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`wrap mobile-menu${open ? " open" : ""}`}>
        <Link href="/#how-it-works" onClick={close}>
          How it works
        </Link>
        <Link href="/pricing" onClick={close}>
          Pricing
        </Link>
        <Link href="/#faq" onClick={close}>
          FAQ
        </Link>
        <a
          className="bar-cta"
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            bookCall();
            close();
          }}
        >
          Book a 20-min call
        </a>
      </div>
    </header>
  );
}
