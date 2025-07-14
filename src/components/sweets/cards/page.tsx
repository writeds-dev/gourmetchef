import { Utensils, ChefHat, GlassWater, ShoppingCart } from 'lucide-react'; // Importing available icons

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-yellow-600 mb-12">
        Our Culinary <span className='underline underline '>Masterpieces</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Quality Foods */}
        <div className="flex flex-col items-center p-8 border-2 border-gray-300 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="text-5xl mb-4 text-gray-600">
            <Utensils size={48} /> 
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Foods</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Indulge in a variety of gourmet dishes made with fresh, locally sourced ingredients. Our commitment to quality ensures a rich, delightful experience with every bite.
          </p>
        </div>

        {/* Expert Chef */}
        <div className="flex flex-col items-center p-8 border-2 border-gray-300 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl ">
          <div className="text-5xl mb-4 text-yellow-600">
            <ChefHat size={48} /> 
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Chef</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Our chefs bring years of expertise to every dish, crafting an unforgettable culinary experience. Let our experts prepare meals that are nothing short of perfection.
          </p>
        </div>

        {/* Gourmet Chef */}
        <div className="flex flex-col items-center p-8 border-2 border-gray-300 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl ">
          <div className="text-5xl mb-4 text-teal-600">
            <GlassWater size={48} /> 
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Gourmet Chef</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Experience an elevated dining adventure with our gourmet chefs, who specialize in creating exquisite and imaginative meals that delight your senses.
          </p>
        </div>

        {/* Online Order */}
        <div className="flex flex-col items-center p-8 border-2 border-gray-300 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl ">
          <div className="text-5xl mb-4 text-orange-600">
            <ShoppingCart size={48} /> 
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Online Order</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Order your favorite dishes online and have them delivered right to your door, hot and fresh. Enjoy premium meals from the comfort of your home.
          </p>
        </div>
      </div>
    </div>
  );
}
