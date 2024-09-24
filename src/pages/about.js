import React from 'react';
import '../styles/about.css';
import aboutUs from "../images/aboutUs.jpg"

const About = () => {
    const businessEmails = () => {
        const email = [
            "samiullahAzimi@gmail.com", 
            "samiullahAzimi@yahoo.com", 
            "samiullahAzimi@hotmail.com", 
            "samiullahAzimi@outlook.com"
        ]
        const numbering = Math.floor(Math.random() * email.length)
        return email[numbering]
    }

    return (
        <div className='about-container'>
            <h1 style={{ textAlign: "center" }}>About Us</h1>

            <br />
            <br />

            <img src={aboutUs} alt="about Us" style={{ width: "100%" }}/>

            <br />
            <br />

            <h2>Our Team Words: </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident eum quam quas autem fuga. Qui quos, 
                quia dignissimos adipisci labore corrupti rem, molestiae, repudiandae consequatur voluptatibus magni aut at. Lorem ipsum 
                dolor sit amet consectetur adipisicing elit. Quis deleniti eius ad minima quaerat voluptatum quae debitis, 
                accusamus nulla eum beatae eaque adipisci odit nemo ullam. Nostrum dolores deserunt hic.
            </p>

            <br />
            <br />

            <h2>Our Coming Changes In Office: </h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illum laudantium fuga dolore repudiandae ea 
                libero, qui accusantium, ratione ipsam dicta. Adipisci quia in aut quis molestias placeat eos officia. Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Deserunt eum voluptates illum tempore quia est saepe ea ducimus voluptatibus eos 
                labore impedit in ad vitae adipisci, autem praesentium mollitia sequi.
            </p>

            <br />
            <br />

            <h2>Our Services: </h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellat recusandae necessitatibus, at, 
                mollitia voluptas est cumque fuga expedita ipsam consectetur laborum quo aut iste quas eveniet fugit! Ipsam, ducimus! Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Mollitia, assumenda, voluptatem sit voluptate quo obcaecati 
                sapiente, ratione soluta eum facere esse expedita necessitatibus dolores fugit voluptas corporis dicta! Accusamus, saepe.
            </p>

            <br />
            <br />

            <h2>Our Future And Our Goals: </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatibus esse cupiditate beatae tempora 
                quam nesciunt, recusandae dolor molestias veritatis dolore quaerat nostrum impedit rem illum, sequi labore unde eum! Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Odio quam reiciendis laborum numquam animi! Provident quas sapiente culpa. 
                Et cum beatae earum reiciendis repellendus distinctio? Nesciunt a rem dolor necessitatibus. Lorem ipsum dolor sit, amet 
                consectetur adipisicing elit. Voluptate placeat eaque suscipit explicabo obcaecati quis unde. Similique eveniet sit quasi 
                vel, quia a et ullam quidem hic veniam porro pariatur?
            </p>

            <br />
            <br />

            <p>
                If Any Further Inquiry Or Future Contract Please Contact Us Through Our Business Email Given Below:
                <br />
                <strong>{businessEmails()}</strong>
            </p>
        </div>
    );
};

export default About;