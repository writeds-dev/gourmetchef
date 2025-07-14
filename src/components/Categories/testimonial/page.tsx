export default function TestimonialSection() {
  return (
    <section className="bg-[#121212] py-16 lg:py-30 px-6 md:px-20 text-white  mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Intro Text */}
        <div className="md:col-span-1 flex flex-col justify-center space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold">8,000+ happy customers</h2>
          <p className="text-gray-400 text-sm">
            Trusted by coffee lovers and connoisseurs around the world. We value every sip and every review.
          </p>
        </div>

        {/* Stats Cards */}
        {[
          {
            value: '4.9',
            label: '2,442 average rating',
            stars: '★★★★★',
          },
          {
            value: 'A+',
            label: '179 customer reviews',
            stars: '★★★★★',
          },
          {
            value: '5.0',
            label: '2,442 average rating',
            stars: '★★★★★',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] rounded-lg px-6 py-8 text-center flex flex-col items-center shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl font-bold mb-2">{item.value}</div>
            <div className="text-sm text-gray-400 mb-2">{item.label}</div>
            <div className="text-yellow-400 text-xl">{item.stars}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
