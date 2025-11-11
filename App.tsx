import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Games from './pages/Games';
import Lyrics from './pages/Lyrics';
import Contact from './pages/Contact';
import RhymePage from './pages/RhymePage';
import Genres from './pages/Genres';
import Shop from './pages/Shop';
import WriteForUs from './pages/WriteForUs';
import SearchResults from './pages/SearchResults';
import ColoringGame from './pages/games/ColoringGame';
import AnimalColoringGame from './pages/games/AnimalColoringGame';
import HouseColoringGame from './pages/games/HouseColoringGame';
import { Product } from './types';
import CartSidebar from './components/CartSidebar';
import VideoPlayer from './pages/VideoPlayer';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('kidstube-cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kidstube-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productToAdd: Product) => {
    // Check if the product is already in the cart to avoid duplicates
    if (!cart.some(item => item.id === productToAdd.id)) {
      setCart(prevCart => [...prevCart, productToAdd]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  
  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-gradient-to-b from-sky-200 via-sky-100 to-white min-h-screen flex flex-col">
        <Header cartCount={cart.length} onCartClick={toggleCart} />
        <CartSidebar 
          isOpen={isCartOpen}
          onClose={toggleCart}
          cart={cart}
          removeFromCart={removeFromCart}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lyrics" element={<Lyrics />} />
            <Route path="/lyrics/:rhymeId" element={<RhymePage />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/videos/:videoId" element={<VideoPlayer />} />
            <Route path="/games" element={<Games />} />
            <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/write-for-us" element={<WriteForUs />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/games/coloring" element={<ColoringGame />} />
            <Route path="/games/animals" element={<AnimalColoringGame />} />
            <Route path="/games/houses" element={<HouseColoringGame />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}