
import React, { useState } from 'react';
import { CartItem } from '../types';
import { ArrowLeft, MessageCircle, User, Phone, Mail, MapPin, CheckCircle, Truck, CreditCard, ShoppingBag } from './Icons';

interface CheckoutPageProps {
  cart: CartItem[];
  total: number;
  onBack: () => void;
  onPlaceOrder: () => void;
  onProceedToPayment: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, total, onBack, onPlaceOrder, onProceedToPayment }) => {
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    district: '',
    state: '',
    country: 'India',
    pincode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProceedToPayment();
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = '919656614930';
    const itemsList = cart.map(item => `• ${item.name} (Qty: ${item.quantity})`).join('\n');
    const message = `Hello, I would like to place an order via JJ Herbals App:\n\n${itemsList}\n\nTotal Amount: ₹${total.toFixed(2)}\n\nPlease confirm my order.`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-earth-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-herbal-300 mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold text-herbal-900 mb-2">Your cart is empty</h2>
          <button onClick={onBack} className="text-herbal-600 hover:text-herbal-800 underline font-medium">
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-earth-50 animate-fade-in pb-12">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center text-herbal-800 hover:text-herbal-600 transition-colors font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Shop
          </button>
          <h1 className="ml-auto font-serif text-xl font-bold text-herbal-900">Secure Checkout</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Main Content - Left Side */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Option 1: WhatsApp */}
            <div className="bg-white rounded-2xl shadow-sm border border-earth-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Quick Order via WhatsApp</h2>
                    <p className="text-sm text-gray-500">Chat directly with us to confirm your order instantly.</p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Place Order on WhatsApp
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center text-earth-800 text-sm font-medium">
              <span className="px-4 bg-earth-50">OR</span>
            </div>

            {/* Option 2: Online Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-earth-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-herbal-100 flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-herbal-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Shop Online</h2>
                    <p className="text-sm text-gray-500">Fill in your details for home delivery.</p>
                  </div>
                </div>

                {!showOnlineForm ? (
                  <button
                    onClick={() => setShowOnlineForm(true)}
                    className="w-full bg-herbal-800 hover:bg-herbal-900 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Enter Shipping Details
                  </button>
                ) : (
                  <form onSubmit={handleOnlineSubmit} className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      {/* Mobile */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Full Address */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <MapPin className="h-5 w-5 text-gray-400" />
                          </div>
                          <textarea
                            name="address"
                            required
                            rows={3}
                            value={formData.address}
                            onChange={handleInputChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                            placeholder="House No, Building, Street Area"
                          />
                        </div>
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                          placeholder="City"
                        />
                      </div>

                      {/* District */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                        <input
                          type="text"
                          name="district"
                          required
                          value={formData.district}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                          placeholder="District"
                        />
                      </div>

                      {/* State */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                          placeholder="State"
                        />
                      </div>

                      {/* Pincode */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                        <input
                          type="text"
                          name="pincode"
                          required
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                          placeholder="123456"
                        />
                      </div>

                       {/* Country */}
                       <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          readOnly
                          value={formData.country}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                       <button
                        type="button"
                        onClick={() => setShowOnlineForm(false)}
                        className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-herbal-600 hover:bg-herbal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center shadow-md"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg border border-earth-100 p-6 sticky top-24">
              <h2 className="text-lg font-serif font-bold text-herbal-900 mb-4">Order Summary</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 py-3 border-b border-earth-100 last:border-0">
                    <div className="h-16 w-16 bg-earth-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                      <p className="text-gray-500 text-xs mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                       <p className="font-bold text-herbal-800 text-sm">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-earth-200 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-herbal-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-earth-100">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-herbal-800">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 bg-herbal-50 rounded-lg p-4 flex gap-3">
                <CheckCircle className="h-5 w-5 text-herbal-600 flex-shrink-0" />
                <p className="text-xs text-herbal-800 leading-relaxed">
                  Your order is safe with us. We use secure payment processing and encrypted data transmission.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
