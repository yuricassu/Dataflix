'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full relative">
      {/* Logo + Desktop Menu */}
      <div className="flex items-center space-x-8">
        <Link
          href="/"
          className="text-3xl font-bold text-red-600 hover:text-gray-200 transition-colors duration-200"
        >
          DATAFLIX
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/courses" className="text-white hover:text-red-600 font-medium">
            Cursos
          </Link>
          <Link href="/tools" className="text-white hover:text-red-600 font-medium">
            Ferramentas
          </Link>
          <Link href="/books" className="text-white hover:text-red-600 font-medium">
            Livros
          </Link>
        </div>
      </div>

      {/* Hamburger Mobile */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-black flex flex-col space-y-2 px-4 py-4 md:hidden shadow-lg z-50">
          <Link href="/courses" className="text-white hover:text-red-600" onClick={() => setIsOpen(false)}>
            Cursos
          </Link>
          <Link href="/tools" className="text-white hover:text-red-600" onClick={() => setIsOpen(false)}>
            Ferramentas
          </Link>
          <Link href="/books" className="text-white hover:text-red-600" onClick={() => setIsOpen(false)}>
            Livros
          </Link>
        </div>
      )}
    </div>
  );
}
