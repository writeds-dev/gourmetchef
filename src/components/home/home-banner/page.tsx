"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const backgrounds = [
  {
    image: "/About/2.jpg",
    text: "Authentic Indian & Asian Taste for Your Business",
  },
];

export default function HeroBanner() {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/Categories");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background images with smooth sliding effect */}
      {backgrounds.map(({ image }, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 -z-10"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-20" />

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center justify-center px-6 text-center mt-5 md:mt-10 lg:mt-20 text-white space-y-8">
  <h1 className="text-4xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl mt-10 lg:mt-20 font-extrabold leading-tight max-w-3xl mx-auto tracking-tight">
    Authentic Indian & Asian Taste for Your Business
  </h1>

  <p className="text-lg sm:text-xl md:text-lg lg:text-2xl xl:text-3xl bg-white text-black p-5 font-bold max-w-3xl opacity-80 mx-auto">
    Gravy to snacks, sweets to spices—Gourmet Chefs Global is your B2B sourcing choice.
  </p>

  <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center">
    <button onClick={handleSubmit} className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg sm:text-xl font-semibold bg-custom-primary text-white rounded-full hover:bg-custom-secondary transition duration-300 ease-in-out">
      Explore All Categories
      <span className="bg-black rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </button>
  </div>
</div>

    </section>
  );
}
