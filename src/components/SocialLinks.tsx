import React from "react";
import { Linkedin, Github, Codepen, Newspaper, Palette, Mail } from "lucide-react";

// Declare gtag on the window object for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Helper function to send events to Google Analytics
const trackEvent = (eventName: string, eventParams: object) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  } else {
    console.warn('gtag function not found. Ensure Google Analytics is loaded.');
  }
};

const social = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://in.linkedin.com/in/angshumangupta",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/angshu-min-js",
  },
  {
    name: "Codepen",
    icon: Codepen,
    href: "http://codepen.io/AngshumanGupta/",
  },
  {
    name: "Medium",
    icon: Newspaper,
    href: "https://medium.com/@angshumangupta",
  },
  {
    name: "Behance",
    icon: Palette,
    href: "https://www.behance.net/angshumangupta",
  },
  {
    name: "Mail",
    icon: Mail,
    href: "mailto:mail@angshumangupta.com",
  },
];

interface SocialLinksProps {
  vertical?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ vertical = false }) => (
  <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-${vertical ? '4' : '6'} mt-${vertical ? '0' : '4'} justify-center`}>
    {social.map(({ name, icon: Icon, href }) => (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="text-gray-400 hover:text-accent transition-colors duration-200"
        onClick={() => trackEvent('social_link_click', { link_name: name, link_url: href })}
      >
        <Icon size={28} strokeWidth={1.8} />
      </a>
    ))}
  </div>
);

