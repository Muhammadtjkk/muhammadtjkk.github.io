import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ResumeDownload from "../components/ResumeDownload.jsx";
import HeroDashboard from "../components/HeroDashboard.jsx";
import CountUp from "../components/CountUp.jsx";
import Icon from "../components/Icon.jsx";
import useReveal from "../hooks/useReveal.js";
import { portfolio } from "../data/portfolioData.js";
import {
  bringIcons, careerBridge, categoryStyles, credentialIssuers, evidenceTypes, expertiseIcons,
  lifecycle, nistFunctions, perspectives, riskTiers, skillIcons, tprmStages,
} from "../data/extendedContent.js";

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`section-heading reveal ${align === "left" ? "is-left" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function splitItems(text) {
  return text.replace(/\.$/, "").split(/,\s*(?:and\s+)?/).map((item) => item.replace(/^and\s+/, "")).filter(Boolean).map((item) => item.charAt(0).toUpperCase() + item.slice(1));
}

const stats = [
  { value: 200, suffix: "+", label: "Vendor security questionnaires supported or completed", icon: "clipboard" },
  { value: 15, prefix: "~", suffix: "%", label: "Assessment-cycle efficiency gain from visual processes and dashboards", icon: "zap" },
  { value: portfolio.projects.length, label: "Sanitized case studies on governance, analytics, and automation", icon: "file" },
  { value: portfolio.certifications.length, label: "Certifications and professional training programs", icon: "award" },
];

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () => activeFilter === "All" ? portfolio.projects : portfolio.projects.filter((project) => project.tags.includes(activeFilter)),
    [activeFilter],
  );
  useReveal([activeFilter]);
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
  }, [location.hash]);

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-bg" aria-hidden="true"><span className="orb orb-1" /><span className="orb orb-2" /><span className="grid-lines" /></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow"><span className="live-dot" /> Cyber risk · Governance · Analytics · Automation</span>
            <h1>{portfolio.name}<span>{portfolio.title}</span></h1>
            <p className="hero-tagline">Turning cyber risk, governance, data, and automation into <em>defensible business decisions.</em></p>
            <p className="hero-description">{portfolio.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore case studies <Icon name="arrowRight" size={16} /></a>
              <a className="button button-ghost" href="#approach">How I work</a>
              <ResumeDownload className="button button-ghost" />
            </div>
            <div className="social-links">
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} /> LinkedIn</a>
              <a href={portfolio.github} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub</a>
              <span><Icon name="mapPin" size={16} /> {portfolio.location}</span>
            </div>
          </div>
          <HeroDashboard />
        </div>
        <div className="container">
          <div className="marquee" aria-label="Areas of focus">
            <div className="marquee-track">
              {[...portfolio.credibility, "NIST CSF 2.0", "SOC 2", "ISO 27001", "Power BI", "Onspring", ...portfolio.credibility, "NIST CSF 2.0", "SOC 2", "ISO 27001", "Power BI", "Onspring"].map((item, index) => <span key={`${item}-${index}`} aria-hidden={index >= portfolio.credibility.length + 5 ? "true" : undefined}><Icon name="check" size={13} />{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" id="impact" aria-label="Impact at a glance">
        <div className="container stats-grid">
          {stats.map((item) => <article className="stat-card reveal" key={item.label}>
            <span className="stat-icon"><Icon name={item.icon} size={22} /></span>
            <strong><CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} /></strong>
            <p>{item.label}</p>
          </article>)}
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="about-layout">
            <div className="about-copy reveal">
              <span className="eyebrow">About</span>
              <h2>Risk work grounded in evidence and practical delivery</h2>
              <p className="lead">{portfolio.primaryMessage}</p>
              {portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="principle-row">{portfolio.principles.map((item) => <span key={item}><Icon name="check" size={13} />{item}</span>)}</div>
            </div>
            <div className="bring-grid">
              {portfolio.bring.map((item, index) => <article className="bring-card reveal" key={item.title} style={{ transitionDelay: `${index * 80}ms` }}>
                <span className="icon-tile"><Icon name={bringIcons[index]} size={22} /></span>
                <h3>{item.title}</h3><p>{item.description}</p>
              </article>)}
              <div className="evidence-strip reveal">
                <strong>Evidence I work with</strong>
                {portfolio.impact.slice(2).map((item) => <span key={item.label}><b>{item.value}</b> {item.label}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="approach">
        <div className="container">
          <SectionHeading eyebrow="How I work" title="A repeatable path from evidence to decision" description="Every assessment, workflow, and dashboard I build follows the same discipline: understand the context, prove it with evidence, and make the decision clear." />
          <ol className="lifecycle">
            {lifecycle.map((step, index) => <li className="lifecycle-step reveal" key={step.title} style={{ transitionDelay: `${index * 70}ms` }}>
              <span className="step-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="step-icon"><Icon name={step.icon} size={24} /></span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>)}
          </ol>
          <div className="loop-note reveal"><Icon name="refresh" size={16} /> The cycle repeats: monitoring signals and reassessments feed new context back into step 01.</div>
        </div>
      </section>

      <section className="section" id="frameworks">
        <div className="container">
          <SectionHeading eyebrow="Frameworks in practice" title="Where my work maps to NIST CSF 2.0" description="NIST Cybersecurity Framework 2.0 organizes cybersecurity outcomes into six functions. Here is how third-party risk, GRC, and assurance work connects to each one." />
          <div className="nist-layout">
            <div className="nist-wheel reveal" role="img" aria-label="NIST CSF 2.0 wheel with Govern at the center surrounded by Identify, Protect, Detect, Respond, and Recover">
              <svg viewBox="0 0 320 320">
                {nistFunctions.slice(1).map((fn, index) => {
                  const start = (index * 72 - 90) * (Math.PI / 180);
                  const end = ((index + 1) * 72 - 90 - 2) * (Math.PI / 180);
                  const r1 = 150; const r2 = 92;
                  const p = (r, a) => `${160 + r * Math.cos(a)} ${160 + r * Math.sin(a)}`;
                  const d = `M ${p(r1, start)} A ${r1} ${r1} 0 0 1 ${p(r1, end)} L ${p(r2, end)} A ${r2} ${r2} 0 0 0 ${p(r2, start)} Z`;
                  const mid = (start + end) / 2;
                  return <g key={fn.code} className={`wheel-seg tone-${fn.tone}`}>
                    <path d={d} />
                    <text x={160 + 121 * Math.cos(mid)} y={160 + 121 * Math.sin(mid) - 4} textAnchor="middle" className="seg-code">{fn.code}</text>
                    <text x={160 + 121 * Math.cos(mid)} y={160 + 121 * Math.sin(mid) + 11} textAnchor="middle" className="seg-name">{fn.name}</text>
                  </g>;
                })}
                <circle cx="160" cy="160" r="84" className="wheel-core" />
                <text x="160" y="152" textAnchor="middle" className="core-code">GV</text>
                <text x="160" y="174" textAnchor="middle" className="core-name">Govern</text>
              </svg>
            </div>
            <div className="nist-list">
              {nistFunctions.map((fn) => <article className={`nist-item reveal tone-${fn.tone}`} key={fn.code}>
                <span className="nist-code">{fn.code}</span>
                <div><h3>{fn.name}</h3><p>{fn.text}</p></div>
              </article>)}
            </div>
          </div>
          <h3 className="sub-heading reveal">Assurance evidence I review, and what I look for</h3>
          <div className="evidence-grid">
            {evidenceTypes.map((item) => <article className="evidence-card reveal" key={item.title}>
              <span className="icon-tile small"><Icon name={item.icon} size={18} /></span>
              <div><h4>{item.title}</h4><p>{item.text}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="tprm">
        <div className="container">
          <SectionHeading eyebrow="Third-party risk" title="The vendor lifecycle, end to end" description="Third-party risk is a lifecycle, not a questionnaire. This illustrative model shows how review depth scales with risk." />
          <ol className="tprm-flow">
            {tprmStages.map((stage, index) => <li className="reveal" key={stage.title} style={{ transitionDelay: `${index * 60}ms` }}>
              <span className="tprm-dot">{index + 1}</span>
              <strong>{stage.title}</strong>
              <small>{stage.text}</small>
            </li>)}
          </ol>
          <div className="tier-grid">
            {riskTiers.map((tier) => <article className={`tier-card reveal tone-${tier.tone}`} key={tier.tier}>
              <div className="tier-head"><span>{tier.tier}</span><small>Review depth</small></div>
              <div className="tier-bar" aria-hidden="true"><i style={{ width: `${tier.depth}%` }} /></div>
              <p>{tier.text}</p>
            </article>)}
          </div>
          <p className="fine-print reveal">Illustrative tiering model for discussion; actual criteria and cadences vary by organization and policy.</p>
        </div>
      </section>

      <section className="section section-tinted" id="expertise">
        <div className="container">
          <SectionHeading eyebrow="Expertise" title="A connected view of cyber risk" description="The work spans risk assessment, governance operations, analytical insight, and practical assurance." />
          <div className="expertise-grid">
            {portfolio.expertise.map((item, index) => <article className="expertise-card reveal" key={item.title} style={{ transitionDelay: `${(index % 4) * 70}ms` }}>
              <span className="icon-tile"><Icon name={expertiseIcons[index]} size={22} /></span>
              <h3>{item.title}</h3><p>{item.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="Case studies in governance, analytics, and automation" description="Sanitized reconstructions that focus on methodology, governance, and decision quality, not confidential findings." />
          <div className="filter-list" role="group" aria-label="Filter projects by expertise">
            {portfolio.projectFilters.map((filter) => {
              const count = filter === "All" ? portfolio.projects.length : portfolio.projects.filter((p) => p.tags.includes(filter)).length;
              return <button key={filter} type="button" className={`filter-button ${activeFilter === filter ? "is-selected" : ""}`} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}<span>{count}</span></button>;
            })}
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project) => {
              const style = categoryStyles[project.category] || categoryStyles["Cyber Risk"];
              return <article className={`project-card reveal tone-${style.tone}`} key={project.slug}>
                <div className="project-banner">
                  <span className="project-icon"><Icon name={style.icon} size={24} /></span>
                  <span className="category-label">{project.category}</span>
                  <span className="banner-steps">{(project.workflow || project.governanceFlow || project.approach || []).length} steps · {project.controls.length} controls</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="project-problem"><b>Challenge:</b> {project.problem}</p>
                  <p className="project-outcome"><Icon name="check" size={15} /> {project.outcome}</p>
                  <div className="tag-row">{project.tools.slice(0, 4).map((tool) => <span key={tool}>{tool}</span>)}</div>
                  <Link className="text-link" to={`/case-studies/${project.slug}`}>Read the case study <Icon name="arrowRight" size={15} /></Link>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="experience">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="Risk judgment with operational perspective" description="A career built across technology risk and hands-on operational leadership." />
          <div className="timeline">
            {portfolio.experience.map((role, index) => <article className="timeline-item reveal" key={role.organization}>
              <div className={`timeline-marker ${index === 0 ? "is-current" : ""}`}><Icon name={index === 0 ? "shield" : "utensils"} size={18} /></div>
              <div className="timeline-card">
                <div className="timeline-heading">
                  <div><h3>{role.title}</h3><p>{portfolio.showApprovedEmployer && index === 0 ? portfolio.employerName : role.organization}{role.location && ` · ${role.location}`}</p></div>
                  <span className={`date-pill ${index === 0 ? "is-current" : ""}`}>{role.dates}</span>
                </div>
                <ul>{role.bullets.map((bullet) => <li key={bullet}><Icon name="check" size={14} />{bullet}</li>)}</ul>
              </div>
            </article>)}
          </div>
          <div className="bridge reveal">
            <h3><Icon name="refresh" size={18} /> How operational leadership carries into cyber risk</h3>
            <div className="bridge-grid">
              {careerBridge.map((item) => <div className="bridge-row" key={item.from}><span>{item.from}</span><i aria-hidden="true"><Icon name="arrowRight" size={16} /></i><strong>{item.to}</strong></div>)}
            </div>
          </div>
          <aside className="leadership-note reveal"><span aria-hidden="true">“</span><p>{portfolio.leadershipNote}</p></aside>
        </div>
      </section>

      <section className="section" id="perspectives">
        <div className="container">
          <SectionHeading eyebrow="Perspectives" title="Principles I bring to every engagement" description="Short takeaways from day-to-day work in third-party risk, GRC, and responsible automation." />
          <div className="perspective-grid">
            {perspectives.map((item, index) => <article className="perspective-card reveal" key={item.title} style={{ transitionDelay: `${index * 70}ms` }}>
              <span className="icon-tile"><Icon name={item.icon} size={22} /></span>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="education">
        <div className="container">
          <SectionHeading eyebrow="Education & credentials" title="Building expertise with intention" />
          <div className="education-row">
            {portfolio.education.map((item) => <article className="education-card reveal" key={item.institution}>
              <span className="icon-tile"><Icon name="graduation" size={22} /></span>
              <div><h3>{item.institution}</h3><p>{item.program}</p>{item.status && <span className="status-label">{item.status}</span>}</div>
            </article>)}
          </div>
          <div className="badge-grid">
            {portfolio.certifications.map((item) => <article className="cert-badge reveal" key={item.name}>
              <span className="cert-seal"><Icon name="award" size={20} /></span>
              <div><strong>{item.name}</strong>{credentialIssuers[item.name] && <small>{credentialIssuers[item.name]}</small>}{item.status && <span className="status-label">{item.status}</span>}</div>
            </article>)}
          </div>
          <div className="simulation-panel reveal">
            <div><h3><Icon name="briefcase" size={18} /> Professional job simulations</h3><p>Virtual experiences completed through industry programs (not employment).</p></div>
            <ul>{portfolio.simulations.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <SectionHeading eyebrow="Skills & tools" title="Tools, frameworks, and ways of working" />
          <div className="skills-grid">
            {portfolio.skills.map((group, index) => <article className="skill-card reveal" key={group.title}>
              <div className="skill-head"><span className="icon-tile small"><Icon name={skillIcons[index]} size={18} /></span><h3>{group.title}</h3></div>
              <div className="chip-row">{splitItems(group.items).map((item) => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section resume-section" id="resume">
        <div className="container resume-panel reveal">
          <div><span className="eyebrow">Resume</span><h2>Experience across risk, governance, and delivery.</h2><p>{portfolio.resumeSummary}</p></div>
          <div className="resume-action"><ResumeDownload /></div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-layout">
          <div className="reveal"><span className="eyebrow">Contact</span><h2>Let’s connect</h2><p>{portfolio.contact}</p>
            <div className="topic-row">{["Third-party risk", "GRC platforms", "Risk analytics", "Responsible AI", "Audit readiness"].map((t) => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="contact-card reveal">
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><span className="icon-tile small"><Icon name="linkedin" size={18} /></span><span><b>LinkedIn</b><small>Connect and message</small></span><Icon name="arrowRight" size={16} /></a>
            <a href={portfolio.github} target="_blank" rel="noreferrer"><span className="icon-tile small"><Icon name="github" size={18} /></span><span><b>GitHub</b><small>View repositories</small></span><Icon name="arrowRight" size={16} /></a>
            {portfolio.professionalEmail && <a href={`mailto:${portfolio.professionalEmail}`}><span className="icon-tile small"><Icon name="mail" size={18} /></span><span><b>Email</b><small>{portfolio.professionalEmail}</small></span><Icon name="arrowRight" size={16} /></a>}
            <div><span className="icon-tile small"><Icon name="mapPin" size={18} /></span><span><b>Location</b><small>{portfolio.location}</small></span></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
