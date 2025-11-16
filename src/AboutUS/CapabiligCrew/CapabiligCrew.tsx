import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

export default function CapabiliqCrew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const teamMembers: TeamMember[] = [
    { id: 1, name: 'Member 1', title: 'Tech Innovator', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 2, name: 'Member 2', title: 'Hiring Expert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { id: 3, name: 'Member 3', title: 'Innovation Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { id: 4, name: 'Member 4', title: 'Talent Strategist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { id: 5, name: 'Member 5', title: 'Business Expert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlay, teamMembers.length]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#092440] w-full max-w-[1160px] rounded-[20px] mx-auto mb-6 sm:mb-8 lg:mb-4 p-4 sm:p-6 lg:p-6">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
          Meet the Capabiliq Crew
        </h1>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          At the heart of Capabiliq is a team of tech innovators and hiring experts dedicated to making recruitment smarter, faster, and easier for modern businesses.
        </p>
      </div>

      {/* Carousel Container with Border */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden w-full max-w-4xl mx-auto aspect-[3/4] sm:aspect-[4/3] lg:aspect-video flex items-center justify-center border-4 sm:border-6 lg:border-8 border-blue-400">
        {/* Carousel Content */}
        <div className="relative w-full h-full">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3 sm:p-4 lg:p-6 xl:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm lg:text-base xl:text-lg">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-900 p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-200"
          aria-label="Previous member"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-900 p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-200"
          aria-label="Next member"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 xl:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 lg:gap-2 z-10">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-4 sm:w-5 lg:w-6 xl:w-8'
                  : 'bg-white/50 hover:bg-white/75 w-1.5 sm:w-2'
              }`}
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}