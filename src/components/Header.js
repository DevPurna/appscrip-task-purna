import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header-top">
      <button className="logo-btn" aria-label="logo">
        <img src="/assets/logo.png" alt="Logo" />
      </button>

      <h1 className="text-logo">LOGO</h1>

      <div className="header-icons">
        <button aria-label="Search" className="icon-btn">
          <img src="/assets/search-normal.png" alt="Search" />
        </button>
        <button aria-label="Favorites" className="icon-btn">
          <img src="/assets/heart.png" alt="Favorites" />
        </button>
        <button aria-label="Bag" className="icon-btn">
          <img src="/assets/shopping-bag.png" alt="Bag" />
        </button>
        <button aria-label="User" className="icon-btn">
          <img src="/assets/profile.png" alt="User" />
        </button>
        <button aria-label="Language" className="icon-btn language-select">
          ENG ▼
        </button>
      </div>
    </div>

    <nav className="nav">
      <ul>
        {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
