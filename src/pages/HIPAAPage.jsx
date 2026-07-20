import React from 'react';
import { Shield, Key, EyeOff, Lock, Heart, Award, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function HIPAAPage() {
  const safeguards = [
    {
      title: 'Technical Safeguards',
      icon: <Key size={24} />,
      items: [
        'AES-256 Bit Encryption for all data transfers.',
        'Unique secure portal logins and biometric verification options.',
        'Automatic logouts and audit log trails on patient records.',
        'Secure SSL/TLS transmission channels using HL7 standards.'
      ]
    },
    {
      title: 'Administrative Safeguards',
      icon: <Shield size={24} />,
      items: [
        'Annual security risk audits led by certified compliance officers.',
        'Mandatory HIPAA training for all account representatives.',
        'Signed Business Associate Agreements (BAA) for all partners.',
        'Strict disciplinary policies regarding unauthorized data access.'
      ]
    },
    {
      title: 'Physical Safeguards',
      icon: <Lock size={24} />,
      items: [
        'Locked facilities containing server units with biometric entry.',
        'Secure workstation layouts to restrict patient record viewing.',
        'Encrypted portable media policies and device trackers.',
        'Strict document shredding protocols for physical paper reports.'
      ]
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-content"
    >
      {/* Header */}
      <div className="page-header section-dark">
        <div className="container">
          <span className="section-tag">National Trust & Security</span>
          <h1 className="page-title">HIPAA & Data Security Compliance</h1>
          <p className="page-desc">
            MedRecovery Solutions is fully committed to absolute patient confidentiality, data encryption, and administrative safeguards.
          </p>
        </div>
      </div>

      {/* Main Security Copy */}
      <section className="section compliance-intro-section">
        <div className="container">
          <div className="grid-2 intro-grid">
            <div className="intro-text">
              <span className="section-tag">Zero Compromise</span>
              <h2>Protecting Patient Health Information (PHI)</h2>
              <p className="body-copy">
                In healthcare, data protection is as critical as billing efficiency. Under HIPAA (Health Insurance Portability and Accountability Act) and the HITECH Act, providers must partner with vendors who maintain impeccable security profiles.
              </p>
              <p className="body-copy">
                MedRecovery Solutions acts as a Business Associate under HIPAA, meaning we assume joint compliance liability for all billing operations. We maintain strict physical, administrative, and technical safeguards across all of our Houston billing offices and remote access points.
              </p>
              <div className="accreditations-row-inline">
                <div className="badge-item">
                  <Award size={16} className="badge-icon" />
                  <span>AAPC Certified Coders</span>
                </div>
                <div className="badge-item">
                  <FileText size={16} className="badge-icon" />
                  <span>HL7 Standards</span>
                </div>
              </div>
            </div>
            
            <div className="security-summary-card card">
              <h3>Security at a Glance</h3>
              <ul className="security-bullets">
                <li>
                  <CheckCircle2 size={16} className="bullet-green" />
                  <span><strong>100% HIPAA Compliant</strong> audit paths.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-green" />
                  <span><strong>Encrypted Portals</strong> with unique user ID tracking.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-green" />
                  <span><strong>Signed BAA Agreements</strong> established before onboarding.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-green" />
                  <span><strong>Regular Penetration Audits</strong> of all AWS network systems.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguards Grid */}
      <section className="section safeguards-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Compliance Pillars</span>
            <h2 className="section-title">Our Compliance Safeguards</h2>
          </div>

          <div className="grid-3 safeguards-grid">
            {safeguards.map((safe, idx) => (
              <div key={idx} className="safeguard-card card">
                <div className="safeguard-icon-box">{safe.icon}</div>
                <h3>{safe.title}</h3>
                <ul className="safeguard-bullets">
                  {safe.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <span className="bullet-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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

        .compliance-intro-section {
          background-color: var(--bg-primary);
        }
        .intro-grid {
          align-items: center;
          gap: 60px;
        }
        .intro-text {
          text-align: left;
        }
        .body-copy {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .accreditations-row-inline {
          display: flex;
          gap: 16px;
          margin-top: 24px;
        }
        .badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.2);
          padding: 6px 12px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .badge-icon {
          color: var(--color-accent);
        }

        .security-summary-card {
          background: rgba(15, 12, 28, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px;
          text-align: left;
        }
        .light .security-summary-card {
          background: rgba(255, 255, 255, 0.82);
          border-color: rgba(0, 0, 0, 0.06);
        }
        .security-summary-card h3 {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 20px;
        }
        .security-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .security-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .bullet-green {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .safeguards-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--color-border);
        }
        .safeguards-grid {
          gap: 30px;
          margin-top: 40px;
        }
        .safeguard-card {
          padding: 32px;
          border-radius: 20px;
          text-align: left;
          background-color: var(--bg-primary);
          border: 1px solid var(--color-border);
          transition: all var(--transition-normal);
        }
        .safeguard-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
        }
        .safeguard-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .safeguard-card h3 {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        .safeguard-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .safeguard-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 6px;
        }

        @media (max-width: 900px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </motion.div>
  );
}
