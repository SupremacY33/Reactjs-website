import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/navbar.css";
import image from "../images/logo.png";

const Navbar = () => {
    const [isResponsive, setIsResponsive] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        console.log("Logged In Status:", loggedInStatus);
        if (loggedInStatus === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const toggleClass = () => {
        setIsResponsive(!isResponsive);
    };

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <div>
            <div className={isResponsive ? "topnav responsive" : "topnav"} id={styles.myTopnav}>
                <img src={image} alt="logo" style={{ width: "3%", height: "5%" }}/>

                {isLoggedIn ? (
                    <a href="#" onClick={handleLogout}>Logout</a>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/news">News</Link>
                <Link to="/">Home</Link>
                <a href="javascript:void(0);" className="icon" onClick={toggleClass}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    );
};

export default Navbar;