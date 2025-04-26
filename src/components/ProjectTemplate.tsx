import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link, useParams, useLocation } from 'react-router-dom';
import LeagueAddDashboard from './LeagueAddDashboard';
import { useEffect, useState } from 'react';

export interface ProjectStep {
  title: string;
  details: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  company: string;
  year: string | number;
  shortDescription: string;
  situation: string;
  steps: {
    research: string[];
    strategy: string[];
    development: string[];
  };
  impact: string[];
  lessons: string[];
  dashboard?: any; // Optional dashboard property
  strategyPaper?: string; // Optional path to a markdown strategy paper
}

interface ProjectTemplateProps {
  getProject: (id: string) => ProjectData | undefined;
}

export function ProjectTemplate({ getProject }: ProjectTemplateProps) {
  const { id } = useParams();
  const location = useLocation();
  const project = id ? getProject(id) : undefined;

  // Get the tab param from the URL, default to 'portfolio'
  const params = new URLSearchParams(location.search);
  const tab = params.get('tab') || 'portfolio';

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [markdown, setMarkdown] = useState<string | null>(null);

  useEffect(() => {
    if (project && project.strategyPaper && project.id === 'zeta-iam-strategy') {
      fetch(`/${project.strategyPaper}`)
        .then(res => res.text())
        .then(setMarkdown)
        .catch(() => setMarkdown('Could not load strategy paper.'));
    }
  }, [project]);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Function to render text with emojis and formatting
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed whitespace-pre-line">
        {paragraph}
      </p>
    ));
  };

  const isPrototypeStep = (step: string) => {
    return step.toLowerCase().includes('prototype') || step.toLowerCase().includes('proof of concept');
  };

  const renderStep = (step: string) => {
    if (isPrototypeStep(step)) {
      return (
        <div className="flex items-start bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
          <span className="text-blue-500 font-medium mr-2">💡</span>
          <div>
            <span className="text-blue-600 text-sm font-medium mb-1 block">Strategic Prototype</span>
            <span className="text-gray-700 leading-relaxed whitespace-pre-line">{step}</span>
          </div>
        </div>
      );
    }
    return (
      <div className="flex items-start">
        <span className="text-accent font-medium mr-2">•</span>
        <span className="text-gray-700 leading-relaxed whitespace-pre-line">{step}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <Link
          to={`/?tab=${tab}`}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Link>

        {/* Header Section */}
        <header className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 font-playfair leading-tight">
            {project.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="font-medium text-lg">{project.company}</span>
            <span className="mx-3">•</span>
            <span className="text-lg">{project.year}</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">
            {project.shortDescription}
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          {/* LeagueAddDashboard at the top for leagueadd-data-roadmap */}
          {project.id === 'leagueadd-data-roadmap' && <LeagueAddDashboard />}

          {/* Strategy Paper as Google Doc iframe for zeta-iam-strategy */}
          {project.id === 'zeta-iam-strategy' && (
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 font-playfair flex items-center">
                <span className="text-2xl mr-2">📄</span>
                Strategy Paper
              </h2>
              <div className="w-full" style={{ minHeight: 800 }}>
                <iframe
                  src="https://docs.google.com/document/d/e/2PACX-1vTliWT2-che9RpW9uf4AAYbAyjLY-znffEZ2vPLgcfesihgJrk3wH6hTeSi3L_rKH3nvFFXUAveaf8h/pub?embedded=true"
                  width="100%"
                  height="800"
                  style={{ border: 'none' }}
                  title="Zeta IAM Strategy Paper"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {/* Situation Section */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 font-playfair">The Situation</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {renderFormattedText(project.situation)}
            </div>
          </section>

          {/* Steps Section */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 font-playfair">The Journey</h2>
            
            {/* Research Phase */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="text-2xl mr-2">🔍</span>
                Research & Discovery
              </h3>
              <ul className="space-y-3">
                {project.steps.research.map((step, index) => (
                  <li key={index}>{renderStep(step)}</li>
                ))}
              </ul>
            </div>

            {/* Strategy Phase */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Strategy & Planning
              </h3>
              <ul className="space-y-3">
                {project.steps.strategy.map((step, index) => (
                  <li key={index}>{renderStep(step)}</li>
                ))}
              </ul>
            </div>

            {/* Development Phase */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                Development & Implementation
              </h3>
              <ul className="space-y-3">
                {project.steps.development.map((step, index) => (
                  <li key={index}>{renderStep(step)}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Impact Section */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 font-playfair flex items-center">
              <span className="text-2xl mr-2">📈</span>
              Impact & Results
            </h2>
            <ul className="space-y-4">
              {project.impact.map((item, index) => (
                <li key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                  <span className="text-accent font-bold mr-3">✓</span>
                  <span className="text-gray-700 leading-relaxed whitespace-pre-line">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Lessons Section */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 font-playfair flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Key Learnings
            </h2>
            <ul className="space-y-4">
              {project.lessons.map((lesson, index) => (
                <li key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                  <span className="text-accent font-bold mr-3">→</span>
                  <span className="text-gray-700 leading-relaxed whitespace-pre-line">{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 