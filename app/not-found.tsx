import Link from "next/link";

export default function NotFound() { return <main className="not-found section-shell"><span>404</span><h1>This page isn’t in stock.</h1><p>The link may have changed, or the product may no longer be listed.</p><div><Link className="button button-lime" href="/shop">Browse laptops</Link><Link className="button button-outline" href="/contact">Contact CHEX</Link></div></main>; }
