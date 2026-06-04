import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App.jsx";

// Säkerställ att root finns innan render (bättre robustness)
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error("Root element saknas - appen kunde inte startas.");
}