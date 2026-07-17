import React from 'react';
import Services from '../components/Services';
import Stats from '../components/Stats';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function ServicesPage() {
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
          <h1 className="page-title">Professional Medical RCM Solutions</h1>
          <p className="page-desc">
            Maximize clinic efficiency and clean-claim rates with dedicated certified billers and transparent reporting tools.
          </p>
        </div>
      </div>
      
      <Services />
      <Stats />

      <style>{`
        .page-header {
          padding-top: 130px;
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
      `}</style>
    </motion.div>
  );
}
