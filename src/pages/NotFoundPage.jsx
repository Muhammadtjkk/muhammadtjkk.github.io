import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section not-found container">
      <span className="eyebrow">404 · Page not found</span>
      <h1>This page is not part of the portfolio.</h1>
      <p>The address may be incorrect or the page may have moved. Return to the portfolio to continue.</p>
      <Link className="button button-primary" to="/">Return home</Link>
    </section>
  );
}
