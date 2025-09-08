'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { certificação } from '../../app-data.js';

interface Certificate {
  id: number;
  title: string;
  image: string;
  link: string;
}

// Todos os certificados
const certificates: Certificate[] = certificação.map((c, index) => ({
  id: index + 1,
  title: c.nome_do_curso,
  image: c.imagem,
  link: c.link,
}));

export default function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoScroll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      container.scrollTo({
        left: currentIndex * (cardWidth + 16), // gap-4 = 16px
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
    startAutoScroll();
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
    startAutoScroll();
  };

  return (
    <section className="py-12 w-full bg-[#141414] relative">
      {/* Section Header */}
      <div className="flex items-center justify-between px-4 mb-6">
        <h2 className="text-xl font-bold text-white">Certificações</h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 scroll-smooth"
        >
          {certificates.map((certificate) => (
            <Link
              key={certificate.id}
              href={`/certificates/${certificate.id}`}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-gray-200">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 truncate text-sm font-medium text-white">
                {certificate.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#141414]/70 hover:bg-[#141414]/90 text-white p-2 sm:p-3 rounded-full transition-colors z-30 shadow-lg"
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
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#141414]/70 hover:bg-[#141414]/90 text-white p-2 sm:p-3 rounded-full transition-colors z-30 shadow-lg"
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
      </div>
    </section>
  );
}

