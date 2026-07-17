import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "MedRecovery Solutions transformed our collections process. Their certified coders and transparent reporting saved our practice hundreds of thousands in unpaid claims while maintaining a positive patient relationship.",
      author: "Dr. Sarah Martinez, MD",
      role: "Clinical Network Director",
      organization: "Baylor College of Medicine",
    },
    {
      quote: "We've worked with them for over eight years. Their clean-claim rate is incredibly consistent, and their billing specialists always provide direct, clear answers. We could not ask for a better RCM partner.",
      author: "James Carter",
      role: "Practice Administrator",
      organization: "Houston Cardiology Associates",
    },
    {
      quote: "Onboarding was fast and stress-free. Their integration specialists connected directly to our EHR under strict HIPAA compliance rules, and we saw collections increase within the first thirty days.",
      author: "Dr. Allison Chen, FAAP",
      role: "Pediatric Specialty Director",
      organization: "Memorial Pediatrics Group",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Feedback</span>
          <h2 className="section-title">Trusted by Leading Medical Groups</h2>
          <p className="section-subtitle">
            See how we help clinics and health systems maintain financial health and positive patient outreach.
          </p>
        </div>

        <div className="carousel-wrapper">
          <div className="quote-icon-box">
            <Quote size={40} className="quote-icon" />
          </div>

          <div className="carousel-container">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className={`testimonial-slide ${idx === activeIndex ? 'active' : ''}`}
                aria-hidden={idx !== activeIndex}
              >
                <p className="testimonial-quote">"{test.quote}"</p>
                <div className="testimonial-author-info">
                  <span className="author-name">{test.author}</span>
                  <span className="author-role">{test.role} — <span className="author-org">{test.organization}</span></span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button onClick={handlePrev} className="carousel-btn" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
            <button onClick={handleNext} className="carousel-btn" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }
        .carousel-wrapper {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          background-color: var(--bg-primary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 60px 48px 48px 48px;
          box-shadow: var(--shadow-md);
        }
        .quote-icon-box {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: var(--color-primary);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .quote-icon {
          fill: currentColor;
          opacity: 0.9;
        }
        .carousel-container {
          position: relative;
          overflow: hidden;
          min-height: 200px;
        }
        .testimonial-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s ease, visibility 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .testimonial-slide.active {
          position: relative;
          opacity: 1;
          visibility: visible;
        }
        .testimonial-quote {
          font-family: var(--font-sans);
          font-size: clamp(1.15rem, 2.5vw, 1.45rem);
          line-height: 1.6;
          color: var(--text-primary);
          font-weight: 500;
          margin-bottom: 28px;
          text-align: center;
          font-style: italic;
        }
        .testimonial-author-info {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .author-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .author-role {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-top: 4px;
        }
        .author-org {
          color: var(--color-primary);
          font-weight: 700;
        }
        
        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 40px;
          border-top: 1px solid var(--color-border);
          padding-top: 24px;
        }
        .carousel-btn {
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .carousel-btn:hover {
          background-color: var(--color-accent);
          color: #FFFFFF;
          border-color: var(--color-accent);
          transform: scale(1.05);
        }
        .carousel-dots {
          display: flex;
          gap: 8px;
        }
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-border);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          padding: 0;
        }
        .carousel-dot.active {
          background-color: var(--color-primary);
          width: 24px;
          border-radius: 4px;
        }
        @media (max-width: 480px) {
          .carousel-wrapper {
            padding: 48px 24px 24px 24px;
          }
          .testimonial-quote {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
