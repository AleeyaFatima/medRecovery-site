import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container contact-container">
        <div className="grid-2 contact-grid">
          
          {/* Contact Details */}
          <div className="contact-details">
            <span className="section-tag">Get Started</span>
            <h2 className="contact-title">Optimize Your Practice Collections Today</h2>
            <p className="contact-subtitle">
              Ready to reduce claims rejections and restore outstanding patient accounts? Reach out to our team in Houston, Texas.
            </p>

            <div className="details-list">
              <div className="detail-item">
                <div className="detail-icon-box">
                  <Phone size={18} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Direct Line</span>
                  <a href="tel:7135550190" className="detail-link">(713) 555-0190</a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box">
                  <Mail size={18} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Email Support</span>
                  <a href="mailto:onboarding@medrecoverysolutions.com" className="detail-link">onboarding@medrecoverysolutions.com</a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="detail-info">
                  <span className="detail-label">Houston Office</span>
                  <span className="detail-text">2400 Baylor St, Suite 400<br />Houston, TX 77030</span>
                </div>
              </div>
            </div>

            {/* Map Mockup */}
            <div className="map-mockup">
              <div className="map-header">
                <MapPin size={14} className="map-pin-icon" />
                <span>Headquarters Map Location</span>
              </div>
              <div className="map-body">
                {/* SVG mock map of Houston grid */}
                <svg viewBox="0 0 300 120" className="map-svg">
                  <line x1="0" y1="40" x2="300" y2="40" stroke="var(--color-border)" strokeWidth="2" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke="var(--color-border)" strokeWidth="2" />
                  <line x1="80" y1="0" x2="80" y2="120" stroke="var(--color-border)" strokeWidth="2" />
                  <line x1="200" y1="0" x2="200" y2="120" stroke="var(--color-border)" strokeWidth="2" />
                  <line x1="0" y1="10" x2="300" y2="110" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4" />
                  
                  {/* Houston Pin */}
                  <circle cx="200" cy="80" r="24" fill="var(--color-accent-bg)" />
                  <circle cx="200" cy="80" r="10" fill="var(--color-accent)" opacity="0.4" />
                  <circle cx="200" cy="80" r="4" fill="var(--color-primary)" />
                </svg>
                <div className="map-overlay-card">
                  <span className="map-card-title">MedRecovery HQ</span>
                  <span className="map-card-desc">Texas Medical Center Area</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card card">
            {submitted ? (
              <div className="submit-success">
                <CheckCircle size={56} className="success-icon" />
                <h3 className="success-title">Consultation Requested</h3>
                <p className="success-desc">
                  Thank you! Our clinic integration lead will review your message and contact you within one business day.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-sm">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-header">Schedule a Free Practice Audit</h3>
                <p className="form-sub">Provide your practice detail below to begin your consultation.</p>

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@doeclinic.com"
                  />
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(713) 555-0190"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="practice">Clinic/Practice Name</label>
                    <input
                      type="text"
                      id="practice"
                      name="practice"
                      required
                      value={formData.practice}
                      onChange={handleChange}
                      placeholder="Baylor Health Network"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can we help your practice?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your billing and collections challenges..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Submit Consultation Request <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-primary);
          position: relative;
        }
        .contact-grid {
          align-items: center;
          gap: 60px;
        }
        .contact-details {
          text-align: left;
        }
        .contact-title {
          margin-top: 12px;
          margin-bottom: 20px;
        }
        .contact-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
        }
        
        .details-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .detail-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .detail-info {
          display: flex;
          flex-direction: column;
        }
        .detail-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        .detail-link, .detail-text {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          line-height: 1.4;
        }
        .detail-link:hover {
          color: var(--color-accent);
        }
        
        /* Map Mockup styling */
        .map-mockup {
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .map-header {
          height: 36px;
          background-color: var(--bg-surface-hover);
          border-bottom: 1px solid var(--color-border);
          padding: 0 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .map-pin-icon {
          color: var(--color-accent);
        }
        .map-body {
          height: 120px;
          position: relative;
          background-color: var(--bg-primary);
          overflow: hidden;
        }
        .map-svg {
          width: 100%;
          height: 100%;
        }
        .map-overlay-card {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .map-card-title {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .map-card-desc {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        /* Form Card Styling */
        .contact-form-card {
          padding: 40px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }
        .form-header {
          font-size: 1.35rem;
          font-weight: 700;
        }
        .form-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-top: -12px;
          margin-bottom: 8px;
        }
        
        .form-group-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .form-group input, .form-group textarea {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          padding: 14px 18px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          background-color: var(--bg-surface);
          box-shadow: 0 0 0 4px rgba(110, 63, 165, 0.12);
        }
        .dark .form-group input:focus, .dark .form-group textarea:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.15);
        }
        .form-submit-btn {
          width: 100%;
          margin-top: 8px;
        }
        
        /* Success screen styling */
        .submit-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 0;
        }
        .success-icon {
          color: var(--color-success);
          margin-bottom: 24px;
        }
        .success-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }
        .success-desc {
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 320px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 480px) {
          .form-group-row {
            grid-template-columns: 1fr;
          }
          .contact-form-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
