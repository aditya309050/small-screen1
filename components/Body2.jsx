import React from "react";

const Body2 = () => {
  return (
    <div className="my-1">
      <div
        className="w-full h-130 rounded-lg shadow-lg flex flex-col items-center p-10"
        style={{ backgroundColor: "#E8E5E2" }}
      >
        <p className="font-semibold flex flex-col items-center text-center mt-10 w-full">
          <span className="text-orange-600 text-4xl font-thin">SmallScreen Services</span>
          <span className="text-5xl font-medium mt-15 text-gray-700">
            Be <span className="text-orange-600">Creative</span>, We'll Handle the Rest
          </span>
          <span className="text-2xl font-thin mt-4">
            SmallScreen offers world-class management services for world-class creators. We help elevate all <br />
            brand partnerships, and everything in between to ensure that you reach the peak of your success.
          </span>
        </p>

       
        <div className="w-full flex justify-start mt-18 relative -right-200">
          <button className="px-8 py-2 bg-orange-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-700 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body2;
