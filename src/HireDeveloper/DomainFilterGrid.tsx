import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DomainFilterGrid: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const allDomains = [
    'React js', 'Flutter', 'Ionic', 'React Native', 'MERN', 'XAMPP', 'Angular',
    'Vue.js', 'Node.js', 'Django', 'Laravel', 'Spring Boot', 'Express.js', 'Next.js',
    'Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C#', 'Ruby',
    'PHP', 'Swift', 'Kotlin', 'Go', 'Rust', 'Scala', 'Dart',
    'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase', 'AWS', 'Azure',
    'Docker', 'Kubernetes', 'Jenkins', 'Git', 'GraphQL', 'REST API', 'Microservices',
    'TensorFlow', 'PyTorch', 'Machine Learning', 'AI', 'Deep Learning', 'NLP', 'Computer Vision',
    'Blockchain', 'Web3', 'Ethereum', 'Solidity', 'React Native', 'Xamarin', 'Ionic',
    'Bootstrap', 'Tailwind CSS', 'Material UI', 'Sass', 'Redux', 'MobX', 'Zustand',
    'Jest', 'Cypress', 'Selenium', 'JUnit', 'Mocha', 'Chai', 'Testing Library',
    'Figma', 'Adobe XD', 'Sketch', 'UI/UX', 'Design Systems', 'Prototyping', 'Wireframing',
    'HTML', 'CSS', 'SQL', 'NoSQL', 'API Development', 'Microservices', 'DevOps',
    'Linux', 'Ubuntu', 'Windows', 'macOS', 'Android', 'iOS', 'Cross-platform',
    'Agile', 'Scrum', 'Kanban', 'Jira', 'Confluence', 'Trello', 'Asana'
  ];

  const filteredDomains = searchQuery.trim() === '' 
    ? allDomains 
    : allDomains.filter(domain => 
        domain.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleDomainClick = (domain: string) => {
    setSelectedDomain(domain);
    // Navigate to hire developer form with the selected domain as a parameter
    navigate('/hire-developer-form', { 
      state: { selectedDomain: domain } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-0">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search the Domain Example: React, Node etc.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Grid of Domain Buttons */}
      <div className="flex flex-wrap gap-4">
        {filteredDomains.length > 0 ? (
          filteredDomains.map((domain, index) => {
            const isSelected = domain === selectedDomain;
            return (
              <button
                key={index}
                onClick={() => handleDomainClick(domain)}
                className={`
                  px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200
                  ${
                    isSelected
                      ? 'text-white shadow-lg'
                      : 'bg-white text-gray-700 shadow-sm hover:shadow-md hover:text-white border border-gray-200'
                  }
                `}
                style={
                  isSelected
                    ? { backgroundColor: '#760060' }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#760060';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                  }
                }}
              >
                {domain}
              </button>
            );
          })
        ) : (
          <div className="w-full text-center py-12">
            <p className="text-gray-500 text-lg">No domains found matching "{searchQuery}"</p>
            <p className="text-gray-400 text-sm mt-2">Try searching for React, Node, Python, etc.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainFilterGrid;