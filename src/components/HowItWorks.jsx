const steps = [
  {
    num: "1", icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    title: "Book Online",
    desc: "Tell us your address, pick a service, and choose a time that works for you. It takes less than two minutes.",
  },
  {
    num: "2", icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
    title: "We Clean",
    desc: "A vetted pro arrives with all supplies and equipment. We follow your checklist and handle the rest.",
  },
  {
    num: "3", icon: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z",
    title: "You Relax",
    desc: "Walk into a spotless home and enjoy your space. If anything isn't right, we'll make it right, no questions asked.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 md:py-28 bg-sage-50 flex justify-center">
      <div className="w-full max-w-5xl px-6">
        <div className="w-full text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">How it works</h2>
          <p className="mt-3 text-charcoal/65">Three simple steps to a cleaner space.</p>
        </div>
        <div className="w-full grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-sage-200 flex items-center justify-center mx-auto mb-5 text-lg font-serif text-deep-green">
                {s.num}
              </div>
              <svg className="w-8 h-8 text-deep-green mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
              </svg>
              <h3 className="font-serif text-xl text-charcoal mb-2">{s.title}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">{s.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-sage-200" />
              )}
            </div>
          ))}
        </div>
        <div className="w-full text-center mt-12">
          <a href="#contact" className="inline-block bg-deep-green text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20">Book a Cleaning</a>
        </div>
      </div>
    </section>
  );
}
