import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "What is your pricing model?",
      a: "We work on a contingency percentage-of-recovery basis. We only get paid when we recover outstanding balances or optimize your claim reimbursement. There are no upfront setup fees or monthly minimums.",
    },
    {
      q: "How long does onboarding and integration take?",
      a: "Typical onboarding takes between 14 to 28 days. This includes mapping credentials, setting up EHR integration portals, auditing initial outstanding A/R accounts, and training staff on basic reporting tools.",
    },
    {
      q: "Are your workflows fully HIPAA compliant?",
      a: "Yes. All data processes, portal systems, and account manager procedures strictly adhere to HIPAA and HITECH requirements. Data transfers are secured using AES-256 grade encryption.",
    },
    {
      q: "Do you support all EHR and EMR systems?",
      a: "Our team has experience integrating with all major clinical EHR networks including Epic, eClinicalWorks, Athenahealth, NextGen, and Allscripts, as well as proprietary practice software.",
    },
    {
      q: "How often do you provide recovery reports?",
      a: "You have 24/7 access to real-time reports through our provider dashboard. Additionally, your dedicated account representative holds monthly or bi-weekly video reviews with your practice leadership.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Common Inquiries</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Answers to common questions practice managers ask about our billing and recovery services.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
              <button onClick={() => toggleFAQ(idx)} className="faq-question">
                <span>{faq.q}</span>
                <ChevronDown size={18} className="faq-chevron" />
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .faq-accordion {
          max-width: 720px;
          margin: 40px auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-item {
          border: 1px solid var(--color-border);
          background-color: var(--bg-primary);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: all var(--transition-normal);
          text-align: left;
        }
        .faq-item:hover {
          border-color: rgba(20, 184, 166, 0.3);
        }
        .faq-item.open {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-sm);
          background-color: var(--bg-surface);
        }
        .faq-question {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: color var(--transition-fast);
        }
        .faq-question:hover {
          color: var(--color-primary);
        }
        .faq-chevron {
          transition: transform var(--transition-normal);
          color: var(--text-muted);
          flex-shrink: 0;
        }
        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
          color: var(--color-accent);
        }
        
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-item.open .faq-answer-wrapper {
          max-height: 200px;
        }
        .faq-answer {
          padding: 0 24px 20px 24px;
        }
        .faq-answer p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
