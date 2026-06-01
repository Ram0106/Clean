import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-sage-100">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl flex items-center justify-between h-16 md:h-20 px-6 lg:px-8">
          <a href="#" className="font-serif text-xl md:text-2xl text-deep-green tracking-tight">
            Evergreen Clean
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-charcoal/80 hover:text-deep-green transition-colors">{l.label}</a>
            ))}
            <a href="#contact" className="bg-deep-green text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-deep-green/90 transition-all">Book Now</a>
          </div>

          <button className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-charcoal transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-sage-100"
          >
            <div className="w-full flex justify-center">
              <div className="w-full max-w-7xl px-6 pb-6 pt-2">
                <div className="flex flex-col gap-4">
                  {links.map((l) => (
                    <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-charcoal/80 hover:text-deep-green transition-colors">{l.label}</a>
                  ))}
                  <a href="#contact" onClick={() => setOpen(false)} className="bg-deep-green text-white text-center text-sm font-medium px-5 py-2.5 rounded-full">Book Now</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
