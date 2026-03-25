const TachoLoader = () => (
  <div className="flex flex-col items-center justify-center gap-4 py-12">
    <div className="relative w-24 h-12 overflow-hidden">
      {/* Arc */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 border-t-[3px] border-l-[3px] border-r-[3px] border-bronze/40 rounded-t-full" />
      {/* Tick marks */}
      {[...Array(7)].map((_, i) => {
        const angle = -120 + i * 40;
        return (
          <div
            key={i}
            className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-muted-foreground/40 origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${angle}deg)`, transformOrigin: "bottom center", bottom: "0", height: "8px" }}
          />
        );
      })}
      {/* Needle */}
      <div
        className="tacho-needle absolute bottom-0 left-1/2 w-0.5 h-9 rounded-t-full bg-primary origin-bottom"
        style={{ transform: "translateX(-50%) rotate(-120deg)" }}
      />
      {/* Center dot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-bronze tacho-glow" />
    </div>
    <span className="text-xs text-muted-foreground tracking-wider uppercase">Wird geladen…</span>
  </div>
);

export default TachoLoader;
