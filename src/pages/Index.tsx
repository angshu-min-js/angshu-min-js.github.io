import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { About } from "@/components/About";
import { ResumeLinks } from "@/components/ResumeLinks";
import { QuickPrioritizationGame } from "@/components/QuickPrioritizationGame";
import { FeatureMetricMatcher } from "@/components/FeatureMetricMatcher";
import { StackChallenge } from "@/components/StackChallenge";
import { BurnoutMeter } from "@/components/BurnoutMeter";
import { TicTacToeGame } from "@/components/TicTacToeGame";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MetaTags from "@/components/MetaTags";
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

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

const Index = () => {
  // Control visibility of the modals (Dialogs)
  const [prioritizationOpen, setPrioritizationOpen] = React.useState(false);
  const [featureMetricOpen, setFeatureMetricOpen] = React.useState(false);
  const [stackChallengeOpen, setStackChallengeOpen] = React.useState(false);
  const [burnoutMeterOpen, setBurnoutMeterOpen] = React.useState(false);
  const [ticTacToeOpen, setTicTacToeOpen] = React.useState(false);

  const location = useLocation();

  // Debug dialog status
  useEffect(() => {
    console.log("Dialog states:", { 
      prioritizationOpen, 
      featureMetricOpen, 
      stackChallengeOpen,
      burnoutMeterOpen,
      ticTacToeOpen
    });
  }, [prioritizationOpen, featureMetricOpen, stackChallengeOpen, burnoutMeterOpen, ticTacToeOpen]);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const game = params.get('game');
    if (game) {
      switch (game) {
        case 'prioritization':
          setPrioritizationOpen(true);
          break;
        case 'feature-metric':
          setFeatureMetricOpen(true);
          break;
        case 'stack-challenge':
          setStackChallengeOpen(true);
          break;
        case 'burnout-meter':
          setBurnoutMeterOpen(true);
          break;
        case 'tictactoe':
          setTicTacToeOpen(true);
          break;
        default:
          break;
      }
    }
  }, [location.search]);

  const handleGameClick = (gameName: string, view: 'desktop' | 'mobile') => {
    console.log(`${gameName} button clicked (${view})`);
    trackEvent('game_button_click', { 
      game_name: gameName,
      view: view
    });
    // Optionally open the dialog here based on gameName
    // Example:
    // if (gameName === 'Prioritization Game') setPrioritizationOpen(true);
  };

  // Determine page metadata based on URL params
  const getPageMetadata = () => {
    const params = new URLSearchParams(location.search);
    const game = params.get('game');
    const project = params.get('project');
    
    if (game) {
      const gameTitles: Record<string, string> = {
        'prioritization': 'Prioritization Game',
        'feature-metric': 'Feature-Metric Matcher',
        'stack-challenge': 'Stack Challenge',
        'burnout-meter': 'Burnout Meter',
        'tictactoe': 'PM vs Engineer'
      };
      
      const gameDescriptions: Record<string, string> = {
        'prioritization': 'Practice prioritizing product tasks based on urgency and impact.',
        'feature-metric': 'Match product features with the metrics they would most directly impact.',
        'stack-challenge': 'Match different use cases with the most appropriate tech stack.',
        'burnout-meter': 'Balance team capacity and business impact in this sprint planning simulation.',
        'tictactoe': 'Play a strategic game of Tic Tac Toe representing the classic PM vs Engineer dynamic.'
      };
      
      const title = gameTitles[game] || 'Interactive PM Games';
      const description = gameDescriptions[game] || 'Try interactive product management games on Angshuman Gupta\'s portfolio.';
      
      return {
        title: `${title} | Angshuman Gupta`,
        description,
        keywords: 'product management games, interactive PM learning, product prioritization, feature metrics, tech stack, sprint planning',
        type: 'game'
      };
    }
    
    // Default homepage metadata
    return {
      title: 'Angshuman Gupta | Senior Product Leader',
      description: 'Angshuman Gupta is a seasoned Product Management professional with expertise in building scalable products. Formerly at Ola and Zeta, specializing in full-stack product development and tech leadership.',
      keywords: 'Angshuman Gupta, product manager, senior product manager, product head, tech leader, Ola, Zeta, full stack product person',
      type: 'website'
    };
  };

  const metadata = getPageMetadata();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MetaTags 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        type={metadata.type}
      />
      
      {/* Enhanced header with navigation elements */}
      <header className="w-full pt-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Social links */}
          <div className="hidden lg:flex lg:w-1/5 mb-0 lg:mb-0 justify-end pr-8">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Connect With Me</h3>
              <SocialLinks vertical={true} />
            </div>
          </div>
          
          {/* Center - Name and title */}
          <div className="lg:w-3/5 flex flex-col items-center">
            <Hero
              name="Angshuman Gupta"
              title="Product Leader | Berlin, Germany"
              tagline="En-route to Full Stack Product Person"
            />
            {/* Company Logos Row - Redesigned */}
            <div className="w-full flex flex-col items-center my-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">Companies I've Worked With</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { company: "Zalando", logoUrl: "https://logo.clearbit.com/zalando.de" },
                  { company: "Zeta Tech", logoUrl: "https://logo.clearbit.com/zeta.tech" },
                  { company: "Ola Cabs", logoUrl: "https://logo.clearbit.com/olacabs.com" },
                  { company: "Craftloom", logoUrl: "/CL_logo_TM.png" },
                ].map(({ company, logoUrl }) => (
                  <div
                    key={company}
                    className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 transition-transform hover:scale-105"
                    style={{ width: 110 }}
                  >
                    <img
                      src={logoUrl}
                      alt={`${company} logo`}
                      className="h-12 w-12 object-contain mb-2"
                      style={{ background: '#fff' }}
                    />
                    <span className="text-sm font-semibold text-gray-800 text-center">{company}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile-only social links */}
            <div className="flex lg:hidden mt-2 mb-2">
              <SocialLinks vertical={false} />
            </div>
          </div>
          
          {/* Right side - Resume links and Interactive games */}
          <div className="hidden lg:flex lg:w-1/5 mb-2 lg:mb-0 flex-col items-start pl-8">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Resources</h3>
            <ResumeLinks vertical={true} />
            
            <h3 className="text-sm font-medium text-gray-500 mt-4 mb-2">Interactive PM Games</h3>
            <div className="flex flex-col w-full space-y-2">
              {/* Desktop Prioritization Game Dialog */}
              <Dialog open={prioritizationOpen} onOpenChange={setPrioritizationOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-semibold text-sm w-full"
                    aria-label="Open prioritization game"
                    onClick={() => handleGameClick('Prioritization Game', 'desktop')}
                  >
                    Prioritization Game
                  </Button>
                </DialogTrigger>
                <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-xl flex items-center justify-center">
                  <QuickPrioritizationGame onClose={() => setPrioritizationOpen(false)} />
                </DialogContent>
              </Dialog>
              
              {/* Desktop Feature-Metric Matcher Dialog */}
              <Dialog open={featureMetricOpen} onOpenChange={setFeatureMetricOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-semibold text-sm w-full"
                    aria-label="Open feature-metric matcher game"
                    onClick={() => handleGameClick('Feature-Metric Matcher', 'desktop')}
                  >
                    Feature-Metric Matcher
                  </Button>
                </DialogTrigger>
                <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-2xl flex items-center justify-center">
                  <FeatureMetricMatcher onClose={() => setFeatureMetricOpen(false)} />
                </DialogContent>
              </Dialog>
              
              {/* Desktop Stack Challenge Dialog */}
              <Dialog open={stackChallengeOpen} onOpenChange={setStackChallengeOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-semibold text-sm w-full"
                    aria-label="Open stack challenge game"
                    onClick={() => handleGameClick('Stack Challenge', 'desktop')}
                  >
                    Stack Challenge
                  </Button>
                </DialogTrigger>
                <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-2xl flex items-center justify-center">
                  <StackChallenge onClose={() => setStackChallengeOpen(false)} />
                </DialogContent>
              </Dialog>

              {/* Desktop Burnout Meter Dialog */}
              <Dialog open={burnoutMeterOpen} onOpenChange={setBurnoutMeterOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-semibold text-sm w-full"
                    aria-label="Open burnout meter game"
                    onClick={() => handleGameClick('Burnout Meter', 'desktop')}
                  >
                    Burnout Meter
                  </Button>
                </DialogTrigger>
                <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-2xl flex items-center justify-center">
                  <BurnoutMeter onClose={() => setBurnoutMeterOpen(false)} />
                </DialogContent>
              </Dialog>

              {/* Desktop TicTacToe Dialog */}
              <Dialog open={ticTacToeOpen} onOpenChange={setTicTacToeOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-semibold text-sm w-full"
                    aria-label="Open tic tac toe game"
                    onClick={() => handleGameClick('Tic Tac Toe', 'desktop')}
                  >
                    PM vs Engineer
                  </Button>
                </DialogTrigger>
                <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-md flex items-center justify-center">
                  <TicTacToeGame onClose={() => setTicTacToeOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        
        {/* Mobile-only resume links and game buttons */}
        <div className="flex lg:hidden flex-col items-center mt-2 mb-2 px-4">
          <ResumeLinks vertical={false} />
          <div className="w-full max-w-xs mt-2 space-y-2">
            {/* Mobile Prioritization Game Dialog */}
            <Dialog open={prioritizationOpen} onOpenChange={setPrioritizationOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="font-semibold text-sm w-full"
                  aria-label="Open prioritization game"
                  onClick={() => handleGameClick('Prioritization Game', 'mobile')}
                >
                  Prioritization Game
                </Button>
              </DialogTrigger>
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none w-[95vw] sm:max-w-xl flex items-center justify-center">
                <QuickPrioritizationGame onClose={() => setPrioritizationOpen(false)} />
              </DialogContent>
            </Dialog>
            
            {/* Mobile Feature-Metric Matcher Dialog */}
            <Dialog open={featureMetricOpen} onOpenChange={setFeatureMetricOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="font-semibold text-sm w-full"
                  aria-label="Open feature-metric matcher game"
                  onClick={() => handleGameClick('Feature-Metric Matcher', 'mobile')}
                >
                  Feature-Metric Matcher
                </Button>
              </DialogTrigger>
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none w-[95vw] sm:max-w-2xl flex items-center justify-center">
                <FeatureMetricMatcher onClose={() => setFeatureMetricOpen(false)} />
              </DialogContent>
            </Dialog>
            
            {/* Mobile Stack Challenge Dialog */}
            <Dialog open={stackChallengeOpen} onOpenChange={setStackChallengeOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="font-semibold text-sm w-full"
                  aria-label="Open stack challenge game"
                  onClick={() => handleGameClick('Stack Challenge', 'mobile')}
                >
                  Stack Challenge
                </Button>
              </DialogTrigger>
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none w-[95vw] sm:max-w-2xl flex items-center justify-center">
                <StackChallenge onClose={() => setStackChallengeOpen(false)} />
              </DialogContent>
            </Dialog>

            {/* Mobile Burnout Meter Dialog */}
            <Dialog open={burnoutMeterOpen} onOpenChange={setBurnoutMeterOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="font-semibold text-sm w-full"
                  aria-label="Open burnout meter game"
                  onClick={() => handleGameClick('Burnout Meter', 'mobile')}
                >
                  Burnout Meter
                </Button>
              </DialogTrigger>
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none w-[95vw] sm:max-w-2xl flex items-center justify-center">
                <BurnoutMeter onClose={() => setBurnoutMeterOpen(false)} />
              </DialogContent>
            </Dialog>

            {/* Mobile TicTacToe Dialog */}
            <Dialog open={ticTacToeOpen} onOpenChange={setTicTacToeOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="font-semibold text-sm w-full"
                  aria-label="Open tic tac toe game"
                  onClick={() => handleGameClick('Tic Tac Toe', 'mobile')}
                >
                  PM vs Engineer
                </Button>
              </DialogTrigger>
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none w-[95vw] sm:max-w-md flex items-center justify-center">
                <TicTacToeGame onClose={() => setTicTacToeOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-3xl mx-auto w-full px-4 mt-0">
        <About />
      </main>
      
      <footer className="mt-auto py-4 text-center text-gray-300 text-xs tracking-wide">
        &copy; {new Date().getFullYear()} Angshuman Gupta &mdash; En-route to Full Stack Product Person
      </footer>
    </div>
  );
};

export default Index;
