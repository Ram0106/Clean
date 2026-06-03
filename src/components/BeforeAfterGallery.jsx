import { useState, useRef, useCallback, useEffect } from "react";

const rooms = [
  {
    name: "Kitchen",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=80&fit=crop",
  },
  {
    name: "Bathroom",
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1620626011761-996317702519?w=900&q=80&fit=crop",
  },
  {
    name: "Living Room",
    before: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&fit=crop",
  },
];

function Img({ src, alt, className, style, onError }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      crossOrigin="anonymous"
      onError={onError}
      className={className}
      style={{ objectFit: "cover", width: "100%", height: "100%", display: "block", ...style }}
    />
  );
}

function Slider({ room }) {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => (isDragging.current = true);
  const onMouseUp = () => (isDragging.current = false);
  const onMouseMove = (e) => { if (isDragging.current) updatePosition(e.clientX); };
  const onTouchStart = () => (isDragging.current = true);
  const onTouchEnd = () => (isDragging.current = false);
  const onTouchMove = (e) => { if (isDragging.current) updatePosition(e.touches[0].clientX); };

  useEffect(() => {
    const onUp = () => (isDragging.current = false);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => { window.removeEventListener("mouseup", onUp); window.removeEventListener("touchend", onUp); };
  }, []);

  const [beforeErr, setBeforeErr] = useState(false);
  const [afterErr, setAfterErr] = useState(false);

  return (
    <div ref={containerRef}
      className="w-full h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl relative"
      style={{ backgroundColor: "#e8f0e9" }}
      onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
    >
      {!afterErr ? (
        <Img src={room.after} alt="After" onError={() => setAfterErr(true)}
          className="absolute inset-0"
        />
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: "#e8f0e9" }} />
      )}
      <div className="absolute top-3 right-3 bg-deep-green/90 text-white text-xs font-medium px-3 py-1 rounded-full z-10">After</div>

      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        {!beforeErr ? (
          <Img src={room.before} alt="Before" onError={() => setBeforeErr(true)}
            className="absolute inset-0"
          />
        ) : (
          <div className="absolute inset-0" style={{ backgroundColor: "#e8f0e9" }} />
        )}
        <div className="absolute top-3 left-3 bg-charcoal/80 text-white text-xs font-medium px-3 py-1 rounded-full z-10">Before</div>
      </div>

      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow" style={{ left: `${sliderPos}%`, zIndex: 5 }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  const switchTab = (i) => {
    if (i === active) return;
    setFade(false);
    setTimeout(() => { setActive(i); setFade(true); }, 150);
  };

  return (
    <section className="w-full py-20 md:py-28 bg-white flex justify-center">
      <div className="w-full max-w-[900px] px-6">
        <div className="w-full text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">See the difference</h2>
          <p className="mt-3 text-charcoal/65 max-w-lg mx-auto">Our work speaks for itself. Every job is approached with precision and care.</p>
        </div>
        <div className="w-full flex items-center justify-center gap-2 mb-8">
          {rooms.map((r, i) => (
            <button key={r.name} onClick={() => switchTab(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                i === active ? "bg-deep-green text-white shadow-md" : "bg-sage-50 text-charcoal/70 hover:bg-sage-100"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
        <div className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          <Slider key={active + "-" + rooms[active].name} room={rooms[active]} />
        </div>
        <div className="w-full text-center mt-10">
          <a href="#contact" className="inline-block bg-deep-green text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20">Book a Cleaning</a>
        </div>
      </div>
    </section>
  );
}
