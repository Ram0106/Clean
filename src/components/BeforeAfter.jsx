import { useRef, useState, useCallback, useEffect } from "react";

export default function BeforeAfter() {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e) => { if (isDragging.current) updatePosition(e.clientX); };
  const onTouchStart = () => { isDragging.current = true; };
  const onTouchEnd = () => { isDragging.current = false; };
  const onTouchMove = (e) => { if (isDragging.current) updatePosition(e.touches[0].clientX); };

  useEffect(() => {
    const onUp = () => { isDragging.current = false; };
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <section className="w-full py-20 md:py-28 bg-white flex justify-center">
      <div className="w-full max-w-5xl px-6">
        <div className="w-full text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">See the difference</h2>
          <p className="mt-3 text-charcoal/65 max-w-lg mx-auto">Our work speaks for itself. Every job is approached with precision and care.</p>
        </div>
        <div
          ref={containerRef}
          className="w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-sage-100 shadow-xl relative"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80')" }}>
            <div className="absolute top-3 right-3 bg-deep-green/90 text-white text-xs font-medium px-3 py-1 rounded-full">After</div>
          </div>
          <div className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')",
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            }}>
            <div className="absolute top-3 left-3 bg-charcoal/80 text-white text-xs font-medium px-3 py-1 rounded-full">Before</div>
          </div>
          <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
