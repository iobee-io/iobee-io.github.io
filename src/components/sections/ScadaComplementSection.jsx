import { CheckCircleIcon, CpuChipIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import { CTAButtons } from "../ui/CTAButtons";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const existingStack = ["PLCs continuam controlando o processo", "SCADA continua supervisionando a planta", "Historiadores continuam registrando serie historica"];
const iobeeLayer = [
  "Contexto operacional sobre sinais ja existentes",
  "Baseline por ativo, estado e condicao real",
  "Deteccao de desvios e degradacao antes da perda",
  "Advisor com recomendacoes e prioridades explicaveis",
];

export function ScadaComplementSection() {
  return (
    <SectionContainer className="py-14 md:py-20" id="scada">
      <div className="glass-card rounded-3xl border p-6 md:p-10">
        <SectionHeading
          eyebrow="Complementar, nao substituir"
          title="Não substituímos seu SCADA. Interpretamos o que ele não foi desenhado para decidir."
          description="A Iobee atua acima da automacao existente. PLCs, SCADA e historiadores seguem no papel em que sao fortes; a Iobee adiciona contexto operacional, baseline e orientacao de decisao."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <MotionReveal>
            <article className="h-full rounded-2xl border border-base-content/12 bg-base-100/40 p-6">
              <div className="flex items-center gap-3">
                <CpuChipIcon className="size-6 text-secondary" />
                <h3 className="font-display text-2xl font-semibold">O que permanece</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {existingStack.map((item) => (
                  <li className="flex items-start gap-3 text-sm text-base-content/76 md:text-base" key={item}>
                    <CheckCircleIcon className="mt-0.5 size-5 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <article className="h-full rounded-2xl border border-primary/30 bg-primary/10 p-6">
              <div className="flex items-center gap-3">
                <ServerStackIcon className="size-6 text-primary" />
                <h3 className="font-display text-2xl font-semibold">O que a Iobee adiciona</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {iobeeLayer.map((item) => (
                  <li className="flex items-start gap-3 text-sm text-base-content/78 md:text-base" key={item}>
                    <CheckCircleIcon className="mt-0.5 size-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </MotionReveal>
        </div>

        <MotionReveal className="mt-8">
          <CTAButtons
            context="scada_complement"
            primary="Agendar diagnóstico operacional"
            secondary="Ver casos de uso"
            secondaryTo="#casos-de-uso-home"
          />
        </MotionReveal>
      </div>
    </SectionContainer>
  );
}
