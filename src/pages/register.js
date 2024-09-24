import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/register.css";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        uname: '',
        psw: '',
        pswRepeat: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/postingCustomers', {
                name: formData.uname,
                email: formData.email,
                password: formData.psw,
                confirmPassword: formData.pswRepeat
            });

            console.log('Registration successful:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    const navigateToLogin = () => {
        navigate("/login");
    };

    return (
        <div>
            <br />
            <br />
            <h1 style={{ textAlign: "center" }}>Welcome To Registration Page</h1>
            <p style={{ textAlign: "center" }}>
                Please Fill Out The Form To Register Yourself As A Member Of Our Community
            </p>
            <br />
            <br />
            <form className="modal-content" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="email"><b>Email: </b></label>
                    <input type="email" placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleChange} required />
                    <br />
                    <label htmlFor="uname"><b>Username: </b></label>
                    <input type="text" placeholder='Enter Your Username' name='uname' value={formData.uname} onChange={handleChange} required />
                    <br />
                    <label htmlFor="psw"><b>Password: </b></label>
                    <input type="password" placeholder='Enter Your Password' name='psw' value={formData.psw} onChange={handleChange} required />
                    <br />
                    <label htmlFor="psw-repeat"><b>Confirm Password: </b></label>
                    <input type="password" placeholder='Enter Your Confirm Password' name='pswRepeat' value={formData.pswRepeat} onChange={handleChange} required />
                    <br />
                    <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                    <div className="clearfix">
                        <button type="button" onClick={navigateToLogin} className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;