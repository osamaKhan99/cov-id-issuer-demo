import React from 'react'
import Shape3 from '../../images/shape/shape-3.png'
import AnimIcon4 from '../../images/icons/anim-icon-4.png'
import AnimIcon3 from '../../images/icons/anim-icon-3.png'
import AnimIcon6 from '../../images/icons/anim-icon-6.png'

function Footer() {
	const shapeLayer = {
		backgroundImage: `url(${Shape3})`
	}
	const animIcon4 = {
		backgroundImage: `url(${AnimIcon4})`
	}
	const animIcon3 = {
		backgroundImage: `url(${AnimIcon3})`
	}
	const animIcon6 = {
		backgroundImage: `url(${AnimIcon6})`
	}

	return (
		<>
			{/* main-footer */}
			<footer className="main-footer">
				<div className="shape-layer" style={shapeLayer}></div>
				<div className="anim-icon">
					<div className="icon icon-1 rotate-me" style={animIcon4}></div>
					<div className="icon icon-2 rotate-me" style={animIcon3}></div>
					<div className="icon icon-3 rotate-me" style={animIcon6}></div>
				</div>
				<div className="footer-top">
					<div className="auto-container">
						<div className="widget-section">
							<div className="row clearfix">
								<div className="col-lg-4 col-md-6 col-sm-12 footer-column">
									<div className="logo-widget footer-widget">
										<figure className="footer-logo">
											<a href="index.html">
												<img
													src="assets/images/aga-khan-transparent.png"
													alt=""
													href="https://hospitals.aku.edu/pakistan/Pages/default.aspx"
												/>
											</a>
										</figure>
										<div className="text">
											<p>
												The best way to prevent and slow down transmission
												is be well informed about the COVID-19 virus, the
												disease it causes and how it spreads.
											</p>
											<p>
												Protect yourself and others from infec- tion by
												washing your hands or using an
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-12 footer-column">
									<div className="links-widget service footer-widget">
										<div className="widget-title">
											<h3>Community Partners</h3>
										</div>
										<div className="widget-content">
											<ul className="list clearfix">
												<li>
													<img
														src="./assets/images/CCI-right-text-black.png"
														alt=""
														title="Covid Credential Initiative"
														height="140px"
														width="140px"
													/>
												</li>
												<li>
													<a href="https://xord.one/">
														<img
															src="./assets/images/xord-logo-bluegray.png"
															alt=""
															title=" XORD"
															height="100px"
															width="100px"
															href="https://xord.one/"
														/>
													</a>
												</li>
												<div className="widget-title">
													<h3>Built by</h3>
												</div>
												<li>
													<a href="https://trust.net.pk/">
														<img
															src="./assets/images/trustnet-logo.png"
															alt=""
															title=" TrustNet Pakistan"
															height="150px"
															width="150px"
														/>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-12 footer-column">
									<div className="contact-widget footer-widget">
										<div className="widget-title">
											<h3>Powered by</h3>
										</div>
										<ul className="info-list clearfix">
											<li>
												<a href="">
													<img
														src="./assets/images/indy-logo.png"
														alt=""
														title="Hyperledger Indy"
														height="145px"
														width="145px"
														href=""
													/>
												</a>
											</li>
											<li>
												<a href="">
													<img
														src="./assets/images/aries-logo.png"
														alt=""
														title="Hyperledger Aries"
														height="140px"
														width="140px"
														href=""
													/>
												</a>
											</li>
											<li>
												<a href="https://vonx.io/">
													<img
														src="./assets/images/VON-logo.png"
														alt=""
														title="Vonx"
														height="200px"
														width="200px"
													/>
												</a>
											</li>
										</ul>
										<ul className="social-links clearfix">
											<li>
												<a href="index.html">
													<i className="fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="index.html">
													<i className="fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="index.html">
													<i className="fab fa-vimeo-v"></i>
												</a>
											</li>
											<li>
												<a href="index.html">
													<i className="fab fa-linkedin-in"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="auto-container">
						<div className="bottom-inner clearfix">
							<div className="copyright pull-left">
								<p>
									<a href="index.html">Covid-19</a> &copy; 2020 All Right Reserved
								</p>
							</div>
							<ul className="footer-nav pull-right">
								<li>
									<a href="index.html">Terms of Service</a>
								</li>
								<li>
									<a href="index.html">Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			{/* main-footer end */}
		</>
	)
}

export default Footer
