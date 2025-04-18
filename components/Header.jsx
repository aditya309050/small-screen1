import React from 'react';

const Header = () => {
  return (
    <div className="bg-white text-black p-4 sm:p-6 shadow-md rounded-full w-full max-w-screen-xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between mt-4 sm:mt-8 border-3 border-gray-100 relative">
      
      {/* Left Menu */}
      <ul className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center gap-4 sm:gap-12 text-black text-lg sm:text-xl md:text-2xl w-full sm:w-auto">
        <div className="text-orange-500">
          <li className="relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Home
          </li>
        </div>
        <li className="relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
          Creator
        </li>
        <li className="relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
          Work
        </li>
        <li className="relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
          About
        </li>
      </ul>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[-1.5rem] sm:top-auto">
        <img 
          src="https://media.licdn.com/dms/image/v2/C560BAQEOqhwqMgsGWQ/company-logo_200_200/company-logo_200_200/0/1635812365073?e=2147483647&v=beta&t=2TQxUoBNyAhPRXrRJvXo22yKRVit2mEwUf3Oft8wdN8"
          alt="Company Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain bg-transparent mix-blend-multiply"
        />
      </div>

      {/* Right Menu */}
      <div className="ml-auto mt-4 sm:mt-0 text-lg sm:text-xl md:text-2xl">
        <li className="list-none relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
          Contact Us
        </li>
      </div>

    </div>
  );
};

export default Header;
