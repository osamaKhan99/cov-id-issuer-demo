import React, { useState } from 'react'
import { Button } from 'reactstrap'

import QRCodeModal from './QRCodeModal'

function Issuer() {
	const [modal, setModal] = useState(false)

	const toggle = () => setModal(!modal)

	return (
		<>
			<QRCodeModal toggle={toggle} modal={modal} className="blank" />
			<section className="login-section bg-color-1">
				<div className="container h-100">
					<div className="d-flex justify-content-center h-100">
						<div className="user_card">
							<div className="d-flex justify-content-center">
								<div className="brand_logo_container">
									<img
										src="./assets/images/logo-trustnet-covid.png"
										className="brand_logo"
										alt="Logo"
									/>
								</div>
							</div>
							<div className="d-flex justify-content-center form_container">
								<form>
									<div className="input-group mb-3">
										<div className="input-group-append">
											<span className="input-group-text">
												<i className="fas fa-user"></i>
											</span>
										</div>
										<input
											type="text"
											name=""
											className="form-control input_user"
											placeholder="passport/nic #"
										/>
									</div>
									<div className="input-group mb-2">
										<div className="input-group-append">
											<span className="input-group-text">
												<i className="fas fa-key"></i>
											</span>
										</div>
										<input
											type="text"
											name=""
											className="form-control input_pass"
											placeholder="vaccination barcode"
										/>
									</div>
									<div className="d-flex justify-content-center mt-3">
										<Button color="danger" onClick={toggle}>
											{/* <img className="connect-icon" src="./assets/images/connectButton@3x.png" alt="" />     */}
											Issue Vaccination Certificate
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Issuer
