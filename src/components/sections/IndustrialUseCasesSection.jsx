import {
  BeakerIcon,
  BoltIcon,
  BuildingOffice2Icon,
  Cog6ToothIcon,
  FireIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const useCases = [
  {
    title: "Dosagem quimica",
    text: "Detecta variacao de dosagem, consumo anormal, instabilidade de vazao e resposta fora do baseline.",
    icon: BeakerIcon,
  },
  {
    title: "Utilidades industriais",
    text: "Acompanha vapor, ar comprimido, energia, agua industrial e consumo especifico por contexto operacional.",
    icon: BoltIcon,
  },
  {
    title: "Bombas e motores",
    text: "Interpreta partida, parada, regime, degradacao, sobrecarga e recorrencia de instabilidade.",
    icon: Cog6ToothIcon,
  },
  {
    title: "ETA e ETE",
    text: "Relaciona pH, condutividade, nivel, vazao, bombas, dosagem e estabilidade do tratamento.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Papel e celulose",
    text: "Apoia processos continuos com alta variabilidade, utilidades criticas e necessidade de disponibilidade.",
    icon: FireIcon,
  },
  {
    title: "Processos variaveis",
    text: "Identifica padroes em operacoes que oscilam por carga, turno, materia-prima, clima ou demanda.",
    icon: WrenchScrewdriverIcon,
  },
];

export function IndustrialUseCasesSection() {
  return (
    <SectionContainer className="py-14 md:py-20" id="casos-de-uso-home">
      <SectionHeading
        eyebrow="Casos de uso"
        title="Onde variabilidade, estabilidade e disponibilidade impactam resultado."
        description="A Iobee foi desenhada para operacoes continuas, ativos criticos e processos nos quais pequenos desvios recorrentes viram perda operacional."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;

          return (
            <MotionReveal delay={index * 0.05} key={useCase.title}>
              <article className="industrial-card h-full rounded-2xl border p-5">
                <span className="inline-flex rounded-xl bg-secondary/15 p-2 text-secondary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-base-content/72">{useCase.text}</p>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
