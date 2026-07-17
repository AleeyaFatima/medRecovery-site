import React from 'react';
import { Award, CheckCircle, Globe } from 'lucide-react';

export default function TrustStrip() {
  const credentials = [
    { name: 'MGMA Member', type: 'Association' },
    { name: 'AMBA Certified', type: 'Billing Code' },
    { name: 'Experian Partner', type: 'Credit Bureau' },
    { name: 'Equifax Member', type: 'Credit Bureau' },
    { name: 'Transworld', type: 'Systems' },
  ];

  return (
    <div className="trust-strip">
      <div className="container strip-container">
        <div className="strip-label">
          <Award size={18} className="label-icon" />
          <span>Industry Accreditations</span>
        </div>
        <div className="strip-divider"></div>
        <div className="strip-logos">
          {credentials.map((cred, idx) => (
            <div key={idx} className="trust-badge">
              <span className="badge-name">{cred.name}</span>
              <span className="badge-type">{cred.type}</span>
            </div>
          ))}
        </div>
        <div className="strip-divider"></div>
        <div className="strip-licensing">
          <Globe size={16} className="license-icon" />
          <span>Licensed in all 50 States</span>
        </div>
      </div>

      <style>{`
        .trust-strip {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 24px 0;
          position: relative;
          z-index: 10;
        }
        .strip-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .strip-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .label-icon {
          color: var(--color-primary);
        }
        .strip-divider {
          width: 1px;
          height: 24px;
          background-color: var(--color-border);
        }
        .strip-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-grow: 1;
          flex-wrap: wrap;
        }
        .trust-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4px 12px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-primary);
          border: 1px solid var(--color-border);
          min-width: 120px;
          transition: all var(--transition-fast);
        }
        .trust-badge:hover {
          border-color: var(--color-accent);
          transform: translateY(-1px);
        }
        .badge-name {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .badge-type {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .strip-licensing {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-accent);
          font-weight: 700;
          font-size: 0.85rem;
          background-color: var(--color-accent-bg);
          padding: 6px 14px;
          border-radius: 50px;
          border: 1px solid rgba(20, 184, 166, 0.15);
        }
        .license-icon {
          stroke-width: 2.5;
        }

        @media (max-width: 1024px) {
          .strip-divider {
            display: none;
          }
          .strip-container {
            justify-content: center;
          }
          .strip-logos {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
