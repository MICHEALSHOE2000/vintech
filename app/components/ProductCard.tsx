import Link from "next/link";
import { Product } from "../data/products";
import { productWhatsappUrl } from "../data/site";

export function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;
  return (
    <article className="product-card">
      <Link className="product-image" href={href} aria-label={`View ${product.name}`}>
        {product.images[0] ? <img src={product.images[0]} alt={`${product.name} available from CHEX Computers`} loading="lazy" decoding="async" referrerPolicy="no-referrer" /> : <span className="product-placeholder"><small>{product.brand}</small><b>{product.name}</b><em>{product.id}</em></span>}
        <span className="stock-chip"><i /> {product.stockStatus}</span>
      </Link>
      <div className="product-body">
        <p className="product-brand">{product.brand} · {product.category}</p>
        <h3><Link href={href}>{product.name}</Link></h3>
        <dl className="spec-row">
          <div><dt>Processor</dt><dd>{product.processor}</dd></div>
          <div><dt>Memory</dt><dd>{product.ram}</dd></div>
          <div><dt>Storage</dt><dd>{product.storage}</dd></div>
        </dl>
        <div className="card-actions">
          <Link className="button button-outline" href={href}>View details</Link>
          <a className="button button-lime" href={productWhatsappUrl(product.name, href)} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
        </div>
      </div>
    </article>
  );
}
