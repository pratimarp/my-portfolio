import React from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Projects />
        </div>
    );
}

export default App;