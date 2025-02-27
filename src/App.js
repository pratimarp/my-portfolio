import React from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Articles from "./components/articles";
import Newsletter from "./components/newsletter";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Projects />
            <Articles />
            <Newsletter />
        </div>
    );
}

export default App;