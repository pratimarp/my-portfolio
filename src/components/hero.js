import React from "react";
import avatar from "../assets/avatar.jpg"; // Import avatar image
import "../styles.css";

function Hero() {
    return (
        <section className="hero">
            <img src={avatar} alt="Profile" className="avatar" />
            <div className="hero-content">
                <h1>I craft interfaces</h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                    sunt nostrud amet.
                </p>
                <a href="#" className="cta-link">Take me to the magic land ↗</a>
            </div>
        </section>
    );
}

export default Hero;
