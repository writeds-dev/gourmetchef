
import React from "react";
import Vision from "@/components/home/Vision/page";
import Mission from "@/components/home/mission/page";
import FAQHandbook from "@/components/home/faq/page";
import StatsSection from "@/components/home/keypoints/page";
import CalltoAction from "@/components/about/Calltoactions/page";

const Aboutus = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0d1913] text-white px-6 py-10 flex flex-col items-center justify-center min-h-[700px] md:min-h-[600px] lg:min-h-screen">
        {/* Badge */}
        <span className="border border-white rounded-full px-7 py-2 mt-10 text-sm mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full block"></span>
          About Us
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-center max-w-4xl mb-6 leading-tight">
         Your Global Partner  <br />
           <span className="text-gray-500">in Elite Indian & Asian Food Products</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 max-w-2xl mb-14 text-sm sm:text-base md:text-lg lg:text-xl px-4">
       Gourmet Chefs Global is your worldwide source for authentic Indian and Asian flavor. As a respectful manufacturer/importer/distributor, we provide premium quality products focussing on restaurants, retail, wholesale, and private label products. 
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-4 sm:px-8 py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-20">
          <Mission />
          <StatsSection/>
          <Vision />
          <CalltoAction/>
        </div>
        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto">
          <FAQHandbook />
        </div>
      </section>
    </>
  );
};

export default Aboutus;
