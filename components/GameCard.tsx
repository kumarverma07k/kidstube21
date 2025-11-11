import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
    game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    const { title, icon: Icon, color, path } = game;
    return (
        <Link to={path} className="block group h-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col justify-between">
                <div>
                    <div className={`w-28 h-28 rounded-full mx-auto flex items-center justify-center ${color}`}>
                        <Icon className="h-16 w-16 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">{title}</h3>
                </div>
                <span className="bg-yellow-400 text-white font-bold py-3 px-8 rounded-full text-lg group-hover:bg-yellow-500 transition-colors duration-300 shadow-md inline-block">
                    Play Now
                </span>
            </div>
        </Link>
    );
}

export default GameCard;