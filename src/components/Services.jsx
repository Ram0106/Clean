const services = [
  {
    icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 0 2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.422 6.42a15.995 15.995 0 0 0 3.478-2.648 3 3 0 0 0-4.148-4.315 15.995 15.995 0 0 0-2.648 3.478m0 0a15.989 15.989 0 0 0-3.395 1.622m.79 2.47a15.999 15.999 0 0 1-3.423 1.622",
    title: "Regular Cleaning",
    desc: "Weekly or bi-weekly maintenance to keep your home consistently fresh, tidy, and welcoming every day.",
  },
  {
    icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    title: "Deep Cleaning",
    desc: "An intensive top-to-bottom scrub tackling kitchens, bathrooms, baseboards, and every overlooked corner.",
  },
  {
    icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819",
    title: "Move-In / Move-Out",
    desc: "End-of-lease or new-home cleaning that ensures every surface shines so deposits are returned in full.",
  },
  {
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    title: "Office Cleaning",
    desc: "Commercial-grade cleaning for workspaces — desks, break rooms, restrooms, and common areas included.",
  },
  {
    icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
    title: "Post-Construction",
    desc: "Removes drywall dust, paint splatters, and debris so your renovated space is move-in ready immediately.",
  },
  {
    icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.766 5.412",
    title: "Eco-Friendly Cleaning",
    desc: "Plant-based, non-toxic products that are safe for children, pets, and the planet — without sacrificing results.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-28 bg-white flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <div className="w-full text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Services we offer</h2>
          <p className="mt-3 text-charcoal/65 max-w-xl mx-auto">Every service is customised to your home&apos;s size, your schedule, and your priorities.</p>
        </div>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="w-full bg-sage-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sage-200/50 group">
              <svg className="w-8 h-8 text-deep-green mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
              </svg>
              <h3 className="font-serif text-xl text-charcoal mb-2">{s.title}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed mb-4">{s.desc}</p>
              <a href="#contact" className="text-sm font-medium text-deep-green hover:underline">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
