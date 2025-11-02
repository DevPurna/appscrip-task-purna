import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products }) => {
  return (
    <section className="product-grid-section">
      <div className="product-grid-header">
        <select className="sort-dropdown" defaultValue="recommended" aria-label="Sort products">
          <option value="recommended">RECOMMENDED</option>
          <option value="price-low">Price Low to High</option>
          <option value="price-high">Price High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="product-grid">
        {products.length === 0 && <p>No products found.</p>}
        {products.map((product) => (
          <ProductCard key={product.id || product.title} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;