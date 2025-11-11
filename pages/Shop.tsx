import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { CheckIcon } from '../components/icons/CategoryIcons';

interface ShopProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

interface ProductCardProps {
  product: Product;
  isInCart: boolean;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isInCart, onAddToCart, onRemoveFromCart }) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleToggleCart = () => {
    if (isInCart) {
      onRemoveFromCart(product.id);
    } else {
      onAddToCart(product);
      setJustAdded(true);
      setTimeout(() => {
        setJustAdded(false);
      }, 2000); // Reset after 2 seconds
    }
  };

  let buttonContent: React.ReactNode;
  if (justAdded) {
    buttonContent = 'Added!';
  } else if (isInCart) {
    buttonContent = (
      <span className="flex items-center justify-center gap-2">
        In Cart <CheckIcon className="h-5 w-5" />
      </span>
    );
  } else {
    buttonContent = 'Add to Cart';
  }
  
  const baseButtonClasses = 'font-semibold py-2 px-5 rounded-full transition-all duration-300 transform active:scale-95';

  const buttonDynamicClasses = justAdded
    ? 'bg-green-500 text-white'
    : isInCart
    ? 'bg-green-500 text-white hover:bg-red-500'
    : 'bg-pink-500 text-white hover:bg-pink-600 hover:scale-105';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-sky-500">{product.price}</span>
          <button
            onClick={handleToggleCart}
            disabled={justAdded}
            className={`${baseButtonClasses} ${buttonDynamicClasses}`}
          >
            {buttonContent}
          </button>
        </div>
      </div>
    </div>
  );
};

const Shop: React.FC<ShopProps> = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Our Awesome Merch!</h1>
      <p className="text-center text-gray-600 mb-10">Take a piece of Kids Tube home with you.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(product => {
          const isInCart = cart.some(item => item.id === product.id);
          return <ProductCard key={product.id} product={product} isInCart={isInCart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />;
        })}
      </div>
    </div>
  );
};

export default Shop;