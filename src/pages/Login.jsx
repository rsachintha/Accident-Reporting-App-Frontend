import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Form.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function sendData(e) {
		e.preventDefault();
		axios
			.post("http://localhost:3000/api/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				console.log(res.data);
			});
	}

	return (
		<div className="form-container">
			<div className="form-content-left">
				<img className="form-img" src="img/form-bg.png" alt="spaceship" />
			</div>
			<div className="form-content-right">
				<form className="form">
					<h1>Welcome Back! Login Here</h1>
					<div className="form-inputs">
						<label className="form-label">Email</label>
						<input
							className="form-input"
							type="email"
							name="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-inputs">
						<label className="form-label">Password</label>
						<input
							className="form-input"
							type="password"
							name="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button className="form-input-btn" type="submit" onSubmit={sendData}>
						Login
					</button>
					<span className="form-input-login">
						Don't have an account? <Link to="/Signup">Signup</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
