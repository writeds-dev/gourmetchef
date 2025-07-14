import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 py-12 bg-white">
      
      {/* Image Section */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image src="https://images.unsplash.com/photo-1639399688019-7c441d783782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRzJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D" alt="Team discussion" className="w-full h-auto"
          height={1280} 
          width={853}/>
        
        </div>
      </div> 

      {/* Content Section */}
      <div className="w-full md:pl-5">
      <h2 className='text-3xl font-bold mb-5'>Our Mission</h2>
     <h2 className="text-2xl md:text-xl font-semibold md:font-normal mb-6 text-gray-900">
  Gourmet Chefs Global provides retailers, restaurants, and hospitality partners around the world with high-quality Indian and Asian foods, ingredients, and supplies. We make sourcing easier by providing dependability through shipping logistics, quality assurance, and a large selection. Our aim is to be the single source for any client who desires to authentically serve their customers&apos; cuisine without a team of specialty chefs or complicated operations.
</h2>


      

        {/* Step Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Step 1 */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-gray-100 text-black rounded-full w-12 h-12 flex items-center justify-center font-semibold text-xl">01</span>
            </div>
            <h4 className="font-semibold text-lg mb-4">Easier Sourcing Made Simple</h4>
            <p className="text-gray-600 text-sm">We support restaurants like Tabla and other partners to access a vast selection of Indian and Asian ingredients through a single process that saves time, labor, and effort.</p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold text-xl">02</span>
            </div>
            <h4 className="font-semibold text-lg mb-4">Taste You’ll Only Find in Restaurants</h4>
            <p className="text-gray-600 text-sm">Every product we ship is guaranteed from quality control, ensuring chefs and restaurateurs serve dishes that reflect true culinary excellence, consistently every time.</p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center font-semibold text-xl">03</span>
            </div>
            <h4 className="font-semibold text-lg mb-4">Authentic Made Easy</h4>
            <p className="text-gray-600 text-sm">Our ready-to-use bases, bulk ingredients, and product solutions allow brands to serve authentic Indian/Asian flavors without hiring a large team of specialty chefs or sourcing specialty items.</p>
          </div>
           
        </div>
         <button className="bg-black text-white mt-5 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition duration-300 mb-12">
         contact Us
          <span className="bg-yellow-400 text-black p-1 rounded-full">&#8599;</span>
        </button>
      </div>
    </div>
  )
}
