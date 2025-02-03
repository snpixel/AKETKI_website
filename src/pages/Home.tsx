import React from 'react';
import { Diamond } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="./images/main.jpg"
            alt="Jewelry Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 " />
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl text-left">
              <h1 className="text-6xl md:text-8xl font-serif text-balck mb-4 animate-fade-in">
                Aketki
              </h1>
              <p className="text-2xl md:text-3xl text-black/90 font-light animate-fade-in-delay">
                by Rachana Arya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Owner Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-4xl font-serif text-gray-800">Meet the Artist</h2>
            <p className="text-gray-600 leading-relaxed">
              Rachana Arya, the creative force behind Aketki, brings years of artistic passion
              and dedication to every piece she creates. With a keen eye for detail and a love
              for traditional craftsmanship, she transforms simple threads into stunning jewelry
              that captures both elegance and tradition.
            </p>
          </div>
          
          <div className="relative order-1 md:order-2">
            <img 
              src="./images/founder.png"
              alt="Rachana Arya"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="bg-rose-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <img src="./logo/logo.svg" alt="Aketki" className="h-50 w-full" />
            <h2 className="text-4xl font-serif text-gray-800">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Aketki was born from a passion for creating unique, handcrafted jewelry that
              celebrates the beauty of traditional Indian craftsmanship. Each piece is
              thoughtfully designed and meticulously crafted using the finest materials,
              resulting in wearable art that tells a story and captures hearts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}