import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function TestimonialsPage() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      quote: "MedRecovery Solutions rebuilt our entire billing framework. Their AAPC coders scrubbed two years of stale appeals, recovering over $340k in denied insurance funds. The transparency of their provider portal is unmatched.",
      author: "Office Manager",
      org: "Houston Cardiology Practice",
      rating: 5
    },
    {
      quote: "Ensuring physicians get paid for the care they give is not just a tagline for MedRecovery—it is their operational metric. We saw clean claim rates climb to 98.7% within three months of migration.",
      author: "Dr. Brian Miles, MD",
      org: "Baylor College of Medicine Clinic Affiliate",
      rating: 5
    },
    {
      quote: "Their credentialing team panelled five of our new physicians across three insurance providers in record time. Excellent communication and clear contingency-based pricing.",
      author: "Finance Director",
      org: "Multi-Specialty Medical Group",
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
          <h1 className="page-title">Client Success Stories</h1>
          <p className="page-desc">
            What clinical directors, office managers, and physicians say about our revenue cycle audits.
          </p>
        </div>
      </div>

      {/* Testimonials Visual Block */}
      <section className="section testimonials-feature-block">
        <div className="container">
          <div className="grid-2 testimonials-grid-container">
            
            {/* Image */}
            <div className="testimonials-img-container">
              <img 
                src="/testimonials_img.png" 
                alt="Smiling physician representing clinical success" 
                className="testimonials-img"
              />
              <div className="img-glow-shadow"></div>
            </div>

            <div className="testimonials-interactive">
              <span className="section-tag">Partner Testimonials</span>
              <h2>Trusted By Houston's Medical Community</h2>
              
              <div className="testimonials-slider-box">
                <Quote size={40} className="quote-indicator-icon" />
                
                <div className="slider-content-height">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="active-testimonial-card"
                    >
                      <div className="stars-strip">
                        {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                          <Star key={i} size={16} fill="var(--color-accent)" stroke="var(--color-accent)" />
                        ))}
                      </div>
                      <p className="testimonial-quote-text">
                        "{testimonials[activeIdx].quote}"
                      </p>
                      <div className="testimonial-meta">
                        <span className="meta-author"><strong>{testimonials[activeIdx].author}</strong></span>
                        <span className="meta-org">{testimonials[activeIdx].org}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="slider-controls">
                  <button onClick={handlePrev} className="slider-btn" aria-label="Previous testimonial">
                    <ChevronLeft size={20} />
                  </button>
                  <span className="slider-counter">{activeIdx + 1} / {testimonials.length}</span>
                  <button onClick={handleNext} className="slider-btn" aria-label="Next testimonial">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Quote Grid */}
      <section className="section quotes-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Case Audits</span>
            <h2 className="section-title">Verified Collections Growth</h2>
          </div>

          <div className="grid-3 cases-grid">
            <div className="case-card card">
              <span className="case-stat">$340k+</span>
              <h4>A/R Recovery</h4>
              <p>Old aged accounts receivable successfully audited and paid within 90 days.</p>
            </div>
            <div className="case-card card">
              <span className="case-stat">98.7%</span>
              <h4>Clean Claim Rate</h4>
              <p>Industry-leading filing standards preventing payer rejections and delay modifiers.</p>
            </div>
            <div className="case-card card">
              <span className="case-stat">0%</span>
              <h4>Upfront Fees</h4>
              <p>Risk-free collections partnership based completely on performance metrics.</p>
            </div>
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
        
        .testimonials-feature-block {
          background-color: transparent;
          border-bottom: 1px solid var(--color-border);
        }
        .testimonials-grid-container {
          align-items: center;
          gap: 60px;
        }
        .testimonials-interactive {
          text-align: left;
        }
        .testimonials-interactive h2 {
          font-size: 2.2rem;
          margin-top: 12px;
          margin-bottom: 24px;
        }
        
        .testimonials-slider-box {
          background-color: rgba(255, 255, 255, 0.7) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--radius-md);
          padding: 32px;
          position: relative;
        }
        .quote-indicator-icon {
          color: var(--color-accent);
          opacity: 0.15;
          position: absolute;
          top: 20px;
          left: 20px;
        }
        
        .slider-content-height {
          min-height: 180px;
          display: flex;
          align-items: center;
        }
        .active-testimonial-card {
          width: 100%;
        }
        .stars-strip {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }
        .testimonial-quote-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-primary);
          margin-bottom: 20px;
          font-style: italic;
        }
        .testimonial-meta {
          display: flex;
          flex-direction: column;
        }
        .meta-author {
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .meta-org {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        
        .slider-controls {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 24px;
        }
        .slider-btn {
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          color: var(--text-primary);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .slider-btn:hover {
          background-color: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }
        .slider-counter {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        
        .testimonials-img-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 4/5;
          border-radius: var(--radius-md);
        }
        .testimonials-img {
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
        
        /* Case Studies Grid */
        .quotes-grid-section {
          background-color: transparent;
        }
        .cases-grid {
          margin-top: 40px;
        }
        .case-card {
          text-align: center;
          background-color: var(--bg-surface);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .case-stat {
          font-family: var(--font-mono);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 12px;
        }
        .case-card h4 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .case-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .testimonials-grid-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .testimonials-img-container {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </motion.div>
  );
}
