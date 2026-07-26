// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

import Link from "next/link";
import { ProductCard } from "./components/ProductCard";
import { products } from "./data/products";
import { siteConfig, whatsappUrl } from "./data/site";

const credibility = ["Computer Village, Ikeja", "Tested and verified devices", "Nationwide delivery", "Retail and wholesale supply", "Charger included", "After-sales support"];
const brands = ["DELL", "hp", "Lenovo", "Apple", "ASUS", "acer"];
const categories = ["Business laptops", "Student laptops", "Gaming laptops", "MacBooks", "Workstations", "Budget laptops", "Desktop computers", "Accessories"];
const uses = [
  ["01", "Office & remote work", "Reliable business laptops for calls, documents and daily multitasking."],
  ["02", "Coding & development", "Comfortable keyboards, practical ports and configurations to match your tools."],
  ["03", "Graphics & editing", "Workstation options for creative software and heavier project files."],
  ["04", "School & university", "Portable, dependable options selected around your course and budget."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid-lines" />
        <div className="hero-inner section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Laptops for work. Built for business.</p>
            <h1>Business-Class Laptops. <em>Wholesale Value.</em></h1>
            <p className="hero-lead">Tested Dell, HP, Lenovo and Apple laptops with fast nationwide delivery, original accessories and dependable after-sales support.</p>
            <div className="hero-actions">
              <Link className="button button-lime button-large" href="/shop">Shop laptops <span>↗</span></Link>
              <Link className="button button-outline button-large" href="/wholesale">Get wholesale quote</Link>
            </div>
            <div className="credibility-list">
              {credibility.map((item) => <span key={item}><i>✓</i>{item}</span>)}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="hero-product">
              <img src="/products/dell-latitude-7430-3.jpg" alt="Dell Latitude 7430 laptop supplied by CHEX Computers" />
            </div>
            <div className="floating-tag tag-top"><span>READY</span><b>For business</b></div>
            <div className="floating-tag tag-bottom"><span>SUPPLY</span><b>Retail + wholesale</b></div>
          </div>
        </div>
        <div className="trust-panel section-shell">
          <div><span>01</span><p><b>Business-grade</b>Tested and verified</p></div>
          <div><span>02</span><p><b>Stock-led</b>Availability confirmed</p></div>
          <div><span>03</span><p><b>Complete bundle</b>Charger; extras as listed</p></div>
        </div>
      </section>

      <section className="brand-strip" aria-label="Brands we stock"><p>Explore leading computer brands</p><div>{brands.map((brand) => <span key={brand}>{brand}</span>)}</div></section>

      <section className="section section-shell" id="featured">
        <div className="section-heading"><div><p className="eyebrow"><span /> Current stock selection</p><h2>Featured laptops</h2></div><Link className="text-link" href="/shop">Browse all products ↗</Link></div>
        <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div>
        <div className="featured-footer"><Link className="button button-lime button-large" href="/shop">Browse all products <span>↗</span></Link></div>
      </section>

      <section className="section section-shell">
        <div className="section-heading"><div><p className="eyebrow"><span /> Shop your way</p><h2>Built around what you need</h2></div></div>
        <div className="category-grid">{categories.map((category, index) => <Link href={`/shop?q=${encodeURIComponent(category)}`} key={category}><span>{String(index + 1).padStart(2, "0")}</span><b>{category}</b><i>↗</i></Link>)}</div>
      </section>

      <section className="use-section">
        <div className="section-shell"><div className="section-heading"><div><p className="eyebrow"><span /> Laptop finder</p><h2>Start with the work.<br />We’ll help with the specs.</h2></div><p className="section-intro">Tell us what the laptop needs to handle and the budget you want to stay within.</p></div>
          <div className="use-grid">{uses.map(([number, title, copy]) => <Link href={`/shop?use=${encodeURIComponent(title)}`} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><b>Explore options ↗</b></Link>)}</div>
        </div>
      </section>

      <section className="section section-shell retail-wholesale">
        <article><p className="eyebrow"><span /> Buying one?</p><h2>Retail support that starts with the right recommendation.</h2><ul><li>Single-unit purchases</li><li>Expert buying guidance</li><li>Device testing</li><li>Nationwide delivery</li><li>After-sales support</li></ul><Link className="button button-outline" href="/shop">Shop retail</Link></article>
        <article className="wholesale-card"><p className="eyebrow"><span /> Buying in bulk?</p><h2>Supply built for resellers, teams and institutions.</h2><ul><li>Bulk laptop supply</li><li>Reseller and corporate quotations</li><li>Schools and training centres</li><li>Startup and office equipment</li><li>Stock selected to your brief</li></ul><Link className="button button-lime" href="/wholesale">Request a wholesale quote</Link></article>
      </section>

      <section className="section section-shell why-preview"><div><p className="eyebrow"><span /> Why CHEX</p><h2>Clear specifications.<br />No guesswork.</h2><p>We help you compare the details that matter, confirm the exact available unit and order with confidence from {siteConfig.location}.</p><Link className="text-link" href="/why-chex">See how we work ↗</Link></div><div className="why-list">{["Every available device is inspected", "Specifications confirmed before payment", "Retail and wholesale buying support", "Fast delivery coordination across Nigeria", "Support before and after purchase", "Physical presence in Computer Village"].map((item, i) => <p key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</p>)}</div></section>

      <section className="section section-shell order-steps"><div className="section-heading"><div><p className="eyebrow"><span /> Simple ordering</p><h2>From choice to delivery.</h2></div></div><div>{[["01","Choose a device"],["02","Confirm availability"],["03","Complete payment"],["04","Receive or pick up"]].map(([n,t]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{n === "01" ? "Browse the catalogue or ask for a recommendation." : n === "02" ? "We confirm the exact unit, specifications and condition." : n === "03" ? "Use the payment instructions provided on your confirmed invoice." : "Coordinate nationwide delivery or a Computer Village pickup."}</p></article>)}</div></section>

      <section className="review-empty section-shell"><div><p className="eyebrow"><span /> Customer feedback</p><h2>Verified reviews will appear here.</h2><p>We won’t publish invented names, ratings or sales claims. This section is ready for genuine customer feedback when supplied.</p></div><Link className="button button-outline" href="/contact">Share a verified review</Link></section>

      <section className="section section-shell faq" id="faq"><div><p className="eyebrow"><span /> Buying FAQ</p><h2>Answers before you order.</h2></div><div>{["Do you sell foreign-used laptops?","Are the laptops tested before delivery?","Do you deliver outside Lagos?","Can I buy laptops in bulk?","What comes with each laptop?","How do I confirm availability?","Can you recommend a laptop for my budget?","Where is your store located?"].map((question, i) => <details key={question}><summary>{question}<span>+</span></summary><p>{i === 0 ? "Yes. The catalogue contains 227 foreign-used laptop listings. CHEX confirms the exact unit condition before you order." : i === 1 ? "Available units are inspected and their key details are confirmed with you before payment." : i === 2 ? "Yes. Delivery can be coordinated across Nigeria after your exact location and order are confirmed." : i === 3 ? "Yes. Use the wholesale quote form for reseller, office, school or institutional requirements." : i === 4 ? "A charger is included. Any bag, warranty or additional item will be stated on the product confirmation or invoice." : i === 5 ? "Open the CHEX product page and send its pre-filled WhatsApp enquiry. The team will confirm the exact available unit." : i === 6 ? "Yes. Tell us your budget, intended use and preferred screen size, and we’ll shortlist suitable current stock." : `Visit CHEX at ${siteConfig.address}. Call or WhatsApp before visiting.`}</p></details>)}</div></section>

      <section className="final-cta"><div className="section-shell"><p className="eyebrow"><span /> Personal recommendation</p><h2>Not sure which laptop fits your needs?</h2><p>Tell us your budget and what you need the laptop for. Our team will recommend the best available options.</p><div><Link className="button button-lime button-large" href="/contact">Get a recommendation</Link><a className="button button-outline button-large" href={whatsappUrl("Hello CHEX Computers, please recommend a laptop for me. My budget is ___ and I need it for ___.")} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></div></section>
    </main>
  );
}
