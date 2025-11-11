import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrophyIcon, UndoIcon } from '../../components/icons/CategoryIcons';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFA1', '#FFC300', '#C70039', '#900C3F', '#581845', '#FFFFFF', '#000000'];
const blankColor = '#f3f4f6';

interface SVGProps {
    fills: { [key: string]: string };
    onFill: (id: string) => void;
}

const CottageSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="walls" onClick={() => onFill('walls')} fill={fills.walls || blankColor} d="M 40 80 L 160 80 L 160 170 L 40 170 Z"/>
            <path id="roof" onClick={() => onFill('roof')} fill={fills.roof || blankColor} d="M 30 80 L 100 30 L 170 80 Z"/>
            <path id="door" onClick={() => onFill('door')} fill={fills.door || blankColor} d="M 90 120 L 110 120 L 110 170 L 90 170 Z"/>
            <rect id="window" onClick={() => onFill('window')} fill={fills.window || blankColor} x="55" y="100" width="25" height="25"/>
            <path id="chimney" onClick={() => onFill('chimney')} fill={fills.chimney || blankColor} d="M 130 50 L 145 50 L 145 70 L 130 70 Z"/>
            <circle id="smoke" onClick={() => onFill('smoke')} fill={fills.smoke || blankColor} cx="137.5" cy="40" r="8"/>
        </g>
    </svg>
);

const ModernHouseSVG = ({ fills, onFill }: SVGProps) => (
     <svg width="100%" height="100%" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <rect id="garage" onClick={() => onFill('garage')} fill={fills.garage || blankColor} x="30" y="100" width="60" height="70" />
            <rect id="main_block" onClick={() => onFill('main_block')} fill={fills.main_block || blankColor} x="90" y="60" width="80" height="110" />
            <rect id="roof" onClick={() => onFill('roof')} fill={fills.roof || blankColor} x="20" y="50" width="160" height="10" />
            <rect id="window" onClick={() => onFill('window')} fill={fills.window || blankColor} x="105" y="75" width="50" height="30" />
            <rect id="door" onClick={() => onFill('door')} fill={fills.door || blankColor} x="110" y="120" width="25" height="50" />
        </g>
    </svg>
);

const CastleSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="tower_left" onClick={() => onFill('tower_left')} fill={fills.tower_left || blankColor} d="M 30 80 L 60 80 L 60 170 L 30 170 Z" />
            <path id="tower_right" onClick={() => onFill('tower_right')} fill={fills.tower_right || blankColor} d="M 140 80 L 170 80 L 170 170 L 140 170 Z" />
            <path id="main_wall" onClick={() => onFill('main_wall')} fill={fills.main_wall || blankColor} d="M 60 100 L 140 100 L 140 170 L 60 170 Z" />
            <path id="roof_left" onClick={() => onFill('roof_left')} fill={fills.roof_left || blankColor} d="M 25 80 L 45 40 L 65 80 Z" />
            <path id="roof_right" onClick={() => onFill('roof_right')} fill={fills.roof_right || blankColor} d="M 135 80 L 155 40 L 175 80 Z" />
            <path id="door" onClick={() => onFill('door')} fill={fills.door || blankColor} d="M 90 130 A 10 10 0 0 1 110 130 L 110 170 L 90 170 Z" />
            <path id="flag" onClick={() => onFill('flag')} fill={fills.flag || blankColor} d="M 155 40 L 155 20 L 170 25 Z" />
        </g>
    </svg>
);

const LighthouseSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="sea" onClick={() => onFill('sea')} fill={fills.sea || blankColor} d="M 0 160 Q 50 140 100 160 T 200 160 V 200 H 0 Z" />
            <path id="rocks" onClick={() => onFill('rocks')} fill={fills.rocks || blankColor} d="M 40 150 L 160 150 L 150 170 L 50 170 Z" />
            <path id="tower" onClick={() => onFill('tower')} fill={fills.tower || blankColor} d="M 80 50 L 120 50 L 130 150 L 70 150 Z" />
            <rect id="top_section" onClick={() => onFill('top_section')} fill={fills.top_section || blankColor} x="75" y="30" width="50" height="20" />
            <path id="roof" onClick={() => onFill('roof')} fill={fills.roof || blankColor} d="M 70 30 L 100 10 L 130 30 Z" />
            <circle id="light" onClick={() => onFill('light')} fill={fills.light || blankColor} cx="100" cy="40" r="8" />
        </g>
    </svg>
);

const TreehouseSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="leaves" onClick={() => onFill('leaves')} fill={fills.leaves || blankColor} d="M 100 60 A 70 50 0 1 0 101 60 Z" />
            <rect id="trunk" onClick={() => onFill('trunk')} fill={fills.trunk || blankColor} x="90" y="80" width="20" height="140" />
            <rect id="house" onClick={() => onFill('house')} fill={fills.house || blankColor} x="60" y="90" width="80" height="60" />
            <path id="roof" onClick={() => onFill('roof')} fill={fills.roof || blankColor} d="M 55 90 L 100 60 L 145 90 Z" />
            <rect id="window" onClick={() => onFill('window')} fill={fills.window || blankColor} x="90" y="110" width="20" height="20" />
            <path id="ladder" onClick={() => onFill('ladder')} stroke={fills.ladder || '#4b5563'} fill="none" strokeWidth="3" d="M 70 150 L 70 200 M 80 150 L 80 200 M 70 160 H 80 M 70 175 H 80 M 70 190 H 80" />
        </g>
    </svg>
);


const levels = [
  { id: 1, name: 'Cozy Cottage', SvgComponent: CottageSVG, parts: ['walls', 'roof', 'door', 'window', 'chimney', 'smoke'] },
  { id: 2, name: 'Modern House', SvgComponent: ModernHouseSVG, parts: ['garage', 'main_block', 'roof', 'window', 'door'] },
  { id: 3, name: 'Grand Castle', SvgComponent: CastleSVG, parts: ['tower_left', 'tower_right', 'main_wall', 'roof_left', 'roof_right', 'door', 'flag'] },
  { id: 4, name: 'Seaside Lighthouse', SvgComponent: LighthouseSVG, parts: ['sea', 'rocks', 'tower', 'top_section', 'roof', 'light'] },
  { id: 5, name: 'Fun Treehouse', SvgComponent: TreehouseSVG, parts: ['leaves', 'trunk', 'house', 'roof', 'window', 'ladder'] }
];

const HouseColoringGame = () => {
    const [currentLevel, setCurrentLevel] = useState(0);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [fills, setFills] = useState<{ [key: string]: string }>({});
    const [showCompletionModal, setShowCompletionModal] = useState(false);
    const [history, setHistory] = useState<{ partId: string; oldColor: string }[]>([]);

    const level = levels[currentLevel];
    const isComplete = level.parts.every(part => fills[part] && fills[part] !== blankColor);

    const handleFill = (id: string) => {
        const oldColor = fills[id] || blankColor;
        const newColor = selectedColor;

        if (oldColor === newColor) return;

        setHistory(prevHistory => [...prevHistory, { partId: id, oldColor }]);
        setFills(prevFills => ({ ...prevFills, [id]: newColor }));
    };
    
    const handleUndo = () => {
        if (history.length === 0) return;

        const lastAction = history[history.length - 1];
        setFills(prevFills => ({
            ...prevFills,
            [lastAction.partId]: lastAction.oldColor,
        }));
        setHistory(prevHistory => prevHistory.slice(0, -1));
    };

    const handleSubmit = () => {
        if (isComplete) {
            setShowCompletionModal(true);
        }
    };
    
    const handleNextLevel = () => {
        setShowCompletionModal(false);
        setFills({});
        setHistory([]);
        setCurrentLevel(prev => (prev + 1) % levels.length);
    }
    
    const handlePlayAgain = () => {
        setShowCompletionModal(false);
        setFills({});
        setHistory([]);
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">House Coloring</h1>
                <p className="text-gray-600 mt-2 text-lg">Level {level.id}: <span className="font-bold">{level.name}</span></p>
                <p className="text-gray-500">Let's decorate some beautiful houses!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center aspect-w-1 aspect-h-1">
                    <level.SvgComponent fills={fills} onFill={handleFill} />
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">Color Palette</h3>
                    <div className="grid grid-cols-4 gap-3">
                        {colors.map(color => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-full h-12 rounded-lg transition-transform duration-200 border-2 ${selectedColor === color ? 'ring-4 ring-sky-400 scale-110' : 'hover:scale-110'}`}
                                style={{ backgroundColor: color, borderColor: color === '#FFFFFF' ? '#e5e7eb' : 'transparent' }}
                                aria-label={`Select color ${color}`}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                        <button 
                            onClick={handleUndo} 
                            disabled={history.length === 0} 
                            className="w-auto bg-gray-300 text-gray-800 font-bold p-3 rounded-full text-lg hover:bg-gray-400 transition-colors duration-300 shadow-md disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed flex-shrink-0"
                            aria-label="Undo last action"
                        >
                            <UndoIcon className="h-6 w-6" />
                        </button>
                        <button onClick={handleSubmit} disabled={!isComplete} className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition-colors duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed">
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <Link to="/games" className="text-sky-600 font-bold hover:underline">
                    &larr; Back to all games
                </Link>
            </div>
            
            {showCompletionModal && (
                 <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center" role="dialog" aria-modal="true">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm m-4 text-center">
                        <TrophyIcon className="h-20 w-20 mx-auto text-yellow-400" />
                        <h2 className="text-3xl font-bold text-gray-800 mt-4">Fantastic!</h2>
                        <p className="text-gray-600 mt-2">The {level.name} looks amazing with your colors!</p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <button onClick={handlePlayAgain} className="w-full bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-400 transition-colors duration-300">
                                Color Again
                            </button>
                            <button onClick={handleNextLevel} className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-sky-600 transition-colors duration-300">
                                Next House
                            </button>
                        </div>
                    </div>
                 </div>
            )}
        </div>
    );
};

export default HouseColoringGame;