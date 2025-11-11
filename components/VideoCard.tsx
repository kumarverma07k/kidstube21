import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types';
import { EyeIcon, HeartIcon, HeartIconSolid, PlayIcon } from './icons/CategoryIcons';

interface VideoCardProps {
  video: Video;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isFavorite, onToggleFavorite }) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the parent Link from navigating
    onToggleFavorite(video.id);
  };

  return (
    <Link 
      to={`/videos/${video.id}`}
      className="block bg-white rounded-2xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-yellow-300 break-inside-avoid mb-8"
      aria-label={`Play video: ${video.title}`}
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <img 
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
            <PlayIcon className="h-16 w-16 text-white opacity-0 group-hover:opacity-80 transform scale-75 group-hover:scale-100 transition-all duration-300" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-md text-gray-800 truncate group-hover:text-sky-600 transition-colors duration-300">{video.title}</h3>
        <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
          <div className="flex items-center">
            <EyeIcon className="h-4 w-4 mr-1.5" />
            <span>{video.views} views</span>
          </div>
          <button
            onClick={handleFavoriteClick}
            className={`p-1.5 rounded-full relative z-10 hover:bg-red-100 transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? <HeartIconSolid className="h-5 w-5" /> : <HeartIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;