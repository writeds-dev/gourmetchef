import React from 'react';
import Image from 'next/image';

const certifications = [
  { src: '/demo/logo-1.png', alt: 'Cisco Certified Importer' },
  { src: '/demo/logo-2.png', alt: 'Cisco Certified Distributor' },
  { src: '/demo/cisco.jpg', alt: 'Cisco Certified Manufacturer' },
];

const Certification: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16" id="certifications">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Recognized <span className="text-[#0e6ba8]">Certifications</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Our team proudly holds internationally recognized certifications that highlight our technical expertise and industry leadership.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <Image
                src={cert.src}
                alt={cert.alt}
                width={240}
                height={120}
                className="mx-auto object-contain"
              />
              <p className="mt-4 text-sm font-medium text-gray-700">{cert.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
