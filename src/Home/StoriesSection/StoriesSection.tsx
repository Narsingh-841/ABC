import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import refglogo from '../../assets/refgenlogo.png';
import pwclogo from '../../assets/pwclogo.jpeg';
import datanitivlogo from '../../assets/datanitvilogo.jpeg';

interface Story {
  id: number;
  logo: string;
  title: string;
  subtitle: string;
  bgColor: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  result: string;

}

const StoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const stories: Story[] = [
    {
      id: 1,
      logo: refglogo,
      title: "Case Study 1: RFgen",
      subtitle: "Building from Ground Zero",
      bgColor: "bg-white",
      challenge: "A U.S.-based enterprise software company needed to establish an India GCC but lacked market insights, local presence, and talent strategy.",
      approach: [
        "Conducted end-to-end market research and feasibility study.",
        "Designed organizational structure and hiring roadmap.",
        "Executed rapid hiring sprint to fill critical engineering roles."
      ],
      outcome: [
        "Closed 50+ niche technical positions in 3 weeks.",
        "Set up a fully functional GCC with workspace and leadership.",
        "Achieved 40% cost efficiency compared to traditional outsourcing."
      ],
      result: "From zero presence to a high performing GCC — built and scaled in record time.",
      
    },
    {
      id: 2,
      logo: datanitivlogo,
      title: "Case Study 2: DataNitiv & Brightcone.AI",
      subtitle: "Establishing GCCs",
      bgColor: "bg-white",
      challenge: "AI-driven startups with no India footprint required a scalable foundation to build specialized AI and data science teams.",
      approach: [
        "Provided end-to-end India setup advisory — from entity formation to workspace readiness.",
        "Built core AI and data science teams aligned with product development needs.",
        "Established local compliance, HR, and operational frameworks."
      ],
      outcome: [
        "50–200+ hires across AI/ML and engineering roles.",
        "Seamless operational launch within 45 days.",
        "Achieved 50% reduction in overall setup and talent acquisition cost."
      ],
      result: "India became their global innovation hub — powered by Capabiliq's execution network.",
     
    },
    {
      id: 3,
      logo: pwclogo,
      title: "Case Study 3: PwC",
      subtitle: "Scaling Critical Technology Capabilities",
      bgColor: "bg-white",
      challenge: "PwC needed to scale rapidly during a key digital transformation phase, focusing on cybersecurity and AI talent.",
      approach: [
        "Acted as PwC's extended sourcing partner for its India GCC.",
        "Mapped and closed niche cybersecurity and AI roles under tight deadlines.",
        "Delivered a pipeline of leadership-ready talent."
      ],
      outcome: [
        "15+ specialized roles closed within project-critical timelines.",
        "Strengthened delivery capabilities across AI and cybersecurity domains.",
        "Enhanced GCC maturity through agile hiring execution."
      ],
      result: "A resilient and future-ready GCC team, enabling faster enterprise transformation.",
     
    }
  ];

  return (
    <section className="bg-gray-50 py-6 px-4 sm:px-4 lg:px-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black text-center mb-12">
          Stories That Speak Results
        </h1>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto ">
          {selectedStory ? (
            // Expanded View - Full Width
            <div className="bg-white p-8 shadow-xl rounded-4xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Side - Logo and Author */}
                <div className="lg:w-1/3 flex flex-col items-center">
                  {/* Logo - No border */}
                  <div className="rounded-full flex items-center justify-center mb-6 overflow-hidden">
                    <img 
                      src={selectedStory.logo} 
                      alt={`${selectedStory.title} logo`}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>

                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedStory(null)}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-6"
                  >
                    <X className="w-5 h-5" />
                    <span className="text-sm font-semibold">Close</span>
                  </button>

                
                </div>

                {/* Right Side - Content */}
                <div className="lg:w-2/3">
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-black mb-2">
                    {selectedStory.title}
                  </h2>
                  <h3 className="text-xl font-bold text-black mb-6">
                    {selectedStory.subtitle}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-black mb-3">Challenge:</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {selectedStory.challenge}
                    </p>
                  </div>

                  <div className="border-t border-gray-300 my-6"></div>

                  {/* Approach */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-black mb-3">Built Approach:</h4>
                    <ul className="space-y-2">
                      {selectedStory.approach.map((item, index) => (
                        <li key={index} className="text-gray-700 text-base leading-relaxed flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-black mb-3">Outcome:</h4>
                    <ul className="space-y-2">
                      {selectedStory.outcome.map((item, index) => (
                        <li key={index} className="text-gray-700 text-base leading-relaxed flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3">Result:</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {selectedStory.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Collapsed View - Grid Layout with reduced card width and hover effect
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center cursor-pointer hover:bg-[#BEA2FB] group"
                  style={{
                    borderRadius: '120px 120px 24px 24px',
                    maxWidth: '280px',
                    margin: '0 auto',
                    width: '100%',
                    minHeight: '300px'
                  }}
                  onClick={() => setSelectedStory(story)}
                >
                  {/* Logo Circle - No hover effect */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                    <img 
                      src={story.logo} 
                      alt={`${story.title} logo`}
                      className="w-14 h-14 object-cover rounded-full"
                    />
                  </div>

                  {/* Title - No hover effect */}
                  <h3 className="text-base font-semibold text-black text-center mb-1 group-hover:text-white transition-colors duration-300">
                    {story.title}
                  </h3>
                  
                  {/* Subtitle - No hover effect */}
                  <p className="text-base font-semibold text-black text-center mb-4 group-hover:text-white transition-colors duration-300">
                    {story.subtitle}
                  </p>

                  {/* Know More Link */}
                  <button className="flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all duration-300 group mt-auto group-hover:text-white" style={{ color: '#BEA2FB' }}>
                 <span className=''style={{ color: '#760060' }}> Know More</span>  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;