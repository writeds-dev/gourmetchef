
import React from "react";
import Image from "next/image";
const SweetCate = () => {
  return (
    <>
      <section className="py-24 max-w-full relative overflow-hidden">
        <div className="w-full mx-auto px-6 py-5">
          {/* Left: Contact Card */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Contact Card */}
          

            {/* Right: Dessert Card */}
            <div className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-[1.01] flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-1/2 h-[280px] sm:h-[320px] lg:h-auto">
                <Image
                alt="c-1"
                  src="/Categories/sweets/first.webp"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 bg-gradient-to-bl from-white via-yellow-50 to-yellow-100 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[#A65F00] mb-4">Classic Desserts</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-800 text-base sm:text-xl text-xl leading-relaxed">
                    <span className="font-semibold text-[#A65F00]">Our Classic Desserts</span> include rich and comforting favorites like{" "}
                    <span className="font-medium text-yellow-700">Gulab Jamun</span>,{" "}
                    <span className="font-medium text-yellow-700">Rasgulla</span>, and{" "}
                    <span className="font-medium text-yellow-700">Cham Cham</span>.
                    These time-honored sweets provide the perfect finish to any meal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Classic Sweets",
                  desc: "Delicate treats that have stood the test of time, offering an authentic, rich sweetness.",
                  points: ["Gulab Jamun", "Rasgulla", "Laddu", "Cham Cham"],
                },
                {
                  title: "Innovative Desserts",
                  desc: "Modern twists on traditional sweets, combining innovative flavors and textures.",
                  points: ["Chocolate Mousse", "Tiramisu", "Cheesecake", "Fruit Tarts"],
                },
                {
                  title: "Specialty Desserts",
                  desc: "Exquisite, one-of-a-kind desserts for special occasions.",
                  points: ["Kulfi", "Malai Ice Cream", "Falooda", "Gajar ka Halwa"],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-200 bg-white"
                >
                  <div className="inline-block bg-yellow-100 text-yellow-800 text-xl font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                    {item.title}
                  </div>

                  <p className="text-gray-700 text-xl lg:text-lg mb-4 leading-snug">
                    {item.desc}
                  </p>

                  <ul className="mt-2 space-y-1 text-xl lg:text-lg text-gray-800">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Whole Desserts Card */}
          <div className="relative bg-white mt-2 shadow-xl overflow-hidden transition-transform">
            <div className="flex flex-col-reverse lg:flex-row">
              {/* Left Content */}
              <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 bg-gradient-to-tr from-white via-orange-50 to-orange-100">
                <h3 className="text-4xl font-extrabold text-[#a35600] mb-4 tracking-tight">Innovative Desserts</h3>
                <p className="text-lg sm:text-lg md:text-xl lg:text-xl text-gray-700 italic border-l-4 border-orange-500 pl-4 mb-6 leading-relaxed bg-orange-50/50 rounded-md">
                  Our innovative desserts offer a creative twist on the traditional, merging flavors and textures to create something unforgettable.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ["Chocolate Mousse", "Rich, creamy, and decadently smooth."],
                    ["Tiramisu", "Layered coffee-flavored indulgence."],
                    ["Cheesecake", "Creamy texture with a perfect balance of sweetness."],
                    ["Fruit Tarts", "A fresh and tangy way to enjoy the sweetness of seasonal fruits."],
                  ].map(([title, desc], i) => (
                    <li key={i} className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 hover:shadow-md transition-all">
                      <h4 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-orange-700 mb-1">{title}</h4>
                      <p className="text-lg sm:text-lg md:text-xl lg:text-lg text-gray-600">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 h-[280px] sm:h-[320px] lg:h-auto relative">
                <Image
                  src="/Categories/sweets/second.webp"
                  alt="Whole Desserts"
                  className="w-full h-full object-cover object-center"
                />
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* Optional Decorative BG element */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SweetCate;
