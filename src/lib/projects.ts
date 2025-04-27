import { ProjectData } from '../components/ProjectTemplate';

export const projects: ProjectData[] = [
  {
    id: 'zalando-merchant-onboarding',
    title: '📈 3-Year Roadmap: Unlocking 10x Growth in the B2B Merchant Funnel at Zalando Logistics',
    company: 'Zalando SE',
    year: '2023 - Present',
    shortDescription: 'Led the strategic transformation of ZEOS\'s merchant platform to enable non-Zalando and DTC sellers, reducing onboarding time from XXX+ days to ~X days and unlocking hundreds of millions in potential revenue.',
    situation: 'At Zalando, Europe\'s leading fashion platform, I was entrusted with a transformative mission — 10x the merchant acquisition funnel for our Logistics-as-a-Service business, ZEOS.\n\nThe ambition was bold: expand beyond Zalando sellers to onboard external marketplace sellers and DTC brands at scale 🚀.\n\n🔍 The Starting Point: Breaking Through Systemic Barriers\n\nChallenges were steep:\n\n• Extremely slow onboarding — taking XXX+ days 🐢\n\n• No tech infrastructure to support non-Zalando merchants\n\n• Heavy dependence on costly, slow external integrators\n\nSuccess demanded a platform rethink, cross-functional orchestration, and disciplined, multi-year execution.\n\nNote: Marketplace names and figures mentioned here are fictionalized for confidentiality and illustrative purposes.',
    steps: {
      research: [
        'Spearheaded deep discovery workshops across Commercial, Legal, Operations, and Tech\n',
        'Segmented merchant types: marketplace sellers vs DTC brands\n',
        'Performed platform gap analysis to identify extensibility needs for non-Zalando onboarding\n',
        'Mapped integrator landscape (e.g., TradeLink, ChannelPro) and identified dependency bottlenecks\n'
      ],
      strategy: [
        'Consolidated findings into a comprehensive Requirements Document and PRFAQ\n',
        'Secured Senior Leadership Team (SLT) buy-in for a multi-year platform transformation\n',
        'Designed a phased 3-year roadmap aligned with merchant growth and revenue targets\n',
        'Built cross-functional governance and resourced two dedicated Engineering PODs\n'
      ],
      development: [
        'Year 1: Built Merchant Registration and Data Platform with standardized profiles\n',
        'Year 2: Extended platform for business data, logistics flows, and marketplace-specific SLAs, reducing onboarding time to ~X days\n',
        'Year 3: Launched Connector Strategy with direct integrations to ShopSphere, CommerceFlow, and SalesPlus\n',
        'Enabled merchant self-service onboarding, reducing dependency on external integrators and internal Ops resources\n',
        'Rolled out operational playbooks and automated validation processes to support scaling\n'
      ]
    },
    impact: [
      '10x increase in merchant acquisition funnel 📈\n',
      'Reduced onboarding time dramatically (from XXX+ days → ~X days) ⚡\n',
      'Unlocked hundreds of millions in potential incremental revenue for Zalando Logistics 💶\n',
      'Established a scalable, modular onboarding and logistics platform for multi-marketplace and DTC sellers\n'
    ],
    lessons: [
      'Think in Horizons: Balanced quick wins with long-term platform investments to keep momentum\n',
      'Cross-functional orchestration wins: Success depended on tight collaboration across Tech, Commercial, Legal, and Ops\n',
      'Clarity is critical: Clear and constant communication kept a multi-year, cross-team effort on track\n',
      'Invest early in extensibility: Strong data models and architecture choices prevented painful future rebuilds\n'
    ]
  },
  {
    id: 'zalando-partner-platform',
    title: '🚀 Building a Scalable Partner Platform: 0 to 1 Journey Inside a Listed Company',
    company: 'Zalando SE',
    year: '2022 - 2023',
    shortDescription: 'Led the design and launch of a scalable Partner Platform to onboard merchants across multiple marketplaces and DTC channels, reducing activation time from weeks to less than a day and enabling exponential merchant growth.',
    situation: 'When I joined Zalando, Europe\'s leading fashion marketplace, I was tasked with scaling a bold new ambition — scaling the merchant onboarding for Zalando\'s logistics branded as Zeos, helping to build Europe\'s leading logistics-as-a-service.\n\nThe mission was clear: help merchants sell not just on Zalando, but across multiple external marketplaces and own-ecommerce platforms using ZEOS, and do it at scale.\n\nThe first thing I noticed? We were onboarding just one merchant per month.\nDigging deeper, the reasons became clear:\n\nThe onboarding process was entirely manual 🧾\n\nNo clear platform or tech infrastructure existed to support scaling ⚙️\n\nTeams worked in silos, without shared domain models or reusable interfaces 🚧\n\nYet, the business goals were ambitious: X merchants in 2023 → XX in 2024 → XXX in 2025, driven by new markets, non-Zalando merchant onboarding, and expanding external marketplace presence 🌍.\n\nIt was clear — a full platform rethink was necessary.\n\nNote: Marketplace names and figures mentioned here are fictionalized for confidentiality and illustrative purposes.',
    steps: {
      research: [
        'Conducted deep discovery interviews with Operations, Commercial, Strategy, and Tech teams\n',
        'Benchmarked logistics players\' onboarding models to identify competitive gaps\n',
        'Identified core building blocks: Business Profile Management, Marketplace/Warehouse/Carrier Configuration, Customization Interfaces\n',
        'Defined platform interfaces: APIs, Backoffice tools, and Merchant Self-service flows\n'
      ],
      strategy: [
        'Documented a clear Product Strategy detailing platform vision, components, and phased roadmap\n',
        'Collaborated with Engineering, Operations, and Commercial teams to design scalable system architecture\n',
        'Secured Senior Leadership Team (SLT) buy-in to shift from manual Ops to a product-led onboarding model\n',
        'Prioritized platformization over one-off feature delivery, aligning with merchant acquisition and activation goals\n'
      ],
      development: [
        'Built internal operational tools to scale without proportional headcount increases\n',
        'Launched APIs for merchant onboarding, integrators, and internal domain teams\n',
        'Rolled out self-service onboarding interfaces to minimize Ops involvement\n',
        'Enabled multi-marketplace onboarding flows and cross-country expansion readiness\n'
      ]
    },
    impact: [
      'Scaled merchant onboarding capacity multi-fold 📈\n',
      'Reduced activation time from weeks to less than a day ⏱️\n',
      'Significantly reduced manual Ops handovers, freeing up teams for complex cases 🔧\n',
      'Established a scalable Partner Platform foundation for multi-marketplace and DTC merchant launches\n'
    ],
    lessons: [
      'Operate in Ambiguity: Clarity-seeking was essential across new domains and markets\n',
      'Cross-functional Collaboration Wins: Deep partnerships across Tech, Ops, and Commercial were critical\n',
      'Think Platform-First: Scaling success was driven by extensibility, reusability, and evolution, not just feature delivery\n'
    ]
  },
  {
    id: 'zeta-change-management',
    title: '🔧 Change Management at Zeta: Aligning Teams to Drive Strategic Customer Goals',
    company: 'Zeta Tech (Directi)',
    year: "2022 - 2023",
    shortDescription: 'Led organizational restructuring and platform strategy transformation that accelerated delivery timelines by several months while optimizing banking operations platform to meet enterprise customer requirements.',
    situation: 'At Zeta, a leading banking tech platform, I was tasked with a critical mission — optimize our operational platform to meet the strategic needs of a key banking customer.\n\nThe challenge? Our Solutions Teams and Platform Teams were misaligned, pulling in different directions.\n\n🔍 The Starting Point: A Disconnect Between Platform and Customer Needs\n\nWhen I stepped into the situation, it was clear:\n\n• The customer demanded a single ops platform for credit, debit, prepaid, and UPI transactions 🏦\n\n• The Platform team was building generic workflows, not tailored to complex banking requirements 🏗️\n\n• Solutions teams were stuck, unable to move fast without deep platform support ⚙️\n\nThis misalignment threatened our ability to deliver and scale.',
    steps: {
      research: [
        'Conducted deep dives with the customer to map real-world operational needs',
        'Understood the competitive landscape of workflow management for banks',
        'Analyzed team structure inefficiencies and identified root causes of misalignment',
        'Mapped cross-functional dependencies between solutions delivery and platform engineering teams',
        'Evaluated competing organizational models for financial technology platform development'
      ],
      strategy: [
        'Developed dual-track approach: tactical quick wins through POD model while planning strategic organizational redesign',
        'Crafted detailed business case for senior leadership showing ROI of banking-specific platform capabilities',
        'Designed new organizational structure with clear separation between platform engineering and customer delivery teams',
        'Created transition roadmap with specific milestones and success metrics'
      ],
      development: [
        'Formed a small, agile POD — engineers, a solutions architect, and a delivery lead',
        'Laser-focused the POD on delivering key use cases, showing quick wins to both customer and internal teams 🚀',
        'Created two tracks with clear ownership',
        'Appointed 3 PMs — each aligned to specific business and long-term platform goals',
        'Looped in VP early, ensuring executive sponsorship',
        'Communicated transparently with affected teams, explaining "why" the change was needed',
        'Focused on collaboration, not blame — resetting goals and rhythms across teams'
      ]
    },
    impact: [
      'Increased speed of customer delivery — critical workflows were rolled out months faster',
      'Improved platform quality, tailor-made for the banking domain',
      'Enhanced internal clarity and morale — people knew their focus areas and growth paths'
    ],
    lessons: [
      'Do what is right, fearlessly: If the structure is wrong, fix it — even if it\'s uncomfortable',
      'Change needs sponsorship: I succeeded because I involved leadership early and often',
      'Reflect, but don\'t self-blame: In retro, I realized I could have trusted my instincts sooner and stressed less'
    ]
  },
  {
    id: 'zeta-iam-strategy',
    title: '🛡️ Zeta IAM: Rebuilding Trust and Clarity with a Long-Term Strategy',
    company: 'Zeta Tech (Directi)',
    year: '2022 - 2023',
    shortDescription: 'Unified the organization with a long-term IAM strategy paper, realigning teams, clarifying customer focus, and setting a new north star for platform success.',
    situation: 'The organization was at a crossroads. Priorities kept shifting, teams were siloed, and employee engagement was dropping. I recognized the urgent need for clarity and trust, deciding to create a comprehensive Strategy Paper to realign everyone and the leadership thereby set a course for success.',
    steps: {
      research: [
        'Conducted internal listening tours to uncover confusion, lack of vision, and cross-team misalignment.',
        'Analyzed customer segmentation and market learnings to identify the most scalable and profitable focus.',
        'Benchmarked against previous years\' CIAM/EIAM strategies and roadmaps.'
      ],
      strategy: [
        'Framed the Strategy Paper to answer: What should our new focus be, and how do we organize to deliver impact?',
        'Structured the paper into clear sections: Objective, Customer, Current Strategy, Assumptions, Team Realignment, Specialized Strategies, Programs, and North Stars.',
        'Defined a single platform as the core product, with all other products as enablers.',
        'Set clear short-term and long-term goals, with a focus on large banks and platform success metrics.'
      ],
      development: [
        'Broke down specialized strategies for CIAM/EIAM, KMS, and ACS, each with clear priorities and north stars.',
        'Created a detailed table of strategic programs, owners, and managers, all aligned to measurable north stars.',
        'Established a common prioritization model (P1–P4) and regular cross-team ceremonies for roadmap alignment.',
        'Presented the Strategy Paper in a company-wide meeting, restoring clarity, motivation, and shared purpose.'
      ]
    },
    impact: [
      'Unified the organization around a clear customer and product focus.',
      'Established a single, cross-team roadmap and shared OKRs.',
      'Improved employee engagement and trust in leadership.',
      'Accelerated platform execution and collaboration across teams.',
      'Set measurable north stars for CIAM/EIAM, KMS, and ACS.'
    ],
    lessons: [
      'A clear, shared strategy is the foundation for execution and morale.',
      'Regular cross-team alignment prevents silos and confusion.',
      'Focusing on the right customer segment unlocks scalable growth.',
      'Strategy is not just a document—it\'s a catalyst for cultural change.'
    ],
    strategyPaper: 'strategy/zeta-iam-strategy.md'
  },
  {
    id: 'zeta-identity',
    title: '🔐 From Tickets to Trust: Launching a Self-Serve Identity Platform at Zeta',
    company: 'Zeta Tech (Directi)',
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
    id: 'ola-digitization',
    title: '🚗 Ola Document Digitization: Scaling AI to Onboard Millions of Drivers',
    company: 'Ola Cabs',
    year: "2020 - 2021",
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
      'Cross-functional collaboration (CVT, Ops, Supply, Data Science, Engineering) was crucial for successful rollout'
    ]
  },
  {
    id: 'leagueadd-data-roadmap',
    title: '📊 Scaling 0 to 10: Data-Driven Growth Hacking at LeagueAdda',
    company: 'LeagueAdda',
    year: '2018 - 2020',
    shortDescription: "Used business and product data to drive LeagueAdda's roadmap and growth as Business Head.",
    situation: 'As the Business Head of LeagueAdda, I was responsible for scaling our fantasy sports platform from 0 to 10. To achieve this ambitious goal, I built and maintained a comprehensive data dashboard that tracked business health, product metrics, and user engagement across our sports gaming application. This data-driven approach enabled me to align the product roadmap with business goals and respond quickly to market needs in the competitive fantasy sports industry.',
    steps: {
      research: [
        'Collected and monitored key fantasy sports business metrics: user growth, player retention rates, gaming revenue, and match engagement',
        'Tracked product usage data and user feedback to identify pain points and opportunities in the fantasy gaming experience',
        'Benchmarked against fantasy sports competitors and industry standards to set ambitious but realistic targets for growth'
      ],
      strategy: [
        'Defined business goals and mapped them to actionable product objectives for our fantasy sports platform',
        'Prioritized roadmap features based on data insights and business impact across user segments',
        'Aligned cross-functional teams (product, engineering, marketing) around data-driven priorities for platform growth'
      ],
      development: [
        'Launched new fantasy sports features and product improvements based on roadmap priorities and user feedback',
        'Iterated quickly using weekly data reviews and feedback loops from gaming sessions',
        'Scaled the platform infrastructure to support rapid user growth and new fantasy sports contests'
      ]
    },
    impact: [
      'Achieved significant user growth and improved retention rates across fantasy sports segments',
      'Increased gaming revenue and diversified business streams through new contest formats',
      'Built a culture of data-driven decision making across the fantasy sports platform team',
      'Enabled rapid iteration and alignment between business metrics and product development goals'
    ],
    lessons: [
      'Data analytics is a powerful tool for aligning teams and driving business outcomes in fantasy sports',
      'Continuous monitoring and iteration are key to scaling from 0 to 10 in a competitive gaming market',
      'A single source of truth accelerates decision making and transparency for product roadmapping'
    ],
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(project => project.id === id);
} 