"use client";

import { ChefHat } from "lucide-react";

/**
 * PresentationStarterBanner
 * Static promotional banner — matches provided mockup.
 * Requires Tailwind CSS to be configured in the Next.js project.
 * Requires `lucide-react` for the chef-hat icon (npm i lucide-react),
 * or swap it for your own icon/SVG.
 */
export default function PresentationStarterBanner() {
  return (
    <div
      className="
        relative w-full max-w-7xl mx-auto my-8
        rounded-2xl px-8 py-10 sm:px-12 sm:py-10
        flex flex-col sm:flex-row items-center
        justify-between gap-8
        shadow-lg shadow-orange-900/10
      "
      style={{
        background: "linear-gradient(115deg, #B3211E 0%, #E85D2A 55%, #F5A93B 100%)",
      }}
    >
      {/* Left: text content */}
      <div className="max-w-2xl">
        <span className="block text-xs sm:text-sm font-bold tracking-[0.15em] text-white/90 uppercase mb-3">
          Ready to practice
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
          Use this landing page as your presentation starter.
        </h2>

        <p className="text-sm sm:text-base text-white/85 leading-relaxed">
          Static only, no working functionality, built to match the mockup&apos;s
          visual language.
        </p>
      </div>

      {/* Right: pill badge */}
      <div className="shrink-0 self-center">
        <div
          className="
            flex items-center gap-2
            bg-white rounded-full
            px-5 py-2.5
            shadow-sm
          "
        >
          <ChefHat className="w-4 h-4 text-red-700" strokeWidth={2.2} />
          <span className="text-sm font-semibold text-red-800">
            Chef & aposs Kitchen
          </span>
        </div>
      </div>
    </div>
  );
}