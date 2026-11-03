import { Link, useParams } from "react-router-dom";
import { portfolio } from "../data/portfolioData.js";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = portfolio.projects.find((item) => item.slug === slug);

  if (!project) {
    return <section className="section not-found container"><span className="eyebrow">Case study</span><h1>Case study not found</h1><p>This page may have moved or the address may be incorrect.</p><Link className="button button-primary" to="/">Back to portfolio</Link></section>;
  }

  return (
    <article className="case-study-page">
      <section className="case-hero">
        <div className="container">
          <Link className="back-link" to="/#projects">← Back to Projects</Link>
          <span className="eyebrow">{project.category} · Case study</span>
          <h1>{project.title}</h1>
          <p>{project.overview}</p>
          <div className="tag-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        </div>
      </section>
      <div className="container case-layout">
        <div className="case-main">
          <section className="case-section"><h2>Business challenge</h2><p>{project.challenge}</p></section>
          <section className="case-section"><h2>Why it mattered</h2><p>{project.why}</p></section>
          <section className="case-section"><h2>My role</h2><p>{project.role}</p></section>
          {project.governanceFlow && (
            <section className="case-section">
              <h2>Governance model</h2>
              <div className="governance-flow" aria-label={project.governanceFlow.join(" → ")}>
                {project.governanceFlow.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
              </div>
            </section>
          )}
          {project.workflow && <section className="case-section"><h2>{project.slug === "ai-and-automation-intake" ? "Request lifecycle" : project.slug === "vendor-proof-of-concept-governance" ? "Evaluation phases" : "Workflow"}</h2><ol className="workflow-list">{project.workflow.map((step) => <li key={step}>{step}</li>)}</ol>{project.slug === "ai-and-automation-intake" && <p>Intake captures the business problem, process owner, data sensitivity, current manual effort, automation suitability, dependencies, risk review, priority, status, estimated hours, and delivered value. Records are fictional.</p>}</section>}
          {project.decisionOptions && <section className="case-section"><h2>Decision paths</h2><div className="tag-row">{project.decisionOptions.map((item) => <span key={item}>{item}</span>)}</div></section>}
          {project.approach && <section className="case-section"><h2>Approach</h2><ol className="approach-list">{project.approach.map((item) => <li key={item}>{item}</li>)}</ol></section>}
          <section className="case-section"><h2>Solution</h2><p>{project.solution}</p></section>
          <section className="case-section"><h2>Governance controls</h2><ul className="approach-list">{project.controls.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="case-section"><h2>Outcome</h2><p className="outcome-callout">{project.outcome}</p></section>
          <section className="case-section"><h2>Lessons learned</h2><p>{project.lessons}</p></section>
        </div>
        <aside className="case-sidebar">
          <div className="sidebar-card"><h2>Project details</h2><h3>Tools</h3><ul>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul><h3>Skills demonstrated</h3><ul>{project.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
          <div className="confidentiality-card"><span aria-hidden="true">◆</span><h2>Confidentiality</h2><p>{portfolio.confidentiality}</p></div>
        </aside>
      </div>
      <div className="container case-footer"><Link className="button button-outline" to="/#projects">← Back to Projects</Link></div>
    </article>
  );
}
