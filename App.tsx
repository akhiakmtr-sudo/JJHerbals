
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailPage from './components/ProductDetailPage';
import CartDrawer from './components/CartDrawer';
import CheckoutPage from './components/CheckoutPage';
import PaymentPage from './components/PaymentPage';
import ContactSection from './components/ContactSection';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';
import { Leaf } from './components/Icons';

type View = 'shop' | 'product-detail' | 'checkout' | 'payment';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentView, setCurrentView] = useState<View>('shop');

  const categories = ['All', 'Supplement'];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToShop = () => {
    setSelectedProduct(null);
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setCurrentView('shop');
  };

  const handleProceedToPayment = () => {
    setCurrentView('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = () => {
    setCart([]);
    setCurrentView('shop');
  };

  return (
    <div className="min-h-screen bg-earth-50 text-earth-900 font-sans selection:bg-herbal-200 selection:text-herbal-900 flex flex-col">
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileMenu={() => {}} 
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'payment' ? (
           <PaymentPage 
             total={cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
             onBack={() => setCurrentView('checkout')}
             onPaymentSuccess={handlePaymentSuccess}
           />
        ) : currentView === 'checkout' ? (
          <CheckoutPage 
            cart={cart}
            total={cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            onBack={handleBackToShop}
            onPlaceOrder={handlePlaceOrder}
            onProceedToPayment={handleProceedToPayment}
          />
        ) : currentView === 'product-detail' && selectedProduct ? (
          <ProductDetailPage 
            product={selectedProduct}
            onBack={handleBackToShop}
            onAddToCart={addToCart}
          />
        ) : (
          <>
            <Hero />

            {/* Catalog Section */}
            <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-herbal-900 sm:text-4xl">Our Collection</h2>
                <div className="w-24 h-1 bg-herbal-400 mx-auto mt-4 rounded-full"></div>
                <p className="mt-4 text-earth-800 max-w-2xl mx-auto">
                  Explore our exclusive range of ethically sourced, organic supplements designed to bring nature's healing into your daily routine.
                </p>
              </div>

              {/* Filter */}
              <div className="flex justify-center flex-wrap gap-2 mb-12">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-herbal-700 text-white shadow-md'
                        : 'bg-white text-earth-800 border border-earth-200 hover:bg-earth-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart}
                    onViewDetails={() => handleProductClick(product)}
                  />
                ))}
              </div>
            </section>

            {/* Benefits Strip */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="p-4">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center bg-herbal-100 rounded-full mb-4">
                      <Leaf className="h-6 w-6 text-herbal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-herbal-900">100% Organic</h3>
                    <p className="mt-2 text-earth-800 text-sm">Ethically sourced ingredients free from pesticides and harmful chemicals.</p>
                  </div>
                  <div className="p-4">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center bg-herbal-100 rounded-full mb-4">
                      <svg className="h-6 w-6 text-herbal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-herbal-900">Eco-Friendly</h3>
                    <p className="mt-2 text-earth-800 text-sm">Sustainable packaging and carbon-neutral shipping on every order.</p>
                  </div>
                  <div className="p-4">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center bg-herbal-100 rounded-full mb-4">
                      <svg className="h-6 w-6 text-herbal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-herbal-900">Handcrafted</h3>
                    <p className="mt-2 text-earth-800 text-sm">Made in small batches to ensure the highest quality and potency.</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Contact Section */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-herbal-900 text-herbal-100 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-2xl font-bold tracking-wide text-white">JJ Herbals</span>
            <p className="mt-4 text-sm max-w-xs opacity-80">
              Reconnecting you with the healing power of nature, one leaf at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-white">Teas</a></li>
              <li><a href="#" className="hover:text-white">Oils</a></li>
              <li><a href="#" className="hover:text-white">Salves</a></li>
              <li><a href="#" className="hover:text-white">Supplements</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-herbal-800 text-sm text-center opacity-60">
          &copy; {new Date().getFullYear()} JJ Herbals. All rights reserved.
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
