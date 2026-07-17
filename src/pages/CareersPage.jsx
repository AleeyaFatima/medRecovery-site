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
        <div className="container">
          <h1 className="page-title">Work With Us</h1>
          <p className="page-desc">
            Grow your career with an industry-leading RCM agency based in the Houston Medical Center district.
          </p>
        </div>
      </div>

      {/* Intro Block */}
      <section className="section careers-intro-block">
        <div className="container">
          <div className="grid-2 careers-intro-grid">
            
            <div className="careers-text">
              <span className="section-tag">Join MedRecovery</span>
              <h2>A Team Dedicated to Clinical Partnerships</h2>
              <p>
                We believe that helping clinics recover revenue requires a supportive, collaborative internal workplace. At MedRecovery Solutions, we offer continuous AAPC educational training, comprehensive healthcare benefits, and remote flexibility.
              </p>
              <p>
                Whether you are an experienced billing operations lead or a certified medical coding analyst, we provide the tools and resources you need to deliver high-integrity audits.
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

            {/* Careers Page Illustration Image */}
            <div className="careers-img-container">
              <img 
                src="/careers_img.png" 
                alt="MedRecovery Solutions workplace office environment" 
                className="careers-img"
              />
              <div className="img-glow-shadow"></div>
            </div>

          </div>
        </div>
      </section>

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
        
        .careers-intro-block {
          background-color: transparent;
          border-bottom: 1px solid var(--color-border);
        }
        .careers-intro-grid {
          align-items: center;
          gap: 60px;
        }
        .careers-text {
          text-align: left;
        }
        .careers-text h2 {
          font-size: 2.2rem;
          margin-top: 12px;
          margin-bottom: 20px;
        }
        .careers-text p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .careers-perks {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }
        .perk-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .perk-icon {
          color: var(--color-accent);
        }
        
        .careers-img-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
        }
        .careers-img {
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
        
        /* Openings List */
        .openings-section {
          background-color: transparent;
          border-bottom: 1px solid var(--color-border);
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
          border-left: 4px solid var(--color-primary);
        }
        .pos-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .pos-title-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .pos-title-box h3 {
          font-size: 1.2rem;
          margin: 0;
        }
        .pos-icon {
          color: var(--color-primary);
        }
        .pos-type-badge {
          font-size: 0.75rem;
          font-weight: 700;
          background-color: var(--color-accent-bg);
          color: var(--color-primary);
          padding: 4px 12px;
          border-radius: 50px;
        }
        .pos-dept {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .pos-reqs {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 8px;
        }
        
        /* Application Form */
        .app-form-section {
          background-color: transparent;
        }
        .app-form-card {
          background-color: rgba(255, 255, 255, 0.7) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          padding: 40px;
          border-radius: var(--radius-md);
        }
        .form-heading {
          font-size: 1.6rem;
          margin-bottom: 8px;
        }
        .form-subheading {
          font-size: 0.9rem;
          color: var(--text-muted);
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
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .form-input {
          font-family: var(--font-sans);
          padding: 12px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          background-color: var(--bg-surface);
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .form-submit-btn {
          width: 100%;
          margin-top: 10px;
        }
        
        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 0;
          text-align: center;
        }
        .success-send {
          color: #22C55E;
          margin-bottom: 16px;
        }
        
        @media (max-width: 900px) {
          .careers-intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .careers-img-container {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </motion.div>
  );
}
