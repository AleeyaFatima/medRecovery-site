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
