import { useState } from "react";

const faqs = [
  {
    q: "Do you bring your own supplies?",
    a: "Yes, every cleaning team arrives fully equipped with all necessary supplies and equipment. We use professional-grade vacuums, microfiber cloths, mops, and our signature line of eco-friendly cleaning solutions. You don't need to provide anything unless you have a specific product you'd like us to use on a particular surface.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every member of our team undergoes a comprehensive background check before joining Evergreen Clean. We also conduct in-person interviews, skills assessments, and a rigorous training program. Only the top 4% of applicants make it through our hiring process, ensuring you receive service from trustworthy, skilled professionals.",
  },
  {
    q: "What if I'm not satisfied with the clean?",
    a: "Your satisfaction is guaranteed. If any area doesn't meet your expectations, let us know within 24 hours of your cleaning and we'll send a team back to re-clean those spots at no additional charge. No questions asked. We don't consider the job done until you're happy.",
  },
  {
    q: "How do I reschedule or cancel?",
    a: "You can reschedule or cancel up to 24 hours before your appointment with no penalty. Simply log into your account on our website or text us at the number in your confirmation email. For last-minute cancellations within 24 hours, a small fee may apply. We understand life happens, so we keep our policy as flexible as possible.",
  },
  {
    q: "Do you offer recurring bookings?",
    a: "Yes, recurring bookings are our most popular option. You can choose weekly, bi-weekly, or monthly visits. Recurring clients enjoy a 10% discount on every session, priority scheduling, and the same trusted cleaner assigned to your home each time. You can pause, skip, or cancel recurring bookings at any time with no commitment.",
  },
  {
    q: "Is your service pet and child safe?",
    a: "Yes, all of our cleaning products are plant-based, non-toxic, and free from harsh chemicals like bleach, ammonia, and phthalates. They're perfectly safe around children, pets, and anyone with sensitivities or allergies. Our team also takes care to keep doors closed and products secured during the cleaning.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full py-20 md:py-28 bg-white flex justify-center">
      <div className="w-full max-w-3xl px-6">
        <div className="w-full text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Frequently asked questions</h2>
          <p className="mt-3 text-charcoal/65">Everything you need to know before your first cleaning.</p>
        </div>
        <div className="w-full flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="w-full bg-sage-50 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
              >
                <span className="font-serif text-lg text-charcoal pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-deep-green shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-charcoal/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-center mt-12">
          <a href="#contact" className="inline-block bg-deep-green text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20">Request a Free Quote</a>
        </div>
      </div>
    </section>
  );
}
