// This file contains structured data in JSON-LD format for SEO enhancement
// To use, include this script in your HTML <head> section

// Person schema for Angshuman Gupta
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Angshuman Gupta",
  "givenName": "Angshuman",
  "familyName": "Gupta",
  "jobTitle": "Product Leader",
  "url": "https://angshumangupta.com",
  "image": "https://angshumangupta.com/CL_logo_TM.png", // Update with actual image path
  "sameAs": [
    "https://www.linkedin.com/in/angshumangupta/", // Update with actual LinkedIn URL
    "https://github.com/angshu-min-js" // Update with actual GitHub URL
  ],
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Indian School of Business (ISB)",
      "sameAs": "https://www.isb.edu/"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Kalinga Institute of Industrial Technology (KIIT)",
      "sameAs": "https://kiit.ac.in/"
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Zalando SE",
    "sameAs": "https://www.zalando.de/",
    "url": "https://www.zalando.de/"
  },
  "knowsAbout": [
    "Product Management",
    "B2B Product Strategy",
    "Platform Strategy",
    "Partner Experience",
    "API Ecosystems",
    "E-commerce Integrations",
    "Identity & Access Management",
    "Banking-as-a-Service",
    "AI/ML Product Management"
  ]
};

// WorkExperience schema for professional experience 
const workExperienceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "WorkExperience",
        "name": "Product Lead, Partner Onboarding and Shop Connectors",
        "description": "Spearheading B2B partner onboarding and e-commerce integrations, driving significant growth.",
        "startDate": "2023-03",
        "workLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Germany",
            "addressLocality": "Berlin"
          }
        },
        "employerOrganization": {
          "@type": "Organization",
          "name": "Zalando SE",
          "sameAs": "https://www.zalando.de/"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "WorkExperience",
        "name": "Product Lead, Identity, Access, and Workflow Mgmt.",
        "description": "Led Identity & Workflow platforms at BaaS unicorn, scaling to 30M+ identities & enabling 10x revenue growth.",
        "startDate": "2021",
        "endDate": "2023",
        "employerOrganization": {
          "@type": "Organization",
          "name": "Zeta Tech (Directi)",
          "sameAs": "https://www.zeta.tech/"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "WorkExperience",
        "name": "Senior Product Manager, Driver Onboarding",
        "description": "Launched AI/ML platform reducing driver verification time by 33% and costs by 50%.",
        "startDate": "2020",
        "endDate": "2021",
        "employerOrganization": {
          "@type": "Organization",
          "name": "Ola Cabs",
          "sameAs": "https://www.olacabs.com/"
        }
      }
    }
  ]
};

// Project schema for portfolio projects
const projectSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "Enterprise Banking Platform Transformation",
        "headline": "Strategic Team Alignment for Financial Technology Scale",
        "description": "Strategic team alignment for banking platform, improving delivery times and cross-team collaboration.",
        "dateCreated": "2022",
        "datePublished": "2023",
        "creator": {
          "@type": "Person",
          "name": "Angshuman Gupta"
        },
        "url": "https://angshumangupta.com/#/?project=zeta-change-management",
        "keywords": [
          "Financial Technology",
          "Team Alignment",
          "Platform Strategy",
          "Banking"
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "CreativeWork",
        "name": "Self-Serve Identity Platform",
        "headline": "From Tickets to Trust: Launching a Self-Serve Identity Platform",
        "description": "Self-service identity platform that reduced support tickets by 30% and transformed access management across internal and external users.",
        "dateCreated": "2021",
        "datePublished": "2022",
        "creator": {
          "@type": "Person",
          "name": "Angshuman Gupta"
        },
        "url": "https://angshumangupta.com/#/?project=zeta-identity-platform",
        "keywords": [
          "Identity Management",
          "Self-Service",
          "IAM",
          "Access Management"
        ]
      }
    }
  ]
};

// SoftwareApplication schema for interactive games
const gamesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Prioritization Game",
        "description": "Practice prioritizing product tasks based on urgency and impact.",
        "applicationCategory": "Educational Game",
        "operatingSystem": "Web",
        "url": "https://angshumangupta.com/#/?game=prioritization",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Feature-Metric Matcher",
        "description": "Match product features with the metrics they would most directly impact.",
        "applicationCategory": "Educational Game",
        "operatingSystem": "Web",
        "url": "https://angshumangupta.com/#/?game=feature-metric",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Stack Challenge",
        "description": "Match different use cases with the most appropriate tech stack.",
        "applicationCategory": "Educational Game",
        "operatingSystem": "Web",
        "url": "https://angshumangupta.com/#/?game=stack-challenge",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Burnout Meter",
        "description": "Balance team capacity and business impact in this sprint planning simulation.",
        "applicationCategory": "Educational Game",
        "operatingSystem": "Web",
        "url": "https://angshumangupta.com/#/?game=burnout-meter",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "SoftwareApplication",
        "name": "PM vs Engineer",
        "description": "Play a strategic game of Tic Tac Toe representing the classic PM vs Engineer dynamic.",
        "applicationCategory": "Educational Game",
        "operatingSystem": "Web",
        "url": "https://angshumangupta.com/#/?game=tictactoe",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    }
  ]
};

// Combine all schemas
const allStructuredData = [
  personSchema,
  workExperienceSchema,
  projectSchema,
  gamesSchema
];

// Function to insert structured data into the page
function insertStructuredData() {
  allStructuredData.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

// Add event listener to insert structured data when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', insertStructuredData);
} else {
  insertStructuredData();
} 