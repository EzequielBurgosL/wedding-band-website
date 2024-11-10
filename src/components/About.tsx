import React from 'react';
import { Users, Music2, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-rose-400" />,
      title: "Professional Musicians",
      description: "Our ensemble features conservatory-trained musicians with years of wedding experience"
    },
    {
      icon: <Music2 className="h-8 w-8 text-rose-400" />,
      title: "Versatile Repertoire",
      description: "From classical ceremony music to contemporary dance hits, we adapt to your style"
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-400" />,
      title: "Personalized Service",
      description: "We work closely with you to create the perfect musical atmosphere for your special day"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating magical moments through music since 2015, we've performed at over 500 weddings across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="inline-block p-3 bg-rose-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}