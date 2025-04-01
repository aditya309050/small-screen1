import React from 'react';


const Header = () => {
  return (
    <div className="bg-white text-black p-6 shadow-md rounded-full w-450 h-18 flex mx-8  mt-8 border-3 border-gray-100  ">      
      <ul className="flex justify space-x-12   text-black  text-2xl">
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
            
            <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2  ">
        <img 
          src="https://media.licdn.com/dms/image/v2/C560BAQEOqhwqMgsGWQ/company-logo_200_200/company-logo_200_200/0/1635812365073?e=2147483647&v=beta&t=2TQxUoBNyAhPRXrRJvXo22yKRVit2mEwUf3Oft8wdN8"
          alt="Company Logo"
          className="  w-45 h-45  -mt-16  bg-transparent mix-blend-multiply "
        />
      </div>
        </ul>
        <div className="ml-auto  text-2xl">
        <li className=" list-none relative cursor-pointer hover:text-orange-500 after:block after:w-0 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            Contact Us</li>
            
        </div>   
    </div>
    
  );
};

export default Header;
