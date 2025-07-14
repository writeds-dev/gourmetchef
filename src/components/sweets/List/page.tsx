import React from 'react';
import {
  FaCandyCane,
  FaBirthdayCake,
  FaIceCream,
} from "react-icons/fa";

const ProductList = () => {
  const items = [
    {
      icon: <FaCandyCane className="text-white text-xl" />,
      title: "Classic Sweets",
      desc: "Bengali Cham Cham, Gulab Jamun, Rasgulla, Laddu",
      bg: "bg-pink-600",
    },
    {
      icon: <FaBirthdayCake className="text-white text-xl" />,
      title: "Innovative Desserts",
      desc: "Chocolate mousse, Tiramisu, Cheesecake, Fruit tarts",
      bg: "bg-yellow-500",
    },
    {
      icon: <FaIceCream className="text-white text-xl" />,
      title: "Specialty Delights",
      desc: "Kulfi, Malai ice cream, Falooda, Gajar ka halwa",
      bg: "bg-[#A65F00]",
    },
  ];

  return (
    <div className="p-6 ">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Icon */}
            <div className={`${item.bg} p-3 rounded-full shadow-inner`}>
              {item.icon}
            </div>

            {/* Title and Tags */}
            <div>
              <h3 className="text-lg font-bold text-[#A65F00]">{item.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.desc.split(",").map((sweet, i) => (
                  <span
                    key={i}
                    className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1  shadow-sm hover:bg-orange-200 transition"
                  >
                    {sweet.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
