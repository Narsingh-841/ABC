import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const launchDate = new Date('2025-12-31').getTime();
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-100 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-pink-200 via-purple-100 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8 sm:mb-10 leading-tight">
          To be Launched Soon!!
        </h1>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {/* Days */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1">
              {days.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Days</div>
          </div>

          {/* Hours */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1">
              {hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Hours</div>
          </div>

          {/* Minutes */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1">
              {minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Minutes</div>
          </div>

          {/* Seconds */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1">
              {seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">Seconds</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          We're working on something amazing! Get ready to experience something revolutionary.
        </p>

      </div>
    </div>
  );
}