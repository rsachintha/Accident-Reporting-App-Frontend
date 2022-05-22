import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [nic, setNic] = useState("");
	const [vehicleNumber, setVehicleNumber] = useState("");
	const [insuranceNumber, setInsuranceNumber] = useState("");

	function sendData(e) {
		e.preventDefault();
		axios
			.post("http://localhost:3000/api/register", {
				name: name,
				email: email,
				password: password,
				nic: nic,
				vehicleNumber: vehicleNumber,
				insuranceNumber: insuranceNumber,
			})
			.then((res) => {
				console.log(res.data);
			});
	}

	return (
		<div className="form-container">
			<div className="form-content-left">
				<img className="form-img" src="img/form-bg.png" alt="insurance" />
			</div>
			<div className="form-content-right">
				<form className="form">
					<h1>Create your account by filling out the information below.</h1>
					<div className="form-inputs">
						<label className="form-label">Full Name</label>
						<input
							className="form-input"
							type="text"
							name="fullname"
							placeholder="Enter your full name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
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
					<div className="form-inputs">
						<label className="form-label">NIC</label>
						<input
							className="form-input"
							type="text"
							name="nic"
							placeholder="Enter your NIC number"
							value={nic}
							onChange={(e) => setNic(e.target.value)}
							required
						/>
					</div>
					<div className="form-inputs">
						<label className="form-label">Vehicle Registration Number</label>
						<input
							className="form-input"
							type="text"
							name="vehicleRegNumber"
							placeholder="Enter your vehicle registration number"
							value={vehicleNumber}
							onChange={(e) => setVehicleNumber(e.target.value)}
							required
						/>
					</div>
					<div className="form-inputs">
						<label className="form-label">Insurance Number</label>
						<input
							className="form-input"
							type="text"
							name="insuranceNumber"
							placeholder="Enter your insurance number"
							value={insuranceNumber}
							onChange={(e) => setInsuranceNumber(e.target.value)}
							required
						/>
					</div>
					<button className="form-input-btn" type="submit" onSubmit={sendData}>
						Sign up
					</button>
					<span className="form-input-login">
						Already have an account? <Link to="/Login">Login</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Signup;
