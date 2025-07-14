'use client';

import Image from 'next/image';
import Link from 'next/link';
import TestimonialSection from '@/components/Categories/testimonial/page';
import ValuesSection from '@/components/Categories/about/page';
import Newsletter from '@/components/Categories/calltoaction/page';

type Product = {
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
};

const products: Product[] = [
  {
    name: 'Sweets & Desserts',
    description:
      'Bengali Cham Cham Long, Bengali Cham Cham Triangle, Bengali Cham Cham Tikki Stuffed, Bengali Cham Cham Long Stuffed',
    imageUrl: '/CAT/sweet-1.jpg',
    slug: 'Categories/sweets',
  },
  {
    name: 'Snacks & Street Foods',
    description:
      'These popular street foods from around the world share a common appeal—they’re handheld, flavorful, and perfect for eating on the go. From India’s samosas and pakoras, which feature spiced fillings and crispy, golden exteriors, to Asian spring rolls and Italian arancini, which wrap savory goodness in a fried shell, these snacks are satisfying and portable. Kathi rolls, shawarma, gimbap, and burritos.',
    imageUrl: '/CAT/samosa-1.jpg',
    slug: 'channa',
  },
  {
    name: 'Frozen-Bread-Range',
    description:
      'Discover the convenience and freshness of our Frozen Bread Range—a selection of premium-quality breads crafted to deliver homemade taste with zero hassle. From soft and fluffy to crusty and artisanal, each loaf, roll, or flatbread is baked with care, then flash-frozen to lock in freshness, texture, and flavor.',
    imageUrl: '/CAT/frozen-1.jpg',
    slug: 'khoya',
  },
  {
    name: 'Indian Gravy Bases',
    description:
      'A versatile and robust base made from sautéed onions, tomatoes, garlic, ginger, and whole spices. Used widely in North Indian dishes like Chicken Curry, Rajma, Bhuna, and Egg Curry.',
    imageUrl: '/CAT/gravey-1.jpg',
    slug: 'petha',
  },
];

const ShopSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[300px] md:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-psd/flat-design-indian-restaurant-template_23-2149591180.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white font-extrabold text-[2rem] md:text-[5rem] leading-tight">
            Categories
          </h1>
          <p className="mt-4 text-white text-lg md:text-2xl bg-yellow-700 px-6 py-3 rounded-lg shadow-lg">
            Explore a variety of delicious food items.
          </p>
        </div>
      </section>

      {/* Main Content with max-w-7xl */}
      <main className="bg-gray-50 px-4 sm:px-6 lg:px-10 py-10">
        <div className="max-w-8xl mx-auto space-y-16">
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Product Content */}
                <div className="flex flex-col flex-grow p-6 justify-between bg-gradient-to-b from-white to-orange-50">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-base text-gray-600 line-clamp-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link href={`/product/${product.slug}`}>
                      <button className="w-full bg-[#A65F00] hover:bg-yellow-600 text-white py-3 px-6 rounded-xl text-md font-semibold transition-transform transform hover:scale-[1.03]">
                        Explore More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections with consistent max-w */}
          <div className="space-y-20">
            <ValuesSection />
            <TestimonialSection />
            <Newsletter />
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopSection;
