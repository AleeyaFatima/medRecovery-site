import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import { FileText, Layers, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function Home({ setCurrentPage }) {
  // Teaser services list
  const previewServices = [
    {
      title: 'Medical Billing',
      desc: 'Prompt claim formatting and secure electronic submission to commercial and public insurers.',
      icon: <FileText size={22} />
    },
    {
      title: 'Revenue Cycle Management',
      desc: 'End-to-end RCM processes to track claims, resolve blocks, and maximize collection speeds.',
      icon: <Layers size={22} />
    },
    {
      title: 'Patient Collections',
      desc: 'Compassionate, compliant solutions that preserve patient trust while securing overdue balances.',
      icon: <HeartHandshake size={22} />
    }
  ];

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-content"
    >
      <Hero setCurrentPage={setCurrentPage} />
      <TrustStrip />

      {/* Overview Teaser Section */}
      <section className="section overview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Overview</span>
            <h2 className="section-title">Reliable Clinical Revenue Recovery</h2>
            <p className="section-subtitle">
              We help practices reduce overhead and secure the resources they deserve through professional management.
            </p>
          </div>

          <div className="grid-3 preview-grid">
            {previewServices.map((service, idx) => (
              <div key={idx} className="card teaser-card">
                <div className="teaser-icon-box">{service.icon}</div>
                <h3 className="teaser-title">{service.title}</h3>
                <p className="teaser-desc">{service.desc}</p>
                <button onClick={() => handleNavigate('services')} className="teaser-btn">
                  Learn Details
                </button>
              </div>
            ))}
          </div>

          <div className="center-cta-box">
            <button onClick={() => handleNavigate('services')} className="btn btn-secondary">
              View All Services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Info Banner Section */}
      <section className="section-dark banner-section">
        <div className="container banner-container">
          <div className="banner-text-box">
            <h2 className="banner-title">Maximize Your Collection Potential</h2>
            <p className="banner-desc">
              Get an expert audit of your outstanding billing files and uncover leakage points within one business day.
            </p>
          </div>
          <button onClick={() => handleNavigate('contact')} className="btn btn-primary btn-accent">
            Request Free Audit <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .overview-section {
          background-color: transparent;
        }
        .teaser-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .teaser-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 50% !important;
          background-color: var(--color-accent-bg) !important;
          color: var(--color-accent) !important;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .teaser-title {
          font-size: 1.15rem;
          margin-bottom: 8px;
        }
        .teaser-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .teaser-btn {
          background: none;
          border: none;
          color: var(--color-primary);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          padding: 0;
          transition: color var(--transition-fast);
        }
        .teaser-btn:hover {
          color: var(--color-accent);
        }
        
        .center-cta-box {
          margin-top: 48px;
          display: flex;
          justify-content: center;
        }
        
        /* Banner Card */
        .banner-section {
          padding: 60px 0;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-dark-section) 100%);
        }
        .banner-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
          text-align: left;
        }
        .banner-text-box {
          max-width: 700px;
        }
        .banner-title {
          font-size: 1.85rem;
          margin-bottom: 12px;
        }
        .banner-desc {
          font-size: 1rem;
          opacity: 0.85;
        }
        
        @media (max-width: 768px) {
          .banner-container {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
    </motion.div>
  );
}
