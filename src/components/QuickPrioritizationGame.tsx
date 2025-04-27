import React, { useState } from "react";
import { ArrowUp, ArrowDown, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const initialTasks = [
  { id: 1, label: "Launch MVP feature" },
  { id: 2, label: "Fix critical user bug" },
  { id: 3, label: "Optimize onboarding flow" },
  { id: 4, label: "Prepare stakeholder update" },
  { id: 5, label: "Review analytics dashboard" },
];

const correctOrder = [2, 1, 3, 4, 5]; // Example "best-practice" order for immediate feedback

interface QuickPrioritizationGameProps {
  onClose?: () => void;
}

export const QuickPrioritizationGame: React.FC<QuickPrioritizationGameProps> = ({ onClose }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleMove = (fromIdx: number, direction: "up" | "down") => {
    const newTasks = [...tasks];
    const toIdx = direction === "up" ? fromIdx - 1 : fromIdx + 1;
    if (toIdx < 0 || toIdx >= tasks.length) return;
    [newTasks[fromIdx], newTasks[toIdx]] = [newTasks[toIdx], newTasks[fromIdx]];
    setTasks(newTasks);
  };

  const handleCheck = () => {
    const current = tasks.map((t) => t.id);
    const isCorrect =
      current.length === correctOrder.length &&
      current.every((id, i) => id === correctOrder[i]);
    if (isCorrect) {
      toast("🎉 Great prioritization!", {
        description: "You've matched the ideal order.",
      });
    } else {
      toast("🔄 Try again", {
        description: "Think about urgency and impact.",
      });
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-xl p-5 max-w-xl mx-auto animate-fade-in overflow-y-auto max-h-[90vh] w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-playfair text-xl font-semibold text-primary">
          Quick Prioritization Game
        </h3>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <p className="text-gray-700 text-sm mb-4">
        Drag tasks to order them by priority. Put the most urgent or impactful at the top!
      </p>
      <ul className="space-y-2 mb-4">
        {tasks.map((task, idx) => (
          <li
            key={task.id}
            className="flex items-center justify-between px-3 py-2 rounded bg-gray-50 border border-gray-200"
          >
            <span className="flex-1 text-gray-800">{task.label}</span>
            <div className="flex gap-1 ml-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent h-8 w-8"
                aria-label="Move up"
                disabled={idx === 0}
                onClick={() => handleMove(idx, "up")}
              >
                <ArrowUp size={16} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent h-8 w-8"
                aria-label="Move down"
                disabled={idx === tasks.length - 1}
                onClick={() => handleMove(idx, "down")}
              >
                <ArrowDown size={16} />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Button onClick={handleCheck} variant="default">
        <Check size={18} className="mr-1" />
        Check My Order
      </Button>
    </section>
  );
};

