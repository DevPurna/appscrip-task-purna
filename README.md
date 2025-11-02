# 🛍️ Product Listing Page (PLP) - mettā muse

A fully functional **React-based Product Listing Page (PLP)** replicating the design specified in the Figma file and reference images.  
The page includes a header with navigation, filter sidebar, product grid, and footer with newsletter and contact details.

---

## 📚 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup & Installation](#setup--installation)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [Design & Responsiveness](#design--responsiveness)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

---

## 🧩 Project Overview

This project is a **product listing page** that displays products fetched from a public API:  
👉 [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

### The page includes:

- A **sticky header** with logo, navigation links, and utility icons (search, wishlist, shopping cart, profile, language selector)
- **Main heading** and descriptive paragraph
- A **left sidebar** with filters like customizable checkbox and collapsible categories
- A **responsive product grid** showing:
  - Product images
  - Labels (`NEW PRODUCT`, `OUT OF STOCK`)
  - Title
  - Wishlist heart
  - “Sign in or Create an account to see pricing” notice
- A **footer** containing:
  - Newsletter subscription
  - Contact information
  - Currency details
  - Quick links
  - Social media links
  - Accepted payment methods
  - Copyright

---

## ✨ Features

- ✅ Responsive layout optimized for desktop, tablet, and mobile
- ⚡ Dynamic product grid populated from the Fake Store API
- 🧭 Interactive filters with collapsible categories and customizable option
- ♿ Accessible elements with proper ARIA attributes
- 🔍 SEO-friendly with semantic HTML structure
- 📨 Newsletter subscription form (frontend only with alert on submit)
- 🎨 Modular CSS for maintainability and scalability

---

## 🛠️ Technology Stack

- **React.js** (Functional Components + Hooks)
- **CSS** (Modular CSS files per component)
- **Fetch API** for data retrieval
- **HTML5** and **ARIA** for accessibility

---

## ⚙️ Setup & Installation

### Prerequisites:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn package manager

### Steps:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# 2️⃣ Install dependencies
npm install
# or
yarn install

# 3️⃣ Start the development server
npm start
# or
yarn start


📁 Folder Structure
/src
  /components
    Header.js
    Header.css
    Filters.js
    Filters.css
    ProductCard.js
    ProductCard.css
    ProductGrid.js
    ProductGrid.css
    Footer.js
    Footer.css
  App.js
  App.css
  index.js
/public
  index.html
README.md
package.json



🔗 API Integration

Products are fetched via the Fake Store API:

https://fakestoreapi.com/products

Fields Used:

image
title
id

Pricing display is hidden and replaced with:

“Sign in or Create an account to see pricing”
```
