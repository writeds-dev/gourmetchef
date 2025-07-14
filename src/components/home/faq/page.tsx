"use client"
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Here are some common questions about becoming a gourmet chef and gourmet cooking.
          </p>
        </div>
        <div>
          <div className="space-y-6">
            {[
              "What is a gourmet chef?",
              "What skills do you need to become a gourmet chef?",
              "How long does it take to become a professional gourmet chef?",
              "What is the difference between a chef and a gourmet chef?",
              "What are the best ingredients for gourmet cooking?",
              "How do I choose a good chef knife?",
              "Can anyone be a gourmet chef?",
              "What is the role of a gourmet chef in a restaurant?"
            ].map((question, index) => (
              <div key={index} className="border-b last:border-b-0 border-gray-300">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left text-xl cursor-pointer font-medium text-gray-800 py-4 px-5  focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-between"
                >
                  <span>{question}</span>
                  <span className="text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="mt-3 text-gray-600 px-5 p-5  py-3 bg-gray-50 rounded-md shadow-md">
                    <p>
                      This is the answer to the question. You can replace this placeholder text with actual answers based on the content.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
