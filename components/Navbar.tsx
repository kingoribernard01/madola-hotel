import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || isOpen 
          ? "bg-madola-forest/95 backdrop-blur-md border-b border-madola-gold/20 shadow-lg py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            {/* Logo Container */}
            <div className="relative h-16 w-auto transition-transform duration-300 group-hover:scale-105">
                <img 
                    src="image.png" 
                    alt="Madola Hotel Logo" 
                    className="h-full w-auto object-contain drop-shadow-md"
                    onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('hidden');
                    }}
                />
            </div>
            {/* Text Fallback/Complement (Optional, hidden on mobile if logo is prominent) */}
            <div className="flex flex-col hidden sm:flex">
                <span className="text-white font-bold text-xl tracking-widest leading-none font-serif">MADOLA</span>
                <span className="text-madola-gold text-[0.6rem] uppercase tracking-[0.2em] leading-none mt-1">Luxury Hotel</span>
            </div>
          </Link>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative px-1 py-2 text-sm font-medium transition-colors group",
                    location.pathname === link.path
                      ? "text-madola-gold"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-madola-gold transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                      location.pathname === link.path && "scale-x-100"
                  )} />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block">
             <Link to="/rooms">
                <Button variant="secondary" className="border-madola-gold text-madola-gold hover:text-madola-forest px-6 py-2 text-sm !bg-transparent hover:!bg-madola-gold">
                    Book Now
                </Button>
             </Link>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-madola-gold hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-madola-forest border-b border-madola-gold/20 overflow-y-auto max-h-[80vh]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "text-madola-gold bg-black/20"
                    : "text-zinc-300 hover:text-white hover:bg-black/20"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3 pb-4">
                 <Link to="/rooms" className="w-full block">
                    <Button variant="primary" className="w-full bg-madola-gold text-madola-forest hover:bg-white hover:text-madola-forest">
                        Book Your Stay
                    </Button>
                 </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}