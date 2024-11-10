import React, { useState } from 'react';
import { Calendar, Clock, Music } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    venue: '',
    package: 'reception',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Book Us</h2>
          <p className="text-xl text-gray-600">
            Let's make your special day unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-serif mb-6">Why Choose Us?</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-rose-400 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Flexible Scheduling</h4>
                  <p className="text-gray-600">
                    We work with your timeline to ensure perfect timing
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-rose-400 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Punctual & Professional</h4>
                  <p className="text-gray-600">
                    Always on time and prepared for your event
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Music className="h-6 w-6 text-rose-400 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Customized Playlist</h4>
                  <p className="text-gray-600">
                    Your preferred songs, performed your way
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wedding Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Venue
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
                required
              >
                <option value="ceremony">Ceremony Only</option>
                <option value="reception">Reception Package</option>
                <option value="full">Full Day Coverage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-400 focus:border-rose-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-400 text-white py-3 px-6 rounded-full hover:bg-rose-500 transition transform hover:scale-105"
            >
              Check Availability
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}