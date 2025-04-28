import React, { useState } from 'react';
import { X, ArrowRight, Check, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

// Define the features and metrics for the matching game
const features = [
  { id: 'f1', name: 'One-click checkout' },
  { id: 'f2', name: 'Product recommendations' },
  { id: 'f3', name: 'Mobile app redesign' },
  { id: 'f4', name: 'Personalized email campaigns' },
  { id: 'f5', name: 'Customer reviews section' }
];

const metrics = [
  { id: 'm1', name: 'Conversion rate' },
  { id: 'm2', name: 'Average order value' },
  { id: 'm3', name: 'User engagement' },
  { id: 'm4', name: 'Customer retention' },
  { id: 'm5', name: 'Click-through rate' }
];

// Define the correct matches for feedback
const correctMatches = {
  f1: 'm1', // One-click checkout -> Conversion rate
  f2: 'm2', // Product recommendations -> Average order value
  f3: 'm3', // Mobile app redesign -> User engagement
  f4: 'm5', // Personalized email campaigns -> Click-through rate
  f5: 'm4'  // Customer reviews section -> Customer retention
};

interface FeatureMetricMatcherProps {
  onClose: () => void;
}

export const FeatureMetricMatcher: React.FC<FeatureMetricMatcherProps> = ({ onClose }) => {
  // State to track the currently selected feature and user's matches
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [userMatches, setUserMatches] = useState<Record<string, string>>({});
  const [gameComplete, setGameComplete] = useState(false);
  
  console.log('FeatureMetricMatcher rendered', { selectedFeature, userMatches });

  // Handle feature selection
  const handleSelectFeature = (featureId: string) => {
    setSelectedFeature(featureId);
  };

  // Handle metric selection
  const handleSelectMetric = (metricId: string) => {
    if (selectedFeature) {
      // Update matches
      setUserMatches(prev => ({
        ...prev,
        [selectedFeature]: metricId
      }));
      // Clear selected feature
      setSelectedFeature(null);
    }
  };

  // Reset a specific match
  const resetMatch = (featureId: string) => {
    const newMatches = { ...userMatches };
    delete newMatches[featureId];
    setUserMatches(newMatches);
  };

  // Check user's matches against correct answers
  const checkAnswers = () => {
    const totalFeatures = features.length;
    const matchedFeatures = Object.keys(userMatches).length;
    
    if (matchedFeatures < totalFeatures) {
      toast("Complete all matches", {
        description: `You've matched ${matchedFeatures} of ${totalFeatures} features.`,
      });
      return;
    }
    
    let correctCount = 0;
    Object.entries(userMatches).forEach(([featureId, metricId]) => {
      if (correctMatches[featureId] === metricId) {
        correctCount++;
      }
    });
    
    const percentage = Math.round((correctCount / totalFeatures) * 100);
    
    if (percentage === 100) {
      toast("🎉 Perfect match!", {
        description: `You matched all features correctly!`,
      });
    } else {
      toast(`You scored ${percentage}%`, {
        description: `${correctCount} of ${totalFeatures} matches were correct.`,
      });
    }
    
    setGameComplete(true);
  };

  // Reset the game
  const resetGame = () => {
    setUserMatches({});
    setSelectedFeature(null);
    setGameComplete(false);
  };

  // Get the name of the matched metric for a feature
  const getMatchedMetricName = (featureId: string) => {
    const metricId = userMatches[featureId];
    if (!metricId) return null;
    return metrics.find(m => m.id === metricId)?.name;
  };

  const shareUrl = `${window.location.origin}/#/?game=feature-metric`;
  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl);
    toast("Link copied!", { description: "Share this game with others." });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Feature-Metric Matcher</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="h-8 w-8 rounded-full text-white hover:bg-primary/80"
            aria-label="Share"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="6" cy="12" r="2" fill="currentColor"/><circle cx="18" cy="6" r="2" fill="currentColor"/><circle cx="18" cy="18" r="2" fill="currentColor"/><line x1="7.5" y1="11" x2="16" y2="7" stroke="currentColor" strokeWidth="2"/><line x1="7.5" y1="13" x2="16" y2="17" stroke="currentColor" strokeWidth="2"/></svg>
          </Button>
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
      </div>
      
      {/* Game content */}
      <div className="p-6">
        <p className="text-gray-700 mb-4">
          Match each product feature with the metric it would most directly impact.
          Select a feature first, then select a metric to create a match.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Features column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Features</h3>
            <ul className="space-y-2">
              {features.map(feature => {
                const isSelected = selectedFeature === feature.id;
                const isMatched = userMatches[feature.id] !== undefined;
                
                return (
                  <li key={feature.id} className="relative">
                    <div 
                      className={`
                        p-3 border rounded-md cursor-pointer transition-all
                        ${isSelected ? 'border-primary bg-primary/10 font-medium' : 'border-gray-200 hover:border-gray-300'}
                        ${isMatched ? 'border-green-500 bg-green-50' : ''}
                      `}
                      onClick={() => !isMatched && handleSelectFeature(feature.id)}
                    >
                      {feature.name}
                      
                      {isMatched && (
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <ArrowRight size={14} className="mr-1" />
                          <span>{getMatchedMetricName(feature.id)}</span>
                          <button 
                            className="ml-auto text-red-500 hover:text-red-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              resetMatch(feature.id);
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
          
          {/* Metrics column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Metrics</h3>
            <ul className="space-y-2">
              {metrics.map(metric => {
                // Check if this metric is already matched
                const isUsed = Object.values(userMatches).includes(metric.id);
                const isActive = selectedFeature !== null;
                
                return (
                  <li key={metric.id}>
                    <div 
                      className={`
                        p-3 border rounded-md transition-all
                        ${isUsed ? 'border-gray-300 bg-gray-100 text-gray-500' : 'border-gray-200'}
                        ${isActive && !isUsed ? 'cursor-pointer hover:border-primary hover:bg-primary/5' : ''}
                        ${!isActive ? 'opacity-80' : ''}
                      `}
                      onClick={() => isActive && !isUsed && handleSelectMetric(metric.id)}
                    >
                      {metric.name}
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