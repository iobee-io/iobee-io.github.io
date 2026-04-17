export function GlassPanel({ className = "", children }) {
  return <div className={`glass-card rounded-2xl ${className}`}>{children}</div>;
}