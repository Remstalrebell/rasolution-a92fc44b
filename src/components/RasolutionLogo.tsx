const RasolutionLogo = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Three connected nodes forming a dynamic network */}
    <circle cx="8" cy="22" r="3.5" fill="currentColor" opacity="0.9" />
    <circle cx="24" cy="22" r="3.5" fill="currentColor" opacity="0.9" />
    <circle cx="16" cy="8" r="4" fill="hsl(var(--primary))" />
    {/* Connecting arcs */}
    <path d="M11 20.5 Q16 14 21 20.5" stroke="hsl(var(--primary))" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M9.5 19 Q10 12 16 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M22.5 19 Q22 12 16 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5" />
  </svg>
);

export default RasolutionLogo;
