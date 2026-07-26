import type { Metadata } from "next";
import { ShopClient } from "../components/ShopClient";

export const metadata: Metadata = { title: "Shop Laptops", description: "Browse Dell, HP and business laptops available from CHEX Computers in Computer Village, Ikeja." };

export default function ShopPage() {
  return <main className="inner-page"><section className="page-hero section-shell"><p className="eyebrow"><span /> 227-laptop catalogue</p><h1>Find the right laptop.<br /><em>Confirm the exact unit.</em></h1><p>Search all 227 foreign-used laptops by model, brand, processor, category or use case. Availability and exact unit condition are confirmed before every order.</p></section><section className="section-shell shop-section"><ShopClient /></section></main>;
}
