import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-herbal-900 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/ditsmq3r6/video/upload/v1764416479/Black_Gray_Simple_Vlogger_YouTube_Banner_20251129_170927_0000_rsoal1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;