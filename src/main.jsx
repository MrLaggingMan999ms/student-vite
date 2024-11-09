import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StudentProvider from "./context/StudentProvider.jsx";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentProvider>
      <App/>
    </StudentProvider>
  </StrictMode>
);
