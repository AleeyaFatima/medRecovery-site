import React from 'react';
import { Award, ShieldCheck, Globe, TrendingUp, CheckSquare } from 'lucide-react';

export default function TrustStrip() {
  const stats = [
    {
      title: '20+ Years',
      subtitle: 'Of Experience',
      icon: <Award size={24} />,
      desc: 'Expertise in complex medical collections.'
    },
    {
      title: 'HIPAA Compliant',
      subtitle: 'Secure Systems',
      icon: <ShieldCheck size={24} />,
      desc: 'Ensuring strict provider & patient confidentiality.'
    },
    {
      title: 'Nationwide Service',
      subtitle: 'Serving Providers',
      icon: <Globe size={24} />,
      desc: 'Supporting clinics in all 50 states.'
    },
    {
      title: 'RCM Experts',
      subtitle: 'Revenue Specialists',
      icon: <TrendingUp size={24} />,
      desc: 'Optimizing claim lifecycle management.'
    },
    {
      title: 'Thousands of Claims',
      subtitle: 'Successfully Managed',
      icon: <CheckSquare size={24} />,
      desc: 'Substantial recoveries returned directly.'
    }
  ];

  return (
    <section className="trust-strip-section">
      <div className="container">
        <div className="trust-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="trust-card card">
              <div className="trust-icon-box">{stat.icon}</div>
              <div className="trust-text-box">
                <h3 className="trust-title">{stat.title}</h3>
                <span className="trust-subtitle">{stat.subtitle}</span>
                <p className="trust-desc">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-strip-section {
          padding: 40px 0 60px 0;
          background-color: transparent;
          position: relative;
          z-index: 10;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 20px;
        }
        .trust-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding: 24px;
          border-radius: var(--radius-md);
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: all var(--transition-normal);
        }
        .dark .trust-card {
          background-color: rgba(18, 14, 34, 0.6) !important;
          border: 1px solid rgba(167, 139, 250, 0.1) !important;
        }
        .trust-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent) !important;
          box-shadow: 0 15px 35px rgba(110, 63, 165, 0.08);
        }
        .dark .trust-card:hover {
          box-shadow: 0 15px 35px rgba(167, 139, 250, 0.1) !important;
          border-color: var(--color-accent) !important;
        }
        .trust-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: all var(--transition-fast);
        }
        .trust-card:hover .trust-icon-box {
          background-color: var(--color-primary);
          color: #FFFFFF;
          transform: scale(1.1);
        }
        .trust-text-box {
          display: flex;
          flex-direction: column;
        }
        .trust-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .trust-subtitle {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.03em;
          margin-bottom: 8px;
        }
        .trust-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        @media (max-width: 1200px) {
          .trust-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
