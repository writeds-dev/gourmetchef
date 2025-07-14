"use client";

import React from "react";
import Image from "next/image";
import {
  Workflow,
  PackageOpen,
  CheckCircle,
  TrendingUp,
} from "lucide-react"; // Updated icons

const features = [
  {
    icon: <Workflow className="w-6 h-6 text-white" />,
    title: "Streamlined",
    description:
      "A fully integrated supply chain under one roof — sourcing, production, packaging, and delivery. One point of contact for faster, smoother operations.",
  },
  {
    icon: <PackageOpen className="w-6 h-6 text-white" />,
    title: "Tailored",
    description:
      "Custom solutions for your brand — including private labeling, specialty packaging, and custom product formulations to suit your needs.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Reliable",
    description:
      "Built-in quality assurance, certified safety standards, and consistent batch results you can rely on every time.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Grow with us",
    description:
      "We scale with your brand — whether you're expanding regionally or globally. Flexible logistics and supply chain capacity included.",
  },
];

const CoreFeatures = () => {
  return (
    <section className="bg-[#fffefc] py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1f2640] leading-snug mb-6">
  <span className="block text-orange-500">
    Ready to take the Asian star
  </span>
  <span className="block">to your menu or store?</span>
</h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          When you work with Gourmet Chefs Global, you&apos;re not just working with a supplier — you&apos;re gaining a partner built to help you succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Features */}
        <div className="space-y-8">
          {features.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="bg-[#1f2640] p-3 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1f2640] mb-1">
                  {item.title}
                </h4>
               <p className="text-gray-600 text-base leading-relaxed tracking-wide">
  {item.description}
</p>

              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative w-full h-[420px]  overflow-hidden">
          <Image
            src="/About/port.png"
            alt="Feature Illustration"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-8">
          {features.slice(2, 4).map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="bg-[#1f2640] p-3 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1f2640] mb-1">
                  {item.title}
                </h4>
               <p className="text-gray-600 text-base leading-relaxed tracking-wide">
  {item.description}
</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
