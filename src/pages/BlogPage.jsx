import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Certified Coding', 'Revenue Cycle', 'Denial Management', 'Security & HIPAA'];

  const articles = [
    {
      id: 1,
      title: 'Mastering ICD-10-CM Coding for Orthopedic Claims',
      summary: 'Learn key coding combinations, modifier configurations (e.g. modifier 25 and 59), and clinical documentation improvements that prevent immediate orthopedics claim rejections.',
      category: 'Certified Coding',
      date: 'June 15, 2026',
      author: 'Diana Ward, CPC',
      readTime: '6 min read',
      content: `Payer criteria for orthopedic procedures have become increasingly stringent. Major insurers frequently reject claims citing missing specificity or incorrect modifiers. 
      To ensure clean orthopedics collections, practices must focus on:
      1. Specificity in Site Laterality: Always document the specific digit, limb segment, or joint side (e.g. left vs right).
      2. Precise Modifier 25 Usage: Only append modifier 25 when a separate, identifiable evaluation and management (E&M) service is rendered on the same day as a procedure.
      3. Medical Necessity Documentation: Clearly link diagnosis codes to procedures performed. For example, joint injection claims must include advanced diagnostic proof of severe osteoarthritis (such as Kellgren-Lawrence grading).`
    },
    {
      id: 2,
      title: 'Operational Strategies to Lower Average Days in A/R Below 15',
      summary: 'Long collection cycles drain clinic liquidity. Discover baseline workflows to optimize electronic claim scrubbing, eligibility checks, and persistent payer follow-up.',
      category: 'Revenue Cycle',
      date: 'July 2, 2026',
      author: 'James Carter',
      readTime: '8 min read',
      content: `Average Days in Accounts Receivable (A/R) represents the health of your cash flow. If your A/R days exceed 35, your billing department is likely leaking revenue.
      Here are three concrete steps to drive A/R days below 15:
      1. Immediate Eligibility Verification: Run automated checks 48 hours prior to patient appointments. Discover coordinate coverage gaps before services are rendered.
      2. Daily Claim Submission: Never batch claims weekly. Claims should be checked, scrubbed for errors, and electronically submitted to the clearinghouse daily.
      3. Proactive Payer Follow-Up: Don't wait 30 days for payment. Set automated alerts to trace submitted claims at day 12. If a claim is stuck or denied, resolve it immediately.`
    },
    {
      id: 3,
      title: 'Navigating HIPAA Security Audits During EHR Migrations',
      summary: 'Transitioning to an Epic or Athenahealth portal introduces severe compliance risks. Review baseline administrative safeguards and encryption audits required under HIPAA.',
      category: 'Security & HIPAA',
      date: 'July 12, 2026',
      author: 'Diana Ward, CPC',
      readTime: '7 min read',
      content: `Migrating patient records to a new EMR/EHR system is a high-risk security operation. During database syncs, patient records (PHI) can be exposed or misrouted.
      To ensure HIPAA compliance during migrations:
      1. Execute Business Associate Agreements (BAA): Ensure the migration consultants and EMR platform sign BAAs before sharing credentials.
      2. Secure Data in Transit: Use TLS/SSL secure tunnels for data extraction and load operations.
      3. Unique Login Tracking: Monitor activity logs to confirm only authorized compliance administrators have access to database dumps. Keep full audit trail trails.`
    },
    {
      id: 4,
      title: 'Reducing Claim Denials: Payer Appeal Protocols',
      summary: 'clinical billing teams often lose cash simply by neglecting denied claims. Establish robust appeal workflows with payer-specific documentation logs to recover every dollar.',
      category: 'Denial Management',
      date: 'July 18, 2026',
      author: 'Sarah Martinez',
      readTime: '5 min read',
      content: `Payer denials are a primary source of practice revenue leakage. Alarmingly, up to 60% of claim denials are never appealed by in-house billing staffs due to administrative fatigue.
      To combat denials, implement a structured appeal workflow:
      1. Categorize Denials Instantly: Group rejections by category (e.g., registration errors, coding mismatch, prior auth missing).
      2. Use Payer Appeal Forms: Insurers frequently reject generic appeal letters. Always submit the official payer appeal template.
      3. Track Timelines: Payers enforce strict appeal windows (often 60 to 90 days). Log all submission dates to defend against timeliness exclusions.`
    }
  ];

  // Search & Category Filtering Logic
  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-content"
    >
      {/* Header */}
      <div className="page-header section-dark">
        <div className="container">
          <span className="section-tag">RCM Insights</span>
          <h1 className="page-title">Healthcare Billing & RCM Blog</h1>
          <p className="page-desc">
            Expert insights, certified coding recommendations, HIPAA security updates, and operational strategies to maximize clinic revenue.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <section className="section blog-controls-section">
        <div className="container">
          <div className="controls-row-wrapper">
            {/* Search Input */}
            <div className="search-input-box">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search billing insights..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="blog-search-input"
              />
            </div>
            
            {/* Category Filter Tags */}
            <div className="category-tags-row">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cat-tag-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="section articles-grid-section">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <div className="grid-2 blog-grid">
              {filteredArticles.map(art => (
                <div key={art.id} className="blog-card card">
                  <div className="blog-card-meta">
                    <span className="blog-card-cat">{art.category}</span>
                    <span className="blog-card-time">{art.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{art.title}</h3>
                  <p className="blog-card-summary">{art.summary}</p>
                  
                  <div className="blog-card-footer">
                    <div className="author-meta">
                      <span className="author-name">{art.author}</span>
                      <span className="pub-date">{art.date}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedArticle(art)}
                      className="read-more-btn"
                    >
                      Read Article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results-card">
              <p>No billing articles match your search parameters. Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="modal-backdrop" onClick={() => setSelectedArticle(null)}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="article-modal-card card" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="modal-tag">{selectedArticle.category}</span>
                  <h2 className="modal-article-title">{selectedArticle.title}</h2>
                  <div className="modal-author-row">
                    <span>By <strong>{selectedArticle.author}</strong></span>
                    <span className="divider">•</span>
                    <span>{selectedArticle.date}</span>
                    <span className="divider">•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <button onClick={() => setSelectedArticle(null)} className="close-modal-btn">
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body-content">
                {selectedArticle.content.split('\n').map((para, idx) => (
                  <p key={idx}>{para.trim()}</p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
          max-width: 700px;
          margin: 0 auto;
        }

        .blog-controls-section {
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--color-border);
          padding: 24px 0;
        }
        .controls-row-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .search-input-box {
          position: relative;
          flex: 1;
          max-width: 320px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .blog-search-input {
          width: 100%;
          padding: 12px 16px 12px 42px;
          border-radius: 30px;
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          outline: none;
          font-size: 0.85rem;
        }
        .light .blog-search-input {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(0, 0, 0, 0.1);
        }
        
        .category-tags-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .cat-tag-btn {
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cat-tag-btn:hover {
          border-color: var(--color-accent);
          color: var(--text-primary);
        }
        .cat-tag-btn.active {
          background-color: var(--color-accent);
          border-color: var(--color-accent);
          color: #FFFFFF;
        }

        .articles-grid-section {
          background-color: var(--bg-primary);
        }
        .blog-grid {
          gap: 30px;
        }
        .blog-card {
          padding: 28px;
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all var(--transition-normal);
        }
        .blog-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
        }
        .blog-card-meta {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 12px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .blog-card-cat {
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .blog-card-time {
          color: var(--text-muted);
        }
        .blog-card-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 750;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 10px;
        }
        .blog-card-summary {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
          flex: 1;
        }
        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 16px;
        }
        .light .blog-card-footer {
          border-color: rgba(0, 0, 0, 0.04);
        }
        .author-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .author-name {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .pub-date {
          font-size: 0.68rem;
          color: var(--text-muted);
        }
        .read-more-btn {
          background: transparent;
          border: none;
          color: var(--color-accent);
          font-weight: 600;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .read-more-btn:hover {
          text-decoration: underline;
        }

        .no-results-card {
          padding: 40px;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          color: var(--text-muted);
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 20px;
        }
        .article-modal-card {
          max-width: 680px;
          width: 100%;
          max-height: 80vh;
          background: rgba(15, 12, 28, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          text-align: left;
          box-shadow: var(--shadow-lg);
        }
        .light .article-modal-card {
          background: #FFFFFF;
          border-color: rgba(0,0,0,0.06);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        .light .modal-header {
          border-color: rgba(0,0,0,0.05);
        }
        .modal-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .modal-article-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-top: 4px;
          margin-bottom: 8px;
        }
        .modal-author-row {
          display: flex;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .divider {
          color: var(--text-muted);
        }
        .close-modal-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .close-modal-btn:hover {
          color: #EF4444;
        }
        .modal-body-content {
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .modal-body-content p {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </motion.div>
  );
}
