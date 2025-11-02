import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      {product.newProduct && <span className="label-new">NEW PRODUCT</span>}
      {product.outOfStock && <span className="label-out-stock">OUT OF STOCK</span>}
      {product.customTag && <span className="label-tag">{product.customTag}</span>}

      <img
        src={product.image}
        alt={product.title || "product image"}
        className="product-image"
      />

      <h3 className="product-title" title={product.title || "PRODUCT NAME"}>
        {product.title || "PRODUCT NAME"}
      </h3>

      <p className="price-info">Sign in or Create an account to see pricing</p>

      <button
        aria-label="Add to wishlist"
        className="wishlist-btn"
        type="button"
      >
        ♡
      </button>
    </article>
  );
};

export default ProductCard;