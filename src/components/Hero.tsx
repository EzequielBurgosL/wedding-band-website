import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470319149473-c4e1e0d62cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          The Wedding Vibes
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Creating unforgettable musical moments for your perfect day
        </p>
        <a
          href="#booking"
          className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full text-lg transition transform hover:scale-105"
        >
          Check Our Availability
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}