const services = [
  {
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    title: "Regular Cleaning",
    desc: "Weekly or bi-weekly maintenance to keep your home consistently fresh, tidy, and welcoming every day.",
  },
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    title: "Deep Cleaning",
    desc: "An intensive top-to-bottom scrub tackling kitchens, bathrooms, baseboards, and every overlooked corner.",
  },
  {
    icon: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15",
    title: "Move-In / Move-Out",
    desc: "End-of-lease or new-home cleaning that ensures every surface shines so deposits are returned in full.",
  },
  {
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    title: "Office Cleaning",
    desc: "Commercial-grade cleaning for workspaces, break rooms, restrooms, and common areas included.",
  },
  {
    icon: "M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z",
    title: "Post-Construction",
    desc: "Removes drywall dust, paint splatters, and debris so your renovated space is move-in ready immediately.",
  },
  {
    icon: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75",
    title: "Eco-Friendly Cleaning",
    desc: "Plant-based, non-toxic products that are safe for children, pets, and the planet without sacrificing results.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-28 bg-white flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <div className="w-full text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Services we offer</h2>
          <p className="mt-3 text-charcoal/65 max-w-xl mx-auto">Every service is customised to your home's size, your schedule, and your priorities.</p>
        </div>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="w-full bg-sage-50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sage-200/50 group">
              <svg className="w-8 h-8 text-deep-green mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
              </svg>
              <h3 className="font-serif text-xl text-charcoal mb-2">{s.title}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed mb-4">{s.desc}</p>
              <a href="#contact" className="text-sm font-medium text-deep-green hover:underline">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
