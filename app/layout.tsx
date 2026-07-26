import type { Metadata } from "next";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { siteConfig, telUrl, whatsappUrl } from "./data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Vintech Global | Premium Laptops, Gaming PCs & Accessories in Lagos",
    template: "%s | Vintech Global",
  },
  description: siteConfig.description,
  keywords: [
    "laptops for sale in Lagos",
    "Alienware laptop Nigeria",
    "gaming laptops Computer Village",
    "laptop accessories Ikeja",
    "business laptops in Nigeria",
    "mobile workstations Lagos",
  ],
  openGraph: {
    title: "Vintech Global | Premium Laptops & Accessories",
    description: siteConfig.description,
    type: "website",
    locale: "en_NG",
    images: ["/vintech-logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintech Global | Premium Laptops & Accessories",
    description: siteConfig.description,
    images: ["/vintech-logo.jpg"],
  },
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
          <a href={telUrl()}>Call Vintech</a>
          <a href={whatsappUrl("Hello Vintech Global, I need help choosing a laptop.")} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </body>
    </html>
  );
}
