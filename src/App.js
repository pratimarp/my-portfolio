import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import "./styles.css";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;