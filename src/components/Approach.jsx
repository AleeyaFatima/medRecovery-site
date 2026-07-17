import React from 'react';
import { Lock, UserCheck, BarChart3, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Approach() {
  const points = [
    {
      title: 'HIPAA-Compliant Workflows',
      desc: 'Top-tier data encryption, strict access logs, and clinical confidentiality safeguards to keep you fully compliant.',
      icon: <Lock size={20} />,
    },
    {
      title: 'Certified Billing Experts',
      desc: 'Our staff maintain active AAPC/AHIMA credentials and keep pace with daily coding guidelines changes.',
      icon: <UserCheck size={20} />,
    },
    {
      title: 'Transparent Portal Reporting',
      desc: 'No black-box invoicing. Real-time updates show exactly where each claim stands and what was recovered.',
      icon: <BarChart3 size={20} />,
    },
    {
      title: 'Accelerated Claims Cycle',
      desc: 'Electronic submissions and immediate scrub checks reduce average A/R cycle duration to under 30 days.',
      icon: <Zap size={20} />,
    },
    {
      title: 'Dedicated Account Liaison',
      desc: 'Get personal answers from a dedicated support rep who knows your specialty and history.',
      icon: <CheckCircle2 size={20} />,
    },
    {
      title: 'Leakage Prevention Audit',
      desc: 'We regularly examine your claim patterns to find coding inefficiencies and prevent recurring denials.',
      icon: <ShieldAlert size={20} />,
    },
  ];

  return (
    <section id="approach" className="approach-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why MedRecovery</span>
          <h2 className="section-title">A Higher Standard of Revenue Management</h2>
          <p className="section-subtitle">
            Most collection agencies use outdated software and heavy-handed letters. We focus on modern automation and experienced expertise to preserve relationships and recover revenue.
          </p>
        </div>

        <div className="grid-3 approach-grid">
          {points.map((point, index) => (
            <div key={index} className="approach-card">
              <div className="approach-icon-box">
                {point.icon}
              </div>
              <div className="approach-content">
                <h3 className="approach-card-title">{point.title}</h3>
                <p className="approach-card-desc">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .approach-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .approach-grid {
          margin-top: 16px;
        }
        .approach-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          border-radius: var(--radius-md);
          background-color: var(--bg-primary);
          border: 1px solid var(--color-border);
          transition: all var(--transition-normal);
          text-align: left;
        }
        .approach-card:hover {
          transform: translateY(-2px);
          border-color: rgba(20, 184, 166, 0.3);
          background-color: var(--bg-surface);
          box-shadow: var(--shadow-md);
        }
        .approach-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: var(--color-primary);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }
        .approach-card:hover .approach-icon-box {
          background-color: var(--color-accent);
        }
        .approach-content {
          display: flex;
          flex-direction: column;
        }
        .approach-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        .approach-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .approach-card {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
