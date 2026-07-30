export const siteConfig = {
  name: "VINTECH GLOBAL COMMUNICATIONS & SERVICES LTD",
  shortName: "VINTECH GLOBAL",
  description:
    "Vintech Global supplies premium gaming laptops, business laptops, mobile workstations and genuine laptop accessories in Computer Village, Ikeja.",
  location: "No. 20 Francis Oremeji Street, Computer Village, Ikeja, Lagos",
  address:
    "No. 20 Francis Oremeji Street, Computer Village, Ikeja, Lagos",
  phone: "+2348036341852",
  phoneDisplay: "0803 634 1852",
  whatsapp: "2348036341852",
  whatsappDisplay: "+234 803 634 1852",
  email: "",
  hours: "Call or WhatsApp before visiting",
  siteUrl: "https://vintechglobal.netlify.app",
};

export function whatsappUrl(message: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function telUrl() {
  return `tel:${siteConfig.phone}`;
}

export function productWhatsappUrl(name: string, path: string) {
  const url = `${siteConfig.siteUrl}${path}`;
  return whatsappUrl(
    `Hello Vintech Global, I’m interested in the ${name}. Please confirm today’s price, availability, the exact unit condition and delivery options. Vintech product page: ${url}`,
  );
}
