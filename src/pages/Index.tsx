import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { About } from "@/components/About";
import { ResumeLinks } from "@/components/ResumeLinks";
import { QuickPrioritizationGame } from "@/components/QuickPrioritizationGame";
import { FeatureMetricMatcher } from "@/components/FeatureMetricMatcher";
import { StackChallenge } from "@/components/StackChallenge";
import { BurnoutMeter } from "@/components/BurnoutMeter";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

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

  // Debug dialog status
  useEffect(() => {
    console.log("Dialog states:", { 
      prioritizationOpen, 
      featureMetricOpen, 
      stackChallengeOpen,
      burnoutMeterOpen 
    });
  }, [prioritizationOpen, featureMetricOpen, stackChallengeOpen, burnoutMeterOpen]);

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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Enhanced header with navigation elements */}
      <header className="w-full pt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Social links */}
          <div className="hidden lg:flex lg:w-1/5 mb-6 lg:mb-0 justify-end pr-8">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">Connect With Me</h3>
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
            {/* Mobile-only social links */}
            <div className="flex lg:hidden mt-6 mb-4">
              <SocialLinks vertical={false} />
            </div>
          </div>
          
          {/* Right side - Resume links and Interactive games */}
          <div className="hidden lg:flex lg:w-1/5 mb-6 lg:mb-0 flex-col items-start pl-8">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Resources</h3>
            <ResumeLinks vertical={true} />
            
            <h3 className="text-sm font-medium text-gray-500 mt-6 mb-3">Interactive PM Games</h3>
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
            </div>
          </div>
        </div>
        
        {/* Mobile-only resume links and game buttons */}
        <div className="flex lg:hidden flex-col items-center mt-4 mb-6 px-4">
          <ResumeLinks vertical={false} />
          <div className="w-full max-w-xs mt-4 space-y-2">
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
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-xl flex items-center justify-center">
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
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-2xl flex items-center justify-center">
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
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-2xl flex items-center justify-center">
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
              <DialogContent hideCloseButton className="p-0 bg-transparent border-none shadow-none max-w-2xl flex items-center justify-center">
                <BurnoutMeter onClose={() => setBurnoutMeterOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-3xl mx-auto w-full px-4 mt-0">
        <About />
      </main>
      
      <footer className="mt-auto py-8 text-center text-gray-300 text-xs tracking-wide">
        &copy; {new Date().getFullYear()} Angshuman Gupta &mdash; En-route to Full Stack Product Person
      </footer>
    </div>
  );
};

export default Index;
