import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="space-y-8">
          <a href="tel:+918109098649" 
             className="flex items-center space-x-4 p-4 rounded-lg hover:bg-rose-50 transition">
            <Phone className="h-6 w-6 text-rose-400" />
            <div>
              <h3 className="font-medium text-gray-800">Phone</h3>
              <p className="text-gray-600">+91 8109098649</p>
            </div>
          </a>

          <a href="mailto:rachna.arya168@gmail.com"
             className="flex items-center space-x-4 p-4 rounded-lg hover:bg-rose-50 transition">
            <Mail className="h-6 w-6 text-rose-400" />
            <div>
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">rachna.arya168@gmail.com</p>
            </div>
          </a>

          <a href="https://www.instagram.com/aketkiin/"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center space-x-4 p-4 rounded-lg hover:bg-rose-50 transition">
            <Instagram className="h-6 w-6 text-rose-400" />
            <div>
              <h3 className="font-medium text-gray-800">Instagram</h3>
              <p className="text-gray-600">@aketkiin</p>
            </div>
          </a>

          <a href="https://www.facebook.com/share/15ZYZfR77j/"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center space-x-4 p-4 rounded-lg hover:bg-rose-50 transition">
            <Facebook className="h-6 w-6 text-rose-400" />
            <div>
              <h3 className="font-medium text-gray-800">Facebook</h3>
              <p className="text-gray-600">Rachana Arya</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}