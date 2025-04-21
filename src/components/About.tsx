import React, { useState } from "react";

// Updated experience data based on resume
const experience = [
  {
    role: "Product Lead (Partner Onboarding & Shop Connectors)",
    company: "Zalando SE",
    website: "https://www.zalando.de/",
    logoUrl: "https://logo.clearbit.com/zalando.de", // Keep existing or verify
    years: "Mar 2023 – Present", // Updated format
    summary: "Spearheading B2B partner onboarding and e-commerce integrations, driving significant growth.",
    paragraphs: [
      "Spearheading two core product areas for Zalando's B2B business (Zeos): Partner Onboarding and E-Commerce Shop Integrations (Shopify, Salesforce, Scayle, etc.).",
      "Achieved outcomes including 99% faster onboarding, 10x market expansion, and 70% D2C market penetration, contributing to over €100 Mn+ in revenue.",
      "Defined and executed a multi-year platform strategy, translating complex operational needs into scalable product roadmaps, securing endorsements from Senior Leadership.",
      "Driving cross-functional collaboration across Design, Engineering, Data, Commercial, Operations, Legal, Channel & Markets, Domain Teams, and Finance.",
      "Managing the platform's Onboarding & Connector Self-Service, API Services, Dev Documentation, and Back-Offices.",
      "Coaching product teams on using Gen AI for productivity and innovation."
    ],
    skills: ["B2B Product Strategy", "Platform Strategy", "Partner Onboarding", "API Ecosystems", "E-commerce Integrations", "Cross-functional Leadership", "Roadmapping", "Gen AI Application", "Self-Service Platforms"]
  },
  {
    role: "Gen AI Side Projects",
    company: "Personal Projects", // Changed company name for clarity
    website: "https://qloudai.app", 
    logoUrl: "https://qloudai.app/assets/avatar.png", // Keeping Qloud AI avatar for now
    years: "2023–Present",
    summary: "Actively prototyping and shipping tools at the intersection of AI and product building.",
    paragraphs: [
      "Passionate about Gen AI - actively prototyping and shipping tools:",
      "Product Builders: A community and knowledge hub for building and scaling digital products using AI agents.",
      "German with Nik: A voice-based LLM tutor designed to help users practice and learn spoken German.",
      "Captions GPT: A multi-modal agent that helps social media users generate captions for videos and images."
    ],
    skills: ["Gen AI", "LLMs", "Voice Interfaces", "Multi-modal Agents", "Rapid Prototyping", "Community Building", "Product Innovation"]
  },
  {
    role: "Product Lead (Identity, Access, and Workflow Mgmt.)",
    company: "Zeta Tech (Directi)",
    website: "https://www.zeta.tech/",
    logoUrl: "https://logo.clearbit.com/zeta.tech", // Keep existing or verify
    years: "2021–2023",
    summary: "Led Identity & Workflow platforms at BaaS unicorn, scaling to 30M+ identities & enabling 10x revenue growth.",
    paragraphs: [
      "Zeta, is a Banking-as-a-Service (BaaS) unicorn where I led two charters - Identity and Access Management (took from introduction to matured steady-state ~ on track to serve 30 mn+ identities) & Operation Management (operationalised Zeta's multi-stack banking offerings ~ on track for 10X revenue growth).",
      "Defined and owned the product strategy, long-term roadmap, and quarter-wise OKRs for both and directly managed a team of 3 PMs, each owning a specific product objective (pillar). I moved out as I wanted to explore the culture outside India, especially in Germany."
    ],
    skills: ["Identity & Access Management (IAM)", "Workflow Automation", "Banking-as-a-Service (BaaS)", "API Platforms", "Mobile SDKs", "People Management", "Team Leadership", "Fintech", "Global Product Scaling"]
  },
  {
    role: "Senior Product Manager (Driver Onboarding)",
    company: "Ola Cabs",
    website: "https://www.olacabs.com/",
    logoUrl: "https://logo.clearbit.com/olacabs.com", // Keep existing or verify
    years: "2020–2021",
    summary: "Launched AI/ML platform reducing driver verification time by 33% and costs by 50%.",
    paragraphs: [
      "During my short stint at Ola, I had the opportunity to lead the company's largest full-scale data science and machine learning project. I spearheaded the launch of an OCR (optical character recognition) platform for document digitization and verification, digitising the onboarding flow for approximately 2mn drivers (India, UK, and NZ). The platform was designed to reduce the cost of CVT (customer verification and validation) by 50%, resulting in significant cost savings for the company.",
      "It was an exciting and challenging project, but I was passionate about the potential impact it could have on the company and its customers. With a talented team at my side, we worked tirelessly to develop and launch the platform, leveraging the latest advances in AI and machine learning technology.",
      "Unfortunately, Ola decided to change their work schedule and make Saturdays a regular working day. As I was also pursuing an MBA at the prestigious Indian School of Business (ISB), I found it challenging to balance both commitments. After careful consideration, I decided to step down from my role at Ola. Although it was a difficult decision to leave such an exciting project, I knew that pursuing my MBA would help me grow both personally and professionally."
    ],
    skills: ["AI/ML Product Management", "OCR Technology", "Process Automation", "Cost Reduction", "Compliance Management", "Rule Engines", "Global Rollout", "Mobility Tech"]
  },
  {
    role: "Co-founder (CPTO) / Head of Product",
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
    skills: ["Infrastructure Product Management", "Software Development (Java)", "QA Testing", "Subject Matter Expertise", "Feedback Synthesis", "IT Services"]
  },
];

export const About = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  
  // Add state to track image loading errors
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  
  const handleImageError = (company: string) => {
    setImageErrors(prev => ({...prev, [company]: true}));
  };

  // Placeholder URLs - Replace with actual URLs if found
  const isbLogoUrl = "https://logo.clearbit.com/isb.edu"; // Example, verify
  const kiitLogoUrl = "https://logo.clearbit.com/kiit.ac.in"; // Example, verify

  const renderSection = () => {
    switch (activeSection) {
      case "interests":
        return (
          <>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">🧠 Areas of Interest</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-1">
              <li>User Onboarding</li>
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
                  <li>Developer Relations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Platforms & Technical:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>Mobile (incl. SDK)</li>
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
                  <li>Gen AI</li>
                  <li>TensorFlow, ScikitLearn</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Tools & Languages:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>PM: Jira, Assembla, Aha</li>
                  <li>Prog: Python, Java, JS</li>
                  <li>DB: MySQL, Mongo</li>
                  <li>Design: Balsamiq</li>
                  <li>Other: HTML5, CSS3</li>
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
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-primary flex-1 mr-2">{exp.role}</h4>
                    <span className="text-gray-400 text-sm text-right flex-shrink-0">{exp.years}</span>
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
                      <p key={index}>{paragraph}</p>
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
    <section className="max-w-2xl mx-auto mt-6 mb-20 px-3">
      <div className="flex justify-center mb-6">
        <nav className="flex flex-wrap space-x-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveSection("about")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeSection === "about"
                ? "bg-white shadow text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveSection("experiences")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeSection === "experiences"
                ? "bg-white shadow text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => setActiveSection("expertise")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeSection === "expertise"
                ? "bg-white shadow text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            Expertise
          </button>
          <button
            onClick={() => setActiveSection("education")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeSection === "education"
                ? "bg-white shadow text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            Education
          </button>
        </nav>
      </div>

      <div className="transition-all duration-300 ease-in-out">
        {renderSection()}
      </div>
    </section>
  );
};
