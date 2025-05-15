# Cursor Rules: Adding a New Project Portfolio

## 1. SEO Requirements
- **sitemap.xml**:  
  - Add a new `<url>` entry for the project detail page (e.g., `https://yourdomain.com/#/?project=project-id`).
  - Set `<lastmod>`, `<changefreq>`, and `<priority>` appropriately.
- **robots.txt**:  
  - Ensure the sitemap is referenced (e.g., `Sitemap: https://yourdomain.com/sitemap.xml`).
- **Structured Data**:  
  - Update `public/structured-data.js` to include the new project in the JSON-LD schema for portfolio projects.

## 2. OpenAI Search/Plugin Integration
- **API JSON Files**:  
  - Add the new project to `public/api/projects.json` with all relevant fields.
  - Update `public/api/search.json` to include a search entry for the new project.
  - If relevant, update or create other API files (e.g., `/api/index.json`).
- **openapi.json**:  
  - Ensure the OpenAPI spec covers the new project endpoint/response if needed.

## 3. Adding Content in `projects.ts`
- **Location**:  
  - Add the new project as an object in the `projects` array in `src/lib/projects.ts`.

### Legacy Fields (Old Format)
- **id**: `string` — Unique identifier for the project (used in URLs and lookups).
- **title**: `string` — The project's display name.
- **company**: `string` — The company or organization associated with the project.
- **year**: `string | number` — The time period of the project (e.g., "2022 - 2023").
- **shortDescription**: `string` — A one-line summary of the project, shown in portfolio lists and headers.
- **situation**: `string` — The context, background, and problem statement for the project. Rendered as a markdown block at the top of the project detail page. Supports markdown formatting (bold, italics, lists, etc.).
- **steps**: `{ research: string[]; strategy: string[]; development: string[] }` — The main "Journey" of the project, split into three phases:
  - `research`: Discovery, research, and analysis steps.
  - `strategy`: Planning, approach, and high-level decisions.
  - `development`: Implementation, execution, and delivery steps.
  - Each array is rendered as a list under its respective section.
  - **Special rendering:**
    - If a step contains `'prototype'` or `'proof of concept'`, it is shown as a blue callout with a 💡 icon and "Strategic Prototype" label (markdown supported).
    - If a step contains `'note:'` or starts with `'note '`, it is shown as a yellow callout with a 📝 icon and "Note" label (markdown supported).
    - If a step matches the section header (e.g., "Research & Discovery"), it is not rendered as a bullet.
    - All other steps are rendered as markdown list items.
- **impact**: `string[]` — Key results, business impact, and outcomes of the project. Rendered as a bulleted list under the "Impact & Results" section. Supports markdown formatting.
- **lessons**: `string[]` — Key learnings, takeaways, and reflections from the project. Rendered as a bulleted list under the "Key Learnings" section. Supports markdown formatting.

#### Example Legacy Project Object
```js
{
  id: 'project-id',
  title: 'Project Title',
  company: 'Company Name',
  year: '2023',
  shortDescription: 'A one-line summary.',
  situation: 'Background, context, and problem statement. **Markdown supported!**',
  steps: {
    research: [
      'Interviewed 10 users.',
      'Analyzed competitor products.',
      'Note: This was a major pivot point.'
    ],
    strategy: [
      'Developed a prototype for rapid feedback.',
      'Proof of concept validated with stakeholders.'
    ],
    development: [
      'Launched MVP in 3 months.',
      'Integrated with legacy systems.'
    ]
  },
  impact: [
    'Reduced onboarding time by 50%.',
    'Increased NPS from 30 to 60.'
  ],
  lessons: [
    'Early prototyping accelerates learning.',
    'Cross-team alignment is critical.'
  ]
}
```

### New-Format Fields (Structured)
- For new-format projects, also include:
  - `overview`, `background`
  - `journey` (with `researchTable`, `strategy`, `development`, `architecture`, `techStackTable`)
  - `roadmapTable`, `metricsTables`, `resultsTable`, `subscriptionFunnel`, `conclusion`

#### Example New-Format Project Object
```js
{
  id: 'ai-writer',
  title: 'AI Content Writer',
  company: 'Qloud AI',
  year: '2024',
  shortDescription: 'Automated content generation using LLMs.',
  overview: 'A platform for generating SEO-optimized articles using advanced language models. **Markdown supported!**',
  background: 'The rise of generative AI has enabled new workflows for content teams. We identified a gap in tools that combine SEO, editorial workflow, and AI.',
  journey: {
    researchTable: [
      ['Area', 'Insights'],
      ['Competitor Analysis', 'Most tools lacked workflow integration'],
      ['User Interviews', 'Writers wanted more control over tone and structure']
    ],
    strategy: [
      'Developed a **prototype** with OpenAI GPT-4.',
      'Note: Early feedback highlighted the need for export options.'
    ],
    development: [
      'Integrated with Google Docs API.',
      'Launched beta to 50 users.'
    ],
    architecture: `// System Architecture\n[User] → [Frontend (React)] → [API (Node.js)] → [OpenAI Service]`,
    techStackTable: [
      ['Layer', 'Technology'],
      ['Frontend', 'React, Tailwind'],
      ['Backend', 'Node.js, Express'],
      ['AI', 'OpenAI GPT-4']
    ]
  },
  roadmapTable: [
    ['Release', 'Date', 'Version', 'Highlights'],
    ['Beta', '2024-01', '0.9', 'Initial user testing'],
    ['Public', '2024-03', '1.0', 'SEO tools, export features']
  ],
  metricsTables: [
    {
      title: '📊 Business Metrics',
      data: [
        ['Metric', 'Value'],
        ['Active Users', '500'],
        ['Articles Generated', '2,000']
      ]
    },
    {
      title: '🛠️ Technical Metrics',
      data: [
        ['Metric', 'Value'],
        ['API Uptime', '99.9%'],
        ['Avg. Response Time', '1.2s']
      ]
    }
  ],
  resultsTable: [
    ['Funnel Step', 'Result'],
    ['Signups', '1,000'],
    ['Paid Conversions', '200']
  ],
  subscriptionFunnel: '* Trial to Paid Conversion: 20%\n* Retention (30-Day): 60%',
  conclusion: 'The project demonstrated the value of combining AI with editorial workflows. **Next steps:** expand integrations and add multi-language support.',
  // Legacy fields for type compatibility:
  situation: '',
  steps: { research: [], strategy: [], development: [] },
  impact: [],
  lessons: [],
}
```

## 4. Formatting in `ProjectTemplate.tsx`
- **Legacy Format:**
  - Renders: Situation (markdown), The Journey (steps.research, steps.strategy, steps.development), Impact & Results (impact), Key Learnings (lessons)
  - Steps: Special callouts for prototype/note, section header suppression, markdown rendering
- **New Format:**
  - See main rule above for section order and rendering details

## 5. Formatting User-Provided Content
- When a user provides new project content:
  - Parse and split the content into the above fields.
  - Convert tables to 2D arrays.
  - Convert lists to arrays of markdown strings.
  - Extract code blocks for architecture.
  - Preserve markdown for all text fields.
  - Add empty legacy fields if required by the type.

---

**Always validate the new project entry for:**
- TypeScript type compatibility
- Proper markdown and table formatting
- Inclusion in all relevant SEO and API files

---

**End of Cursor Rules** 