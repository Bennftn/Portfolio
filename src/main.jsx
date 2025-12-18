import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import "./tailwind.css"; // ← Ajoute juste cette ligne

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>
);
