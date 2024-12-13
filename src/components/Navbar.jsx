import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 h-16 bg-blend-darken shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg ">
      <div className=" w-20 h-20 mt-10 transition-transform transform hover:scale-105">
      <img src="https://www.kalolwala.com/wp-content/themes/kalolwala/main/img/logo.png" data-src="https://www.kalolwala.com/wp-content/themes/kalolwala/main/img/logo.png" class="main-logo ls-is-cached lazyloaded" alt="Kalolwala &amp; Associates"/>
      </div>
      <ul className="flex space-x-6">
        <li className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300">Work</li>
        <li className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300">Expertise</li>
        <li className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300">About</li>
        <li className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300">Insight</li>
      </ul>
      <button className="px-10 py-2 text-white bg bg-yellow-300 hover:bg-yellow-600 rounded transition-transform transform hover:scale-105">Start a Project</button>
    </nav>
  );
};

export default Navbar;
