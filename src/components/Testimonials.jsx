import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "MedRecovery Solutions transformed our collections process. Their certified coders and transparent reporting saved our practice hundreds of thousands in unpaid claims while maintaining a positive patient relationship.",
      author: "Dr. Sarah Martinez, MD",
      role: "Clinical Network Director",
      organization: "Baylor College of Medicine",
      image: "/sarah_martinez.png"
    },
    {
      quote: "We've worked with them for over eight years. Their clean-claim rate is incredibly consistent, and their billing specialists always provide direct, clear answers. We could not ask for a better RCM partner.",
      author: "James Carter",
      role: "Practice Administrator",
      organization: "Houston Cardiology Associates",
      image: "/james_carter.png"
    },
    {
      quote: "Onboarding was fast and stress-free. Their integration specialists connected directly to our EHR under strict HIPAA compliance rules, and we saw collections increase within the first thirty days.",
      author: "Dr. Allison Chen, FAAP",
      role: "Pediatric Specialty Director",
      organization: "Memorial Pediatrics Group",
      image: "/allison_chen.png"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  const current = testimonials[activeIndex];

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

          <div className="carousel-container-outer">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-slide-layout"
              >
                <div className="testimonial-profile-area">
                  <div className="profile-img-box">
                    <img src={current.image} alt={current.author} className="profile-img" />
                    <div className="profile-badge">Verified Client</div>
                  </div>
                </div>
                <div className="testimonial-text-area">
                  <p className="testimonial-quote">"{current.quote}"</p>
                  <div className="testimonial-author-info">
                    <span className="author-name">{current.author}</span>
                    <span className="author-role">
                      {current.role} — <span className="author-org">{current.organization}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
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
          max-width: 950px;
          margin: 0 auto;
          position: relative;
          background-color: var(--bg-primary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 64px 48px 40px 48px;
          box-shadow: var(--shadow-md);
        }
        .quote-icon-box {
          position: absolute;
          top: -27px;
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
          opacity: 0.95;
        }
        .carousel-container-outer {
          position: relative;
          min-height: 240px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .testimonial-slide-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          align-items: center;
          width: 100%;
          text-align: left;
        }
        
        .testimonial-profile-area {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .profile-img-box {
          position: relative;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          box-shadow: var(--shadow-md);
        }
        .profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--bg-primary);
          background-color: var(--bg-surface-hover);
        }
        .profile-badge {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--color-accent);
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 50px;
          box-shadow: var(--shadow-sm);
          white-space: nowrap;
        }
        
        .testimonial-text-area {
          display: flex;
          flex-direction: column;
        }
        .testimonial-quote {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          line-height: 1.75;
          color: var(--text-primary);
          font-weight: 500;
          margin-bottom: 24px;
          font-style: italic;
        }
        .testimonial-author-info {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
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
          margin-top: 36px;
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
          background-color: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
          transform: scale(1.05);
        }
        .dark .carousel-btn:hover {
          color: #0A0714;
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
        @media (max-width: 768px) {
          .testimonial-slide-layout {
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: center;
          }
          .testimonial-text-area {
            align-items: center;
          }
          .testimonial-quote {
            text-align: center;
          }
        }
        @media (max-width: 480px) {
          .carousel-wrapper {
            padding: 48px 20px 24px 20px;
          }
          .testimonial-quote {
            font-size: 1.05rem;
          }
          .profile-img-box {
            width: 130px;
            height: 130px;
          }
        }
      `}</style>
    </section>
  );
}
