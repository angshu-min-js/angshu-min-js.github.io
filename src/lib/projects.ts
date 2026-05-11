import { ProjectData } from '../components/ProjectTemplate';

export const projects: ProjectData[] = [
  {
    id: 'german-with-nik',
    title: '🎓 German with Nik: Real world application of Gen AI',
    company: 'Qloud AI',
    year: '2024 - 2025',
    shortDescription: 'A mobile app offering personalized, voice-based German language learning through an AI assistant named Nik, making real-time conversational learning accessible and affordable.',
    situation: `Personal product built over ~2 years. Motivation: First-hand immigrant experience in Germany. Goal: Learn GenAI by building real systems, not experiments.\n\nSituation / Problem: Language learning tools failed for conversational fluency because:\n• No real-time feedback\n• No safe space to practice speaking\n• Fixed schedules with teachers\n• High cognitive load switching between text and speech`,
    steps: {
      research: [
        'Validated problem via Reddit threads, Immigrant communities, and Personal network\n',
        'Found a clear pattern: people wanted low-pressure speaking practice on demand\n',
        'Conducted market analysis showing coaching costs of €100–€200+ per month\n'
      ],
      strategy: [
        'Defined a clear wedge: Voice-first, conversational practice with immediate feedback\n',
        'Established constraints: Low latency, Low cost, Grounded grammar (avoid hallucinations), Natural UX\n',
        'Defined User Persona: Highly motivated language learners seeking affordable, interactive experiences\n',
        'Established Monetization model: Free trial + Subscription (Monthly/Yearly)\n'
      ],
      development: [
        'Mapped the user journey to design the overall experience\n',
        'Iteration 1: Built a full flow without AI to validate UX, then integrated ChatGPT for responses\n',
        'Iteration 2: Introduced system persona (“Nik”), added conversational memory window, and tuned prompts for corrective feedback\n',
        'Iteration 3: Tested multiple models to reduce cost while maintaining quality\n',
        'Iteration 4: Moved to backend workflow: Voice → Text → LLM → Speech to reduce latency and cost significantly\n',
        'Iteration 5: Introduced RAG to ground grammar rules, added analytics, and performed manual evals to assess response quality\n'
      ]
    },
    impact: [
      'Used by hundreds of users with strong qualitative feedback on confidence and ease of practice\n',
      'Achieved 85% download to install conversion rate and 35% trial to paid conversion\n',
      'Maintained 40% 30-day retention rate and established profitable economics (€10 monthly revenue per user vs €2 cost)\n',
      'Optimized system performance with 2.5 sec overall latency\n',
      'Deep hands-on learning across UX for GenAI, Context design, Model trade-offs, Cost vs quality decisions, and Evaluation challenges\n'
    ],
    lessons: [
      'GenAI UX ≠ chat UI: Voice-first interfaces require different paradigms.\n',
      'Context matters: Context and memory matter more than raw intelligence.\n',
      'Evaluation: Evaluation is the hardest unsolved problem in GenAI.\n',
      'Production GenAI: It is systems engineering + product judgment.\n',
      'Latency optimization is critical for conversational applications\n',
      'Free trial model works effectively for educational apps with clear value proposition\n'
    ]
  },
  {
    id: 'zeos-genai-docs',
    title: '🤖 GenAI Internal Support Automation',
    company: 'Zalando SE',
    year: '2025 - Present',
    shortDescription: 'Introduced a GenAI-powered documentation and support system that reduced engineering support load by 40% and improved team productivity by ~20%.',
    situation: `Context: Zalando’s B2B Business → Zeos → Logistics as a Service → Partner Management. As Founder PM for Partner Management (strategy → roadmap → execution), we launched many platform capabilities for different user personas. As part of our domains strategy, one of the tenets was Intelligences with sub-goals: P&E Productivity, Platform Intelligence, and Experimentations.\n\nSituation / Problem: As the Zeos partner platform scaled, engineering faced a critical bottleneck where support load grew linearly with adoption, creating a "hidden tax" on productivity. Analysis revealed that ~40% of tickets were preventable if better documentation and easy access existed. This led to slower delivery speeds and developer frustration.`,
    steps: {
      research: [
        'Analyzed support data: "Which API / where is X documented?", "What’s the schema/table / config?", "How to use the tool?", "Is this possible?"\n',
        'Found ~40% of tickets were preventable through better documentation and self-serve access\n',
        'Validated problem using genesis public chat analysis and support data from Aug-Sep 2025\n'
      ],
      strategy: [
        'Framed the solution as a 3-layer intelligence system: Single source of truth, Automated knowledge generation, and Conversational access\n',
        'Aligned directly with platform tenets and justified investment via a Product Strategy & Execution Brief\n',
        'Decided on VS Code with Copilot + Prompts for the MVP to balance low complexity and high immediate impact\n'
      ],
      development: [
        'Layer 1: Automated Documentation (Foundation) — Created a "Zero-to-Doc" pipeline using GenAI prompts to ingest PRDs and System Designs\n',
        'Auto-generated standardized Markdown documentation for Zalando\'s tech CMS\n',
        'Layer 2: L0 Support Agent (The Interface) — Built an "Always-on" Support Agent embedded in Google Chat\n',
        'Implemented a RAG (Retrieval-Augmented Generation) pipeline powered by Claude to answer questions contextually\n',
        'Next Step: Layer 3 Agentic Operations — Integrating MCP with Jira and Zeos APIs to enable the agent to act (Get-Read-Write) and fetch real-time data directly in the chat\n'
      ]
    },
    impact: [
      'Reduced engineering time spent writing docs from weeks to ~10 minutes per feature\n',
      'The bot handled 20% of support requests autonomously, intercepting common queries\n',
      'Overall: Reduced engineering support load by 40%\n',
      'Overall: Improved team productivity by ~20%\n'
    ],
    lessons: [
      'Context Design: GenAI success depends more on context design than model choice.\n',
      'Product Discipline: High-leverage GenAI requires product discipline, not hacks.\n',
      'Culture: You need teams comfortable with experimentation and iteration.\n',
      'Motto: Open to fail, fly high, dive deep.\n'
    ]
  },

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
    situation: `🧠 Context: Zeta's IAM platform powers access for multiple internal and external product suites. Identity changes and access requests were common — but relied on tenant admins and manual backoffice workflows, creating friction and ticket overhead.

🎯 Goal:
Make access and identity self-serviceable for all users — employees, customers, partners — without depending on support or tenant admins reducing the manual support and tickets.

📊 Business Impact
\n• Reduce support ticket volume related to access issues
\n• Improve resolution time by 100% (i.e., eliminate ticket dependency)
\n• Create a table-stakes experience comparable to industry leaders (Okta, Ping)

🔍 Discovery
Traced user journeys:
\n• User logs in → Hits access block → Doesn't know why or whom to contact → Raises a support ticket
\n• Tenant admins had to log into backoffice, find the user, and manually update access
\n• Ticket aging: Avg 2–5 days → Created productivity loss & poor experience
\n• Conducted customer interviews (internal & external)

🤯 Core Problems
\n• Users didn't know what roles/access they had
\n• No visibility on how to request access
\n• No standard identity view → led to duplicated or incorrect identities
\n• Tenant admins were overburdened with repetitive access requests`,
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
    situation: '🧠 Context\nAs Ola expanded globally (UK, Australia, NZ), onboarding supply (drivers) quickly and compliantly became a critical problem.\n\nManual document checks caused high onboarding times (3 hours), driver drop-offs (~30%), and compliance risks — all slowing international expansion.\n\n🎯 Goal\n\n• Reduce onboarding turnaround time from 3 hours to 30 mins (90% reduction)\n\n• Improve funnel conversion and compliance via AI-driven document digitization\n\n• Support CEO\'s $1B revenue ambition by scaling driver supply rapidly\n\n📊 Business Impact\n\n• Unlock new international revenue streams through accelerated driver acquisition\n\n• Boost CVT agent productivity and reduce headcount dependency across 6 rollout phases\n\n• Strengthen compliance processes through standardized digitization\n\n🔍 Discovery\n\n• Mapped onboarding journey: Driver App → CVT Manual Review → Quality Checks → Driver Feedback\n\n• Funnel analysis → 30% driver drop-off traced to poor document feedback\n\n• Supplemented findings with customer call recordings and CVT agent interviews\n\n🤯 Core Problems\n\n• Drivers didn\'t understand document rejection reasons\n\n• High turnaround time (TAT) caused many drivers to abandon the onboarding process\n\n• Manual CVT review created inconsistencies and wasn\'t scalable across global markets\n\n• Compliance requirements demanded standardized digitization and automation',
    steps: {
      research: [
        'Mapped onboarding journey to identify critical drop-off points (30% abandonment rate)',
        'Analyzed call recordings and interviewed CVT agents to uncover document rejection root causes',
        'Evaluated build vs buy for document digitization → decided on in-house solution (2Y ROI: 40% savings, better extensibility, stronger data privacy)',
        'Created early validation tests using Indian historical data to prove classification and extraction effectiveness'
      ],
      strategy: [
        'Designed phased market rollout: London (structured documents) → ANZ → Global markets',
        'Prioritized dual-track approach: reducing CVT agent dependency while building seamless self-serve driver experience',
        'Established north-star metric: Driver onboarding turnaround time reduction (3 hours → 30 mins)',
        'Secured stakeholder alignment through interactive demos, clear metrics, and business case (operational savings, scale enablement)'
      ],
      development: [
        'Built Core OCR Platform:\n\n• Implemented blur detection using Fast Fourier Transform (FFT)\n\n• Created adaptive image quality checks via RGB channel thresholds\n\n• Designed confidence-based auto-accept/reject decision matrix',
        'Developed Document Classification System:\n\n• Implemented VGG19-based neural network to identify 15+ document types across markets\n\n• Created market-specific training datasets to handle regional document variations',
        'Engineered OCR Extraction Pipeline:\n\n• Integrated Azure Cognitive Services for text extraction\n\n• Built custom regex-based field extractors to map compliance requirements\n\n• Created validation rules for document field verification',
        'Enhanced Driver App Experience:\n\n• Added real-time visual feedback during document capture (green/red indicators)\n\n• Redesigned first-time upload flow with clear instructions to minimize rejections\n\n• Optimized camera capture for better document quality',
        'Created rapid prototype using Django + Azure Cognitive Services that demonstrated 70% of target value with minimal engineering effort, securing leadership buy-in'
      ]
    },
    impact: [
      'Initial Deployment (Week 1) ⚠️:\n\n• Achieved 70% digitization accuracy\n\n• Experienced 10% increase in CVT rework due to misclassifications\n\n• Required additional agent verification as safety net',
      'Optimized Solution (Week 4) ✅:\n\n• Improved accuracy from 70% to 95% through model tuning and feedback loops\n\n• Reduced onboarding time from 3 hours to 2 hours (33% ⬇️) and eventually to 30 mins (90% ⬇️)\n\n• Decreased funnel drop-offs by 15%, directly increasing driver acquisition',
      'Long-term Outcomes 🚀:\n\n• Successfully scaled across UK, Australia and New Zealand markets\n\n• Implemented 6-phase CVT transformation roadmap, reducing operational costs by 40%\n\n• Created foundation for fully automated compliance checks\n\n• Enabled rapid market expansion by removing supply-side bottlenecks'
    ],
    lessons: [
      'Driver experience optimization is equally important as backend automation — visual cues and simplified flows increased first-attempt success by 35%',
      'Starting with a rapid prototype accelerated stakeholder buy-in and allowed for early validation before significant engineering investment',
      'Geographic document variations required market-specific model tuning and continuous improvement cycles',
      'Cross-functional collaboration across CVT, Operations, Supply, Data Science and Engineering teams was essential for navigating complex stakeholder requirements',
      'AI/ML solutions benefit from human-in-the-loop designs initially, allowing for progressive automation as confidence increases'
    ],
    projectDocuments: 'https://drive.google.com/drive/folders/1Ji4X4JpqoJLutWntJK3wOaFe-gcGYaRD?usp=sharing'
  },
  {
    id: 'leagueadd-data-roadmap',
    title: '📊 Scaling 0 to 10: Data-Driven Growth Hacking at LeagueAdda',
    company: 'LeagueAdda',
    year: '2018 - 2020',
    shortDescription: "Used business and product data to drive LeagueAdda\'s roadmap and growth as Business Head.",
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
    ]
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(project => project.id === id);
} 