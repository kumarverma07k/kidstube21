import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrophyIcon, UndoIcon } from '../../components/icons/CategoryIcons';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFA1', '#FFC300', '#C70039', '#900C3F', '#581845', '#FFFFFF', '#000000'];
const blankColor = '#f3f4f6'; // A light gray for blank parts

interface SVGProps {
    fills: { [key: string]: string };
    onFill: (id: string) => void;
}

const RocketSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1">
            <path id="flame2" d="M 80 190 L 100 220 L 120 190 Z" fill={fills.flame2 || blankColor} onClick={() => onFill('flame2')} className="transition-colors duration-200"/>
            <path id="flame1" d="M 85 180 L 100 205 L 115 180 Z" fill={fills.flame1 || blankColor} onClick={() => onFill('flame1')} className="transition-colors duration-200"/>
            <path id="body" d="M 90 50 L 110 50 L 120 180 L 80 180 Z" fill={fills.body || blankColor} onClick={() => onFill('body')} className="transition-colors duration-200"/>
            <path id="fin_left" d="M 80 140 L 50 180 L 80 170 Z" fill={fills.fin_left || blankColor} onClick={() => onFill('fin_left')} className="transition-colors duration-200"/>
            <path id="fin_right" d="M 120 140 L 150 180 L 120 170 Z" fill={fills.fin_right || blankColor} onClick={() => onFill('fin_right')} className="transition-colors duration-200"/>
            <circle id="window_frame" cx="100" cy="90" r="15" fill={fills.window_frame || blankColor} onClick={() => onFill('window_frame')} className="transition-colors duration-200"/>
            <circle id="window_glass" cx="100" cy="90" r="12" fill={fills.window_glass || blankColor} onClick={() => onFill('window_glass')} className="transition-colors duration-200"/>
            <path id="nose" d="M 90 50 L 100 20 L 110 50 Z" fill={fills.nose || blankColor} onClick={() => onFill('nose')} className="transition-colors duration-200"/>
        </g>
    </svg>
);

const CarSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="body" onClick={() => onFill('body')} fill={fills.body || blankColor} d="M 20 50 L 30 90 L 170 90 L 180 50 Q 150 30 100 30 Q 50 30 20 50 Z"/>
            <path id="window_front" onClick={() => onFill('window_front')} fill={fills.window_front || blankColor} d="M 105 40 L 130 40 L 140 50 L 110 50 Z"/>
            <path id="window_back" onClick={() => onFill('window_back')} fill={fills.window_back || blankColor} d="M 60 40 L 95 40 L 90 50 L 55 50 Z"/>
            <circle id="wheel_back" onClick={() => onFill('wheel_back')} fill={fills.wheel_back || blankColor} cx="50" cy="90" r="15"/>
            <circle id="hubcap_back" onClick={() => onFill('hubcap_back')} fill={fills.hubcap_back || blankColor} cx="50" cy="90" r="7"/>
            <circle id="wheel_front" onClick={() => onFill('wheel_front')} fill={fills.wheel_front || blankColor} cx="150" cy="90" r="15"/>
            <circle id="hubcap_front" onClick={() => onFill('hubcap_front')} fill={fills.hubcap_front || blankColor} cx="150" cy="90" r="7"/>
            <circle id="headlight" onClick={() => onFill('headlight')} fill={fills.headlight || blankColor} cx="175" cy="65" r="5"/>
        </g>
    </svg>
);

const SailboatSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="water" onClick={() => onFill('water')} fill={fills.water || blankColor} d="M 0 150 Q 50 130, 100 150 T 200 150 L 200 180 L 0 180 Z" />
            <path id="hull" onClick={() => onFill('hull')} fill={fills.hull || blankColor} d="M 30 120 L 170 120 L 150 150 L 50 150 Z"/>
            <path id="mast" onClick={() => onFill('mast')} fill={fills.mast || blankColor} d="M 98 40 L 102 40 L 102 120 L 98 120 Z" />
            <path id="sail" onClick={() => onFill('sail')} fill={fills.sail || blankColor} d="M 105 45 L 150 110 L 105 110 Z"/>
            <path id="flag" onClick={() => onFill('flag')} fill={fills.flag || blankColor} d="M 100 40 L 120 30 L 100 20 Z" />
        </g>
    </svg>
);

const AirplaneSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <path id="body" onClick={() => onFill('body')} fill={fills.body || blankColor} d="M 50 80 L 170 80 L 180 90 L 170 100 L 50 100 L 40 90 Z" />
            <path id="wing_top" onClick={() => onFill('wing_top')} fill={fills.wing_top || blankColor} d="M 90 80 L 130 50 L 140 50 L 110 80 Z" />
            <path id="wing_bottom" onClick={() => onFill('wing_bottom')} fill={fills.wing_bottom || blankColor} d="M 90 100 L 130 130 L 140 130 L 110 100 Z" />
            <path id="tail" onClick={() => onFill('tail')} fill={fills.tail || blankColor} d="M 40 90 L 20 70 L 30 70 L 50 90 Z" />
            <path id="cockpit" onClick={() => onFill('cockpit')} fill={fills.cockpit || blankColor} d="M 170 80 L 180 90 L 170 100 Q 160 90 170 80 Z" />
        </g>
    </svg>
);

const TrainSVG = ({ fills, onFill }: SVGProps) => (
    <svg width="100%" height="100%" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
        <g stroke="#4b5563" strokeWidth="1" className="transition-colors duration-200">
            <rect id="track" onClick={() => onFill('track')} fill={fills.track || blankColor} x="10" y="130" width="180" height="10"/>
            <rect id="body" onClick={() => onFill('body')} fill={fills.body || blankColor} x="30" y="70" width="100" height="50" />
            <rect id="cabin" onClick={() => onFill('cabin')} fill={fills.cabin || blankColor} x="130" y="50" width="50" height="70" />
            <rect id="chimney" onClick={() => onFill('chimney')} fill={fills.chimney || blankColor} x="50" y="40" width="20" height="30" />
            <circle id="wheel_big" onClick={() => onFill('wheel_big')} fill={fills.wheel_big || blankColor} cx="100" cy="120" r="15"/>
            <circle id="wheel_small_1" onClick={() => onFill('wheel_small_1')} fill={fills.wheel_small_1 || blankColor} cx="60" cy="120" r="10"/>
            <circle id="wheel_small_2" onClick={() => onFill('wheel_small_2')} fill={fills.wheel_small_2 || blankColor} cx="155" cy="120" r="10"/>
            <path id="front_bumper" onClick={() => onFill('front_bumper')} fill={fills.front_bumper || blankColor} d="M 20 90 L 30 70 L 30 120 L 20 110 Z" />
        </g>
    </svg>
);


const levels = [
  { id: 1, name: 'Rocket Ship', SvgComponent: RocketSVG, parts: ['flame2', 'flame1', 'body', 'fin_left', 'fin_right', 'window_frame', 'window_glass', 'nose'] },
  { id: 2, name: 'Friendly Car', SvgComponent: CarSVG, parts: ['body', 'window_front', 'window_back', 'wheel_front', 'wheel_back', 'hubcap_front', 'hubcap_back', 'headlight'] },
  { id: 3, name: 'Sailboat', SvgComponent: SailboatSVG, parts: ['water', 'hull', 'mast', 'sail', 'flag'] },
  { id: 4, name: 'Airplane', SvgComponent: AirplaneSVG, parts: ['body', 'wing_top', 'wing_bottom', 'tail', 'cockpit'] },
  { id: 5, name: 'Choo-Choo Train', SvgComponent: TrainSVG, parts: ['track', 'body', 'cabin', 'chimney', 'wheel_big', 'wheel_small_1', 'wheel_small_2', 'front_bumper'] }
];

const ColoringGame = () => {
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
                <h1 className="text-4xl font-extrabold text-gray-800">Vehicle Coloring</h1>
                <p className="text-gray-600 mt-2 text-lg">Level {level.id}: <span className="font-bold">{level.name}</span></p>
                <p className="text-gray-500">Click a color, then click a part of the picture to color it in!</p>
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
                                onClick={() => {
                                    setSelectedColor(color);
                                }}
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
                        <h2 className="text-3xl font-bold text-gray-800 mt-4">Congratulations!</h2>
                        <p className="text-gray-600 mt-2">You did an amazing job coloring the {level.name}!</p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <button onClick={handlePlayAgain} className="w-full bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-400 transition-colors duration-300">
                                Color Again
                            </button>
                            <button onClick={handleNextLevel} className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-sky-600 transition-colors duration-300">
                                Next Level
                            </button>
                        </div>
                    </div>
                 </div>
            )}
        </div>
    );
};

export default ColoringGame;