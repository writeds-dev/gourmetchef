import React from "react";
import Image from "next/image";

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "EXPERTISE AND EXPERIENCE",
    description: "Years of industry knowledge and proven track record in delivering exceptional logistics solutions worldwide.",
  },
  {
    number: "02",
    title: "COMMITTED TO QUALITY",
    description: "Unwavering dedication to maintaining the highest standards in every aspect of our service delivery.",
  },
  {
    number: "03",
    title: "COMPREHENSIVE SERVICE",
    description: "End-to-end logistics solutions covering all your supply chain needs from start to finish.",
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex  mb-6">
                <span className=" text-orange-600 px-7 py-2 text-2xl font-bold rounded-full shadow-md">
                  Why Us
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl lg:text-3xl font-medium text-gray-900 ">
                  We offer unique solutions with a commitment to quality and sustainability — tailored for modern food brands and global markets.
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  At Gourmet Chefs Global, we are committed to bringing the finest Indian and Asian culinary experiences directly to your kitchen or business. Whether you’re a restaurant owner, a food retailer, or a hospitality partner, we provide premium-quality ingredients and ready-to-use solutions that help you deliver authentic and exceptional dishes consistently.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                  {["Wide Distribution Network", "Custom Solutions", "Quality Assurance", "Sustainable Solutions"].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-900 text-xl font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1628166566841-5abcc2c6b88d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                alt="Logistics"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black text-white p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl font-bold text-white opacity-80">{service.number}</span>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
