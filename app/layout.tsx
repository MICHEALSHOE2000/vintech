import type { Metadata } from "next";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { siteConfig, telUrl, whatsappUrl } from "./data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "CHEX Computers | Laptops in Computer Village, Ikeja",
    template: "%s | CHEX Computers",
  },
  description: siteConfig.description,
  keywords: ["laptops for sale in Lagos", "laptop store in Computer Village Ikeja", "wholesale laptop supplier in Lagos", "business laptops in Nigeria"],
  openGraph: { title: "CHEX COMPUTERS LTD", description: siteConfig.description, type: "website", locale: "en_NG" },
  twitter: { card: "summary_large_image", title: "CHEX COMPUTERS LTD", description: siteConfig.description },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <div className="mobile-action-bar" aria-label="Quick contact actions">
          <a href={telUrl()}>Call CHEX</a>
          <a href={whatsappUrl("Hello CHEX Computers, I need help choosing a laptop.")} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </body>
    </html>
  );
}
