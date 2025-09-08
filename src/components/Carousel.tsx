'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { featured } from '../../app-data.js';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const carouselItems: CarouselItem[] = featured.map((item, index) => ({
  id: index + 1,
  title: item.nome_do_curso,
  description: item.descrição,
  image: item.imagem,
  link: item.link,
}));

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startTimer();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
    startTimer();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    startTimer();
  };

  return (
    <div className="w-full relative overflow-hidden bg-black max-h-[500px]">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="w-full flex-shrink-0 relative bg-black aspect-[16/9] sm:aspect-[4/3] max-h-[500px] flex items-center justify-center"
          >
            {/* Gradiente sobre a imagem */}
            <div className="absolute inset-0 bg-transparent z-10"></div>

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />

            {/* Conteúdo sobre a imagem (oculto no mobile) */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="hidden sm:block ml-4 sm:ml-8 mr-4 sm:mr-8 text-white max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-md md:text-lg mb-4 sm:mb-6 text-gray-200">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <Link
                    href={item.link}
                    className="inline-block bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#141414]/50 hover:bg-[#141414]/70 text-white p-2 sm:p-3 rounded-full transition-colors z-30 shadow-lg border border-white/20"
      >
        <svg
          className="w-4 sm:w-6 h-4 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#141414]/50 hover:bg-[#141414]/70 text-white p-2 sm:p-3 rounded-full transition-colors z-30 shadow-lg border border-white/20"
      >
        <svg
          className="w-4 sm:w-6 h-4 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
