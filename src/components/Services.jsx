import React from 'react';
import { FileText, Layers, ClipboardList, HeartHandshake, ShieldCheck, BarChart4, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: 'Medical Billing',
      description: 'Comprehensive charge entry, prompt claim formatting, and secure electronic submission to insurers.',
      icon: <FileText size={24} />,
    },
    {
      title: 'Revenue Cycle Management',
      description: 'End-to-end RCM processes to track claims throughout their lifecycle, minimizing friction and delays.',
      icon: <Layers size={24} />,
    },
    {
      title: 'Medical Coding Services',
      description: 'Expert certified coding using ICD-10-CM, CPT, and HCPCS systems to prevent costly validation audits.',
      icon: <ClipboardList size={24} />,
    },
    {
      title: 'Patient Collections',
      description: 'Compassionate, regulatory-compliant solutions that preserve patient trust while securing payment.',
      icon: <HeartHandshake size={24} />,
    },
    {
      title: 'Provider Credentialing',
      description: 'Stress-free payer enrollment and verification so you can contract with key insurers without administrative overhead.',
      icon: <ShieldCheck size={24} />,
    },
    {
      title: 'Practice Consulting',
      description: 'Insightful operational analyses, compliance reviews, and custom recovery plans to boost clinical efficiency.',
      icon: <BarChart4 size={24} />,
    },
  ];

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Expertise</span>
          <h2 className="section-title">Billing & Collection Services</h2>
          <p className="section-subtitle">
            Flexible, high-efficiency revenue management solutions designed to free your staff and secure the resources you deserve.
          </p>
        </div>

        <div className="grid-3 services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn more <ArrowUpRight size={16} className="link-arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-primary);
          position: relative;
        }
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 64px auto;
        }
        .section-tag {
          display: inline-block;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-accent);
          margin-bottom: 12px;
        }
        .section-title {
          margin-bottom: 16px;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }
        .services-grid {
          margin-top: 16px;
        }
        
        .service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
         .service-icon-box {
           width: 56px;
           height: 56px;
           border-radius: 50% !important;
           background-color: var(--color-accent-bg) !important;
           color: var(--color-accent) !important;
           display: flex;
           align-items: center;
           justify-content: center;
           margin-bottom: 24px;
           transition: all var(--transition-fast);
         }
         .service-card:hover .service-icon-box {
           transform: scale(1.08) translateY(-2px);
           box-shadow: 0 4px 12px rgba(200, 154, 61, 0.15);
         }
        .service-card-title {
          font-size: 1.25rem;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .service-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          flex-grow: 1;
        }
        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.9rem;
          transition: gap var(--transition-fast);
        }
        .service-link:hover {
          color: var(--color-accent);
        }
        .link-arrow {
          transition: transform var(--transition-fast);
        }
        .service-card:hover .link-arrow {
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
}
