import React, {useState} from "react";

function Footer() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="contact">
                    <h4>Contact</h4>
                    <div className="social-links">
                        <a href="https://twitter.com" target="_blank">Twitter &#8599;</a>
                        <a href="https://dribbble.com" target="_blank">Dribble &#8599;</a>
                        <a href="https://linkedin.com" target="_blank">LinkedIn &#8599;</a>
                    </div>
                </div>
                <div className="feedback">
                    <span> I &#128525; feedbacks.</span>
                    <div className="rating">
                    {[...Array(5)].map((_, index) => (
                        <span 
                            key={index} 
                            className={`star ${index < (hover || rating) ? "filled" : ""}`} 
                            onClick={() => setRating(index + 1)}
                            onMouseEnter={() => setHover(index + 1)}
                            onMouseLeave={() => setHover(null)}
                        >
                            ★
                        </span>
                    ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;