import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RHYMES } from '../constants';

const RhymePage = () => {
  const { rhymeId } = useParams<{ rhymeId: string }>();
  const rhyme = RHYMES.find(r => r.id === rhymeId);

  if (!rhyme) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Oops! Rhyme not found.</h1>
        <Link to="/lyrics" className="text-sky-600 font-bold hover:underline mt-4 inline-block">
            &larr; Back to all lyrics
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
            <Link to="/lyrics" className="text-sky-600 font-bold hover:underline">
                &larr; Back to All Lyrics
            </Link>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                    <img 
                        src={rhyme.imageUrl} 
                        alt={rhyme.title}
                        className="w-full h-auto object-cover rounded-xl shadow-md"
                    />
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">{rhyme.title}</h1>
                    <div className="text-gray-700 text-lg leading-relaxed space-y-4 whitespace-pre-line">
                        {rhyme.lyrics}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RhymePage;