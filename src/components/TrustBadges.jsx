const badges = [
  { icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z", label: "4.9 Stars", sub: "200+ reviews" },
  { icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", label: "BBB Accredited" },
  { icon: "M12 3a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v1h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v1a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-1H8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2v-1H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2Z", label: "Insured & Bonded" },
  { icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", label: "Satisfaction Guaranteed" },
];

export default function TrustBadges() {
  return (
    <div className="w-full bg-sage-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-4">
        <div className="w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-sage-100">
              <svg className="w-4 h-4 text-deep-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
              </svg>
              <span className="text-xs font-medium text-deep-green whitespace-nowrap">{b.label}</span>
              {b.sub && <span className="text-xs text-charcoal/50 whitespace-nowrap">{b.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
