import type { Metadata } from "next";
import { EnquiryForm } from "../components/EnquiryForm";
import { siteConfig, telUrl, whatsappUrl } from "../data/site";

export const metadata: Metadata = { title: "Contact", description: "Contact CHEX Computers for laptop recommendations, availability and wholesale enquiries in Lagos." };

export default function ContactPage() {
  return <main className="inner-page"><section className="page-hero section-shell"><p className="eyebrow"><span /> Contact CHEX</p><h1>Tell us what you need.<br /><em>We’ll narrow the options.</em></h1><p>For the fastest recommendation, include your budget, intended use, preferred screen size and location.</p></section><section className="contact-cards section-shell"><article><span>WhatsApp</span><h2>Start a guided enquiry</h2><p>Message {siteConfig.whatsappDisplay} with your budget and use case for a shortlist of current options.</p><a className="text-link" href={whatsappUrl("Hello CHEX Computers, I need a laptop recommendation. My budget is ___ and I need it for ___.")} target="_blank" rel="noreferrer">Open WhatsApp ↗</a></article><article><span>Visit</span><h2>Computer Village, Ikeja</h2><p>{siteConfig.address}. Call or WhatsApp before visiting.</p></article><article><span>Call</span><h2>{siteConfig.phoneDisplay}</h2><p>Speak directly with the CHEX team about availability, pickup or delivery.</p><a className="text-link" href={telUrl()}>Call CHEX ↗</a></article></section><section className="form-section"><div className="section-shell form-layout"><div><p className="eyebrow"><span /> Contact form</p><h2>Prepare your enquiry.</h2><p>Share what you need, then continue on WhatsApp with the prepared details.</p></div><EnquiryForm type="contact" /></div></section></main>;
}
