import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ROICalculator() {
  const [specialty, setSpecialty] = useState('Primary Care');
  const [monthlyVolume, setMonthlyVolume] = useState(150000);
  const [cleanClaimRate, setCleanClaimRate] = useState(82);
  const [inHouseCost, setInHouseCost] = useState(8500);

  const [results, setResults] = useState({
    annualLeakage: 0,
    annualSavings: 0,
    totalLift: 0
  });

  const specialties = [
    { name: 'Primary Care', leakFactor: 0.12 },
    { name: 'Pediatrics', leakFactor: 0.10 },
    { name: 'Cardiology', leakFactor: 0.15 },
    { name: 'Orthopedics', leakFactor: 0.18 },
    { name: 'Surgery Center', leakFactor: 0.22 },
    { name: 'Behavioral Health', leakFactor: 0.14 }
  ];

  useEffect(() => {
    // 99.2% is MedRecovery benchmark, clean claim rate difference is the primary recovery potential
    const currentSpecialty = specialties.find(s => s.name === specialty) || specialties[0];
    const targetCleanRate = 99.2;
    
    // Revenue cycle leak math: Monthly billing volume * rate gap * specialty denial resolution difficulty (leakFactor)
    const rateGap = Math.max(0, targetCleanRate - cleanClaimRate) / 100;
    const monthlyLeakage = monthlyVolume * rateGap * (currentSpecialty.leakFactor + 0.35); // Adjusted for typical payer write-off rates
    const annualLeakageValue = monthlyLeakage * 12;

    // MedRecovery's standard pricing model: ~4.5% of collections
    // In-house costs include salary, benefits, clearinghouse software fees, training, and credentialing costs.
    const medRecoveryMonthlyCost = monthlyVolume * 0.045;
    const monthlyCostDifference = Math.max(0, inHouseCost - medRecoveryMonthlyCost);
    const annualSavingsValue = monthlyCostDifference * 12;

    setResults({
      annualLeakage: Math.round(annualLeakageValue),
      annualSavings: Math.round(annualSavingsValue),
      totalLift: Math.round(annualLeakageValue + annualSavingsValue)
    });
  }, [specialty, monthlyVolume, cleanClaimRate, inHouseCost]);

  return (
    <div className="roi-calculator-card card">
      <div className="calculator-header">
        <div className="calc-icon-title">
          <Calculator className="calc-icon" size={24} />
          <h3>Practice Financial Lift Calculator</h3>
        </div>
        <p className="calc-subtitle">
          Estimate potential revenue recovery and cost reductions by transitioning to MedRecovery Solutions.
        </p>
      </div>

      <div className="calculator-body-grid">
        {/* Left Inputs */}
        <div className="calc-inputs-column">
          <div className="input-group">
            <label className="input-label">Practice Specialty</label>
            <select 
              value={specialty} 
              onChange={(e) => setSpecialty(e.target.value)}
              className="calc-select"
            >
              {specialties.map(spec => (
                <option key={spec.name} value={spec.name}>{spec.name}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <div className="label-val-row">
              <label className="input-label">Monthly Billing Volume</label>
              <span className="slider-value-display">${monthlyVolume.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="25000" 
              max="2000000" 
              step="25000"
              value={monthlyVolume} 
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="calc-slider"
            />
            <div className="slider-limits">
              <span>$25K</span>
              <span>$2.0M</span>
            </div>
          </div>

          <div className="input-group">
            <div className="label-val-row">
              <label className="input-label">First-Pass Clean Claim Rate</label>
              <span className="slider-value-display">{cleanClaimRate}%</span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="95" 
              step="1"
              value={cleanClaimRate} 
              onChange={(e) => setCleanClaimRate(Number(e.target.value))}
              className="calc-slider"
            />
            <div className="slider-limits">
              <span>50%</span>
              <span>95% (Avg: 80%)</span>
            </div>
          </div>

          <div className="input-group">
            <div className="label-val-row">
              <label className="input-label">Current Monthly Billing Overhead</label>
              <span className="slider-value-display">${inHouseCost.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="2000" 
              max="50000" 
              step="500"
              value={inHouseCost} 
              onChange={(e) => setInHouseCost(Number(e.target.value))}
              className="calc-slider"
            />
            <div className="slider-limits">
              <span>$2K (Staff/Software)</span>
              <span>$50K</span>
            </div>
          </div>
        </div>

        {/* Right Results */}
        <div className="calc-results-column">
          <div className="results-card">
            <span className="results-card-tag">Annual Financial Impact</span>
            <div className="lift-main-amount">
              ${results.totalLift.toLocaleString()}
            </div>
            <p className="lift-description">
              Estimated total annual billing lift, combining recovered denied revenue and software/staff cost savings.
            </p>

            <div className="results-breakdown-rows">
              <div className="breakdown-row">
                <span className="breakdown-label">Annual Lost Revenue Recovered</span>
                <span className="breakdown-val text-gold">+${results.annualLeakage.toLocaleString()}</span>
              </div>
              <div className="breakdown-row">
                <span className="breakdown-label">Billing Overhead Savings</span>
                <span className="breakdown-val text-purple">+${results.annualSavings.toLocaleString()}</span>
              </div>
            </div>

            <div className="compliance-row">
              <ShieldCheck className="shield-icon" size={16} />
              <span>Full compliance with AAPC coding and HIPAA guidelines.</span>
            </div>

            <button className="btn btn-primary calc-cta-btn">
              Get Free Revenue Cycle Audit <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .roi-calculator-card {
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
        .light .roi-calculator-card {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.06);
        }
        .calculator-header {
          margin-bottom: 28px;
        }
        .calc-icon-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        .calc-icon {
          color: var(--color-accent);
        }
        .calc-icon-title h3 {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }
        .calc-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .calculator-body-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
        }
        
        .calc-inputs-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .input-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .label-val-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .slider-value-display {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-accent);
          background: rgba(192, 132, 252, 0.1);
          padding: 2px 8px;
          border-radius: 6px;
        }
        .calc-select {
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
        }
        .light .calc-select {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.1);
        }
        .calc-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.1);
          outline: none;
          cursor: pointer;
        }
        .light .calc-slider {
          background: rgba(0, 0, 0, 0.08);
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 10px rgba(192, 132, 252, 0.4);
          transition: transform 0.1s ease;
        }
        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .slider-limits {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .calc-results-column {
          display: flex;
          align-items: stretch;
        }
        .results-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }
        .light .results-card {
          background: rgba(0, 0, 0, 0.02);
          border-color: rgba(0, 0, 0, 0.04);
        }
        .results-card-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .lift-main-amount {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-sans);
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -1px;
          background: linear-gradient(135deg, #FFF 30%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .light .lift-main-amount {
          background: linear-gradient(135deg, var(--color-primary) 30%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .lift-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 16px;
          width: 100%;
        }
        .light .lift-description {
          border-color: rgba(0, 0, 0, 0.05);
        }
        .results-breakdown-rows {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .breakdown-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          font-weight: 500;
        }
        .breakdown-label {
          color: var(--text-secondary);
        }
        .breakdown-val {
          font-weight: 700;
        }
        .text-gold {
          color: var(--color-accent);
        }
        .text-purple {
          color: #C084FC;
        }
        .compliance-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .shield-icon {
          color: #10B981;
        }
        .calc-cta-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 600;
          padding: 14px 20px;
        }
        
        @media (max-width: 900px) {
          .calculator-body-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </div>
  );
}
