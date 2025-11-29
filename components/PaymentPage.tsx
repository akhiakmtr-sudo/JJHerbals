import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Lock, Calendar, User, ShieldCheck, CheckCircle } from './Icons';

interface PaymentPageProps {
  total: number;
  onBack: () => void;
  onPaymentSuccess: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ total, onBack, onPaymentSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'form' | 'processing' | 'success'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentStep('processing');

    // Simulate payment processing delay
    setTimeout(() => {
      setPaymentStep('success');
      setTimeout(() => {
        onPaymentSuccess();
      }, 2000); // Show success message for 2 seconds before redirecting
    }, 2000);
  };

  if (paymentStep === 'success') {
    return (
      <div className="min-h-screen bg-earth-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full text-center">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-herbal-900 mb-2">Payment Successful!</h2>
          <p className="text-earth-800 mb-6">Your order has been placed successfully. You will receive a confirmation email shortly.</p>
          <div className="w-full bg-earth-100 rounded-full h-2 overflow-hidden">
            <div className="bg-herbal-500 h-full w-full animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Redirecting to shop...</p>
        </div>
      </div>
    );
  } else if (paymentStep === 'processing') {
      return (
        <div className="min-h-screen bg-earth-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-herbal-600"></div>
                </div>
                <h2 className="text-xl font-bold text-herbal-900 mb-2">Processing Payment...</h2>
                <p className="text-gray-500 text-sm">Please do not close this window.</p>
            </div>
        </div>
      )
  }

  return (
    <div className="min-h-screen bg-earth-50 animate-fade-in pb-12">
      <div className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center text-herbal-800 hover:text-herbal-600 transition-colors font-medium"
            disabled={isProcessing}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Details
          </button>
          <h1 className="ml-auto font-serif text-xl font-bold text-herbal-900">Secure Payment</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-herbal-900 rounded-2xl shadow-lg p-6 text-white mb-8 flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-herbal-200 text-sm font-medium mb-1">Total Amount to Pay</p>
            <p className="text-3xl font-bold">₹{total.toFixed(2)}</p>
          </div>
          <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center relative z-10">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <div className="absolute -right-6 -bottom-12 h-32 w-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-earth-200 overflow-hidden">
          <div className="p-6 border-b border-earth-100 flex items-center gap-3">
             <CreditCard className="h-6 w-6 text-herbal-700" />
             <h2 className="text-lg font-bold text-gray-900">Credit / Debit Card</h2>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="0000 0000 0000 0000"
                    pattern="[0-9\s]{13,19}"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                     </div>
                    <input
                      type="text"
                      required
                      placeholder="MM / YY"
                      pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      required
                      placeholder="123"
                      pattern="[0-9]{3,4}"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors font-mono"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                    </div>
                  <input
                    type="text"
                    required
                    placeholder="Name on card"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-herbal-500 focus:border-herbal-500 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-herbal-800 hover:bg-herbal-900 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center mt-4"
              >
                <Lock className="h-5 w-5 mr-2" />
                Pay ₹{total.toFixed(2)} Securely
              </button>
              
              <div className="flex justify-center items-center gap-2 text-xs text-gray-500 mt-4">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span>256-bit SSL Encrypted Payment</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;