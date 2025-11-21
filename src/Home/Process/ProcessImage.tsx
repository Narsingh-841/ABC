import React from 'react';
import processImage from '../../assets/process-image.jpg'; // Your process image

const ProcessImage: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-6 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Single Process Image - Full Width */}
        <div className="w-full">
          <img 
            src={processImage} 
            alt="Our hiring process workflow"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessImage;