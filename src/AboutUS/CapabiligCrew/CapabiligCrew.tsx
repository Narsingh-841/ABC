

import CAPcrew from '../../assets/CAPTeam.jpeg';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

export default function CapabiliqCrew() {


  const teamMembers: TeamMember[] = [
    { id: 1, name: 'Capabiliq Team', title: '', image: CAPcrew },
 
  ];
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
          {teamMembers.map((member,) => (
            <div
              key={member.id}
              className=" absolute inset-0 transition-opacity duration-1000 ease-in-out "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />

            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}