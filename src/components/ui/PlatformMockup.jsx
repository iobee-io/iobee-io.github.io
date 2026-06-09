export function PlatformMockup() {
  const signals = [
    { label: "Vazao", value: "42.8 m3/h", tone: "bg-success" },
    { label: "Pressao", value: "3.1 bar", tone: "bg-success" },
    { label: "pH", value: "6.7", tone: "bg-warning" },
    { label: "Motor", value: "78% carga", tone: "bg-primary" },
  ];

  const recommendations = ["Verificar dosagem em regime instavel", "Priorizar Bomba ETA #02 no turno atual", "Comparar lote, carga e condutividade"];

  return (
    <div className="glass-card soft-glow relative overflow-hidden rounded-3xl border p-5 md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.26),transparent_44%)]" />
      <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60">Operational Decision Intelligence</p>
          <span className="badge badge-success badge-outline">RUNNING_STABLE</span>
        </div>

        <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {signals.map((signal) => (
              <div className="rounded-xl border border-base-content/12 bg-base-100/45 p-3" key={signal.label}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-base-content/65">{signal.label}</p>
                  <p className="font-display text-sm font-semibold">{signal.value}</p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-base-content/10">
                  <div className={`h-full w-2/3 rounded-full ${signal.tone}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/25 bg-base-100/45 p-4">
            <div className="grid gap-4 md:grid-cols-[0.8fr_1fr] md:items-center">
              <div className="relative flex min-h-48 items-center justify-center">
                <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-primary/55" viewBox="0 0 220 180">
                  <path d="M112 14 L178 52 L178 128 L112 166 L46 128 L46 52" fill="none" stroke="currentColor" strokeDasharray="110 18" strokeLinecap="round" strokeWidth="2" />
                  <path d="M30 126 C70 70 92 118 125 82 S168 72 194 38" fill="none" stroke="rgb(34 197 94)" strokeLinecap="round" strokeWidth="3" />
                  <path d="M30 146 C76 91 100 142 132 104 S172 99 194 66" fill="none" stroke="rgb(250 204 21)" strokeLinecap="round" strokeWidth="2" strokeDasharray="6 8" />
                  <circle cx="132" cy="104" fill="rgb(250 204 21)" r="4" />
                  <circle cx="171" cy="98" fill="rgb(251 146 60)" r="4" />
                </svg>
                <div className="relative text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">ICOS</p>
                  <p className="mt-2 font-display text-2xl font-semibold">baseline</p>
                  <p className="mt-1 text-xs text-base-content/62">contextual</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warning">Desvio detectado</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">DEGRADING</h3>
                <p className="mt-2 text-sm text-base-content/72">
                  pH e vazao sairam do padrao esperado para RUNNING_STABLE por 7 minutos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-accent/25 bg-accent/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Advisor Operacional</p>
          <ul className="mt-3 grid gap-2 md:grid-cols-3">
            {recommendations.map((recommendation) => (
              <li className="rounded-xl border border-base-content/12 bg-base-100/45 p-3 text-xs leading-relaxed text-base-content/75" key={recommendation}>
                {recommendation}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-4">
          {["FIELD", "EDGE", "HEXos", "ADVISOR"].map((layer, index) => (
            <div className="rounded-xl border border-base-content/12 bg-base-100/35 p-3" key={layer}>
              <p className="text-xs text-base-content/60">{layer}</p>
              <p className="mt-1 font-display text-sm">{index === 0 ? "sinais" : index === 1 ? "processo local" : index === 2 ? "contexto" : "decisao"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
