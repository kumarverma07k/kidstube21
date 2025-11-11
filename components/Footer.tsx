import React from 'react';
import { Link } from 'react-router-dom';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from './icons/SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-sky-700 text-white relative pt-24 mt-16">
      {/* Grassy hills SVG shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-px">
          <svg className="relative block w-full h-[60px] sm:h-[90px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31.84,773.69,76.49c-50.58,44.37-49.43,130.83-119.2,174.22c-27.88,16.81-58.29-18-74.18-44.18c-15.94-26.31-32.23-52.27-58.74-54.59c-26.58-2.34-56.22,12.38-81.91,24.41c-25.7,12.05-58.86,22.14-84.42,11.52c-25.54-10.6-44.45-34.12-63.11-49.86c-18.64-15.72-31.29-31.57-56.89-32.34c-25.66-.78-50.47,15.74-66.37,21.52C132.83,92.83,109.57,98.34,83.14,97.2c-26.46-1.14-53.75-13.34-79.41-24.41C-2.42,61.6,2.2,28.23,4.4,1.49L0,0v120h1200V0L1180.49,1.49C1155.23,3.87,1123.43,21.13,1084.28,40.6C1032.95,66.6,985.66,92.83,985.66,92.83Z" className="fill-current text-green-500"></path>
          </svg>
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Branding & Social */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block text-3xl font-black tracking-tighter" style={{ fontFamily: "'Fredoka One', cursive" }}>
                <span className="text-orange-400">K</span>
                <span className="text-purple-400">i</span>
                <span className="text-green-400">d</span>
                <span className="text-sky-400">s</span>
                <span className="text-pink-400 ml-2">T</span>
                <span className="text-yellow-400">u</span>
                <span className="text-red-400">b</span>
                <span className="text-teal-400">e</span>
            </Link>
            <p className="mt-2 text-sky-200 text-center md:text-left">Fun & Learning for Little Ones!</p>
            <div className="flex space-x-4 mt-4 text-sky-200">
              <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><YoutubeIcon className="h-7 w-7" /></a>
              <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><InstagramIcon className="h-7 w-7" /></a>
              <a href="#" className="hover:text-white transition-colors transform hover:scale-110"><FacebookIcon className="h-7 w-7" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-wider text-yellow-300" style={{ fontFamily: "'Fredoka One', cursive" }}>Explore</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/videos" className="hover:underline text-sky-100 transition-colors">Videos</Link></li>
              <li><Link to="/games" className="hover:underline text-sky-100 transition-colors">Games</Link></li>
              <li><Link to="/lyrics" className="hover:underline text-sky-100 transition-colors">Lyrics</Link></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-wider text-pink-300" style={{ fontFamily: "'Fredoka One', cursive" }}>More</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/shop" className="hover:underline text-sky-100 transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="hover:underline text-sky-100 transition-colors">Contact</Link></li>
              <li><Link to="/write-for-us" className="hover:underline text-sky-100 transition-colors">Write for Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <h3 className="text-xl font-bold tracking-wider text-green-300" style={{ fontFamily: "'Fredoka One', cursive" }}>Stay Updated!</h3>
            <p className="mt-4 text-sky-200 text-sm">Get the latest videos and games delivered to your inbox.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-2 rounded-md text-gray-800 border-0 focus:ring-2 focus:ring-pink-400 transition"
                    aria-label="Email for newsletter"
                />
                <button type="submit" className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 transition-colors whitespace-nowrap transform hover:scale-105">
                    Subscribe
                </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-sky-600 pt-6 text-center text-sm text-sky-200">
          <p>&copy; {new Date().getFullYear()} Kids Tube | All Rights Reserved | Made by Shubham Kumar Verma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;