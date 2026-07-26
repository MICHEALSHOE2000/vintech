import Link from "next/link";
import { ProductCard } from "./components/ProductCard";
import { products } from "./data/products";
import { siteConfig, whatsappUrl } from "./data/site";

const credibility = [
  "Computer Village, Ikeja",
  "Tested and verified devices",
  "Nationwide delivery",
  "Gaming and creator laptops",
  "Business workstations",
  "Laptop accessories",
];

const brands = ["ALIENWARE", "DELL", "HP", "LENOVO", "ASUS ROG", "MSI", "ACER"];

const categories = [
  ["Gaming laptops", "Gaming laptops"],
  ["Business laptops", "Business laptops"],
  ["2-in-1 laptops", "2-in-1 laptops"],
  ["Mobile workstations", "Workstations"],
  ["MacBooks", "MacBooks"],
  ["Student laptops", "Business laptops"],
  ["Creator laptops", "Workstations"],
  ["Laptop accessories", "Accessories"],
];

const uses = [
  ["01", "Gaming without limits", "Alienware and high-performance gaming machines selected for serious play."],
  ["02", "Work that moves", "Dependable business laptops for calls, documents, travel and daily multitasking."],
  ["03", "Create at full speed", "Powerful options for editing, graphics, 3D work and heavier project files."],
  ["04", "Engineering & code", "Mobile workstations and capable laptops for technical professional workflows."],
];

const performanceNames = [
  "ALIENWARE X17 R2",
  "LENOVO LEGION PRO 5 GEN-10",
  "ASUS ROG ZEPHYRUS M16",
  "HP OMEN SLIM 16 GAMING LAPTOP",
];

const performancePicks = performanceNames.flatMap((name) => {
  const product = products.find((item) => item.name.toUpperCase().includes(name));
  return product ? [product] : [];
});

const currentPicks = products.filter((product) => product.featured).slice(0, 4);

export default function Home() {
  return (
    <main>
      <section className="hero premium-hero">
        <div className="hero-grid-lines" />
        <div className="hero-inner section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Premium laptops. Properly selected.</p>
            <h1>The laptop that <em>keeps up with you.</em></h1>
            <p className="hero-lead">
              From Alienware gaming power to dependable business machines, Vintech Global helps
              you choose a laptop that fits your work, your ambition and your budget.
            </p>
            <div className="hero-actions">
              <Link className="button button-lime button-large" href="/shop">Explore laptops <span>↗</span></Link>
              <a
                className="button button-outline button-large"
                href={whatsappUrl("Hello Vintech Global, help me choose the right laptop for my needs and budget.")}
                target="_blank"
                rel="noreferrer"
              >
                Get a recommendation
              </a>
            </div>
            <div className="credibility-list">
              {credibility.map((item) => <span key={item}><i>✓</i>{item}</span>)}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-product">
              <span className="hero-product-label">VINTECH PERFORMANCE PICK</span>
              <img src="/products/alienware-x17-r2.webp" alt="Alienware x17 R2 premium gaming laptop available from Vintech Global" />
              <div className="hero-product-caption"><span>Alienware</span><b>x17 R2</b></div>
            </div>
            <div className="floating-tag tag-top"><span>ALIENWARE</span><b>Beyond ordinary</b></div>
            <div className="floating-tag tag-bottom"><span>VINTECH SELECT</span><b>Checked before collection</b></div>
          </div>
        </div>

        <div className="trust-panel section-shell">
          <div><span>01</span><p><b>Use-case first</b>Choose for what you do</p></div>
          <div><span>02</span><p><b>Quality checked</b>Before pickup or dispatch</p></div>
          <div><span>03</span><p><b>Real support</b>Call, WhatsApp or visit</p></div>
        </div>
      </section>

      <section className="brand-strip" aria-label="Brands available">
        <p>Performance and business brands we source</p>
        <div>{brands.map((brand) => <span key={brand}>{brand}</span>)}</div>
      </section>

      <section className="section section-shell alienware-showcase">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Beyond ordinary</p><h2>Alienware takes centre stage.</h2></div>
          <p className="section-intro">Start with our Alienware spotlight, then compare equally serious gaming machines from the world’s leading performance brands.</p>
        </div>

        <article className="alienware-spotlight">
          <img src="/products/alienware-x17-r2.webp" alt="Alienware x17 R2 gaming laptop" />
          <div>
            <p className="eyebrow"><span /> Alienware spotlight</p>
            <h2>x17 R2</h2>
            <p>Immersive display, unmistakable design and the performance presence expected from Alienware.</p>
            <a
              className="button button-light button-large"
              href={whatsappUrl("Hello Vintech Global, please confirm today's price and availability for the Alienware x17 R2.")}
              target="_blank"
              rel="noreferrer"
            >
              Request today’s price ↗
            </a>
          </div>
        </article>

        <div className="performance-product-grid">
          {performancePicks.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="section current-stock-section">
        <div className="section-shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Curated catalogue</p><h2>Find your next machine.</h2></div>
            <Link className="text-link" href="/shop">Browse all 227 listings ↗</Link>
          </div>
          <div className="product-grid">{currentPicks.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          <div className="featured-footer"><Link className="button button-lime button-large" href="/shop">Explore the full catalogue <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section section-shell">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Shop your way</p><h2>Built around what you need.</h2></div>
        </div>
        <div className="category-grid">
          {categories.map(([label, query], index) => (
            <Link href={query === "Accessories" ? "/#accessories" : `/shop?category=${encodeURIComponent(query)}`} key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span><b>{label}</b><i>↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="use-section">
        <div className="section-shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Laptop finder</p><h2>Start with the work.<br />We’ll help with the specs.</h2></div>
            <p className="section-intro">Tell us what the laptop needs to handle and the budget you want to stay within.</p>
          </div>
          <div className="use-grid">
            {uses.map(([number, title, copy]) => (
              <Link href={`/contact?use=${encodeURIComponent(title)}`} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p><b>Get a recommendation ↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section accessories-section" id="accessories">
        <div className="section-shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Complete your setup</p><h2>Every laptop essential.</h2></div>
            <p className="section-intro">Upgrade, protect and connect your laptop with accessories for work, gaming and everyday use.</p>
          </div>
          <div className="accessories-grid">
            {[
              ["01", "Chargers & power", "Original and compatible laptop chargers, power solutions and replacements."],
              ["02", "Bags & protection", "Laptop bags, sleeves and protective essentials for life on the move."],
              ["03", "RAM & SSD upgrades", "Memory and storage upgrades to make the right machine even better."],
              ["04", "Keyboard, mouse & audio", "Desk and gaming essentials including keyboards, mice and headsets."],
              ["05", "Stands & cooling", "Laptop stands and cooling pads for comfort and sustained performance."],
              ["06", "Hubs & connectivity", "Docks, adapters and hubs for a cleaner, better-connected workspace."],
            ].map(([number, title, copy]) => (
              <a
                key={title}
                href={whatsappUrl(`Hello Vintech Global, I want to buy ${title.toLowerCase()}. Please show me available options.`)}
                target="_blank"
                rel="noreferrer"
              >
                <span>{number}</span><h3>{title}</h3><p>{copy}</p><b>Check availability ↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell why-preview">
        <div>
          <p className="eyebrow"><span /> The Vintech standard</p>
          <h2>More confidence in every choice.</h2>
          <p>A laptop is a serious investment. We make the decision clearer by matching the machine to your work and confirming the exact available unit before pickup or dispatch from {siteConfig.location}.</p>
          <Link className="text-link" href="/why-vintech">See how we work ↗</Link>
        </div>
        <div className="why-list">
          {[
            "Available devices are inspected",
            "Specifications confirmed before payment",
            "Gaming, business and workstation guidance",
            "Fast delivery coordination across Nigeria",
            "Support before and after purchase",
            "Physical presence in Computer Village",
          ].map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}
        </div>
      </section>

      <section className="section section-shell order-steps">
        <div className="section-heading"><div><p className="eyebrow"><span /> Simple ordering</p><h2>From choice to delivery.</h2></div></div>
        <div>
          {[
            ["01", "Choose a device", "Browse the catalogue or ask for a recommendation."],
            ["02", "Confirm availability", "We confirm the exact unit, specifications and condition."],
            ["03", "Receive your invoice", "Use the payment instructions on your confirmed invoice."],
            ["04", "Collect or receive", "Coordinate nationwide delivery or Computer Village pickup."],
          ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section section-shell faq" id="faq">
        <div><p className="eyebrow"><span /> Buying FAQ</p><h2>Answers before you order.</h2></div>
        <div>
          {[
            ["Do you sell foreign-used laptops?", "Yes. The catalogue contains 227 foreign-used laptop listings. Vintech confirms the exact unit condition before you order."],
            ["Do you stock gaming laptops?", "Yes. Ask about current Alienware, Lenovo Legion, ASUS ROG, HP Omen, Acer Nitro and MSI availability."],
            ["Are the laptops tested before delivery?", "Available units are inspected and their key details are confirmed with you before payment."],
            ["Do you sell laptop accessories?", "Yes. Vintech supplies chargers, bags, RAM, SSDs, keyboards, mice, headsets, stands, cooling pads, docks and adapters."],
            ["Do you deliver outside Lagos?", "Yes. Delivery can be coordinated across Nigeria after your exact location and order are confirmed."],
            ["How do I confirm availability?", "Open any product page and send its pre-filled WhatsApp enquiry. The team will confirm the exact available unit."],
            ["Can you recommend a laptop for my budget?", "Yes. Tell us your budget, intended use and preferred screen size, and we’ll shortlist suitable current stock."],
            ["Where is your store located?", `Visit Vintech at ${siteConfig.address}. Call or WhatsApp before visiting.`],
          ].map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="final-cta">
        <div className="section-shell">
          <p className="eyebrow"><span /> Personal recommendation</p>
          <h2>Not sure which laptop fits your needs?</h2>
          <p>Tell us your budget and what you need the laptop for. Our team will recommend the best available options.</p>
          <div>
            <Link className="button button-lime button-large" href="/contact">Get a recommendation</Link>
            <a className="button button-outline button-large" href={whatsappUrl("Hello Vintech Global, please recommend a laptop for me. My budget is ___ and I need it for ___.")} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
