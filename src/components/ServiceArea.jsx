export default function ServiceArea() {
  const areas = ["Portland", "Beaverton", "Hillsboro", "Gresham", "Lake Oswego", "Tigard", "Vancouver", "Oregon City"];
  return (
    <section className="w-full py-20 md:py-28 bg-white flex justify-center">
      <div className="w-full max-w-4xl px-6">
        <div className="w-full text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Areas we serve</h2>
          <p className="mt-3 text-charcoal/65">We cover the greater Portland metro and surrounding communities.</p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((city) => (
            <div key={city} className="flex items-center gap-3 bg-sage-50 rounded-xl px-4 py-3.5">
              <svg className="w-5 h-5 text-deep-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="text-sm font-medium text-charcoal">{city}</span>
            </div>
          ))}
        </div>
        <p className="w-full text-center text-sm text-charcoal/50 mt-8">
          Don't see your area? <a href="#contact" className="text-deep-green underline hover:no-underline">Contact us and we'll check availability.</a>
        </p>
      </div>
    </section>
  );
}
