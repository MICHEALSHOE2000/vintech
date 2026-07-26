"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappUrl } from "../data/site";

const links = [
  ["Home", "/"],
  ["Shop", "/shop"],
  ["Wholesale", "/wholesale"],
  ["Why CHEX", "/why-chex"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="announcement">Fast nationwide delivery across Nigeria.</div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <Link className="wordmark" href="/" aria-label="CHEX Computers home">
            <span className="wordmark-mark">C</span>
            <span>CHEX <b>COMPUTERS</b></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <form className="header-search" action="/shop" role="search">
            <label className="sr-only" htmlFor="site-search">Search products</label>
            <input id="site-search" name="q" type="search" placeholder="Search model or spec" />
            <button aria-label="Search">↗</button>
          </form>
          <a className="button button-small button-lime nav-cta" href={whatsappUrl("Hello CHEX Computers, I need help choosing a laptop.")} target="_blank" rel="noreferrer">WhatsApp</a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu">
            <span /> <span />
          </button>
        </div>
        <div id="mobile-nav" className={`mobile-nav ${open ? "open" : ""}`}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></Link>)}
          <form action="/shop" role="search">
            <label className="sr-only" htmlFor="mobile-search">Search products</label>
            <input id="mobile-search" name="q" type="search" placeholder="Search laptops" />
          </form>
        </div>
      </header>
    </>
  );
}
