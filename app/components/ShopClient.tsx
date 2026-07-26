"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { products } from "../data/products";

export function ShopClient({ initialQuery = "", initialCategory = "", initialUse = "" }: { initialQuery?: string; initialCategory?: string; initialUse?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [processor, setProcessor] = useState("");
  const [useCase, setUseCase] = useState(initialUse);
  const [stock, setStock] = useState("");
  const [sort, setSort] = useState("recommended");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  const brands = useMemo(() => [...new Set(products.map((product) => product.brand))].sort(), []);
  const categories = useMemo(() => [...new Set(products.map((product) => product.category))].sort(), []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = products.filter((product) => {
      const haystack = [product.name, product.brand, product.model, product.category, product.processor, product.processorGeneration, product.ram, product.storage, product.condition, ...product.useCases].join(" ").toLowerCase();
      return (!normalized || haystack.includes(normalized))
        && (!brand || product.brand === brand)
        && (!category || product.category === category)
        && (!processor || product.processor.toLowerCase().includes(processor.toLowerCase()))
        && (!useCase || product.useCases.some((item) => item.toLowerCase().includes(useCase.toLowerCase().replace("&", "and"))) )
        && (!stock || product.stockStatus === stock);
    });
    return [...result].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "newest") return b.id.localeCompare(a.id);
      return Number(b.featured) - Number(a.featured);
    });
  }, [query, brand, category, processor, useCase, stock, sort]);

  const clear = () => { setQuery(""); setBrand(""); setCategory(""); setProcessor(""); setUseCase(""); setStock(""); setVisibleCount(24); };

  const filterPanel = (
    <div className="filter-panel">
      <div className="filter-title"><b>Refine products</b><button type="button" onClick={clear}>Clear all</button></div>
      <label>Brand<select data-testid="brand-filter" value={brand} onChange={(event) => setBrand(event.target.value)}><option value="">All brands</option>{brands.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Category<select data-testid="category-filter" value={category} onChange={(event) => setCategory(event.target.value)}><option value="">All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Processor<select data-testid="processor-filter" value={processor} onChange={(event) => setProcessor(event.target.value)}><option value="">All processors</option><option value="Core i5">Intel Core i5</option><option value="Core i7">Intel Core i7</option></select></label>
      <label>Use case<select value={useCase} onChange={(event) => setUseCase(event.target.value)}><option value="">All use cases</option><option>Office and remote work</option><option>Coding and development</option><option>Graphics and video editing</option><option>School and university</option><option>Everyday personal use</option></select></label>
      <label>Availability<select value={stock} onChange={(event) => setStock(event.target.value)}><option value="">All stock statuses</option><option>In Stock</option><option>Out of Stock</option></select></label>
      <div className="filter-facts"><p><span>Catalogue</span>227 laptop listings</p><p><span>Condition</span>Foreign-used</p><p><span>Specifications</span>Published product details</p><p><span>Availability</span>Confirm before ordering</p></div>
    </div>
  );

  return (
    <div className="shop-layout">
      <aside className="shop-sidebar">{filterPanel}</aside>
      <div className="shop-results">
        <div className="shop-controls">
          <div className="shop-search"><label className="sr-only" htmlFor="shop-query">Search all products</label><input id="shop-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, model, processor, use case…" /></div>
          <button className="mobile-filter-button" type="button" onClick={() => setFiltersOpen(true)}>Filters</button>
          <label className="sort-label"><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Catalogue order</option><option value="newest">Latest catalogue ID</option><option value="name">Name: A to Z</option></select></label>
        </div>
        <p className="result-count"><b>{filtered.length}</b> {filtered.length === 1 ? "product" : "products"} matching your selection</p>
        {filtered.length ? <><div className="product-grid shop-product-grid">{filtered.slice(0, visibleCount).map((product) => <ProductCard key={product.id} product={product} />)}</div>{visibleCount < filtered.length && <div className="load-more"><p>Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} laptops</p><button className="button button-outline button-large" type="button" onClick={() => setVisibleCount((count) => count + 24)}>Load 24 more</button></div>}</> : <div className="empty-state"><span>0</span><h2>No matching laptops yet.</h2><p>Clear one or more filters, or ask CHEX to source the configuration you need.</p><button className="button button-lime" type="button" onClick={clear}>Clear all filters</button></div>}
      </div>
      <div className={`filter-drawer ${filtersOpen ? "open" : ""}`} aria-hidden={!filtersOpen}><button className="drawer-close" type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters">×</button>{filterPanel}<button className="button button-lime" type="button" onClick={() => setFiltersOpen(false)}>Show {filtered.length} products</button></div>
      {filtersOpen && <button className="drawer-backdrop" aria-label="Close filters" onClick={() => setFiltersOpen(false)} />}
    </div>
  );
}
