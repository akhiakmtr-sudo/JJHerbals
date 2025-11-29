import React from 'react';
import { ShoppingBag, Leaf, Menu } from './Icons';
import { CartItem } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenMobileMenu }) => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-herbal-900/95 backdrop-blur-sm text-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Leaf className="h-8 w-8 text-herbal-300" />
            <span className="font-serif text-2xl font-bold tracking-wide">JJ Herbals</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="hover:text-herbal-300 transition-colors duration-200 text-sm uppercase tracking-wider font-semibold">Shop</a>
            <a href="#about" className="hover:text-herbal-300 transition-colors duration-200 text-sm uppercase tracking-wider font-semibold">Our Story</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={onOpenCart}
              className="relative p-2 hover:bg-herbal-800 rounded-full transition-colors group"
            >
              <ShoppingBag className="h-6 w-6 group-hover:text-herbal-300 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-herbal-900 transform translate-x-1/4 -translate-y-1/4 bg-herbal-300 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 hover:bg-herbal-800 rounded-full"
              onClick={onOpenMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;