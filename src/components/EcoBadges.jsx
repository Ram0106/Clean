const badges = [
  { icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z", label: "Green Seal Certified" },
  { icon: "M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z", label: "Non-Toxic Products" },
  { icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", label: "Insured & Bonded" },
];

export default function EcoBadges() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-sage-50 flex justify-center">
      <div className="w-full max-w-6xl px-6">
        <div className="w-full text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Trust & transparency</h2>
          <p className="mt-3 text-charcoal/65 max-w-xl mx-auto">Every cleaner is background-checked, insured, and trained in our eco-friendly protocols. We accept only the top 4% of applicants to ensure every visit meets our standard.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2">
              <svg className="w-10 h-10 text-deep-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
              </svg>
              <span className="text-sm font-medium text-charcoal">{b.label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-charcoal/50 max-w-lg mx-auto">We vet, train, and insure every team member. Fewer than one in twenty applicants make it through our hiring process — so you can rest easy knowing your home is in capable hands.</p>
      </div>
    </section>
  );
}
