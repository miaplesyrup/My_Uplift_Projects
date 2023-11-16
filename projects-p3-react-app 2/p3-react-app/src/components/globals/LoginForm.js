import { useState } from "react";
import usersEndpoint from "../../assets/data/usersEndpoint";

const LoginForm = ({ handleLogIn }) => {
	const [email, setEmail] = useState("");
	const [passowrd, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const userSession = usersEndpoint.filter((user, index) => user.userEmail === email.toLowerCase() && user.password === passowrd);

		if (userSession[0].userID) {
			handleLogIn(userSession[0]);
		}
	}

	return (
		<>
			<h3>Welcome back!</h3>
			<form id="loginForm" onSubmit={e => handleSubmit(e)}>
				<div className="form-control">
					<p className="label-title">Email Address</p>
					<input type="email" className="input-control" value={email} onChange={e => setEmail(e.target.value)} />
				</div>
				<div className="form-control">
					<p className="label-title">Password</p>
					<input type="password" className="input-control" value={passowrd} onChange={e => setPassword(e.target.value)} />
				</div>
				<div className="form-control">
					<button className="btn-link btn-theme">
						<p className="nogaps">Log In</p>
					</button>
				</div>
			</form>
		</>
	)
}

export default LoginForm;