import React, { useState } from 'react';
import { Mail, Check, Briefcase, FileText, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', position: 'Billing Specialist', message: '' });

  const positions = [
    { title: 'Certified Medical Coder', dept: 'Coding Audits', type: 'Full-Time (Remote / Hybrid)', requirements: 'AAPC CPC certification with 3+ years experience.' },
    { title: 'Billing & AR Specialist', dept: 'Collections & Claims', type: 'Full-Time (Houston Office)', requirements: 'Experience scrubbing commercial and Medicaid payers.' },
    { title: 'Credentialing Lead', dept: 'Practice Consulting', type: 'Part-Time / Flex', requirements: 'Strong knowledge of CAQH portal entries and panel setups.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', position: 'Billing Specialist', message: '' });
    }, 4000);
  };

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
          
          <div className="page-header-left">
            <span className="section-tag">Join MedRecovery</span>
            <h1 className="page-title">Work With Us</h1>
            <p className="page-desc">
              Grow your career with an industry-leading RCM agency based in the Houston Medical Center district.
            </p>
            <p className="page-desc-secondary">
              We believe that helping clinics recover revenue requires a supportive, collaborative internal workplace. We offer continuous AAPC educational training, comprehensive healthcare benefits, and remote flexibility.
            </p>
            
            <div className="careers-perks">
              <div className="perk-item">
                <Check size={16} className="perk-icon" />
                <span>AAPC Membership & Exam Sponsorships</span>
              </div>
              <div className="perk-item">
                <Check size={16} className="perk-icon" />
                <span>Competitive 401(k) Matching Options</span>
              </div>
            </div>
          </div>

          <div className="header-img-box">
            <img 
              src="/careers_img.png" 
              alt="MedRecovery Solutions workplace office environment" 
              className="header-img"
            />
            <div className="img-glow-shadow"></div>
          </div>

        </div>
      </div>

      {/* Open Openings */}
      <section className="section openings-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Current Openings</span>
            <h2 className="section-title">Explore Active Roles</h2>
          </div>

          <div className="openings-list">
            {positions.map((pos, idx) => (
              <div key={idx} className="position-card card">
                <div className="pos-header">
                  <div className="pos-title-box">
                    <Briefcase size={18} className="pos-icon" />
                    <h3>{pos.title}</h3>
                  </div>
                  <span className="pos-type-badge">{pos.type}</span>
                </div>
                <div className="pos-body">
                  <span className="pos-dept">Department: <strong>{pos.dept}</strong></span>
                  <p className="pos-reqs">Requirements: {pos.requirements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Application Form */}
      <section className="section app-form-section">
        <div className="container container-sm">
          <div className="card app-form-card">
            <h3 className="form-heading">Submit Your Interest</h3>
            <p className="form-subheading">Upload details for immediate consideration by our recruitment staff.</p>

            {submitted ? (
              <div className="form-success">
                <Send size={32} className="success-send" />
                <h4>Application Received!</h4>
                <p>Our HR department will review your credentials and contact you within 3 business days.</p>
              </div>
            ) : (
              <form className="careers-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name" 
                    className="form-input" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email" 
                    className="form-input" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Interested Role</label>
                  <select 
                    id="position" 
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="form-input"
                  >
                    <option value="Billing Specialist">Billing & AR Specialist</option>
                    <option value="Certified Medical Coder">Certified Medical Coder</option>
                    <option value="Credentialing Lead">Credentialing Lead</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message / Experience Summary</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your billing credentials (AAPC certifications, EHR experience)..." 
                    className="form-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding-top: 190px;
          padding-bottom: 80px;
          background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-primary) 100%);
          text-align: left;
        }
        .page-header-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }
        .page-header-left {
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
        
        .careers-perks {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 8px;
        }
        .perk-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #FFFFFF;
        }
        .perk-icon {
          color: var(--color-accent);
          flex-shrink: 0;
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
        
        .openings-section {
          background-color: transparent;
        }
        .openings-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 40px;
        }
        .position-card {
          text-align: left;
          background-color: var(--bg-surface);
        }
        .pos-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 12px;
        }
        .pos-title-box {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-primary);
        }
        .pos-title-box h3 {
          font-size: 1.2rem;
          font-weight: 700;
        }
        .pos-icon {
          color: var(--color-primary);
        }
        .pos-type-badge {
          background-color: var(--color-accent-bg);
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
        }
        .pos-body {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .pos-dept {
          display: block;
          margin-bottom: 6px;
        }
        .pos-reqs {
          color: var(--text-muted);
        }
        
        .app-form-section {
          background-color: transparent;
        }
        .app-form-card {
          background-color: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .dark .app-form-card {
          background-color: rgba(16, 12, 34, 0.85) !important;
        }
        .form-heading {
          font-size: 1.5rem;
          margin-bottom: 8px;
          text-align: center;
          color: var(--text-primary);
        }
        .form-subheading {
          font-size: 0.95rem;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 32px;
        }
        .careers-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .form-input {
          font-family: var(--font-sans);
          padding: 12px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast);
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .form-submit-btn {
          margin-top: 10px;
          width: 100%;
        }
        
        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 0;
          gap: 16px;
        }
        .success-send {
          color: var(--color-success);
        }
        .form-success h4 {
          font-size: 1.3rem;
          color: var(--text-primary);
        }
        .form-success p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .page-header-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .page-header {
            padding-top: 170px;
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
