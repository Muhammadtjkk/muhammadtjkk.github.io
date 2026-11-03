import { portfolio } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {portfolio.name}. Built with care and a commitment to confidentiality.</p>
        <a href="#main-content">Back to page start ↑</a>
      </div>
    </footer>
  );
}
