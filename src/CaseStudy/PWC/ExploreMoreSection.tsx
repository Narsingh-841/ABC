import React from 'react';
import { ArrowRight } from 'lucide-react';
import datanativImage from "../../assets/casestudydata.jpg";

import gccsImage from "../../assets/casestudy.png";

interface ExploreCard {
  id: string;
  image: string;
  description: string;
  link: string;
  status: 'know-more' | 'coming-soon';
  backgroundColor: string;
  hasImage: boolean;
}

const ExploreMoreSection: React.FC = () => {
  const exploreCards: ExploreCard[] = [
    {
      id: '1',
      image: datanativImage,
      description: 'DataNitiv & Brightcone.AI Establishing GCCs',
      link: '/Datanativ-case-study',
      status: 'know-more',
      backgroundColor: 'bg-white',
      hasImage: true
    },
    {
      id: '2',
      image: gccsImage,
      description: 'Rfgen: Building from Ground Zero',
      link: '/rfgen-case-study',
      status: 'know-more',
      backgroundColor: 'bg-white',
      hasImage: true
    },
    {
      id: '3',
      image: "",
      description: 'Coming Soon',
      link: '/coming-soon',
      status: 'coming-soon',
      backgroundColor: 'bg-gray-100',
      hasImage: false
    }
  ];

  return (
    <section className="py-16 sm:py-18 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-12 lg:mb-12 text-center">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 text-gray-900"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
          >
            Explore More
          </h2>
        </div>

        {/* Explore More Cards Grid - Exactly 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {exploreCards.map((card) => (
            <div key={card.id} className="flex flex-col">
              {/* Card Container */}
              <div
                className={`rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex-grow h-full flex flex-col ${card.backgroundColor} ${
                  card.status === 'coming-soon' ? 'border-2 border-dashed border-gray-300' : 'border border-gray-200'
                }`}
              >
                {/* Image Area */}
                <div className="w-full h-48 sm:h-52 rounded-t-2xl overflow-hidden flex-shrink-0">
                  {card.hasImage ? (
                    <img 
                      src={card.image} 
                      alt={card.description}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-t-2xl">
                      <span className="text-gray-500 text-lg font-medium">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content Area - Only Description */}
                <div className="p-6 flex flex-col flex-grow">
                  <p 
                    className="text-base leading-relaxed text-gray-600 mb-6 flex-grow"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                  >
                    {card.description}
                  </p>

                  {/* ALWAYS SHOW KNOW MORE */}
                  <a
                    href={card.link}
                    className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-300 group mt-auto"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                  >
                    Know More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add SF Pro font styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default ExploreMoreSection;