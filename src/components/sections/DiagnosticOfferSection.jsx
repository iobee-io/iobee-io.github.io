import {
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { CTAButtons } from "../ui/CTAButtons";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const diagnosticSteps = [
  {
    title: "Conexao simplificada",
    text: "Selecionamos sinais criticos e conectamos fontes industriais com baixo atrito.",
    icon: CpuChipIcon,
  },
  {
    title: "Baseline operacional",
    text: "Criamos referencia estatistica por ativo, estado e contexto real de operacao.",
    icon: ChartBarIcon,
  },
  {
    title: "Instabilidade e padroes",
    text: "Classificamos desvios, recorrencias e sinais de degradacao antes da perda.",
    icon: ExclamationTriangleIcon,
  },
  {
    title: "Relatorio executivo",
    text: "Entregamos achados, recomendacoes iniciais e mapa de continuidade recorrente.",
    icon: ClipboardDocumentCheckIcon,
  },
];

const deliverables = [
  "Captura de sinais criticos",
  "Classificacao de estados operacionais",
  "Deteccao de instabilidade",
  "Identificacao de padroes recorrentes",
  "Relatorio executivo para diretoria e gerencia",
  "Recomendacoes operacionais iniciais",
];

export function DiagnosticOfferSection() {
  return (
    <SectionContainer className="py-14 md:py-20" id="diagnostico">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Oferta principal"
            title="Diagnóstico Operacional Iobee — 30 dias."
            description="Um projeto curto, vendavel e objetivo para provar onde a operacao perde estabilidade, onde a variabilidade aparece e quais sinais ja avisam antes da perda."
          />
          <MotionReveal className="mt-8">
            <div className="soft-glow rounded-3xl border border-primary/35 bg-primary/12 p-6">
              <div className="flex items-start gap-4">
                <span className="rounded-2xl bg-primary/18 p-3 text-primary">
                  <WrenchScrewdriverIcon className="size-7" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Entrada comercial clara</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">Comece pelo baseline, nao pela promessa.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-base-content/76">
                    Em 30 dias, a Iobee identifica comportamento normal, instabilidade e recorrencia em ativos ou processos criticos. O objetivo e gerar decisao inicial sem depender de modelos opacos.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <CTAButtons
                  context="diagnostic_offer"
                  primary="Agendar diagnóstico operacional"
                  secondary="Falar com especialista"
                  secondaryTo="/contato"
                />
              </div>
            </div>
          </MotionReveal>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {diagnosticSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <MotionReveal delay={index * 0.06} key={step.title}>
                  <article className="industrial-card h-full rounded-2xl border p-5">
                    <Icon className="size-6 text-primary" />
                    <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-base-content/72">{step.text}</p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>

          <MotionReveal>
            <div className="glass-card rounded-2xl border p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Entregaveis do diagnostico</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {deliverables.map((deliverable) => (
                  <li className="flex items-start gap-3 text-sm text-base-content/78" key={deliverable}>
                    <span className="mt-1.5 size-2 rounded-full bg-accent" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        </div>
      </div>
    </SectionContainer>
  );
}
