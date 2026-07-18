// Scroll-reveal wrapper. Pure CSS (see globals.css `.reveal`) driven by
// animation-timeline. No JS, no observer — content is visible by default and
// can never get stuck hidden. Server component (no "use client").
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number; // accepted for call-site compatibility; stagger handled in CSS
  as?: React.ElementType;
}) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}
