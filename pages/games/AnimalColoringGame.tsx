import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrophyIcon, UndoIcon } from '../../components/icons/CategoryIcons';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFA1', '#FFC300', '#C70039', '#900C3F', '#581845', '#FFFFFF', '#000000'];
const blankColor = '#f3f4f6';

interface SVGProps {
    fills: { [key: string]: string };
    onFill: (id: string) => void;
}

const LionSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="mane" onClick={() => onFill('mane')} fill={fills.mane || blankColor} d="M 100 90 A 50 60 0 1 0 101 90 Z" />
            <path id="body" onClick={() => onFill('body')} fill={fills.body || blankColor} d="M 80 100 L 120 100 L 130 150 L 70 150 Z" />
            <circle id="face" onClick={() => onFill('face')} fill={fills.face || blankColor} cx="100" cy="90" r="30" />
            <circle id="eye_left" onClick={() => onFill('eye_left')} fill={fills.eye_left || '#000'} cx="90" cy="85" r="3" />
            <circle id="eye_right" onClick={() => onFill('eye_right')} fill={fills.eye_right || '#000'} cx="110" cy="85" r="3" />
            <path id="nose" onClick={() => onFill('nose')} fill={fills.nose || '#000'} d="M 98 95 L 102 95 L 100 98 Z" />
            <path id="tail" onClick={() => onFill('tail')} fill={fills.tail || blankColor} stroke={fills.tail || '#4b5563'} d="M 130 140 Q 150 120 160 100" strokeWidth="2" />
            <circle id="tail_tip" onClick={() => onFill('tail_tip')} fill={fills.tail_tip || blankColor} cx="160" cy="100" r="5" />
        </g>
    </svg>
);

const ElephantSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="ear_left" onClick={() => onFill('ear_left')} fill={fills.ear_left || blankColor} d="M 80 60 A 40 40 0 0 1 40 80 L 70 90 Z" />
            <path id="ear_right" onClick={() => onFill('ear_right')} fill={fills.ear_right || blankColor} d="M 150 60 A 40 40 0 0 0 190 80 L 160 90 Z" />
            <path id="body" onClick={() => onFill('body')} fill={fills.body || blankColor} d="M 70 80 L 160 80 A 40 40 0 0 1 160 160 L 70 160 A 40 40 0 0 1 70 80 Z" />
            <path id="head" onClick={() => onFill('head')} fill={fills.head || blankColor} d="M 100 40 A 30 30 0 0 1 130 70 L 100 80 L 70 70 A 30 30 0 0 1 100 40 Z" />
            <path id="trunk" onClick={() => onFill('trunk')} fill={fills.trunk || blankColor} d="M 100 80 Q 90 120 110 130" stroke={fills.trunk || '#4b5563'} strokeWidth="8" />
            <circle id="eye" onClick={() => onFill('eye')} fill={fills.eye || '#000'} cx="115" cy="65" r="3" />
        </g>
    </svg>
);

const MonkeySVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="tail" onClick={() => onFill('tail')} fill="none" stroke={fills.tail || '#4b5563'} strokeWidth="5" d="M 140 120 Q 180 100 170 60" />
            <circle id="head" onClick={() => onFill('head')} fill={fills.head || blankColor} cx="100" cy="80" r="40" />
            <circle id="body" onClick={() => onFill('body')} fill={fills.body || blankColor} cx="100" cy="140" r="30" />
            <path id="face" onClick={() => onFill('face')} fill={fills.face || blankColor} d="M 100 70 A 25 30 0 0 0 100 100 A 25 30 0 0 0 100 70" />
            <circle id="eye_left" onClick={() => onFill('eye_left')} fill="#000" cx="90" cy="75" r="4" />
            <circle id="eye_right" onClick={() => onFill('eye_right')} fill="#000" cx="110" cy="75" r="4" />
            <path id="mouth" onClick={() => onFill('mouth')} fill="none" stroke="#000" strokeWidth="2" d="M 95 90 Q 100 95 105 90" />
            <path id="ear_left" onClick={() => onFill('ear_left')} fill={fills.ear_left || blankColor} d="M 60 80 A 10 15 0 1 1 61 80" />
            <path id="ear_right" onClick={() => onFill('ear_right')} fill={fills.ear_right || blankColor} d="M 140 80 A 10 15 0 1 0 141 80" />
        </g>
    </svg>
);

const BearSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <circle id="ear_left" onClick={() => onFill('ear_left')} fill={fills.ear_left || blankColor} cx="65" cy="65" r="15" />
            <circle id="ear_right" onClick={() => onFill('ear_right')} fill={fills.ear_right || blankColor} cx="135" cy="65" r="15" />
            <circle id="head" onClick={() => onFill('head')} fill={fills.head || blankColor} cx="100" cy="100" r="50" />
            <circle id="snout" onClick={() => onFill('snout')} fill={fills.snout || blankColor} cx="100" cy="115" r="25" />
            <circle id="nose" onClick={() => onFill('nose')} fill={fills.nose || '#000'} cx="100" cy="110" r="8" />
            <circle id="eye_left" onClick={() => onFill('eye_left')} fill={fills.eye_left || '#000'} cx="85" cy="90" r="5" />
            <circle id="eye_right" onClick={() => onFill('eye_right')} fill={fills.eye_right || '#000'} cx="115" cy="90" r="5" />
            <path id="mouth" onClick={() => onFill('mouth')} stroke="#000" fill="none" strokeWidth="2" d="M 90 125 Q 100 135 110 125" />
        </g>
    </svg>
);

const GiraffeSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="body" onClick={() => onFill('body')} fill={fills.body || blankColor} d="M 100 100 L 160 120 L 150 180 L 80 180 Z" />
            <path id="neck" onClick={() => onFill('neck')} fill={fills.neck || blankColor} d="M 90 50 L 110 50 L 100 100 Z" />
            <circle id="head" onClick={() => onFill('head')} fill={fills.head || blankColor} cx="100" cy="40" r="20" />
            <circle id="spot1" onClick={() => onFill('spot1')} fill={fills.spot1 || blankColor} cx="120" cy="140" r="10" />
            <circle id="spot2" onClick={() => onFill('spot2')} fill={fills.spot2 || blankColor} cx="140" cy="160" r="8" />
            <circle id="spot3" onClick={() => onFill('spot3')} fill={fills.spot3 || blankColor} cx="95" cy="165" r="9" />
            <path id="leg_front" onClick={() => onFill('leg_front')} fill={fills.leg_front || blankColor} d="M 130 180 L 140 180 L 140 210 L 130 210 Z" />
            <path id="leg_back" onClick={() => onFill('leg_back')} fill={fills.leg_back || blankColor} d="M 90 180 L 100 180 L 100 210 L 90 210 Z" />
            <path id="tail" onClick={() => onFill('tail')} stroke={fills.tail || '#4b5563'} fill="none" strokeWidth="3" d="M 155 170 Q 170 160 165 140" />
        </g>
    </svg>
);

const levels = [
  { id: 1, name: 'Friendly Lion', SvgComponent: LionSVG, parts: ['mane', 'body', 'face', 'tail', 'tail_tip'] },
  { id: 2, name: 'Playful Elephant', SvgComponent: ElephantSVG, parts: ['ear_left', 'ear_right', 'body', 'head', 'trunk'] },
  { id: 3, name: 'Happy Monkey', SvgComponent: MonkeySVG, parts: ['tail', 'head', 'body', 'face', 'ear_left', 'ear_right'] },
  { id: 4, name: 'Cuddly Bear', SvgComponent: BearSVG, parts: ['head', 'snout', 'ear_left', 'ear_right'] },
  { id: 5, name: 'Tall Giraffe', SvgComponent: GiraffeSVG, parts: ['body', 'neck', 'head', 'spot1', 'spot2', 'spot3', 'leg_front', 'leg_back', 'tail'] }
];

const AnimalColoringGame = () => {
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
                <h1 className="text-4xl font-extrabold text-gray-800">Animal Coloring</h1>
                <p className="text-gray-600 mt-2 text-lg">Level {level.id}: <span className="font-bold">{level.name}</span></p>
                <p className="text-gray-500">Let's color in some cute animals!</p>
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
                        <h2 className="text-3xl font-bold text-gray-800 mt-4">Well Done!</h2>
                        <p className="text-gray-600 mt-2">You did a wonderful job coloring the {level.name}!</p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <button onClick={handlePlayAgain} className="w-full bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-400 transition-colors duration-300">
                                Color Again
                            </button>
                            <button onClick={handleNextLevel} className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-sky-600 transition-colors duration-300">
                                Next Animal
                            </button>
                        </div>
                    </div>
                 </div>
            )}
        </div>
    );
};

export default AnimalColoringGame;