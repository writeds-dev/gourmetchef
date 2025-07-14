"use client";
import React, { useState } from "react";
import FaqSection from "@/components/sweets/faq/page";
import SpiceCate from "@/components/sweets/categories/page";
import { FaDownload, FaEye } from "react-icons/fa";
import Image from "next/image";
import ContactForm from "@/shared/formWrapper";
import Testimonials from "@/components/sweets/Testimonial/page";
import ProductList from "@/components/sweets/List/page";
import Link from "next/link";
import CalltoAction from "@/components/about/Calltoactions/page";
import Sweetlist from "@/components/sweets/sweetlist/page";
import Services from "@/components/sweets/cards/page";


const Spices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadPDF = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="bg-white/20 py-4">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Banner Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="lg:col-span-2 lg:row-span-2 relative h-[400px] overflow-hidden">
              <Image
                src="/Categories/sweets/gulab-jamun.jpg"
                alt="Seasoning Blends"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition" />
              <div className="absolute bottom-5 left-5 text-white z-10">
                <h2 className="text-3xl font-bold">GULAB JAMUN</h2>
              </div>
            </div>

            <div className="relative h-[195px] overflow-hidden">
              <Image
                src="/Categories/sweets/khoya.jpg"
                alt="Bulk Wholesale"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">KHOYA</h2>
              </div>
            </div>

            <div className="relative h-[195px]  overflow-hidden">
              <Image
                src="/Categories/sweets/momos 1.jpg"
                alt="Spices"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">MAIDA</h2>
              </div>
            </div>

            <div className="relative h-[195px] lg:col-span-2 overflow-hidden">
              <Image
                src="/Categories/sweets/first.webp"
                alt="New Products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">DRY</h2>
                <p className="text-xl font-medium">FRUITS BASED</p>
              </div>
            </div>
          </div>

          {/* Overview and Library */}
          <div className="flex flex-col lg:flex-row gap-10 mb-12">
            {/* Overview Content */}
            <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A65F00] to-[#d97700] mb-6">
                Sweets & Dessert
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                Indulge in the sweet richness of our carefully curated selection of Sweets & Desserts. From classic treats to innovative twists, our collection brings the perfect balance of flavor and texture to your table. Whether You&apos;re savoring the delicate sweetness of Bengali Cham Cham or enjoying a comforting dessert after a meal
              </p>
              <div className="bg-gray-100 p-6 rounded-md">
                <h3 className="text-2xl font-bold mb-3">Full-Service Sweets Supply</h3>
                <p className="text-lg mb-5">
                  Gourmet Chef is renowned for its collection of exquisite sweets and desserts, carefully curated from traditional recipes and contemporary innovations. We import, manufacture, and distribute a wide range of premium-quality desserts that bring indulgence and sophistication to your palate.
                </p>
                <p className="text-gray-600 mb-5">
                  For more details, download the product PDF.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleDownloadPDF}
                    className="bg-yellow-500 cursor-pointer text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition flex items-center gap-2"
                  >
                    <FaDownload />
                    <span>Download Catalog</span>
                  </button>
                  <Link
                    href="/contact"
                    passHref
                    className="bg-yellow-500 text-black px-8 py-2 rounded-lg hover:bg-yellow-600 transition flex items-center gap-2"
                  >
                    <FaEye />
                    <span>Send Query</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-6 p-4 bg-yellow-700 rounded-md shadow">
                Product Library
              </h2>
              <ProductList />
            </div>
          </div>
          {/* Testimonials */}
          <Testimonials />

          {/* Categories Section */}
          <SpiceCate />
        </div>
      </section>
      {/* Modal for PDF Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full relative p-2">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">Fill the form to get your PDF</h2>
            <ContactForm />
          </div>
        </div>
      )}
      {/* sweet list */}
      <Sweetlist/>
      {/* Call to Action */}
     <Services/>
     <CalltoAction/>
      {/* FAQ Section */}
      <FaqSection />
    </>
  );
};

export default Spices;
