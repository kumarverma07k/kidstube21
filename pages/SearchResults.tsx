import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GAMES, VIDEO_CATEGORIES } from '../constants';
import { api } from '../api';
import { Video } from '../types';
import VideoCard from '../components/VideoCard';
import GameCard from '../components/GameCard';
import { SearchIcon } from '../components/icons/CategoryIcons';
import { parseViews } from '../utils/helpers';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const [searchedVideos, setSearchedVideos] = useState<Video[]>([]);
    const [isLoadingVideos, setIsLoadingVideos] = useState(true);

    const [videoFilter, setVideoFilter] = useState<Video['category'] | 'All'>('All');
    const [videoSort, setVideoSort] = useState('relevance');
    const [gameSort, setGameSort] = useState('relevance');
    const [favorites, setFavorites] = useState<string[]>([]);

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
        if (query) {
            setIsLoadingVideos(true);
            api.searchVideos(query).then(videos => {
                setSearchedVideos(videos);
                setIsLoadingVideos(false);
            });
        } else {
            setSearchedVideos([]);
            setIsLoadingVideos(false);
        }
    }, [query]);

    const handleToggleFavorite = (videoId: string) => {
        setFavorites(prevFavorites => {
          const newFavorites = prevFavorites.includes(videoId)
            ? prevFavorites.filter(id => id !== videoId)
            : [...prevFavorites, videoId];
          localStorage.setItem('kidstube-favorites', JSON.stringify(newFavorites));
          return newFavorites;
        });
    };

    const searchedGames = useMemo(() => {
        if (!query) return [];
        return GAMES.filter(game =>
            game.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    const displayedVideos = useMemo(() => {
        let result = [...searchedVideos];

        if (videoFilter !== 'All') {
            result = result.filter(v => v.category === videoFilter);
        }

        switch (videoSort) {
            case 'title-asc':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'views-desc':
                result.sort((a, b) => parseViews(b.views) - parseViews(a.views));
                break;
            case 'relevance':
            default:
                break;
        }
        return result;
    }, [searchedVideos, videoFilter, videoSort]);

    const displayedGames = useMemo(() => {
        let result = [...searchedGames];
        
        switch (gameSort) {
            case 'title-asc':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'relevance':
            default:
                break;
        }
        return result;
    }, [searchedGames, gameSort]);

    if (!query) {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-3xl font-bold text-gray-700">Please enter a search term in the header.</h1>
        </div>
      )
    }

    const totalResults = searchedVideos.length + searchedGames.length;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
                Search Results
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {!isLoadingVideos && (totalResults > 0 ? `Found ${totalResults} results for ` : 'No results found for ')}
              <span className="font-bold text-sky-600">"{query}"</span>
            </p>

            {isLoadingVideos && <p className="text-center text-gray-600">Searching...</p>}

            {!isLoadingVideos && totalResults === 0 && (
              <div className="text-center py-16">
                  <SearchIcon className="h-24 w-24 mx-auto text-gray-300" />
                  <h3 className="text-2xl font-bold text-gray-700 mt-4">Nothing Found</h3>
                  <p className="text-gray-500 mt-2">Try searching for something else.</p>
              </div>
            )}

            {!isLoadingVideos && searchedVideos.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-sky-200 pb-2 mb-6">
                        Videos ({searchedVideos.length})
                    </h2>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-gray-700 mr-2">Filter by:</span>
                            <button onClick={() => setVideoFilter('All')} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${videoFilter === 'All' ? 'bg-sky-500 text-white' : 'bg-white hover:bg-sky-100'}`}>All</button>
                            {VIDEO_CATEGORIES.map(cat => (
                                <button key={cat} onClick={() => setVideoFilter(cat)} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${videoFilter === cat ? 'bg-sky-500 text-white' : 'bg-white hover:bg-sky-100'}`}>{cat}</button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                             <label htmlFor="video-sort" className="font-semibold text-gray-700">Sort by:</label>
                             <select id="video-sort" value={videoSort} onChange={e => setVideoSort(e.target.value)} className="rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500">
                                <option value="relevance">Relevance</option>
                                <option value="title-asc">Title (A-Z)</option>
                                <option value="title-desc">Title (Z-A)</option>
                                <option value="views-desc">Views (High to Low)</option>
                             </select>
                        </div>
                    </div>

                    {displayedVideos.length > 0 ? (
                        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
                            {displayedVideos.map(video => (
                                <VideoCard key={video.id} video={video} isFavorite={favorites.includes(video.id)} onToggleFavorite={handleToggleFavorite} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-8">No videos match your current filters.</p>
                    )}
                </section>
            )}

            {!isLoadingVideos && searchedGames.length > 0 && (
                <section>
                     <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6">
                        Games ({searchedGames.length})
                    </h2>
                     <div className="flex justify-end items-center gap-2 mb-8 bg-gray-50 p-4 rounded-lg">
                        <label htmlFor="game-sort" className="font-semibold text-gray-700">Sort by:</label>
                        <select id="game-sort" value={gameSort} onChange={e => setGameSort(e.target.value)} className="rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500">
                            <option value="relevance">Relevance</option>
                            <option value="title-asc">Title (A-Z)</option>
                            <option value="title-desc">Title (Z-A)</option>
                        </select>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {displayedGames.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                     </div>
                </section>
            )}
        </div>
    );
};

export default SearchResults;