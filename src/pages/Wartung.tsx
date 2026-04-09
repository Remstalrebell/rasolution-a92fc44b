import { Link } from "react-router-dom";

const Wartung = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[hsl(var(--hero-bg))]">
      {/* Main content centered */}
      <div className="flex-1 flex items-center justify-center">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3864110/pexels-photo-3864110.jpeg')",
          opacity: 0.15,
          filter: "blur(24px) saturate(1.2)",
          transform: "scale(1.15)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 pointer-events-none" />

      {/* Glass card */}
      <div className="relative z-10 mx-4 max-w-xl w-full rounded-3xl border border-white/[0.08] p-12 md:p-16 text-center backdrop-blur-2xl bg-white/[0.04] shadow-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
          <span className="text-3xl">🏁</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-white">
          Hier entsteht Rasolution.
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-white/60 max-w-md mx-auto">
          Wir optimieren gerade unsere Systeme für Sie.
        </p>
        <div className="mt-8 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
};

export default Wartung;
