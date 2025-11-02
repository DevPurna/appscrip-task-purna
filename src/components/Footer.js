import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="top-footer-section">
          {/* Newsletter Section */}
          <div className="newsletter-section">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>

            <form
              onSubmit={subscribe}
              className="newsletter-form"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your e-mail..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <h4>CURRENCY</h4>
            <p>
              <span role="img" aria-label="US flag">
                🇺🇸
              </span>{" "}
              USD
            </p>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom-section">
          {/* Left Quick Links */}
          <div className="quick-links">
            <h4>mettà muse</h4>
            <ul>
              {[
                "About Us",
                "Stories",
                "Artisans",
                "Boutiques",
                "Contact Us",
                "EU Compliances Docs",
              ].map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Quick Links */}
          <div className="quick-links">
            <h4>QUICK LINKS</h4>
            <ul>
              {[
                "Orders & Shipping",
                "Join/Login as a Seller",
                "Payment & Pricing",
                "Return & Refunds",
                "FAQs",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Payments */}
          <div className="social-section">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                📸
              </a>
              <a href="#" aria-label="LinkedIn">
                🔗
              </a>
            </div>

            <p className="accepts-label">mettā muse ACCEPTS</p>

            <div className="payment-icons">
              <img
                src="https://img.icons8.com/color/48/000000/google-pay.png"
                alt="Google Pay"
              />
              <img
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                alt="MasterCard"
              />
              <img
                src="https://img.icons8.com/color/48/000000/paypal.png"
                alt="PayPal"
              />
              <img
                src="https://img.icons8.com/color/48/000000/amex.png"
                alt="American Express"
              />
              <img
                src="https://img.icons8.com/ios-filled/50/000000/apple-pay.png"
                alt="Apple Pay"
              />
              <img
                src="https://img.icons8.com/color/48/000000/digital-wallet.png"
                alt="DPay"
              />
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <p className="footer-copy">
          &copy; 2023 mettāmuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
