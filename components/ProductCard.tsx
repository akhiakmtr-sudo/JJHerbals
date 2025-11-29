import React from 'react';
import { Product } from '../types';
import { Plus, Eye } from './Icons';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-earth-200 flex flex-col h-full relative">
      <div 
        className="relative aspect-square overflow-hidden bg-earth-100 cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay Buttons */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
           <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="bg-white p-3 rounded-full shadow-lg text-earth-700 hover:text-herbal-900 hover:bg-herbal-50 transition-all transform hover:scale-110"
            title="Quick View"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-herbal-700 p-3 rounded-full shadow-lg text-white hover:bg-herbal-800 transition-all transform hover:scale-110"
            title="Add to Cart"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-bold text-herbal-600 uppercase tracking-wide mb-2">
          {product.category}
        </div>
        <h3 
          className="text-xl font-serif font-bold text-earth-900 mb-2 group-hover:text-herbal-700 transition-colors cursor-pointer"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        <p className="text-earth-800 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-earth-100">
          <span className="text-lg font-bold text-herbal-900">
            ₹{product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => onViewDetails(product)}
            className="text-sm font-semibold text-herbal-600 hover:text-herbal-800 underline decoration-2 underline-offset-4"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;