export default function Hero() {
  return (
    <section className="w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage-50 via-white to-sage-100 pt-20 relative">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <h1 className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
          A cleaner home.<br />
          <span className="text-deep-green">Done right.</span>
        </h1>
        <p className="animate-fade-in-up animate-fade-in-up-delay-1 mt-5 md:mt-6 text-lg md:text-xl text-charcoal/65 max-w-2xl mx-auto leading-relaxed">
          Professional home cleaning tailored to your schedule and standards.
          We bring the products, expertise, and care your space deserves.
        </p>
        <div className="animate-fade-in-up animate-fade-in-up-delay-2 mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="bg-deep-green text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20">Get a Free Quote</a>
          <a href="#services" className="border-2 border-deep-green text-deep-green px-8 py-3.5 rounded-full text-sm font-medium hover:bg-deep-green/5 transition-all">See Our Services</a>
        </div>
      </div>
    </section>
  );
}
