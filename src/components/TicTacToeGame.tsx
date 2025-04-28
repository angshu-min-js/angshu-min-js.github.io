import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Circle, RefreshCw } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

interface TicTacToeGameProps {
  onClose?: () => void;
}

type Player = 'PM' | 'Engineer';
type Cell = Player | null;
type Board = Cell[];

export const TicTacToeGame: React.FC<TicTacToeGameProps> = ({ onClose }) => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [turn, setTurn] = useState<Player>('PM');
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [pmScore, setPmScore] = useState(0);
  const [engineerScore, setEngineerScore] = useState(0);

  // Check for a winner after each move
  useEffect(() => {
    const currentWinner = checkWinner(board);
    if (currentWinner) {
      setWinner(currentWinner);
      if (currentWinner === 'PM') {
        setPmScore(prev => prev + 1);
        toast("PM wins! 🎉", {
          description: "Your feature priorities won this round!",
        });
      } else if (currentWinner === 'Engineer') {
        setEngineerScore(prev => prev + 1);
        toast("Engineer wins! 💻", {
          description: "Technical debt considerations prevailed!",
        });
      } else if (currentWinner === 'Draw') {
        toast("It's a draw!", {
          description: "A balanced approach between features and tech debt!",
        });
      }
    } else if (!board.includes(null) && !currentWinner) {
      // If board is full and no winner, it's a draw
      setWinner('Draw');
      toast("It's a draw!", {
        description: "A balanced approach between features and tech debt!",
      });
    } else if (turn === 'Engineer' && !winner) {
      // Engineer's turn (computer)
      const timeoutId = setTimeout(() => {
        makeEngineerMove();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [board, turn]);

  // Calculate the best move for the Engineer (computer) using minimax
  const makeEngineerMove = () => {
    if (winner) return;
    
    // Add a random chance (30%) for the Engineer to make a suboptimal move
    const shouldMakeRandomMove = Math.random() < 0.3;
    
    if (shouldMakeRandomMove) {
      // Find all available (empty) cells
      const availableMoves = board.map((cell, index) => cell === null ? index : -1).filter(index => index !== -1);
      
      // Make sure there are available moves
      if (availableMoves.length > 0) {
        // Choose a random empty cell
        const randomIndex = Math.floor(Math.random() * availableMoves.length);
        const randomMove = availableMoves[randomIndex];
        
        // Make the random move
        const newBoard = [...board];
        newBoard[randomMove] = 'Engineer';
        setBoard(newBoard);
        setTurn('PM');
        return;
      }
    }
    
    // If we didn't make a random move, use minimax to find the best move
    const bestMove = findBestMove(board);
    
    // Make the move directly instead of using handleCellClick
    const newBoard = [...board];
    newBoard[bestMove] = 'Engineer';
    setBoard(newBoard);
    setTurn('PM');
  };

  // Minimax algorithm to find the best move
  const findBestMove = (currentBoard: Board): number => {
    let bestScore = -Infinity;
    let bestMove = -1;
    
    // Try all possible moves
    for (let i = 0; i < 9; i++) {
      // Check if the cell is empty
      if (!currentBoard[i]) {
        // Make a hypothetical move
        const newBoard = [...currentBoard];
        newBoard[i] = 'Engineer';
        
        // Calculate score for this move using minimax
        const score = minimax(newBoard, 0, false);
        
        // If this move is better than our best so far, update best move
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    
    return bestMove;
  };

  // Minimax function to recursively evaluate board positions
  const minimax = (currentBoard: Board, depth: number, isMaximizing: boolean): number => {
    // Check if game is over (win/loss/draw)
    const result = checkWinner(currentBoard);
    
    // If game is over, return appropriate score
    if (result === 'Engineer') return 10 - depth; // Win (prefer quicker wins)
    if (result === 'PM') return depth - 10; // Loss (prefer longer losses)
    if (result === 'Draw') return 0; // Draw
    
    if (isMaximizing) {
      // Engineer's turn (maximize score)
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!currentBoard[i]) {
          const newBoard = [...currentBoard];
          newBoard[i] = 'Engineer';
          const score = minimax(newBoard, depth + 1, false);
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      // PM's turn (minimize score)
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!currentBoard[i]) {
          const newBoard = [...currentBoard];
          newBoard[i] = 'PM';
          const score = minimax(newBoard, depth + 1, true);
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner || turn === 'Engineer') return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === 'PM' ? 'Engineer' : 'PM');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn('PM');
  };

  const checkWinner = (board: Board): Player | 'Draw' | null => {
    // Winning combinations: rows, columns, diagonals
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] as Player;
      }
    }
    
    // Check for draw
    if (!board.includes(null)) {
      return 'Draw';
    }
    
    return null;
  };

  const getCellSymbol = (cell: Cell) => {
    if (cell === 'PM') {
      return <X className="h-8 w-8 text-blue-600" />;
    } else if (cell === 'Engineer') {
      return <Circle className="h-8 w-8 text-green-600" />;
    }
    return null;
  };

  const shareUrl = `${window.location.origin}/#/?game=tictactoe`;
  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl);
    toast("Link copied!", { description: "Share this game with others." });
  };

  return (
    <section className="bg-white rounded-lg shadow-xl p-5 max-w-md mx-auto animate-fade-in overflow-y-auto max-h-[90vh] w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-playfair text-xl font-semibold text-primary">
          PM vs Engineer Tic Tac Toe
        </h3>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="h-8 w-8 rounded-full"
            aria-label="Share"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="6" cy="12" r="2" fill="currentColor"/><circle cx="18" cy="6" r="2" fill="currentColor"/><circle cx="18" cy="18" r="2" fill="currentColor"/><line x1="7.5" y1="11" x2="16" y2="7" stroke="currentColor" strokeWidth="2"/><line x1="7.5" y1="13" x2="16" y2="17" stroke="currentColor" strokeWidth="2"/></svg>
          </Button>
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
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <X className="h-5 w-5 text-blue-600 mr-1" />
          <span className="text-sm font-medium text-gray-700">PM: {pmScore}</span>
        </div>
        <div className="text-sm font-medium text-gray-500">
          {winner ? `${winner === 'Draw' ? "It's a draw!" : `${winner} wins!`}` : `${turn}'s turn`}
        </div>
        <div className="flex items-center">
          <Circle className="h-5 w-5 text-green-600 mr-1" />
          <span className="text-sm font-medium text-gray-700">Engineer: {engineerScore}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`
              h-20 w-full bg-gray-50 rounded-md border border-gray-200
              flex items-center justify-center hover:bg-gray-100
              transition-colors duration-200
              ${!cell && !winner && turn === 'PM' ? 'cursor-pointer' : ''}
              ${winner ? 'opacity-80' : ''}
            `}
            onClick={() => handleCellClick(index)}
            disabled={!!cell || !!winner || turn === 'Engineer'}
          >
            {getCellSymbol(cell)}
          </button>
        ))}
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-gray-500">
          PM uses <X className="h-4 w-4 text-blue-600 inline" />, Engineer uses <Circle className="h-4 w-4 text-green-600 inline" />
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={resetGame}
          className="gap-1"
        >
          <RefreshCw size={14} />
          New Game
        </Button>
      </div>
    </section>
  );
}; 