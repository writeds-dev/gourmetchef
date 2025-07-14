import React from 'react'
import {
  FaPepperHot,
  FaSeedling,
  FaSyringe,
} from "react-icons/fa";

const ProductList = () => {
  const items = [
    {
      icon: <FaPepperHot className="text-white text-xl" />,
      title: "Ground Spices",
      desc: "Turmeric, cumin, coriander, chili powder",
      bg: "bg-red-600",
    },
    {
      icon: <FaSeedling className="text-white text-xl" />,
      title: "Whole Spices",
      desc: "Cardamom, cloves, cinnamon, star anise",
      bg: "bg-green-500",
    },
    {
      icon: <FaSyringe className="text-white text-xl" />,
      title: "Specialty Masalas",
      desc: "Garam masala, tandoori masala, chaat masala",
      bg: "bg-[#A65F00]",
    },
  ];

  return (
    <div className="p-6">
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
                {item.desc.split(",").map((spice, i) => (
                  <span
                    key={i}
                    className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1  shadow-sm hover:bg-orange-200 transition"
                  >
                    {spice.trim()}
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
