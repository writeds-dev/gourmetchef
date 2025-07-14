'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Mail } from 'lucide-react';

const faqs = [
  {
    question: "What types of spices do you import?",
    answer:
      "We import a wide variety of whole and ground spices, including turmeric, cumin, cardamom, black pepper, and custom regional masalas."
  },
  {
    question: "Do your spices meet international food safety standards?",
    answer:
      "Yes, all our products are tested for quality and meet FDA, FSSAI, and other global safety certifications. Certificates of Analysis (COA) are available on request."
  },
  {
    question: "Can I request custom spice blends or packaging?",
    answer:
      "Absolutely. We offer custom spice blends, labeling, and private packaging solutions to match your brand and specifications."
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "Our MOQ varies by spice type and packaging format, but it typically starts from 100kg per product for wholesale orders."
  },
  {
    question: "Do you offer global shipping and logistics support?",
    answer:
      "Yes, we ship worldwide and provide end-to-end logistics, including customs clearance and delivery to your warehouse or port."
  },
  {
    question: "How do I place a bulk order or get a quotation?",
    answer:
      "You can contact our sales team through email or the contact form. Once we receive your requirements, we’ll send a detailed quote within 24–48 hours."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-black px-6 md:px-20 py-5 flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg mb-4">
          Can’t find the answer you’re looking for? Please reach out to our sourcing experts or email us at:
        </p>
        <a
  href="mailto:info@gourmetchefglobal.com"
  className="text-blue-400 underline flex items-center space-x-2"
>
  <Mail className="w-5 h-5" />
  <span>info@gourmetchefglobal.com</span>
</a>
      </div>

      <div className="md:w-1/2 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg "
          >
            <button
              className="w-full text-left flex justify-between items-center text-xl font-semibold py-5 px-6 border-b border-gray-200 focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? (
                  <ChevronDown className="w-6 h-6 text-lime-500" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-lime-500" />
                )}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-6 text-gray-600 text-md bg-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
