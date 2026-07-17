import React from 'react';
import Testimonials from '../components/Testimonials';
import Industries from '../components/Industries';
import { Award, ShieldCheck, Heart, User, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function AboutPage() {
  const values = [
    { title: 'Transparency First', desc: 'No hidden percentage claims. Full access to real-time billing portals.', icon: <ShieldCheck size={20} /> },
    { title: 'Patient Relations', desc: 'Compassionate collection protocols that maintain local patient goodwill.', icon: <Heart size={20} /> },
    { title: 'Coding Accuracy', desc: 'Strict review audits to limit denied claims and ensure clean submittals.', icon: <Award size={20} /> }
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
          <h1 className="page-title">About MedRecovery Solutions</h1>
          <p className="page-desc">
            Serving providers in Houston and nationwide for over ten years with elite billing audits and collections expertise.
          </p>
        </div>
      </div>

      {/* Main Story & Leadership */}
      <section className="section story-section">
        <div className="container story-container">
          <div className="grid-2 story-grid">
            
            {/* Context Details */}
            <div className="story-context">
              <span className="section-tag">Our Mission</span>
              <h2 className="story-title">Protecting the Financial Health of Healthcare</h2>
              <p className="story-p">
                Founded in Houston, Texas, MedRecovery Solutions was established to address a persistent challenge: independent practices losing significant revenue to complex payer requirements and claim rejections.
              </p>
              <p className="story-p">
                We believe that doctors should focus on clinical care, not billing paperwork. By combining highly trained credentialed coding specialists with a modern web portal, we ensure clean claims, fast collections, and complete accounting visibility.
              </p>
              
              <div className="story-bullets">
                <div className="s-bullet">
                  <CheckCircle size={16} className="bullet-icon" />
                  <span>Licensed and compliant in all 50 states</span>
                </div>
                <div className="s-bullet">
                  <CheckCircle size={16} className="bullet-icon" />
                  <span>Certified AAPC CPC medical coders</span>
                </div>
                <div className="s-bullet">
                  <CheckCircle size={16} className="bullet-icon" />
                  <span>Fully integrated under HIPAA privacy codes</span>
                </div>
              </div>
            </div>

            {/* Leadership Profile Card */}
            <div className="leader-card card">
              <div className="leader-avatar-placeholder">
                <User size={64} className="avatar-icon" />
              </div>
              <h3 className="leader-name">Diana Ward</h3>
              <span className="leader-title">CEO & Founder, MedRecovery</span>
              <p className="leader-bio">
                Diana has over fifteen years of healthcare administration and collection strategy experience. Under her leadership, MedRecovery has helped recover millions in clinical claims while maintaining transparent client operations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Principles</span>
            <h2 className="section-title">The Foundation of Our Partnerships</h2>
          </div>
          
          <div className="grid-3 values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card card">
                <div className="value-icon-box">{val.icon}</div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Industries />

      <style>{`
        .page-header {
          padding-top: 130px;
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
        
        /* Story Styling */
        .story-section {
          background-color: var(--bg-primary);
        }
        .story-grid {
          align-items: center;
          gap: 60px;
        }
        .story-context {
          text-align: left;
        }
        .story-title {
          margin-top: 12px;
          margin-bottom: 20px;
        }
        .story-p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .story-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }
        .s-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .bullet-icon {
          color: var(--color-accent);
        }
        
        /* Leader Card */
        .leader-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px;
          background-color: var(--bg-surface);
        }
        .leader-avatar-placeholder {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 2px solid var(--color-border);
        }
        .avatar-icon {
          opacity: 0.9;
        }
        .leader-name {
          font-size: 1.35rem;
          margin-bottom: 4px;
        }
        .leader-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }
        .leader-bio {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        /* Values Grid */
        .values-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .values-grid {
          margin-top: 40px;
        }
        .value-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: var(--bg-primary);
        }
        .value-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .value-title {
          font-size: 1.15rem;
          margin-bottom: 10px;
        }
        .value-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </motion.div>
  );
}
