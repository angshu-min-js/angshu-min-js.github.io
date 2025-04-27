import React, { useState } from 'react';
import { ArrowRight, Check, RefreshCw, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

// Define use cases and technology stacks for the matching game
const useCases = [
  { id: 'uc1', name: 'Real-time Chat Application' },
  { id: 'uc2', name: 'E-commerce Platform' },
  { id: 'uc3', name: 'Data Analytics Dashboard' },
  { id: 'uc4', name: 'Mobile Banking App' },
  { id: 'uc5', name: 'Content Management System' }
];

const techStacks = [
  { id: 'ts1', name: 'Firebase + React + WebSockets' },
  { id: 'ts2', name: 'Next.js + MongoDB + Stripe' },
  { id: 'ts3', name: 'Python + D3.js + PostgreSQL' },
  { id: 'ts4', name: 'React Native + Node.js + OAuth' },
  { id: 'ts5', name: 'WordPress + PHP + MySQL' }
];

// Define the correct matches for feedback
const correctMatches = {
  uc1: 'ts1', // Real-time Chat → Firebase + React + WebSockets
  uc2: 'ts2', // E-commerce Platform → Next.js + MongoDB + Stripe
  uc3: 'ts3', // Data Analytics Dashboard → Python + D3.js + PostgreSQL
  uc4: 'ts4', // Mobile Banking App → React Native + Node.js + OAuth
  uc5: 'ts5'  // Content Management System → WordPress + PHP + MySQL
};

interface StackChallengeProps {
  onClose: () => void;
}

export const StackChallenge: React.FC<StackChallengeProps> = ({ onClose }) => {
  // State to track the currently selected use case and user's matches
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [userMatches, setUserMatches] = useState<Record<string, string>>({});
  const [gameComplete, setGameComplete] = useState(false);
  
  console.log('StackChallenge rendered', { selectedUseCase, userMatches });

  // Handle use case selection
  const handleSelectUseCase = (useCaseId: string) => {
    setSelectedUseCase(useCaseId);
  };

  // Handle tech stack selection
  const handleSelectTechStack = (techStackId: string) => {
    if (selectedUseCase) {
      // Update matches
      setUserMatches(prev => ({
        ...prev,
        [selectedUseCase]: techStackId
      }));
      // Clear selected use case
      setSelectedUseCase(null);
    }
  };

  // Reset a specific match
  const resetMatch = (useCaseId: string) => {
    const newMatches = { ...userMatches };
    delete newMatches[useCaseId];
    setUserMatches(newMatches);
  };

  // Check user's matches against correct answers
  const checkAnswers = () => {
    const totalUseCases = useCases.length;
    const matchedUseCases = Object.keys(userMatches).length;
    
    if (matchedUseCases < totalUseCases) {
      toast("Complete all matches", {
        description: `You've matched ${matchedUseCases} of ${totalUseCases} use cases.`,
      });
      return;
    }
    
    let correctCount = 0;
    Object.entries(userMatches).forEach(([useCaseId, techStackId]) => {
      if (correctMatches[useCaseId] === techStackId) {
        correctCount++;
      }
    });
    
    const percentage = Math.round((correctCount / totalUseCases) * 100);
    
    if (percentage === 100) {
      toast("🎉 Perfect match!", {
        description: `You've selected all the right tech stacks!`,
      });
    } else if (percentage >= 80) {
      toast(`Great job! You scored ${percentage}%`, {
        description: `${correctCount} of ${totalUseCases} matches were correct.`,
      });
    } else {
      toast(`You scored ${percentage}%`, {
        description: `${correctCount} of ${totalUseCases} matches were correct. Try again!`,
      });
    }
    
    setGameComplete(true);
  };

  // Reset the game
  const resetGame = () => {
    setUserMatches({});
    setSelectedUseCase(null);
    setGameComplete(false);
  };

  // Get the name of the matched tech stack for a use case
  const getMatchedTechStackName = (useCaseId: string) => {
    const techStackId = userMatches[useCaseId];
    if (!techStackId) return null;
    return techStacks.find(ts => ts.id === techStackId)?.name;
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Stack Challenge</h2>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full text-white hover:bg-primary/80"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Game content */}
      <div className="p-6">
        <p className="text-gray-700 mb-4">
          Match each product use case with the most appropriate tech stack.
          Select a use case first, then select a tech stack you'd recommend.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Use Cases column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Use Cases</h3>
            <ul className="space-y-2">
              {useCases.map(useCase => {
                const isSelected = selectedUseCase === useCase.id;
                const isMatched = userMatches[useCase.id] !== undefined;
                
                return (
                  <li key={useCase.id} className="relative">
                    <div 
                      className={`
                        p-3 border rounded-md cursor-pointer transition-all
                        ${isSelected ? 'border-primary bg-primary/10 font-medium' : 'border-gray-200 hover:border-gray-300'}
                        ${isMatched ? 'border-green-500 bg-green-50' : ''}
                      `}
                      onClick={() => !isMatched && handleSelectUseCase(useCase.id)}
                    >
                      {useCase.name}
                      
                      {isMatched && (
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <ArrowRight size={14} className="mr-1" />
                          <span>{getMatchedTechStackName(useCase.id)}</span>
                          <button 
                            className="ml-auto text-red-500 hover:text-red-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              resetMatch(useCase.id);
                            }}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Tech Stacks column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Tech Stacks</h3>
            <ul className="space-y-2">
              {techStacks.map(techStack => {
                // Check if this tech stack is already matched
                const isUsed = Object.values(userMatches).includes(techStack.id);
                const isActive = selectedUseCase !== null;
                
                return (
                  <li key={techStack.id}>
                    <div 
                      className={`
                        p-3 border rounded-md transition-all
                        ${isUsed ? 'border-gray-300 bg-gray-100 text-gray-500' : 'border-gray-200'}
                        ${isActive && !isUsed ? 'cursor-pointer hover:border-primary hover:bg-primary/5' : ''}
                        ${!isActive ? 'opacity-80' : ''}
                      `}
                      onClick={() => isActive && !isUsed && handleSelectTechStack(techStack.id)}
                    >
                      {techStack.name}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={resetGame}
            className="gap-1"
          >
            <RefreshCw size={16} />
            Reset
          </Button>
          
          <Button 
            onClick={checkAnswers}
            className="gap-1"
            disabled={Object.keys(userMatches).length === 0}
          >
            <Check size={16} />
            Check Matches
          </Button>
        </div>
      </div>
    </div>
  );
}; 