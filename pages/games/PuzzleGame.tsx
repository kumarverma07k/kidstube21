import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TrophyIcon } from '../../components/icons/CategoryIcons';

const GRID_SIZE = 3;
const TILE_COUNT = GRID_SIZE * GRID_SIZE;

const puzzleImages = [
  { id: 1, url: 'https://picsum.photos/seed/puzzle-cat/450/450', name: 'Cute Cat' },
  { id: 2, url: 'https://picsum.photos/seed/puzzle-dog/450/450', name: 'Happy Dog' },
  { id: 3, url: 'https://picsum.photos/seed/puzzle-fox/450/450', name: 'Sly Fox' },
  { id: 4, url: 'https://picsum.photos/seed/puzzle-panda/450/450', name: 'Playful Panda' },
  { id: 5, url: 'https://picsum.photos/seed/puzzle-lion/450/450', name: 'Majestic Lion' },
  { id: 6, url: 'https://picsum.photos/seed/puzzle-monkey/450/450', name: 'Cheeky Monkey' },
  { id: 7, url: 'https://picsum.photos/seed/puzzle-squirrel/450/450', name: 'Busy Squirrel' },
  { id: 8, url: 'https://picsum.photos/seed/puzzle-owl/450/450', name: 'Wise Owl' },
];

const TILE_DIMENSION = 150;

interface Tile {
  id: number;
  style: React.CSSProperties;
}

const PuzzleGame = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [isSolved, setIsSolved] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);

  const level = puzzleImages[currentLevel];
  const IMAGE_URL = level.url;

  const checkSolved = useCallback((currentTiles: Tile[]) => {
    if (currentTiles.length === 0) return false;
    for (let i = 0; i < TILE_COUNT; i++) {
      if (currentTiles[i].id !== i) {
        return false;
      }
    }
    return true;
  }, []);

  const createAndShuffleTiles = useCallback(() => {
    const initialTiles: Tile[] = [];
    for (let i = 0; i < TILE_COUNT; i++) {
      const row = Math.floor(i / GRID_SIZE);
      const col = i % GRID_SIZE;
      initialTiles.push({
        id: i,
        style: {
          backgroundImage: `url(${IMAGE_URL})`,
          backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`,
          backgroundPosition: `${(col * 100) / (GRID_SIZE - 1)}% ${(row * 100) / (GRID_SIZE - 1)}%`,
          width: `${TILE_DIMENSION}px`,
          height: `${TILE_DIMENSION}px`,
        },
      });
    }

    let shuffled;
    do {
      shuffled = [...initialTiles].sort(() => Math.random() - 0.5);
    } while (checkSolved(shuffled));

    setTiles(shuffled);
    setIsSolved(false);
  }, [IMAGE_URL, checkSolved]);

  useEffect(() => {
    createAndShuffleTiles();
  }, [currentLevel, createAndShuffleTiles]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("draggedIndex", index.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    if (isSolved) return;
    const draggedIndex = parseInt(e.dataTransfer.getData("draggedIndex"), 10);
    const newTiles = [...tiles];
    const draggedTile = newTiles[draggedIndex];
    newTiles[draggedIndex] = newTiles[dropIndex];
    newTiles[dropIndex] = draggedTile;

    setTiles(newTiles);
    if (checkSolved(newTiles)) {
      setIsSolved(true);
    }
  };

  const handleNextLevel = () => {
    setCurrentLevel(prev => (prev + 1) % puzzleImages.length);
  };
  
  const handlePlayAgain = () => {
    createAndShuffleTiles();
    setIsSolved(false);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800">Jigsaw Puzzle</h1>
            <p className="text-gray-600 mt-2 text-lg">Level {level.id}: <span className="font-bold">{level.name}</span></p>
            <p className="text-gray-500">Drag and drop the pieces to solve the puzzle!</p>
        </div>

        <div className="flex flex-col items-center">
            <div 
                className="grid gap-1 bg-gray-300 p-1 rounded-lg shadow-lg relative" 
                style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
                onDragOver={(e) => e.preventDefault()}
            >
                {tiles.map((tile, index) => (
                    <div
                        key={`${level.id}-${tile.id}`}
                        draggable={!isSolved}
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        style={tile.style}
                        className={`transition-all duration-300 ${isSolved ? '' : 'cursor-grab active:cursor-grabbing'}`}
                    />
                ))}
                {isSolved && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center rounded-lg p-4">
                        <TrophyIcon className="h-20 w-20 mx-auto text-yellow-400" />
                        <h2 className="text-4xl font-bold text-white mt-4">You Solved It!</h2>
                        <p className="text-yellow-300 text-lg">Great job!</p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <button onClick={handlePlayAgain} className="w-full bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-400 transition-colors duration-300">
                                Play Again
                            </button>
                            <button onClick={handleNextLevel} className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-sky-600 transition-colors duration-300">
                                Next Puzzle
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4 mt-8">
                <button 
                    onClick={createAndShuffleTiles}
                    className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-600 transition-colors duration-300 shadow-md"
                >
                    Shuffle
                </button>
                <div className="bg-white rounded-lg shadow p-2">
                    <img src={IMAGE_URL} alt="Puzzle preview" className="w-24 h-24 rounded" />
                </div>
            </div>
        </div>

        <div className="text-center mt-12">
            <Link to="/games" className="text-sky-600 font-bold hover:underline">
                &larr; Back to all games
            </Link>
        </div>
    </div>
  );
};

export default PuzzleGame;