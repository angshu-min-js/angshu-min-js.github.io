import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export interface ProjectStep {
  title: string;
  details: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  company: string;
  year: number;
  shortDescription: string;
  situation: string;
  steps: {
    research: string[];
    strategy: string[];
    development: string[];
  };
  impact: string[];
  lessons: string[];
}

interface ProjectTemplateProps {
  getProject: (id: string) => ProjectData | undefined;
}

export function ProjectTemplate({ getProject }: ProjectTemplateProps) {
  const { id } = useParams();
  const project = id ? getProject(id) : undefined;

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
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Portfolio
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