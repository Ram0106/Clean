const badges = [
  { icon: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75", label: "Green Seal Certified" },
  { icon: "M9 3.75V6m0 0v2.25m0-2.25a2.25 2.25 0 012.25-2.25h1.5M9 6h6m0 0v14.25m0-14.25a2.25 2.25 0 012.25-2.25h1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Non-Toxic Products" },
  { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", label: "Insured & Bonded" },
];

export default function EcoBadges() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-sage-50 flex justify-center">
      <div className="w-full max-w-6xl px-6">
        <div className="w-full text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Trust and transparency</h2>
          <p className="mt-3 text-charcoal/65 max-w-xl mx-auto">Every cleaner is background-checked, insured, and trained in our eco-friendly protocols. We accept only the top 4% of applicants to ensure every visit meets our standard.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2">
              <svg className="w-10 h-10 text-deep-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
              </svg>
              <span className="text-sm font-medium text-charcoal">{b.label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-charcoal/50 max-w-lg mx-auto">We vet, train, and insure every team member. Fewer than one in twenty applicants make it through our hiring process, so you can rest easy knowing your home is in capable hands.</p>
        <div className="w-full text-center mt-12">
          <a href="#contact" className="inline-block bg-deep-green text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20">Book a Cleaning</a>
        </div>
      </div>
    </section>
  );
}
