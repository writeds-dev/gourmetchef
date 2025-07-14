export default function ValuesSection() {
  return (
    <section className="bg-white text-black px-6 md:px-20 py-20">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          We journey where flavor leads.
          <br className="hidden md:block" />
          <span className="text-gray-700">
            “Tracing origins” isn’t a tagline—it’s our commitment.
          </span>
          <br /> Every cup is a story tasted.
        </h2>

        <div className="pt-4">
          <button className="border border-black px-6 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition">
            Explore Our Story
          </button>
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-6xl mx-auto">
        {[
          {
            number: "1",
            title: "Sourcing with Integrity",
            description:
              "We collaborate with micro-lot farmers from remote estates—supporting regenerative practices and guaranteeing traceable origins. Each bean reflects a commitment to ethical cultivation and exceptional quality.",
          },
          {
            number: "2",
            title: "Crafted Fairness",
            description:
              "Our direct-trade model ensures artisans are compensated fairly, empowering communities and fostering sustainable livelihoods. When you sip our coffee, you're investing in real-world impact.",
          },
          {
            number: "3",
            title: "Elevated Flavor",
            description:
              "From handpicked cherries to precision roasting and sensory evaluation, we honor the bean’s natural profile. Expect layered notes, vibrant acidity, and a refined palate experience in every brew.",
          },
        ].map(({ number, title, description }) => (
          <div key={number} className="flex flex-col items-start space-y-4">
            <div className="bg-black text-white w-10 h-10 flex items-center justify-center text-base font-bold rounded-full shadow-md">
              {number}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
