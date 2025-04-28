import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { X } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

interface Task {
  id: string;
  name: string;
  effort: number;
  impact: number;
  notes: string;
}

interface Sprint {
  tasks: Task[];
  totalEffort: number;
  totalImpact: number;
  teamFeedback: string;
}

const initialTasks: Task[] = [
  { id: '1', name: 'Add Dark Mode', effort: 2, impact: 3, notes: 'Low burnout, low impact' },
  { id: '2', name: 'Launch AI Assistant', effort: 7, impact: 10, notes: 'High impact, high risk of burnout' },
  { id: '3', name: 'Add Tooltips to Dashboard', effort: 1, impact: 1, notes: 'Very low lift, very low value' },
  { id: '4', name: 'Refactor Auth System', effort: 6, impact: 6, notes: 'Critical backend task' },
  { id: '5', name: 'Daily Standups', effort: 1, impact: 2, notes: 'Boosts morale (lowers burnout)' },
  { id: '6', name: 'Implement Analytics', effort: 4, impact: 5, notes: 'Medium effort, good impact' },
];

const TEAM_CAPACITY = 15;

export const BurnoutMeter = ({ onClose }: { onClose: () => void }) => {
  const [currentSprint, setCurrentSprint] = useState(1);
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);
  const [sprints, setSprints] = useState<Sprint[]>([]);
  const [burnoutLevel, setBurnoutLevel] = useState(0);
  const [totalImpact, setTotalImpact] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const totalEffort = selectedTasks.reduce((sum, task) => sum + task.effort, 0);
  const currentImpact = selectedTasks.reduce((sum, task) => sum + task.impact, 0);

  const handleTaskSelect = (task: Task) => {
    if (selectedTasks.some(t => t.id === task.id)) {
      setSelectedTasks(selectedTasks.filter(t => t.id !== task.id));
    } else {
      setSelectedTasks([...selectedTasks, task]);
    }
  };

  const handleSprintComplete = () => {
    const teamFeedback = totalEffort > TEAM_CAPACITY 
      ? "We're overwhelmed!" 
      : "Well-paced!";

    const newSprint: Sprint = {
      tasks: [...selectedTasks],
      totalEffort,
      totalImpact: currentImpact,
      teamFeedback,
    };

    setSprints([...sprints, newSprint]);
    setTotalImpact(totalImpact + currentImpact);
    
    // Update burnout level
    const newBurnoutLevel = Math.min(100, burnoutLevel + (totalEffort > TEAM_CAPACITY ? 30 : 0));
    setBurnoutLevel(newBurnoutLevel);

    // Move to next sprint or end game
    if (currentSprint < 3) {
      setCurrentSprint(currentSprint + 1);
      setSelectedTasks([]);
    } else {
      setGameOver(true);
    }
  };

  const getBurnoutStatus = () => {
    if (burnoutLevel < 30) return "Happy team";
    if (burnoutLevel < 70) return "Okay";
    return "Burned out";
  };

  const getEndGameMessage = () => {
    if (burnoutLevel < 30) return "You're a Visionary PM with a happy team! 🎉";
    if (burnoutLevel < 70) return "You're a Balanced PM, but could improve team happiness 😊";
    return "You're a Visionary PM but your team quit on you 😅";
  };

  const getBurnoutColor = () => {
    if (burnoutLevel < 30) return "bg-green-500";
    if (burnoutLevel < 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const shareUrl = `${window.location.origin}/#/?game=burnout-meter`;
  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl);
    toast("Link copied!", { description: "Share this game with others." });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto">
      <div className="bg-primary text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Burnout Meter</h2>
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

      <div className="p-6">
        {!gameOver ? (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Sprint {currentSprint}/3</h3>
              <div className="flex flex-wrap justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Team Capacity: {TEAM_CAPACITY}</span>
                <span className={`text-sm font-semibold ${totalEffort > TEAM_CAPACITY ? 'text-red-500' : 'text-green-500'}`}>
                  Total Effort: {totalEffort}
                </span>
              </div>
              <Progress value={(totalEffort / TEAM_CAPACITY) * 100} className="mb-4" />
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Burnout Meter</h4>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full ${getBurnoutColor()}`}
                    style={{ width: `${burnoutLevel}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {initialTasks.map(task => (
                <Card 
                  key={task.id}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedTasks.some(t => t.id === task.id) ? 'border-primary bg-gray-50' : ''
                  }`}
                  onClick={() => handleTaskSelect(task)}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <h4 className="font-semibold">{task.name}</h4>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Effort: {task.effort}</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Impact: {task.impact}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{task.notes}</p>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div>
                <p className="text-sm text-gray-600">Total Impact: {currentImpact}</p>
                {totalEffort > TEAM_CAPACITY && (
                  <p className="text-sm text-red-500">Warning: Team is overloaded!</p>
                )}
              </div>
              <Button 
                onClick={handleSprintComplete}
                disabled={selectedTasks.length === 0}
              >
                Complete Sprint
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">Game Over!</h3>
            <div className="mb-6">
              <p className="text-lg mb-2">Final Impact Score: {totalImpact}</p>
              <p className="text-lg mb-2">Team Status: {getBurnoutStatus()}</p>
              <p className="text-xl font-semibold text-primary">{getEndGameMessage()}</p>
            </div>
            <Button onClick={() => {
              setCurrentSprint(1);
              setSelectedTasks([]);
              setSprints([]);
              setBurnoutLevel(0);
              setTotalImpact(0);
              setGameOver(false);
            }}>
              Play Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}; 