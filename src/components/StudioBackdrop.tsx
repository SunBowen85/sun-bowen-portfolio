export function StudioBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(79,70,229,0.14),transparent_30%),linear-gradient(180deg,#020617_0%,#030712_42%,#050816_100%)]" />
      <div className="bg-grid-fine absolute inset-0 opacity-[0.18]" />
      <div className="noise-texture absolute inset-0 opacity-[0.07]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-200/[0.04] to-transparent" />
      <div className="absolute bottom-[-20rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-3xl" />
    </div>
  );
}
