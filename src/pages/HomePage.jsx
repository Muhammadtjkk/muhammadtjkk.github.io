import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ResumeDownload from "../components/ResumeDownload.jsx";
import { portfolio } from "../data/portfolioData.js";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="risk-visual" aria-label="Illustration of connected risk, governance, assurance, data, and automation layers" role="img">
      <div className="visual-topline"><span>TECHNOLOGY RISK</span><span className="status-dot">● &nbsp;IN VIEW</span></div>
      <div className="visual-score">
        <div><small>DECISION CONTEXT</small><strong>Clearer risk.<br />Better action.</strong></div>
        <span className="score-ring"><span>RISK<br />VIEW</span></span>
      </div>
      <div className="visual-layers">
        <div className="visual-layer layer-governance"><span>01</span><b>Governance</b><i>Standards · Ownership</i></div>
        <div className="visual-layer layer-assurance"><span>02</span><b>Control assurance</b><i>Evidence · Validation</i></div>
        <div className="visual-layer layer-data"><span>03</span><b>Risk intelligence</b><i>Data · Trends · Decisions</i></div>
      </div>
      <div className="visual-flow"><span>Business context</span><span className="flow-line" aria-hidden="true">····················›</span><span>Action</span></div>
      <div className="visual-foot"><span><i className="mini-node teal-node" /> Human review</span><span><i className="mini-node gold-node" /> Responsible automation</span></div>
    </div>
  );
}

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () => activeFilter === "All"
      ? portfolio.projects
      : portfolio.projects.filter((project) => project.tags.includes(activeFilter)),
    [activeFilter],
  );
  const currentExperience = portfolio.experience[0];

  return (
    <>
      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><span className="live-dot" /> Cyber risk · Governance · Analytics</span>
            <h1>{portfolio.name}<span>{portfolio.title}</span></h1>
            <p className="hero-tagline">{portfolio.heroTagline}</p>
            <p className="hero-description">{portfolio.heroDescription}</p>
            <p className="hero-support">{portfolio.heroSupport}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore Projects <span aria-hidden="true">→</span></a>
              <a className="button button-outline" href="#about">About Me</a>
              <ResumeDownload />
            </div>
            <div className="social-links">
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={portfolio.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <span className="location-label"><span aria-hidden="true">⌖</span> {portfolio.location}</span>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="container credibility-strip" aria-label="Areas of focus">
          {portfolio.credibility.map((item, index) => <span key={item}><i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>{item}</span>)}
        </div>
      </section>

      <section className="section section-tinted" id="about">
        <div className="container">
          <SectionHeading eyebrow="About" title="Risk work grounded in evidence and practical delivery" description={portfolio.primaryMessage} />
          <div className="about-layout">
            <div className="about-copy">{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="bring-grid">
              {portfolio.bring.map((item, index) => <article className="bring-card" key={item.title}>
                <span className="card-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p>
              </article>)}
            </div>
          </div>
          <div className="principle-row"><strong>Professional principles</strong>{portfolio.principles.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section" id="impact">
        <div className="container">
          <SectionHeading eyebrow="Impact & evidence" title="Turning complex work into clear outcomes" description="Representative experience and work themes. Metrics are editable and should be confirmed before public release." />
          <div className="impact-grid">
            {portfolio.impact.map((item) => <article className="impact-card" key={item.label}><strong>{item.value}</strong><p>{item.label}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="expertise">
        <div className="container">
          <SectionHeading eyebrow="Expertise" title="A connected view of cyber risk" description="The work spans risk assessment, governance operations, analytical insight, and practical assurance." />
          <div className="expertise-grid">
            {portfolio.expertise.map((item, index) => <article className="expertise-card" key={item.title}>
              <span className="expertise-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="Practical approaches to complex risk questions" description="Sanitized case studies focus on methodology, governance, and decision quality—not confidential findings." />
          <div className="filter-list" role="group" aria-label="Filter projects by expertise">
            {portfolio.projectFilters.map((filter) => <button
              key={filter}
              type="button"
              className={`filter-button ${activeFilter === filter ? "is-selected" : ""}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >{filter}</button>)}
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project) => <article className="project-card" key={project.slug}>
              <div className="project-card-top"><span className="category-label">{project.category}</span><span className="project-mark" aria-hidden="true">↗</span></div>
              <h3>{project.title}</h3>
              <p>{project.problem}</p>
              <dl className="project-details">
                <div><dt>Role</dt><dd>{project.role}</dd></div>
                <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
                <div><dt>Tools</dt><dd>{project.tools.join(" · ")}</dd></div>
              </dl>
              <div className="tag-row">{project.skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}</div>
              <Link className="text-link" to={`/case-studies/${project.slug}`}>View Case Study <span aria-hidden="true">→</span></Link>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="experience">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="Risk judgment with operational perspective" description="A career built across technology risk and hands-on operational leadership." />
          <div className="timeline">
            {portfolio.experience.map((role, index) => <article className="timeline-item" key={role.organization}>
              <div className="timeline-marker" aria-hidden="true">{index === 0 ? "●" : "○"}</div>
              <div className="timeline-content">
                <div className="timeline-heading"><div><span className="eyebrow">{role.dates}</span><h3>{role.title}</h3><p>{portfolio.showApprovedEmployer && index === 0 ? portfolio.employerName : role.organization}{role.location && ` · ${role.location}`}</p></div><span className="timeline-number">0{index + 1}</span></div>
                <ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>)}
          </div>
          <aside className="leadership-note"><span aria-hidden="true">“</span><p>{portfolio.leadershipNote}</p></aside>
          <p className="employment-note">Employer naming is intentionally generalized pending approval for public use.</p>
          <span className="sr-only">Current role: {currentExperience.title}</span>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container">
          <SectionHeading eyebrow="Education & development" title="Building expertise with intention" />
          <div className="education-layout">
            <div className="education-list">
              {portfolio.education.map((item) => <article className="education-card" key={item.institution}>
                <span className="education-symbol" aria-hidden="true">◇</span><div><h3>{item.institution}</h3><p>{item.program}</p>{item.status && <span className="status-label">{item.status}</span>}</div>
              </article>)}
            </div>
            <div className="development-panel">
              <h3>Certifications &amp; development</h3>
              <p>Credentials and training are listed for review; confirm status before publication.</p>
              <ul className="credential-list">{portfolio.certifications.map((item) => <li key={item.name}><span>{item.name}</span><span className="status-label status-review">{item.status}</span></li>)}</ul>
              <details className="status-key"><summary>Editable status labels</summary><p>{portfolio.certificationStatuses.join(" · ")}</p></details>
              <h3 className="simulation-title">Professional Simulations</h3>
              <p className="small-note">Virtual experiences are not represented as employment.</p>
              <ul className="simulation-list">{portfolio.simulations.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="skills">
        <div className="container">
          <SectionHeading eyebrow="Skills" title="Tools, frameworks, and ways of working" />
          <div className="skills-grid">
            {portfolio.skills.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><p>{group.items}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section resume-section" id="resume">
        <div className="container resume-panel">
          <div><span className="eyebrow">Resume</span><h2>Experience across risk, governance, and delivery.</h2><p>{portfolio.resumeSummary}</p></div>
          <div className="resume-action"><ResumeDownload /></div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-layout">
          <div><span className="eyebrow">Contact</span><h2>Let’s connect</h2><p>{portfolio.contact}</p></div>
          <div className="contact-card">
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><b>View profile ↗</b></a>
            <a href={portfolio.github} target="_blank" rel="noreferrer"><span>GitHub</span><b>View projects ↗</b></a>
            {portfolio.professionalEmail ? <a href={`mailto:${portfolio.professionalEmail}`}><span>Email</span><b>{portfolio.professionalEmail} ↗</b></a> : <div><span>Professional email</span><b>Add approved email before publishing</b></div>}
            <div><span>Location</span><b>{portfolio.location}</b></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
