import React from "react";

function Newsletter() {
    return(
        <section className="newsletter">
            <div className="newsletter-content">
                <div className="newsletter-text">
                    <h3>Join my newsletter</h3>
                    <p>I regularly share my professional or personal updates on substack!</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="email address" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="newsletter-icon">
                    &#128229;
                </div>
            </div>
        </section>
    )
}

export default Newsletter;
