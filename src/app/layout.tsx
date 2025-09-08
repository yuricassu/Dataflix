'use client';

import type { ReactNode } from "react";
import Menu from "./Menu"; // menu importado
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <header className="bg-black shadow-sm border-b border-gray-700">
          <div className="container mx-left flex justify-between items-center px-4 py-4">
            {/* Menu */}
            <Menu />
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
