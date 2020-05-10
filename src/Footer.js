import React from 'react'
import Shape3 from './shape/shape-3.png';
import AnimIcon4 from './icons/anim-icon-4.png';
import AnimIcon3 from './icons/anim-icon-3.png';
import AnimIcon6 from './icons/anim-icon-6.png';


function Footer() {
    const shapeLayer = 
        {
            backgroundImage: `url(${Shape3})` 
        };
    const animIcon4 = 
        {
            backgroundImage: `url(${AnimIcon4})` 
        };
    const animIcon3 = 
        {
            backgroundImage: `url(${AnimIcon3})` 
        };
    const animIcon6 = 
        {
            backgroundImage: `url(${AnimIcon6})` 
        };

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
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="logo-widget footer-widget">
                                <figure className="footer-logo"><a href="index.html"><img src="assets/images/footer-logo.png" alt="" /></a></figure>
                                <div className="text">
                                    <p>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads.</p>
                                    <p>Protect yourself and others from infec- tion by washing your hands or using an</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="links-widget service footer-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li><a href="index.html">About Us</a></li>
                                        <li><a href="index.html">Symptoms</a></li>
                                        <li><a href="index.html">Prevention</a></li>
                                        <li><a href="index.html">Our Doctors</a></li>
                                        <li><a href="index.html">Our Blog</a></li>
                                        <li><a href="index.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="links-widget region footer-widget">
                                <div className="widget-title">
                                    <h3>Regions</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li><a href="index.html">America</a></li>
                                        <li><a href="index.html">Africa</a></li>
                                        <li><a href="index.html">South East Asia</a></li>
                                        <li><a href="index.html">Europe</a></li>
                                        <li><a href="index.html">Australia</a></li>
                                        <li><a href="index.html">Westenr Pacific</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="contact-widget footer-widget">
                                <div className="widget-title">
                                    <h3>Contacts</h3>
                                </div>
                                <ul className="info-list clearfix">
                                    <li><i className="fas fa-map-marker-alt"></i>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</li>
                                    <li><i className="fas fa-microphone"></i><a href="tel:23055873407">+2(305) 587-3407</a></li>
                                    <li><i className="fas fa-envelope"></i><a href="mailto:info@example.com">info@example.com</a></li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-vimeo-v"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
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
                        <p><a href="index.html">Covid-19</a> &copy; 2020 All Right Reserved</p>
                    </div>
                    <ul className="footer-nav pull-right">
                        <li><a href="index.html">Terms of Service</a></li>
                        <li><a href="index.html">Privacy Policy</a></li>
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