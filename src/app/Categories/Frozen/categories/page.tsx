import React from 'react'
import Image from 'next/image';

 const SpiceCate = () => {
  return (
   <>
   <section className="py-24 max-w-full relative overflow-hidden">
 <div className="w-full mx-auto px-6 py-5">
  
  <div className="flex flex-col lg:flex-row gap-10">
    {/* Left: Contact Card */}
    <div className="w-full lg:w-1/4 relative rounded-lg overflow-hidden shadow-lg bg-cover bg-center" style={{ backgroundImage: `url('/demo/m-1.jpeg')` }}>
      <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-6 h-full">
       <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 sm:p-8 shadow-md max-w-md w-full mx-auto">
  <div className="flex items-center space-x-3 mb-4">
    <div className="bg-yellow-500 text-white rounded-full p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h2l.4 2M7 5h10l1 5H6.4M16 13a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
      Have Questions?
    </h2>
  </div>

  <p className="text-gray-700 text-base leading-relaxed mb-4">
    Our Client Care Managers are available <span className="font-semibold">24/7</span> to assist with any inquiries or support you may need.
  </p>

  <div className="flex items-center text-yellow-700 font-semibold text-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5h2l.4 2M7 5h10l1 5H6.4M16 13a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  +1 407-726-3530
  </div>
</div>
      </div>
    </div>

    {/* Right: Spice Card */}
    <div className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-[1.01] flex flex-col lg:flex-row">
      {/* Image */}
      <div className="lg:w-1/2 h-[280px] sm:h-[320px] lg:h-auto">
        <Image
          src="https://img.freepik.com/free-photo/gourmet-chocolate-dessert-wooden-table-decorated-with-spices-generated-by-ai_188544-9011.jpg?uid=R153934864&ga=GA1.1.122125592.1722148753&semt=ais_items_boosted&w=740"
          alt="Ground Spices"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 bg-gradient-to-bl from-white via-yellow-50 to-yellow-100 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-[#A65F00] mb-4">Ground Spices</h3>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-sm">
  <p className="text-gray-800 text-base sm:text-xl text-xl leading-relaxed">
    <span className="font-semibold text-[#A65F00]">Our Ground Spices</span> selection includes everyday essentials and flavor-packed favorites — finely ground to preserve <span className="font-medium text-yellow-700">aroma</span>, <span className="font-medium text-yellow-700">taste</span>, and <span className="font-medium text-yellow-700">authenticity</span>.
  </p>
</div>
      </div>
    </div>
  </div>
<div>
  <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
  {[
    {
      title: "Ground Spices",
      desc: "Finely milled for bold, even flavor. Essentials like turmeric and cumin add richness and color to everyday cooking.",
      points: ["Turmeric", "Cumin", "Coriander", "Chili Powder"],
    },
    {
      title: "Whole Spices",
      desc: "Bold, whole forms that release aroma slowly — ideal for tempering, toasting, and long-simmering flavors.",
      points: ["Cardamom", "Cloves", "Cinnamon", "Star Anise"],
    },
    {
      title: "Specialty Masalas",
      desc: "Authentic regional blends like Garam, Chaat, and Tandoori — ready to spice up traditional dishes instantly.",
      points: ["Garam Masala", "Tandoori Masala", "Chaat Masala"],
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
    {/* Whole Spices Card */}
    <div className="relative bg-white mt-2 shadow-xl overflow-hidden transition-transform">
  <div className="flex flex-col-reverse lg:flex-row">
    {/* Left Content */}
    <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 bg-gradient-to-tr from-white via-orange-50 to-orange-100">
      <h3 className="text-4xl font-extrabold text-[#a35600] mb-4 tracking-tight">Whole Spices</h3>
     <p className="text-lg sm:text-lg md:text-xl lg:text-xl text-gray-700 italic border-l-4 border-orange-500 pl-4 mb-6 leading-relaxed bg-orange-50/50 rounded-md">
  Our Whole Spices offer a sensory experience — each pod, bark, or seed infused with tradition and depth for slow cooking and long-lasting aroma.
</p>


     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {[
    ['Cardamom', 'Floral and citrusy for sweet or savory.'],
    ['Cloves', 'Warm, rich and slightly numbing.'],
    ['Cinnamon', 'Sweet spice for depth and comfort.'],
    ['Star Anise', 'Licorice tones for bold stews.'],
  ].map(([title, desc], i) => (
    <li key={i} className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 hover:shadow-md transition-all">
      <h4 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-orange-700 mb-1">{title}</h4>
      <p className=" text-lg sm:text-lg md:text-xl lg:text-lg text-gray-600">{desc}</p>
    </li>
  ))}
</ul>
    </div>

    {/* Right Image */}
    <div className="lg:w-1/2 h-[280px] sm:h-[320px] lg:h-auto relative">
      <Image
        src="https://img.freepik.com/free-photo/high-angle-various-spices_23-2148262125.jpg?uid=R153934864&ga=GA1.1.122125592.1722148753&semt=ais_items_boosted&w=740"
        alt="Whole Spices"
        className="w-full h-full object-cover object-center"
      />
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  </div>

  {/* Optional Decorative BG element */}
  <div
    className="absolute -bottom-10 -right-10 w-60 h-60 bg-cover opacity-20 rotate-12 pointer-events-none"
    style={{ backgroundImage: 'url(/demo/spc-1.png)' }}
  ></div>
</div>
</div>

</section>
   </>

  )
}

export  default SpiceCate;
