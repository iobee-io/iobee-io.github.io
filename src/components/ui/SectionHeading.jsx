import { MotionReveal } from "./MotionReveal";

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <MotionReveal>
      <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        {eyebrow ? (
          <p className="mb-4 inline-flex rounded-full border border-base-content/20 bg-base-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">{title}</h2>
        {description ? <p className="mt-4 text-base text-base-content/75 md:text-lg">{description}</p> : null}
      </div>
    </MotionReveal>
  );
}