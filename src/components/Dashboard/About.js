import React from 'react'
import AnimIcon4 from '../../images/icons/anim-icon-4.png'

function About() {
	const animIcon4 = {
		backgroundImage: `url(${AnimIcon4})`
	}

	return (
		<>
			{/* about-section */}
			<section className="about-section bg-color-1" id="about">
				<div className="anim-icon">
					<div className="icon icon-1 rotate-me" style={animIcon4}></div>
				</div>
				<div className="auto-container">
					<div className="sec-title centred">
						<h6>About Corona</h6>
						<h2>
							Coronavirus Disease (COVID-19) <br />
							Outbreak Situation
						</h2>
					</div>
					<div className="row clearfix">
						<div className="col-lg-6 col-md-12 col-sm-12 image-column">
							<figure
								className="image-box wow slideInLeft animated animated"
								data-wow-delay="00ms"
								data-wow-duration="1500ms"
							>
								<img src="assets/images/resource/about-1.png" alt="" />
							</figure>
						</div>
						<div className="col-lg-6 col-md-12 col-sm-12 content-column">
							<div className="content-box">
								<div className="tabs-box">
									<div className="tab-btn-box centred">
										<ul className="tab-btns tab-buttons clearfix">
											<li className="tab-btn active-btn" data-tab="#tab-1">
												Overview
											</li>
											<li className="tab-btn" data-tab="#tab-2">
												Treatment
											</li>
										</ul>
									</div>
									<div className="tabs-content">
										<div className="tab active-tab" id="tab-1">
											<div className="text">
												<p>
													Coronavirus disease (COVID-19) is an infectious
													disease caused by a newly discovered
													coronavirus.
												</p>
												<p>
													Most people infected with the COVID-19 virus
													will experience mild to moderate respiratory
													illness and recover without requiring special
													treatment. Older people, and those with
													underlying medical problems like cardiovascular
													disease, diabetes, chronic respiratory disease,
													and cancer are more likely to develop serious
													illness.
												</p>
												<ul className="list-item clearfix">
													<li>Avoid touching your face.</li>
													<li>
														Cover your mouth and nose when coughing.
													</li>
													<li>Stay home if you feel unwell.</li>
												</ul>
											</div>
										</div>
										<div className="tab" id="tab-2">
											<div className="text">
												<p>
													Coronavirus disease (COVID-19) is an infectious
													disease caused by a newly discovered
													coronavirus.
												</p>
												<p>
													Most people infected with the COVID-19 virus
													will experience mild to moderate respiratory
													illness and recover without requiring special
													treatment. Older people, and those with
													underlying medical problems like cardiovascular
													disease, diabetes, chronic respiratory disease,
													and cancer are more likely to develop serious
													illness.
												</p>
												<ul className="list-item clearfix">
													<li>Avoid touching your face.</li>
													<li>
														Cover your mouth and nose when coughing.
													</li>
													<li>Stay home if you feel unwell.</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* about-section end */}
		</>
	)
}

export default About
