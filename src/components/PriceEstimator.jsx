import { useState } from "react";

const baseRates = { regular: { min: 80, max: 120 }, deep: { min: 150, max: 250 }, move: { min: 200, max: 400 } };
const bedroomCost = { "1": { min: 0, max: 0 }, "2": { min: 25, max: 40 }, "3": { min: 50, max: 80 }, "4": { min: 75, max: 110 }, "5": { min: 100, max: 150 } };
const bathroomCost = { "1": { min: 0, max: 0 }, "2": { min: 20, max: 35 }, "3": { min: 40, max: 60 }, "4": { min: 60, max: 90 } };
const freqMultiplier = { once: 1, weekly: 0.85, biweekly: 0.9, monthly: 1 };

export default function PriceEstimator() {
  const [beds, setBeds] = useState("2");
  const [baths, setBaths] = useState("1");
  const [service, setService] = useState("regular");
  const [freq, setFreq] = useState("once");

  const base = baseRates[service];
  const bed = bedroomCost[beds] || bedroomCost["1"];
  const bath = bathroomCost[baths] || bathroomCost["1"];
  const mult = freqMultiplier[freq] || 1;
  const minP = Math.round((base.min + bed.min + bath.min) * mult);
  const maxP = Math.round((base.max + bed.max + bath.max) * mult);

  return (
    <section className="w-full py-14 md:py-18 bg-sage-50 flex justify-center">
      <div className="w-full max-w-3xl px-6">
        <div className="w-full text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">Estimate your price</h2>
          <p className="mt-2 text-sm text-charcoal/65">Adjust the options below for a live estimate.</p>
        </div>
        <div className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-md border border-sage-100">
          <div className="w-full grid sm:grid-cols-2 gap-x-6 gap-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Bedrooms</label>
              <select value={beds} onChange={(e) => setBeds(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green">
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Bathrooms</label>
              <select value={baths} onChange={(e) => setBaths(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green">
                <option value="1">1 Bathroom</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Service Type</label>
              <select value={service} onChange={(e) => setService(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green">
                <option value="regular">Regular Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="move">Move-In / Move-Out</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/80 mb-1.5">Frequency</label>
              <select value={freq} onChange={(e) => setFreq(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-deep-green/30 focus:border-deep-green">
                <option value="once">One-time</option>
                <option value="weekly">Weekly (-15%)</option>
                <option value="biweekly">Bi-weekly (-10%)</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <div className="w-full mt-6 pt-6 border-t border-sage-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-sm text-charcoal/50">Estimated total:</span>
              <span className="ml-2 font-serif text-2xl text-deep-green">${minP} &ndash; ${maxP}</span>
            </div>
            <a href="#contact" className="bg-deep-green text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-deep-green/90 transition-all shadow-lg shadow-deep-green/20 shrink-0">Get Exact Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}
