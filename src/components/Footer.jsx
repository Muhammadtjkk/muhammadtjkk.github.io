import Icon from "./Icon.jsx";
import { portfolio } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>{portfolio.name}</strong>
          <span>{portfolio.title} · {portfolio.location}</span>
        </div>
        <div className="footer-links">
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {portfolio.name}. Case studies are sanitized and use synthetic information.</p>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
