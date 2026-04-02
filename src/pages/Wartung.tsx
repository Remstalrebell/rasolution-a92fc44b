const Wartung = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3864110/pexels-photo-3864110.jpeg')",
          opacity: 0.2,
          filter: "blur(20px) saturate(1.4)",
          transform: "scale(1.1)",
        }}
      />

      {/* Glass card */}
      <div className="relative z-10 mx-4 max-w-lg w-full rounded-2xl border border-white/10 p-10 text-center backdrop-blur-xl" style={{ background: "hsl(var(--hero-bg) / 0.6)" }}>
        <div className="text-5xl mb-6">🏁</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "hsl(var(--hero-foreground))" }}>
          Boxenstopp für Rasolution.
        </h1>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: "hsl(var(--hero-muted))" }}>
          Wir führen gerade ein System-Update durch, um Ihr Fuhrparkmanagement noch effizienter zu machen. Wir sind in Kürze wieder für Sie da.
        </p>
      </div>
    </div>
  );
};

export default Wartung;
