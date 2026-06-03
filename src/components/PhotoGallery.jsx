import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  "https://images.unsplash.com/photo-1582562128784-a96ef13c0858?w=600&q=80",
  "https://images.unsplash.com/photo-1615874959474-d4d52e1dd1e2?w=600&q=80",
];

export default function PhotoGallery() {
  const [active, setActive] = useState(null);

  const prev = () => setActive((a) => (a === 0 ? images.length - 1 : a - 1));
  const next = () => setActive((a) => (a === images.length - 1 ? 0 : a + 1));

  return (
    <section className="w-full py-20 md:py-28 bg-sage-50 flex justify-center">
      <div className="w-full max-w-6xl px-6">
        <div className="w-full text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Our work</h2>
          <p className="mt-3 text-charcoal/65">A glimpse of the homes and spaces we've had the privilege to clean.</p>
        </div>
        <div className="w-full columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((url, i) => (
            <button key={i} onClick={() => setActive(i)} className="w-full break-inside-avoid rounded-2xl overflow-hidden group relative cursor-pointer block text-left">
              <img src={url} alt={`Cleaning result ${i + 1}`} className="w-full h-auto object-cover rounded-2xl" loading="lazy" />
              <div className="absolute inset-0 bg-deep-green/0 group-hover:bg-deep-green/40 transition-all duration-300 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          </button>
          <img src={images[active]} alt={`Cleaning result ${active + 1}`} className="max-w-full max-h-full object-contain rounded-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          </button>
          <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}
    </section>
  );
}
