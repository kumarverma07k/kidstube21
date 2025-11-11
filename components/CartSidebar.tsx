import React from 'react';
import { Product } from '../types';
import { TrashIcon, CloseIcon } from './icons/CategoryIcons';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Product[];
  removeFromCart: (productId: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => {
    // Remove non-numeric characters except for the decimal point
    const priceString = item.price.replace(/[^0-9.]/g, '');
    return total + parseFloat(priceString);
  }, 0);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
            <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-grow p-4 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map(item => (
                  <li key={item.id} className="flex items-center gap-4">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-700">{item.name}</h3>
                      <p className="text-gray-500">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full" aria-label={`Remove ${item.name} from cart`}>
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center text-lg font-bold mb-4">
                <span>Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-full hover:bg-sky-600 transition-colors shadow-md transform hover:scale-105">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;