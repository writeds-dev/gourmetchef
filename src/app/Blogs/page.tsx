

import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    image:
      "https://img.freepik.com/premium-photo/atmospheric-image-taco-stand-bustling-farmers-market_1170794-337216.jpg",
    date: "May 15, 2025",
    title: "Indian Street Food: What is Trending?",
  },
  {
    image:
      "https://img.freepik.com/free-photo/top-view-indian-dessert-arrangement_23-2149312330.jpg",
    date: "April 25, 2025",
    title: "How to Choose the Right Sweets for Festive Seasons",
  },
  {
    image:
      "https://img.freepik.com/free-photo/minimalist-kitchen-interior-design_23-2151008745.jpg",
    date: "March 5, 2025",
    title: "The Secret to Getting Authentic Asian Flavors in Your Kitchen",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/group-gujarati-snacks-like-jalebi-fafda-thepla-khaman-dhokla-aloo-bhujiya-khandvi-khakra-dahi-vada-gathiya-with-hot-tea_466689-35270.jpg",
    date: "June 1, 2025",
    title: "Healthier Indian Snacks: What to Look For",
  },
];

const BlogSection = () => {
  return (
    <>
      {/* Intro Section */}
      <section className="bg-[#0d1913] text-white px-6 py-20 flex flex-col items-center min-h-[700px] md:min-h-[600px] lg:min-h-screen">
        <span className="border border-white rounded-full px-7 py-3 mt-10 md:mt-16 lg:mt-24 text-sm mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full block"></span>
          Blogs
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-center max-w-4xl mb-6 leading-tight">
          Gourmet Chefs Global Blog
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mb-14 text-sm sm:text-base md:text-lg lg:text-xl">
          &quot;Connect with top Indian food suppliers, Asian food distributors, B2B
          partners, and private label manufacturers in the USA. Export-ready
          quality and service.&quot;
        </p>
      </section>

      {/* Blog Cards Section */}
      <section className="bg-gray-900 text-white px-6 py-20 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center uppercase tracking-wide mb-8">
          Featured Blog Articles
        </h2>

        <div className="flex justify-center mb-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#9c6e45] text-white text-xl">
              →
            </span>
          </h3>
        </div>

        {/* Responsive Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
          {blogPosts.map(({ image, date, title }, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="inline-block border border-white rounded-full px-4 py-1 text-xs mb-2">
                  {date}
                </span>
                <h4 className="text-base font-semibold leading-snug">
                  {title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
