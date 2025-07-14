import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-5 px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          We specialize in connecting people with their perfect properties. Whether you’re searching for a dream home, a prime commercial space, or a lucrative investment opportunity, our expert.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">365+</h3>
            <p className="text-xl text-gray-600">Projects completed</p>
            <p className="mt-4 text-gray-500">We are dedicated to building high-quality durable, and innovative.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">96M</h3>
            <p className="text-xl text-gray-600">Property Sales</p>
            <p className="mt-4 text-gray-500">We are dedicated to building high-quality durable, and innovative.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">45M</h3>
            <p className="text-xl text-gray-600">Home Loan Funding</p>
            <p className="mt-4 text-gray-500">We are dedicated to building high-quality durable, and innovative.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
