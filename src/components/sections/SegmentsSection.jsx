import {
  BeakerIcon,
  BoltIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  FireIcon,
  GlobeAmericasIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const segmentCards = [
  { title: "Industria", icon: Cog6ToothIcon, description: "Linhas de producao, OEE, paradas e perdas." },
  { title: "HVAC", icon: FireIcon, description: "Conforto, eficiencia energetica e disponibilidade." },
  { title: "Utilities", icon: BoltIcon, description: "Energia, vapor, ar comprimido e consumo critico." },
  { title: "Agronegocio", icon: GlobeAmericasIcon, description: "Operacao dispersa, clima e logistica conectada." },
  { title: "OEM", icon: WrenchScrewdriverIcon, description: "White-label para canais e servitizacao." },
  { title: "Facilities", icon: BuildingOffice2Icon, description: "Multiplos predios com visao centralizada." },
  { title: "Agua e saneamento", icon: BeakerIcon, description: "ETA, ETE e distribuicao em tempo real." },
  { title: "Alimentos e bebidas", icon: BuildingStorefrontIcon, description: "Rastreabilidade e confiabilidade operacional." },
];

export function SegmentsSection() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeading
        eyebrow="Segmentos"
        title="Uma arquitetura unica para operacoes industriais diferentes"
        description="Configure uma vez e replique padroes de monitoramento para unidades, clientes e geografias diferentes."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {segmentCards.map((segment, index) => {
          const Icon = segment.icon;

          return (
            <MotionReveal delay={index * 0.04} key={segment.title}>
              <article className="glass-card h-full rounded-2xl border p-5 transition-transform duration-300 hover:-translate-y-1">
                <span className="inline-flex rounded-xl bg-secondary/18 p-2 text-secondary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{segment.title}</h3>
                <p className="mt-2 text-sm text-base-content/72">{segment.description}</p>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}