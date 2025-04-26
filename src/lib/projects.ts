import { ProjectData } from '../components/ProjectTemplate';

export const projects: ProjectData[] = [
  {
    id: 'zalando-platform',
    title: '🚀 Building Zalando\'s (ZEOS) Partner Platform: 0 to 1 journey within a listed company',
    company: 'Zalando SE',
    year: "2023 - 2024",
    shortDescription: 'Led the transformation of Zalando\'s logistics capabilities into a full-fledged logistics-as-a-service platform, scaling from 1 to 50 merchants per month.',
    situation: 'When I joined Zalando, Europe\'s leading fashion marketplace, I was tasked with scaling a bold new ambition — transforming Zalando\'s logistics capabilities, branded as Zeos, into a full-fledged logistics-as-a-service platform. The mission was clear: help merchants sell not just on Zalando, but across marketplaces like Amazon, Otto, and About You — and do it at scale.\n\nThe first thing I noticed? We were onboarding just one merchant per month. Digging deeper, the reasons became clear:\n- The onboarding process was entirely manual 🧾\n- There was no clear platform or tech infrastructure to support scaling ⚙️\n- Teams worked in silos with no shared domain models or reusable interfaces 🚧\n\nYet, the business goals were ambitious: 10 merchants in 2023 → 20 in 2024 → 40+ in 2025, driven by new markets, non-Zalando demand, and expanding marketplace presence 🌍\n\nIt was clear — a platform rethink was necessary.',
    steps: {
      research: [
        'Interviewed Ops, Commercial, Strategy, and Tech teams to understand the jobs-to-be-done and pain points',
        'Analyzed how competitors like Amazon MCF or Otto operate, and where we lagged',
        'Identified core components: Merchant Business Profile, Marketplace + Warehouse + Carrier configurations, Customization modules',
        'Defined three key platform interfaces: APIs for shop integrations, Backoffice tools for operations, Self-service flows for merchants 👩‍💻'
      ],
      strategy: [
        'Documented clear Product Strategy explaining why we needed a platform and its components',
        'Created phased roadmap aligned with merchant growth targets',
        'Collaborated with Engineering, Ops, and Business to align on system design',
        'Secured Senior Leadership buy-in for shift from manual ops to product-led model',
        'Ensured dedicated engineering capacity by aligning on priorities and timelines 📅'
      ],
      development: [
        'Built internal tools to scale operational support',
        'Exposed APIs for external partners and shop connectors',
        'Rolled out self-service interfaces to reduce Ops dependency',
        'Reduced onboarding time from 30 days to <1 day ⏱️',
        'Scaled capacity from 1 merchant/month to 50/month'
      ]
    },
    impact: [
      'Scaled merchant onboarding capacity from 1 to 50 merchants per month',
      'Reduced onboarding time from 30 days to less than 1 day',
      'Enabled multi-marketplace and multi-country merchant launches',
      'Achieved efficient scaling without proportional Ops resource increase',
      'Established competitive advantage with modern, near self-service onboarding experience'
    ],
    lessons: [
      'Operate in ambiguity: Navigating a new domain, across countries and teams, required relentless clarity-seeking',
      'Cross-functional collaboration wins: Worked closely with 5+ operational managers and multiple tech squads — shared language and goals were essential',
      'Think platform-first: This wasn\'t about features. It was about building extensible, reusable infrastructure that could evolve with our business'
    ]
  },
  {
    id: 'zeta-identity',
    title: '🔐 From Tickets to Trust: Launching a Self-Serve Identity Platform at Zeta',
    company: 'Zeta',
    year: "2021 - 2022",
    shortDescription: 'Built a self-service identity platform that reduced support tickets by 30% and transformed access management across internal and external users.',
    situation: '🧠 Context\nZeta\'s IAM platform powers access for multiple internal and external product suites. Identity changes and access requests were common — but relied on tenant admins and manual backoffice workflows, creating friction and ticket overhead.\n\n🎯 Goal\nMake access and identity self-serviceable for all users — employees, customers, partners — without depending on support or tenant admins.\n\n📊 Business Impact\n• Reduce support ticket volume related to access issues\n• Improve resolution time by 100% (i.e., eliminate ticket dependency)\n• Create a table-stakes experience comparable to industry leaders (Okta, Ping)\n\n🔍 Discovery\nTraced user journeys:\n• User logs in → Hits access block → Doesn\'t know why or whom to contact → Raises a support ticket\n• Tenant admins had to log into backoffice, find the user, and manually update access\n• Ticket aging: Avg 2–5 days → Created productivity loss & poor experience\n• Conducted customer interviews (internal & external)\n\n🤯 Core Problems\n• Users didn\'t know what roles/access they had\n• No visibility on how to request access\n• No standard identity view → led to duplicated or incorrect identities\n• Tenant admins were overburdened with repetitive access requests',
    steps: {
      research: [
        'Mapped key personas: End users (employees, customers) and Tenant admins (partners, ops, internal IT)',
        'Analyzed support ticket data to identify high-volume access request patterns',
        'Conducted customer interviews across internal teams and external partners',
        'Prioritized internal employees first, followed by customer tenants based on ticket volume'
      ],
      strategy: [
        'Designed modular self-service portal built on existing IAM APIs',
        'Created embeddable architecture to enable integration across all Zeta-powered apps',
        'Developed phased rollout plan: Internal UAT → Strategic Tenants → Global Release',
        'Built stakeholder alignment through demos and enablement materials'
      ],
      development: [
        'Built Self-Serve Application with current access view, role requests, and automated workflows',
        'Developed embeddable component architecture for easy integration',
        'Created clickable prototypes using internal design system for early feedback',
        'Implemented tenant-specific configurations and extension points',
        'Produced detailed documentation and self-serve demo videos for customer enablement'
      ]
    },
    impact: [
      'Phase 1 Results:\n• Support tickets reduced by 30%\n• User confusion significantly decreased\n• Tenant admin workload reduced',
      'Platform Adoption:\n• Teams built additional workflows (onboarding/offboarding) on the platform\n• Successfully embedded across multiple product lines\n• Set foundation for zero-touch identity management',
      'Customer Success:\n• Resolution time improved from 2-5 days to immediate self-service\n• Positive feedback from both internal and external users\n• Reduced operational overhead for tenant admins'
    ],
    lessons: [
      'Identity is invisible until it breaks — self-serve should be the default approach',
      'Unified UI across internal/external users creates trust and reduces confusion',
      'Embeddability is key for driving adoption across diverse product lines without code duplication',
      'Early stakeholder alignment and clear documentation are crucial for platform adoption'
    ]
  },
  {
    id: 'ola-digitization',
    title: '🚗 Ola Document Digitization: Scaling AI to Onboard Millions of Drivers',
    company: 'Ola Cabs',
    year: 2021,
    shortDescription: 'Reduced driver onboarding time from 3 hours to 30 mins through AI-driven document digitization, enabling rapid international expansion and improved supply-side metrics.',
    situation: '🧠 Context\nAs Ola expanded globally (UK, Australia, NZ), onboarding supply (drivers) quickly and compliantly became a critical problem to solve. Manual document checks led to long onboarding times, high drop-offs, and compliance risks — slowing down international expansion.\n\n🎯 Goal\nReduce onboarding turnaround time from 3 hours to 30 mins — an 80% reduction — while improving funnel conversion and ensuring compliance via AI-driven document digitization.\n\n📊 Business Impact\n• Unlock new revenue in international markets by improving supply-side onboarding\n• Power a $1B+ revenue ambition with faster driver onboarding\n• Improve agent productivity (CVT team) and reduce headcount dependency over 6 rollout phases\n\n🔍 Discovery\nTraced driver onboarding journey:\n• Driver App → CVT agent → Manual Review → Quality Checks → Feedback Loop to Driver\n• Conducted funnel analysis → 30% of drivers were dropping off\n• Root cause: Incorrect documents, unclear rejections, slow feedback loop\n• Supplemented with customer call recordings and CVT agent interviews\n\n🤯 Core Problems\n• Drivers didn\'t know why their documents failed\n• High TAT → many didn\'t return to complete onboarding\n• Manual document digitization wasn\'t scalable or consistent\n• A robust compliance engine needed standardized digitization',
    steps: {
      research: [
        'Conducted comprehensive driver onboarding journey analysis revealing 30% drop-off rate',
        'Analyzed customer call recordings and CVT agent interviews to identify pain points',
        'Evaluated build vs. buy options → chose in-house development (2Y ROI, extensibility, privacy)',
        'Tested with historical Indian data as proxy for classification and extraction validation'
      ],
      strategy: [
        'Designed multi-component AI platform with image quality detection, document classification, and OCR processing',
        'Planned phased market rollout: London → ANZ → Global',
        'Focused on reducing CVT agent time and building self-serve driver experience',
        'Defined clear north-star metric: Driver onboarding time reduction'
      ],
      development: [
        'Built Core OCR Platform with FFT for blur detection and RGB channel thresholds',
        'Implemented VGG19-based document classifier with market-specific training',
        'Integrated Azure Cognitive OCR API with custom regex-based field extraction',
        'Enhanced driver app with visual cues and improved first-time upload UX',
        'Developed quick prototype using Django + Azure Cognitive Services to demonstrate value proposition and secure SLT buy-in and project budget'
      ]
    },
    impact: [
      'Initial Release (Week 1) ❌:\n• Started with 70% digitization accuracy\n• CVT rework actually increased by ~10%\n• Required additional agent support',
      'Improved Results (Week 4+) ✅:\n• Accuracy improved dramatically to 95%\n• Reduced onboarding time from 3 hours to 30 mins\n• Significantly decreased funnel drop-off rate',
      'Long-term Success 🚀:\n• Successfully scaled across UK and ANZ markets\n• Created foundation for 6-phase CVT dependency reduction\n• Improved driver supply in all pilot markets'
    ],
    lessons: [
      'Driver experience is just as important as backend automation - UX improvements significantly reduced document rejections',
      'Starting with a scrappy prototype gave us speed + confidence to scale',
      'Local document variance required continuous model tuning per geography',
      'Cross-functional collaboration (CVT, Ops, Supply, Engineering) was crucial for successful rollout'
    ]
  },
  {
    id: "zeta-devex",
    title: "👨‍💻 Code, Clarity, and Confidence: Elevating Developer Experience at Zeta",
    company: "Zeta Tech (Directi)",
    year: 2021,
    shortDescription: "Transformed Zeta's IAM platform developer experience, reducing Time to Hello World by 50% and significantly cutting support tickets.",
    situation: "🌍 Context\nZeta's Identity and Access Management (IAM) platform powers access for a wide range of enterprise products. As our platform scaled, the number of internal developers integrating with it also increased. However, the developer journey—from creating tokens to managing roles—was often unclear. Most of the feedback centered around a single issue: developers didn't know where to start or what to do next.\n\n🎯 Business Goal\nReduce support tickets and incidents related to IAM integrations by making the developer journey intuitive and well-documented.\n\n🎯 Product Objective\nImprove the developer experience (DevEx) with better documentation, simplified interfaces, and clear guidance—so developers can move faster with confidence.\n\n🎯 Key Result\n⏱️ Time to Hello World (TTHW) for Bot Token setup reduced by 50%.",
    steps: {
      research: [
        "Qualitative Discovery:\n• Traced developer journey end-to-end\n• Conducted 1:1 interviews with developers\n• Collected feedback from customer support teams\n• Identified key pain points:\n  → Token generation confusion\n  → Permission/scope discovery issues\n  → Integration testing challenges",
        "Quantitative Analysis:\n• Analyzed 40% of developer-reported issues\n• Identified key bottlenecks:\n  → Token-related issues (hours to resolve)\n  → Back-office complexity\n  → Outdated documentation",
        "Competitor Benchmarks:\n• Studied Okta, Ping, and Stripe\n• Identified best practices:\n  → Great documentation\n  → Sandbox environments\n  → Self-serve onboarding"
      ],
      strategy: [
        "Key Problems Identified:\n• Unclear API usage patterns\n• Overbuilt back-office UI\n• Low awareness of best practices",
        "User Personas:\n• Internal Developers building Zeta products\n• External Admins configuring IAM for teams",
        "Problem Prioritization:\n1. Developer Documentation Journey\n2. Back-office UX Simplification"
      ],
      development: [
        "Developer Documentation Pod:\n• Built intuitive API documentation\n• Created example-rich guides\n• Implemented sandbox instructions\n• Added inline testing via Postman",
        "Back-office Pod:\n• Redesigned token creation flow\n• Created guided role assignment\n• Added visual error cues\n• Simplified common use cases",
        "Testing & Launch:\n• Conducted UAT with internal teams\n• Created developer blogs\n• Hosted product demos\n• Organized Slack Q&A sessions"
      ]
    },
    impact: [
      "Time to Hello World reduced from hours to minutes",
      "Significant reduction in support tickets",
      "Improved developer satisfaction scores",
      "Faster GTM for new products"
    ],
    lessons: [
      "Developer experience is as crucial as user experience",
      "Documentation is a product, not an afterthought",
      "Sandbox environments accelerate adoption",
      "Visual guidance reduces cognitive load"
    ]
  },
  {
    id: 'leagueadd-data-roadmap',
    title: '📊 Scaling 0 to 1: Data-Driven Growth Hacking at LeagueAdda',
    company: 'LeagueAdda',
    year: '2018 - 2020',
    shortDescription: "Used business and product data to drive LeagueAdda's roadmap and growth as Business Head.",
    situation: 'As the Business Head of LeagueAdda, I was responsible for scaling the platform from 0 to 1. To do this, I built and maintained a comprehensive data dashboard that tracked business health, product metrics, and user engagement. This data-driven approach enabled me to align the product roadmap with business goals and respond quickly to market needs.',
    steps: {
      research: [
        'Collected and monitored key business metrics: user growth, retention, revenue, and engagement',
        'Tracked product usage data and user feedback to identify pain points and opportunities',
        'Benchmarked against competitors and industry standards to set ambitious but realistic targets'
      ],
      strategy: [
        'Defined business goals and mapped them to actionable product objectives',
        'Prioritized roadmap features based on data insights and business impact',
        'Aligned cross-functional teams (product, engineering, marketing) around data-driven priorities'
      ],
      development: [
        'Launched new features and product improvements based on roadmap priorities',
        'Iterated quickly using weekly data reviews and feedback loops',
        'Scaled the platform to support rapid user growth and new business models'
      ]
    },
    impact: [
      'Achieved significant user growth and improved retention rates',
      'Increased revenue and diversified business streams',
      'Built a culture of data-driven decision making across the team',
      'Enabled rapid iteration and alignment between business and product goals'
    ],
    lessons: [
      'Data is a powerful tool for aligning teams and driving business outcomes',
      'Continuous monitoring and iteration are key to scaling from 0 to 1',
      'A single source of truth accelerates decision making and transparency'
    ],
  }
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(project => project.id === id);
} 