import React from 'react';
import Approach from '../components/Approach';
import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';
import { Lock, FileText, CheckCircle } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function ApproachPage() {
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
          <h1 className="page-title">Our Integrated Approach</h1>
          <p className="page-desc">
            How we protect patient trust and accelerate clinical collections through secure technology and active specialist oversight.
          </p>
        </div>
      </div>

      {/* Approach Page Visual Block */}
      <section className="section approach-feature-block">
        <div className="container">
          <div className="grid-2 approach-grid-container">
            
            {/* Approach Page Illustration Image */}
            <div className="approach-block-img-box">
              <img 
                src="/approach_img.png" 
                alt="Healthcare Billing Management Team Meeting" 
                className="approach-feature-img"
              />
              <div className="img-glow-shadow"></div>
            </div>

            <div className="approach-block-text">
              <span className="section-tag">Security & Speed</span>
              <h2>End-to-End Workflow Optimization</h2>
              <p>
                Recovering revenue should never disrupt your day-to-day operations or compromise data privacy. We specialize in non-invasive, HIPAA-compliant integrations that connect directly to your EMR system, allowing for silent, automated claim audits in the background.
              </p>
              <div className="approach-bullets">
                <div className="ap-bullet">
                  <Lock size={18} className="ap-bullet-icon" />
                  <span>Secure patient billing data under strict HIPAA parameters</span>
                </div>
                <div className="ap-bullet">
                  <FileText size={18} className="ap-bullet-icon" />
                  <span>Daily automated claims checking and scrubs</span>
                </div>
                <div className="ap-bullet">
                  <CheckCircle size={18} className="ap-bullet-icon" />
                  <span>Direct integration with Epic, Athena, eClinicalWorks, and more</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Approach />
      <Timeline />

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
        
        .approach-feature-block {
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--color-border);
        }
        .approach-grid-container {
          align-items: center;
          gap: 60px;
        }
        .approach-block-text {
          text-align: left;
        }
        .approach-block-text h2 {
          font-size: 2.2rem;
          margin-top: 12px;
          margin-bottom: 20px;
        }
        .approach-block-text p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        .approach-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ap-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .ap-bullet-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        
        .approach-block-img-box {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
        }
        .approach-feature-img {
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
          .approach-grid-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .approach-grid-container > :first-child {
            order: 2;
          }
          .approach-block-img-box {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </motion.div>
  );
}
