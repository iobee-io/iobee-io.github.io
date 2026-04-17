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
        eyebrow="Desafio de mercado"
        title="O problema nao e falta de dados. E falta do dado certo na hora certa."
        description="A iobee V3 transforma monitoramento reativo em operacao orientada por contexto, velocidade e prioridade de negocio."
      />
      <MotionReveal className="mt-8 grid gap-4 lg:grid-cols-2">
        <ComparisonColumn items={beforeItems} title="Antes" tone="error" />
        <ComparisonColumn items={afterItems} title="Depois" tone="success" />
      </MotionReveal>
    </SectionContainer>
  );
}