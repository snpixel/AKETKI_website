import React, { useState } from 'react';
import { X } from 'lucide-react';

const necklaces = [
  {
    id: 1,
    image: "./images/1.jpeg",
    title: "Royal Thread Necklace",
    price: "₹1,499"
  },
  {
    id: 2,
    image: "./images/2.jpeg",
    title: "Ethnic Collection",
    price: "₹1,299"
  },
  {
    id: 3,
    image: "./images/3.jpeg",
    title: "Traditional Series",
    price: "₹1,699"
  },
  {
    id: 4,
    image: "./images/4.jpeg",
    title: "Modern Fusion",
    price: "₹1,899"
  },
  {
    id: 1,
    image: "./images/5.jpeg",
    title: "Royal Thread Necklace",
    price: "₹1,499"
  },
  {
    id: 2,
    image: "./images/6.jpeg",
    title: "Ethnic Collection",
    price: "₹1,299"
  },
  {
    id: 3,
    image: "./images/7.jpeg",
    title: "Traditional Series",
    price: "₹1,699"
  },
  {
    id: 4,
    image: "./images/8.jpeg",
    title: "Modern Fusion",
    price: "₹1,899"
  },
  {
    id: 1,
    image: "./images/9.jpeg",
    title: "Royal Thread Necklace",
    price: "₹1,499"
  },
  {
    id: 2,
    image: "./images/10.jpeg",
    title: "Ethnic Collection",
    price: "₹1,299"
  },
];

export default function Collection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Our Collection</h1>
      
      <section>
        <h2 className="text-2xl font-serif mb-8">Necklaces</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {necklaces.map((item) => (
            <div 
              key={item.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[896/1152] object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium text-sm md:text-base">{item.title}</h3>
                  <p className="text-rose-200 font-semibold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-rose-400 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="text-center">
            <img
              src={necklaces.find(n => n.id === selectedImage)?.image}
              alt="Selected jewelry"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="text-xl font-medium">
                {necklaces.find(n => n.id === selectedImage)?.title}
              </h3>
              <p className="text-rose-300 font-semibold mt-2">
                {necklaces.find(n => n.id === selectedImage)?.price}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Future sections (commented out)
      <section className="mt-16">
        <h2 className="text-2xl font-serif mb-8">Bracelets</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-serif mb-8">Bangles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        </div>
      </section>
      */}
    </div>
  );
}