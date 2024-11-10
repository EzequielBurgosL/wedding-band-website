import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking at least 6-12 months in advance for peak wedding season (May-October). For off-peak months, 4-6 months is usually sufficient."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require a 50% deposit to secure your date. This deposit is refundable up to 90 days before your event. Within 90 days, the deposit becomes non-refundable."
    },
    {
      question: "Do you provide all necessary equipment?",
      answer: "Yes, we provide all our own professional sound equipment, including speakers, microphones, and lighting. We just need access to power outlets."
    },
    {
      question: "Can you learn specific songs for our ceremony?",
      answer: "Absolutely! We can learn up to 3 special request songs for your ceremony at no additional charge. Additional songs can be added for a small fee."
    },
    {
      question: "What happens if a band member is sick?",
      answer: "We maintain a network of professional musicians who can step in if needed. We guarantee that your event will be covered with the same high level of quality."
    },
    {
      question: "Do you take breaks during the reception?",
      answer: "We typically take two 15-minute breaks during a 4-hour reception. During these breaks, we provide curated playlist music so there's never silence."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}