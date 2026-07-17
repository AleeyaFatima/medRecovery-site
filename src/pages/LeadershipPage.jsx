import React from 'react';
import { Award, ShieldCheck, Heart, User, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function LeadershipPage() {
  const values = [
    { title: 'Transparency First', desc: 'No black-box collection pricing. Direct access to claim status dashboards.', icon: <ShieldCheck size={20} /> },
    { title: 'Patient Stewardship', desc: 'Active patient-first messaging that preserves clinical reputation and goodwill.', icon: <Heart size={20} /> },
    { title: 'AAPC Certified Audit', desc: 'Every account is scrubbed under certified guidelines to prevent insurer rejection.', icon: <Award size={20} /> }
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
          <h1 className="page-title">Company Leadership</h1>
          <p className="page-desc">
            With over a decade of trusted experience in Houston, Texas, guiding medical groups toward clean-claim compliance.
          </p>
        </div>
      </div>

      {/* Main Leadership Profile Section */}
      <section className="section leadership-profile-section">
        <div className="container">
          <div className="grid-2 profile-grid">
            
            {/* Context */}
            <div className="profile-context">
              <span className="section-tag">Executive Bio</span>
              <h2>Diana Ward — CEO & Founder</h2>
              <p className="profile-p">
                Diana established MedRecovery Solutions, LLC to resolve a growing administrative crisis: independent medical clinics losing vital funding to complex payer systems and inaccurate coding audits.
              </p>
              <p className="profile-p">
                Under her guidance, our agency has grown into a premier national RCM partner, supporting over 250 providers with certified billing, coding, and collection strategies.
              </p>

              <div className="profile-bullets">
                <div className="p-bullet">
                  <CheckCircle2 size={18} className="p-bullet-icon" />
                  <span>15+ Years in Clinical Finance Operations</span>
                </div>
                <div className="p-bullet">
                  <CheckCircle2 size={18} className="p-bullet-icon" />
                  <span>Licensed and Compliant in All 50 States</span>
                </div>
                <div className="p-bullet">
                  <CheckCircle2 size={18} className="p-bullet-icon" />
                  <span>Active MGMA & AMBA Member</span>
                </div>
              </div>
            </div>

            {/* Profile Image Box */}
            <div className="profile-image-container">
              <img 
                src="/leadership_img.png" 
                alt="Diana Ward, CEO of MedRecovery Solutions" 
                className="profile-img"
              />
              <div className="img-glow-shadow"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Operational Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Values</span>
            <h2 className="section-title">The Foundation of Our Agency</h2>
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
        
        .leadership-profile-section {
          background-color: transparent;
          border-bottom: 1px solid var(--color-border);
        }
        .profile-grid {
          align-items: center;
          gap: 60px;
        }
        .profile-context {
          text-align: left;
        }
        .profile-context h2 {
          font-size: 2.2rem;
          margin-top: 12px;
          margin-bottom: 20px;
        }
        .profile-p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .profile-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }
        .p-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .p-bullet-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        
        .profile-image-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 4/5;
          border-radius: var(--radius-md);
        }
        .profile-img {
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
        
        /* Values Grid */
        .values-section {
          background-color: transparent;
        }
        .values-grid {
          margin-top: 40px;
        }
        .value-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: var(--bg-surface);
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
          .profile-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .profile-image-container {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </motion.div>
  );
}
