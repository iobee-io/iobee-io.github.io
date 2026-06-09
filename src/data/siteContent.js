export const navigationItems = [
  { label: "Plataforma", path: "/plataforma" },
  { label: "Casos de Uso", path: "/casos-de-uso" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

export const metrics = [
  { label: "Mensagem central", value: "Sinais -> decisoes" },
  { label: "Primeira oferta", value: "30 dias" },
  { label: "Metodo inicial", value: "Baseline explicavel" },
  { label: "Estados", value: "8 modos operacionais" },
  { label: "Arquitetura", value: "Edge-native" },
  { label: "Continuidade", value: "Advisor mensal" },
];

export const beforeItems = [
  "Sinais existem, mas chegam sem contexto operacional",
  "Alarmes por limite ignoram estado, partida, parada e instabilidade",
  "Variabilidade vira perda antes de ser interpretada",
  "Historicos mostram o que ocorreu, mas nao orientam a proxima acao",
  "Analise depende de pessoas-chave e conhecimento disperso",
  "Relatorios executivos chegam depois do impacto operacional",
];

export const afterItems = [
  "Baseline contextual por ativo, turno, carga e estado operacional",
  "Desvios classificados antes de virarem perda recorrente",
  "Asset Twin conecta sinal, processo e criticidade do ativo",
  "Advisor Operacional recomenda proximos passos explicaveis",
  "Reunioes recorrentes priorizam estabilidade, disponibilidade e perda",
  "Evolucao continua sem substituir PLCs, SCADA ou historiadores",
];

export const steps = [
  "Bees capturam sinais industriais no campo",
  "Hive processa e conecta localmente no edge",
  "Guard protege conectividade, acesso e operacao",
  "HEXos organiza dados, ativos e usuarios",
  "ICOS interpreta comportamento operacional",
  "Advisor recomenda acoes e prioridades",
];

export const twinCards = [
  {
    title: "Device Twin",
    description:
      "Representa o estado vivo de sensores, CLPs, medidores e gateways com telemetria, conectividade, saude e historico operacional.",
    bullets: [
      "Online/offline por dispositivo",
      "Qualidade de sinal e latencia",
      "Eventos operacionais relevantes",
      "Inventario tecnico centralizado",
    ],
  },
  {
    title: "Asset Twin",
    description:
      "Conecta comportamento de bombas, dosagem, utilidades, ETA, ETE e processos continuos ao contexto do ativo critico.",
    bullets: [
      "Modelagem por ativo e processo",
      "KPI operacional por estado",
      "Baseline contextual e estatistico",
      "Manutencao orientada por condicao",
    ],
  },
];

export const segments = [
  "Industria",
  "HVAC",
  "Utilities",
  "Agronegocio",
  "OEM",
  "Facilities",
  "Agua e saneamento",
  "Alimentos e bebidas",
];

export const alertFeatures = [
  "WhatsApp, SMS e Email",
  "Regras compostas com multiplas variaveis",
  "Snapshot do exato momento da falha",
  "Escalonamento por turno, planta e criticidade",
  "Janela horaria por perfil",
  "Reducao de ruido e alerta duplicado",
];

export const scaleFeatures = [
  "Multi-site com visibilidade global e local",
  "Multi-tenant real com isolamento por cliente",
  "Cluster distribuido com alta disponibilidade",
  "Zero perda de mensagens com buffer resiliente",
  "Escalabilidade horizontal por demanda",
  "Governanca operacional para centenas de ativos",
];

export const oemFeatures = [
  "Branding completo com sua identidade",
  "Subdominio proprio por cliente",
  "Pacotes operacionais por vertical",
  "Multi-cliente com segregacao de dados",
  "Playbook de rollout para canais",
  "Receita recorrente com servicos digitais",
];

export const screenshotBriefs = [
  "Tela principal de operacoes com mapa multi-planta e status online/offline.",
  "Painel de Asset Twin de compressor com timeline de eventos e alertas ativos.",
  "Tela de configuracao de regras com condicoes compostas e escalonamento.",
  "Visao OEM white-label com troca de marca, dominio e tenant.",
  "Resumo executivo com estabilidade, disponibilidade, energia e MTTR.",
  "Feed de alertas multicanal com snapshot contextual do evento.",
];
