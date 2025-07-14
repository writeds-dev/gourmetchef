

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; 

const articles = [
  {
    date: "February 16, 2025",
    title: "Indian Street Food: What is Trending?",
    description:
      "Discover the latest street food trends across India, from spicy chaat to fusion tacos!",
    image:
      "https://img.freepik.com/premium-photo/atmospheric-image-taco-stand-bustling-farmers-market_1170794-337216.jpg?w=740",
    slug: "/blogs/street-food-trends",
  },
  {
    date: "February 20, 2025",
    title: "How to Choose the Right Sweets for Festive Seasons",
    description:
      "Choosing festive sweets doesn’t have to be overwhelming. Here’s a guide to make it simple.",
    image:
      "https://img.freepik.com/premium-photo/group-indian-assorted-sweets-mithai-with-diya_466689-72473.jpg?w=740",
    slug: "/blogs/festival-sweets-guide",
  },
  {
    date: "May 16, 2025",
    title: "The Secret to Getting Authentic Asian Flavors in Your Kitchen",
    description:
      "Want authentic taste at home? Try these simple hacks to bring Asian flavors to your kitchen.",
    image:
      "https://img.freepik.com/free-photo/pumpkin-dessert-with-grated-pistachios_140725-2180.jpg?w=740",
    slug: "/blogs/authentic-asian-flavors",
  },
];

const BlogPosts: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <p className="text-sm text-lime-600 font-medium uppercase tracking-wide">Insight</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-1">
              Latest Articles
            </h2>
          </div>
          <div className="max-w-md text-left md:text-right space-y-3">
            <p className="text-gray-500">
              Explore the newest trend across India choosing festive sweets &Authentic Asian Flavours
            </p>
            <Link
              href="/Blogs"
              className="inline-flex items-center gap-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-5 py-2 rounded-full transition"
            >
              View All Blogs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map(({ date, title, description, image, }, idx) => (
            <Link
              key={idx}
              href="/Blogs"
              className="block bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform transition hover:scale-[1.02] duration-300"
            >
              <div className="relative h-60 w-full">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-orange-500">{date}</p>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="mt-2 inline-flex items-center text-lime-600 font-medium hover:underline">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Visit All Blogs Button */}
      </div>
    </section>
  );
};

export default BlogPosts;
