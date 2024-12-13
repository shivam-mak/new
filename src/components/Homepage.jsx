import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Aos from "aos";
import 'aos/dist/aos.css'

const Homepage = () => {
  useEffect(()=>{
    Aos.init({duration:400})
  },[])
  return (
    <div className="min-h-screen bg-black text-white">
  
      <AnimatePresence>
        <div className="flex items-center justify-between pt-16 px-8">
          <div>
            <motion.h1
              className="text-9xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-500 focus:text-green-300"data-aos="fade-up">Creating</span>
            </motion.h1>
            <p className="mt-4 text-2xl font-medium px-10"data-aos="fade-down">
              Discerning Digital Works and Communication Collaterals
            </p>
          </div>
        </div>
      </AnimatePresence>

      <div className="mt-16 flex items-center px-8">
        <div className="flex-1 text-center">
       <div      className="text-8xl font-bold">
      
            
          
            <span className="text-orange-500"data-aos="fade-up">We are</span></div>
         
          <p className="mt-4 text-3xl font-medium">
            Creative Designers, Insightful Strategists, and Exceptional Engineers
          </p>
          <p className="mt-4 text-sm text-gray-400 max-w-xl mx-auto"data-aos="fade-right">
            The organization is focused on foregrounding expertise in its services, staying updated on global trends, refining domain knowledge, and adapting to evolving content creation arenas to effectively serve client brands.
          </p>
        </div>

        <div className="relative w-64 h-96 ml-10"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img
            src={'/assets/abc.png'}
            alt="Design"
            className="object-cover w-full h-full shadow-lg rounded-md mr-3"
          />
        </div>
      </div>

      
      <div className="mt-16 flex px-10 py-20 items-center gap-6"data-aos="zoom-out-left" data-aos-duration="2000">
        <div className="bg-gray-900 p-10 rounded-md flex flex-col justify-center items-center shadow-md flex-1">
          <p className="text-5xl font-bold">35,000</p>
          <p className="text-lg mt-2 text-gray-300">Websites Already Thriving with Us!</p>
        </div>

        <div className="bg-gray-900 p-10 rounded-md flex flex-col justify-center items-center shadow-md flex-1"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <p className="text-5xl font-bold leading-tight text-center">
            Experience <br />
            <span className="text-green-400">the power of</span> <br />
            <span className="text-green-400">speed</span> <br />
            with our <br />
            <span className="text-purple-400">cutting-edge</span> <br />
            hosting <span className="text-purple-400">infrastructure</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-gray-800 text-white border border-gray-600 rounded-md hover:bg-gray-700"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
