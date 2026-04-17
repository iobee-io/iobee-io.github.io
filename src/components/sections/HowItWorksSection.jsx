import { steps } from "../../data/siteContent";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

export function HowItWorksSection() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeading
        eyebrow="Como funciona"
        title="Da captura ao plano de acao em poucos passos."
        description="Estruture um fluxo confiavel de decisao operacional com dados vivos e regras inteligentes."
      />
      <MotionReveal className="mt-8">
        <ul className="steps steps-vertical steps-primary lg:steps-horizontal">
          {steps.map((step) => (
            <li className="step max-w-[220px] !text-left" key={step}>
              <span className="mt-3 block text-sm text-base-content/78">{step}</span>
            </li>
          ))}
        </ul>
      </MotionReveal>
    </SectionContainer>
  );
}