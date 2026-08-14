'use client';

import React, { useState } from 'react';
import { Sparkles, Menu, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Recipes', href: '#recipes' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fff9f6]/95 backdrop-blur-md border-b border-[#f3e3dd] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f38138] via-[#e56024] to-[#d84b16] flex items-center justify-center shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform duration-200">
              {/* Custom SVG Chef Hat to match the exact design icon */}
              <svg 
                className="w-6 h-6 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
                <line x1="6" y1="17" x2="18" y2="17" />
              </svg>
            </div>
            <span className="text-xl font-extrabold text-[#1a1210] tracking-tight group-hover:text-[#d84b16] transition-colors">
              Chef&apos;s Kitchen
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-[#4e423f] hover:text-[#c9182b] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <button 
              type="button"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#cc1a26] to-[#b3121f] text-white font-bold text-sm tracking-wide shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white/20 text-white stroke-[2.5]" />
              <span>Start Cooking</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#4e423f] hover:bg-[#f5e6e1] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fff9f6] border-b border-[#f3e3dd] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#4e423f] hover:text-[#c9182b] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button 
              type="button"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#cc1a26] to-[#b3121f] text-white font-bold text-sm shadow-md shadow-red-600/30 active:scale-98 transition-all"
            >
              <Sparkles className="w-4 h-4 fill-white/20 text-white" />
              <span>Start Cooking</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
