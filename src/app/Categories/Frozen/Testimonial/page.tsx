import React from 'react'

const Testimonials = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 md:px-20"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/spices-spoons-box-wooden-background_434420-1921.jpg?uid=R153934864&ga=GA1.1.122125592.1722148753&semt=ais_items_boosted&w=740')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
       <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative inline-block after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-2">
  Customer Testimonials
</h2>
      <p className="mb-4 text-lg">
  &quot;As a gourmet chef, the integrity of my dishes begins with the quality of my ingredients — and Spices Inc consistently delivers nothing but excellence. Their spices are remarkably fresh, vibrant in aroma, and rich in flavor, allowing me to elevate every plate with precision and depth. Whether I&apos;m crafting a delicate sauce or a bold rub, I trust Spices Inc to provide the consistency and character I demand. They&apos;ve become an essential part of my kitchen and my culinary philosophy.&quot;
</p>

        <p className="italic text-base mt-6">- Owner of a midwestern spice company</p>
      </div>
 </section>
    </>
  )
}

export default Testimonials