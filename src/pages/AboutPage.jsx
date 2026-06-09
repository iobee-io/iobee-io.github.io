import {
  ArrowRightIcon,
  BoltIcon,
  CircleStackIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { CTAButtons } from "../components/ui/CTAButtons";
import { MotionReveal } from "../components/ui/MotionReveal";
import { SectionContainer } from "../components/ui/SectionContainer";
import { trackEvent } from "../lib/analytics";

const marketPainPoints = [
  "Dados operacionais isolados entre equipamentos, plantas e sistemas.",
  "Plataformas que apenas exibem telas passivas sem orientar decisao.",
  "Integracoes fragmentadas entre manutencao, producao, energia e TI/OT.",
  "Baixa rastreabilidade de alteracoes criticas na operacao.",
  "Alarmes em excesso sem prioridade contextual de resposta.",
  "Dependencia de operadores experientes para interpretar anomalias.",
];

const architectureBuildingBlocks = [
  {
    title: "Coleta e conectividade industrial",
    description: "Conexao de CLPs, sensores, edge gateways e APIs corporativas com fluxo confiavel de dados.",
    icon: CloudArrowUpIcon,
  },
  {
    title: "Sistema operacional industrial",
    description: "Organizacao de dados, ativos, usuarios e estados operacionais com escala multi-site e governanca centralizada.",
    icon: CircleStackIcon,
  },
  {
    title: "Asset Twin e baseline",
    description: "Device Twin, Asset Twin e baseline contextual para conectar sinais ao comportamento real de ativos e processos.",
    icon: CpuChipIcon,
  },
  {
    title: "Advisor operacional explicavel",
    description: "Estados, desvios e recomendacoes para reduzir resposta reativa sem depender de modelos opacos no inicio.",
    icon: SparklesIcon,
  },
  {
    title: "Seguranca e governanca",
    description: "Permissoes, trilha de auditoria, compliance e rastreabilidade como camada transversal.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Integracao com ecossistema da planta",
    description: "Convergencia entre operacao, manutencao, energia, ERP e MES em uma arquitetura viva.",
    icon: CommandLineIcon,
  },
];

const architectureFlow = [
  {
    name: "Bees",
    tagline: "Captura e conexao de campo",
    description: "Agentes que coletam sinais do mundo fisico e conectam a planta ao ecossistema digital.",
    example: "Exemplo: captura de corrente, vibracao, estados de maquina e eventos de CLP.",
    icon: BoltIcon,
  },
  {
    name: "Hive",
    tagline: "Processamento edge industrial",
    description: "Camada local para normalizar, processar, persistir e conectar dados perto da operacao.",
    example: "Exemplo: buffer local e sincronizacao segura em ambiente com internet instavel.",
    icon: Cog6ToothIcon,
    emphasis: true,
  },
  {
    name: "Guard",
    tagline: "Governanca e protecao transversal",
    description: "Seguranca, RBAC, auditoria, compliance e rastreabilidade em toda a cadeia operacional.",
    example: "Exemplo: trilha completa de quem alterou regra, quando e com qual impacto.",
    icon: LockClosedIcon,
  },
  {
    name: "HEXos",
    tagline: "Sistema operacional industrial",
    description: "Organiza dados, ativos, usuarios, plantas e tenants para uma base operacional coerente.",
    example: "Exemplo: Asset Twin por bomba, linha, ETA, ETE ou utilidade critica.",
    icon: CircleStackIcon,
    emphasis: true,
  },
  {
    name: "ICOS",
    tagline: "Motor de inteligencia operacional",
    description: "Interpreta comportamento operacional com baseline, estados, desvio e degradacao.",
    example: "Exemplo: identificacao de instabilidade recorrente fora do baseline RUNNING_STABLE.",
    icon: SparklesIcon,
    emphasis: true,
  },
  {
    name: "Advisor",
    tagline: "Recomendacao operacional",
    description: "Transforma achados em prioridades, alertas e recomendacoes explicaveis para acompanhamento.",
    example: "Exemplo: priorizar ajuste de dosagem ou verificacao de bomba antes de perda recorrente.",
    icon: ArrowRightIcon,
  },
];

const differentiation = {
  common: [
    "Monitoramento passivo focado em visualizacao.",
    "Integracoes limitadas e sem padrao de escala.",
    "Alarmes sem contexto de ativo, risco e processo.",
    "Baixa conexao entre operacao, manutencao e energia.",
    "Governanca fraca para ambientes multi-site.",
    "Dificuldade de evoluir para advisor operacional.",
  ],
  iobee: [
    "Arquitetura operacional industrial completa e modular.",
    "Fluxo Campo -> Bees -> Hive/Edge -> Guard -> HEXos -> ICOS -> Advisor.",
    "Contexto operacional real com Device Twin e Asset Twin.",
    "Baseline, estados e recomendacoes explicaveis para decisao operacional.",
    "Escala enterprise com multi-tenant, white-label e APIs abertas.",
    "Seguranca, auditoria e compliance como parte da operacao.",
  ],
};

const operationalImpact = [
  "Menos parada inesperada em ativos criticos.",
  "Mais visibilidade operacional entre areas e plantas.",
  "Rastreabilidade completa de eventos e decisoes.",
  "Resposta mais rapida com contexto e prioridade.",
  "Menor dependencia de planilhas e consolidacao manual.",
  "Integracao real entre manutencao, operacao, energia e gestao.",
  "Base robusta para manutencao orientada por condicao e advisor operacional.",
  "Melhor governanca para operacao multi-site e multiempresa.",
  "Eficiencia energetica com correlacao de evento e processo.",
  "Reducao de retrabalho e de alarmes sem contexto.",
];

const futureVision = [
  "Elevar maturidade operacional, nao apenas digitalizar interface.",
  "Transformar operacao em sistema inteligivel, conectado e governavel.",
  "Antecipar desvios antes de virarem incidentes de alto impacto.",
  "Consolidar uma base escalavel para decisao industrial em tempo real.",
];

function trackAboutEvent(eventName, payload = {}) {
  trackEvent(eventName, { context: "about_page", ...payload });
}

export default function AboutPage() {
  const breadcrumbItems = [{ name: "Sobre", path: "/sobre" }];

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description="A iobee e uma empresa de arquitetura operacional industrial que conecta campo, dados, contexto, inteligencia e governanca para transformar operacao em decisao."
        path="/sobre"
        title="Sobre a iobee | Arquitetura operacional industrial"
      />
      <Breadcrumbs items={breadcrumbItems} />

      <MotionReveal>
        <section className="about-hero-shell relative overflow-hidden rounded-3xl border border-base-content/12 p-8 md:p-10">
          <div className="about-hero-glow" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Sobre a iobee
              </p>
              <h1 className="section-title mt-5 max-w-4xl font-display text-4xl font-semibold md:text-5xl lg:text-6xl">
                A arquitetura que conecta o chao de fabrica a decisao
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-base-content/78 md:text-lg">
                A iobee desenvolve tecnologia industrial para transformar dados operacionais dispersos em inteligencia acionavel, com escalabilidade, seguranca e contexto real de operacao.
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-base-content/60">
                Mais do que monitorar: entender, correlacionar e agir
              </p>
              <div className="mt-8">
                <CTAButtons
                  context="about_hero"
                  primary="Conheca a plataforma"
                  primaryTo="/plataforma"
                  secondary="Falar com especialista"
                  secondaryTo="/contato"
                />
              </div>
            </div>

            <div className="about-diagram-shell rounded-2xl border border-base-content/12 bg-base-100/45 p-4 md:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/88">Sistema vivo iobee</p>
              <div className="relative mt-4 grid gap-3">
                <div className="about-flow-track hidden lg:block" />
                {architectureFlow.map((item, index) => (
                  <motion.article
                    className={`about-flow-chip relative rounded-xl border px-4 py-3 ${item.emphasis ? "border-primary/42 bg-primary/12" : "border-base-content/18 bg-base-100/58"}`}
                    key={`hero-flow-${item.name}`}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-base-content/62">
                      Etapa {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold">{item.name}</p>
                  </motion.article>
                ))}
              </div>
              <div className="about-guard-strip mt-4 rounded-xl border border-accent/45 bg-accent/10 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Guard transversal</p>
                <p className="mt-1 text-sm text-base-content/78">Seguranca, governanca e rastreabilidade protegendo toda a arquitetura.</p>
              </div>
            </div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14">
        <section className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr] lg:items-start">
          <article className="glass-card rounded-3xl border p-7 md:p-8">
            <p className="mb-3 inline-flex rounded-full border border-base-content/22 bg-base-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Por que a iobee existe
            </p>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">
              A industria tem muito dado, mas pouca inteligencia operacional aplicavel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-base-content/78 md:text-lg">
              A iobee nasceu para resolver uma fragmentacao estrutural: sinais operacionais espalhados, sistemas desconectados e decisoes tomadas com baixa capacidade de correlacao. Nosso papel e unificar essa cadeia para transformar operacao em decisao.
            </p>
            <p className="mt-4 text-base leading-relaxed text-base-content/76">
              Nao construimos uma camada cosmetica de telas passivas. Construimos uma arquitetura operacional industrial para conectar captura de campo, fluxo de dados, processamento, contexto e governanca em um unico sistema coerente.
            </p>
          </article>

          <article className="glass-card rounded-3xl border p-7 md:p-8">
            <h3 className="font-display text-2xl font-semibold">Problemas que essa tese enfrenta</h3>
            <ul className="mt-5 space-y-3 text-sm text-base-content/76 md:text-base">
              {marketPainPoints.map((point) => (
                <li className="flex items-start gap-3" key={point}>
                  <ExclamationTriangleIcon className="mt-0.5 size-5 shrink-0 text-warning" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14">
        <section>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-base-content/22 bg-base-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              O que a iobee constroi
            </p>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
              Uma base tecnologica para operacoes industriais mais inteligentes
            </h2>
            <p className="mt-4 text-base text-base-content/75 md:text-lg">
              Da captura de sinal no campo ate a decisao executiva, a iobee integra edge, SaaS, Digital Twin, IA operacional e governanca como um unico sistema.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {architectureBuildingBlocks.map((item, index) => (
              <MotionReveal delay={0.04 * index} key={item.title}>
                <motion.article
                  className="about-capability-card rounded-2xl border border-base-content/16 bg-base-100/62 p-5"
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex rounded-xl border border-primary/36 bg-primary/12 p-2.5 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-base-content/74">{item.description}</p>
                </motion.article>
              </MotionReveal>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14">
        <section>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-base-content/22 bg-base-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Como a arquitetura funciona
            </p>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
              Campo -&gt; Bees -&gt; Hive/Edge -&gt; Guard -&gt; HEXos -&gt; ICOS -&gt; Advisor
            </h2>
            <p className="mt-4 text-base text-base-content/75 md:text-lg">
              Cada camada cumpre uma funcao clara em um fluxo continuo: capturar, transportar, organizar, contextualizar e proteger.
            </p>
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-5">
            {architectureFlow.map((module, index) => (
              <MotionReveal delay={0.05 * index} key={module.name}>
                <motion.article
                  className={`about-module-card h-full rounded-2xl border p-5 ${module.emphasis ? "border-primary/44 bg-primary/12" : "border-base-content/16 bg-base-100/62"}`}
                  transition={{ duration: 0.26, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                >
                  <div className={`inline-flex rounded-xl border p-2.5 ${module.emphasis ? "border-primary/40 bg-primary/16 text-primary" : "border-base-content/18 bg-base-100/70 text-secondary"}`}>
                    <module.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{module.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-base-content/58">{module.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-base-content/75">{module.description}</p>
                  <p className="mt-4 rounded-xl border border-base-content/14 bg-base-100/45 p-3 text-xs text-base-content/72">
                    {module.example}
                  </p>
                </motion.article>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal className="mt-4">
            <motion.article
              className="about-guard-band rounded-2xl border border-accent/46 bg-accent/10 p-4 md:p-5"
              transition={{ duration: 0.24, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Guard protegido em toda a jornada</p>
              <p className="mt-2 text-sm text-base-content/80">
                Enquanto Bees captura, Hive processa no edge, HEXos organiza e ICOS interpreta, o Guard garante seguranca operacional, auditoria, compliance e controle de acesso transversal.
              </p>
            </motion.article>
          </MotionReveal>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14">
        <section>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-base-content/22 bg-base-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              O que torna a iobee diferente
            </p>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
              Mais profunda do que plataformas genericas de monitoramento
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="about-difference-card rounded-3xl border border-error/28 bg-error/8 p-6">
              <h3 className="font-display text-2xl font-semibold">Abordagens comuns no mercado</h3>
              <ul className="mt-5 space-y-3 text-sm text-base-content/78 md:text-base">
                {differentiation.common.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full border border-error/36 text-error">
                      -
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="about-difference-card rounded-3xl border border-primary/36 bg-primary/12 p-6">
              <h3 className="font-display text-2xl font-semibold">Arquitetura iobee</h3>
              <ul className="mt-5 space-y-3 text-sm text-base-content/82 md:text-base">
                {differentiation.iobee.map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full border border-primary/40 text-primary">
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14">
        <section>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-base-content/22 bg-base-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Impacto na operacao real
            </p>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
              Tecnologia so importa quando muda a rotina operacional
            </h2>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {operationalImpact.map((item, index) => {
              const isLarge = index === 0 || index === 3 || index === 6 || index === 8;
              return (
                <MotionReveal delay={0.02 * index} key={item}>
                  <motion.article
                    className={`about-impact-card h-full rounded-2xl border border-base-content/16 bg-base-100/62 p-4 ${isLarge ? "xl:col-span-2 md:p-5" : ""}`}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-base-content/56">Impacto</p>
                    <h3 className={`mt-2 font-display ${isLarge ? "text-2xl" : "text-xl"}`}>{item}</h3>
                  </motion.article>
                </MotionReveal>
              );
            })}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14">
        <section className="glass-card rounded-3xl border p-7 md:p-10">
          <p className="mb-4 inline-flex rounded-full border border-base-content/22 bg-base-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Visao de futuro
          </p>
          <h2 className="section-title max-w-4xl font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
            O futuro da industria nao esta em coletar mais dados. Esta em tornar a operacao inteligivel.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-base-content/78 md:text-lg">
            A ambicao da iobee e elevar maturidade operacional com uma arquitetura consistente de longo prazo: conectada ao campo, contextualizada para decisao, protegida por governanca e preparada para operacoes enterprise complexas.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {futureVision.map((point) => (
              <li className="rounded-xl border border-base-content/14 bg-base-100/45 px-4 py-3 text-sm text-base-content/76 md:text-base" key={point}>
                - {point}
              </li>
            ))}
          </ul>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14">
        <section className="soft-glow relative overflow-hidden rounded-3xl border border-primary/35 bg-primary/14 p-8 md:p-12">
          <div className="absolute -left-20 top-8 h-52 w-52 rounded-full bg-primary/24 blur-3xl" />
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-secondary/20 blur-2xl" />
          <div className="relative max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-content/85">Converse com quem entende logica de planta</p>
            <h2 className="section-title font-display text-3xl font-semibold text-primary-content md:text-5xl">
              Conheca a arquitetura da iobee e veja como transformar sua operacao
            </h2>
            <p className="mt-4 text-base text-primary-content/86 md:text-lg">
              Se a sua operacao precisa sair do modo reativo e ganhar contexto, inteligencia e governanca, vamos construir esse caminho juntos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="btn btn-neutral"
                onClick={() => trackAboutEvent("cta_conheca_plataforma_click", { section: "about_final_cta" })}
                to="/plataforma"
              >
                Conheca a plataforma
                <ArrowRightIcon className="size-4" />
              </Link>
              <Link
                className="btn btn-outline border-primary-content/30 text-primary-content hover:bg-primary-content/10"
                onClick={() => trackAboutEvent("cta_falar_especialista_click", { section: "about_final_cta" })}
                to="/contato"
              >
                Falar com especialista
              </Link>
            </div>
          </div>
        </section>
      </MotionReveal>
    </SectionContainer>
  );
}
