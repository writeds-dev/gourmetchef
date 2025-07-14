import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative text-black mb-10 py-20">
      {/* Background image and Section */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z291cm1ldCUyMGNoZWZ8ZW58MHx8MHx8fDA%3D"
          alt="Gourmet Chef"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4">
            Indulge in Exquisite Culinary Creations
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Discover the fine artistry behind each dish, where passion, precision, and premium ingredients meet.
            Our chef&apos;s  dedication to gourmet cuisine brings the world&apos;s finest flavors to your plate.
          </p>
          <Link href="/contact" passHref>
            <button className="bg-yellow-600 text-white cursor-pointer py-3 px-8 rounded-full font-semibold">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Content (Chef's Experience Badge) */}
        <div className="relative flex items-center ml-25 md:ml-10 lg:ml-20 justify-center lg:ml-6">
          <div className="bg-white text-black ml-5 text-3xl sm:text-4xl lg:text-5xl font-bold rounded-full w-32 h-32 flex items-center justify-center absolute z-20">
            <div className="font-bold ml-4 text-yellow-600">17+</div>
            <p>Years</p>
          </div>
          <div className="absolute w-36 h-36 border-4 border-red-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
