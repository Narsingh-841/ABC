import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { BadgeCheck, Clock, Users } from 'lucide-react';

interface HiringModel {
  title: string;
  description: string;
}

export default function HiringModels() {
  const models: HiringModel[] = [
    {
      title: 'Contract Hiring',
      description: 'Access skilled developers on a contract basis — quickly and without complexity. Ideal for short-term needs or specialized project support.'
    },
    {
      title: 'Contract-to-Hire (C2H)',
      description: 'Onboard pre-vetted developers on contract, assess their performance and cultural fit, and convert them to full-time roles seamlessly.'
    },
    {
      title: 'Permanent Hiring',
      description: 'Hire highly skilled, fully vetted developers across AI, DevOps, Blockchain, and more — and build a strong, long-term engineering team.'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateX: -15,
      scale: 0.95
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 1
      }
    })
  };

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Dedicated icons with #760060 color
  const icons = [
    <Clock key="contract" className="w-8 h-8" style={{ color: '#760060' }} />,
    <Users key="c2h" className="w-8 h-8" style={{ color: '#760060' }} />,
    <BadgeCheck key="permanent" className="w-8 h-8" style={{ color: '#760060' }} />
  ];

  return (
    <section className="bg-white py-16 md:py-14 px-4 md:px-8">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div 
            className="inline-block mb-6"
            variants={badgeVariants}
          >
            <span className="bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm md:text-base font-medium">
              Our Hiring Model
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 bg-clip-text text-transparent" 
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif', backgroundImage: 'linear-gradient(90deg, #6D58D6 0%, #D24B8A 100%)' }}
            variants={textVariants}
          >
            Flexible Ways to Build Your Tech Team
          </motion.h2>

          {/* Subtext */}
          <motion.div 
            className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            <p className="mb-3">Explore tailored hiring solutions for your business needs — contract, contract-to-hire, or permanent.</p>
            <p className="mb-0">Hire top-quality developers faster, smarter, and more efficiently with Capabiliq.</p>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex justify-center">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {models.map((model, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                variants={cardVariants}
                custom={idx}
                whileHover={{ 
                  y: -8,
                  rotateY: 3,
                  scale: 1.02,
                  transition: { 
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Icon */}
                <motion.div 
                  className="mb-6"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    {icons[idx]}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-2xl font-semibold text-gray-900 mb-4" 
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}
                  whileHover={{ color: "#6D58D6" }}
                  transition={{ duration: 0.2 }}
                >
                  {model.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-700 text-base leading-relaxed"
                  whileHover={{ color: "#4B5563" }}
                  transition={{ duration: 0.2 }}
                >
                  {model.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}