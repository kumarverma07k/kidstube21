import React from 'react';
import { GAMES } from '../constants';
import { Game } from '../types';
import GameCard from '../components/GameCard';

const Games = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Fun & Games</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Click on a game below to play! We have many fun coloring games for you to enjoy.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {GAMES.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;