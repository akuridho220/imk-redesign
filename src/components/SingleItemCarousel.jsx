import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function SingleItemCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  onClick
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  const handleSlideClick = (path) => {
    if (onClick) onClick(path);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full" onClick={() => handleSlideClick(slide.props.path)}>
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-20 flex items-center justify-between p-2">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="absolute left-0 right-0 bottom-4 flex items-center justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${index === curr ? 'bg-white' : 'bg-gray-300'} hover:bg-white focus:outline-none transition-all duration-300`}
              onClick={() => setCurr(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
