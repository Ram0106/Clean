const tiers = [
  {
    name: "Basic", price: "$79",
    desc: "Perfect for maintaining a tidy home on a regular schedule.",
    features: ["2 bedrooms or fewer", "Living & dining areas", "Kitchen surfaces & sink", "Bathroom scrub & shine", "Vacuum & mop floors", "Trash removal"],
    popular: false,
  },
  {
    name: "Standard", price: "$129",
    desc: "Our most popular plan for a thorough whole-home refresh.",
    features: ["Up to 4 bedrooms", "All common areas", "Deep kitchen & appliances", "All bathrooms detailed", "Baseboards & window sills", "Inside cabinets & drawers"],
    popular: true,
  },
  {
    name: "Premium", price: "$199",
    desc: "The full-treatment — every room, every surface, every detail.",
    features: ["Any home size", "Everything in Standard", "Inside fridge & oven", "Window tracks & blinds", "Ceiling fans & light fixtures", "Custom request list"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 md:py-28 bg-sage-50 flex justify-center">
      <div className="w-full max-w-6xl px-6">
        <div className="w-full text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Simple, transparent pricing</h2>
          <p className="mt-3 text-charcoal/65 max-w-lg mx-auto">No hidden fees, no surprises. What you see is what you pay — guaranteed.</p>
        </div>
        <div className="w-full grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {tiers.map((t) => (
            <div key={t.name} className={`w-full relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${t.popular ? "bg-deep-green text-white shadow-2xl shadow-deep-green/30 scale-105 md:scale-105" : "bg-white"}`}>
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-charcoal text-xs font-semibold px-4 py-1 rounded-full">Most Popular</div>
              )}
              <h3 className={`font-serif text-2xl mb-1 ${t.popular ? "text-white" : "text-charcoal"}`}>{t.name}</h3>
              <div className={`text-4xl font-serif mb-1 ${t.popular ? "text-white" : "text-deep-green"}`}>
                {t.price}
                <span className={`text-sm font-sans ${t.popular ? "text-sage-200" : "text-charcoal/50"}`}> / session</span>
              </div>
              <p className={`text-sm mt-3 mb-6 ${t.popular ? "text-sage-200" : "text-charcoal/65"}`}>{t.desc}</p>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${t.popular ? "text-sage-200" : "text-sage-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className={t.popular ? "text-white" : "text-charcoal/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3 rounded-full text-sm font-medium transition-all ${t.popular ? "bg-white text-deep-green hover:bg-sage-100" : "bg-deep-green text-white hover:bg-deep-green/90"}`}>Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
