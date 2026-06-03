export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center overflow-hidden relative pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-deep-green/60" />
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <h1 className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          A cleaner home.<br />
          <span className="text-sage-200">Done right.</span>
        </h1>
        <p className="animate-fade-in-up animate-fade-in-up-delay-1 mt-5 md:mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          Professional home cleaning tailored to your schedule and standards.
          We bring the products, expertise, and care your space deserves.
        </p>
        <div className="animate-fade-in-up animate-fade-in-up-delay-2 mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="bg-white text-deep-green px-8 py-3.5 rounded-full text-sm font-medium hover:bg-sage-50 transition-all shadow-lg">Book a Cleaning</a>
          <a href="#services" className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-all">See Our Services</a>
        </div>
      </div>
    </section>
  );
}
