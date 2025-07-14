import Image from "next/image";

const ProductSection = () => {
  const stats = [
    {
      image: "/gc/Samosa-1.webp",
      alt: "Fresh wild mushrooms in basket",
      overlayColor: "bg-black/10"
    },
    {
      number: "01",
      title: "Snack and Street Foods",
      description: "Indulge in the irresistible flavors of our Snack and Street Foods collection. From crispy samosas and savory spring rolls to hot and flavorful momos and chaats.",
      overlayColor: "bg-black/70",
      icon: true
    },
    {
      image: "gc/snack-1.webp",
      alt: "snacks",
      overlayColor: "bg-black/20"
    },
    {
      number: "02",
      title: "Frozen-Bread-Range",
      description: "craving fluffy bhaturas, soft naan, flavorful kulchas, or crispy parathas, we offer a variety of authentic, frozen options to elevate your meals",
      overlayColor: "bg-black/40",
      icon: true
    },
    {
      image: "/gc/grav-1.webp",
      alt: "Fresh wild mushrooms in basket",
      overlayColor: "bg-black/20"
    },
    {
      number: "03",
      title: "Indian Gravey Bases",
      description: "The creamy, spiced gravies of classic North Indian dishes like Butter Chicken and Paneer Tikka Masala, to the tangy, aromatic Thai curries and savory Indo-Chinese sauces.",
      overlayColor: "bg-black/70",
      icon: true
    },
    {
      image: "/About/d-1.jpg",
      alt: "Variety of mushrooms",
      overlayColor: "bg-black/40"
    },
    {
      number: "04",
      title: "Sweets & Desert",
      description: " Indian favorites like Gulab Jamun and Jalebi to decadent cakes, pastries, and creamy puddings, each treat is crafted to deliver a perfect balance of flavor and nostalgia.",
      overlayColor: "bg-black/40",
      icon: true
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className=" lg:py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
                <div className="w-8 h-8 bg-mushroom-burgundy rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M8 12l2 2 4-4"/>
                  </svg>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Discover Our Gourmet Chef&apos;s Curated Collection: <span className="underline">A Taste of Culinary Excellence</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
               We&apos;re dedicated to elevating culinary experiences, one exquisite dish at a time. Together, we&apos;s crafting a deeper appreciation for gourmet flavors and their artistry in the kitchen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className=" p-5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
              >
                {stat.image ? (
                  <Image
                    src={stat.image}
                    alt={stat.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-mushroom-brown to-mushroom-burgundy"></div>
                )}
                
                <div className={`absolute inset-0 ${stat.overlayColor} flex flex-col justify-center items-center p-6 text-white`}>
                  {stat.icon && (
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                        <path d="M8 12l2 2 4-4"/>
                      </svg>
                    </div>
                  )}
                  
                  {stat.number && (
                    <>
                      <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                      <h4 className="text-xl font-semibold mb-3 text-center">{stat.title}</h4>
                      <p className="text-sm text-center leading-relaxed opacity-90">{stat.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-10">
            <button
              className="bg-yellow-600 cursor-pointer text-white px-8 py-4  rounded-full text-lg font-medium transition-colors"
            >
              Explore More Categoires
            </button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
