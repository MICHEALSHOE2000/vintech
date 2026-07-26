export const siteConfig = {
  name: "CHEX COMPUTERS LTD",
  shortName: "CHEX",
  description:
    "Tested business laptops for retail and wholesale buyers in Lagos and across Nigeria.",
  location: "Suite 78, No. 8 Idowu Lane, Computer Village, Ikeja, Lagos",
  address:
    "No. 8 Idowu Lane, Suite 78, Computer Village, Ikeja, Ikeja Local Government, Lagos",
  phone: "+2348061355540",
  phoneDisplay: "08061355540",
  whatsapp: "2348061355540",
  whatsappDisplay: "+234 806 135 5540",
  email: "",
  hours: "Call or WhatsApp before visiting",
  siteUrl: "https://chex-computers.aderintomicheal6.chatgpt.site",
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
    `Hello CHEX Computers, I’m interested in the ${name}. Please confirm availability, the exact unit condition and delivery options. CHEX product page: ${url}`,
  );
}
