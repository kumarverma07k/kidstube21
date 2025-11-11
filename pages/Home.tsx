import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { Video } from '../types';
import { PlayIcon, GamepadIcon, LyricsIcon } from '../components/icons/CategoryIcons';

const VideoSkeleton = ({ type }: { type: 'featured' | 'list' }) => {
    if (type === 'featured') {
        return (
            <div className="bg-gray-200 rounded-2xl animate-pulse">
                <div className="aspect-w-16 aspect-h-9"></div>
                <div className="p-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                </div>
            </div>
        )
    }
    return (
        <div className="bg-gray-200 rounded-2xl p-3 flex items-center gap-4 animate-pulse">
            <div className="w-32 h-20 bg-gray-300 rounded-lg flex-shrink-0"></div>
            <div className="flex-grow space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    )
};

const Home = () => {
  const [latestVideos, setLatestVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getLatestVideos().then(videos => {
      setLatestVideos(videos);
      setIsLoading(false);
    });
  }, []);

  const featuredVideo = latestVideos[0];
  const otherVideos = latestVideos.slice(1);

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative text-center py-20 md:py-32 flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-yellow-300 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-300 rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute w-32 h-32 bg-white/50 rounded-full top-1/4 left-1/4"></div>
          <div className="absolute w-24 h-24 bg-white/50 rounded-full bottom-1/4 right-1/4"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white text-shadow-lg" style={{ WebkitTextStroke: '2px #0ea5e9' }}>
            Kids Tube
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-bold text-pink-500 drop-shadow-md">
            Fun and Learning for Little Ones!
          </p>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">Our Latest Videos</h2>
          <p className="text-center text-gray-500 mb-10 text-lg">Fresh from our creative studio!</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
               {isLoading ? <VideoSkeleton type="featured" /> : (
                 <Link to={`/videos/${featuredVideo.id}`} className="block bg-white rounded-2xl shadow-xl overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="relative aspect-w-16 aspect-h-9">
                      <img
                        src={`https://i.ytimg.com/vi/${featuredVideo.id}/maxresdefault.jpg`}
                        onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${featuredVideo.id}/hqdefault.jpg`; }}
                        alt={featuredVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                        <PlayIcon className="h-20 w-20 text-white text-opacity-80 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-xl text-gray-800 truncate">{featuredVideo.title}</h3>
                    </div>
                  </Link>
               )}
            </div>
            <div className="space-y-6">
              {isLoading ? (
                <>
                  <VideoSkeleton type="list" />
                  <VideoSkeleton type="list" />
                </>
              ) : (
                otherVideos.map(video => (
                  <Link key={video.id} to={`/videos/${video.id}`} className="block group">
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center gap-4 p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="relative flex-shrink-0">
                          <img src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`} alt={video.title} className="w-32 h-20 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"/>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                              <PlayIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300"/>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-md text-gray-800 group-hover:text-sky-600 transition-colors duration-300">{video.title}</h4>
                          <p className="text-sm text-gray-500">{video.views} views</p>
                        </div>
                      </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Our World!</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kids Tube is a magical place where learning and fun go hand-in-hand! We create enchanting nursery rhymes and educational videos that capture the imagination of children. Join us on an exciting adventure of discovery and joy!
          </p>
        </div>
      </section>
      
      {/* Feature Links */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FeatureLink to="/videos" icon={PlayIcon} title="Videos" bgColor="bg-sky-400" />
            <FeatureLink to="/games" icon={GamepadIcon} title="Games" bgColor="bg-green-400" />
            <FeatureLink to="/lyrics" icon={LyricsIcon} title="Lyrics" bgColor="bg-pink-400" />
          </div>
        </div>
      </section>

      {/* App Banner */}
      <section className="bg-purple-500 text-white">
        <div className="container mx-auto px-4 py-8 text-center">
            <h3 className="text-2xl font-bold">Our App is Coming Soon!</h3>
            <p className="mt-2">Get ready for an even more interactive experience.</p>
        </div>
      </section>
    </div>
  );
};

interface FeatureLinkProps {
  to: string;
  icon: React.ElementType;
  title: string;
  bgColor: string;
}

const FeatureLink = ({ to, icon: Icon, title, bgColor }: FeatureLinkProps) => (
  <Link to={to} className="group">
    <div className={`p-8 rounded-2xl ${bgColor} shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
      <Icon className="h-20 w-20 text-white mx-auto transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
    </div>
  </Link>
);


export default Home;