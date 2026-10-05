import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>✈️ SkyBook</h2>
          <p>Book your flights quickly, safely, and at the best prices.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search Flights</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="/payment">Payment</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@skybook.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Bengaluru, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SkyBook. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;