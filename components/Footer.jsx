import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20">
      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-white/20 text-white py-10 px-6 rounded-2xl mx-6 sm:mx-0">
          <h2 className="text-3xl sm:text-4xl font-bold">Want To Know More?</h2>
          <button className="mt-5 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition hover:bg-gray-100">
            Get in touch
          </button>
        </div>
      </div>

      {/* Footer Links and Contact */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Important Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-3xl mb-4">Important Links</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="#" className="hover:text-orange-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-300 transition">Creators</a></li>
            <li><a href="#" className="hover:text-orange-300 transition">Work</a></li>
            <li><a href="#" className="hover:text-orange-300 transition">About</a></li>
            <li><a href="#" className="hover:text-orange-300 transition">Contact</a></li>
            <li><a href="#" className="hover:text-orange-300 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-3xl mb-4">Contact Us</h3>
          <p className="font-thin">info@smallscreenmarketing.com</p>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-3xl mb-4">Follow Us:</h3>
          <div className="flex justify-center sm:justify-start space-x-6">
            <a href="#" className="text-3xl hover:text-orange-300 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-3xl hover:text-orange-300 transition"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-3xl hover:text-orange-300 transition"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-10 opacity-80">
        SmallScreen Marketing © 2024 | Design & Dev: <span className="font-semibold">KURAGE</span>
      </div>
    </footer>
  );
};

export default Footer;
