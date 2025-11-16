

export default function WhyBuildGCC() {
  const reasons = [
    {
      title: 'Specialized Expertise',
      description: 'Our domain experts and industry leaders deliver tailored GCC strategies, helping organizations overcome early-stage challenges and scale sustainably.'
    },
    {
      title: 'Scalability',
      description: 'Our GCC model adapts to your needs - whether you\'re building a small innovation hub or a large-scale capability center - ensuring flexibility and agility.'
    },
    {
      title: 'High Quality & Innovation',
      description: 'We maintain world-class GCC standards, leveraging NextGen technologies, AI-driven recruitment, and diverse global talent pools.'
    }
  ];

  return (
    <section className="bg-gray-50 py-6 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
            Why Build Your GCC with CapabiliQ
          </h2>
        </div>

        {/* Reasons Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className={`p-6 md:p-8 flex flex-col items-center text-center ${
                  idx < reasons.length - 1 ? 'md:border-r border-gray-300' : ''
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#760060' }}>
                  {idx === 0 && (
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10c1.657 0 3-1.343 3-3S8.657 4 7 4 4 5.343 4 7s1.343 3 3 3zm0-5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0 7c-2.209 0-4 1.791-4 4v3h8v-3c0-2.209-1.791-4-4-4zm0-1c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm12-6h-5v2h3.586l-3.293 3.293 1.414 1.414L15.586 9H13V7h6V5z"/>
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}