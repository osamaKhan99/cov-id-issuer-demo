import React from 'react'
import { useHistory } from 'react-router-dom'

function Login() {
	let history = useHistory()

	const loginUser = (event) => {
		event.preventDefault()

		// Add login logic here

		history.push('/issue')
	}
	return (
		// <!-- login-section -->
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
							<form type="POST" onSubmit={loginUser}>
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
										placeholder="username"
									/>
								</div>
								<div className="input-group mb-2">
									<div className="input-group-append">
										<span className="input-group-text">
											<i className="fas fa-key"></i>
										</span>
									</div>
									<input
										type="password"
										name=""
										className="form-control input_pass"
										placeholder="password"
									/>
								</div>
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input
											type="checkbox"
											className="custom-control-input"
											id="customControlInline"
										/>
										<label
											className="custom-control-label"
											htmlFor="customControlInline"
										>
											Remember me
										</label>
									</div>
								</div>
								<div className="d-flex justify-content-center mt-3 login_container">
									<button type="submit" name="button" className="btn login_btn">
										Login
									</button>
								</div>
							</form>
						</div>

						<div className="mt-4">
							<div className="d-flex justify-content-center links">
								<a href="./">Forgot your password?</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
