import React from "react";
import ReactDOM from "react-dom/client"; // Ensure ReactDOM is imported
import "./styles.css"; // Global styles
import App from "./App"; // Main component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);