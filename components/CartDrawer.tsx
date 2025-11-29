import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from './Icons';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-earth-100 flex justify-between items-center bg-herbal-50">
            <div className="flex items-center gap-2 text-herbal-900">
              <ShoppingBag className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold">Your Cart</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-earth-200 rounded-full transition-colors">
              <X className="h-5 w-5 text-earth-800" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-earth-800 opacity-60">
                <ShoppingBag className="h-16 w-16 mb-4" />
                <p className="text-lg">Your cart is empty.</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-herbal-600 hover:underline"
                >
                  Start shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 bg-earth-100 rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-earth-900">{item.name}</h3>
                    <p className="text-sm text-herbal-700 font-semibold">₹{item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-earth-200 rounded-lg">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 px-2 hover:bg-earth-100 transition-colors"
                        >
                          <Minus className="h-3 w-3 text-earth-800" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 px-2 hover:bg-earth-100 transition-colors"
                        >
                          <Plus className="h-3 w-3 text-earth-800" />
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-earth-100 p-6 bg-earth-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-earth-800 font-medium">Subtotal</span>
                <span className="text-xl font-bold text-herbal-900">₹{total.toFixed(2)}</span>
              </div>
              <button 
                className="w-full py-4 bg-herbal-800 text-white font-bold rounded-lg hover:bg-herbal-900 transition-colors shadow-lg"
                onClick={onCheckout}
              >
                Proceed to Checkout
              </button>
              <p className="text-xs text-center text-earth-800 mt-4">
                Free shipping on orders over ₹1500
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;