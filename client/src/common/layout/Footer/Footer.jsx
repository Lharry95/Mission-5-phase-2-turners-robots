import "./Footer.css";

function Footer() {
  const topLinks = [
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

  const columns = [
    {
      title: "Marketplace",
      icon: "/footer-marketplace-icon-placeholder.png",
      items: [
        "Latest deals",
        "Stores",
        "Closing soon",
        "$1 reserve",
        "Home & Living",
      ],
    },
    {
      title: "Property",
      icon: "/footer-property-icon-placeholder.png",
      items: [
        "International property",
        "Property news & guides",
        "Sold Properties",
        "OneHub for agents",
        "Find a Real Estate Agent",
      ],
    },
    {
      title: "Motors",
      icon: "/footer-motors-icon-placeholder.png",
      items: [
        "Cars for sale",
        "Motorbikes for sale",
        "Buying & selling advice",
        "Dealer news & info",
        "Sell my car",
      ],
    },
    {
      title: "Jobs",
      icon: "/footer-jobs-icon-placeholder.png",
      items: [
        "Browse job categories",
        "Careers advice",
        "JobSmart",
        "Advertisers advice",
        "Salary guide",
      ],
    },
    {
      title: "Services",
      icon: "/footer-services-icon-placeholder.png",
      items: [
        "Trades",
        "Domestic services",
        "Events & entertainment",
        "Health & wellbeing",
        "List my services",
      ],
    },
    {
      title: "Community",
      icon: "/footer-community-icon-placeholder.png",
      items: [
        "Help",
        "Announcements",
        "Trust & safety",
        "Seller information",
        "Help center community",
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__system-bar">
        <div className="site-footer__system-inner">
          <p className="site-footer__system-text">
            We are upgrading some of our systems
          </p>

          <div className="site-footer__system-links">
            <a href="#" className="site-footer__system-link">
              <img
                src="/footer-info-icon-placeholder.png"
                alt=""
                aria-hidden="true"
                className="site-footer__system-icon"
              />
              <span>Learn more</span>
            </a>

            <a href="#" className="site-footer__system-link">
              <img
                src="/footer-message-icon-placeholder.png"
                alt=""
                aria-hidden="true"
                className="site-footer__system-icon"
              />
              <span>Tell us what you think</span>
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__main">
        <div className="site-footer__inner">
          <div className="site-footer__brand-row">
            <img
              className="site-footer__logo"
              src="/trade-me-logo-placeholder.png"
              alt="Trade Me"
            />
          </div>
<div className="site-footer__divider" />
          <div className="site-footer__columns">
            {columns.map((column) => (
              <div key={column.title} className="site-footer__column">
                <div className="site-footer__column-title-row">
                  <img
                    src={column.icon}
                    alt=""
                    aria-hidden="true"
                    className="site-footer__column-icon"
                  />
                  <h3 className="site-footer__column-title">{column.title}</h3>
                </div>

                <div className="site-footer__column-links">
                  {column.items.map((item) => (
                    <a key={item} href="#" className="site-footer__column-link">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <div className="site-footer__partners">
            {topLinks.map((item) => (
              <a key={item} href="#" className="site-footer__partner-link">
                {item}
              </a>
            ))}
          </div>

          <div className="site-footer__bottom-divider" />

          <div className="site-footer__bottom-row">
            <p className="site-footer__copyright">© 2026 Trade Me Limited</p>

            <div className="site-footer__bottom-links">
              {bottomLinks.map((item) => (
                <a key={item} href="#" className="site-footer__bottom-link">
                  {item}
                </a>
              ))}
            </div>

            <div className="site-footer__socials">
              <img
                src="/footer-social-1-placeholder.png"
                alt=""
                aria-hidden="true"
                className="site-footer__social-icon"
              />
              <img
                src="/footer-social-2-placeholder.png"
                alt=""
                aria-hidden="true"
                className="site-footer__social-icon"
              />
              <img
                src="/footer-social-3-placeholder.png"
                alt=""
                aria-hidden="true"
                className="site-footer__social-icon"
              />
              <img
                src="/footer-social-4-placeholder.png"
                alt=""
                aria-hidden="true"
                className="site-footer__social-icon"
              />
              <img
                src="/footer-social-5-placeholder.png"
                alt=""
                aria-hidden="true"
                className="site-footer__social-icon"
              />
              <img
                src="/footer-social-6-placeholder.png"
                alt=""
                aria-hidden="true"
                className="site-footer__social-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;