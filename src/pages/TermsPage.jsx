import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function TermsPage() {
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
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-desc">Effective Date: January 1, 2026</p>
        </div>
      </div>

      <section className="section legal-content-section">
        <div className="container legal-container">
          <div className="legal-paper card">
            <h2>1. Contractual Agreement</h2>
            <p>
              These Terms of Service govern your use of the website and portal applications operated by MedRecovery Solutions, LLC ("MedRecovery," "we," "our," or "us"). By accessing or using this website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must immediately discontinue use of the site.
            </p>

            <h2>2. Billing & RCM Services</h2>
            <p>
              The information on this website provides general descriptions of our medical billing, coding, and credentialing services. Formal service terms, contingency percentage rates, liabilities, and scope of operations are managed under a signed, physical Service Level Agreement (SLA) and Business Associate Agreement (BAA) between your practice and MedRecovery Solutions. Nothing on this website constitutes a binding offer of service or overrides terms defined in a signed SLA.
            </p>

            <h2>3. Authorized Access & Portals</h2>
            <p>
              Access to secure provider billing portals is restricted to authorized practice personnel. Users must safeguard login credentials and unique passwords. You are responsible for all actions occurring under your account. Authorized users must ensure that no unauthorized or unencrypted PHI is transmitted outside of the secure messaging features.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All website graphics, templates, custom calculations, codebases, text copy, logos, and dashboard widget layouts are the exclusive property of MedRecovery Solutions, LLC and are protected under US trademark and copyright law. Unauthorized copying, reverse-engineering, or scraping of content is strictly prohibited.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              While we strive to display accurate benchmarks and calculation estimates (such as in our ROI calculator), all figures are projections based on industry averages. We do not warrant or guarantee that your practice will achieve identical collection rates, A/R day reductions, or financial results. Actual performance depends on clinic workflows, clinical specialty, local insurance mix, and credentialing status.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, MedRecovery Solutions shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website, information templates, or calculations.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These terms are governed and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Houston, Harris County, Texas.
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
      `}</style>
    </motion.div>
  );
}
