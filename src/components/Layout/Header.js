import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Header() {
	const navBarItems = () => (
		<div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
			<ul className="navigation scroll-nav clearfix">
				<li className="current">
					<HashLink to="/#home">Home</HashLink>
				</li>
				<li>
					<HashLink to="/#about">About</HashLink>
				</li>
				<li>
					<HashLink to="/#howItWorks">How it works</HashLink>
				</li>
				<li>
					<HashLink to="/#faq">FAQ</HashLink>
				</li>
			</ul>
		</div>
	)

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
								<img src="assets/images/logo.png" alt="trustnet-logo" />
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
							{navBarItems()}
						</nav>
						<div className="btn-box">
							<Link to="/login" className="theme-btn">
								<i className="fas fa-wallet"></i>Issue Immunity Creds
							</Link>
						</div>
					</div>
				</div>

				{/* sticky Header */}
				<div className="sticky-header">
					<div className="outer-box clearfix">
						<div className="logo-box pull-left">
							<figure className="logo">
								<Link to="/">
									<img src="assets/images/small-logo.png" alt="" />
								</Link>
							</figure>
						</div>
						<div className="menu-area pull-right">
							<nav className="main-menu clearfix">{navBarItems()}</nav>
							<div className="btn-box">
								<Link to="/login" className="theme-btn">
									<i className="fas fa-wallet"></i>Issue Immunity Creds
								</Link>
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
	)
}

export default Header
