import React from 'react';
import ttec from '../../assets/ttec.png';
import bain from '../../assets/bain.png';
import infosys from '../../assets/infosys.png';
import zensar from '../../assets/zensar.png';
import rfgen from '../../assets/rfgen.png';
import pwc from '../../assets/pwc.png';
import coforge from '../../assets/coforge.png';

interface Company {
  id: number;
  name: string;
  logo: string;
}

const LogoImage: React.FC<{ logo: string; name: string }> = ({ logo, name }) => (
  <div className="flex-shrink-0 flex items-center justify-center px-4">
    <img
      src={logo}
      alt={name}
      className="h-16 w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
);

export default function TrustedDeveloperSection() {
  const companies: Company[] = [
    { id: 1, name: 'ttec Digital', logo: ttec },
    { id: 2, name: 'Bain', logo: bain },
    { id: 3, name: 'Infosys', logo: infosys },
    { id: 4, name: 'ZenSar Technologies', logo: zensar },
    { id: 5, name: 'RFGen', logo: rfgen },
    { id: 6, name: 'PwC', logo: pwc },
    { id: 7, name: 'Coforge', logo: coforge },
  ];

  // Duplicate companies for infinite scroll effect
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="bg-white py-6">
      <div className="max-w-8xl mx-auto px-4 ml-12">
        {/* Title Section - Stack on mobile */}
        <div className="flex flex-col lg:flex-row items-center mb-2  ">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-black text-center lg:text-right mb-4 lg:mb-0 lg:mr-6 lg:pr-2">
              Top Developers<br className="hidden lg:block" />
              <div className="h-2 lg:h-4"></div>
              Trusted By Leading Companies
            </h1>
            <div className="hidden lg:block w-1 h-24 bg-gray-300 "></div>
          </div>
          
          {/* Animated Carousel */}
          <div className="relative w-full lg:w-3/5 xl:w-1/2 overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {duplicatedCompanies.map((company, index) => (
                <LogoImage key={`${company.id}-${index}`} logo={company.logo} name={company.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: max-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}