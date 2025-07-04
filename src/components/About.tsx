import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Calendar, Clock } from "lucide-react"; // Import icons for the accordion
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { projects } from '../lib/projects';
import { fetchMediumArticles, Article } from '../lib/articles';

// Define RoleType
type RoleType = 'Individual Contributor' | 'Product People Manager' | 'General Manager' | 'Agent Manager';

// Updated experience data based on resume
const experience = [
  {
    role: "Product Lead, Partner Management and Shop Connectors",
    roleType: 'Individual Contributor' as RoleType, // Managing product areas/teams
    company: "Zalando SE",
    website: "https://www.zalando.de/",
    logoUrl: "https://logo.clearbit.com/zalando.de", // Keep existing or verify
    years: "Mar 2023 – Present", // Updated format
    summary: "Spearheading B2B partner management and e-commerce integrations, driving significant growth.",
    paragraphs: [
      "Spearheading two core product areas for Zalando's B2B business (Zeos): Partner Management and E-Commerce Shop Integrations (Shopify, Salesforce, Scayle, etc.).",
      "Achieved outcomes including 99% faster onboarding, 10x market expansion, and 70% D2C market penetration, contributing to over €XXX Mn in revenue.",
      "Defined and executed a multi-year platform strategy, translating complex operational needs into scalable product roadmaps, securing endorsements from Senior Leadership.",
      "Driving cross-functional collaboration across Design, Engineering, Data, Commercial, Operations, Legal, Channel & Markets, Domain Teams, and Finance.",
      "Managing the platform's Onboarding & Connector Self-Service, API Services, Dev Documentation, and Back-Offices.",
      "Coaching product teams on using Gen AI for productivity and innovation."
    ],
    skills: ["B2B Product Strategy", "Platform Strategy", "Partner Experience", "API Ecosystems", "E-commerce Integrations", "Cross-functional Leadership", "Roadmapping", "Gen AI Application", "Self-Service Platforms"]
  },
  {
    role: "Full Stack Product Manager, Agentic Systems",
    roleType: 'Agent Manager' as RoleType, // Personal projects, building
    company: "Qloud AI (Personal Projects)", // Changed company name for clarity
    website: "https://qloudai.app", 
    logoUrl: "https://qloudai.app/assets/avatar.png", // Keeping Qloud AI avatar for now
    years: "2024–Present",
    summary: "Designing and orchestrating autonomous LLM-based systems to automate and scale digital workflows. Blending product, engineering, and AI agent ops.",
    paragraphs: [
      "I am passionate about Gen AI - actively prototyping and shipping tools:",
      '<a href="https://productbuilders.xyz" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Product Builders</a>: A community and knowledge hub for building and scaling digital products using AI agents.',
      '<a href="https://germanwithnik.com/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">German with Nik</a>: A voice-based LLM tutor designed to help users practice and learn spoken German.', // Placeholder URL
      '<a href="https://captionsgpt.site/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Captions GPT</a>: A multi-modal agent that helps social media users generate captions for videos and images.' // Placeholder URL
    ],
    skills: ["Gen AI", "LLMs", "Voice Interfaces", "Multi-modal Agents", "Rapid Prototyping", "Community Building", "Product Innovation"]
  },
  {
    role: "Product Lead, Identity, Access, and Workflow Mgmt.",
    roleType: 'Product People Manager' as RoleType, // Managed a team of 3 PMs
    company: "Zeta Tech (Directi)",
    website: "https://www.zeta.tech/",
    logoUrl: "https://logo.clearbit.com/zeta.tech", // Keep existing or verify
    years: "2021–2023",
    summary: "Led Identity & Workflow platforms at BaaS unicorn, scaling to 30M+ identities & enabling XX Mn ARR (10x revenue growth).",
    paragraphs: [
      "Zeta, is a Banking-as-a-Service (BaaS) unicorn where I led two charters - Identity and Access Management (took from introduction to matured steady-state ~ on track to serve 30 mn+ identities) & Operation Management (operationalised Zeta's multi-stack banking offerings ~ on track for 10X revenue growth).",
      "Defined and owned the product strategy, long-term roadmap, and quarter-wise OKRs for both and directly managed a team of 3 PMs, each owning a specific product objective (pillar). I moved out as I wanted to explore the culture outside India, especially in Germany."
    ],
    skills: ["Identity & Access Management (IAM)", "Workflow Automation", "Banking-as-a-Service (BaaS)", "API Platforms", "Mobile SDKs", "People Management", "Team Leadership", "Fintech", "Global Product Scaling", "Developer Experience"]
  },
  {
    role: "Senior Product Manager, Driver Onboarding",
    roleType: 'Product People Manager' as RoleType, // Led project, focus on individual contribution
    company: "Ola Cabs",
    website: "https://www.olacabs.com/",
    logoUrl: "https://logo.clearbit.com/olacabs.com", // Keep existing or verify
    years: "2020–2021",
    summary: "Launched AI/ML platform reducing driver verification time by 76% and costs by 50%.",
    paragraphs: [
      "During my short stint at Ola, I had the opportunity to lead the company's largest full-scale data science and machine learning project. I spearheaded the launch of an OCR (optical character recognition) platform for document digitization and verification, digitising the onboarding flow for approximately 2mn drivers (India, UK, and NZ). The platform was designed to reduce the cost of CVT (customer verification and validation) by 50%, resulting in significant cost savings for the company.",
      "It was an exciting and challenging project, but I was passionate about the potential impact it could have on the company and its customers. With a talented team at my side, we worked tirelessly to develop and launch the platform, leveraging the latest advances in AI and machine learning technology.",
      "Unfortunately, Ola decided to change their work schedule and make Saturdays a regular working day. As I was also pursuing an MBA at the prestigious Indian School of Business (ISB), I found it challenging to balance both commitments. After careful consideration, I decided to step down from my role at Ola. Although it was a difficult decision to leave such an exciting project, I knew that pursuing my MBA would help me grow both personally and professionally."
    ],
    skills: ["AI/ML Product Management", "OCR Technology", "Process Automation", "Cost Reduction", "Compliance Management", "Rule Engines", "Global Rollout", "Mobility Tech"]
  },
  {
    role: "Co-founder (CPTO) / Head of Product / Consultant",
    roleType: 'General Manager' as RoleType, // Head of Product implies managing product/team
    company: "Early Stage Startups",
    website: "https://angshumangupta.com/",
    logoUrl: "/CL_logo_TM.png",
    years: "2014–2020",
    summary: "Founded Craftloom.com, scaled gaming products to 1.5M users & $3M ARR, consulted for AI SaaS.",
    paragraphs: [
      "After leaving my position at TCS, I went through a period of soul-searching until I finally found my true calling. Along with a group of friends, I co-founded Craftloom.com, an online platform for handmade products. We were motivated by the plight of the many craftsmen and weavers in India who struggled to make a living due to middlemen who siphoned away their profits. Our goal was to provide these artisans with a direct line to customers and help them earn a fair wage for their work.",
      "Sadly, in 2016, the Indian government's sudden demonetization policy left us unable to sustain our business. Despite our best efforts, we had to make the difficult decision to shut down Craftloom. Following this setback, I shifted gears and started consulting for startups, including Qwikspec, a real estate monitoring SaaS.",
      "Eventually, I joined Wipro's startup team, DeltaVerge, where I played an instrumental role in launching and acquiring four large APAC enterprises. This was a particularly exciting project because it was Wipro's first foray into the SaaS industry. After Wipro, I was presented with an opportunity to head a gaming startup that had been acquired and funded by Delta Corp. In this role, I was able to experiment in ways that I couldn't with Craftloom. I served as the head of Product for two games, Leagueadda.com/Halaplay.com (Daily Fantasy Sports) & Adda52Rummy.com (Rummy), and scaled them to an aggregated user base of 1.5 mn and 3 mn USD ARR.",
      "Unfortunately, Delta eventually decided to sell off the games, and I exited the company. I then began consulting for a few startups, including Impact Analytics, an AI-based retail SaaS, and Beecho, a hyperlocal platform. At Impact Analytics, I launched intelligence-driven retail SaaS products to optimize assortments and inventory allocations for large retailers like Belk, PUMA, and PVH in the US. At Beecho, I helped define the MVP and conducted the first user testing before the onset of COVID-19 forced us to shut down our dreams."
    ],
    skills: ["Entrepreneurship", "Start-up Leadership (0-10)", "Real Money Gaming", "Fantasy Sports", "E-commerce Marketplace", "SaaS Product Management", "AI Consulting", "Retail Analytics", "Inventory Management", "Enterprise SaaS"]
  },
  {
    role: "Software Engineer / Product Manager (Infrastructure)",
    roleType: 'Team Leader' as RoleType, // Early roles + infra PM focused on tool
    company: "Tata Consultancy Services (TCS)",
    website: "https://www.tcs.com/",
    logoUrl: "https://logo.clearbit.com/tcs.com", // Keep existing or verify
    years: "2012–2014",
    summary: "Transitioned from software development to an Infrastructure Product Manager role.",
    paragraphs: [
      "I began my career at TCS and took on a variety of roles, starting as a Java developer and then moving into QA testing. As I gained experience, I became a subject matter expert for an infrastructure tool, which allowed me to provide valuable insights and guidance to the team.",
      "This last role was similar to that of a product manager for an infrastructure tool. I worked closely with L0 agents to monitor and assess the performance of the infrastructure, gathering their feedback and translating it into actionable improvements for the tool.",
      "Through my diverse experience and expertise in the infrastructure tool, I was able to contribute to the success of the team and help drive meaningful improvements to the tools we were using."
    ],
    skills: ["Infrastructure Product Management", "Software Development (Java)", "QA Testing", "Subject Matter Expertise", "Unix Based Systems", "Ubuntu"]
  },
];

// Function to get badge styles based on role type
const getRoleTypeBadgeStyle = (roleType: RoleType) => {
  switch (roleType) {
    case 'Individual Contributor':
      return 'bg-blue-100 text-blue-800';
    case 'Product People Manager':
      return 'bg-green-100 text-green-800';
    case 'General Manager': // Added case, though not used currently
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Read tab from query param on mount
  const params = new URLSearchParams(location.search);
  const initialTab = params.get('tab') || 'about';
  const [activeSection, setActiveSection] = useState<string>(initialTab);
  // State for tracking which portfolio project is expanded
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  // Add state to track image loading errors
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  
  // State for articles
  const [articles, setArticles] = useState<Article[]>([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [articlesError, setArticlesError] = useState<string | null>(null);
  
  const handleImageError = (company: string) => {
    setImageErrors(prev => ({...prev, [company]: true}));
  };

  // Function to toggle expanded project
  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Placeholder URLs - Replace with actual URLs if found
  const isbLogoUrl = "https://logo.clearbit.com/isb.edu"; // Example, verify
  const kiitLogoUrl = "https://logo.clearbit.com/kiit.ac.in"; // Example, verify

  // Fetch articles when articles tab is accessed
  useEffect(() => {
    if (activeSection === 'articles' && articles.length === 0 && !articlesLoading) {
      setArticlesLoading(true);
      setArticlesError(null);
      fetchMediumArticles()
        .then(fetchedArticles => {
          setArticles(fetchedArticles);
        })
        .catch(error => {
          setArticlesError('Failed to load articles');
          console.error('Error fetching articles:', error);
        })
        .finally(() => {
          setArticlesLoading(false);
        });
    }
  }, [activeSection, articles.length, articlesLoading]);

  // Update URL when activeSection changes
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (activeSection !== params.get('tab')) {
      params.set('tab', activeSection);
      navigate({ search: params.toString() }, { replace: true });
    }
    // eslint-disable-next-line
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">👋 Hello World!</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm Angshuman Gupta — a product leader with a passion for building and scaling global products. My journey began not in a boardroom or a business school, but in a small room with a desktop PC and a deep curiosity for how things worked.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-playfair text-xl font-semibold mb-3 text-primary">🚀 The Early Days</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I wrote my first lines of code at the age of 10, built computer games, and customized game installations for my friends. That early fascination with technology has never left me. Even as I pursued Mechanical and Aerospace Engineering — and founded the Aeronautical Society in college — I always found myself drawn to solving problems through technology.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-playfair text-xl font-semibold mb-3 text-primary">💡 Entrepreneurial Journey</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    My product journey started when I founded my first company, Craftloom — an eCommerce platform for handmade goods. It was my crash course in entrepreneurship, product-market fit, and resilience. After that, I joined a gaming startup and helped scale it to a million users. That gave me the 0-to-1-to-10 experience — building from scratch, iterating fast, and scaling with impact.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-playfair text-xl font-semibold mb-3 text-primary">🌍 Scaling Products</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Later, I brought that entrepreneurial mindset into scaled environments. At Ola, I worked on driver onboarding and built AI-powered platforms that reduced costs and improved activation speed. At Zeta, I led Identity and Access Management and built internal platforms that powered fintech at scale. Today, at Zalando, I lead B2B product initiatives, helping build Zeos — a logistics-as-a-service platform—from the ground up. It's a rare privilege to do 0-to-1 work inside a listed company.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-playfair text-xl font-semibold mb-3 text-primary">🤖 Beyond Work</h4>
                  <p 
                    className="text-gray-700 text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: 
                        'Outside of work, I\'m deeply bullish on Generative AI. I spend my free time tinkering, building small apps, and writing about the future of product building on <a href="https://productbuilders.xyz" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">productbuilders.xyz</a>. It\'s where I share what I learn, open-source ideas, and connect with others who love building as much as I do.'
                    }}
                  />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-playfair text-xl font-semibold mb-3 text-primary">👨‍👩‍👧 Personal Growth</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Most recently, I've stepped into a new role — that of a parent. Welcoming our daughter has been the most beautiful and grounding experience of my life. It's given everything — even product work — a deeper sense of meaning.
                  </p>
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                    I'm here to build, to learn, and to leave things better than I found them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "interests":
        return (
          <>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">🧠 Areas of Interest</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-1">
              <li>Onboarding</li>
              <li>Search</li>
              <li>Back Office</li>
              <li>Platform Building</li>
              <li>DevOps</li>
              <li>Mobile</li>
              <li>Web</li>
              <li>Data Analytics and Machine Learning</li>
              <li>Personalisation</li>
              <li>eCommerce</li>
              <li>SaaS</li>
              <li>User Experience</li>
              <li>Roadmapping</li>
              <li>Strategy</li>
            </ul>
          </>
        );
      case "expertise":
        return (
          <>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">🛠 Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 text-lg leading-relaxed">
              <div>
                <h4 className="font-semibold mb-1">Strategic & Leadership:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>Leadership</li>
                  <li>Strategy</li>
                  <li>People Management</li>
                  <li>Team Building</li>
                  <li>New Product Development</li>
                  <li>Developer Experience</li>
                  <li>Consumer Experience</li>
                  <li>Partner Experience</li>
                  <li>Driver Experience</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Platforms & Technical:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>Mobile (incl. SDK)</li>
                  <li>Web (incl. Libraries)</li>
                  <li>Cloud</li>
                  <li>APIs</li>
                  <li>Platforms & Ecosystems</li>
                  <li>Data Analysis & SQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">AI/ML & Gen AI:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>Machine/Deep Learning</li>
                  <li>Gen AI, LLMs, Multi-Modal Agents</li>
                  <li>TensorFlow, SkLearn, LangChain</li>
                  <li>ChatGPT, Claude, Gemini</li>
                  <li>Replicate, Hugging Face, Vercel</li>
                  <li>Bolt, Lovable, Cursor</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Tools & Languages:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>PM: Jira, Assembla, Aha, Miro</li>
                  <li>Prog: Python, Java, JS, etc</li>
                  <li>DB: MySQL, Mongo</li>
                  <li>Design: Balsamiq, Figma</li>
                  <li>Game Engine: Unity</li>
                </ul>
              </div>
            </div>
          </>
        );
      case "education":
        return (
          <>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">🎓 Education</h3>
            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <li className="flex items-center">
                {isbLogoUrl && !imageErrors['ISB'] && (
                  <img
                    src={isbLogoUrl}
                    alt="ISB logo"
                    className="h-6 w-6 mr-3 object-contain"
                    onError={() => handleImageError('ISB')}
                  />
                )}
                <div>
                  <p className="font-semibold">MBA (Finance) - PGPM for Working Professionals</p>
                  <p className="text-sm text-gray-500">Indian School of Business (ISB)</p>
                </div>
              </li>
              <li className="flex items-center">
                 {kiitLogoUrl && !imageErrors['KIIT'] && (
                   <img
                     src={kiitLogoUrl}
                     alt="KIIT logo"
                     className="h-6 w-6 mr-3 object-contain"
                     onError={() => handleImageError('KIIT')}
                   />
                 )}
                <div>
                  <p className="font-semibold">Bachelor's in Engineering</p>
                  <p className="text-sm text-gray-500">Kalinga Institute of Industrial Technology (KIIT)</p>
                </div>
              </li>
            </ul>
          </>
        );
      case "experiences":
        return (
          <>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">💼 Professional Experience</h3>
            <p className="text-gray-600 mb-6 italic">Building a career path focused on product innovation and leadership across diverse industries</p>
            <ul className="space-y-6">
              {experience.map((exp) => (
                <li key={exp.role + exp.company} className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-2 flex-wrap">
                    <div className="flex items-center flex-wrap mb-1 md:mb-0">
                      <h4 className="font-bold text-lg text-primary mr-2">{exp.role}</h4>
                      <span 
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getRoleTypeBadgeStyle(exp.roleType)}`}
                      >
                        {exp.roleType}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm text-right flex-shrink-0 w-full md:w-auto mt-1 md:mt-0">{exp.years}</span>
                  </div>
                  <div className="flex items-center text-gray-700 font-semibold mb-3">
                    {exp.logoUrl && !imageErrors[exp.company] && (
                      <img
                        src={exp.logoUrl}
                        alt={`${exp.company} logo`}
                        className="h-5 w-5 mr-2 object-contain"
                        onError={() => handleImageError(exp.company)}
                      />
                    )}
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </div>
                  <p className="text-gray-500 italic text-sm mb-3">{exp.summary}</p>
                  <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                    {exp.paragraphs.map((paragraph, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="pt-3">
                        <p className="text-xs uppercase font-semibold text-gray-500 mb-1">Key Skills & Competencies</p>
                        <div className="flex flex-wrap gap-1">
                          {exp.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">This experience reflects my journey as a product professional, from technical foundations to strategic leadership.</p>
            </div>
          </>
        );
      case "portfolio":
        return (
          <>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">📂 Product Journey Portfolio</h3>
            <p className="text-gray-600 mb-6 italic">A detailed look at key product initiatives I've led throughout my career</p>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-5">
                    <div>
                      <Link 
                        to={`/project/${project.id}?tab=portfolio`}
                        className="block hover:opacity-75 transition-opacity"
                      >
                        <h4 className="font-bold text-lg text-primary hover:text-accent">{project.title}</h4>
                        <div className="flex items-center text-gray-600 text-sm mt-1">
                          <span className="font-medium">{project.company}</span>
                          <span className="mx-2">•</span>
                          <span>{project.year}</span>
                        </div>
                        <p className="text-gray-500 mt-2">{project.shortDescription}</p>
                        <div className="mt-4 inline-flex items-center text-accent hover:text-accent-dark transition-colors">
                          View Details
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "articles":
        return (
          <>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">📝 Latest Articles</h3>
            <p className="text-gray-600 mb-6 italic">Thoughts and insights on product management, technology, and building great products</p>
            
            {articlesLoading && (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="ml-2 text-gray-600">Loading articles...</span>
              </div>
            )}
            
            {articlesError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-600">{articlesError}</p>
                <button 
                  onClick={() => {
                    setArticlesError(null);
                    setArticles([]);
                    setActiveSection('articles'); // This will trigger the useEffect
                  }}
                  className="mt-2 text-sm text-red-700 hover:text-red-900 underline"
                >
                  Try again
                </button>
              </div>
            )}
            
            {!articlesLoading && !articlesError && (
              <div className="space-y-6">
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 lg:w-1/4">
                        <img
                          src={article.thumbnail || '/placeholder.svg'}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover bg-gray-100"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="flex-1 p-5">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {article.categories.slice(0, 3).map((category, index) => (
                            <span 
                              key={index}
                              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <h4 className="font-bold text-lg text-primary mb-2 line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-gray-500 mb-3 line-clamp-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(article.pubDate).toLocaleDateString()}</span>
                            </div>
                            {article.readTime && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </div>
                            )}
                          </div>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-accent hover:text-accent-dark transition-colors font-medium"
                          >
                            Read Article
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {articles.length === 0 && !articlesLoading && !articlesError && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No articles found. Check back soon for new content!</p>
                  </div>
                )}
                
                <div className="text-center mt-8">
                  <a
                    href={`https://medium.com/@angshumangupta`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View All Articles on Medium
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            )}
          </>
        );
      default:
        return (
          <>
            <h3 className="font-playfair text-3xl font-bold mb-4 text-primary text-center">About Me</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Strategic Product Leader with 12+ years driving platform and API-first ecosystems across eCommerce, Consumer Tech, Fintech, and AI—delivering global scale, cross-functional alignment, and millions in revenues. Currently spearheading B2B initiatives at Zalando. Proven experience in scaling platforms (30M+ identities at Zeta), launching AI/ML solutions (50% cost reduction at Ola), and founding/leading early-stage ventures. MBA from ISB. Passionate about Gen AI and building impactful products. Let's connect! 🙂
            </p>
          </>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-0">
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveSection("about")}
          className={`px-4 py-1 rounded-lg ${
            activeSection === "about"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveSection("experiences")}
          className={`px-4 py-1 rounded-lg ${
            activeSection === "experiences"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveSection("portfolio")}
          className={`px-4 py-1 rounded-lg ${
            activeSection === "portfolio"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Portfolio
        </button>
        <button
          onClick={() => setActiveSection("articles")}
          className={`px-4 py-1 rounded-lg ${
            activeSection === "articles"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Articles
        </button>
        <button
          onClick={() => setActiveSection("expertise")}
          className={`px-4 py-1 rounded-lg ${
            activeSection === "expertise"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Expertise
        </button>
        <button
          onClick={() => setActiveSection("education")}
          className={`px-4 py-1 rounded-lg ${
            activeSection === "education"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Education
        </button>
      </div>
      {renderSection()}
    </div>
  );
};
