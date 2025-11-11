import React from 'react';
import { Link } from 'react-router-dom';
import { RHYMES } from '../constants';
import { Rhyme } from '../types';

interface RhymeCardProps {
  rhyme: Rhyme;
}

const RhymeCard: React.FC<RhymeCardProps> = ({ rhyme }) => (
  <Link 
    to={`/lyrics/${rhyme.id}`} 
    className="block group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    aria-label={`Read lyrics for ${rhyme.title}`}
  >
    <div className="relative">
      <img 
        src={rhyme.imageUrl} 
        alt={rhyme.title} 
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      <h3 className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold drop-shadow-md">
        {rhyme.title}
      </h3>
    </div>
  </Link>
);


const Lyrics = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Rhyme Lyrics</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Click on a rhyme to read the full lyrics and sing along with your little ones!</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {RHYMES.map(rhyme => (
          <RhymeCard key={rhyme.id} rhyme={rhyme} />
        ))}
      </div>
    </div>
  );
};

export default Lyrics;