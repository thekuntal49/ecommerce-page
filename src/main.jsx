import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductProvider } from "./context/productContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
