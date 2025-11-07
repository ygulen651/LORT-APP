'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'What is LortApp?',
    answer: 'LortApp is an AI-powered B2B trade platform that connects manufacturers with buyers. It helps you find the most suitable business partners within seconds based on your products, target market, and production capacity.'
  },
  {
    question: 'How does LortApp work?',
    answer: 'Enter your profile and product information → LortApp analyzes the data → It suggests the best supplier/buyer matches with the highest compatibility. No intermediaries are involved; you communicate directly.'
  },
  {
    question: 'Is membership free?',
    answer: 'The basic matching system of LortApp is free to use. Premium plans are available for advanced features (detailed buyer lists, premium filters, industry reports, etc.).'
  },
  {
    question: 'How is match accuracy ensured?',
    answer: 'LortApp analyzes various parameters such as product type, production capacity, country, target market, certifications, and industry demand trends. The AI matches you only with truly compatible companies, providing qualified connections instead of random buyer lists.'
  },
  {
    question: 'Which industries is LortApp suitable for?',
    answer: 'It can be used in food, textiles, machinery, packaging, construction materials, agriculture, hygiene products, and many other industries. It is suitable for anyone who produces, sells, or engages in import-export.'
  }
];

export function FAQSectionEN() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The most common questions and answers about LortApp
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-800 last:border-0"
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-en-${index}`}
              >
                <span className="text-lg font-medium text-white">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              <div 
                id={`faq-en-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
              >
                <p className="text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
