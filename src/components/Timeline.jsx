import React from 'react';
import { Search, UserPlus, Play, Award, ClipboardCheck } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      number: '01',
      title: 'Practice Audit',
      desc: 'We analyze your current outstanding accounts receivable (A/R) and historical claim denials to outline a clear recovery strategy.',
      icon: <Search size={20} />,
    },
    {
      number: '02',
      title: 'Secure EHR Integration',
      desc: 'We map out a smooth connection with your existing Electronic Health Records (EHR) software while preserving patient security.',
      icon: <UserPlus size={20} />,
    },
    {
      number: '03',
      title: 'Accelerated Claims Cycle',
      desc: 'Our billing team scrubs, formats, and transmits daily claims, following up on any unpaid items within 14 business days.',
      icon: <Play size={20} />,
    },
    {
      number: '04',
      title: 'Denial Resolution & Appeals',
      desc: 'We audit rejected claims and submit robust, clinical appeals to recover previously lost resources.',
      icon: <Award size={20} />,
    },
    {
      number: '05',
      title: 'Continuous Revenue Review',
      desc: 'You receive clear performance summaries, ongoing optimization updates, and personal check-ins to track collections progress.',
      icon: <ClipboardCheck size={20} />,
    },
  ];

  return (
    <section className="timeline-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">The Path to Revenue Health</h2>
          <p className="section-subtitle">
            From initial assessment to steady-state optimization, we make onboarding simple and stress-free.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {steps.map((step, idx) => (
            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot">
                <span className="timeline-num">{step.number}</span>
              </div>
              <div className="timeline-card card">
                <div className="timeline-card-header">
                  <div className="timeline-icon-box">{step.icon}</div>
                  <h3 className="timeline-card-title">{step.title}</h3>
                </div>
                <p className="timeline-card-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-section {
          background-color: var(--bg-primary);
          overflow: hidden;
        }
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 60px auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--color-primary), var(--color-accent));
          transform: translateX(-50%);
          opacity: 0.3;
        }
        .timeline-item {
          display: flex;
          justify-content: flex-end;
          position: relative;
          width: 50%;
        }
        .timeline-item.left {
          align-self: flex-start;
          justify-content: flex-start;
          padding-right: 48px;
        }
        .timeline-item.right {
          align-self: flex-end;
          justify-content: flex-end;
          padding-left: 48px;
        }
        
        .timeline-dot {
          position: absolute;
          top: 24px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--bg-surface);
          border: 2px solid var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          box-shadow: var(--shadow-sm);
        }
        .timeline-item.left .timeline-dot {
          right: -18px;
        }
        .timeline-item.right .timeline-dot {
          left: -18px;
        }
        .timeline-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        
        .timeline-card {
          width: 100%;
          padding: 24px;
          text-align: left;
        }
        .timeline-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }
        .timeline-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .timeline-card-title {
          font-size: 1.15rem;
          font-weight: 700;
        }
        .timeline-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Responsive timeline */
        @media (max-width: 768px) {
          .timeline-container {
            align-items: flex-start;
          }
          .timeline-line {
            left: 20px;
          }
          .timeline-item {
            width: 100%;
            align-self: flex-start !important;
            justify-content: flex-start !important;
            padding-left: 54px !important;
            padding-right: 0 !important;
          }
          .timeline-dot {
            left: 2px !important;
            right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
