
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingBag, Clock, Droplet, List, Leaf } from './Icons';
import { Product } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack, onAddToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    setIsImageLoading(true);
  }, [currentImageIndex]);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in pb-16">
      {/* Breadcrumb / Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button 
          onClick={onBack}
          className="group flex items-center text-herbal-700 hover:text-herbal-900 font-medium transition-colors"
        >
          <div className="bg-herbal-50 p-2 rounded-full mr-3 group-hover:bg-herbal-100 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </div>
          Back to Collection
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          
          {/* Left Column: Image Gallery */}
          <div className="mb-10 lg:mb-0">
            {/* Main Image Slider */}
            <div className="relative aspect-square bg-earth-50 rounded-2xl overflow-hidden shadow-sm border border-earth-100 mb-4 group">
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-herbal-50 z-10 animate-pulse">
                   <Leaf className="h-16 w-16 text-herbal-200 opacity-50" />
                </div>
              )}
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} view ${currentImageIndex + 1}`}
                className={`w-full h-full object-cover object-center transition-all duration-500 ${isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                onLoad={handleImageLoad}
              />
              
              {/* Slider Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white text-herbal-900 transition-all hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white text-herbal-900 transition-all hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Counter Badge */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                {currentImageIndex + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    currentImageIndex === idx 
                      ? 'border-herbal-500 ring-2 ring-herbal-200 ring-offset-2' 
                      : 'border-transparent hover:border-herbal-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col h-full">
            <div className="border-b border-earth-100 pb-6 mb-6">
              <span className="text-herbal-600 font-bold uppercase tracking-wider text-sm">
                {product.category}
              </span>
              <h1 className="mt-2 text-4xl font-serif font-bold text-herbal-900 tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-4 flex items-end gap-4">
                <p className="text-3xl font-bold text-herbal-800">
                  ₹{product.price.toFixed(2)}
                </p>
                <span className="text-sm text-green-600 font-medium mb-1.5 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                  In Stock & Ready to Ship
                </span>
              </div>
            </div>

            {/* Buy Now Section */}
            <div className="bg-herbal-50 rounded-2xl p-6 border border-herbal-100 mb-8 shadow-sm">
              <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-herbal-800 border border-transparent rounded-xl py-4 px-8 flex items-center justify-center text-lg font-bold text-white hover:bg-herbal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-herbal-500 transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]"
              >
                <ShoppingBag className="mr-2 h-6 w-6" />
                Buy Now
              </button>
              <p className="mt-4 text-xs text-center text-herbal-700">
                Free shipping on orders over ₹1500 • 30-Day Money Back Guarantee
              </p>
            </div>

            {/* Rich Details Tabs/Sections */}
            <div className="space-y-8">
              
              {/* Detailed Description */}
              <section>
                <h3 className="font-serif font-bold text-xl text-herbal-900 mb-4 border-l-4 border-herbal-400 pl-3">
                  Product Description
                </h3>
                <div className="prose prose-stone text-earth-800 leading-relaxed text-lg">
                  <p>{product.longDescription}</p>
                </div>
              </section>

              {/* Two Column Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Ingredients */}
                <div className="bg-white border border-earth-200 rounded-xl p-6 shadow-sm hover:border-herbal-200 transition-colors">
                  <div className="flex items-center gap-2 mb-4 text-herbal-800">
                    <div className="p-2 bg-herbal-50 rounded-lg">
                      <List className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold font-serif text-lg">Key Ingredients</h3>
                  </div>
                  <ul className="space-y-3">
                    {product.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-earth-700">
                        <Leaf className="h-4 w-4 text-herbal-500 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage */}
                <div className="bg-white border border-earth-200 rounded-xl p-6 shadow-sm hover:border-herbal-200 transition-colors">
                  <div className="flex items-center gap-2 mb-4 text-herbal-800">
                    <div className="p-2 bg-herbal-50 rounded-lg">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold font-serif text-lg">How to Use</h3>
                  </div>
                  <p className="text-sm text-earth-700 leading-7">
                    {product.usage}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
