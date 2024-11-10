import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & James",
      date: "June 2023",
      content: "The Wedding Vibes made our special day absolutely perfect! Their music selection and performance were beyond our expectations.",
      rating: 5
    },
    {
      name: "Emily & Michael",
      date: "September 2023",
      content: "Professional, talented, and so easy to work with. Our guests couldn't stop talking about how amazing the band was!",
      rating: 5
    },
    {
      name: "Jessica & David",
      date: "August 2023",
      content: "They created the perfect atmosphere for both our ceremony and reception. Truly talented musicians who know how to read the crowd.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            What Couples Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-gray-500 text-sm">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}