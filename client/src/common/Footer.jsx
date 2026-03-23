import React from "react";
import "./Footer.css";

const footerLinks = [
  {
    heading: "Marketplace",
    links: [
      "Latest deals",
      "Stores",
      "Closing soon",
      "$1 reserve",
      "Home & Living",
    ],
  },
  {
    heading: "Property",
    links: [
      "International property",
      "Property news & guides",
      "Sold Properties",
      "OneHub for agents",
      "Find a Real Estate Agent",
    ],
  },
  {
    heading: "Motors",
    links: [
      "Cars for sale",
      "Motorbikes for sale",
      "Buying & selling advice",
      "Dealer news & info",
      "Sell my car",
    ],
  },
  {
    heading: "Jobs",
    links: [
      "Browse job categories",
      "Careers advice",
      "JobSmart",
      "Advertisers advice",
      "Salary guide",
    ],
  },
  {
    heading: "Services",
    links: [
      "Trades",
      "Domestic services",
      "Events & entertainment",
      "Health & wellbeing",
      "List my services",
    ],
  },
  {
    heading: "Community",
    links: [
      "Help",
      "Announcements",
      "Trust & safety",
      "Seller information",
      "Help center community",
    ],
  },
];

const partnerLinks = [
  "Trade Me Insurance",
  "homes.co.nz",
  "MotorWeb",
  "CarExpert",
  "Holiday Houses",
  "FindSomeone",
];

const bottomLinks = [
  "Desktop site",
  "Advertise",
  "Privacy policy",
  "About Us",
  "Terms & conditions",
  "Careers",
  "Contact Us",
  "News",
];

function Footer() {
  return (
    <footer className="footer">
      {/* Upgrade Notice */}
      <div className="footer-notice">
        <span>We are upgrading some of our systems</span>
        <a href="#">ⓘ Learn more</a>
        <a href="#">💬 Tell us what you think</a>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        {/* Logo */}
        <div className="footer-logo">
          <span className="logo-trade">trade</span>
          <span className="logo-me">me</span>
          <span className="logo-kiwi">🐦</span>
        </div>

        {/* Links Grid */}
        <div className="footer-links">
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer-col">
              <h3 className="footer-heading">{col.heading}</h3>
              {col.links.map((link) => (
                <a key={link} href="#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Partner Links */}
      <div className="footer-partners">
        {partnerLinks.map((link) => (
          <a key={link} href="#" className="partner-link">
            {link}
          </a>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span>© 2026 Trade Me Limited</span>
        <div className="bottom-links">
          {bottomLinks.map((link) => (
            <a key={link} href="#" className="bottom-link">
              {link}
            </a>
          ))}
        </div>
        <div className="social-icons">
          <span>🌐</span>
          <span>📱</span>
          <span>📷</span>
          <span>👥</span>
          <span>💼</span>
          <span>▶️</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
