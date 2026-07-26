import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "../../components/ProductCard";
import { getProduct, products } from "../../data/products";
import { productWhatsappUrl, telUrl } from "../../data/site";

export const dynamicParams = false;

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.shortDescription, ...(product.images[0] ? { openGraph: { images: [product.images[0]] } } : {}) } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const href = `/products/${product.slug}`;
  const specs = [["Catalogue ID", product.id], ["Brand", product.brand], ["Model", product.model], ["Release year", product.releaseYear], ["Processor", product.processor], ["Processor generation", product.processorGeneration], ["RAM", product.ram], ["Maximum RAM", product.maximumRam], ["Storage", product.storage], ["Maximum storage", product.maximumStorage], ["Storage type", product.storageType], ["Graphics", product.graphics], ["Screen", product.screen], ["Resolution", product.resolution], ["Panel", product.panel], ["Touchscreen", product.touchscreen], ["Operating system", product.operatingSystem], ["Battery", product.battery], ["Battery life", product.batteryLife], ["Ports", product.ports], ["Weight", product.weight], ["Colour", product.color], ["Condition", product.condition]];
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const productJson = { "@context": "https://schema.org", "@type": "Product", name: product.name, image: product.images, description: product.shortDescription, sku: product.id, brand: { "@type": "Brand", name: product.brand } };
  return <main className="inner-page product-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJson) }} />
    <div className="breadcrumbs section-shell"><Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><b>{product.name}</b></div>
    <section className="product-detail section-shell"><div className="product-gallery"><div className="gallery-main">{product.images[0] ? <img src={product.images[0]} alt={`${product.name} front view`} decoding="async" referrerPolicy="no-referrer" /> : <div className="detail-placeholder"><span>{product.brand}</span><b>{product.name}</b><small>{product.id}</small></div>}</div>{product.images.length > 1 && <div className="gallery-thumbs">{product.images.slice(1).map((image, index) => <img src={image} key={image} alt={`${product.name} additional view ${index + 2}`} loading="lazy" decoding="async" referrerPolicy="no-referrer" />)}</div>}</div>
      <div className="product-info"><p className="eyebrow"><span /> {product.brand} · {product.category}</p><h1>{product.name}</h1><p className="detail-lead">{product.shortDescription}</p><div className="detail-status"><p><span>Availability</span>{product.stockStatus}</p><p><span>Condition</span>{product.condition}</p><p><span>Catalogue ID</span>{product.id}</p><p><span>Support</span>{product.warranty}</p></div><div className="detail-actions"><a className="button button-lime button-large" href={productWhatsappUrl(product.name, href)} target="_blank" rel="noreferrer">Ask on WhatsApp</a><a className="button button-outline button-large" href={telUrl()}>Call CHEX</a></div><p className="honesty-note">Confirm the exact available unit, battery report, condition and included extras before payment.</p></div>
    </section>
    <section className="detail-content section-shell"><article><p className="eyebrow"><span /> Product overview</p><h2>Built for the work you do.</h2><p>{product.fullDescription}</p><h3>Suitable for</h3><div className="use-tags">{product.useCases.map((item) => <span key={item}>{item}</span>)}</div><h3>What is included</h3><ul>{product.includedItems.map((item) => <li key={item}>{item}</li>)}</ul><h3>Delivery and support</h3><p>Pickup can be coordinated in Computer Village, Ikeja. Nationwide delivery options and support terms are confirmed for your location and exact unit before payment.</p></article><aside><h2>Full specification</h2><dl>{specs.map(([name, value]) => <div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}</dl></aside></section>
    <section className="section section-shell"><div className="section-heading"><div><p className="eyebrow"><span /> More current stock</p><h2>Related laptops</h2></div></div><div className="product-grid related-grid">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
  </main>;
}
