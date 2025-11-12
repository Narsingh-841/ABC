import React, { useState, useEffect } from 'react';
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
    <div className="bg-[#092440] w-[1160px] h-[829px] rounded-[20px] mx-auto  mb-10 p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-6">Meet the Capabiliq Crew</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          At the heart of Capabiliq is a team of tech innovators and hiring experts dedicated to making recruitment smarter, faster, and easier for modern businesses.
        </p>
      </div>

      {/* Carousel Container with Border */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl mx-auto aspect-video flex items-center justify-center border-8 border-blue-400">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-200 text-lg">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full transition-all duration-200"
          aria-label="Previous member"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full transition-all duration-200"
          aria-label="Next member"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}