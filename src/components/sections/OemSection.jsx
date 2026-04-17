import { oemFeatures } from "../../data/siteContent";
import { CTAButtons } from "../ui/CTAButtons";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function OemSection() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <div className="glass-card rounded-3xl border p-6 md:p-10">
        <SectionHeading
          eyebrow="OEM / White-label"
          title="Sua marca. Sua plataforma. Seus clientes."
          description="Transforme monitoramento industrial em produto digital recorrente com governanca, escala e isolamento real de dados."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <MotionReveal>
            <img
              alt="Mockup White-label"
              className="h-72 w-full rounded-2xl border border-base-content/12 object-cover"
              loading="lazy"
              src="/mockups/white-label.svg"
            />
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <ul className="space-y-3">
              {oemFeatures.map((feature) => (
                <li className="flex items-center gap-3 text-sm text-base-content/78 md:text-base" key={feature}>
                  <span className="size-2 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButtons
                context="oem_section"
                primary="Conhecer modelo OEM"
                primaryTo="/oem"
                secondary="Falar com especialista"
                secondaryTo="/contato"
              />
            </div>
          </MotionReveal>
        </div>
      </div>
    </SectionContainer>
  );
}
