import React from "react";
import { Card } from "@heroui/react";
import { Refrigerator, Sparkles, SlidersHorizontal, ChefHat } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add what you have",
      description: "List the ingredients currently sitting in your pantry or fridge.",
      icon: <Refrigerator className="w-6 h-6 text-red-500" />,
    },
    {
      number: "02",
      title: "Generate recipes",
      description: "Let AI match and create delicious recipes tailored to your items.",
      icon: <Sparkles className="w-6 h-6 text-red-500" />,
    },
    {
      number: "03",
      title: "Tune macros",
      description: "Adjust calories, proteins, and carbs to fit your exact health goals.",
      icon: <SlidersHorizontal className="w-6 h-6 text-red-500" />,
    },
    {
      number: "04",
      title: "Follow the steps",
      description: "Cook with ease using clear, step-by-step interactive instructions.",
      icon: <ChefHat className="w-6 h-6 text-red-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-red-600 font-semibold text-xs tracking-widest uppercase bg-red-50 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2322] mt-3 tracking-tight">
            Pantry to plate in four simple steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-red-100/80 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-red-50 rounded-xl">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black text-red-200">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#2D2322] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}