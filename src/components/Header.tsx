import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Diamond, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed  top-2  left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'mx-auto mt-4 max-w-[calc(100%-2rem)] rounded-xl bg-white/80 backdrop-blur-lg shadow-lg' 
        : 'bg-white/80 backdrop-blur-lg shadow-lg'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-xl">
            <img src="./logo/logo.svg" alt="Aketki" className="h-10 w-full" />
            <span className="text-xl font-serif text-xl">Aketki</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {location.pathname !== '/' && (
              <Link to="/" className="nav-link text-xl">Home</Link>
            )}
            <Link to="/collection" className="nav-link text-xl">Collection</Link>
            <Link to="/contact" className="nav-link text-xl">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 hover:text-rose-500 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t mt-3 border-gray-200 bg-white-900 bg-opacity-90">
            <div className="flex flex-col space-y-3">
              {location.pathname !== '/' && (
                <Link 
                  to="/" 
                  className="nav-link-mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link 
                to="/collection" 
                className="nav-link-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <Link 
                to="/contact" 
                className="nav-link-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}