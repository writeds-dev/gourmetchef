import Image from 'next/image';
import React from 'react';

const CateringMenu = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
            EXPLORE OUR SERVICES
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight mb-8">
            Private Labeling and Customized Orders for Your 
            <span className="text-orange-500"> business</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
             Whether you are operating a restaurant, launching a food brand, or managing a high volume of catering orders, our private labeling and custom orders are catered to your business...
          </p>
        </div>

        {/* Featured Dish Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-orange-500 text-2xl font-bold">
              
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Custom Food Products -Made To Order
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
             Our custom food products are designed to offer both flexibility and consistency, ensuring that your customers always enjoy fresh, high-quality meals and snacks, perfectly matched to your brand’s vision. With fast turnaround times and scalable quantities, we make it easy for you to integrate custom products into your business model, whether for daily orders or special events.
            </p>
            <button className="inline-flex cursor-pointer items-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-700 transition-colors shadow-lg">
              Explore More
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 shadow-2xl">
              <Image
                src="/About/card-1.jpg"
                alt="Spicy Steak"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Additional Menu Items Preview */}
       <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { 
      name: "Custom Disposable Paper Products", 
      image: "/About/dis-1.jpg", 
      description: "Whether you require printed or plain food containers, boxes or trays, delivery to restaurant or retail, we have custom printed and stock available options for you. We have containers suitable for restaurants, cloud kitchens, events, or delivery service." 
    },
    { 
      name: "Bulk Grocery Supply",  
      image: "/About/b-1.jpg", 
      description: "We can source from jasmine, basmati and extra-long grain parboiled rice products. We supply a full spectrum of staples in food service and grocery quantities. Our bulk offers allow you to save money, keep your supplies fresh and control your supply chain through your kitchen or retail operations." 
    },
    { 
      name: "Seasonal & Limited-Edition Products",  
      image: "/About/l-1.jpg", 
      description: "Explore our seasonal and limited-edition products available for a short time only. These premium products are crafted with special ingredients and care, giving you the unique experience of limited availability." 
    }
  ].map((item, index) => (
    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl mb-4 flex items-center justify-center">
        <Image src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="space-y-2">
       <h3 className="text-2xl font-serif text-gray-900 tracking-tight mb-4">
  <span className="text-primary font-bold">{item.name}</span>
</h3>

     <p className="text-base text-gray-700 leading-relaxed tracking-wide mb-6">
  {item.description}
</p>

      </div>
    </div>
  ))}
</div>
</div>
    </div>
  );
};

export default CateringMenu;
