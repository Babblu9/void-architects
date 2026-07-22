const WORDS = [
  "Hanamkonda, Warangal.",
  "Madhapur, Hyderabad.",
];

// Full-bleed running band. Two identical tracks → seamless -50% loop.
export default function Marquee() {
  const track = (
    <div className="marquee-track flex shrink-0 items-center">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="display px-8 text-[clamp(2rem,4vw,3.4rem)] font-medium">
            {w}
          </span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-line bg-ink py-6 text-paper md:py-8">
      <div className="marquee">
        {track}
        {track}
      </div>
    </div>
  );
}
