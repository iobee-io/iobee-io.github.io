import { ArrowTrendingUpIcon, BuildingLibraryIcon, CloudIcon } from "@heroicons/react/24/outline";
import { scaleFeatures } from "../../data/siteContent";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const scaleCards = [
  {
    title: "Multi-site",
    icon: BuildingLibraryIcon,
    text: "Visao consolidada de plantas com drill-down por unidade.",
  },
  {
    title: "Arquitetura resiliente",
    icon: CloudIcon,
    text: "Alta disponibilidade com mensageria confiavel e distribuida.",
  },
  {
    title: "Escala progressiva",
    icon: ArrowTrendingUpIcon,
    text: "Escale de 10 sensores para milhares de ativos sem refazer a base.",
  },
];

export function ScaleSection() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeading
        eyebrow="Escalabilidade"
        title="Comece com 10 sensores. Escale para milhares de ativos."
        description="A iobee V3 foi desenhada para crescer junto com sua operacao, mantendo desempenho, confiabilidade e governanca."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {scaleCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <MotionReveal delay={index * 0.08} key={card.title}>
              <article className="glass-card rounded-2xl border p-5">
                <span className="inline-flex rounded-xl bg-info/18 p-2 text-info">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-base-content/74">{card.text}</p>
              </article>
            </MotionReveal>
          );
        })}
      </div>

      <MotionReveal className="mt-6">
        <ul className="glass-card rounded-2xl border p-6">
          {scaleFeatures.map((feature, index) => (
            <li
              className={`py-2 text-sm text-base-content/78 md:text-base ${
                index !== scaleFeatures.length - 1 ? "border-b border-base-content/10" : ""
              }`}
              key={feature}
            >
              {feature}
            </li>
          ))}
        </ul>
      </MotionReveal>
    </SectionContainer>
  );
}