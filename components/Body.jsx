import React from 'react';

const Body = () => {
  return (
    <div className="flex flex-col items-center text-gray-800 mt-14 py-8 px-6 sm:px-8 md:px-12">
      
      {/* Main Heading */}
      <p className="text-center text-4xl sm:text-5xl md:text-7xl font-bold leading-snug">
        World Class Representation <br />
        For The <span className="text-orange-500">Creators</span> Of The <br />
        <span className="text-orange-500">Future</span>
      </p>

      <div className="-mt-3 max-w-6xl text-center text-lg leading-relaxed">
        <p className="italic text-xl sm:text-2xl md:text-2xl">
          SmallScreen represents the best and brightest across all niches of creators online, providing <br/>
          best-in-class management services to help you maximize your online presence for your goals.
        </p>
      </div>

    </div>
  );
};

export default Body;
