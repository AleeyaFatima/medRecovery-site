import React, { useEffect } from 'react';

const updateOrCreateMeta = (name, content, attribute = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateOrCreateCanonical = (url) => {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
};

export default function SEOManager({ currentPage }) {
  useEffect(() => {
    const defaultKeywords = "Medical Billing, Revenue Cycle Management, Medical Coding, Patient Collections, Payer Credentialing, Healthcare Revenue Recovery, Physician Billing Services, Medical Billing Company, Medical Billing Houston";
    
    const schemas = {
      org: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MedRecovery Solutions",
        "url": "https://medrecoverysolutions.com",
        "logo": "https://medrecoverysolutions.com/logo_light.png",
        "sameAs": [
          "https://www.facebook.com/medrecoverysolutions",
          "https://www.linkedin.com/company/medrecoverysolutions"
        ]
      },
      local: {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "name": "MedRecovery Solutions LLC",
        "description": "Premium healthcare RCM, medical billing, coding and credentialing company in Houston, Texas.",
        "url": "https://medrecoverysolutions.com",
        "telephone": "+1-800-555-0199",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Texas Medical Center District",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "postalCode": "77030",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "29.7062",
          "longitude": "-95.4018"
        }
      }
    };

    const seoConfigs = {
      home: {
        title: "Medical Billing & Revenue Cycle Management Services | MedRecovery Solutions",
        description: "MedRecovery Solutions offers premium healthcare medical billing, coding, patient collections, and RCM services in Houston, Texas. Request a free audit!",
        url: "https://medrecoverysolutions.com/",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            schemas.org,
            schemas.local,
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://medrecoverysolutions.com",
              "name": "MedRecovery Solutions"
            }
          ]
        }
      },
      approach: {
        title: "Our Approach to Healthcare Revenue Recovery | MedRecovery Solutions",
        description: "Discover our integrated approach to clinical revenue cycle recovery. We combine technology audits with billing experts to maximize collection rates.",
        url: "https://medrecoverysolutions.com/approach",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            schemas.org,
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medrecoverysolutions.com/" },
                { "@type": "ListItem", "position": 2, "name": "Unique Approach", "item": "https://medrecoverysolutions.com/approach" }
              ]
            }
          ]
        }
      },
      services: {
        title: "Medical Billing & Coding Services | RCM Solutions | MedRecovery Solutions",
        description: "Maximize clinical efficiency with expert certified coding, charge entry, denial appeals, and provider credentialing services. View our full solutions.",
        url: "https://medrecoverysolutions.com/services",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            schemas.org,
            {
              "@type": "Service",
              "name": "Revenue Cycle Management (RCM)",
              "provider": schemas.org,
              "description": "End-to-end medical revenue cycle optimization, claims scrub, and denial appeals."
            },
            {
              "@type": "Service",
              "name": "Medical Coding Services",
              "provider": schemas.org,
              "description": "Expert certified coding mapping ICD-10-CM, CPT, and HCPCS systems."
            }
          ]
        }
      },
      leadership: {
        title: "Meet Our Medical Billing & RCM Leadership Team | MedRecovery Solutions",
        description: "Meet the executives and clinical recovery experts behind MedRecovery Solutions. Over a decade of trust in physician billing services.",
        url: "https://medrecoverysolutions.com/leadership",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            schemas.org,
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medrecoverysolutions.com/" },
                { "@type": "ListItem", "position": 2, "name": "Leadership", "item": "https://medrecoverysolutions.com/leadership" }
              ]
            }
          ]
        }
      },
      collections: {
        title: "Compliant Patient Collection Services | MedRecovery Solutions",
        description: "Compassionate, regulatory-compliant patient billing and collections. Maximize clinical outstanding returns while preserving patient trust.",
        url: "https://medrecoverysolutions.com/collection-services",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            schemas.org,
            {
              "@type": "Service",
              "name": "Patient Collections",
              "provider": schemas.org,
              "description": "Regulatory-compliant, empathetic patient billing collections."
            }
          ]
        }
      },
      careers: {
        title: "Join Our Team | Careers in Healthcare RCM | MedRecovery Solutions",
        description: "Looking for a career in medical billing and RCM? Join MedRecovery Solutions' team of certified billers, coders, and recovery specialists. Apply today!",
        url: "https://medrecoverysolutions.com/careers",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            schemas.org,
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medrecoverysolutions.com/" },
                { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://medrecoverysolutions.com/careers" }
              ]
            }
          ]
        }
      },
      contact: {
        title: "Contact Us & Get Started | Free Billing Audit | MedRecovery Solutions",
        description: "Get in touch with our billing specialists. Request a free audit of your clinic's outstanding claims and resolve leaks within one business day.",
        url: "https://medrecoverysolutions.com/contact",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            schemas.org,
            schemas.local
          ]
        }
      },
      testimonials: {
        title: "Testimonials & Client Success Stories | MedRecovery Solutions",
        description: "Read reviews and success stories from physicians and healthcare practice managers who maximized revenue and clean claim rates with our team.",
        url: "https://medrecoverysolutions.com/testimonials",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            schemas.org,
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is your clean-claim rate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MedRecovery Solutions maintains an industry-leading average of 98.7% clean claims upon first submission."
                  }
                }
              ]
            }
          ]
        }
      },
      about: {
        title: "About Us | Healthcare Billing & Collections Auditing Specialists",
        description: "Over ten years of medical billing and accounts receivable recovery experience. Licensed in 50 states, HIPAA certified, and dedicated to physician clinical collections.",
        url: "https://medrecoverysolutions.com/about",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org, schemas.local]
        }
      },
      faq: {
        title: "Frequently Asked Questions | RCM & HIPAA Auditing Solutions",
        description: "Clear answers regarding billing overhead contingency rates, CAQH credentialing timelines, and EHR migration compliance.",
        url: "https://medrecoverysolutions.com/faq",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      credentialing: {
        title: "Payer Credentialing & Enrollment Management | MedRecovery Solutions",
        description: "Complete CAQH profile maintenance, enrollment packets submission, and Medicare/commercial contract management.",
        url: "https://medrecoverysolutions.com/credentialing",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      coding: {
        title: "AAPC Certified Medical Coding Audits | CPT & ICD-10 Solutions",
        description: "Certified Professional Coders (CPC) conducting code audits and modifier mappings to minimize downcoding and billing errors.",
        url: "https://medrecoverysolutions.com/medical-coding",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      denial: {
        title: "Denial Management & Appeal Appeal Workflows | MedRecovery Solutions",
        description: "Recover denied claims through rapid audits, documentation attachment, and official payer appeal submissions.",
        url: "https://medrecoverysolutions.com/denial-management",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      'ar-recovery': {
        title: "Accounts Receivable (A/R) Recovery Services | MedRecovery Solutions",
        description: "Audit and reclaim outstanding 90+ day payer balances. Shorten average days in A/R down to 12.4 days.",
        url: "https://medrecoverysolutions.com/ar-recovery",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      eligibility: {
        title: "Eligibility Verification & Prior Authorization Solutions",
        description: "Automate coverage checks and deductibles logging. Proactive clinical documentation submissions to avoid front desk rejections.",
        url: "https://medrecoverysolutions.com/eligibility-verification",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      'virtual-assistant': {
        title: "HIPAA Secure Virtual Medical Assistants | Practice Support",
        description: "Reduce documentation burden. Certified assistants coordinating patient intakes, portal responses, and transcribing charts.",
        url: "https://medrecoverysolutions.com/virtual-medical-assistant",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      privacy: {
        title: "Privacy Policy | HIPAA Compliance Disclosures",
        description: "Our privacy policies, Business Associate Agreements guidelines, and secure AWS AES-256 cloud encryption protocols.",
        url: "https://medrecoverysolutions.com/privacy-policy",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      terms: {
        title: "Terms of Service | MedRecovery Solutions LLC",
        description: "Terms governing use of the MedRecovery site and secure billing dashboards.",
        url: "https://medrecoverysolutions.com/terms-of-service",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      hipaa: {
        title: "HIPAA & Data Security Safeguards Profile | MedRecovery Solutions",
        description: "Technical, physical, and administrative safeguards protecting electronic PHI and AWS clinical databases.",
        url: "https://medrecoverysolutions.com/hipaa-compliance",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      blog: {
        title: "Latest Healthcare RCM Insights & Billing Blog | MedRecovery Solutions",
        description: "Billing guidelines, certified coding updates, and HIPAA compliance tips curated by healthcare experts.",
        url: "https://medrecoverysolutions.com/blog",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      },
      'not-found': {
        title: "404 Page Not Found | MedRecovery Solutions",
        description: "The clinical resource you requested is unavailable.",
        url: "https://medrecoverysolutions.com/404",
        schema: {
          "@context": "https://schema.org",
          "@graph": [schemas.org]
        }
      }
    };

    const config = seoConfigs[currentPage] || seoConfigs.home;

    // Update document title
    document.title = config.title;

    // Update basic meta tags
    updateOrCreateMeta('description', config.description);
    updateOrCreateMeta('keywords', defaultKeywords);
    
    // Canonical link
    updateOrCreateCanonical(config.url);

    // Open Graph
    updateOrCreateMeta('og:title', config.title, 'property');
    updateOrCreateMeta('og:description', config.description, 'property');
    updateOrCreateMeta('og:url', config.url, 'property');
    updateOrCreateMeta('og:type', 'website', 'property');
    updateOrCreateMeta('og:image', 'https://medrecoverysolutions.com/logo_light.png', 'property');

    // Twitter Card
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', config.title);
    updateOrCreateMeta('twitter:description', config.description);
    updateOrCreateMeta('twitter:image', 'https://medrecoverysolutions.com/logo_light.png');

    // Schema JSON-LD Script injection
    let schemaScript = document.getElementById('jsonld-schema');
    if (schemaScript) {
      schemaScript.remove();
    }
    schemaScript = document.createElement('script');
    schemaScript.id = 'jsonld-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify(config.schema);
    document.head.appendChild(schemaScript);

  }, [currentPage]);

  return null;
}
