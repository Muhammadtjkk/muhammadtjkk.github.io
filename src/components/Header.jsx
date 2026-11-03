import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

export default function Header({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      setActiveSection("");
      return undefined;
    }
    const sections = ["home", ...navigation.map(([, id]) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const updateVisibility = () => setShowTop(window.scrollY > 500);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function visitSection(id) {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" type="button" onClick={() => visitSection("home")} aria-label="Muhammad Tajak, home">
            <span className="brand-mark" aria-hidden="true">MT</span>
            <span className="brand-copy">
              <strong>Muhammad Tajak</strong>
              <small>Cyber Risk &amp; Governance</small>
            </span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
          <nav id="primary-navigation" className={`primary-navigation ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <button className={`nav-link ${activeSection === "home" ? "is-active" : ""}`} type="button" aria-current={activeSection === "home" ? "location" : undefined} onClick={() => visitSection("home")}>
              Home
            </button>
            {navigation.map(([label, id]) => (
              <button
                className={`nav-link ${activeSection === id ? "is-active" : ""}`}
                type="button"
                aria-current={activeSection === id ? "location" : undefined}
                key={id}
                onClick={() => visitSection(id)}
              >
                {label}
              </button>
            ))}
            <button
              className="theme-toggle"
              type="button"
              onClick={onThemeToggle}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              <span aria-hidden="true">{theme === "light" ? "◐" : "☼"}</span>
              <span className="theme-label">{theme === "light" ? "Dark" : "Light"}</span>
            </button>
          </nav>
          <div className="header-actions">
            <button className="button button-small button-outline" type="button" onClick={() => visitSection("projects")}>View Projects</button>
            <button className="button button-small button-primary" type="button" onClick={() => visitSection("resume")}>Resume</button>
          </div>
        </div>
      </header>
      <a className={`back-to-top ${showTop ? "is-visible" : ""}`} href="#top" onClick={(event) => {
        event.preventDefault();
        visitSection("home");
      }} aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
