import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20 ">
      {/* Call to Action Section */}
      <div className="max-w-9xl mx-auto text-center">
        <div className="bg-white/20 text-white py-10 px-4 sm:px-4  rounded-2xl max-w-sm sm:max-w-4xl md:max-w-7xl mx-auto justify-center ">
          <h2 className="text-3xl sm:text-4xl font-bold">Want To Know More?</h2>
          <button className="mt-5 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition hover:bg-gray-100">
            Get in touch
          </button>
        </div>
      </div>

      {/* Footer Links and Contact */}
      <div className="max-w-15xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-2xl ">
        {/* Important Links */}
        <div>
          <h3 className="font-semibold text-3xl sm:text-2xl p-7 ">Important Links</h3>
          <ul className="-mt-2 space-y-1 p-7 ">
            <li className="relative group ">
              <a href="#" className=" font-thin relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full ">Home</a>
            </li>
            <li className="relative group">
              <a href="#" className="font-thin relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full">Creators</a>
            </li>
            <li className="relative group">
              <a href="#" className="font-thin relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full">Work</a>
            </li>
            <li className="relative group">
              <a href="#" className="font-thin relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full">About</a>
            </li>
            <li className="relative group">
              <a href="#" className="font-thin relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full">Contact</a>
            </li>
            <li className="relative group">
              <a href="#" className="font-thin relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-2xl sm:text-xl p-7 ">Contact Us</h3>
          <p className="mt-7 font-thin p-5">info@smallscreenmarketing.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-2xl sm:text-xl p-7">Follow Us:</h3>
          <img 
          className='w-30 h-30 p-7 -mt-5'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0m9UBbdRyfmRHam155P00a8HyHBa-JH734g&s"></img>
          <div className="mt-3 flex justify-center md:justify-start">
            <a href="#" className="text-2xl"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
       <div className='px-8 mt-20'>
       <div className="w-full h-px bg-white opacity-40 mb-4  "></div>
       </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-40 opacity-80">
        SmallScreen Marketing © 2024 | Design & Dev: <span className="font-semibold">KURAGE</span>
      </div>
    </footer>
  );
};

export default Footer;
