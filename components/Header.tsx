import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon } from './icons/CategoryIcons';

const navLinks = [
  { name: 'Home', path: '/', color: 'green-500', textColor: 'green-600' },
  { name: 'Lyrics', path: '/lyrics', color: 'orange-500', textColor: 'orange-600' },
  { name: 'Videos', path: '/videos', color: 'purple-500', textColor: 'purple-600' },
  { name: 'Games', path: '/games', color: 'orange-500', textColor: 'orange-600' },
  { name: 'Shop', path: '/shop', color: 'pink-500', textColor: 'pink-600' },
  { name: 'Contact', path: '/contact', color: 'red-500', textColor: 'red-600' },
  { name: 'Write for Us', path: '/write-for-us', color: 'purple-500', textColor: 'purple-600' },
];

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const linkBaseClasses = "relative px-2 py-2 rounded-full text-sm font-bold border-2 whitespace-nowrap transition-all duration-300 ease-in-out";

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0">
            <NavLink to="/" className="group text-3xl font-black tracking-tighter" style={{ fontFamily: "'Fredoka One', cursive" }}>
                <span className="text-orange-500 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-3deg]">K</span>
                <span className="text-purple-500 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[2deg]" style={{ transitionDelay: '25ms' }}>i</span>
                <span className="text-green-500 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-2deg]" style={{ transitionDelay: '50ms' }}>d</span>
                <span className="text-sky-500 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[3deg]" style={{ transitionDelay: '75ms' }}>s</span>
                <span className="text-pink-500 ml-2 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-3deg]" style={{ transitionDelay: '100ms' }}>T</span>
                <span className="text-yellow-500 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[2deg]" style={{ transitionDelay: '125ms' }}>u</span>
                <span className="text-red-500 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-2deg]" style={{ transitionDelay: '150ms' }}>b</span>
                <span className="text-teal-500 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[3deg]" style={{ transitionDelay: '175ms' }}>e</span>
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const inactiveClasses = `border-${link.color} text-${link.textColor} hover:bg-${link.color} hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-${link.color}/40`;
                const activeClasses = `bg-${link.color} text-white border-${link.color} shadow-md shadow-${link.color}/50`;
                const pointerClasses = `absolute top-full mt-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-[8px]`;

                return (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        end={link.path === '/'}
                        className={({ isActive }) => 
                            `${linkBaseClasses} ${isActive ? activeClasses : inactiveClasses}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {link.name}
                                {isActive && <span className={`${pointerClasses} border-t-${link.color}`}></span>}
                            </>
                        )}
                    </NavLink>
                );
              })}
            </nav>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="rounded-full border-2 border-gray-300 py-1.5 pl-4 pr-10 focus:border-sky-500 focus:ring-sky-500 transition-all duration-300 w-48 focus:w-56"
                aria-label="Search content"
              />
              <button type="submit" className="absolute top-1/2 right-2 -translate-y-1/2 p-1.5 rounded-full text-gray-400 hover:text-sky-600 hover:bg-gray-100" aria-label="Submit search">
                <SearchIcon className="h-5 w-5" />
              </button>
            </form>
            <button onClick={onCartClick} className="group relative p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-pink-600 transition-colors" aria-label={`Shopping cart with ${cartCount} items`}>
                <ShoppingCartIcon className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[-12deg]"/>
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white ring-2 ring-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                        {cartCount}
                    </span>
                )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;