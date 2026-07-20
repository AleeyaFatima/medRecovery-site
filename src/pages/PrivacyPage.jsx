import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function PrivacyPage() {
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
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-desc">Effective Date: January 1, 2026</p>
        </div>
      </div>

      <section className="section legal-content-section">
        <div className="container legal-container">
          <div className="legal-paper card">
            <h2>1. Policy Overview</h2>
            <p>
              MedRecovery Solutions, LLC ("we," "our," or "us") provides medical billing, certified coding, payer credentialing, and revenue cycle management services to healthcare practices. We recognize the vital importance of data protection, especially regarding patient health records.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and safeguard electronic personal data and Protected Health Information (PHI) processed through our corporate website and secure portals.
            </p>

            <h2>2. Protected Health Information (PHI) & HIPAA</h2>
            <p>
              Much of the data we handle constitutes Protected Health Information (PHI) under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the Health Information Technology for Economic and Clinical Health (HITECH) Act.
            </p>
            <p>
              We act as a Business Associate for our client healthcare providers (Covered Entities). All PHI received or created by us is governed by signed Business Associate Agreements (BAAs) and is managed in strict alignment with HIPAA Privacy, Security, and Breach Notification rules. We implement technical, administrative, and physical safeguards to prevent unauthorized access, exposure, or use of PHI.
            </p>

            <h2>3. Information We Collect</h2>
            <p>
              We collect information in the following ways:
            </p>
            <ul>
              <li><strong>Direct Practice Submissions:</strong> Practice details, contact name, email address, practice tax ID, and billing volumes submitted via contact, quote, and audit request forms.</li>
              <li><strong>Automatic Device Logins:</strong> Browser type, operating system, IP address, and cookie identifiers tracked for analytics and system optimization.</li>
              <li><strong>Secure Portal Syncing:</strong> Credential mappings, claims data, and payer parameters synced during client onboarding.</li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>
              We use practice and administrative details to:
            </p>
            <ul>
              <li>Provide and support RCM services, audits, and billing updates.</li>
              <li>Coordinate payer credentialing and enrollment.</li>
              <li>Optimize and secure our web portals.</li>
              <li>Distribute billing insights and practice newsletters (subject to consent).</li>
            </ul>

            <h2>5. Data Disclosure & Sharing</h2>
            <p>
              We do not sell, rent, or distribute personal information or practice data to third parties. We share details only with:
            </p>
            <ul>
              <li><strong>Insurance Payers:</strong> Submitting claims and credentialing filings on behalf of your practice.</li>
              <li><strong>Subprocessors:</strong> Clearinghouses and secure database servers (AWS) operating under signed BAAs.</li>
              <li><strong>Legal Authorities:</strong> When required by federal law or regulatory enforcement audits.</li>
            </ul>

            <h2>6. Security Measures</h2>
            <p>
              We store and process data using enterprise AWS cloud services with AES-256 data encryption, unique portal logins, audit trail logging, and physical server security locks. Penetration testing is conducted routinely to guarantee network firewall integrity.
            </p>

            <h2>7. Your Choices & Contact</h2>
            <p>
              Practices can update their profile information, cancel billing dashboard accounts, or unsubscribe from insights lists by contacting our privacy compliance desk.
            </p>
            <p>
              <strong>Privacy Desk Contact:</strong> compliance@medrecoverysolutions.com | Houston, Texas.
            </p>
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
        }

        .legal-content-section {
          background-color: var(--bg-primary);
        }
        .legal-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .legal-paper {
          padding: 40px;
          text-align: left;
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
        }
        .legal-paper h2 {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 30px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 8px;
        }
        .legal-paper h2:first-of-type {
          margin-top: 0;
        }
        .legal-paper p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .legal-paper ul {
          padding-left: 20px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .legal-paper li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </motion.div>
  );
}
