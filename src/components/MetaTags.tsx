import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  imageUrl?: string;
  type?: string;
}

const defaultMeta = {
  title: 'Angshuman Gupta | Senior Product Leader',
  description: 'Angshuman Gupta is a seasoned Product Management professional with expertise in building scalable products. Formerly at Ola and Zeta, specializing in full-stack product development and tech leadership.',
  keywords: 'Angshuman Gupta, product manager, senior product manager, product head, tech leader, Ola, Zeta, full stack product person, software engineer, product management, tech industry, startup experience, product strategy, user experience, agile development',
  imageUrl: '/profile-image.jpg', // Update with actual image path
  type: 'website'
};

const MetaTags: React.FC<MetaTagsProps> = (props) => {
  const location = useLocation();
  
  // Merge provided props with defaults
  const meta = {
    ...defaultMeta,
    ...props
  };
  
  const currentUrl = `https://angshumangupta.com${location.pathname}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {meta.imageUrl && <meta property="og:image" content={meta.imageUrl} />}
      <meta property="og:site_name" content="Angshuman Gupta" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.imageUrl && <meta name="twitter:image" content={meta.imageUrl} />}
    </Helmet>
  );
};

export default MetaTags; 