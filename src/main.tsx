import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  addResourceHints,
  registerServiceWorker,
  preventLayoutShifts,
} from "./utils/performance";

// Initialize performance optimizations
addResourceHints();
registerServiceWorker();

// Prevent layout shifts
preventLayoutShifts();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
