import type { Metadata } from "next";
import { ShopClient } from "../components/ShopClient";

export const metadata: Metadata = { title: "Shop Premium Laptops", description: "Browse Alienware, Dell, HP, Lenovo, gaming laptops and mobile workstations available from Vintech Global in Computer Village, Ikeja." };

export default function ShopPage() {
  return <main className="inner-page"><section className="page-hero section-shell"><p className="eyebrow"><span /> 227-laptop catalogue</p><h1>Find your next machine.<br /><em>Confirm the exact unit.</em></h1><p>Search gaming laptops, business machines and workstations by model, brand, processor, category or use case. Availability and exact unit condition are confirmed before every order.</p></section><section className="section-shell shop-section"><ShopClient /></section></main>;
}
