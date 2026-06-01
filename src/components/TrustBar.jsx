const stats = [
  { value: "12,000+", label: "Homes Cleaned" },
  { value: "8 Years", label: "In Business" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "Under 24h", label: "Response Time" },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-deep-green py-10 md:py-14">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-6">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center ${i < stats.length - 1 ? "md:border-r border-sage-700/50" : ""}`}>
                <div className="text-2xl md:text-3xl font-serif text-white">{s.value}</div>
                <div className="text-sm text-sage-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
