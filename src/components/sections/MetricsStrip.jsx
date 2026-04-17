import { metrics } from "../../data/siteContent";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";

export function MetricsStrip() {
  return (
    <SectionContainer className="pb-14 md:pb-20">
      <MotionReveal>
        <div className="glass-card grid gap-3 rounded-2xl border p-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {metrics.map((metric) => (
            <div className="rounded-xl border border-base-content/12 bg-base-100/35 px-4 py-3" key={metric.label}>
              <p className="text-[11px] uppercase tracking-[0.16em] text-base-content/58">{metric.label}</p>
              <p className="mt-1 font-display text-lg font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>
      </MotionReveal>
    </SectionContainer>
  );
}