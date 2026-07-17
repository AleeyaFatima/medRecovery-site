import React from 'react';
import { Stethoscope, Building2, Brain, Activity, Heart, Shield, Layers } from 'lucide-react';

export default function Industries() {
  const sectors = [
    { name: 'Private Clinics', icon: <Stethoscope size={18} /> },
    { name: 'Hospitals & Systems', icon: <Building2 size={18} /> },
    { name: 'Dental Practices', icon: <Layers size={18} /> },
    { name: 'Behavioral Health', icon: <Brain size={18} /> },
    { name: 'Urgent Care Centers', icon: <Activity size={18} /> },
    { name: 'Medical Specialists', icon: <Heart size={18} /> },
    { name: 'Ambulatory Surgery', icon: <Shield size={18} /> },
  ];

  return (
    <section className="industries-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sectors We Serve</span>
          <h2 className="section-title">Tailored for Every Specialty</h2>
          <p className="section-subtitle">
            Revenue cycle management is not one-size-fits-all. We adapt our coding and collection strategies to your specific medical sector.
          </p>
        </div>

        <div className="industries-chips-container scrollbar-hide">
          <div className="chips-wrapper">
            {sectors.map((sector, idx) => (
              <div key={idx} className="industry-chip">
                <span className="chip-icon">{sector.icon}</span>
                <span className="chip-name">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .industries-section {
          background-color: var(--bg-primary);
          overflow: hidden;
          padding-bottom: clamp(60px, 8vw, 100px);
        }
        .industries-chips-container {
          margin-top: 40px;
          width: 100%;
          overflow-x: auto;
          padding: 10px 0;
          display: flex;
          justify-content: center;
        }
        .chips-wrapper {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 900px;
        }
        .industry-chip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          padding: 12px 20px;
          border-radius: 50px;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
          cursor: default;
        }
        .industry-chip:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md), 0 0 10px rgba(20, 184, 166, 0.1);
        }
        .chip-icon {
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .chip-name {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .industries-chips-container {
            justify-content: flex-start;
            padding-left: 20px;
            padding-right: 20px;
          }
          .chips-wrapper {
            flex-wrap: nowrap;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
