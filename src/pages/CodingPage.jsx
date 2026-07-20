import React from 'react';
import { Award, ShieldCheck, Search, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function CodingPage() {
  const steps = [
    { title: 'Chart Auditing', icon: <Search size={20} />, desc: 'AAPC CPC specialists review clinical charts to extract correct diagnostic and procedural detail.' },
    { title: 'Code Assignment', icon: <FileText size={20} />, desc: 'Accurate mapping of CPT, ICD-10-CM, and HCPCS codes matched to payer specifications.' },
    { title: 'Compliance Check', icon: <ShieldCheck size={20} />, desc: 'Reviewing modifier combinations and CCI edits to restrict immediate bundling exclusions.' }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-content"
    >
      <div className="page-header section-dark">
        <div className="container">
          <span className="section-tag">AAPC Certified Specialty</span>
          <h1 className="page-title">Certified Medical Coding</h1>
          <p className="page-desc">
            Mitigate audit risks, eliminate downcoding, and ensure correct claim structures using AAPC CPC certified coding specialists.
          </p>
        </div>
      </div>

      <section className="section core-content-section">
        <div className="container">
          <div className="grid-2 main-grid">
            <div className="text-col">
              <span className="section-tag">Coding Excellence</span>
              <h2>Downcoding and Regulatory Exposure</h2>
              <p className="copy-p">
                Payer audits and coding complexity cost medical practices millions in lost collections annually. Coding errors, like mismatched codes or incorrect modifiers, lead to immediate denials. In contrast, under-coding out of fear of audits (downcoding) represents a massive loss of earned revenue.
              </p>
              <p className="copy-p">
                MedRecovery Solutions employs certified coders specialized in outpatient, hospital, surgery center, and multi-specialty clinical guidelines. We run regular internal coding reviews, ensuring that CPT procedures, ICD-10-CM diagnoses, and HCPCS modifiers are perfectly mapped to optimize compliance and maximize collections.
              </p>
              
              <div className="bullets-box">
                <div className="bullet-row">
                  <CheckCircle2 size={16} className="bullet-accent" />
                  <span>AAPC Certified Professional Coders (CPC) overseeing all reviews</span>
                </div>
                <div className="bullet-row">
                  <CheckCircle2 size={16} className="bullet-accent" />
                  <span>CCI validation mapping and modifier checks (e.g., 25, 59, RT/LT)</span>
                </div>
                <div className="bullet-row">
                  <CheckCircle2 size={16} className="bullet-accent" />
                  <span>Routine audit security checks to prevent downcoding leakages</span>
                </div>
              </div>
            </div>

            <div className="metric-summary-box card">
              <Award className="shield-icon" size={32} />
              <h3>Certified Accuracy</h3>
              <div className="big-stat">98.8%</div>
              <span className="stat-label">Coding Accuracy Benchmark</span>
              <p className="stat-desc">
                Minimizing compliance exposure and reducing audit clawbacks through rigorous chart checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Steps */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Workflow</span>
            <h2>Coding Operations</h2>
          </div>

          <div className="grid-3 process-steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card card">
                <div className="step-num">{idx + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding-top: 150px;
          padding-bottom: 60px;
          background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-primary) 100%);
          text-align: center;
        }
        .page-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 16px;
          font-family: var(--font-heading);
          font-weight: 800;
        }
        .page-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 700px;
          margin: 0 auto;
        }

        .core-content-section {
          background-color: var(--bg-primary);
        }
        .main-grid {
          align-items: center;
          gap: 60px;
        }
        .text-col {
          text-align: left;
        }
        .copy-p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .bullets-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }
        .bullet-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .bullet-accent {
          color: var(--color-accent);
          flex-shrink: 0;
        }

        .metric-summary-box {
          background: rgba(15, 12, 28, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
        }
        .light .metric-summary-box {
          background: rgba(255, 255, 255, 0.82);
          border-color: rgba(0, 0, 0, 0.06);
        }
        .shield-icon {
          color: var(--color-accent);
          margin-bottom: 16px;
        }
        .metric-summary-box h3 {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 24px;
        }
        .big-stat {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFF 30%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .light .big-stat {
          background: linear-gradient(135deg, var(--color-primary) 30%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          display: block;
        }
        .stat-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        .process-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--color-border);
        }
        .process-steps-grid {
          gap: 20px;
          margin-top: 40px;
        }
        .step-card {
          padding: 24px;
          background-color: var(--bg-primary);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          text-align: left;
          position: relative;
        }
        .step-num {
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 2.2rem;
          font-weight: 850;
          color: rgba(255, 255, 255, 0.05);
          line-height: 1;
        }
        .light .step-num {
          color: rgba(0, 0, 0, 0.04);
        }
        .step-icon {
          color: var(--color-accent);
          margin-bottom: 16px;
        }
        .step-card h3 {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
        }
        .step-card p {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        @media (max-width: 900px) {
          .main-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </motion.div>
  );
}
