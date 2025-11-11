import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Instrument = 'piano' | 'guitar' | 'tabla';

let audioContext: AudioContext;
const getAudioContext = () => {
    if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContext;
};

const playSound = (type: OscillatorType, frequency: number, duration: number, instrument: Instrument) => {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

        if (instrument === 'guitar') {
            gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        } else if (instrument === 'tabla') {
            gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration * 0.5);
        } else { // piano
            gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        }

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
        console.error("Could not play sound: ", e);
    }
};

const levels = [
    {
        name: 'Piano',
        instrument: 'piano' as Instrument,
        pads: [
            { sound: () => playSound('sine', 261.63, 0.4, 'piano'), label: 'C4', color: 'bg-red-400' },
            { sound: () => playSound('sine', 293.66, 0.4, 'piano'), label: 'D4', color: 'bg-orange-400' },
            { sound: () => playSound('sine', 329.63, 0.4, 'piano'), label: 'E4', color: 'bg-yellow-400' },
            { sound: () => playSound('sine', 349.23, 0.4, 'piano'), label: 'F4', color: 'bg-lime-400' },
            { sound: () => playSound('sine', 392.00, 0.4, 'piano'), label: 'G4', color: 'bg-green-400' },
            { sound: () => playSound('sine', 440.00, 0.4, 'piano'), label: 'A4', color: 'bg-sky-400' },
            { sound: () => playSound('sine', 493.88, 0.4, 'piano'), label: 'B4', color: 'bg-blue-400' },
            { sound: () => playSound('sine', 523.25, 0.4, 'piano'), label: 'C5', color: 'bg-purple-400' },
        ]
    },
    {
        name: 'Guitar',
        instrument: 'guitar' as Instrument,
        pads: [
            { sound: () => playSound('triangle', 196.00, 0.8, 'guitar'), label: 'G', color: 'bg-red-500' },
            { sound: () => playSound('triangle', 261.63, 0.8, 'guitar'), label: 'C', color: 'bg-orange-500' },
            { sound: () => playSound('triangle', 329.63, 0.8, 'guitar'), label: 'E', color: 'bg-yellow-500' },
            { sound: () => playSound('triangle', 440.00, 0.8, 'guitar'), label: 'Am', color: 'bg-green-500' },
            { sound: () => playSound('triangle', 164.81, 0.8, 'guitar'), label: 'E', color: 'bg-sky-500' },
            { sound: () => playSound('triangle', 220.00, 0.8, 'guitar'), label: 'A', color: 'bg-blue-500' },
            { sound: () => playSound('triangle', 293.66, 0.8, 'guitar'), label: 'D', color: 'bg-purple-500' },
            { sound: () => playSound('triangle', 246.94, 0.8, 'guitar'), label: 'B', color: 'bg-pink-500' },
        ]
    },
    {
        name: 'Percussion',
        instrument: 'tabla' as Instrument,
        pads: [
            { sound: () => playSound('square', 100, 0.2, 'tabla'), label: 'Kick', color: 'bg-rose-700' },
            { sound: () => playSound('sawtooth', 300, 0.2, 'tabla'), label: 'Snare', color: 'bg-amber-600' },
            { sound: () => playSound('triangle', 800, 0.1, 'tabla'), label: 'Hi-Hat', color: 'bg-yellow-300' },
            { sound: () => playSound('square', 250, 0.3, 'tabla'), label: 'Tom', color: 'bg-teal-600' },
            { sound: () => playSound('sine', 400, 0.15, 'tabla'), label: 'Bongo', color: 'bg-cyan-500' },
            { sound: () => playSound('sawtooth', 600, 0.1, 'tabla'), label: 'Clap', color: 'bg-fuchsia-500' },
            { sound: () => playSound('square', 150, 0.4, 'tabla'), label: 'Dhol', color: 'bg-indigo-600' },
            { sound: () => playSound('triangle', 1200, 0.05, 'tabla'), label: 'Ting', color: 'bg-gray-400' },
        ]
    }
];

const MusicMakerGame = () => {
    const [currentLevel, setCurrentLevel] = useState(0);
    const level = levels[currentLevel];
    
    const handleNextLevel = () => setCurrentLevel(prev => (prev + 1) % levels.length);
    const handlePrevLevel = () => setCurrentLevel(prev => (prev - 1 + levels.length) % levels.length);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">Music Maker</h1>
                <p className="text-gray-600 mt-2">Click the buttons to make your own music!</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={handlePrevLevel} className="bg-gray-200 text-gray-700 font-bold py-2 px-5 rounded-full hover:bg-gray-300 transition-colors">&larr; Prev</button>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Level {currentLevel + 1}</p>
                        <h2 className="text-2xl font-bold">{level.name}</h2>
                    </div>
                    <button onClick={handleNextLevel} className="bg-gray-200 text-gray-700 font-bold py-2 px-5 rounded-full hover:bg-gray-300 transition-colors">Next &rarr;</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {level.pads.map((pad, index) => (
                        <button
                            key={index}
                            onClick={pad.sound}
                            className={`p-4 rounded-lg text-white font-bold text-lg shadow-md h-24 flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 ${pad.color}`}
                        >
                            {pad.label}
                        </button>
                    ))}
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

export default MusicMakerGame;