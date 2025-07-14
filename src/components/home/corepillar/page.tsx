"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    title: "Simplified Sourcing",
    description:
      "Your one-stop solution for reliable food sourcing. We offer an expansive product catalog backed by efficient logistics and transparent processes. From bulk ingredients to finished products, we streamline the journey from supplier to shelf—so you can focus on growth, not coordination.",
    image:
      "https://images.unsplash.com/photo-1628166566841-5abcc2c6b88d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Consistent Quality",
    description:
      "Quality you can taste and trust. Every product undergoes rigorous quality checks at every stage—sourcing, preparation, packaging, and delivery. Whether it’s your first order or your fiftieth, our standards never waver, ensuring restaurant-grade taste every time.",
    image:
      "https://images.unsplash.com/photo-1567613747256-9f97205d23d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Authentic-Made Easy",
    description:
      "Bring traditional Indian and Asian flavors to your kitchen—without the complexity. Our ready-to-use bases, sauces, and blends are chef-crafted and designed for ease of use in high-volume kitchens.",
    image:
      "https://images.unsplash.com/photo-1639667510522-ebbb3fab326e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Time Delivery",
    description:
      "We deliver on time—every time. Our optimized logistics network and real-time tracking ensure your orders arrive exactly when you need them. With minimal delays and transparent ETAs, we help you maintain flow, avoid disruptions, and plan operations with confidence.",
    image:
      "https://images.unsplash.com/photo-1614018453562-77f6180ce036?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
];

const CargoExcellence = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        {/* Left Column */}
        <div>
          <p className="text-xl text-gray-700 leading mb-6 max-w-xl">
            At{" "}
            <span className="font-semibold text-gray-900">
              Gourmet Chefs Global
            </span>
            , we deliver high-quality Indian and Asian foods, ingredients, and
            supplies to retailers, restaurants, and hospitality partners around
            the world. Our goal is to simplify sourcing, reduce operational
            complexity, and ensure consistency—so you can serve authentic
            cuisine without needing specialty chefs.
          </p>

          <div className="relative w-full h-64 p-5 overflow-hidden mb-6 shadow-md">
            <Image
              src={tabs[activeIndex].image}
              alt={tabs[activeIndex].title}
              fill
              className="object-cover "
            />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight relative inline-block">
            <span className="relative z-10">Our Mission</span>
            <span className="absolute -bottom-2 left-0 w-16 h-2 bg-yellow-400 rounded z-0"></span>
          </h2>

          <ul className="space-y-4">
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer border-b py-3 px-2 rounded-md transition-all duration-300 ${
                  activeIndex === index
                    ? "text-[#A65F00] text-xl py-4  font-semibold shadow-sm"
                    : "text-gray-700  text-xl py-5 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tab.title}
              </li>
            ))}
          </ul>
          <div className="mt-10">
              <h4 className="text-xl  font-semibold text-[#1f2640] mb-2">
            {tabs[activeIndex].title}
          </h4>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            {tabs[activeIndex].description}
          </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CargoExcellence;
