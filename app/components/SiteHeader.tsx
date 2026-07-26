"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappUrl } from "../data/site";

const links = [
  ["Home", "/"],
  ["Laptops", "/shop"],
  ["Gaming", "/shop?category=Gaming+laptops"],
  ["Accessories", "/#accessories"],
  ["Why Vintech", "/why-vintech"],
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
      <div className="announcement">Tested devices · Computer Village pickup · Nationwide delivery</div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <Link className="wordmark vintech-wordmark" href="/" aria-label="Vintech Global home">
            <img src="/vintech-logo.jpg" alt="Vintech Global Communications and Services Limited" />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <form className="header-search" action="/shop" role="search">
            <label className="sr-only" htmlFor="site-search">Search products</label>
            <input id="site-search" name="q" type="search" placeholder="Search model or spec" />
            <button aria-label="Search">↗</button>
          </form>
          <a className="button button-small button-lime nav-cta" href={whatsappUrl("Hello Vintech Global, I need help choosing a laptop.")} target="_blank" rel="noreferrer">Ask an expert</a>
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
