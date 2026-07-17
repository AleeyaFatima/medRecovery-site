import React from 'react';

export default function Stats() {
  const statsList = [
    { value: '10+', label: 'Years of Experience', desc: 'Serving independent practices.' },
    { value: '98.7%', label: 'Clean Claim Rate', desc: 'Industry average is roughly 80%.' },
    { value: '$14.2M+', label: 'Revenue Recovered', desc: 'Directly returned to physicians.' },
    { value: '250+', label: 'Providers Supported', desc: 'Across medical specialties.' },
  ];

  return (
    <section className="stats-section section section-dark">
      <div className="container stats-container">
        <div className="stats-header">
          <span className="stats-tag">Our Impact</span>
          <h2 className="stats-title">Performance That Speaks For Itself</h2>
          <p className="stats-subtitle">
            Helping medical groups run sustainably. Our metrics show the difference active billing oversight makes.
          </p>
        </div>

        <div className="grid-4 stats-grid">
          {statsList.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-desc">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          background-color: var(--color-dark-section);
          position: relative;
          overflow: hidden;
        }
        .stats-section::after {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 60%);
          bottom: -20%;
          right: -10%;
          pointer-events: none;
        }
        .stats-container {
          position: relative;
          z-index: 2;
        }
        .stats-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 56px auto;
        }
        .stats-tag {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: inline-block;
          margin-bottom: 12px;
        }
        .stats-title {
          margin-bottom: 16px;
        }
        .stats-subtitle {
          opacity: 0.85;
          font-size: 1.05rem;
        }
        .stats-grid {
          margin-top: 16px;
        }
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px;
          border-radius: var(--radius-md);
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all var(--transition-normal);
        }
        .stat-card:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }
        .stat-value {
          font-family: var(--font-mono);
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 4px;
        }
        .stat-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </section>
  );
}
