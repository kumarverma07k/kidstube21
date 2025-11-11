import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { VIDEO_CATEGORIES } from '../constants';
import { api } from '../api';
import VideoCard from '../components/VideoCard';
import { Video } from '../types';
import { HeartIconSolid } from '../components/icons/CategoryIcons';

type FilterType = Video['category'] | 'All' | 'Favorites';
const VIDEOS_PER_PAGE = 8;

const PageLoader = () => (
    <div className="text-center py-20 col-span-full">
        <svg className="animate-spin h-10 w-10 text-sky-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-gray-600 font-semibold text-lg">Loading Videos...</p>
    </div>
);


const LoadingSpinner = () => (
    <div className="text-center py-8 col-span-full">
        <svg className="animate-spin h-8 w-8 text-sky-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-2 text-gray-600">Loading more videos...</p>
    </div>
);

const EndOfResults = () => (
    <div className="text-center py-8 col-span-full">
        <p className="text-gray-500 font-semibold">You've reached the end of the list!</p>
    </div>
);


const Videos = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [displayedVideos, setDisplayedVideos] = useState<Video[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  // Load favorites from localStorage on mount
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

  // Fetch all videos once on mount
  useEffect(() => {
    setIsPageLoading(true);
    api.getAllVideos().then(videos => {
        setAllVideos(videos);
        setIsPageLoading(false);
    });
  }, []);

  const handleToggleFavorite = (videoId: string) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(videoId)
        ? prevFavorites.filter(id => id !== videoId)
        : [...prevFavorites, videoId];
      
      localStorage.setItem('kidstube-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const sourceVideos = useMemo(() => {
    return activeFilter === 'All'
      ? allVideos
      : activeFilter === 'Favorites'
      ? allVideos.filter(video => favorites.includes(video.id))
      : allVideos.filter(video => video.category === activeFilter);
  }, [activeFilter, favorites, allVideos]);

  // Reset and load initial videos when the filter or source videos change
  useEffect(() => {
    if (isPageLoading) return; // Don't run this effect until videos are fetched
    const initialVideos = sourceVideos.slice(0, VIDEOS_PER_PAGE);
    setDisplayedVideos(initialVideos);
    setHasMore(sourceVideos.length > VIDEOS_PER_PAGE);
  }, [sourceVideos, isPageLoading]);

  const loadMoreVideos = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setTimeout(() => {
        const currentLength = displayedVideos.length;
        const newVideos = sourceVideos.slice(currentLength, currentLength + VIDEOS_PER_PAGE);
        
        setDisplayedVideos(prev => [...prev, ...newVideos]);
        setHasMore(currentLength + newVideos.length < sourceVideos.length);
        setIsLoading(false);
    }, 500); // Simulate network delay
  }, [isLoading, hasMore, displayedVideos.length, sourceVideos]);

  // Scroll event listener for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 300 || isLoading) {
            return;
        }
        loadMoreVideos();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, loadMoreVideos]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Our Video Library</h1>
      <p className="text-center text-gray-600 mb-10">Explore our collection of fun and educational videos!</p>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap items-center gap-3 mb-12">
        <button
          onClick={() => setActiveFilter('All')}
          className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 ${
            activeFilter === 'All'
              ? 'bg-sky-500 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-sky-100'
          }`}
        >
          All
        </button>
        {VIDEO_CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 ${
              activeFilter === category
                ? 'bg-sky-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-sky-100'
            }`}
          >
            {category}
          </button>
        ))}
        <div className="w-px bg-gray-300 h-8 mx-2 hidden sm:block" />
        <button
          onClick={() => setActiveFilter('Favorites')}
          className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
            activeFilter === 'Favorites'
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-red-100'
          }`}
        >
          <HeartIconSolid className="h-5 w-5"/>
          Favorites ({favorites.length})
        </button>
      </div>

      {/* Video Grid */}
      {isPageLoading ? (
        <PageLoader />
      ) : displayedVideos.length > 0 ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
          {displayedVideos.map(video => (
            <VideoCard 
              key={`${video.id}-${activeFilter}`} // Add filter to key to force re-render on filter change
              video={video}
              isFavorite={favorites.includes(video.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      ) : (
        activeFilter === 'Favorites' && !isPageLoading && (
          <div className="text-center py-16">
              <HeartIconSolid className="h-16 w-16 mx-auto text-red-200" />
              <h3 className="text-2xl font-bold text-gray-700 mt-4">Your Favorites List is Empty</h3>
              <p className="text-gray-500 mt-2">Click the heart icon on any video to save it here for later.</p>
          </div>
        )
      )}

      {/* Loading and End of Results Indicators */}
      {isLoading && <LoadingSpinner />}
      {!hasMore && displayedVideos.length > 0 && sourceVideos.length > VIDEOS_PER_PAGE && <EndOfResults />}

    </div>
  );
};

export default Videos;