import { ArrowRight, X, Check } from 'lucide-react';
import { useRef, useState } from 'react';
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
  const [hoveredStory, setHoveredStory] = useState<Story | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnterCard = (story: Story) => {
    clearTimeoutRef();
    setHoveredStory(story);
  };

  const handleMouseLeaveCard = () => {
    timeoutRef.current = setTimeout(() => setHoveredStory(null), 200);
  };

  const handleMouseEnterExpanded = () => clearTimeoutRef();
  const handleMouseLeaveExpanded = () => {
    timeoutRef.current = setTimeout(() => setHoveredStory(null), 200);
  };

  const closeModal = () => {
    setHoveredStory(null);
    clearTimeoutRef();
  };

  const stories: Story[] = [
    // your 3 stories — unchanged
    { id: 1, logo: refglogo, title: "Case Study 1: RFgen", subtitle: "Building from Ground Zero", bgColor: "bg-white",
      challenge: "A U.S.-based enterprise software company needed to establish an India GCC but lacked market insights, local presence, and talent strategy.",
      approach: ["Conducted end-to-end market research and feasibility study.", "Designed organizational structure and hiring roadmap.", "Executed rapid hiring sprint to fill critical engineering roles."],
      outcome: ["Closed 50+ niche technical positions in 3 weeks.", "Set up a fully functional GCC with workspace and leadership.", "Achieved 40% cost efficiency compared to traditional outsourcing."],
      result: "From zero presence to a high performing GCC — built and scaled in record time." },
    { id: 2, logo: datanitivlogo, title: "Case Study 2: DataNitiv & Brightcone.AI", subtitle: "Establishing GCCs", bgColor: "bg-white",
      challenge: "AI-driven startups with no India footprint required a scalable foundation to build specialized AI and data science teams.",
      approach: ["Provided end-to-end India setup advisory — from entity formation to workspace readiness.", "Built core AI and data science teams aligned with product development needs.", "Established local compliance, HR, and operational frameworks."],
      outcome: ["50–200+ hires across AI/ML and engineering roles.", "Seamless operational launch within 45 days.", "Achieved 50% reduction in overall setup and talent acquisition cost."],
      result: "India became their global innovation hub — powered by Capabiliq's execution network." },
    { id: 3, logo: pwclogo, title: "Case Study 3: PwC", subtitle: "Scaling Critical Technology Capabilities", bgColor: "bg-white",
      challenge: "PwC needed to scale rapidly during a key digital transformation phase, focusing on cybersecurity and AI talent.",
      approach: ["Acted as PwC's extended sourcing partner for its India GCC.", "Mapped and closed niche cybersecurity and AI roles under tight deadlines.", "Delivered a pipeline of leadership-ready talent."],
      outcome: ["15+ specialized roles closed within project-critical timelines.", "Strengthened delivery capabilities across AI and cybersecurity domains.", "Enhanced GCC maturity through agile hiring execution."],
      result: "A resilient and future-ready GCC team, enabling faster enterprise transformation." }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black text-center mb-16">
          Stories That Speak Results
        </h1>

        <div className="max-w-7xl mx-auto">
          {hoveredStory ? (
            // EXPANDED VIEW — unchanged
            <div className="bg-white p-8 md:p-10 shadow-2xl rounded-3xl mx-auto max-w-5xl relative"
              onMouseEnter={handleMouseEnterExpanded}
              onMouseLeave={handleMouseLeaveExpanded}>
              <button onClick={closeModal} className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100">
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-8 border-gray-50 shadow-lg bg-white">
                    <img src={hoveredStory.logo} alt={hoveredStory.title} className="w-full h-full object-contain p-4" />
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <h2 className="text-2xl font-bold text-black mb-1">{hoveredStory.title}</h2>
                  <h3 className="text-lg font-bold text-gray-800 mb-5">{hoveredStory.subtitle}</h3>

                  <div className="space-y-6 text-gray-700 text-sm leading-snug">
                    <div>
                      <h4 className="text-base font-bold text-black mb-2">Challenge:</h4>
                      <p className="leading-tight">{hoveredStory.challenge}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-base font-bold text-black mb-3">Our Approach:</h4>
                      <ul className="space-y-2">
                        {hoveredStory.approach.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#BEA2FB] mt-0.5">•</span>
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-black mb-3">Outcome:</h4>
                      <ul className="space-y-2">
                        {hoveredStory.outcome.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-base font-bold text-black mb-2">Result:</h4>
                      <p className="text-gray-800 font-medium leading-tight">{hoveredStory.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // GRID CARDS — Only changed the grid container for centering on mobile
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-6xl mx-auto">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center cursor-pointer group relative overflow-hidden"
                  style={{
                    borderRadius: '140px 140px 0 0',   // Only top corners rounded
                    maxWidth: '300px',
                    width: '100%',
                    minHeight: '360px',
                  }}
                  onMouseEnter={() => handleMouseEnterCard(story)}
                  onMouseLeave={handleMouseLeaveCard}
                >
                  {/* Gradient overlay matches new radius */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#BEA2FB]/90 to-[#760060]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[140px]" />

                  {/* Logo */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 z-10 border-4 border-white shadow-md bg-white">
                    <img src={story.logo} alt={story.title} className="w-full h-full object-contain p-3" />
                  </div>

                  <h3 className="text-lg font-bold text-black text-center mb-2 group-hover:text-white transition-colors z-10 px-4">
                    {story.title}
                  </h3>
                  <p className="text-base font-medium text-gray-700 text-center mb-8 group-hover:text-white transition-colors z-10 px-6">
                    {story.subtitle}
                  </p>

                  <button className="mt-auto flex items-center gap-2 font-bold text-sm z-10 mb-6">
                    <span className="text-[#760060] group-hover:text-white">Know More</span>
                    <ArrowRight className="w-5 h-5 text-[#760060] group-hover:text-white group-hover:translate-x-2 transition-all" />
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