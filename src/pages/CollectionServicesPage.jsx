import React from 'react';
import { DollarSign, ShieldAlert, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function CollectionServicesPage() {
  const collectionFeatures = [
    { title: 'Contingency Pricing', value: '0% Upfront', desc: 'We operate on a pure performance model—if we do not recover claims, you pay nothing.' },
    { title: 'A/R Cleanup Projects', value: '90+ Days Out', desc: 'Dedicated retro audits of aged accounts receivable to reclaim lost funding.' },
    { title: 'Compassionate Outreach', desc: 'Patient-centric billing communication maintaining medical provider respect and trust.' }
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
          <h1 className="page-title">Collection Services</h1>
          <p className="page-desc">
            Recovering outstanding medical accounts receivable cleanly, transparently, and with strict patient compliance.
          </p>
        </div>
      </div>

      {/* Main Collection Intro Block */}
      <section className="section collections-feature-block">
        <div className="container">
          <div className="grid-2 collections-grid">

            {/* Image */}
            <div className="collections-img-container">
              <img
                src="/collection_services_img.png"
                alt="Medical Collections and accounts receivable dashboard audit"
                className="collections-img"
              />
              <div className="img-glow-shadow"></div>
            </div>

            <div className="collections-text">
              <span className="section-tag">Contingency Collections</span>
              <h2>No Recovery, No Fee. Guaranteed.</h2>
              <p>
                MedRecovery Solutions offers dedicated patient collections and insurance collection services on a pure contingency basis. We act as an extension of your practice's billing team, auditing denied claims, researching unapplied insurance credits, and appealing stale filings.
              </p>
              <p>
                Our processes are built to ensure compliance with the Fair Debt Collection Practices Act (FDCPA) and state medical privacy regulations, safeguarding your clinical standing at all times.
              </p>

              <div className="collect-stats-strip">
                <div className="c-stat-box">
                  <span className="c-stat-num">+23.4%</span>
                  <span className="c-stat-lbl">Average Collections Jump</span>
                </div>
                <div className="c-stat-box">
                  <span className="c-stat-num">100%</span>
                  <span className="c-stat-lbl">FDCPA & HIPAA Secure</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Offerings Grid */}
      <section className="section offerings-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Scope</span>
            <h2 className="section-title">Specialized Recovery Portfolios</h2>
          </div>

          <div className="grid-3 offerings-grid">
            {collectionFeatures.map((feat, idx) => (
              <div key={idx} className="offering-card card">
                <div className="offering-badge">
                  {feat.value || <Sparkles size={16} />}
                </div>
                <h3 className="offering-title">{feat.title}</h3>
                <p className="offering-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding-top: 60px;
          padding-bottom: 60px;
          background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-primary) 100%);
          text-align: center;
        }
        .page-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 16px;
        }
        .page-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .collections-feature-block {
          background-color: transparent;
          border-bottom: 1px solid var(--color-border);
        }
        .collections-grid {
          align-items: center;
          gap: 60px;
        }
        .collections-text {
          text-align: left;
        }
        .collections-text h2 {
          font-size: 2.2rem;
          margin-top: 12px;
          margin-bottom: 20px;
        }
        .collections-text p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .collect-stats-strip {
          display: flex;
          gap: 24px;
          margin-top: 28px;
        }
        .c-stat-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .c-stat-num {
          font-family: var(--font-mono);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .c-stat-lbl {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        
        .collections-img-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
        }
        .collections-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          position: relative;
          z-index: 2;
        }
        .img-glow-shadow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, var(--color-accent-bg) 0%, transparent 70%);
          z-index: 1;
          opacity: 0.5;
        }
        
        /* Offerings Section */
        .offerings-section {
          background-color: transparent;
        }
        .offerings-grid {
          margin-top: 40px;
        }
        .offering-card {
          text-align: left;
          background-color: var(--bg-surface);
          position: relative;
          padding-top: 36px;
        }
        .offering-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: var(--color-accent-bg);
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 50px;
        }
        .offering-title {
          font-size: 1.15rem;
          margin-bottom: 12px;
        }
        .offering-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .collections-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .collections-img-container {
            margin-left: auto;
            margin-right: auto;
            order: 2;
          }
        }
      `}</style>
    </motion.div>
  );
}
