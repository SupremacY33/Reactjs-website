import React from 'react'
import { FaYoutube, FaFacebook, FaTwitter, FaReddit, FaInstagram } from 'react-icons/fa';
import "../styles/footer.css";

const Footer = () => {
    const currentYear = new Date();
    const copyRightOwner = "React";

    return (
        <footer className="footer">
            <p>Copyright &copy; by {copyRightOwner} for year {currentYear.getFullYear()}</p>
            <div className="social-icons">
                <a href="https://www.youtube.com/"><FaYoutube /></a>
                <a href="https://www.facebook.com/"><FaFacebook /></a>
                <a href="https://twitter.com/"><FaTwitter /></a>
                <a href="https://www.reddit.com/"><FaReddit /></a>
                <a href="https://www.instagram.com/"><FaInstagram /></a>
            </div>
        </footer>
    );
}

export default Footer;