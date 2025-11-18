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
    <section className="bg-white py-6 overflow-hidden">
      <div className="w-full mx-auto px-0 lg:ml-26">
        {/* Title Section - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col lg:flex-row items-center mb-4 mt-4">
          {/* Mobile: Centered heading with optimized text */}
          <div className="lg:hidden w-full text-center mb-6 px-4">
            <h1 className="text-lg sm:text-xl font-bold text-black leading-tight">
              Top Developers<br />
              Trusted By Leading Companies
            </h1>
          </div>

          {/* Desktop: Optimized layout for 2 lines */}
          <div className="hidden lg:flex flex-col lg:flex-row items-center lg:items-start">
            <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-black text-center lg:text-right mb-4 lg:mb-0 lg:mr-6 lg:pr-2 leading-tight whitespace-nowrap">
              Top Developers<br />
              Trusted By Leading Companies
            </h1>
            <div className="hidden lg:block w-1 h-20 bg-gray-300 "></div>
          </div>
          
          {/* Animated Carousel - Full width with no right padding but contained */}
          <div className="w-full lg:flex-1 relative overflow-hidden">
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