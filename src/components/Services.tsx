import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Ceremony Music",
      price: "from $800",
      description: "Live acoustic music for your wedding ceremony",
      features: [
        "Professional string quartet",
        "Customized song selection",
        "Prelude music (30 minutes)",
        "Processional & recessional songs"
      ]
    },
    {
      title: "Reception Package",
      price: "from $2,500",
      description: "Full band performance for your reception",
      features: [
        "5-piece band configuration",
        "4 hours of live music",
        "DJ service during breaks",
        "Custom first dance song",
        "MC services included"
      ]
    },
    {
      title: "Full Day Coverage",
      price: "from $3,200",
      description: "Comprehensive musical entertainment",
      features: [
        "Ceremony & reception coverage",
        "Cocktail hour music",
        "5 hours of reception entertainment",
        "Sound system included",
        "Lighting package"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Tailored musical packages for your perfect day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-rose-400 text-xl mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-rose-400 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50">
                <button className="w-full bg-rose-400 text-white py-2 px-4 rounded-full hover:bg-rose-500 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}