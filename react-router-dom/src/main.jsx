import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
// import App from "./paramenters";
import App from "./Layouts";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
