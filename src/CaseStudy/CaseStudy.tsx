import React from 'react';
import { ArrowRight } from 'lucide-react';
import casestudydatanativ from "../assets/casestudydata.jpg";
import casestudypwc from "../assets/casestudypwc.jpg";
import casestudyrfgen from "../assets/casestudy.png";

interface CaseStudy {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  status: 'know-more' | 'coming-soon';
  backgroundColor: string;
  hasImage: boolean;
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      image: casestudyrfgen,
      title: 'RFgen',
      description: 'RFgen: Building from Ground Zero',
      link: '/rfgen-case-study',
      status: 'know-more',
      backgroundColor: 'bg-[#030c2d]',
      hasImage: true
    },
    {
      id: '2',
      image: casestudydatanativ,
      title: 'DataNitiv',
      description: 'DataNitiv & Brightcone.AI Establishing GCCs',
      link: '/Datanativ-case-study',
      status: 'know-more',
      backgroundColor: 'bg-white',
      hasImage: true
    },
    {
      id: '3',
      image: casestudypwc,
      title: 'PwC',
      description: 'PwC: Scaling Critical Technology Capabilities',
      link: '/pwc-case-study',
      status: 'know-more',
      backgroundColor: 'bg-white',
      hasImage: true
    },
    {
      id: '4',
      image:"",
      title: "",
      description: 'RFgen: Building from Ground Zero',
      link: '#',
      status: 'coming-soon',
      backgroundColor: 'bg-lime-500',
      hasImage: true
    },
    {
      id: '5',
      image: "",
      title: '',
      description: 'DataNitiv & Brightcone.AI Establishing GCCs',
      link: '#',
      status: 'coming-soon',
      backgroundColor: 'bg-orange-500',
      hasImage: true
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 text-gray-900"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
          >
            Our Case Studies
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
          >
            Explore how leading organizations transform their capabilities with our solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Top Row - 3 items */}
          {caseStudies.slice(0, 3).map((study) => (
            <div key={study.id} className="flex flex-col">
              <div
                className={`rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex-grow ${study.backgroundColor}`}
              >
                {/* Image Area - Using object-contain to show complete images */}
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-40 sm:h-44 object-contain rounded-2xl"
                />
              </div>

              {/* Content - Below Card */}
              <div className="mt-4">
                <h3 
                  className="text-lg sm:text-xl font-semibold mb-2 text-gray-900"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                >
                  {study.title}
                </h3>
                <p 
                  className="text-sm sm:text-base mb-4 leading-relaxed text-gray-600"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                >
                  {study.description}
                </p>

                {/* Link */}
                <a
                  href={study.link}
                  className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-300 group"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                >
                  Know More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {caseStudies.slice(3, 5).map((study) => (
            <div key={study.id} className="flex flex-col">
              <div
                className={`rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex-grow ${study.backgroundColor}`}
              >
                {/* Image Area - Using object-contain to show complete images */}
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-40 sm:h-44 object-contain rounded-2xl"
                />
              </div>

              {/* Content - Below Card */}
              <div className="mt-4">
                <h3 
                  className="text-lg sm:text-xl font-semibold mb-2 text-gray-900"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                >
                  {study.title}
                </h3>
                <p 
                  className="text-sm sm:text-base mb-4 leading-relaxed text-gray-600"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                >
                  {study.description}
                </p>

                {/* Coming Soon Badge */}
                <div className="inline-flex items-center gap-2 text-gray-500 font-semibold">
                  <span>Coming Soon</span>
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

export default CaseStudies;