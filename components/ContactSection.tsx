
import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube } from './Icons';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-earth-50 py-16 border-t border-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-herbal-900 sm:text-4xl">Get in Touch</h2>
          <div className="w-24 h-1 bg-herbal-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-earth-800 max-w-2xl mx-auto">
            Have questions about our herbal products? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-earth-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Contact Information */}
            <div className="p-8 lg:p-12 space-y-8">
              <h3 className="text-2xl font-serif font-bold text-herbal-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-herbal-50 p-3 rounded-full mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-herbal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Our Location</h4>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      JJ Herbals India,<br />
                      Mini Industrial Estate, Peruvalathuparamb,<br />
                      Irikkur, Kannur, Kerala
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-herbal-50 p-3 rounded-full mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-herbal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                    <a href="tel:+919656614930" className="text-gray-600 mt-1 hover:text-herbal-600 block transition-colors">
                      +91 96566 14930
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-herbal-50 p-3 rounded-full mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-herbal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                    <a href="mailto:info@jjherbals.store" className="text-gray-600 mt-1 hover:text-herbal-600 block transition-colors">
                      info@jjherbals.store
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-herbal-50 p-3 rounded-full mr-4 shrink-0">
                    <MessageCircle className="h-6 w-6 text-herbal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">WhatsApp</h4>
                    <a 
                      href="https://wa.me/919656614930" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 mt-1 hover:text-herbal-600 block transition-colors"
                    >
                      +91 96566 14930
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Map/Image */}
            <div className="bg-herbal-900 p-8 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Follow Us</h3>
                <p className="text-herbal-100 mb-8 leading-relaxed">
                  Stay updated with our latest herbal discoveries, health tips, and exclusive offers by following us on social media.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-white hover:text-pink-600 transition-all transform hover:scale-110">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-110">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-white hover:text-red-600 transition-all transform hover:scale-110">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-herbal-800">
                <p className="text-sm text-herbal-200">
                  "Nature itself is the best physician."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
