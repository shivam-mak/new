import React, { useEffect, useRef } from 'react';

function Logo() {
  const logos = [
    { name: '', src: '/assets/1.png' },
    { name: '', src: '/assets/2.png' },
    { name: '', src: '/assets/3.png' },
    { name: '', src: '/assets/4.png' },
    { name: '', src: '/assets/5.png' },
    { name: '', src: '/assets/6.png' },
    { name: '', src: '/assets/7.png' },
    { name: '', src: '/assets/8.png' },
    { name: '', src: '/assets/9.png' },
    { name: '', src: '/assets/10.png' },
    { name: '', src: '/assets/11.png' },
    { name: '', src: '/assets/12.png' },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const duplicateLogos = () => {
      const firstChild = container.firstElementChild;
      if (firstChild) {
        container.appendChild(firstChild.cloneNode(true));
      }
    };

    // Duplicate logos to create seamless scrolling
    [...logos].forEach(() => duplicateLogos());

    const scrollLogos = () => {
      if (container) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0; // Reset to create infinite scroll
        }
        container.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollLogos, 10);
    return () => clearInterval(interval);
  }, [logos]);

  return (
    <div className="bg bg-gradient-to-r from-black to-gray-800 text-white py-10">
      <div
        ref={scrollContainerRef}
        className="overflow-x-hidden whitespace-nowrap flex items-center gap-8"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center items-center h-20 w-20 opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={logo.src} alt={logo.name} className="max-h-full max-w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logo;
