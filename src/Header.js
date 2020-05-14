import React from "react";

function Header() {
  return (
    <>
      {/* main header */}
      <header className="App-header main-header">
        <div className="outer-box clearfix">
          <div className="logo-box pull-left">
            <figure className="logo">
              <a
                rel="noopener noreferrer"
                href="https://hospitals.aku.edu/pakistan/Pages/default.aspx"
                target="_blank"
              >
                <img src="assets/images/aga-khan-transparent.png" alt="" />
              </a>
            </figure>
            <br />
            <figure className="logo-covid19">
              <a href="https://trust.net.pk/covid19">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </figure>
          </div>
          {/* Mobile Navigation Toggler */}
          <div className="menu-area pull-right">
            <div className="mobile-nav-toggler">
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation scroll-nav clearfix">
                  <li className="current">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#symptoms">How it works</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="btn-box">
              <a href="login.html" className="theme-btn">
                <i className="fas fa-wallet"></i>Issue Vaccination Certificate
              </a>
            </div>
          </div>
        </div>

        {/* sticky Header */}
        <div className="sticky-header">
          <div className="outer-box clearfix">
            <div className="logo-box pull-left">
              <figure className="logo">
                <a href="index.html">
                  <img src="assets/images/small-logo.png" alt="" />
                </a>
              </figure>
            </div>
            <div className="menu-area pull-right">
              <nav className="main-menu clearfix">
                {/* Keep This Empty / Menu will come through Javascript */}
              </nav>
              <div className="btn-box">
                <a href="login.html" className="theme-btn">
                  <i className="fas fa-wallet"></i>Issue Vaccination Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="menu-outer">
            {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <a href="tel:+8801682648101">+88 01682648101</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="index.html">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span className="fab fa-facebook-square"></span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span className="fab fa-pinterest-p"></span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span className="fab fa-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
