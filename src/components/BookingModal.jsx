import { useState, useEffect } from "react";

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("form");
  const [form, setForm] = useState({ service: "", date: "", time: "", name: "", phone: "" });

  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('a[href="#contact"]');
      if (!link) return;
      const text = link.textContent.toLowerCase();
      if (text.includes("book") || text.includes("now")) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(true);
        setStep("form");
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleConfirm = () => {
    if (!form.service || !form.date || !form.time || !form.name || !form.phone) return;
    setStep("success");
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8 animate-fade-in-up max-h-[90vh] overflow-y-auto">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center text-charcoal/50 hover:text-charcoal hover:bg-sage-100 transition-all cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {step === "form" && (
              <div>
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl text-charcoal">Book a Cleaning</h3>
                  <p className="text-sm text-charcoal/65 mt-1">Fill in the details and we'll take care of the rest.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Service</label>
                    <select value={form.service} onChange={update("service")} className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green">
                      <option value="" disabled>Select service</option>
                      <option value="regular">Regular Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move-In / Move-Out</option>
                      <option value="office">Office Cleaning</option>
                      <option value="construction">Post-Construction</option>
                      <option value="eco">Eco-Friendly Cleaning</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Preferred Date</label>
                    <input type="date" value={form.date} onChange={update("date")} className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Preferred Time</label>
                    <div className="w-full grid grid-cols-3 gap-2">
                      {[
                        { value: "morning", label: "Morning", sub: "8am-12pm" },
                        { value: "afternoon", label: "Afternoon", sub: "12pm-4pm" },
                        { value: "evening", label: "Evening", sub: "4pm-8pm" },
                      ].map((t) => (
                        <button key={t.value} type="button" onClick={() => setForm((p) => ({ ...p, time: t.value }))}
                          className={`px-3 py-2.5 rounded-xl border text-center text-sm transition-all cursor-pointer ${
                            form.time === t.value
                              ? "border-deep-green bg-deep-green/5 text-deep-green font-medium"
                              : "border-sage-200 text-charcoal/70 hover:border-sage-300"
                          }`}
                        >
                          <div>{t.label}</div>
                          <div className="text-[10px] opacity-60">{t.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Your Name</label>
                      <input type="text" value={form.name} onChange={update("name")} placeholder="Jane Doe" className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Phone</label>
                      <input type="tel" value={form.phone} onChange={update("phone")} placeholder="(555) 123-4567" className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green" />
                    </div>
                  </div>
                  <button onClick={handleConfirm} disabled={!form.service || !form.date || !form.time || !form.name || !form.phone}
                    className="w-full mt-2 bg-deep-green text-white py-3 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">Your booking is confirmed</h3>
                <p className="text-sm text-charcoal/65 max-w-xs mx-auto">We will call you within 2 hours to confirm your appointment.</p>
                <button onClick={() => setOpen(false)} className="mt-8 bg-deep-green text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20 cursor-pointer">
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
