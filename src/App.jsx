import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CaseStudyPage from "./pages/CaseStudyPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "light";
    } catch {
      return "light";
    }
  });

  function toggleTheme() {
    setTheme((current) => {
      const next = current === "light" ? "dark" : "light";
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch {
        // The theme remains available for this session when storage is disabled.
      }
      return next;
    });
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
