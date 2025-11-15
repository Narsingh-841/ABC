import React, { useState, useEffect, useRef } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What makes CapabiliQ different from a traditional hiring agency?',
      answer: 'CapabiliQ runs on RaaS (Recruitment-as-a-Service) — combining AI sourcing, human vetting, and SLA-backed delivery. You don\'t just get resumes; you get interview-ready candidates in days, not weeks.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01" />
        </svg>
      )
    },
    {
      id: 2,
      question: 'How fast can I expect results?',
      answer: 'You can expect to receive qualified candidates within 3-5 business days. Our streamlined process and AI-powered matching ensure quick turnaround times without compromising on quality.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 3,
      question: 'Which markets do you currently support?',
      answer: 'We currently support North America, Europe, and Asia-Pacific regions. Our global network of talent allows us to source candidates from diverse locations to meet your specific requirements.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 4,
      question: 'What types of roles can you hire for?',
      answer: 'We specialize in hiring for tech roles including Software Engineers, DevOps, Data Scientists, Product Managers, Designers, and more. We can also support non-technical roles based on your requirements.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 5,
      question: 'How do you ensure candidate quality?',
      answer: 'Every candidate goes through a rigorous multi-stage vetting process including technical assessments, background checks, and behavioral interviews. Our AI pre-screening combined with human evaluation ensures only the best candidates reach you.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div ref={sectionRef} className="w-full bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 
          className={`text-4xl text-center mb-12 text-gray-800 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
        >
          Frequently asked questions
        </h1>

        <div 
          className={`bg-white rounded-3xl shadow-xl p-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border-b border-gray-100 last:border-b-0 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-lg px-4"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`mt-1 transition-colors duration-300 ${
                    openIndex === index ? 'text-indigo-600' : 'text-gray-400'
                  }`}>
                    {faq.icon}
                  </div>
                  <span className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index ? 'text-indigo-600' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`ml-4 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-0' : 'rotate-0'
                }`}>
                  {openIndex === index ? (
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-5 pl-14">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;