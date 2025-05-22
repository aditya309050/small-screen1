import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow- border border-gray-200 rounded-full  lg:ml-10 lg:mr-10 mx-auto px-4 py-7 sm:px-6 relative z-50 flex items-center justify-between mt-5 ">

      {/* Left side: Hamburger menu on sm/md only */}
      <div className="lg:hidden">
        <button
          className="text-3xl text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Centered Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="https://media.licdn.com/dms/image/v2/C560BAQEOqhwqMgsGWQ/company-logo_200_200/company-logo_200_200/0/1635812365073?e=2147483647&v=beta&t=2TQxUoBNyAhPRXrRJvXo22yKRVit2mEwUf3Oft8wdN8"
          alt="Logo"
          className="w-20 h-60 sm:w-20 sm:h-25 object-contain mix-blend-multiply"
        />
      </div>

      {/* Desktop menu - hidden on sm/md */}
       <ul className="hidden lg:flex items-center text-lg font-medium w-full">
  <li className="cursor-pointer hover:text-orange-500 mr-6">Home</li>
  <li className="cursor-pointer hover:text-orange-500 mr-6">Creator</li>
  <li className="cursor-pointer hover:text-orange-500 mr-6">Work</li>
  <li className="cursor-pointer hover:text-orange-500 mr-6">About</li>
  <li className="cursor-pointer hover:text-orange-500 ml-auto">Contact Us</li>
</ul>

      
       <div className="ml-auto text-lg font-medium cursor-pointer hover:text-orange-500 sm:flex md:flex lg:hidden">
        Contact Us
         </div>

      {/* Contact Us on right side only in sm/md */}
      <div className="hidden sm:flex md:flex lg:hidden ml-auto text-lg font-medium cursor-pointer hover:text-orange-500">
        Contact Us
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white rounded-r-full z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col p-6 text-lg font-medium text-orange-800 gap-4">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>work</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
