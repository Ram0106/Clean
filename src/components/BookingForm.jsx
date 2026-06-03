import { useState } from "react";

const initial = { name: "", phone: "", email: "", service: "", date: "", message: "" };

export default function BookingForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email || !form.service || !form.date) {
      alert("Please fill in all required fields.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mdajvrnj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          preferred_date: form.date,
          message: form.message || "No additional message",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initial);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-white flex justify-center">
      <div className="w-full max-w-3xl px-6">
        <div className="w-full text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Request a quote</h2>
          <p className="mt-3 text-charcoal/65">Fill out the form below and we'll get back to you within 24 hours with a custom quote.</p>
        </div>

        <div className="w-full bg-sage-50 rounded-2xl p-6 md:p-10 shadow-md">
          {status === "success" ? (
            <div className="text-center py-10">
              <svg className="w-16 h-16 text-deep-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="font-serif text-2xl text-charcoal mb-2">Thank you!</h3>
              <p className="text-charcoal/65 text-sm">Thank you! We will contact you within 24 hours.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 bg-deep-green text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all">Send another</button>
            </div>
          ) : (
            <>
              <div className="w-full grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Full Name</label>
                  <input type="text" value={form.name} onChange={update("name")} placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Phone Number</label>
                  <input type="tel" value={form.phone} onChange={update("phone")} placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Email Address</label>
                  <input type="email" value={form.email} onChange={update("email")} placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Service Type</label>
                  <select value={form.service} onChange={update("service")}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green transition-all appearance-none">
                    <option value="" disabled>Select a service</option>
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
                  <input type="date" value={form.date} onChange={update("date")}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green transition-all" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Message</label>
                  <textarea rows={3} value={form.message} onChange={update("message")} placeholder="Any special instructions or requests?"
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green transition-all resize-none" />
                </div>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-4">Something went wrong. Please try again or contact us on WhatsApp.</p>
              )}

              <button onClick={handleSubmit} disabled={status === "loading"}
                className="w-full mt-6 bg-deep-green text-white py-3.5 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20 disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "loading" ? "Sending..." : "Request a Quote"}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
