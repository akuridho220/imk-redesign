import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
    const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full">
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
}