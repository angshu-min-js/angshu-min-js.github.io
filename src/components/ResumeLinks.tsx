import React from "react";
import { FileText, Headphones } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

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

interface ResumeLinksProps {
  vertical?: boolean;
}

export const ResumeLinks: React.FC<ResumeLinksProps> = ({ vertical = false }) => {
  const [audioOpen, setAudioOpen] = React.useState(false);
  
  return (
  <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-${vertical ? '3' : '5'} ${vertical ? '' : 'my-6'} justify-center`}>
    <a
      href="https://drive.google.com/file/d/1_4WOEgetc-D6n8imAHWuC10f5bsyTRIE/view"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded hover:bg-accent transition-colors text-primary font-medium"
      aria-label="Download resume PDF"
      onClick={() => trackEvent('resume_link_click', { type: 'pdf' })}
    >
      <FileText size={20} />
      <span className="inline">Resume (PDF)</span>
    </a>
    
    <Dialog open={audioOpen} onOpenChange={setAudioOpen}>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded hover:bg-accent transition-colors text-primary font-medium"
          aria-label="Listen to audio resume"
          onClick={() => trackEvent('resume_link_click', { type: 'audio' })}
        >
          <Headphones size={20} />
          <span className="inline">Audio Resume</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="p-4">
          <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">🎧 Audio Resume</h3>
          <h4 className="font-semibold text-lg mb-2">Listen to My Career Journey (Courtesy NotebookLM)</h4>
          <p className="text-gray-600 mb-3">A brief audio narration of my professional background and experience.</p>
          <audio controls className="w-full" onPlay={() => trackEvent('audio_resume_play', {})}>
            <source src="/Angshu.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </DialogContent>
    </Dialog>
  </div>
  );
};
