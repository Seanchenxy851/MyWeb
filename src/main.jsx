import './index.css'
import React from "react";
import ReactDOM from "react-dom/client"; // <-- Make sure this is here
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/MyWeb">  {/* Set basename if using GitHub Pages */}
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
