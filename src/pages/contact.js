import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    const onClickAlert = () => {
        alert("We Have Received Your Info And We'll Contact You Soon")
    }


    return (
        <div className="contact-container">
            
            <br />
            <br />
            
            <h1>Contact Us: </h1>
            <p>
                Fill Out Given Form For Us To Contact You, If Any Query Is In Your Mind Or Would Like To Help Us For Further Enchancement.
            </p>

            <br />
            <br />
            <br />
            <br />
            <br />

            <form>
                <div className="form-group">
                    <label><b>Name: </b></label>
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label><b>Email: </b></label>
                    <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label><b>Message: </b></label>
                    <textarea placeholder="Your Message"></textarea>
                </div>
                <button type="submit" onClick={onClickAlert}>Submit</button>
            </form>

            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
};

export default Contact;