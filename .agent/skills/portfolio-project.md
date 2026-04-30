# Skill: Adding a Project to the Portfolio

This document outlines the standard operating procedure for adding a new project to the Angshuman Gupta portfolio website.

## 1. Update Project Data (`src/lib/projects.ts`)

Add the new project to the `projects` array in `src/lib/projects.ts`. 

**CRITICAL: Always use the Legacy Format.**
Do not use the deprecated Structured Format (`overview`, `journey`, etc.) because it breaks the native UX of the portfolio pages.

### Required Fields
- `id`: Unique identifier (e.g., `'zeos-genai-docs'`)
- `title`: Project title with an emoji (e.g., `'🤖 Gen AI in Zeos'`)
- `company`: Company name (e.g., `'Zalando SE'`)
- `year`: Timeframe (e.g., `'2023 - Present'`)
- `shortDescription`: 1-2 sentence summary
- `situation`: Context and background
- `steps`: Object containing arrays: `{ research: string[], strategy: string[], development: string[] }`
- `impact`: Array of result strings
- `lessons`: Array of learning strings

### ⚠️ Markdown Warning
The legacy fields (`situation`, `impact`, `lessons`, and normal items in `steps`) **DO NOT** support markdown formatting. They are rendered directly as raw strings by the UI. 
- Do **NOT** use `**bold**` or `*italic*` syntax, as it will literally print the asterisks on the screen.
- Use plain text and standard punctuation.

### Example Template
```javascript
{
  id: 'project-name',
  title: '🚀 Project Title',
  company: 'Company Name',
  year: '2023 - 2024',
  shortDescription: 'Brief summary of the project.',
  situation: 'Context and background without markdown formatting.',
  steps: {
    research: [
      'Research step 1 without markdown',
      'Research step 2 without markdown'
    ],
    strategy: [
      'Strategy step 1',
      'Strategy step 2'
    ],
    development: [
      'Development step 1',
      'Development step 2'
    ]
  },
  impact: [
    'Impact 1',
    'Impact 2'
  ],
  lessons: [
    'Lesson 1',
    'Lesson 2'
  ]
}
```

## 2. Update APIs

Whenever a project is added, update the following API endpoints to ensure the search functionality and AI plugins work correctly:

1. **`public/api/projects.json`**:
   - Add the project object (matching the format of the others in this file).
2. **`public/api/search.json`**:
   - Add a search entry with `title`, `description`, `url`, and `type: "project"`.

## 3. Update SEO

1. **`public/sitemap.xml`**:
   - Add a `<url>` block for the new project under the "Project pages" section.
2. **`public/structured-data.js`**:
   - Add the project to the `projectSchema` array (JSON-LD `CreativeWork` type).
