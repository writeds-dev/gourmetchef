import React from 'react';
import Image from 'next/image';

const Vision: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12 py-10 px-4 sm:px-8 max-w-screen-xl mx-auto">
      {/* Text Section */}
      <div className="flex-1 space-y-8 max-w-full">
        <h1 className="relative text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight max-w-max mx-auto sm:mx-0">
          Our Vision
          <span className="absolute left-0 -bottom-2 w-20 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          We want to be the most highly trusted B2B partner for genuine <span className="underline bg-yellow">Indian and Asian culinary solutions in the world</span>, empowering businesses everywhere to serve authentic flavors with diligence and confidence.
        </h2>

        <p className="text-base sm:text-lg text-gray-700">
          Gourmet Chefs Global is committed to providing high-quality Indian and Asian foods, ingredients, and supplies to retailers, restaurants, and hospitality partners around the globe.
        </p>

        <ul className="space-y-6 text-base sm:text-lg text-gray-700 list-none pl-0">
          {[ 
            {
              id: 1,
              title: "Easier Sourcing",
              content: "We make sourcing easier through dependable logistics, consistent quality control, and a wide selection of products. Our efficient process ensures reliable delivery, saving time and reducing costs.",
            },
            {
              id: 2,
              title: "Comprehensive Solutions",
              content: "We strive to be the single source for our clients who wish to serve authentic cuisine, without needing specialty chefs or complex operations. Our comprehensive solutions cover all aspects of food sourcing and preparation.",
            },
          ].map((item) => (
            <li
              key={item.id}
              className="flex items-center space-x-4 bg-white rounded-lg shadow-lg p-5 sm:p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                ✔
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 w-full lg:w-96 mt-8 lg:mt-0">
        <Image
          src="https://img.freepik.com/free-photo/factory-river_649448-586.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740"
          alt="Factory by river"
          className="w-full h-auto object-cover rounded-lg shadow-2xl"
          layout="responsive"
          width={740}
          height={493}
        />
      </div>
      
    </div>
  );
};

export default Vision;
