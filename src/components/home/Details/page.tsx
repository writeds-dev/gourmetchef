"use client";

import React from "react";
import { Factory, Ship, Truck } from "lucide-react";
import Image from "next/image";

interface CardData {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const cards: CardData[] = [
  {
    title: 'Manufacturer',
    description: 'We manufacture high-quality, authentic Indian and Asian food products in modern, certified facilities. From ready-to-serve gravies and snacks to our spices and sweets, all of our manufacturing capabilities ensure the quality, flavor and hygiene of every single batch is consistent.',
    image: 'https://img.freepik.com/free-photo/medical-laboratory_181624-297.jpg',
    icon: <Factory className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Importer',
    description: 'We are the importer with an extensive network of importers that brings in hand-picked ingredients and specialty products from all over India and Asia. Our specialization guarantees authenticity, traceability, and quality.',
    image: 'https://img.freepik.com/free-photo/iron-steel-material-storage_1127-3263.jpg',
    icon: <Ship className="w-12 h-12 text-green-600" />,
  },
  {
    title: 'Distributor',
    description: 'We have the infrastructure, distribution channel in the USA and international distributors, in order to get things done each time you trade. Our system controls your program with on-time delivery, temperature control logistics, and inventory management.',
    image: 'https://img.freepik.com/free-photo/close-up-warehouse-view_23-2148923142.jpg',
    icon: <Truck className="w-12 h-12 text-yellow-600" />,
  },
];

const Card: React.FC<CardData> = ({ title, description, image, icon }) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center mb-4">
        {icon}
        <span className="text-3xl font-bold text-gray-900 ml-4">{title}</span>
      </div>
      <p className="text-gray-500 text-sm mb-6">{description}</p>
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="rounded-lg shadow-md object-cover"
        loading="lazy"
      />
    </div>
  );
};

const CardsGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
     <h2 className="text-4xl sm:text-5xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 relative">
  <span className="relative z-10">One Trusted Source</span>
  <span className="absolute inset-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 bottom-0 left-0 transform scale-x-0 transition-all duration-500 ease-in-out group-hover:scale-x-100"></span>

  <span className="text-gray-700 mx-2">-</span>

  <span className="relative z-10">Three Powerful Roles</span>
</h2>


      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;




