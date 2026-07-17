import React from 'react';
import { ShieldCheck, TrendingUp, DollarSign, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header id="home" className="hero-section section">
      {/* Glow Effect */}
      <div className="glow-bubble top-left"></div>
      <div className="glow-bubble bottom-right"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">
              <ShieldCheck size={14} className="badge-icon" /> Established Revenue Recovery
            </span>
          </div>
          
          <h1 className="hero-title">
            Helping Healthcare Providers <span className="text-gradient">Recover Revenue</span> Faster
          </h1>
          
          <p className="hero-subtitle">
            Ensuring physicians get paid for the care they give. We combine industry-leading expert billers with modern transparency workflows to optimize your revenue cycle.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              Schedule Consultation <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary">
              See Services
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feat-item">
              <span className="feat-highlight">98.7%</span>
              <span className="feat-label">Clean Claim Rate</span>
            </div>
            <div className="hero-feat-divider"></div>
            <div className="hero-feat-item">
              <span className="feat-highlight">10+</span>
              <span className="feat-label">Years of Trust</span>
            </div>
            <div className="hero-feat-divider"></div>
            <div className="hero-feat-item">
              <span className="feat-highlight">50</span>
              <span className="feat-label">States Covered</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-mockup">
            {/* Dashboard header */}
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="mockup-title">MedRecovery Portal — Analytics</span>
            </div>

            {/* Mockup Dashboard Content */}
            <div className="mockup-body">
              {/* Primary Chart Visualization */}
              <div className="mockup-chart-container">
                <div className="chart-header">
                  <span className="chart-title">Revenue Recovered (Monthly Trend)</span>
                  <span className="chart-legend">
                    <span className="legend-dot current"></span> Recovered
                  </span>
                </div>
                <div className="svg-chart">
                  {/* Decorative chart SVG */}
                  <svg viewBox="0 0 400 150" className="chart-svg">
                    <defs>
                      <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,130 C40,110 80,120 120,80 C160,40 200,90 240,50 C280,10 320,30 360,10 L400,10 L400,150 L0,150 Z" 
                      fill="url(#chart-grad)"
                    />
                    <path 
                      d="M0,130 C40,110 80,120 120,80 C160,40 200,90 240,50 C280,10 320,30 360,10" 
                      fill="none" 
                      stroke="var(--color-primary)" 
                      strokeWidth="3"
                    />
                    <circle cx="120" cy="80" r="5" fill="var(--color-accent)" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="240" cy="50" r="5" fill="var(--color-accent)" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="360" cy="10" r="5" fill="var(--color-accent)" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Float Card 1: Clean Claim */}
              <div className="floating-card c1 animate-float">
                <div className="float-card-icon c-blue">
                  <ShieldCheck size={18} />
                </div>
                <div className="float-card-details">
                  <span className="float-card-label">Clean Claims</span>
                  <span className="float-card-value">98.7%</span>
                </div>
              </div>

              {/* Float Card 2: Revenue Recovery Trend */}
              <div className="floating-card c2 animate-float-delayed">
                <div className="float-card-icon c-green">
                  <TrendingUp size={18} />
                </div>
                <div className="float-card-details">
                  <span className="float-card-label">Collections Rate</span>
                  <span className="float-card-value">+23.4%</span>
                </div>
              </div>

              {/* Float Card 3: Recovered Dollars */}
              <div className="floating-card c3 animate-float">
                <div className="float-card-icon c-teal">
                  <DollarSign size={18} />
                </div>
                <div className="float-card-details">
                  <span className="float-card-label">Total Recovered</span>
                  <span className="float-card-value">$14.2M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 140px;
          min-height: 95vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 10% 20%, rgba(20, 184, 166, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 90% 80%, rgba(11, 79, 159, 0.03) 0%, transparent 50%);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .badge-wrapper {
          margin-bottom: 24px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          font-weight: 600;
          font-size: 0.85rem;
          padding: 6px 12px;
          border-radius: 50px;
          border: 1px solid rgba(20, 184, 166, 0.2);
        }
        .hero-title {
          font-size: clamp(2.5rem, 4.5vw, 3.75rem);
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 36px;
          max-width: 580px;
        }
        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          width: 100%;
        }
        
        .hero-features {
          display: flex;
          align-items: center;
          gap: 24px;
          width: 100%;
        }
        .hero-feat-item {
          display: flex;
          flex-direction: column;
        }
        .feat-highlight {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .feat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .hero-feat-divider {
          width: 1px;
          height: 32px;
          background-color: var(--color-border);
        }

        .hero-visual {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        /* Dashboard Mockup styling */
        .dashboard-mockup {
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          width: 100%;
          max-width: 500px;
          aspect-ratio: 4/3;
          box-shadow: var(--shadow-lg);
          overflow: visible;
          position: relative;
          z-index: 10;
        }
        .mockup-header {
          height: 40px;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          padding: 0 16px;
          gap: 12px;
          background-color: var(--bg-surface-hover);
          border-top-left-radius: var(--radius-md);
          border-top-right-radius: var(--radius-md);
        }
        .mockup-dots {
          display: flex;
          gap: 6px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot.red { background-color: #EF4444; }
        .dot.yellow { background-color: #F59E0B; }
        .dot.green { background-color: #10B981; }
        
        .mockup-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mockup-body {
          padding: 20px;
          height: calc(100% - 40px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }
        .mockup-chart-container {
          background-color: var(--bg-surface-hover);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 16px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .chart-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .chart-title {
          color: var(--text-primary);
        }
        .chart-legend {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
        }
        .legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .legend-dot.current {
          background-color: var(--color-primary);
        }
        
        .svg-chart {
          width: 100%;
          margin-top: auto;
        }
        .chart-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        /* Floating Dashboard Elements */
        .floating-card {
          position: absolute;
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 12px;
          width: 170px;
          transition: all var(--transition-normal);
          z-index: 12;
        }
        .floating-card:hover {
          box-shadow: var(--shadow-lg), 0 0 15px rgba(20, 184, 166, 0.15);
          border-color: var(--color-accent);
        }
        
        .floating-card.c1 {
          top: -20px;
          left: -40px;
        }
        .floating-card.c2 {
          bottom: 30px;
          right: -40px;
        }
        .floating-card.c3 {
          bottom: -20px;
          left: 30px;
        }
        
        .float-card-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .float-card-icon.c-blue {
          background-color: rgba(11, 79, 159, 0.1);
          color: var(--color-primary);
        }
        .float-card-icon.c-green {
          background-color: rgba(34, 197, 94, 0.1);
          color: #22C55E;
        }
        .float-card-icon.c-teal {
          background-color: rgba(20, 184, 166, 0.1);
          color: var(--color-accent);
        }
        .float-card-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .float-card-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .float-card-value {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Glow effects background */
        .glow-bubble {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--color-glow) 0%, transparent 70%);
          opacity: 0.05;
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }
        .glow-bubble.top-left {
          top: 10%;
          left: 5%;
        }
        .glow-bubble.bottom-right {
          bottom: 10%;
          right: 5%;
        }

        /* Responsiveness */
        @media (max-width: 900px) {
          .hero-section {
            padding-top: 100px;
            text-align: center;
          }
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-features {
            justify-content: center;
          }
          .dashboard-mockup {
            margin-left: auto;
            margin-right: auto;
          }
          .floating-card.c1 {
            left: -20px;
          }
          .floating-card.c2 {
            right: -20px;
          }
        }
        @media (max-width: 480px) {
          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }
          .hero-ctas .btn {
            width: 100%;
          }
          .hero-features {
            flex-direction: column;
            gap: 16px;
          }
          .hero-feat-divider {
            display: none;
          }
          .floating-card {
            width: 140px;
            padding: 8px 12px;
            gap: 8px;
          }
          .floating-card.c1 {
            left: -10px;
          }
          .floating-card.c2 {
            right: -10px;
          }
        }
      `}</style>
    </header>
  );
}
