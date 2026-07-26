import Link from "next/link";
import { siteConfig, telUrl, whatsappUrl } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid section-shell">
        <div className="footer-brand">
          <p className="wordmark"><span className="wordmark-mark">C</span><span>CHEX <b>COMPUTERS</b></span></p>
          <p>{siteConfig.description}</p>
          <a className="text-link" href={whatsappUrl("Hello CHEX Computers, I would like to make an enquiry.")} target="_blank" rel="noreferrer">Start a WhatsApp enquiry ↗</a>
        </div>
        <div><h3>Shop</h3><Link href="/shop">All laptops</Link><Link href="/shop?category=Business+laptops">Business laptops</Link><Link href="/shop?category=Workstations">Workstations</Link><Link href="/wholesale">Wholesale supply</Link></div>
        <div><h3>Support</h3><Link href="/why-chex">Why CHEX</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/#faq">Buying FAQ</Link></div>
        <div><h3>Visit</h3><p>{siteConfig.address}</p><p>{siteConfig.hours}</p><a href={telUrl()}>Call {siteConfig.phoneDisplay}</a><a href={whatsappUrl("Hello CHEX Computers, I would like to make an enquiry.")} target="_blank" rel="noreferrer">WhatsApp {siteConfig.whatsappDisplay}</a></div>
      </div>
      <div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} CHEX COMPUTERS LTD</span><span>Retail · Wholesale · Corporate supply</span></div>
    </footer>
  );
}
