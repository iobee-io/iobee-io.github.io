import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { MotionReveal } from "../components/ui/MotionReveal";
import { SectionContainer } from "../components/ui/SectionContainer";
import { trackEvent } from "../lib/analytics";

const architectureFlow = [
  {
    name: "Bees",
    tagline: "Camada de campo e captura de origem",
    description: "Operadores de campo digitais que conectam o mundo fisico a arquitetura iobee.",
    icon: "bees",
    linkTo: "#arquitetura-iobee",
    proof: ["Sensores, CLPs, maquinas, inversores, medidores", "Edge gateways, APIs, Node-RED e protocolos industriais", "Sem Bees nao existe entrada de dados"],
  },
  {
    name: "Pollen",
    tagline: "Dado industrial em movimento continuo",
    description: "Sinais, eventos e estados trafegando em tempo real entre fontes, processos e regras.",
    icon: "pollen",
    linkTo: "#arquitetura-iobee",
    proof: ["Telemetria, variaveis, alarmes, eventos e payloads", "Dados energeticos, logs, comandos e historico operacional", "Materia-prima para inteligencia operacional"],
  },
  {
    name: "Hive",
    tagline: "Nucleo operacional da plataforma",
    description: "Infraestrutura que recebe, processa, persiste, distribui e orquestra todo o Pollen.",
    icon: "hive",
    linkTo: "#arquitetura-camadas",
    emphasis: true,
    proof: ["Ingestao, roteamento, normalizacao e persistencia", "APIs, regras, alarmes, automacao e gestao de dispositivos", "Multi-tenant e white-label com escalabilidade enterprise"],
  },
  {
    name: "ICOS",
    tagline: "Inteligencia operacional contextual",
    description: "Motor de cognicao que transforma dados brutos em diagnostico, predicao e recomendacao.",
    icon: "icos",
    linkTo: "#digital-twin-operacional",
    emphasis: true,
    proof: ["Device Twin, Asset Twin e relacao entre ativos", "Correlacao de eventos, causa raiz, IA e insights", "Antecipa o que pode acontecer e indica o que deve ser feito"],
  },
];

const architectureLayers = [
  {
    id: "cloud",
    name: "Cloud Layer",
    label: "Escala e consumo global",
    icon: "cloud",
    items: ["Aplicacoes operacionais", "APIs corporativas", "Integracao com ERP e MES", "Workflows de decisao", "Visao multi-site", "Estrategia global"],
  },
  {
    id: "intelligence",
    name: "Intelligence Layer",
    label: "Analise e previsao",
    icon: "intelligence",
    featured: "ICOS",
    items: ["ICOS", "Asset Twin", "Device Twin", "Analytics", "IA", "Insights", "Manutencao preditiva", "Eficiencia operacional"],
  },
  {
    id: "core",
    name: "Core Layer",
    label: "Nucleo transacional",
    icon: "core",
    featured: "Hive",
    items: ["Hive", "Event processing", "Rules engine", "Alarmes", "Multi-tenant", "White-label", "APIs", "Device management", "Storage"],
  },
  {
    id: "edge",
    name: "Edge Layer",
    label: "Conectividade e protocolos",
    icon: "edge",
    items: ["Node-RED", "APIs", "MQTT", "OPC-UA", "Modbus", "BACnet", "LoRaWAN", "Drivers proprietarios"],
  },
  {
    id: "field",
    name: "Field Layer",
    label: "Origem da operacao",
    icon: "field",
    items: ["Sensores", "CLPs", "Maquinas", "Inversores", "Medidores", "Dispositivos IoT", "Edge gateways"],
  },
];

const guardTransversal = {
  title: "Guard transversal",
  subtitle: "Protege todas as camadas simultaneamente",
  items: ["RBAC", "Permissoes e usuarios", "SSO", "Auditoria e logs", "Compliance", "Criptografia", "Rastreabilidade de acoes", "Governanca multiempresa"],
};

const twinCapabilities = [
  "Device Twin com estado vivo por dispositivo",
  "Asset Twin com relacao entre ativos e processos",
  "Historico operacional para diagnostico de causa raiz",
  "Alarmes inteligentes com contexto da operacao",
  "IA aplicada para detectar desvios e predizer falhas",
];

const twinAssets = [
  { name: "Compressor", signal: "Vibracao + pressao + consumo em contexto" },
  { name: "Caldeira", signal: "Carga termica, eficiencia e risco operacional" },
  { name: "Camara fria", signal: "Integridade termica e cadeia de produto" },
  { name: "Linha de producao", signal: "Paradas, gargalos e throughput real" },
  { name: "Subestacao", signal: "Qualidade de energia e continuidade critica" },
  { name: "Gerador", signal: "Prontidao de backup e saude do equipamento" },
];

const platformCapabilities = [
  "Command center operacional contextual",
  "Relatorios executivos e tecnicos",
  "Alertas e notificacoes multicanal",
  "Multi-tenant",
  "White-label",
  "APIs abertas",
  "Controle remoto",
  "Gestao de dispositivos",
  "Historico e tendencias",
  "Regras e automacoes",
  "Usuarios e permissoes",
  "Aplicativo responsivo",
  "Integracao com ERPs e MES",
  "IA e recomendacoes",
  "Inteligencia energetica",
  "Telemetria e rastreabilidade",
];

const comparison = {
  generic: [
    "Apenas dashboards",
    "Integracoes limitadas",
    "Sem contexto operacional",
    "Sem digital twin",
    "Sem governanca forte",
    "Escalabilidade limitada",
  ],
  iobee: [
    "Dados contextualizados",
    "Digital Twin",
    "Inteligencia operacional",
    "Seguranca e auditoria",
    "Multi-site e multi-tenant",
    "Arquitetura modular e escalavel",
    "White-label",
    "APIs e integracao total",
  ],
};

const strategicPillars = [
  {
    name: "Hive",
    label: "Infraestrutura operacional",
    details: "Centraliza e orquestra dados industriais para operacao global multi-site com alta confiabilidade.",
  },
  {
    name: "ICOS",
    label: "Cognicao operacional",
    details: "Transforma sinais dispersos em entendimento acionavel, predicao de falhas e priorizacao de resposta.",
  },
  {
    name: "Guard",
    label: "Governanca e protecao",
    details: "Garante seguranca, rastreabilidade e compliance em toda a jornada de dados, usuarios e comandos.",
  },
];

const inferenceExample =
  "O compressor da linha 3 opera acima da media ha 6 horas, com aumento simultaneo de consumo e vibracao, indicando possivel falha iminente de rolamento.";

function trackPlatformEvent(eventName, payload = {}) {
  trackEvent(eventName, { context: "platform_page", ...payload });
}

function LineIcon({ kind, className = "size-5" }) {
  const baseProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24",
  };

  switch (kind) {
    case "bees":
      return (
        <svg {...baseProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 4V8M12 16V20M4 12H8M16 12H20M6.8 6.8L9.6 9.6M14.4 14.4L17.2 17.2M17.2 6.8L14.4 9.6M9.6 14.4L6.8 17.2" />
        </svg>
      );
    case "pollen":
      return (
        <svg {...baseProps}>
          <path d="M4 12H20" />
          <path d="M7 12C7 9.8 8.8 8 11 8H13C15.2 8 17 9.8 17 12C17 14.2 15.2 16 13 16H11C8.8 16 7 14.2 7 12Z" />
          <circle cx="7" cy="12" r="1.2" />
          <circle cx="17" cy="12" r="1.2" />
        </svg>
      );
    case "hive":
      return (
        <svg {...baseProps}>
          <path d="M7 5H17L21 12L17 19H7L3 12L7 5Z" />
          <path d="M7 5L12 12L17 5M3 12H21M7 19L12 12L17 19" />
        </svg>
      );
    case "icos":
      return (
        <svg {...baseProps}>
          <rect height="16" rx="3" width="16" x="4" y="4" />
          <path d="M7 15L10 12L13 14L17 9" />
          <circle cx="7" cy="15" r="1" />
          <circle cx="10" cy="12" r="1" />
          <circle cx="13" cy="14" r="1" />
          <circle cx="17" cy="9" r="1" />
        </svg>
      );
    case "guard":
      return (
        <svg {...baseProps}>
          <path d="M12 3L19 6V11C19 15.5 16.2 18.7 12 21C7.8 18.7 5 15.5 5 11V6L12 3Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      );
    case "field":
      return (
        <svg {...baseProps}>
          <rect height="5" rx="1.5" width="5" x="3.5" y="4" />
          <rect height="5" rx="1.5" width="5" x="15.5" y="4" />
          <rect height="5" rx="1.5" width="5" x="3.5" y="15" />
          <rect height="5" rx="1.5" width="5" x="15.5" y="15" />
          <path d="M8.5 6.5H15.5M8.5 17.5H15.5M6 9V15M18 9V15" />
        </svg>
      );
    case "edge":
      return (
        <svg {...baseProps}>
          <path d="M4 9C7 5 17 5 20 9M7 12C9 10 15 10 17 12M10 15C11 14 13 14 14 15" />
          <circle cx="12" cy="18" r="2.2" />
        </svg>
      );
    case "core":
      return (
        <svg {...baseProps}>
          <rect height="14" rx="2.2" width="14" x="5" y="5" />
          <path d="M9 9H15M9 12H15M9 15H13M3 9H5M3 15H5M19 9H21M19 15H21" />
        </svg>
      );
    case "intelligence":
      return (
        <svg {...baseProps}>
          <path d="M12 3L18 7V13C18 16.8 15.8 19.7 12 21C8.2 19.7 6 16.8 6 13V7L12 3Z" />
          <path d="M9.3 11.5C9.3 10 10.5 8.8 12 8.8C13.5 8.8 14.7 10 14.7 11.5C14.7 13 13.5 14.2 12 14.2C10.5 14.2 9.3 13 9.3 11.5Z" />
          <path d="M12 14.2V17.2" />
        </svg>
      );
    case "security":
      return (
        <svg {...baseProps}>
          <path d="M12 3C16 3 19 6 19 10V12C19 16.8 16 20.4 12 22C8 20.4 5 16.8 5 12V10C5 6 8 3 12 3Z" />
          <path d="M9.5 12.2L11.2 13.9L14.7 10.4" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...baseProps}>
          <path d="M7.2 17.5H17.3C19.3 17.5 21 15.9 21 13.8C21 11.8 19.5 10.2 17.6 10.1C17.1 7.7 15 6 12.5 6C10.3 6 8.3 7.4 7.5 9.4C5.5 9.5 4 11.1 4 13C4 15 5.6 16.6 7.6 16.6" />
        </svg>
      );
    default:
      return (
        <svg {...baseProps}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export default function PlatformPage() {
  const breadcrumbItems = [{ name: "Plataforma", path: "/plataforma" }];

  return (
    <>
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description="Arquitetura industrial da iobee para conectar campo, contexto e inteligencia operacional em escala enterprise."
        path="/plataforma"
        title="Arquitetura iobee para operacoes industriais"
      />

      <SectionContainer className="pt-12 pb-16 md:pt-18 md:pb-24">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid gap-10 lg:grid-cols-[1.04fr_1fr] lg:items-center">
          <MotionReveal className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Plataforma operacional industrial
            </p>
            <h1 className="section-title font-display text-4xl font-semibold md:text-5xl lg:text-6xl">
              Da coleta de dados a inteligencia operacional em tempo real
            </h1>
            <p className="mt-5 max-w-2xl text-base text-base-content/78 md:text-lg">
              A iobee conecta equipamentos, dados, ativos, pessoas e decisoes em uma unica arquitetura industrial escalavel.
            </p>
            <p className="mt-3 max-w-2xl text-sm font-medium uppercase tracking-[0.14em] text-base-content/58">
              Nao e apenas monitoramento: e orquestracao + cognicao + governanca operacional
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="btn btn-primary soft-glow"
                onClick={() => trackPlatformEvent("cta_agendar_demonstracao_click", { section: "platform_hero" })}
                to="/contato"
              >
                Agendar demonstracao
                <ArrowRightIcon className="size-4" />
              </Link>
              <a
                className="btn btn-outline"
                href="#arquitetura-iobee"
                onClick={() => trackPlatformEvent("cta_explorar_arquitetura_click", { section: "platform_hero" })}
              >
                Explorar arquitetura
              </a>
            </div>
          </MotionReveal>

          <MotionReveal className="relative" delay={0.08}>
            <div className="platform-hero-shell glass-card soft-glow relative overflow-hidden rounded-3xl border p-4 md:p-5">
              <div className="platform-hero-bg" />
              <div className="relative grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
                <div className="platform-perspective-shot rounded-2xl border border-base-content/12 bg-base-100/40 p-3">
                  <img alt="Mockup da visao operacional da plataforma iobee" className="h-full w-full rounded-xl object-cover" loading="lazy" src="/mockups/device-twin.svg" />
                </div>
                <div className="space-y-4">
                  <div className="platform-perspective-shot platform-perspective-shot--tilted rounded-2xl border border-base-content/12 bg-base-100/40 p-3">
                    <img alt="Mockup da camada de inteligencia operacional da iobee" className="h-full w-full rounded-xl object-cover" loading="lazy" src="/mockups/asset-twin.svg" />
                  </div>
                  <div className="rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary/85">Pipeline proprietario</p>
                    <p className="mt-1 font-display text-lg text-base-content">Bees -&gt; Pollen -&gt; Hive -&gt; ICOS</p>
                    <p className="mt-1 text-xs text-base-content/66">Guard transversal protegendo todas as camadas e fluxos.</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal className="mt-9" delay={0.1}>
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="platform-flow-line hidden lg:block" />
            {architectureFlow.map((item, index) => (
              <motion.div
                className={`platform-flow-pill relative rounded-xl border px-3 py-3 ${item.emphasis ? "border-primary/45 bg-primary/12" : "border-base-content/18 bg-base-100/58"}`}
                key={item.name}
                transition={{ duration: 0.25, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-base-content/65">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-display text-lg">{item.name}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="platform-guard-band mt-3 rounded-xl border border-accent/45 bg-accent/10 px-4 py-3"
            transition={{ duration: 0.24, ease: "easeOut" }}
            whileHover={{ y: -3 }}
          >
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="inline-flex items-center rounded-full border border-accent/42 bg-accent/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Guard transversal
              </span>
              <span className="text-base-content/78">RBAC, auditoria, permissao, SSO, compliance e criptografia protegendo Bees, Pollen, Hive e ICOS.</span>
            </div>
          </motion.div>
        </MotionReveal>
      </SectionContainer>

      <SectionContainer className="py-14 md:py-22" id="arquitetura-iobee">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-base-content/20 bg-base-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Como a arquitetura iobee funciona
            </p>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">Uma cadeia operacional modular, conectada e inteligente</h2>
            <p className="mt-4 text-base text-base-content/75 md:text-lg">
              Cada modulo foi desenhado para atuar de forma independente e orquestrada, garantindo robustez tecnica e escalabilidade global.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-9 grid gap-4 lg:grid-cols-4">
          {architectureFlow.map((module, index) => (
            <MotionReveal delay={0.05 * index} key={module.name}>
              <motion.article
                className={`platform-module-card group h-full rounded-2xl border p-5 ${module.emphasis ? "border-primary/45 bg-primary/10" : "border-base-content/16 bg-base-100/62"}`}
                transition={{ duration: 0.28, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className={`rounded-xl border p-2.5 ${module.emphasis ? "border-primary/45 bg-primary/14 text-primary" : "border-base-content/18 bg-base-100/72 text-secondary"}`}>
                    <LineIcon kind={module.icon} />
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${module.emphasis ? "border-primary/36 text-primary" : "border-base-content/18 text-base-content/60"}`}>
                    Modulo
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold">{module.name}</h3>
                <p className="mt-2 text-sm font-medium text-base-content/72">{module.tagline}</p>
                <p className="mt-3 text-sm text-base-content/76">{module.description}</p>
                <ul className="mt-4 space-y-2">
                  {module.proof.map((line) => (
                    <li className="flex items-start gap-2 text-xs text-base-content/72" key={line}>
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary/80" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  href={module.linkTo}
                  onClick={() => trackPlatformEvent("cta_saiba_mais_modulo_click", { module: module.name })}
                >
                  Saiba mais
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-4">
          <motion.article
            className="platform-guard-band rounded-2xl border border-accent/45 bg-accent/10 p-4 md:p-5"
            transition={{ duration: 0.24, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-accent/42 bg-accent/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Guard transversal
                </span>
                <p className="text-sm text-base-content/78">Governanca e seguranca atravessando todos os modulos da arquitetura.</p>
              </div>
            </div>
          </motion.article>
        </MotionReveal>
      </SectionContainer>

      <SectionContainer className="py-8 md:py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          {strategicPillars.map((pillar, index) => (
            <MotionReveal delay={0.06 * index} key={pillar.name}>
              <motion.article
                className="platform-pillar-card h-full rounded-2xl border border-primary/34 bg-primary/12 p-5"
                transition={{ duration: 0.28, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/84">Conceito estrategico</p>
                <h3 className="mt-2 font-display text-3xl font-semibold">{pillar.name}</h3>
                <p className="mt-2 text-sm font-medium text-base-content/78">{pillar.label}</p>
                <p className="mt-3 text-sm text-base-content/75">{pillar.details}</p>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-14 md:py-22" id="arquitetura-camadas">
        <MotionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-base-content/20 bg-base-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Arquitetura visual da plataforma
              </p>
              <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
                Arquitetura em camadas para operacoes enterprise
              </h2>
              <p className="mt-4 text-base text-base-content/75 md:text-lg">
                Cloud no topo e Field na base para evidenciar a subida de dados. O Guard atua de forma transversal protegendo todo o ecossistema.
              </p>
            </div>
            <Link
              className="btn btn-outline w-full sm:w-auto"
              onClick={() => trackPlatformEvent("cta_falar_integracao_click", { section: "layers" })}
              to="/contato"
            >
              Falar com especialista de integracao
            </Link>
          </div>
        </MotionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.16fr_0.84fr]">
          <MotionReveal>
            <div className="platform-layers-visual glass-card overflow-hidden rounded-3xl border">
              <img
                alt="Diagrama visual da arquitetura enterprise em camadas da iobee"
                className="block h-auto w-full"
                loading="lazy"
                src="/mockups/enterprise-layer-stack.svg"
              />
            </div>
          </MotionReveal>

          <div className="relative space-y-4 md:pl-8">
            <div className="platform-layer-rail hidden md:block" />
            {architectureLayers.map((layer, index) => (
              <MotionReveal delay={0.06 * index} key={layer.id}>
                <motion.article
                  className={`platform-layer-card rounded-2xl border p-5 md:p-6 ${layer.featured ? "border-primary/42 bg-primary/10" : "border-base-content/16 bg-base-100/62"}`}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-xl border p-2.5 ${layer.featured ? "border-primary/40 bg-primary/14 text-primary" : "border-base-content/18 bg-base-100/72 text-secondary"}`}>
                        <LineIcon kind={layer.icon} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-base-content/60">{layer.label}</p>
                        <h3 className="font-display text-2xl font-semibold">{layer.name}</h3>
                      </div>
                    </div>
                    {layer.featured ? (
                      <span className="inline-flex rounded-full border border-primary/36 bg-primary/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        Destaque: {layer.featured}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span className="platform-chip rounded-full border border-base-content/16 bg-base-100/62 px-3 py-1 text-xs text-base-content/78" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </MotionReveal>
            ))}

            <MotionReveal delay={0.32}>
              <motion.article
                className="platform-guard-transversal rounded-2xl border border-accent/45 bg-accent/10 p-5 md:p-6"
                transition={{ duration: 0.28, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-accent/38 bg-accent/14 p-2.5 text-accent">
                      <LineIcon kind="security" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/82">Transversal</p>
                      <h3 className="font-display text-2xl font-semibold">{guardTransversal.title}</h3>
                    </div>
                  </div>
                  <span className="inline-flex rounded-full border border-accent/38 bg-accent/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Protege todas as camadas
                  </span>
                </div>
                <p className="mt-3 text-sm text-base-content/78">{guardTransversal.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guardTransversal.items.map((item) => (
                    <span className="rounded-full border border-accent/32 bg-base-100/64 px-3 py-1 text-xs text-base-content/82" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            </MotionReveal>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-14 md:py-22" id="digital-twin-operacional">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-base-content/20 bg-base-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Digital Twin e inteligencia operacional
            </p>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
              Nao basta coletar dados. E preciso entender contexto.
            </h2>
            <p className="mt-4 text-base text-base-content/75 md:text-lg">
              O ICOS transforma sinais isolados em entendimento operacional, conectando estado de dispositivos ao comportamento real dos ativos.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
          <MotionReveal>
            <article className="glass-card rounded-3xl border p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold">Mapa de contexto ICOS</h3>
                <span className="rounded-full border border-primary/36 bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  ICOS Engine
                </span>
              </div>

              <div className="platform-context-map rounded-2xl border border-base-content/14 bg-base-100/56 p-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-base-content/14 bg-base-100/62 p-3">
                    <p className="text-xs uppercase tracking-[0.16em] text-base-content/58">Device Twin</p>
                    <p className="mt-2 text-sm text-base-content/78">Status, telemetria, conectividade e eventos em tempo real.</p>
                  </div>
                  <div className="rounded-xl border border-base-content/14 bg-base-100/62 p-3">
                    <p className="text-xs uppercase tracking-[0.16em] text-base-content/58">Asset Twin</p>
                    <p className="mt-2 text-sm text-base-content/78">Relacao entre ativos, processo, risco e performance operacional.</p>
                  </div>
                </div>
                <div className="mt-3 rounded-xl border border-primary/28 bg-primary/10 p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-primary/82">Saida operacional</p>
                  <p className="mt-1 text-sm text-base-content/80">Diagnostico + predicao + recomendacao de acao orientada por contexto.</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-primary/30 bg-primary/12 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/82">Exemplo de inferencia ICOS</p>
                <p className="mt-2 text-sm text-base-content/84">"{inferenceExample}"</p>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-base-content/78 md:grid-cols-2">
                {twinCapabilities.map((capability) => (
                  <li className="flex items-start gap-2" key={capability}>
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <article className="glass-card rounded-3xl border p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold">Exemplos de aplicacao</h3>
                <span className="rounded-full border border-base-content/20 px-3 py-1 text-xs uppercase tracking-[0.16em] text-base-content/62">
                  Ativos modelados
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {twinAssets.map((asset, index) => (
                  <motion.div
                    className="rounded-xl border border-base-content/14 bg-base-100/58 p-3"
                    key={asset.name}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-base-content/58">Ativo {String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-1 font-display text-xl">{asset.name}</p>
                    <p className="mt-2 text-sm text-base-content/74">{asset.signal}</p>
                  </motion.div>
                ))}
              </div>
            </article>
          </MotionReveal>
        </div>
      </SectionContainer>

      <SectionContainer className="py-14 md:py-22">
        <MotionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-base-content/20 bg-base-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Capacidades da plataforma
              </p>
              <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
                Capacidades nativas para operar, orquestrar e escalar
              </h2>
              <p className="mt-4 text-base text-base-content/75 md:text-lg">
                Uma stack unica para evoluir da telemetria para inteligencia operacional com consistencia de governanca.
              </p>
            </div>
            <Link
              className="btn btn-outline w-full sm:w-auto"
              onClick={() => trackPlatformEvent("cta_ver_segmentos_click", { section: "capabilities" })}
              to="/segmentos"
            >
              Ver aplicacoes por segmento
            </Link>
          </div>
        </MotionReveal>

        <div className="mt-9 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {platformCapabilities.map((capability, index) => {
            const isLarge = index === 2 || index === 6 || index === 10 || index === 14;

            return (
              <MotionReveal delay={0.02 * index} key={capability}>
                <motion.article
                  className={`h-full rounded-2xl border bg-base-100/62 p-4 ${isLarge ? "md:p-5 xl:col-span-2" : ""}`}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-base-content/56">Capability</p>
                  <h3 className={`mt-2 font-display ${isLarge ? "text-2xl" : "text-xl"}`}>{capability}</h3>
                </motion.article>
              </MotionReveal>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer className="py-14 md:py-22">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-base-content/20 bg-base-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Diferenciais da iobee
            </p>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">Plataformas genericas vs Arquitetura iobee</h2>
            <p className="mt-4 text-base text-base-content/75 md:text-lg">
              A diferenca esta na capacidade de transformar sinais brutos em contexto operacional governavel e acionavel.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-9 grid gap-4 lg:grid-cols-2">
          <MotionReveal>
            <article className="h-full rounded-3xl border border-error/26 bg-error/8 p-5 md:p-6">
              <h3 className="font-display text-2xl font-semibold">Plataformas genericas</h3>
              <ul className="mt-5 space-y-3 text-sm text-base-content/78">
                {comparison.generic.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full border border-error/36 text-error">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <article className="h-full rounded-3xl border border-primary/35 bg-primary/12 p-5 md:p-6">
              <h3 className="font-display text-2xl font-semibold">Arquitetura iobee</h3>
              <ul className="mt-5 space-y-3 text-sm text-base-content/82">
                {comparison.iobee.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full border border-primary/40 text-primary">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </MotionReveal>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-14 pb-18 md:pt-18 md:pb-24">
        <MotionReveal>
          <div className="soft-glow relative overflow-hidden rounded-3xl border border-primary/35 bg-primary/14 p-7 md:p-12">
            <div className="absolute -left-20 top-8 h-52 w-52 rounded-full bg-primary/24 blur-3xl" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-secondary/20 blur-2xl" />
            <div className="relative max-w-4xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-content/85">Pronto para elevar sua operacao</p>
              <h2 className="section-title font-display text-3xl font-semibold text-primary-content md:text-5xl">
                Transforme dados industriais em decisoes operacionais
              </h2>
              <p className="mt-4 text-base text-primary-content/85 md:text-lg">
                Centralize ativos, eventos, dispositivos e inteligencia em uma unica plataforma.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="btn btn-neutral"
                  onClick={() => trackPlatformEvent("cta_solicitar_demonstracao_click", { section: "final_cta" })}
                  to="/contato"
                >
                  Solicitar demonstracao
                </Link>
                <Link
                  className="btn btn-outline border-primary-content/30 text-primary-content hover:bg-primary-content/10"
                  onClick={() => trackPlatformEvent("cta_falar_com_especialista_click", { section: "final_cta" })}
                  to="/contato"
                >
                  Falar com especialista
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </SectionContainer>
    </>
  );
}
