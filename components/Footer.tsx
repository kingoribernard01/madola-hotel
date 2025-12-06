import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-madola-forest text-white border-t border-madola-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3">
               <img src="image.png" alt="Madola" className="h-12 w-12 object-contain rounded-full bg-white/10 p-1" />
               <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-widest font-serif">MADOLA</span>
                  <span className="text-madola-gold text-xs uppercase tracking-[0.3em]">Hotel</span>
               </div>
            </Link>
            <p className="text-madola-sage text-sm leading-relaxed">
              Experience the perfect blend of modern luxury and warm hospitality. Located centrally for your convenience, Madola Hotel is your sanctuary in the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-madola-gold uppercase tracking-widest mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-madola-sage hover:text-madola-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/rooms" className="text-madola-sage hover:text-madola-gold transition-colors text-sm">Rooms & Suites</Link></li>
              <li><Link to="/restaurant" className="text-madola-sage hover:text-madola-gold transition-colors text-sm">Dining & Lounge</Link></li>
              <li><Link to="/gallery" className="text-madola-sage hover:text-madola-gold transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/blog" className="text-madola-sage hover:text-madola-gold transition-colors text-sm">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-madola-gold uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-madola-sage text-sm">
                <MapPin className="h-5 w-5 text-madola-gold shrink-0 mt-0.5" />
                <span>Madola Hotel, Near Mall & Sports Complex, Nairobi</span>
              </li>
              <li className="flex items-center gap-3 text-madola-sage text-sm">
                <Phone className="h-5 w-5 text-madola-gold shrink-0" />
                <a href="tel:+254722559001" className="hover:text-white transition-colors">+254 722 559 001</a>
              </li>
              <li className="flex items-center gap-3 text-madola-sage text-sm">
                <Mail className="h-5 w-5 text-madola-gold shrink-0" />
                <a href="mailto:info@madolahotel.com" className="hover:text-white transition-colors">info@madolahotel.com</a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-sm font-semibold text-madola-gold uppercase tracking-widest mb-6">Hours</h3>
            <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-madola-sage text-sm">
                    <Clock className="h-5 w-5 text-madola-gold shrink-0 mt-0.5" />
                    <div>
                        <span className="block text-white">Reception: 24/7</span>
                        <span className="block text-xs mt-1">Restaurant: 6:30am – 10:00pm</span>
                    </div>
                </li>
            </ul>
            
            <div className="flex space-x-4">
              <a href="#" className="text-madola-sage hover:text-madola-gold transition-colors p-2 border border-white/10 rounded-full hover:border-madola-gold">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-madola-sage hover:text-madola-gold transition-colors p-2 border border-white/10 rounded-full hover:border-madola-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-madola-sage hover:text-madola-gold transition-colors p-2 border border-white/10 rounded-full hover:border-madola-gold">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-madola-gold/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-madola-sage/60">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <p>&copy; {new Date().getFullYear()} Madola Hotel. All rights reserved.</p>
                <span className="hidden md:inline text-madola-sage/30">|</span>
                <p>
                    Designed by <a href="https://novus-studios.vercel.app" target="_blank" rel="noopener noreferrer" className="text-madola-gold hover:text-white transition-colors font-medium">Novus Studios</a>
                </p>
            </div>
            <div className="mt-4 md:mt-0 space-x-6">
                <a href="#" className="hover:text-madola-gold">Privacy Policy</a>
                <a href="#" className="hover:text-madola-gold">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}