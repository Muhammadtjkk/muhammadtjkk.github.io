// Additional portfolio content. All examples are generalized or illustrative; no confidential information.

export const categoryStyles = {
  "Analytics": { icon: "chart", tone: "blue" },
  "Third-Party Risk": { icon: "network", tone: "teal" },
  "Automation": { icon: "cpu", tone: "violet" },
  "GRC": { icon: "layers", tone: "gold" },
  "Audit and Compliance": { icon: "clipboard", tone: "green" },
  "Cyber Risk": { icon: "shield", tone: "coral" },
};

export const bringIcons = ["scale", "layers", "cpu", "message"];

export const expertiseIcons = ["shield", "network", "layers", "chart", "cpu", "clipboard", "mail", "search"];

export const skillIcons = ["shield", "book", "compass", "chart", "cpu", "file", "code", "users"];

export const lifecycle = [
  { icon: "compass", title: "Understand context", text: "Business process, data sensitivity, owners, dependencies, and risk appetite." },
  { icon: "search", title: "Gather evidence", text: "SOC 2, ISO 27001, penetration-test summaries, questionnaires, and architecture." },
  { icon: "target", title: "Assess & rate", text: "Inherent versus residual risk, control gaps, likelihood, and impact." },
  { icon: "flag", title: "Decide & treat", text: "Remediate, accept with an exception, transfer, or avoid, each with an owner and due date." },
  { icon: "activity", title: "Monitor", text: "Continuous monitoring signals, aging, reassessment triggers, and remediation tracking." },
  { icon: "chart", title: "Report", text: "Leadership-ready summaries that show position, trend, and the decision required." },
];

export const nistFunctions = [
  { code: "GV", name: "Govern", tone: "gold", text: "Supply-chain risk oversight, policy and procedure alignment, roles and accountability." },
  { code: "ID", name: "Identify", tone: "blue", text: "Vendor inventory and tiering, risk assessment, and improvement opportunities." },
  { code: "PR", name: "Protect", tone: "violet", text: "Access governance, data-protection evidence, and security awareness and training." },
  { code: "DE", name: "Detect", tone: "coral", text: "Continuous monitoring and outside-in attack-surface signals for third parties." },
  { code: "RS", name: "Respond", tone: "teal", text: "Incident-response evidence in due diligence, escalation paths, and findings follow-up." },
  { code: "RC", name: "Recover", tone: "green", text: "Business continuity and disaster recovery evidence, including RTO and RPO commitments." },
];

export const evidenceTypes = [
  { icon: "shieldCheck", title: "SOC 2 Type II", text: "Scope, review period, exceptions, complementary user entity controls, and subservice organizations." },
  { icon: "award", title: "ISO 27001", text: "Certificate scope, validity dates, certifying body, and alignment to the services in use." },
  { icon: "target", title: "Penetration tests", text: "Test date, scope, severity profile, and remediation status of significant findings." },
  { icon: "lock", title: "PCI DSS", text: "Attestation coverage for the specific payment services and the compliance date." },
  { icon: "clipboard", title: "Questionnaires", text: "Answers validated against supporting evidence rather than accepted at face value." },
  { icon: "activity", title: "Continuous monitoring", text: "Outside-in risk ratings and alerts that trigger review between assessments." },
];

export const tprmStages = [
  { title: "Intake & scoping", text: "Service, data, access, and business owner" },
  { title: "Inherent risk tiering", text: "Criticality and data sensitivity set the depth of review" },
  { title: "Due diligence", text: "Questionnaire, evidence, and monitoring signals" },
  { title: "Findings & remediation", text: "Gaps, owners, due dates, and exceptions" },
  { title: "Decision & contracting", text: "Approval conditions and security safeguards" },
  { title: "Ongoing monitoring", text: "Alerts, aging, and reassessment triggers" },
  { title: "Reassess or offboard", text: "Periodic review, access removal, and data return" },
];

export const riskTiers = [
  { tier: "Critical", tone: "coral", depth: 100, text: "Sensitive data or business-critical service. Full evidence review, architecture and data-flow review, and the most frequent reassessment." },
  { tier: "High", tone: "gold", depth: 75, text: "Material data or system access. Targeted questionnaire, key evidence validation, and monitoring." },
  { tier: "Moderate", tone: "blue", depth: 50, text: "Limited data or access. Standard questionnaire and monitoring triggers." },
  { tier: "Low", tone: "green", depth: 25, text: "No sensitive data or access. Lightweight attestation and periodic confirmation." },
];

export const careerBridge = [
  { from: "High-volume service under pressure", to: "Calm prioritization during escalations and deadlines" },
  { from: "Food-safety and quality controls", to: "Control discipline, evidence, and audit readiness" },
  { from: "Leading and training frontline teams", to: "Stakeholder enablement and clear communication" },
  { from: "Standardized recipes and prep systems", to: "Runbooks, SOPs, and repeatable workflows" },
];

export const perspectives = [
  { icon: "shieldCheck", title: "A SOC 2 report is evidence, not an answer", text: "Scope, review period, exceptions, and complementary user entity controls decide how much assurance a report actually provides." },
  { icon: "cpu", title: "AI should recommend; people should decide", text: "Automation earns trust when every suggestion is reviewed, the rationale is recorded, and accountability stays with a person." },
  { icon: "chart", title: "A dashboard should end with a decision", text: "Each metric needs a threshold, a trend, an owner, and a clear ask. Otherwise it is just a display." },
  { icon: "file", title: "Documents are controls too", text: "When standards, procedures, and runbooks disagree, teams follow different rules and the audit trail weakens." },
];

export const credentialIssuers = {
  "Professional Scrum Master I": "Scrum.org",
  "Google Cybersecurity": "Google",
  "IBM Generative AI for Cybersecurity Professionals": "IBM",
  "Cisco Cyber Threat Management": "Cisco Networking Academy",
  "Network Pro": "TestOut",
  "PC Pro": "TestOut",
  "Security Pro": "TestOut",
  "Office Pro": "TestOut",
  "Microsoft and LinkedIn Career Essentials training": "Microsoft · LinkedIn",
};
