import { ServerStackIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { twinCards } from "../../data/siteContent";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [ServerStackIcon, Squares2X2Icon];
const images = ["/mockups/device-twin.svg", "/mockups/asset-twin.svg"];

export function TwinSection() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeading
        eyebrow="Digital Twin"
        title="Device Twin e Asset Twin trabalhando juntos"
        description="Conecte o estado eletrico do campo ao contexto operacional dos ativos para agir com velocidade e precisao."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {twinCards.map((card, index) => {
          const Icon = icons[index];

          return (
            <MotionReveal delay={index * 0.12} key={card.title}>
              <article className="glass-card rounded-3xl border p-5 md:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-primary/18 p-2 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-2xl font-semibold">{card.title}</h3>
                  </div>
                  <span className="badge badge-outline">Twin Layer</span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-base-content/12 bg-base-100/45">
                  <img alt={`${card.title} mockup`} className="h-52 w-full object-cover" loading="lazy" src={images[index]} />
                </div>

                <p className="mt-4 text-sm text-base-content/78 md:text-base">{card.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-base-content/75">
                  {card.bullets.map((bullet) => (
                    <li className="flex items-center gap-2" key={bullet}>
                      <span className="size-1.5 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}