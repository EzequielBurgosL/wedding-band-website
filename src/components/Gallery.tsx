import React, { useState } from 'react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "First Dance Moments"
    },
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Garden Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Evening Reception"
    },
    {
      url: "https://images.unsplash.com/photo-1470319149473-c4e1e0d62cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Acoustic Session"
    },
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Cocktail Hour"
    },
    {
      url: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Dance Floor"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">
            Capturing magical moments through music
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-medium">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}