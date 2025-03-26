import React from 'react';

const Header = () => {
  return (
    <div className="bg-white text-black p-6 shadow-md rounded-full w-450 h-18 flex mt-12 ">
      <ul className="flex justify space-x-12   text-black ">
        <div className="text-orange-500">
        <li className="relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Home</li>
        </div>
        <li className="relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Creator</li>
            <li className="relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
             Work</li>
             <li className="relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            About</li>
        </ul>
        <div className="ml-auto ">
        <li className=" list-none relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Contact Us</li>
        </div>   
    </div>
  );
};

export default Header;