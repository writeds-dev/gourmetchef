import React from 'react'

const Testimonials = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 md:px-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543773495-2cd9248a5bda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN3ZWV0c3xlbnwwfDB8MHx8fDA%3D'" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative inline-block after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-2">
            Customer Testimonials
          </h2>
         <p className="mb-4 text-lg">
  &quot;As a pastry chef, I&apos;m always searching for ingredients that make a lasting impression. The desserts I create with your premium-quality sweets and ingredients are not only visually stunning but also packed with unforgettable flavor. From the delicate sweetness of your Bengali Cham Cham to the rich textures of your handcrafted cakes, every product has consistently exceeded my expectations. I can&apos;t imagine my creations without them.&quot;
</p>

          <p className="italic text-base mt-6">- Executive Pastry Chef, Five-Star Bakery</p>
        </div>
      </section>
    </>
  )
}

export default Testimonials
