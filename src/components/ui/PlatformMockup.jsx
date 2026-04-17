export function PlatformMockup() {
  return (
    <div className="glass-card soft-glow relative overflow-hidden rounded-3xl border p-5 md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(114,91,255,0.3),transparent_44%)]" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60">Operations Control</p>
          <span className="badge badge-success badge-outline">Live</span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="glass-card rounded-xl p-3 md:col-span-2">
            <p className="text-xs text-base-content/65">Disponibilidade global</p>
            <p className="mt-1 font-display text-2xl font-semibold">99,92%</p>
            <div className="mt-3 h-24 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/15" />
          </div>
          <div className="glass-card rounded-xl p-3">
            <p className="text-xs text-base-content/65">Alertas ativos</p>
            <p className="mt-1 font-display text-2xl font-semibold text-warning">12</p>
            <ul className="mt-3 space-y-2 text-xs text-base-content/70">
              <li>Compressor #04</li>
              <li>ETA Bomba 2</li>
              <li>Linha CIP</li>
            </ul>
          </div>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          <div className="glass-card rounded-xl p-3">
            <p className="text-xs text-base-content/60">Sites</p>
            <p className="mt-1 font-display text-lg">18</p>
          </div>
          <div className="glass-card rounded-xl p-3">
            <p className="text-xs text-base-content/60">Assets</p>
            <p className="mt-1 font-display text-lg">1.264</p>
          </div>
          <div className="glass-card rounded-xl p-3">
            <p className="text-xs text-base-content/60">Mensageria</p>
            <p className="mt-1 font-display text-lg">0 perda</p>
          </div>
          <div className="glass-card rounded-xl p-3">
            <p className="text-xs text-base-content/60">Uptime</p>
            <p className="mt-1 font-display text-lg">30 dias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
