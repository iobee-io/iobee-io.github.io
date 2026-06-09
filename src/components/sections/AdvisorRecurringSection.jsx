import { ArrowPathIcon, ChartBarIcon, ClipboardDocumentCheckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { CTAButtons } from "../ui/CTAButtons";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const advisorFeatures = [
  "Monitoramento continuo de ativos e processos criticos",
  "Asset Twin e baseline contextual em evolucao",
  "Alertas inteligentes por estado operacional",
  "Classificacao de estabilidade, instabilidade e degradacao",
  "Reunioes de acompanhamento com achados e prioridades",
  "Evolucao dos modelos conforme novos padroes aparecem",
  "Suporte operacional baseado em dados",
];

const states = [
  { label: "OFFLINE", className: "border-base-content/25 bg-base-content/8 text-base-content/70" },
  { label: "STOPPED", className: "border-base-content/25 bg-base-content/8 text-base-content/70" },
  { label: "STARTING", className: "border-info/35 bg-info/10 text-info" },
  { label: "RUNNING_STABLE", className: "border-success/40 bg-success/10 text-success" },
  { label: "RUNNING_UNSTABLE", className: "border-warning/45 bg-warning/10 text-warning" },
  { label: "DEGRADING", className: "border-orange-400/45 bg-orange-400/10 text-orange-300" },
  { label: "CRITICAL", className: "border-error/45 bg-error/10 text-error" },
  { label: "MAINTENANCE", className: "border-primary/40 bg-primary/10 text-primary" },
];

const cadence = [
  { title: "Observar", text: "Sinais, eventos e estados sao acompanhados continuamente.", icon: ChartBarIcon },
  { title: "Interpretar", text: "ICOS compara comportamento atual contra baseline contextual.", icon: ArrowPathIcon },
  { title: "Recomendar", text: "Advisor prioriza acoes, alertas e temas para acompanhamento.", icon: ClipboardDocumentCheckIcon },
  { title: "Governar", text: "Guard preserva acesso, auditoria e operacao segura.", icon: ShieldCheckIcon },
];

export function AdvisorRecurringSection() {
  return (
    <SectionContainer className="py-14 md:py-20" id="advisor">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Recorrencia"
            title="Advisor Operacional Recorrente para manter a operação estável."
            description="Depois do diagnostico, a Iobee evolui para um acompanhamento mensal: baseline continuo, alertas contextualizados, reuniões de prioridade e evolução dos modelos operacionais."
          />
          <MotionReveal className="mt-8">
            <ul className="glass-card rounded-2xl border p-6">
              {advisorFeatures.map((feature, index) => (
                <li
                  className={`flex items-start gap-3 py-3 text-sm text-base-content/78 md:text-base ${
                    index !== advisorFeatures.length - 1 ? "border-b border-base-content/10" : ""
                  }`}
                  key={feature}
                >
                  <span className="mt-2 size-2 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>

        <MotionReveal delay={0.08}>
          <div className="glass-card relative overflow-hidden rounded-3xl border p-5 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_44%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Estados operacionais</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {states.map((state) => (
                  <span className={`rounded-xl border px-3 py-2 text-[11px] font-semibold tracking-[0.12em] ${state.className}`} key={state.label}>
                    {state.label}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                {cadence.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="rounded-2xl border border-base-content/12 bg-base-100/40 p-4" key={item.title}>
                      <div className="flex items-start gap-3">
                        <span className="rounded-xl bg-primary/15 p-2 text-primary">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm text-base-content/70">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6">
                <CTAButtons
                  context="advisor_recurring"
                  primary="Agendar diagnóstico operacional"
                  secondary="Ver arquitetura edge"
                  secondaryTo="#arquitetura"
                />
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </SectionContainer>
  );
}
