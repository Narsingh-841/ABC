import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bulb from '../../assets/bulb.png';

interface ServiceCardProps {
  title: string;
  number: string;
  color: string;
  items: string[];
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay: number;
  path: string; // Added path prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, number, color, items, position, delay, path }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(path);
  };

  const positionVariants = {
    'top-left': {
      hidden: { opacity: 0, x: -80, y: -40 },
      visible: { opacity: 1, x: 0, y: 0 }
    },
    'top-right': {
      hidden: { opacity: 0, x: 80, y: -40 },
      visible: { opacity: 1, x: 0, y: 0 }
    },
    'bottom-left': {
      hidden: { opacity: 0, x: -80, y: 40 },
      visible: { opacity: 1, x: 0, y: 0 }
    },
    'bottom-right': {
      hidden: { opacity: 0, x: 80, y: 40 },
      visible: { opacity: 1, x: 0, y: 0 }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={positionVariants[position]}
      transition={{
        duration: 0.8,
        delay: delay * 0.001,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{
        scale: 1.03,
        y: -3,
        transition: { duration: 0.3 }
      }}
      className="rounded-xl p-4 sm:p-6 shadow-lg cursor-pointer h-full"
      style={{ background: color }}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide max-w-[70%] leading-tight">
          {title}
        </h3>
        <motion.span 
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold opacity-40"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.6, delay: (delay * 0.001) + 0.3 }}
        >
          {number}
        </motion.span>
      </div>
      <ul className="space-y-2 sm:space-y-2.5">
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="text-white text-xs sm:text-xs flex items-start opacity-90"
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
            transition={{ duration: 0.5, delay: (delay * 0.001) + 0.4 + (index * 0.1) }}
          >
            <motion.span 
              className="mr-2 -mt-1.5 flex-shrink-0 text-base font-bold"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: (delay * 0.001) + 0.5 + (index * 0.1) }}
            >
              •
            </motion.span>
            <span className="text-[11px] sm:text-xs leading-tight flex-1">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesWeOffer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const services = [
    {
      title: 'CYBER SECURITY',
      number: '01',
      color: 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)',
      items: [
        'Security Engineer',
        'Security Analyst',
        'DevSecOps Engineer',
        'Security Architect',
        'CTI Analyst / Incident and many more'
      ],
      position: 'top-left' as const,
      path: '/cyber-security' // Added path
    },
    {
      title: 'SALESFORCE',
      number: '02',
      color: 'linear-gradient(135deg, #db2777 0%, #be185d 100%)',
      items: [
        'Salesforce Developer',
        'Salesforce Administrator',
        'Salesforce Solution Architect',
        'Salesforce Technical Lead',
        'Salesforce Integration Specialist and many more'
      ],
      position: 'top-right' as const,
      path: '/salesforce' // Added path
    },
    {
      title: 'AI & DATA ANALYTICS',
      number: '03',
      color: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
      items: [
        'Data Scientist',
        'AI Engineer (ML/DL/GenAI)',
        'Data Engineer (Big Data / Cloud)',
        'Machine Learning Engineer',
        'AI Assurance Specialist and many more'
      ],
      position: 'bottom-left' as const,
      path: '/data-analytics' // Added path
    },
    {
      title: 'DIGITAL TECH SOLUTIONS',
      number: '04',
      color: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
      items: [
        'Solutions Architect',
        'Full-Stack Developer',
        'Cloud Solutions Engineer',
        'Digital Transformation Consultant',
        'Enterprise Software Engineer'
      ],
      position: 'bottom-right' as const,
      path: '/digital-tech-solutions' // Added path
    }
  ];

  const arrowVariants: {
    hidden: { pathLength: number; opacity: number };
    visible: (i: number) => { pathLength: number; opacity: number; transition: any };
  } = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, delay: 0.5 + (i * 0.2), ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.5 + (i * 0.2) }
      }
    })
  };

  const bulbVariants: {
    hidden: { scale: number; rotate: number; opacity: number };
    visible: { scale: number; rotate: number; opacity: number; transition: any };
  } = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1],
        scale: { duration: 0.8, ease: "easeOut" },
        rotate: { duration: 1, ease: "easeInOut" }
      }
    }
  };

  const glowVariants: {
    hidden: { opacity: number; scale: number };
    visible: { opacity: number[]; scale: number[]; transition: any };
  } = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0.3, 0.8, 0.4],
      scale: [0.8, 1.2, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const titleVariants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: any };
  } = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={sectionRef} className="w-full bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.h1 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
        className="text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-12 lg:mb-16 text-gray-900"
        style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
      >
        Services We Offer
      </motion.h1>

      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout - Single Column */}
        <div className="block md:hidden space-y-4 sm:space-y-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={200 + (index * 200)}
              position={index % 2 === 0 ? 'top-left' : 'top-right'}
            />
          ))}
        </div>

        {/* Tablet Layout - 2x2 Grid */}
        <div className="hidden md:grid xl:hidden grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={200 + (index * 200)}
              position={index % 2 === 0 ? 'top-left' : 'top-right'}
            />
          ))}
        </div>

        {/* Desktop Layout - Three Columns with Bulb */}
        <div className="hidden xl:grid grid-cols-3 gap-4 lg:gap-6 xl:gap-8 items-start">
          {/* Left Column - Two Cards */}
          <div className="space-y-4 lg:space-y-6 xl:space-y-8 mt-8 xl:mt-0">
            <ServiceCard {...services[0]} delay={200} />
            <ServiceCard {...services[2]} delay={600} />
          </div>

          {/* Center Column - Bulb Image with Arrows */}
          <div className="flex justify-center items-center relative z-10 px-2 lg:px-4">
            <motion.div 
              className="relative"
              style={{ 
                width: '100%', 
                maxWidth: '380px',
                minWidth: '280px',
                height: 'auto',
                aspectRatio: '1',
                marginTop: '40px'
              }}
            >
              {/* Darker animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-xl"
                variants={glowVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
              
              {/* Additional stronger glow layer */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700/20 to-pink-700/20 blur-lg"
                variants={glowVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                  delay: 0.5
                }}
              />
              
              {/* Bulb Image */}
              <motion.div
                variants={bulbVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative z-10 w-full h-full"
              >
                <img 
                  src={bulb}
                  alt="Services Center" 
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Animated curved arrows */}
              <svg 
                className="absolute w-full h-full top-0 left-0 pointer-events-none z-0"
                viewBox="0 0 420 420"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Arrow from bulb to top-left card */}
                <motion.path 
                  d="M 160 160 Q 90 100, 20 30" 
                  stroke="#6d28d9" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  markerEnd="url(#arrow1)"
                  variants={arrowVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={0}
                />
                
                {/* Arrow from bulb to top-right card */}
                <motion.path 
                  d="M 260 160 Q 330 100, 400 30" 
                  stroke="#db2777" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  markerEnd="url(#arrow2)"
                  variants={arrowVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={1}
                />
                
                {/* Arrow from bulb to bottom-left card */}
                <motion.path 
                  d="M 160 260 Q 90 320, 20 390" 
                  stroke="#dc2626" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  markerEnd="url(#arrow3)"
                  variants={arrowVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={2}
                />
                
                {/* Arrow from bulb to bottom-right card */}
                <motion.path 
                  d="M 260 260 Q 330 320, 400 390" 
                  stroke="#7c3aed" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  markerEnd="url(#arrow4)"
                  variants={arrowVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={3}
                />
                
                <defs>
                  <marker id="arrow1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#6d28d9" />
                  </marker>
                  <marker id="arrow2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#db2777" />
                  </marker>
                  <marker id="arrow3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#dc2626" />
                  </marker>
                  <marker id="arrow4" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#7c3aed" />
                  </marker>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Right Column - Two Cards */}
          <div className="space-y-4 lg:space-y-6 xl:space-y-8 mt-8 xl:mt-0">
            <ServiceCard {...services[1]} delay={400} />
            <ServiceCard {...services[3]} delay={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWeOffer;