"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Olivia Wattson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    message:
      "On point has revolutionized the way I manage my finances. Their commitment to user satisfaction is crystal clear in every interaction. The platform’s ease of use and 24/7 support make financial management a breeze",
  },
  {
    name: "Michael Harris",
    image:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    rating: 4,
    message:
      "This tool is an absolute game changer for our budgeting and planning. Support has been outstanding and the interface is smooth. Highly recommend!",
  },
  {
    name: "Sarah Thompson",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    message:
      "I’ve tried a dozen tools before, but none made me feel in control like this one. It’s modern, reliable and backed by a helpful team.",
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const paginate = (direction: number) => {
    setCurrent((prev) =>
      direction === 1
        ? (prev + 1) % total
        : (prev - 1 + total) % total
    );
  };

  return (
    <section className="bg-[#f7f9f9] py-10 px-4 sm:px-8 md:px-20 relative overflow-hidden">
      {/* Heading and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug text-center md:text-left">
  Our beloved <br />
  <span className="inline-block bg-yellow-100 text-orange-600 px-3 py-1 rounded-full">
    clients experience
  </span>
</h2>



        {/* Buttons */}
        <div className="flex gap-4 mt-6 sm:mt-0">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full border cursor-pointer border-black text-black hover:bg-gray-200 transition"
            aria-label="Previous Testimonial"
          >
            &lt;
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full cursor-pointer bg-[#c4e19e] text-black hover:bg-[#b2d48a] transition"
            aria-label="Next Testimonial"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Testimonial Cards (CSS-controlled visibility) */}
    <div className="relative max-w-4xl mx-auto min-h-[340px]">
  {testimonials.map(({ name, image, rating, message }, idx) => (
    <div
      key={idx}
      className={`absolute inset-0 w-full rounded-2xl border border-gray-200 bg-gradient-to-br from-white/70 to-[#e6f0f2]/80 backdrop-blur-lg shadow-lg transition-all duration-500 ease-in-out transform
        ${idx === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"}`}
    >
      {/* Quote Message */}
      <blockquote className="relative text-gray-800 p-6 sm:p-10 md:p-12">
        <div className="flex items-start gap-4 mb-4">
          <svg
            className="w-8 h-8 text-lime-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.17 6A5.001 5.001 0 002 11v1h5v6h4v-7a5 5 0 00-3.83-5zm9 0A5.001 5.001 0 0011 11v1h5v6h4v-7a5 5 0 00-3.83-5z" />
          </svg>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            {message}
          </p>
        </div>
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-gray-200 px-6 sm:px-10 md:px-12 py-2 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
  src={image}
  alt={name}
  width={52}
  height={52}
  className="rounded-full object-cover border border-gray-300"
/>

          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-900 text-base">{name}</p>
            <div className="flex justify-center md:justify-start text-yellow-500 text-sm">
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default TestimonialSection;
