import Link from "next/link";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="relative text-white mt-20">
      <Image
        src="https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?w=1200&auto=format&fit=crop&q=80"
        alt="Chef at work"
        className="w-full h-[400px] object-cover rounded-md"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-6 text-center rounded-md">
        <p className="text-xs tracking-wide uppercase text-gray-300 mb-2">The Gourmet Chef</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
          Discover Culinary Secrets <br /> From Our Master Chef
        </h2>
        <Link
          href="/contact"
          className="border border-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
