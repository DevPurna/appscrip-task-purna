import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({
    customizable: false,
    totalItems: 0,
    hideFilter: false,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilters((prev) => ({ ...prev, totalItems: data.length }));
      });
  }, []);

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="intro-section">
          <h2 className="main-heading" tabIndex="0">
            DISCOVER OUR PRODUCTS
          </h2>
          <p className="intro-text">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </section>

        <section className="content-section">
          {!filters.hideFilter && (
            <Filters filters={filters} setFilters={setFilters} />
          )}
          <ProductGrid products={products} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;