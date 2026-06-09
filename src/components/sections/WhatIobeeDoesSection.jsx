import {
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import { steps } from "../../data/siteContent";
import { CTAButtons } from "../ui/CTAButtons";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const capabilities = [
  {
    title: "Captura sinais industriais",
    text: "Bees conectam sensores, CLPs, medidores e equipamentos para trazer vazao, pressao, temperatura, nivel, pH, condutividade, motores e consumo.",
    icon: SignalIcon,
  },
  {
    title: "Contextualiza ativos",
    text: "Device Twins e Asset Twins conectam cada sinal ao ativo, processo, criticidade, local e condicao operacional.",
    icon: CpuChipIcon,
  },
  {
    title: "Cria baseline operacional",
    text: "A plataforma aprende a faixa esperada por estado, carga, turno e contexto usando estatisticas e regras explicaveis.",
    icon: ChartBarIcon,
  },
  {
    title: "Classifica estados",
    text: "A operacao deixa de ser apenas online ou offline e passa a ser interpretada como partida, estabilidade, instabilidade, degradacao ou criticidade.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Detecta desvios",
    text: "Padroes recorrentes e instabilidades aparecem antes da perda operacional, reduzindo reacao tardia e ruido de alarme.",
    icon: ExclamationTriangleIcon,
  },
  {
    title: "Orienta decisao",
    text: "O Advisor Operacional transforma eventos em recomendacoes, prioridade e acompanhamento tecnico baseado em dados.",
    icon: ClipboardDocumentCheckIcon,
  },
];

export function WhatIobeeDoesSection() {
  return (
    <SectionContainer className="py-14 md:py-20" id="como-funciona">
      <SectionHeading
        eyebrow="O que a Iobee faz"
        title="Da telemetria bruta ao contexto operacional acionavel."
        description="A Iobee nao adiciona mais uma tela ao processo. Ela organiza sinais, estados e baseline para revelar degradacao operacional antes que ela vire perda."
      />

      <MotionReveal className="mt-8">
        <div className="glass-card rounded-3xl border p-4 md:p-6">
          <div className="flex flex-wrap items-center gap-2">
            {steps.map((step, index) => (
              <div className="flex items-center gap-2" key={step}>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-base-content/82">
                  {step}
                </span>
                {index !== steps.length - 1 ? <span className="hidden text-primary/70 sm:inline">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;

          return (
            <MotionReveal delay={index * 0.05} key={capability.title}>
              <article className="industrial-card h-full rounded-2xl border p-5">
                <span className="inline-flex rounded-xl bg-primary/15 p-2 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-base-content/74">{capability.text}</p>
              </article>
            </MotionReveal>
          );
        })}
      </div>

      <MotionReveal className="mt-8">
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5 md:flex md:items-center md:justify-between md:gap-8">
          <p className="max-w-3xl text-sm leading-relaxed text-base-content/80 md:text-base">
            O valor inicial vem de baseline contextual, estatisticas operacionais e regras explicaveis. IA avancada entra depois, quando a base operacional ja esta confiavel.
          </p>
          <div className="mt-5 shrink-0 md:mt-0">
            <CTAButtons
              context="what_iobee_does"
              primary="Agendar diagnóstico operacional"
              secondary="Ver diagnóstico de 30 dias"
              secondaryTo="#diagnostico"
            />
          </div>
        </div>
      </MotionReveal>
    </SectionContainer>
  );
}
