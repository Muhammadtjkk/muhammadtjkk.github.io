import Icon from "./Icon.jsx";

const dots = { "0-3": "V-14", "1-2": "V-07", "2-1": "V-22", "3-3": "V-31", "1-4": "V-02" };

function cellLevel(row, col) {
  const impact = 5 - row;
  const likelihood = col + 1;
  const score = impact * likelihood;
  if (score >= 15) return "critical";
  if (score >= 8) return "high";
  if (score >= 4) return "medium";
  return "low";
}

export default function HeroDashboard() {
  return (
    <div className="dash-wrap">
      <div className="float-badge badge-a"><Icon name="shieldCheck" size={14} /> SOC 2 Type II</div>
      <div className="float-badge badge-b"><Icon name="check" size={14} /> ISO 27001</div>
      <div className="float-badge badge-c"><Icon name="compass" size={14} /> NIST CSF 2.0</div>
      <div className="dash" role="img" aria-label="Illustrative technology-risk dashboard built with synthetic data: a likelihood and impact heat map, a vendor review gauge, and an improving residual-exposure trend.">
        <div className="dash-top">
          <span className="dash-title"><i className="pulse" /> Technology risk posture</span>
          <span className="dash-chip">Synthetic data</span>
        </div>
        <div className="dash-row">
          <div className="dash-panel">
            <div className="panel-label">Likelihood × impact</div>
            <div className="heatmap">
              {Array.from({ length: 5 }).map((_, row) => Array.from({ length: 5 }).map((__, col) => {
                const key = `${row}-${col}`;
                return <span key={key} className={`cell cell-${cellLevel(row, col)}`} style={{ animationDelay: `${(row + col) * 60}ms` }}>{dots[key] && <b title={dots[key]} />}</span>;
              }))}
            </div>
            <div className="heat-axes"><span>Likelihood →</span><span>↑ Impact</span></div>
          </div>
          <div className="dash-panel gauge-panel">
            <div className="panel-label">Vendor reviews</div>
            <div className="gauge-box">
            <svg className="gauge" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="48" className="gauge-track" />
              <circle cx="60" cy="60" r="48" className="gauge-fill" />
            </svg>
            <div className="gauge-center"><strong>200+</strong><span>questionnaires</span></div>
            </div>
          </div>
        </div>
        <div className="dash-panel trend-panel">
          <div className="trend-head"><span className="panel-label">Residual exposure · 6 periods</span><span className="trend-badge">▼ Improving</span></div>
          <svg className="spark" viewBox="0 0 300 70" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#36c4c0" stopOpacity=".45" />
                <stop offset="100%" stopColor="#36c4c0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="spark-area" d="M0 18 L50 24 L100 20 L150 34 L200 40 L250 48 L300 54 L300 70 L0 70 Z" fill="url(#sparkFill)" />
            <path className="spark-line" d="M0 18 L50 24 L100 20 L150 34 L200 40 L250 48 L300 54" />
            <line className="spark-appetite" x1="0" x2="300" y1="38" y2="38" />
          </svg>
          <div className="trend-legend"><span><i className="lg-line" />Exposure</span><span><i className="lg-dash" />Risk appetite</span></div>
        </div>
        <div className="dash-layers">
          <span><Icon name="layers" size={14} />Governance</span>
          <span><Icon name="shieldCheck" size={14} />Assurance</span>
          <span><Icon name="chart" size={14} />Intelligence</span>
          <span><Icon name="cpu" size={14} />Automation</span>
        </div>
      </div>
    </div>
  );
}
