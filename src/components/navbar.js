import React, { useState } from "react";
import "../styles.css";

function Navbar() {
    const [active, setActive] = useState("projects");

    return (
        <nav className="navbar">
            <div className="nav-items">
                <div className="nav-left">Designer Name</div>
                <div className="nav-links">
                    <a 
                        href="#projects" 
                        className={active === "projects" ? "dot" : ""} 
                        onClick={() => setActive("projects")}
                    >
                        Projects
                    </a>
                    <a 
                        href="#about" 
                        className={active === "about" ? "dot" : ""} 
                        onClick={() => setActive("about")}
                    >
                        About
                    </a>
                    <a 
                        href="#play" 
                        className={active === "play" ? "dot" : ""} 
                        onClick={() => setActive("play")}
                    >
                        &#10024; Play
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
