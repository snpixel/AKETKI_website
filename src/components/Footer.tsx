import React from 'react';
import { Diamond, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Diamond className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-serif text-white">Aketki</span>
            </div>
            <p className="text-sm">
              Handcrafted thread jewelry pieces that tell a unique story.
              Each creation is made with love and attention to detail.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-rose-400 transition">Home</a></li>
              <li><a href="/collection" className="hover:text-rose-400 transition">Collection</a></li>
              <li><a href="/contact" className="hover:text-rose-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="space-y-2">
              <a href="tel:+918109098649" className="flex items-center space-x-2 hover:text-rose-400 transition">
                <Phone className="h-4 w-4" />
                <span>+91 8109098649</span>
              </a>
              <a href="mailto:rachna.arya168@gmail.com" className="flex items-center space-x-2 hover:text-rose-400 transition">
                <Mail className="h-4 w-4" />
                <span>rachna.arya168@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/aketkiin/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center space-x-2 hover:text-rose-400 transition">
                <Instagram className="h-4 w-4" />
                <span>@aketkiin</span>
              </a>
              <a href="https://www.facebook.com/share/15ZYZfR77j/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-2 hover:text-rose-400 transition">
                <Facebook className="h-4 w-4" />
                <span>Rachana Arya</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aketki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}