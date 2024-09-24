import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";
import avatar from "../images/avatar.png";
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        psw: ""
    });

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const callingBackendApi = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/customer/login', {
                email: formData.email,
                password: formData.psw
            });

            console.log("Login Successful:", response.data);
            localStorage.setItem("isLoggedIn", "true");
            navigate("/");
        } catch (error) {
            console.error("Error Logging In:", error);
        }
    };

    const registrationPathWay = () => {
        navigate("/register");
    };

    return (
        <div>
            <br />
            <br />

            <h1 style={{ textAlign: "center" }}>Welcome To Login Page</h1>
            <p style={{ textAlign: "center" }}>
                Please Login In Our Website To View Full Extend Of Our Work And Services......
            </p>

            <br />
            <br />

            <form className="modal-content animate" method="post" onSubmit={callingBackendApi}>
                <div className="imgcontainer">
                    <img src={avatar} alt="Avatar" className='avatar' />
                </div>

                <div className="container">
                    <label htmlFor="email"><b>Email: </b></label>
                    <input
                        type="email"
                        placeholder='Enter Your Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChanges}
                        required
                    />
                    <br />
                    <label htmlFor="psw"><b>Password: </b></label>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        name='psw'
                        value={formData.psw}
                        onChange={handleChanges}
                        required
                    />
                    <br />
                    <button type="submit">Login</button>
                    <button type="button" onClick={registrationPathWay}>Register</button>
                </div>

                <div className="footer-container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    );
};

export default Login;