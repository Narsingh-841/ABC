import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import hiringprocess from '../../assets/hiringprocess.png';

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function HiringProcess() {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We align on role requirements, skills, project goals, budget, and timelines in one focused conversation.'
    },
    {
      number: '02',
      title: 'Targeted Sourcing & Vetting',
      description: 'You receive only the most relevant, pre-vetted candidates with a strong submit-to-hire ratio and minimal drop-off.'
    },
    {
      number: '03',
      title: 'Interview & Hire',
      description: 'Conduct 1–2 interviews with shortlisted talent and onboard quickly, with most developers ready to start within days.'
    },
    {
      number: '04',
      title: 'Post-Onboarding Support',
      description: 'Capabiliq handles contracts, documentation, timesheets, and coordination—cutting overhead and ensuring smooth integration.'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.9,
      rotateY: 10
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const numberVariants = {
    hidden: { 
      scale: 0, 
      rotate: -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section ref={containerRef} className="bg-white py-6 md:py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" 
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}
          >
            How Capabiliq Makes <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #6D58D6 0%, #D24B8A 100%)' }}>Hiring Seamless</span>
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Capabiliq simplifies hiring through precise sourcing, expert vetting, and smooth onboarding—ensuring you get the right talent, faster and more efficiently.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 "
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Steps */}
          <div className="space-y-8 md:space-y-10 lg:pl-8">
            {/* Row 1 - Steps 01 & 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {steps.slice(0, 2).map((step, index) => (
                <motion.div
                  key={step.number}
                  className="space-y-3"
                  variants={stepVariants}
                  custom={index}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Number Badge */}
                  <motion.div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
                    style={{ backgroundColor: '#760060' }}
                    variants={numberVariants}
                    whileHover="hover"
                  >
                    <span className="text-white text-2xl font-bold" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}
                    whileHover={{ color: "#6D58D6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-700 text-sm leading-relaxed"
                    whileHover={{ color: "#4B5563" }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Row 2 - Steps 03 & 04 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {steps.slice(2, 4).map((step, index) => (
                <motion.div
                  key={step.number}
                  className="space-y-3"
                  variants={stepVariants}
                  custom={index + 2}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Number Badge */}
                  <motion.div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
                    style={{ backgroundColor: '#760060' }}
                    variants={numberVariants}
                    whileHover="hover"
                  >
                    <span className="text-white text-2xl font-bold" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}
                    whileHover={{ color: "#6D58D6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-700 text-sm leading-relaxed"
                    whileHover={{ color: "#4B5563" }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Imported Image */}
          <motion.div 
            className="relative flex items-center justify-center lg:pr-8"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-md">
              <motion.img 
                src={hiringprocess} 
                alt="Hiring Process" 
                className="w-full h-auto object-contain rounded-xl shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4 }
                }}
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-100/20 to-pink-100/20 pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}