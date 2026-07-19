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
        <div className="container page-header-grid">
          
          <div className="header-img-box">
            <img 
              src="/collection_services_img.png" 
              alt="Medical Collections and accounts receivable dashboard audit" 
              className="header-img"
              loading="eager"
            />
            <div className="img-glow-shadow"></div>
          </div>

          <div className="page-header-right">
            <span className="section-tag">Contingency Collections</span>
            <h1 className="page-title">Collection Services</h1>
            <p className="page-desc">
              Recovering outstanding medical accounts receivable cleanly, transparently, and with strict patient compliance.
            </p>
            <p className="page-desc-secondary">
              We act as an extension of your practice's billing team, auditing denied claims, researching unapplied insurance credits, and appealing stale filings.
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
          padding-top: 100px;
          padding-bottom: 70px;
          background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-primary) 100%);
          text-align: left;
        }
        .page-header-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        .page-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .page-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 16px;
          line-height: 1.2;
          font-family: var(--font-heading);
          font-weight: 800;
        }
        .page-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 12px;
          line-height: 1.5;
        }
        .page-desc-secondary {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 20px;
          line-height: 1.5;
        }
        
        .collect-stats-strip {
          display: flex;
          gap: 32px;
          margin-top: 16px;
        }
        .c-stat-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .c-stat-num {
          font-family: var(--font-mono);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-accent);
        }
        .c-stat-lbl {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
        }
        
        .header-img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
        }
        .header-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--shadow-lg);
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
          color: var(--text-primary);
        }
        .offering-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .page-header-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .page-header-grid > :first-child {
            order: 2;
          }
          .page-header {
            padding-top: 200px;
            padding-bottom: 60px;
          }
          .header-img-box {
            margin-left: auto;
            margin-right: auto;
            max-width: 500px;
          }
        }
      `}</style>
    </motion.div>
  );
}
