import Image from 'next/image'

const CoreSection = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">

        {/* Left Side: Spices Image */}
        <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-md">
          <Image
            src="/shared/plantgrow.png" 
            alt="design"
            width={100}  
            height={100} 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl sm:text-4xl md:text-5xl font-serif font-extrabold text-gray-800">
            Our <span className="text-[#A65F00]">Vision</span>
            <div className="w-16 mt-2 border-b-4 border-[#A65F00] mx-auto md:mx-0"></div>
          </h2>

          <div className="flex justify-center md:justify-start items-center space-x-4 mt-6">
           <div className="max-w-4xl mx-auto bg-white border-l-4 border-[#A65F00] p-6 sm:p-8 rounded-xl shadow-md relative">
  <svg
    className="absolute top-4 left-4 w-8 h-8 text-[#A65F00] opacity-20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.17 4A4.17 4.17 0 003 8.17v4.66A4.17 4.17 0 007.17 17H9V4H7.17zM17.17 4A4.17 4.17 0 0013 8.17v4.66A4.17 4.17 0 0017.17 17H19V4h-1.83z" />
  </svg>

  <p className="text-lg sm:text-2xl md:text-xl lg:text-2xl text-gray-800 font-thin italic leading-relaxed pl-12">
    To be the most trusted B2B partner for authentic Indian and Asian culinary
    solutions—helping businesses worldwide serve genuine flavors with ease and
    confidence.
  </p>
</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreSection
