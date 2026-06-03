import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  { stars: 5, quote: "I came home to a kitchen that actually sparkled. The team was punctual, thorough, and incredibly respectful of our space. I've already booked them for next month.", name: "Sarah Mitchell", location: "Portland, OR" },
  { stars: 5, quote: "After our renovation, dust was everywhere. Evergreen Clean made it disappear in a single visit. The before-and-after was night and day. Highly recommend.", name: "James Walker", location: "Seattle, WA" },
  { stars: 5, quote: "We've used three different cleaning services over the years, and none compare to the consistency and attention to detail Evergreen delivers every single time.", name: "Linda Chen", location: "San Francisco, CA" },
];

const initialBg = ["bg-deep-green", "bg-sage-600", "bg-deep-green"];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, bg }) {
  return (
    <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center text-white font-medium text-lg shrink-0`}>
      {name.charAt(0)}
    </div>
  );
}

function Card({ review, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index === 1 ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-md border border-sage-100"
    >
      <Stars />
      <p className="text-sm text-charcoal/70 leading-relaxed mb-6">"{review.quote}"</p>
      <div className="flex items-center gap-3">
        <Avatar name={review.name} bg={initialBg[index]} />
        <div>
          <div className="font-medium text-charcoal text-sm">{review.name}</div>
          <div className="text-xs text-charcoal/50">{review.location}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-28 bg-white flex justify-center">
      <div className="w-full max-w-6xl px-6">
        <div className="w-full text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What our clients say</h2>
          <p className="mt-3 text-charcoal/65">Real feedback from real homeowners.</p>
        </div>
        <div className="w-full grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => <Card key={r.name} review={r} index={i} />)}
        </div>
        <div className="w-full text-center mt-12">
          <a href="#contact" className="inline-block bg-deep-green text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20">Book a Cleaning</a>
        </div>
      </div>
    </section>
  );
}
