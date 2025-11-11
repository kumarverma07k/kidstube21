import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api';
import { Video } from '../types';
import { EyeIcon, ShareIcon, HeartIcon, HeartIconSolid, MaximizeIcon, ArrowLeftIcon } from '../components/icons/CategoryIcons';
import ShareModal from '../components/ShareModal';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-full min-h-[50vh]">
        <svg className="animate-spin h-10 w-10 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>
);


const VideoPlayer = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [video, setVideo] = useState<Video | null | undefined>(null);
  
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem('kidstube-favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (videoId) {
      setVideo(null); // Set to loading state
      api.getVideoById(videoId).then(setVideo);
      api.getRecommendations(videoId).then(setRecommendedVideos);
    }
  }, [videoId]);

  // Effect to control body scroll when video is maximized
  useEffect(() => {
    if (isMaximized) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMaximized]);

  const handleToggleFavorite = (id: string) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id];
      localStorage.setItem('kidstube-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  if (video === null) {
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"><LoadingSpinner /></div>;
  }
  
  if (!video) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Oops! Video not found.</h1>
        <Link to="/videos" className="text-sky-600 font-bold hover:underline mt-4 inline-block">
            &larr; Back to all videos
        </Link>
      </div>
    );
  }
  
  const isFavorite = favorites.includes(video.id);
  
  const playerContainerClasses = isMaximized 
    ? "fixed inset-0 w-screen h-screen bg-black z-[100] flex flex-col p-2 sm:p-4"
    : "lg:w-2/3";

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isMaximized && (
            <div className="mb-6">
                <Link to="/videos" className="text-sky-600 font-bold hover:underline">
                    &larr; Back to Video Library
                </Link>
            </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className={playerContainerClasses}>
            {isMaximized ? (
              <>
                <div className="flex-shrink-0 flex items-center gap-4 mb-2 sm:mb-4">
                    <button 
                        onClick={() => setIsMaximized(false)} 
                        className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Minimize video"
                    >
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                    <h1 className="text-xl font-bold text-white truncate">{video.title}</h1>
                </div>
                <div className="aspect-w-16 aspect-h-9 bg-black w-full flex-grow">
                  <iframe
                    key={video.id}
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                  <iframe
                    key={video.id}
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <h1 className="text-3xl font-extrabold text-gray-800">{video.title}</h1>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
                      <div className="flex items-center text-gray-500">
                        <EyeIcon className="h-5 w-5 mr-2" />
                        <span>{video.views} views</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-3 sm:mt-0">
                        <button
                          onClick={() => handleToggleFavorite(video.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-colors ${isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-500'}`}
                          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          {isFavorite ? <HeartIconSolid className="h-5 w-5" /> : <HeartIcon className="h-5 w-5" />}
                          <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
                        </button>
                        <button
                          onClick={() => setShareModalOpen(true)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-600 transition-colors"
                          aria-label="Share video"
                        >
                          <ShareIcon className="h-5 w-5" />
                          <span>Share</span>
                        </button>
                        <button
                          onClick={() => setIsMaximized(true)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-600 transition-colors"
                          aria-label="Maximize video"
                        >
                          <MaximizeIcon className="h-5 w-5" />
                          <span>Maximize</span>
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Up Next */}
          {!isMaximized && (
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Up Next</h2>
                <div className="space-y-4">
                  {recommendedVideos.map(nextVideo => (
                     <Link key={nextVideo.id} to={`/videos/${nextVideo.id}`} className="block group">
                       <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <img src={`https://i.ytimg.com/vi/${nextVideo.id}/mqdefault.jpg`} alt={nextVideo.title} className="w-32 h-20 object-cover rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-105"/>
                          <div>
                            <h4 className="font-bold text-md text-gray-800 group-hover:text-sky-600 transition-colors duration-300">{nextVideo.title}</h4>
                            <p className="text-sm text-gray-500">{nextVideo.views} views</p>
                          </div>
                       </div>
                     </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setShareModalOpen(false)}
        video={video}
      />
    </>
  );
};

export default VideoPlayer;