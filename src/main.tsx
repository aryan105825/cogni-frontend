import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // Your dashboard
import LandingPage from "./components/Landing.tsx"; // The landing page component
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
      </StrictMode>,
)
