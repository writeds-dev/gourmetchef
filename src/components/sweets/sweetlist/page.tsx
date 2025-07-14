import Image from "next/image";

const items = [
  {
    id: 1,
    name: "Gulab Jamun",
    image: "/Categories/sweets/gulab-jamun.jpg",
    description: "Soft, deep-fried dough balls soaked in sugar syrup, a traditional favorite.",
  },
  {
    id: 2,
    name: "Khoya",
    image: "/Categories/sweets/khoya.jpg",
    description: "A rich, sweet dessert made with milk, perfect for any celebration.",
  },
  {
    id: 3,
    name: "Dry Fruits Mithai",
    image: "/Categories/sweets/dry 1.jpg",
    description: "A healthy mix of assorted dry fruits, rich in nutrients and flavor.",
  },
  {
    id: 4,
    name: "Namkeen",
    image: "/Categories/sweets/namkeen 1.jpg",
    description: "Savory, crispy snacks made with a variety of spices.",
  },
  {
    id: 5,
    name: "Maida",
    image: "/Categories/sweets/momos 1.jpg",
    description: "Soft, light flour-based sweets that are perfect for any occasion.",
  },
  {
    id: 6,
    name: "Snacks",
    image: "/Categories/sweets/samsoa.jpg",
    description: "A variety of crunchy and flavorful snacks that pair perfectly with tea.",
  },
  {
    id: 7,
    name: "Bakery",
    image: "/Categories/sweets/bakery.jpg",
    description: "Freshly baked goods, from cakes to cookies, for every taste.",
  },
  {
    id: 8,
    name: "Laddu",
    image: "/Categories/sweets/laddu.jpg",
    description: "A sweet ball made of flour and sugar, often enjoyed during festivals.",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 py-5 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-4xl text-center font-bold mb-8 text-yellow-600">
          Find Your Favorite Sweets and Snacks
        </h1>

        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">
          Our Delicious Offerings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-lg font-semibold">{item.name}</p>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
