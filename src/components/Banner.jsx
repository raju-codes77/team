'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Compass, Activity, Carrot } from 'lucide-react';

export default function Banner() {
  const pantryItems = ['Tomato', 'Egg', 'Basil', 'Garlic'];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf7] via-[#fff5f0] to-[#fffaf7] py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* AI Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#e06126] to-[#f09633] text-white text-xs font-extrabold shadow-sm tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-white fill-white/20" />
              <span>AI-Powered Cooking</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a1210] tracking-tight leading-[1.12]">
              Turn what you have into{' '}
              <span className="text-[#c81e2b]">dinner worth sharing.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-[#6d5e59] text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              Chef&apos;s Kitchen transforms random pantry ingredients into smart recipe ideas, nutrition estimates, substitutions, and community-ready meal inspiration.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button 
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#cc1a26] to-[#b3121f] text-white font-bold text-base shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-white/20 text-white" />
                <span>Generate My First Recipe</span>
              </button>

              <button 
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/90 border border-[#edd7cf] text-[#1a1210] font-bold text-base shadow-xs hover:bg-white hover:border-[#cc1a26] hover:text-[#cc1a26] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#4e423f]" />
                <span>Explore Recipes</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 border-t border-[#f3e3dd]/80 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#1a1210] tracking-tight">28K+</div>
                <div className="text-xs sm:text-sm font-semibold text-[#82736e] mt-0.5">AI recipes cooked</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#1a1210] tracking-tight">94%</div>
                <div className="text-xs sm:text-sm font-semibold text-[#82736e] mt-0.5">avg. taste match</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#1a1210] tracking-tight">6.4K</div>
                <div className="text-xs sm:text-sm font-semibold text-[#82736e] mt-0.5">home cooks</div>
              </div>
            </div>

          </div>

          {/* Right Visual Image & Floating Cards Column */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Outer Container with Main Image */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/food_banner.jpg"
                  alt="Delicious gourmet recipe match"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Subtle dark gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Top Right Card: AI Match */}
            <div className="absolute -top-4 -right-2 sm:-top-5 sm:right-2 md:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-rose-100/70 w-52 sm:w-56 transition-transform hover:scale-105 duration-300 z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 text-[#c81e2b] text-xs font-bold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>AI Match</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-[#1a1210]">94%</span>
                <span className="bg-[#dcfce7] text-[#15803d] font-bold text-xs px-2.5 py-1 rounded-full">
                  Great fit
                </span>
              </div>

              {/* Match Percentage Bar */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2.5">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full w-[94%]" />
              </div>
            </div>

            {/* Floating Bottom Left Card: Tonight's Pantry */}
            <div className="absolute -bottom-6 -left-2 sm:-bottom-6 sm:left-2 md:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-rose-100/70 w-72 sm:w-80 transition-transform hover:scale-105 duration-300 z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e56728] to-[#f29a38] flex items-center justify-center text-white shadow-xs">
                  <Carrot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1a1210] leading-tight">Tonight&apos;s pantry</h4>
                  <p className="text-xs text-[#82736e] font-medium">Matched to a high-protein dinner</p>
                </div>
              </div>

              {/* Ingredient Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {pantryItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-[#fff0ed] text-[#c81e2b] font-bold text-xs border border-[#fadcd5]/60 hover:bg-[#ffe5df] transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
