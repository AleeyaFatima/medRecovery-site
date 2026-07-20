import React, { useState } from 'react';
import { TrendingUp, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function RevenueCompare() {
  const [state, setState] = useState('optimized'); // 'baseline' or 'optimized'

  const metrics = [
    {
      title: 'First-Pass Clean Claim Rate',
      icon: <TrendingUp size={20} />,
      baselineVal: '78.5%',
      baselinePct: 78.5,
      optimizedVal: '99.2%',
      optimizedPct: 99.2,
      desc: 'Clean submittals limit immediate administrative rejections and payment delays.',
      baselineColor: '#F59E0B',
      optimizedColor: '#10B981'
    },
    {
      title: 'Average Days in A/R',
      icon: <Clock size={20} />,
      baselineVal: '44.8 Days',
      baselinePct: 90, // Scale for bar display (lower is better, so baseline is long)
      optimizedVal: '12.4 Days',
      optimizedPct: 25,
      desc: 'Average duration before clinical accounts are settled by insurance payers.',
      baselineColor: '#EF4444',
      optimizedColor: '#10B981'
    },
    {
      title: 'Claim Denial Appeal Success',
      icon: <AlertTriangle size={20} />,
      baselineVal: '62.0%',
      baselinePct: 62,
      optimizedVal: '98.4%',
      optimizedPct: 98.4,
      desc: 'Payer rejections audited, corrected, and successfully resubmitted within 72 hours.',
      baselineColor: '#F59E0B',
      optimizedColor: '#10B981'
    }
  ];

  return (
    <div className="compare-card card">
      <div className="compare-header">
        <span className="section-tag">Performance Comparison</span>
        <h3>Operational Transformation</h3>
        <p className="compare-desc-text">
          Compare standard in-house practice metrics against MedRecovery's RCM performance.
        </p>

        {/* Custom Toggle Switch */}
        <div className="toggle-switch-container">
          <button 
            onClick={() => setState('baseline')}
            className={`toggle-btn ${state === 'baseline' ? 'active baseline-active' : ''}`}
          >
            In-House Baseline
          </button>
          <button 
            onClick={() => setState('optimized')}
            className={`toggle-btn ${state === 'optimized' ? 'active optimized-active' : ''}`}
          >
            MedRecovery Optimized
          </button>
        </div>
      </div>

      <div className="compare-body">
        <div className="metrics-compare-list">
          {metrics.map((metric, idx) => {
            const isOptimized = state === 'optimized';
            const value = isOptimized ? metric.optimizedVal : metric.baselineVal;
            const pct = isOptimized ? metric.optimizedPct : metric.baselinePct;
            const color = isOptimized ? metric.optimizedColor : metric.baselineColor;

            return (
              <div key={idx} className="compare-row-item">
                <div className="metric-meta">
                  <div className="metric-icon-title">
                    <span className="metric-icon" style={{ color: color }}>{metric.icon}</span>
                    <h4>{metric.title}</h4>
                  </div>
                  <span className="metric-value-label" style={{ color: color }}>{value}</span>
                </div>

                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill" 
                    style={{ 
                      width: `${pct}%`,
                      background: color,
                      boxShadow: `0 0 10px ${color}33`
                    }}
                  />
                </div>
                <p className="compare-row-desc">{metric.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .compare-card {
          width: 100%;
          background: rgba(15, 12, 28, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          box-shadow: var(--shadow-lg);
          text-align: left;
        }
        .light .compare-card {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.06);
        }
        
        .compare-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 28px;
        }
        .compare-header h3 {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 750;
          color: var(--text-primary);
          margin: 8px 0;
        }
        .compare-desc-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        
        .toggle-switch-container {
          display: flex;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4px;
          border-radius: 100px;
          width: 100%;
          max-width: 400px;
        }
        .light .toggle-switch-container {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.04);
        }
        .toggle-btn {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          padding: 10px 16px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .toggle-btn.active.baseline-active {
          background: #EF4444;
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }
        .toggle-btn.active.optimized-active {
          background: #10B981;
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .compare-body {
          width: 100%;
        }
        .metrics-compare-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .compare-row-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 20px;
        }
        .compare-row-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .light .compare-row-item {
          border-color: rgba(0, 0, 0, 0.04);
        }
        .metric-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .metric-icon-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .metric-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s ease;
        }
        .metric-icon-title h4 {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }
        .metric-value-label {
          font-size: 1.15rem;
          font-weight: 800;
          font-family: var(--font-sans);
          transition: color 0.3s ease;
        }
        
        .progress-bar-container {
          width: 100%;
          height: 10px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 5px;
          overflow: hidden;
        }
        .light .progress-bar-container {
          background: rgba(0, 0, 0, 0.05);
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 5px;
          transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s ease;
        }
        .compare-row-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
