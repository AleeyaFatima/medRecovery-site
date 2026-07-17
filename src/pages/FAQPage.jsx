import React from 'react';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function FAQPage() {
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
          <h1 className="page-title">Resource Center & FAQ</h1>
          <p className="page-desc">
            Find quick answers on EHR portal access, integration schedules, HIPAA audits, and percentage pricing structures.
          </p>
        </div>
      </div>

      {/* FAQ Visual Block */}
      <section className="section faq-feature-block">
        <div className="container">
          <div className="grid-2 faq-grid-container">
            
            <div className="faq-block-text">
              <span className="section-tag">24/7 Practice Support</span>
              <h2>Help & Answers When You Need Them</h2>
              <p>
                Our onboarding team maps out a seamless pathway so you start recovering revenue as quickly as possible. If you don't find the answers you need in our FAQs, our Houston billing support office is always standing by to answer your direct calls.
              </p>
              <div className="faq-support-cards">
                <div className="support-card card">
                  <Clock size={20} className="sc-icon" />
                  <h4>Responsive SLA</h4>
                  <p>Inquiries resolved within 24 hours.</p>
                </div>
                <div className="support-card card">
                  <Phone size={20} className="sc-icon" />
                  <h4>Phone Support</h4>
                  <p>Speak to a live expert: (713) 555-0190</p>
                </div>
              </div>
            </div>

            {/* FAQ Page Illustration Image */}
            <div className="faq-block-img-box">
              <img 
                src="/faq_img.png" 
                alt="MedRecovery Support Representative" 
                className="faq-feature-img"
              />
              <div className="img-glow-shadow"></div>
            </div>

          </div>
        </div>
      </section>
      
      <FAQ />

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
        }
        .page-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .faq-feature-block {
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--color-border);
        }
        .faq-grid-container {
          align-items: center;
          gap: 60px;
        }
        .faq-block-text {
          text-align: left;
        }
        .faq-block-text h2 {
          font-size: 2.2rem;
          margin-top: 12px;
          margin-bottom: 20px;
        }
        .faq-block-text p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        
        .faq-support-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .support-card {
          padding: 20px;
          text-align: left;
          background-color: var(--bg-primary);
        }
        .support-card h4 {
          font-size: 1rem;
          margin: 8px 0 4px 0;
        }
        .support-card p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .sc-icon {
          color: var(--color-accent);
        }
        
        .faq-block-img-box {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
        }
        .faq-feature-img {
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
        
        @media (max-width: 900px) {
          .faq-grid-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .faq-block-img-box {
            margin-left: auto;
            margin-right: auto;
          }
          .faq-support-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
}
