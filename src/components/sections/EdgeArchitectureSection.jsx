import { CloudIcon, CpuChipIcon, ServerStackIcon, ShieldCheckIcon, SignalIcon } from "@heroicons/react/24/outline";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const layers = [
  {
    title: "Field / Chao de fabrica",
    subtitle: "Ativos, maquinas e sensores",
    text: "Bees capturam sinais de CLPs, RTUs, medidores, sensores, acionamentos, qualidade e utilidades.",
    icon: SignalIcon,
    tone: "text-warning border-warning/35 bg-warning/10",
  },
  {
    title: "Edge industrial",
    subtitle: "Hive, Core e Guard",
    text: "Processamento local, conectividade controlada, buffer resiliente e operacao proxima ao processo mesmo com internet instavel.",
    icon: CpuChipIcon,
    tone: "text-primary border-primary/35 bg-primary/10",
  },
  {
    title: "Cloud / Inteligencia operacional",
    subtitle: "HEXos, ICOS e Advisor",
    text: "Dados, ativos e usuarios sao organizados para interpretar comportamento, detectar desvios e orientar decisoes.",
    icon: CloudIcon,
    tone: "text-accent border-accent/35 bg-accent/10",
  },
];

const modules = [
  "Bees capturam sinais industriais.",
  "Hive processa e conecta localmente.",
  "Guard protege conectividade, acesso e operacao.",
  "HEXos organiza dados, ativos e usuarios.",
  "ICOS interpreta comportamento operacional.",
  "Advisor recomenda acoes.",
];

export function EdgeArchitectureSection() {
  return (
    <SectionContainer className="py-14 md:py-20" id="arquitetura">
      <SectionHeading
        eyebrow="Arquitetura edge-native"
        title="Campo, edge e cloud trabalhando como infraestrutura operacional critica."
        description="A Iobee complementa a arquitetura existente com uma camada segura de interpretacao operacional, sem deslocar automacao industrial ja instalada."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {layers.map((layer, index) => {
          const Icon = layer.icon;

          return (
            <MotionReveal delay={index * 0.07} key={layer.title}>
              <article className={`relative h-full overflow-hidden rounded-3xl border p-6 ${layer.tone}`}>
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-current opacity-10 blur-3xl" />
                <Icon className="relative size-7" />
                <p className="relative mt-5 text-xs font-semibold uppercase tracking-[0.18em] opacity-75">{layer.subtitle}</p>
                <h3 className="relative mt-2 font-display text-2xl font-semibold text-base-content">{layer.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-base-content/72">{layer.text}</p>
              </article>
            </MotionReveal>
          );
        })}
      </div>

      <MotionReveal className="mt-6">
        <div className="glass-card rounded-3xl border p-5 md:p-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-base-content/82">
            <ServerStackIcon className="size-5 text-primary" />
            Campo → Bees → Hive / Edge → Guard → HEXos → ICOS → Advisor
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <div className="rounded-2xl border border-base-content/12 bg-base-100/40 p-4 text-sm text-base-content/75" key={module}>
                {module}
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className="mt-6">
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheckIcon className="mt-0.5 size-6 shrink-0 text-accent" />
            <p className="text-sm leading-relaxed text-base-content/78 md:text-base">
              A arquitetura foi pensada para clientes enterprise: processamento local, governanca, auditoria, isolamento de tenants e rastreabilidade do campo ate a recomendacao operacional.
            </p>
          </div>
        </div>
      </MotionReveal>
    </SectionContainer>
  );
}
