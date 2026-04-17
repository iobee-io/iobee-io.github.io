export function FloatingBadge({ className = "", title, value, tone = "primary" }) {
  const toneClasses = {
    primary: "border-primary/40",
    success: "border-success/40",
    warning: "border-warning/40",
    info: "border-info/40",
  };

  return (
    <div className={`glass-card rounded-xl border px-3 py-2 shadow-lg ${toneClasses[tone] || toneClasses.primary} ${className}`}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-base-content/55">{title}</p>
      <p className="font-display text-sm font-semibold text-base-content">{value}</p>
    </div>
  );
}
