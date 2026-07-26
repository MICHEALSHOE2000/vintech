import Link from "next/link";
import { siteConfig, telUrl, whatsappUrl } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid section-shell">
        <div className="footer-brand">
          <p className="wordmark vintech-wordmark"><img src="/vintech-logo.jpg" alt="Vintech Global" /></p>
          <p>{siteConfig.description}</p>
          <a className="text-link" href={whatsappUrl("Hello Vintech Global, I would like to make an enquiry.")} target="_blank" rel="noreferrer">Start a WhatsApp enquiry ↗</a>
        </div>
        <div><h3>Shop</h3><Link href="/shop">All laptops</Link><Link href="/shop?category=Gaming+laptops">Gaming laptops</Link><Link href="/shop?category=Workstations">Workstations</Link><Link href="/#accessories">Accessories</Link></div>
        <div><h3>Support</h3><Link href="/why-vintech">Why Vintech</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/#faq">Buying FAQ</Link></div>
        <div><h3>Visit</h3><p>{siteConfig.address}</p><p>{siteConfig.hours}</p><a href={telUrl()}>Call {siteConfig.phoneDisplay}</a><a href={whatsappUrl("Hello Vintech Global, I would like to make an enquiry.")} target="_blank" rel="noreferrer">WhatsApp {siteConfig.whatsappDisplay}</a></div>
      </div>
      <div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} VINTECH GLOBAL COMMUNICATIONS & SERVICES LTD</span><span>Gaming · Business · Workstations · Accessories</span></div>
    </footer>
  );
}
