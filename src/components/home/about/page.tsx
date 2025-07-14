"use client";

import React from "react";

const About = () => {
  return (
    <div>
      {/* Work Flow Cargo Efficiency Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 uppercase">About Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Serving Business Since 2008 | U.S.A-Based
              </h2>
              <div>
                <ul className="flex gap-5">
                <li>Gourmet Chefs Global</li> 
                <li>Ready-to-Serve Items</li>
              </ul>
              </div>
            </div>
             <div className="space-y-4 text-md text-gray-600 leading-relaxed">
                <p>
                 An Indian & Asian food manufacturer-importer distributor. In collaboration with vendors around the world, we source fine goods and provide dependable B2B supply solutions pallet-wise or container-wise.
                </p>

                <p>
                  Our ready-to-serve items enable you to feature authentic Asian offerings on your menu or in-store. No need for a specialty chef or additional labor.
                </p>
              </div>
            {/* Right Side - Video Section */}
           
          </div>
           <div className="relative mt-20">
  <div className="bg-gray-400 aspect-video w-full flex items-center justify-center relative overflow-hidden">
    {/* Vimeo iframe */}
    <iframe
      className="w-full h-full object-cover"
      src="https://player.vimeo.com/video/1098898365?autoplay=1&loop=1&muted=1"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default About;
