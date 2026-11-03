import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Icon from "../components/Icon.jsx";
import HeroDashboard from "../components/HeroDashboard.jsx";
import useReveal from "../hooks/useReveal.js";
import { portfolio } from "../data/portfolioData.js";
import { categoryStyles } from "../data/extendedContent.js";

const decisionTones = ["green", "teal", "gold", "coral", "red"];

function FlowDiagram({ steps, title }) {
  return (
    <ol className="flow-diagram" aria-label={`${title}: ${steps.join(", then ")}`}>
      {steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
    </ol>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const index = portfolio.projects.findIndex((item) => item.slug === slug);
  const project = portfolio.projects[index];
  useReveal([slug]);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return <section className="section not-found container"><span className="eyebrow">Case study</span><h1>Case study not found</h1><p>This page may have moved or the address may be incorrect.</p><Link className="button button-primary" to="/">Back to portfolio</Link></section>;
  }

  const style = categoryStyles[project.category] || categoryStyles["Cyber Risk"];
  const prev = portfolio.projects[(index - 1 + portfolio.projects.length) % portfolio.projects.length];
  const next = portfolio.projects[(index + 1) % portfolio.projects.length];
  const flowSteps = project.governanceFlow || project.workflow;
  const flowTitle = project.governanceFlow ? "Governance model" : project.slug === "ai-and-automation-intake" ? "Request lifecycle" : project.slug === "vendor-proof-of-concept-governance" ? "Evaluation phases" : "Workflow";

  const toc = [
    ["challenge", "Challenge"], ["role", "My role"], flowSteps && ["flow", flowTitle], project.decisionOptions && ["decisions", "Decision paths"],
    ["approach", "Approach"], ["controls", "Governance controls"], ["outcome", "Outcome"],
  ].filter(Boolean);

  return (
    <article className={`case-study-page tone-${style.tone}`}>
      <section className="case-hero">
        <div className="hero-bg" aria-hidden="true"><span className="orb orb-1" /><span className="grid-lines" /></div>
        <div className="container case-hero-inner">
          <Link className="back-link" to="/#projects"><Icon name="arrowLeft" size={15} /> All case studies</Link>
          <div className="case-title-row">
            <span className="case-icon"><Icon name={style.icon} size={30} /></span>
            <div><span className="eyebrow">{project.category} · Case study {String(index + 1).padStart(2, "0")} of {portfolio.projects.length}</span><h1>{project.title}</h1></div>
          </div>
          <p>{project.overview}</p>
          <div className="glance">
            <div><strong>{flowSteps ? flowSteps.length : project.approach.length}</strong><span>{flowSteps ? "Process stages" : "Approach steps"}</span></div>
            <div><strong>{project.controls.length}</strong><span>Governance controls</span></div>
            <div><strong>{project.tools.length}</strong><span>Tools and methods</span></div>
            <div><strong>{project.skills.length}</strong><span>Skills demonstrated</span></div>
          </div>
        </div>
      </section>
      <div className="container case-layout">
        <div className="case-main">
          <section className="case-section split reveal" id="challenge">
            <div className="callout tone-warn"><span><Icon name="alert" size={18} /> Business challenge</span><p>{project.challenge}</p></div>
            <div className="callout"><span><Icon name="target" size={18} /> Why it mattered</span><p>{project.why}</p></div>
          </section>
          <section className="case-section reveal" id="role"><h2>My role</h2><p>{project.role}</p></section>
          {project.slug === "executive-technology-risk-dashboard" && (
            <section className="case-section reveal"><h2>Dashboard concept</h2><p>An illustrative layout using synthetic data: risk position, appetite comparison, and trend in one view.</p><div className="case-dash"><HeroDashboard /></div></section>
          )}
          {flowSteps && <section className="case-section reveal" id="flow"><h2>{flowTitle}</h2><FlowDiagram steps={flowSteps} title={flowTitle} />
            {project.slug === "ai-and-automation-intake" && <p>Intake captures the business problem, process owner, data sensitivity, current manual effort, automation suitability, dependencies, risk review, priority, status, estimated hours, and delivered value. Records are fictional.</p>}
          </section>}
          {project.decisionOptions && <section className="case-section reveal" id="decisions"><h2>Decision paths</h2>
            <div className="decision-scale">{project.decisionOptions.map((item, i) => <div key={item} className={`tone-${decisionTones[i]}`}><span>{i + 1}</span>{item}</div>)}</div>
            <div className="scale-axis"><span>Lower risk</span><span>Higher risk</span></div>
          </section>}
          <section className="case-section reveal" id="approach"><h2>Approach</h2><ol className="approach-steps">{project.approach.map((item) => <li key={item}>{item}</li>)}</ol></section>
          <section className="case-section reveal"><h2>Solution</h2><p>{project.solution}</p></section>
          <section className="case-section reveal" id="controls"><h2>Governance controls</h2><div className="control-grid">{project.controls.map((item) => <div key={item}><Icon name="shieldCheck" size={18} /><p>{item}</p></div>)}</div></section>
          <section className="case-section reveal" id="outcome"><h2>Outcome</h2><p className="outcome-callout"><Icon name="check" size={18} /> {project.outcome}</p></section>
          <section className="case-section reveal"><h2>Lessons learned</h2><blockquote className="lesson">{project.lessons}</blockquote></section>
        </div>
        <aside className="case-sidebar">
          <nav className="sidebar-card toc" aria-label="On this page"><h2>On this page</h2><ul>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}>{label}</a></li>)}</ul></nav>
          <div className="sidebar-card"><h2>Project details</h2><h3>Tools</h3><div className="chip-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><h3>Skills demonstrated</h3><ul>{project.skills.map((skill) => <li key={skill}><Icon name="check" size={13} />{skill}</li>)}</ul></div>
          <div className="confidentiality-card"><h2><Icon name="lock" size={16} /> Confidentiality</h2><p>{portfolio.confidentiality}</p></div>
        </aside>
      </div>
      <div className="container case-pager">
        <Link to={`/case-studies/${prev.slug}`} className="pager-card"><small><Icon name="arrowLeft" size={14} /> Previous</small><strong>{prev.title}</strong></Link>
        <Link to={`/case-studies/${next.slug}`} className="pager-card is-next"><small>Next <Icon name="arrowRight" size={14} /></small><strong>{next.title}</strong></Link>
      </div>
    </article>
  );
}
