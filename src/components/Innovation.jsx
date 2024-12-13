import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Innovation = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <section className="bg-black text-white py-12 px-6 flex flex-col items-center text-center">
      <div className="relative">
     
        <div className="flex justify-center items-center space-x-6 mb-12" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
          <img
            src={'/assets/abc2.png'}
            alt="Mockup 1"
            className="w-100 h-auto"
          />

        </div>
      </div>

      
      <h1 className="text-5xl font-bold mb-4"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Let's unite for innovation</h1>
      <p className="text-xl font-medium">
        <span className="text-orange-500 text-4xl font-bold">Join 400+</span> companies
        already growing
      </p>
    </section>
  );
};

export default Innovation;
