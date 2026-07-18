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
        <div className="container page-header-grid">
          
          <div className="header-img-box">
            <img 
              src="/testimonials_img.webp" 
              alt="Smiling physician representing clinical success" 
              className="header-img"
              loading="eager"
            />
            <div className="img-glow-shadow"></div>
          </div>

          <div className="page-header-right">
            <span className="section-tag">Partner Testimonials</span>
            <h1 className="page-title">Client Success Stories</h1>
            
            <div className="testimonials-slider-box">
              <Quote size={32} className="quote-indicator-icon" />
              
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
                        <Star key={i} size={14} fill="var(--color-accent)" stroke="var(--color-accent)" />
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
                  <ChevronLeft size={18} />
                </button>
                <span className="slider-counter">{activeIdx + 1} / {testimonials.length}</span>
                <button onClick={handleNext} className="slider-btn" aria-label="Next testimonial">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

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
              <h4 className="case-title">A/R Recovery</h4>
              <p>Old aged accounts receivable successfully audited and paid within 90 days.</p>
            </div>
            <div className="case-card card">
              <span className="case-stat">98.7%</span>
              <h4 className="case-title">Clean Claim Rate</h4>
              <p>Industry-leading filing standards preventing payer rejections and delay modifiers.</p>
            </div>
            <div className="case-card card">
              <span className="case-stat">0%</span>
              <h4 className="case-title">Upfront Fees</h4>
              <p>Risk-free collections partnership based completely on performance metrics.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding-top: 100px;
          padding-bottom: 70px;
          background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-primary) 100%);
          text-align: left;
        }
        .page-header-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        .page-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
        .page-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 20px;
          line-height: 1.2;
          font-family: var(--font-heading);
          font-weight: 800;
        }
        
        .testimonials-slider-box {
          background-color: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-md);
          padding: 24px;
          position: relative;
          width: 100%;
        }
        .quote-indicator-icon {
          color: var(--color-accent);
          opacity: 0.25;
          position: absolute;
          top: 16px;
          right: 20px;
        }
        .slider-content-height {
          min-height: 140px;
          display: flex;
          align-items: center;
        }
        .active-testimonial-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }
        .stars-strip {
          display: flex;
          gap: 4px;
        }
        .testimonial-quote-text {
          font-size: 1.05rem;
          line-height: 1.5;
          color: #FFFFFF;
          font-style: italic;
        }
        .testimonial-meta {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
        }
        .meta-author {
          color: var(--color-accent);
        }
        .meta-org {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .slider-controls {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 16px;
        }
        .slider-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .slider-btn:hover {
          background-color: var(--color-accent);
          border-color: var(--color-accent);
          color: #002851;
        }
        .slider-counter {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
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
        
        .quotes-grid-section {
          background-color: transparent;
        }
        .cases-grid {
          margin-top: 40px;
        }
        .case-card {
          text-align: left;
          background-color: var(--bg-surface);
        }
        .case-stat {
          font-family: var(--font-mono);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-primary);
          display: block;
          margin-bottom: 8px;
        }
        .case-title {
          font-size: 1.15rem;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        .case-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .page-header-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .page-header-grid > :first-child {
            order: 2;
          }
          .page-header {
            padding-top: 200px;
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
