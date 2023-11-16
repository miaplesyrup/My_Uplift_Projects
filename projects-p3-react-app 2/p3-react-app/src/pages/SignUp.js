import "../assets/css/signUp.css";

const SignUp = () => {
	document.title = "Sign Up | TRIPnerary";
	return (
		<div id="signUp">
			<div className="container">
				<div className="signUp--wrapper signUp--grid">
					<div className="signUp--left"></div>
					<div className="signUp--right">
						<h1>Your next adventure starts here!</h1>
						<form className="signUp--form">
							<div className="form-control">
								<p className="label-title">Email Address</p>
								<input type="text" className="input-control" />
							</div>
							<div className="form-control">
								<p className="label-title">Account Type</p>
								<select>
									<option>Travel Agency</option>
									<option>Joiner</option>
								</select>
							</div>
							<div className="form-control">
								<p className="label-title">Password</p>
								<input type="password" className="input-control" />
							</div>
							<div className="form-control">
								<p className="label-title">Retype</p>
								<input type="password" className="input-control" />
							</div>
							<div className="form-control">
								<label className="checkbox-label">
									<input type="checkbox" /> Agree to Terms & Use
								</label>
							</div>
							<div className="form-control">
								<button className="btn-link btn-theme">
									<h2 className="nogaps">Sign Up</h2>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp;