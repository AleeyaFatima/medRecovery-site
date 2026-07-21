import React, { useState, useEffect } from 'react';

export default function ThreeDAnimation() {
  const [activeTab, setActiveTab] = useState('revenue');
  const [count, setCount] = useState({ reclaimed: 0, ar: 45, success: 85 });

  // Smooth counting animation on mount
  useEffect(() => {
    const duration = 1500;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount({
        reclaimed: Math.floor((824900 / steps) * currentStep),
        ar: (45 - ((45 - 12.4) / steps) * currentStep).toFixed(1),
        success: (85 + ((99.2 - 85) / steps) * currentStep).toFixed(1),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount({ reclaimed: 824900, ar: 12.4, success: 99.2 });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard-scene">
      {/* Dynamic Glow Backdrops */}
      <div className="glow-sphere glow-purple" />
      <div className="glow-sphere glow-gold" />

      {/* Main Glass Dashboard Card */}
      <div className="dashboard-card">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-left">
            <span className="live-dot" />
            <span className="header-title">Revenue Cycle Intelligence</span>
          </div>
          <div className="header-tabs">
            <button 
              className={`tab-btn ${activeTab === 'revenue' ? 'active' : ''}`}
              onClick={() => setActiveTab('revenue')}
            >
              Revenue
            </button>
            <button 
              className={`tab-btn ${activeTab === 'claims' ? 'active' : ''}`}
              onClick={() => setActiveTab('claims')}
            >
              Claims
            </button>
          </div>
        </div>

        {/* Chart View */}
        <div className="chart-container">
          {activeTab === 'revenue' ? (
            <svg viewBox="0 0 500 200" className="chart-svg">
              <defs>
                <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C084FC" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="50" x2="500" y2="50" stroke="var(--grid-color)" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="500" y2="100" stroke="var(--grid-color)" strokeDasharray="4 4" />
              <line x1="0" y1="150" x2="500" y2="150" stroke="var(--grid-color)" strokeDasharray="4 4" />

              {/* Area Under Curve */}
              <path 
                d="M 0 200 L 0 150 Q 100 120 180 80 T 350 90 T 500 30 L 500 200 Z" 
                fill="url(#chart-glow)" 
                className="area-path"
              />

              {/* Glowing Line */}
              <path 
                d="M 0 150 Q 100 120 180 80 T 350 90 T 500 30" 
                fill="none" 
                stroke="url(#line-grad)" 
                strokeWidth="4.5" 
                className="line-path"
              />

              {/* Chart Nodes / Dots */}
              <g className="chart-node" style={{ transform: 'translate(180px, 80px)' }}>
                <circle r="8" fill="rgba(236, 72, 153, 0.4)" className="node-ping" />
                <circle r="4.5" fill="#EC4899" stroke="#FFF" strokeWidth="1.5" />
              </g>
              <g className="chart-node" style={{ transform: 'translate(500px, 30px)' }}>
                <circle r="8" fill="rgba(251, 191, 36, 0.4)" className="node-ping" />
                <circle r="4.5" fill="#FBBF24" stroke="#FFF" strokeWidth="1.5" />
              </g>
            </svg>
          ) : (
            <div className="claims-bar-view">
              <div className="bar-row">
                <span className="row-label">Claims Submitted</span>
                <div className="row-progress-container">
                  <div className="row-progress-bar bar-submitted" />
                </div>
                <span className="row-val">100%</span>
              </div>
              <div className="bar-row">
                <span className="row-label">Clean Claim Rate</span>
                <div className="row-progress-container">
                  <div className="row-progress-bar bar-clean" />
                </div>
                <span className="row-val">99.2%</span>
              </div>
              <div className="bar-row">
                <span className="row-label">Paid (First Pass)</span>
                <div className="row-progress-container">
                  <div className="row-progress-bar bar-paid" />
                </div>
                <span className="row-val">97.8%</span>
              </div>
            </div>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-box">
            <span className="metric-label">Reclaimed Revenue</span>
            <span className="metric-val text-gold">${count.reclaimed.toLocaleString()}</span>
            <span className="metric-trend trend-up">↑ 28.4% growth</span>
          </div>
          <div className="metric-box">
            <span className="metric-label">Average A/R Days</span>
            <span className="metric-val text-purple">{count.ar} Days</span>
            <span className="metric-trend trend-down">↓ 42% decrease</span>
          </div>
          <div className="metric-box">
            <span className="metric-label">Clean Claim Success</span>
            <span className="metric-val text-indigo">{count.success}%</span>
            <span className="metric-trend trend-up">↑ Industry leading</span>
          </div>
        </div>
      </div>

      {/* Floating Glass Badges (Parallax Depth) */}
      <div className="floating-badge badge-top-right">
        <div className="badge-icon">✓</div>
        <div className="badge-content">
          <span className="badge-title">Claim Approved</span>
          <span className="badge-subtitle">+$12,450.00 Reclaimed</span>
        </div>
      </div>

      <div className="floating-badge badge-bottom-left">
        <div className="badge-icon-trend">📈</div>
        <div className="badge-content">
          <span className="badge-title">Practice Income</span>
          <span className="badge-subtitle">+35.2% AR Aging Recovery</span>
        </div>
      </div>

      <style>{`
        .dashboard-scene {
          position: relative;
          width: 100%;
          max-width: 540px;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          margin: 0 auto;
        }
        
        /* Ambient Glow Spheres */
        .glow-sphere {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.18;
          z-index: 1;
          pointer-events: none;
          animation: floatGlow 8s ease-in-out infinite alternate;
        }
        .glow-purple {
          background: #C084FC;
          top: 10%;
          left: 10%;
        }
        .glow-gold {
          background: #FBBF24;
          bottom: 10%;
          right: 10%;
          animation-delay: -4s;
        }
        
        @keyframes floatGlow {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-20px) scale(1.1); }
        }

        /* Glass Dashboard Card */
        .dashboard-card {
          position: relative;
          z-index: 5;
          width: 100%;
          background: rgba(10, 7, 20, 0.45);
          backdrop-filter: blur(25px) saturate(140%);
          -webkit-backdrop-filter: blur(25px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s ease, border-color 0.3s ease;
        }
        .dashboard-card:hover {
          transform: rotateX(4deg) rotateY(-4deg) translateY(-4px) scale(1.01);
          background: rgba(10, 7, 20, 0.6);
          border-color: rgba(192, 132, 252, 0.2);
        }
        
        .light .dashboard-card {
          background: rgba(255, 255, 255, 0.82);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        .light .dashboard-card:hover {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(110, 63, 165, 0.15);
        }

        /* Header */
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--grid-color);
          padding-bottom: 12px;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .live-dot {
          width: 8px;
          height: 8px;
          background-color: #10B981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10B981;
          animation: pulseDot 2s infinite;
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
        }
        .header-title {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-primary);
          letter-spacing: 0.3px;
        }
        
        .header-tabs {
          display: flex;
          gap: 4px;
          background: rgba(0, 0, 0, 0.3);
          padding: 3px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .light .header-tabs {
          background: rgba(0, 0, 0, 0.06);
          border-color: rgba(0, 0, 0, 0.02);
        }
        .tab-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .tab-btn.active {
          background: var(--bg-primary);
          color: var(--color-primary);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .light .tab-btn.active {
          background: #FFFFFF;
          color: var(--color-primary);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        /* Chart */
        .chart-container {
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .chart-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        
        .line-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .area-path {
          opacity: 0;
          animation: fadeInArea 2s ease 1.2s forwards;
        }
        
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeInArea {
          to { opacity: 1; }
        }
        
        .node-ping {
          animation: pingNode 2.5s infinite;
          transform-origin: center;
        }
        @keyframes pingNode {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* Claims Bar View */
        .claims-bar-view {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .bar-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
          font-family: var(--font-sans);
        }
        .row-label {
          width: 110px;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .row-progress-container {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          margin: 0 12px;
          overflow: hidden;
        }
        .light .row-progress-container {
          background: rgba(0, 0, 0, 0.05);
        }
        .row-progress-bar {
          height: 100%;
          border-radius: 4px;
          width: 0%;
        }
        .bar-submitted {
          background: linear-gradient(90deg, #6366F1, #818CF8);
          animation: loadProgress1 1s ease forwards;
        }
        .bar-clean {
          background: linear-gradient(90deg, #EC4899, #F472B6);
          animation: loadProgress2 1.2s ease forwards;
        }
        .bar-paid {
          background: linear-gradient(90deg, #FBBF24, #F59E0B);
          animation: loadProgress3 1.4s ease forwards;
        }
        @keyframes loadProgress1 { to { width: 100%; } }
        @keyframes loadProgress2 { to { width: 99.2%; } }
        @keyframes loadProgress3 { to { width: 97.8%; } }
        .row-val {
          width: 40px;
          text-align: right;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Metrics */
        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }
        .metric-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.2s ease;
        }
        .light .metric-box {
          background: rgba(255, 255, 255, 0.45);
          border-color: rgba(0, 0, 0, 0.03);
        }
        .metric-box:hover {
          background: rgba(0, 0, 0, 0.35);
          border-color: rgba(192, 132, 252, 0.15);
          transform: translateY(-2px);
        }
        .light .metric-box:hover {
          background: rgba(255, 255, 255, 0.75);
          border-color: rgba(110, 63, 165, 0.08);
        }
        .metric-label {
          font-size: 0.62rem;
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .metric-val {
          font-size: 1.05rem;
          font-weight: 700;
          font-family: var(--font-sans);
          margin-bottom: 2px;
        }
        .text-gold {
          background: linear-gradient(135deg, #FCD34D, #F59E0B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-purple {
          background: linear-gradient(135deg, #C084FC, #A855F7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-indigo {
          background: linear-gradient(135deg, #818CF8, #6366F1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .metric-trend {
          font-size: 0.62rem;
          font-weight: 500;
        }
        .trend-up {
          color: #10B981;
        }
        .trend-down {
          color: #EF4444;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          z-index: 10;
          background: rgba(10, 7, 20, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          animation: floatBadge 6s ease-in-out infinite alternate;
        }
        .light .floating-badge {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(255, 255, 255, 0.7);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
        }
        .badge-top-right {
          top: 10%;
          right: -5%;
          animation-delay: -1.5s;
        }
        .badge-bottom-left {
          bottom: 35%;
          left: -8%;
          animation-delay: -3.5s;
        }
        
        @keyframes floatBadge {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-12px) rotate(2deg); }
        }
        
        .badge-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.7rem;
        }
        .badge-icon-trend {
          font-size: 1.05rem;
        }
        .badge-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .badge-title {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .badge-subtitle {
          font-size: 0.58rem;
          color: var(--text-secondary);
        }

        /* Responsive Layouts */
        @media (max-width: 1250px) {
          .floating-badge {
            display: none;
          }
          .dashboard-card {
            transform: none !important;
          }
        }
        @media (max-width: 480px) {
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .dashboard-scene {
            height: auto;
          }
          .dashboard-card {
            padding: 16px;
            border-radius: 16px;
          }
          .chart-container {
            height: 120px;
          }
          .live-dot {
            width: 6px;
            height: 6px;
          }
          .header-title {
            font-size: 0.78rem;
          }
        }
      `}</style>
    </div>
  );
}
