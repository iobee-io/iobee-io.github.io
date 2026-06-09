import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { afterItems, beforeItems } from "../../data/siteContent";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

function ComparisonColumn({ title, items, tone = "error" }) {
  const isPositive = tone === "success";

  return (
    <div className="glass-card rounded-2xl border p-6">
      <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${isPositive ? "bg-success/18 text-success" : "bg-error/18 text-error"}`}>
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex items-start gap-3 text-sm text-base-content/78 md:text-base" key={item}>
            {isPositive ? <CheckCircleIcon className="mt-0.5 size-5 text-success" /> : <XCircleIcon className="mt-0.5 size-5 text-error" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProblemSection() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeading
        eyebrow="O problema"
        title="A indústria já tem dados. O que falta é contexto para decidir antes da perda."
        description="Telas passivas mostram o retrovisor operacional. Desvio operacional tem padrao, e quase toda perda avisa antes em forma de variabilidade, instabilidade ou degradacao."
      />
      <MotionReveal className="mt-8 grid gap-4 lg:grid-cols-2">
        <ComparisonColumn items={beforeItems} title="Sem contexto" tone="error" />
        <ComparisonColumn items={afterItems} title="Com Iobee" tone="success" />
      </MotionReveal>
    </SectionContainer>
  );
}
