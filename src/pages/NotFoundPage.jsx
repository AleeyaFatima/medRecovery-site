import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function NotFoundPage({ setCurrentPage }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="not-found-wrapper"
    >
      <div className="container not-found-container">
        <div className="not-found-card card">
          <div className="error-icon-box">
            <ShieldAlert size={48} />
          </div>
          <h1>404 — Resource Relocated</h1>
          <p>
            The medical billing resource or subpath you requested is unavailable or has been archived. Check your URL or navigate back to the main workspace.
          </p>
          <button 
            onClick={() => setCurrentPage && setCurrentPage('home')}
            className="btn btn-primary back-home-btn"
          >
            <ArrowLeft size={16} /> Return to Home
          </button>
        </div>
      </div>

      <style>{`
        .not-found-wrapper {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, rgba(110, 63, 165, 0.08) 0%, transparent 70%);
          padding: 120px 20px 80px 20px;
        }
        .not-found-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .not-found-card {
          max-width: 480px;
          width: 100%;
          background: rgba(15, 12, 28, 0.55);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          box-shadow: var(--shadow-lg);
        }
        .light .not-found-card {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.06);
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }
        .error-icon-box {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          color: #EF4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.1);
        }
        .not-found-card h1 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        .not-found-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 28px;
        }
        .back-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 auto;
          padding: 12px 24px;
          font-weight: 600;
        }
      `}</style>
    </motion.div>
  );
}
