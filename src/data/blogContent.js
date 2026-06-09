export const blogPillars = [
  {
    id: "dashboards-passivos",
    label: "Dashboards e Monitoramento Passivo",
    description: "Mostra o limite do monitoramento sem contexto operacional e sem acao guiada.",
  },
  {
    id: "digital-twin-inteligencia",
    label: "Digital Twin e Inteligencia Operacional",
    description: "Explica como Device Twin, Asset Twin e correlacao geram decisao operacional real.",
  },
  {
    id: "arquitetura-industrial",
    label: "Arquitetura Industrial Moderna",
    description: "Conecta edge, protocolos, Hive, multi-site e escalabilidade enterprise.",
  },
  {
    id: "seguranca-governanca",
    label: "Seguranca, Governanca e Compliance",
    description: "Aborda risco operacional, rastreabilidade e controle de acesso granular.",
  },
  {
    id: "ia-industrial",
    label: "IA Aplicada a Operacao Industrial",
    description: "Traduz IA em previsao, recomendacao operacional e resultado de negocio.",
  },
  {
    id: "casos-operacionais",
    label: "Casos de Uso Operacionais",
    description: "Mostra aplicacao pratica por ativo, processo e impacto economico.",
  },
  {
    id: "comparativos",
    label: "Comparativos com Solucoes Tradicionais",
    description: "Compara iobee com SCADA, historiador, IoT generico e dashboard-first.",
  },
];

export const blogSeries = [
  {
    slug: "arquitetura-bees-pollen-hive-icos",
    title: "Serie Arquitetura Bees -> Pollen -> Hive -> ICOS",
    objective: "Mostrar como cada camada reduz risco operacional e melhora tempo de resposta.",
    cadence: "1 artigo por semana durante 8 semanas",
    targetAudience: "Diretor industrial, automacao, TI/OT, manutencao e engenharia",
    kpiFocus: ["MTTR", "Disponibilidade", "Tempo de diagnostico", "Confiabilidade da resposta operacional"],
    timeline: [
      { slot: "Semana 1", type: "Artigo", title: "Por que coleta sem contexto nao reduz risco operacional" },
      { slot: "Semana 2", type: "Artigo", title: "Bees no campo: padrao de captura para operacao critica" },
      { slot: "Semana 3", type: "Artigo", title: "Pollen como fluxo vivo de evento e telemetria" },
      { slot: "Semana 4", type: "Artigo", title: "Hive: ingestao, regra e persistencia sem gargalo" },
      { slot: "Semana 5", type: "Artigo", title: "ICOS: de alarme bruto para inferencia operacional" },
      { slot: "Semana 6", type: "Artigo", title: "Guard transversal: seguranca e auditoria em escala" },
      { slot: "Semana 7", type: "Artigo", title: "Benchmark operacional: arquitetura passiva vs contextual" },
      { slot: "Semana 8", type: "Artigo", title: "Roadmap de adocao em 90 dias por criticidade de ativo" },
    ],
    generatedMaterials: [
      {
        title: "Artigo tecnico com benchmark operacional",
        materialSlug: "benchmark-operacional-arquitetura-bees-pollen-hive-icos",
      },
      {
        title: "Checklist de maturidade arquitetural",
        materialSlug: "checklist-maturidade-arquitetural-industrial",
      },
      {
        title: "Landing page de campanha por vertical",
        materialSlug: "landing-page-campanha-vertical-industrial",
      },
    ],
    suggestedOutputs: [
      "Artigo tecnico com benchmark operacional",
      "Checklist de maturidade arquitetural",
      "Landing page de campanha por vertical",
    ],
  },
  {
    slug: "operacao-multisite-sem-perda-de-controle",
    title: "Serie Operacao Multi-site sem Perda de Controle",
    objective: "Guiar diretores e gerentes na padronizacao de operacoes distribuidas.",
    cadence: "6 artigos + 1 webinar tecnico",
    targetAudience: "Diretoria industrial, gerencia de producao, gerencia de manutencao e TI/OT corporativa",
    kpiFocus: ["Padronizacao entre plantas", "Downtime consolidado", "Tempo de escalonamento", "Confiabilidade da governanca"],
    timeline: [
      { slot: "Semana 1", type: "Artigo", title: "O custo oculto da variacao entre plantas industriais" },
      { slot: "Semana 2", type: "Artigo", title: "Modelo de governanca por planta, linha e ativo" },
      { slot: "Semana 3", type: "Artigo", title: "Como padronizar alerta sem perder contexto local" },
      { slot: "Semana 4", type: "Artigo", title: "Integracao multi-site com legado SCADA e ERP" },
      { slot: "Semana 5", type: "Artigo", title: "KPI corporativo de operacao com decisao por criticidade" },
      { slot: "Semana 6", type: "Artigo", title: "Estrategia de rollout em ondas para minimizar risco" },
      { slot: "Semana 7", type: "Webinar tecnico", title: "Blueprint multi-site: arquitetura, governanca e ROI" },
    ],
    generatedMaterials: [
      {
        title: "Template de governanca por planta e linha",
        materialSlug: "template-governanca-planta-linha-multisite",
      },
      {
        title: "Guia de rollout em 90 dias",
        materialSlug: "guia-rollout-90-dias-multisite",
      },
      {
        title: "Calculadora de ganho por reducao de downtime",
        materialSlug: "calculadora-ganho-reducao-downtime-multisite",
      },
    ],
    suggestedOutputs: [
      "Template de governanca por planta e linha",
      "Guia de rollout em 90 dias",
      "Calculadora de ganho por reducao de downtime",
    ],
  },
  {
    slug: "ia-industrial-com-resultado-medivel",
    title: "Serie IA Industrial com Resultado Medivel",
    objective: "Separar IA util de piloto sem impacto operacional.",
    cadence: "5 artigos + 2 estudos de caso",
    targetAudience: "Diretoria, engenharia, TI/OT, manutencao e times de melhoria continua",
    kpiFocus: ["Precisao de recomendacao", "Reducao de falha", "Economia energetica", "Aderencia operacional"],
    timeline: [
      { slot: "Semana 1", type: "Artigo", title: "Por que IA industrial falha sem contexto operacional" },
      { slot: "Semana 2", type: "Artigo", title: "Prontidao de dados historicos para inferencia confiavel" },
      { slot: "Semana 3", type: "Artigo", title: "Como transformar serie temporal em recomendacao acionavel" },
      { slot: "Semana 4", type: "Artigo", title: "Advisor operacional: criterio de prioridade e resposta" },
      { slot: "Semana 5", type: "Artigo", title: "Governanca de IA: seguranca, auditoria e confianca de escala" },
      { slot: "Semana 6", type: "Estudo de caso", title: "Caso 1: reducao de falhas em utilidades com inferencia contextual" },
      { slot: "Semana 7", type: "Estudo de caso", title: "Caso 2: reducao de ruido de alarme com advisor operacional" },
    ],
    generatedMaterials: [
      {
        title: "Whitepaper de metodologia de inferencia",
        materialSlug: "whitepaper-metodologia-inferencia-icos",
      },
      {
        title: "Checklist de prontidao de dados historicos",
        materialSlug: "checklist-prontidao-dados-historicos-ia-industrial",
      },
      {
        title: "Comparativo Advisor vs dashboard convencional",
        materialSlug: "comparativo-advisor-vs-dashboard-convencional",
      },
    ],
    suggestedOutputs: [
      "Whitepaper de metodologia de inferencia",
      "Checklist de prontidao de dados historicos",
      "Comparativo Advisor vs dashboard convencional",
    ],
  },
];

export const leadAssets = [
  {
    title: "Ebook: Arquitetura Industrial para Operacao em Escala",
    format: "Ebook",
    stage: "Topo e meio de funil",
    promise: "Como sair de integracoes isoladas para uma arquitetura unificada com governanca.",
  },
  {
    title: "Whitepaper: Digital Twin Operacional em Ambientes Criticos",
    format: "Whitepaper",
    stage: "Meio de funil tecnico",
    promise: "Framework para modelar Device Twin e Asset Twin com foco em disponibilidade.",
  },
  {
    title: "Checklist: Seguranca e Compliance em Plataformas Industriais",
    format: "Checklist",
    stage: "Meio e fundo de funil",
    promise: "Itens minimos para auditoria, RBAC, rastreabilidade e seguranca de acesso.",
  },
  {
    title: "Calculadora: ROI de Reducao de Downtime e Energia",
    format: "Calculadora",
    stage: "Fundo de funil",
    promise: "Simula impacto financeiro com base em indisponibilidade, consumo e MTTR.",
  },
  {
    title: "Guia Tecnico: SCADA + Historiador + iobee sem Reescrever Planta",
    format: "Guia tecnico",
    stage: "Meio de funil tecnico",
    promise: "Plano de integracao progressiva sem ruptura operacional e com ganhos em fases.",
  },
  {
    title: "Landing Page: Advisor Industrial por Segmento",
    format: "Landing page tematica",
    stage: "Aquisicao",
    promise: "Narrativas de valor por industria, utilidades, alimentos, saneamento e OEM.",
  },
];

export const blogArticles = [
  {
    slug: "dashboards-nao-resolvem-operacao-industrial",
    title: "O Problema das Plataformas que Apenas Mostram Dados",
    subtitle: "Por que dashboard sem contexto operacional aumenta reacao tardia e custo oculto de falha.",
    excerpt:
      "Visualizar indicador nao garante decisao. Sem contexto de ativo, processo e risco, a operacao continua reativa.",
    pillar: "dashboards-passivos",
    audience: "Diretores industriais, gerentes de operacao, manutencao e engenharia",
    readTime: "14 min",
    publishedAt: "2026-04-18",
    tags: ["dashboards", "operacao", "downtime", "contexto", "iobee"],
    problem:
      "Muitas operacoes investiram em dashboards, mas continuam sofrendo com parada nao planejada, alarme ignorado e perda de produtividade. O problema nao e falta de dado na tela; e falta de significado operacional para decidir o que fazer, quando agir e quem deve atuar.",
    traditionalLimits: [
      "Dashboards mostram variavel, mas nao explicam causa provavel nem impacto no processo.",
      "Indicadores agregados escondem comportamento anormal de ativo critico.",
      "Alertas sem priorizacao geram fadiga e diminuem confianca da equipe de turno.",
      "A decisao depende de analise manual, historico disperso e experiencia de poucas pessoas.",
    ],
    iobeeSolution: [
      {
        title: "Bees e Pollen estruturam captura e fluxo operacional",
        text: "A iobee organiza o dado desde a origem com semantica industrial, mantendo variavel, evento e comando no mesmo fluxo operacional.",
      },
      {
        title: "Hive garante coerencia de ingestao, regra e distribuicao",
        text: "No Hive, o dado deixa de ser painel isolado e vira base transacional para alarme inteligente, automacao e historico confiavel.",
      },
      {
        title: "ICOS converte sinal em entendimento acionavel",
        text: "Com Device Twin e Asset Twin, o ICOS correlaciona variaveis, identifica tendencia e recomenda acao operacional com prioridade.",
      },
      {
        title: "Guard protege a decisao e a rastreabilidade",
        text: "Toda alteracao de regra, permissao e comando fica auditada com RBAC, reduzindo risco operacional e regulatorio.",
      },
    ],
    operationalBenefits: [
      { area: "Disponibilidade", gain: "Menos parada nao planejada", how: "Deteccao antecipada de desvio com priorizacao por criticidade." },
      { area: "MTTR", gain: "Resposta mais rapida", how: "Alarme com contexto de causa provavel e historico do ativo." },
      { area: "Produtividade de turno", gain: "Menos retrabalho analitico", how: "Dados e eventos consolidados por ativo e processo." },
      { area: "Confiabilidade de decisao", gain: "Menos dependencia de individuo", how: "Padrao de acao operacional baseado em contexto." },
    ],
    practicalExample: {
      title: "Linha de envase com paradas intermitentes",
      context:
        "A planta recebia mais de 180 alarmes por turno. O dashboard mostrava pressao, temperatura e velocidade, mas nao indicava relacao entre eventos.",
      execution: [
        "Modelagem de Device Twin para CLPs, inversores e sensores de linha.",
        "Asset Twin da linha de envase com regras de correlacao entre velocidade, torque e consumo.",
        "Priorizacao de alarmes por risco de parada e impacto no OEE.",
      ],
      outcome:
        "Em 10 semanas, a operacao reduziu alarmes irrelevantes em 43% e diminuiu o tempo medio de resposta em 31%, com melhoria de estabilidade da linha.",
    },
    comparison: {
      columns: ["Abordagem", "O que entrega", "Limitacao critica", "Impacto operacional"],
      rows: [
        ["Dashboard convencional", "Visualizacao de tendencia", "Sem contexto de causa e prioridade", "Operacao reativa e lenta"],
        ["SCADA com telas locais", "Supervisao por area", "Visao fragmentada entre ativos e plantas", "Dificuldade de escalar padrao"],
        ["Arquitetura iobee", "Contexto + inferencia + governanca", "Exige modelagem inicial de ativos", "Decisao operacional orientada e auditavel"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description:
        "Fluxo Bees -> Pollen -> Hive -> ICOS com coluna transversal Guard, destacando onde o dado ganha contexto e vira recomendacao.",
      bullets: ["Camada de captura em field", "Camada de processamento no core", "Camada de decisao com ICOS", "Camada de governanca transversal"],
    },
    conclusion:
      "Dashboard continua importante, mas como interface final de uma arquitetura operacional. Sem contexto e governanca, ele vira apenas um retrovisor de problema ja instalado.",
    cta: {
      title: "Quer avaliar se seu monitoramento esta realmente orientando decisao?",
      primary: "Agendar demonstracao tecnica",
      secondary: "Falar com especialista de arquitetura",
    },
  },
  {
    slug: "dados-sem-contexto-nao-geram-decisao",
    title: "Dados Sem Contexto Nao Geram Decisao",
    subtitle: "Como alarmes em excesso, historicos isolados e sinais sem relacao geram custo oculto de operacao.",
    excerpt:
      "Dado bruto sem contexto operacional aumenta retrabalho, encobre causa raiz e atrasa manutencao orientada por condicao.",
    pillar: "dashboards-passivos",
    audience: "Gerentes de manutencao, automacao, utilidades e TI industrial",
    readTime: "13 min",
    publishedAt: "2026-04-18",
    tags: ["contexto", "alarmes", "causa raiz", "manutencao", "asset twin"],
    problem:
      "Quando dados chegam sem relacao entre ativos, processo e evento, o time perde tempo cruzando planilha, historiador e memoria de turno para explicar o que aconteceu. O resultado e atraso de resposta, intervencao incorreta e custo operacional crescente.",
    traditionalLimits: [
      "Variavel em alta nao indica automaticamente risco real para producao.",
      "Historico de dispositivo nao conversa com historico de ativo e processo.",
      "Alarmes por limite fixo ignoram condicao operacional e fase de producao.",
      "Nao ha trilha unica para explicar sequencia de eventos antes da falha.",
    ],
    iobeeSolution: [
      {
        title: "Contexto por Digital Twin",
        text: "O Device Twin representa estado vivo do equipamento. O Asset Twin conecta esse estado ao contexto de operacao e impacto de processo.",
      },
      {
        title: "Correlacao de eventos no ICOS",
        text: "Eventos de energia, processo e manutencao sao correlacionados para apontar padrao de desvio e risco de falha.",
      },
      {
        title: "Historico com rastreabilidade",
        text: "Hive e Guard mantem trilha de evento, regra e acao executada, permitindo analise de causa com evidencias.",
      },
    ],
    operationalBenefits: [
      { area: "Analise de falha", gain: "Menos tempo para causa raiz", how: "Timeline unica com evento de processo, ativo e comando." },
      { area: "Qualidade de alarme", gain: "Menos ruido", how: "Regras contextuais em vez de limite isolado por tag." },
      { area: "Planejamento de manutencao", gain: "Intervencao no momento certo", how: "Desvio recorrente identificado antes da parada." },
      { area: "Confiabilidade", gain: "Melhor tomada de decisao", how: "Recomendacao operacional com base historica e relacional." },
    ],
    practicalExample: {
      title: "Utilidades de vapor e ar comprimido em planta de alimentos",
      context:
        "Alarmes de baixa pressao aconteciam varias vezes por semana sem causa clara. Havia disputa entre manutencao mecanica e eletrica sobre origem do problema.",
      execution: [
        "Modelagem de relacao entre compressores, secadores, reservatorio e linha de consumo.",
        "Correlacao entre temperatura de descarga, consumo de energia e carga de linha.",
        "Registro de acao de operador e manutencao no mesmo historico operacional.",
      ],
      outcome:
        "Foi identificada sequencia recorrente de sobrecarga em horario de troca de lote. O ajuste de logica de acionamento reduziu ocorrencias em 58% e estabilizou a pressao.",
    },
    comparison: {
      columns: ["Pergunta operacional", "Sem contexto", "Com contexto iobee"],
      rows: [
        ["Onde comecou o desvio?", "Em uma tag especifica", "No ativo e condicao operacional que disparou a sequencia"],
        ["Quem foi impactado?", "Nao fica claro", "Mapa de ativos e processos relacionados"],
        ["Que acao tomar?", "Escalonamento manual", "Recomendacao por regra e historico"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description:
        "Mapa relacional de ativos com setas de dependencia, camada temporal de eventos e bloco de recomendacao do ICOS.",
      bullets: ["Camada de ativos", "Camada de eventos", "Camada de decisao e acao"],
    },
    conclusion:
      "Sem contexto, a industria apenas acumula dado. Com contexto, ela organiza conhecimento operacional e reduz custo de incerteza.",
    cta: {
      title: "Quer mapear onde sua operacao perde contexto hoje?",
      primary: "Solicitar conversa tecnica",
      secondary: "Agendar demonstracao da arquitetura",
    },
  },
  {
    slug: "device-twin-o-estado-vivo-do-ativo",
    title: "Device Twin: O Estado Vivo que Falta na Maioria das Operacoes",
    subtitle: "Por que representar o dispositivo em tempo real muda manutencao, resposta e confiabilidade.",
    excerpt:
      "Device Twin nao e tela bonita: e estrutura de estado operacional para decidir manutencao e risco com precisao.",
    pillar: "digital-twin-inteligencia",
    audience: "Engenharia de manutencao, automacao e confiabilidade",
    readTime: "12 min",
    publishedAt: "2026-04-18",
    tags: ["device twin", "confiabilidade", "manutencao", "tempo real"],
    problem:
      "Em muitas plantas, o dispositivo e tratado como ponto de telemetria isolado. Sem um estado vivo consolidado, pequenos desvios passam despercebidos e so aparecem quando viram falha.",
    traditionalLimits: [
      "Status online/offline sem saude operacional detalhada.",
      "Sem historico contextual de conectividade, qualidade de sinal e latencia.",
      "Eventos tecnicos nao conectados a impacto em processo.",
      "Dificuldade de priorizar manutencao preventiva por criticidade real.",
    ],
    iobeeSolution: [
      {
        title: "Modelagem de estado vivo",
        text: "Cada dispositivo passa a ter estado operacional padrao: saude, conectividade, eventos, limites e contexto de uso.",
      },
      {
        title: "Integracao com Hive e ICOS",
        text: "O estado do Device Twin alimenta regras e inferencias, elevando sinal tecnico para decisao operacional.",
      },
      {
        title: "Guard para governanca de alteracoes",
        text: "Mudancas de parametro e permissao ficam auditadas, evitando drift operacional sem dono.",
      },
    ],
    operationalBenefits: [
      { area: "Deteccao precoce", gain: "Menos falha surpresa", how: "Desvio de saude de dispositivo vira alerta contextual." },
      { area: "Disponibilidade de dados", gain: "Menos lacuna historica", how: "Monitoramento de conectividade e qualidade de coleta." },
      { area: "Manutencao", gain: "Prioridade correta", how: "Atuacao por risco de impacto no ativo e no processo." },
      { area: "Padronizacao", gain: "Escala entre plantas", how: "Modelo unico de estado para dispositivos equivalentes." },
    ],
    practicalExample: {
      title: "Subestacao com variacao intermitente de leitura",
      context:
        "A equipe recebia leitura inconsistente de corrente em um conjunto de medidores e atribuía o problema ao proprio processo.",
      execution: [
        "Device Twin configurado com metricas de qualidade de sinal, latencia e perda de pacote.",
        "Correlacao com eventos de rede edge e historico de manutencao.",
        "Regra de degradacao progressiva com escalonamento por criticidade.",
      ],
      outcome:
        "Foi identificado padrao de degradacao de gateway antes das janelas de pico. A troca programada eliminou 92% das falhas de leitura e evitou deslocamentos emergenciais.",
    },
    comparison: {
      columns: ["Visao do dispositivo", "Coleta tradicional", "Com Device Twin iobee"],
      rows: [
        ["Estado atual", "Online/offline", "Saude completa por dimensao tecnica"],
        ["Historico", "Serie de tag", "Timeline de eventos e condicao de uso"],
        ["Acoes", "Manual e reativa", "Regras de resposta por criticidade"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description:
        "Cartao de Device Twin com quadrantes: conectividade, telemetria, eventos e saude, ligado ao Asset Twin e ao ICOS.",
      bullets: ["Estado vivo", "Historico contextual", "Risco calculado", "Acao recomendada"],
    },
    conclusion:
      "Device Twin e o passo tecnico que transforma telemetria em operacao confiavel. Sem ele, a planta enxerga sintomas; com ele, enxerga comportamento.",
    cta: {
      title: "Quer mapear Device Twin para seus ativos criticos?",
      primary: "Agendar workshop tecnico",
      secondary: "Falar com especialista de Digital Twin",
    },
  },
  {
    slug: "asset-twin-correlacao-entre-equipamentos",
    title: "Asset Twin: Como Entender Relacao de Causa Entre Equipamentos",
    subtitle: "Falha raramente nasce em um ponto isolado. Ela se propaga por dependencias de processo.",
    excerpt:
      "Asset Twin conecta dispositivos, processo e historico para revelar causa raiz que dado isolado nao mostra.",
    pillar: "digital-twin-inteligencia",
    audience: "Gerentes de engenharia, producao e confiabilidade",
    readTime: "15 min",
    publishedAt: "2026-04-18",
    tags: ["asset twin", "causa raiz", "correlacao", "processo"],
    problem:
      "Quando um ativo falha, a analise costuma focar no equipamento final que parou. Isso mascara a origem real da anomalia, que muitas vezes comeca em ativo de suporte, utilidade ou controle.",
    traditionalLimits: [
      "Cada sistema analisa apenas o proprio escopo.",
      "Nao existe grafo operacional de dependencia entre ativos.",
      "Indicadores de producao e energia ficam separados da manutencao.",
      "Causa raiz vira discussao subjetiva entre areas.",
    ],
    iobeeSolution: [
      {
        title: "Modelagem relacional do ativo",
        text: "Asset Twin representa dependencia funcional entre maquinas, utilidades, processo e impacto de negocio.",
      },
      {
        title: "Correlacao temporal no ICOS",
        text: "Eventos de ativos relacionados sao analisados em sequencia para identificar origem, propagacao e efeito.",
      },
      {
        title: "Decisao guiada por impacto",
        text: "A recomendacao operacional considera risco para disponibilidade, qualidade e energia.",
      },
    ],
    operationalBenefits: [
      { area: "Causa raiz", gain: "Analise mais precisa", how: "Dependencia entre ativos deixa de ser inferencia manual." },
      { area: "Tempo de resposta", gain: "Menos escalonamento improdutivo", how: "Equipe certa acionada com base no ponto de origem." },
      { area: "Qualidade de parada", gain: "Intervencao assertiva", how: "Plano de acao ligado ao caminho de propagacao do evento." },
      { area: "Governanca", gain: "Decisao reproduzivel", how: "Historico de evento + acao auditado no Guard." },
    ],
    practicalExample: {
      title: "Falhas recorrentes em linha de refrigeracao industrial",
      context:
        "A equipe tratava o problema como falha de compressor principal. O ativo voltava a falhar apos poucas semanas.",
      execution: [
        "Asset Twin ligando compressores, torre de resfriamento, bombas e circuito eletrico.",
        "Correlacao entre vibracao, temperatura de retorno e variacao de carga eletrica.",
        "Regra no ICOS para sinalizar desequilibrio de suporte antes do alarme principal.",
      ],
      outcome:
        "A origem foi identificada em bomba secundaria de circulacao. A correcao eliminou paradas repetidas e reduziu consumo energetico do sistema em 9%.",
    },
    comparison: {
      columns: ["Questao", "Visao isolada", "Visao Asset Twin"],
      rows: [
        ["Onde ocorreu o evento?", "No equipamento final", "Na cadeia de ativos relacionados"],
        ["Por que ocorreu?", "Hipotese de equipe", "Correlacao temporal e causal"],
        ["Como evitar recorrencia?", "Ajuste local", "Plano de acao no elo de origem"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description:
        "Grafo de ativos com pesos de dependencia e linha temporal de propagacao de evento ate o ativo final.",
      bullets: ["Origem", "Propagacao", "Impacto", "Acao recomendada"],
    },
    conclusion:
      "Asset Twin muda o nivel da conversa operacional: de evento isolado para comportamento de sistema. E isso reduz recorrencia de falha.",
    cta: {
      title: "Quer modelar seus ativos criticos com relacao de causa e efeito?",
      primary: "Solicitar diagnostico arquitetural",
      secondary: "Agendar demonstracao com ICOS",
    },
  },
  {
    slug: "mqtt-opcua-nao-sao-arquitetura-industrial",
    title: "Por que MQTT e OPC-UA Sozinhos Nao Resolvem Integracao Industrial",
    subtitle: "Protocolo e importante, mas sem arquitetura de dados a operacao continua fragmentada.",
    excerpt:
      "Conectividade nao e o mesmo que inteligencia operacional. Protocolo sem contexto vira apenas transporte.",
    pillar: "arquitetura-industrial",
    audience: "Automacao, TI industrial, arquitetura de sistemas e integradores",
    readTime: "12 min",
    publishedAt: "2026-04-18",
    tags: ["mqtt", "opc-ua", "integracao", "arquitetura de dados"],
    problem:
      "Projetos industriais muitas vezes param na etapa de conectar protocolo. O dado ate chega, mas sem normalizacao, sem modelo operacional e sem governanca, a integracao nao escala.",
    traditionalLimits: [
      "Sem modelo semantico comum entre diferentes plantas e fabricantes.",
      "Dificuldade de versionar regra e fluxo quando o parque cresce.",
      "Baixa rastreabilidade de alteracao em pipelines de dados.",
      "Integracao ponto a ponto aumenta custo de manutencao tecnica.",
    ],
    iobeeSolution: [
      { title: "Bees para captura heterogenea", text: "Coleta padronizada de campo com suporte a multiplos protocolos e interfaces legadas." },
      { title: "Pollen para fluxo continuo", text: "Transporte estruturado de evento, estado e comando com consistencia temporal." },
      { title: "Hive para normalizacao e distribuicao", text: "Camada central com ingestao, persistencia, API e regras transacionais." },
      { title: "ICOS para contexto e decisao", text: "Correlacao operacional acima do protocolo, orientando resposta por impacto." },
    ],
    operationalBenefits: [
      { area: "Escalabilidade", gain: "Menos retrabalho de integracao", how: "Modelo unico para novas plantas e ativos." },
      { area: "Tempo de rollout", gain: "Go-live mais rapido", how: "Padrao de ingestao e regra reutilizavel." },
      { area: "Confiabilidade", gain: "Menos falha de pipeline", how: "Governanca de fluxo e historico central no Hive." },
      { area: "Visao corporativa", gain: "Comparabilidade multi-site", how: "Normalizacao de entidades e eventos." },
    ],
    practicalExample: {
      title: "Programa de integracao em 5 plantas com fabricantes distintos",
      context: "Cada unidade tinha stack de automacao diferente e nomenclatura propria de tags.",
      execution: [
        "Catalogo de entidades operacionais comum (ativos, variaveis, eventos).",
        "Padrao Bees/Pollen para ingestao por protocolo sem perder semantica.",
        "Camada Hive para API e distribuicao para times locais e corporativos.",
      ],
      outcome:
        "O tempo de onboarding de nova planta caiu de 14 para 5 semanas, com reducao de incidentes de integracao no primeiro trimestre.",
    },
    comparison: {
      columns: ["Modelo", "Foco principal", "Risco oculto", "Capacidade de escala"],
      rows: [
        ["MQTT/OPC-UA isolado", "Transporte de mensagem", "Sem governanca e contexto", "Baixa em programas multi-site"],
        ["Integracao ponto a ponto", "Atender demanda imediata", "Complexidade exponencial", "Decai com crescimento"],
        ["Arquitetura iobee", "Fluxo + contexto + governanca", "Exige desenho inicial de modelo", "Alta em ambiente enterprise"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description: "Fluxo de protocolo na base e camada de contexto no topo, destacando separacao entre transporte e decisao.",
      bullets: ["Field protocol", "Pollen flow", "Hive normalization", "ICOS recommendation"],
    },
    conclusion:
      "Protocolo e necessario, mas nao suficiente. Integracao industrial sustentavel depende de arquitetura que transforme transporte em decisao operacional.",
    cta: {
      title: "Quer revisar sua arquitetura de integracao antes de expandir plantas?",
      primary: "Agendar revisao tecnica",
      secondary: "Conversar com arquiteto industrial",
    },
  },
  {
    slug: "operacao-multisite-multitenant-com-governanca",
    title: "Como Construir Operacao Multi-site sem Perder Controle",
    subtitle: "Padronizacao com autonomia local exige arquitetura multi-tenant com governanca real.",
    excerpt:
      "Escalar para varias plantas sem modelo de governanca cria custo oculto, divergencia operacional e baixa confiabilidade executiva.",
    pillar: "arquitetura-industrial",
    audience: "Diretores industriais, PMO de transformacao, TI corporativa",
    readTime: "13 min",
    publishedAt: "2026-04-18",
    tags: ["multi-site", "multi-tenant", "governanca", "escalabilidade"],
    problem:
      "Projetos que funcionam em uma planta costumam perder consistencia quando escalam para varias unidades. Cada site adapta regra, nomenclatura e processo, comprometendo comparabilidade e controle corporativo.",
    traditionalLimits: [
      "Ambiente sem isolamento adequado entre unidades e parceiros.",
      "Mudanca de regra sem trilha de aprovacao e impacto mapeado.",
      "KPIs com definicoes diferentes entre sites.",
      "Excesso de dependencia de equipe central para suporte local.",
    ],
    iobeeSolution: [
      { title: "Hive multi-tenant de origem", text: "Isolamento de dados, configuracao e acesso por empresa, planta, area e linha." },
      { title: "Guard com permissao granular", text: "RBAC por nivel organizacional e trilha de auditoria para qualquer alteracao operacional." },
      { title: "Modelo comum com flexibilidade local", text: "Padrao corporativo com extensoes controladas por sitio e criticidade." },
      { title: "ICOS para benchmark operacional", text: "Comparacao de comportamento de ativos equivalentes entre plantas." },
    ],
    operationalBenefits: [
      { area: "Governanca", gain: "Padrao com controle", how: "Politica unica com autonomia local auditavel." },
      { area: "Escala", gain: "Expansao previsivel", how: "Template de tenant e rollout reutilizavel." },
      { area: "Comparabilidade", gain: "KPIs consistentes", how: "Modelo de entidade e definicao de indicador centralizada." },
      { area: "Risco", gain: "Menos erro de configuracao", how: "Mudanca com permissao e historico versionado." },
    ],
    practicalExample: {
      title: "Rollout de plataforma em grupo com 9 unidades",
      context: "Cada planta tinha regra propria de alarme e nomenclatura divergente de ativos.",
      execution: [
        "Cracao de baseline corporativa de eventos e ativos.",
        "Estruturacao de perfis RBAC por funcao e escopo geograficos.",
        "Plano de rollout por ondas com validacao de compliance operacional.",
      ],
      outcome:
        "A organizacao passou a comparar disponibilidade e energia entre plantas no mesmo criterio e reduziu incidentes de configuracao em ambientes produtivos.",
    },
    comparison: {
      columns: ["Cenario", "Sem multi-tenant robusto", "Com arquitetura iobee"],
      rows: [
        ["Escala para nova planta", "Customizacao do zero", "Template de tenant com onboarding rapido"],
        ["Controle de acesso", "Permissao ampla e difusa", "RBAC por planta, area e equipamento"],
        ["Auditoria", "Parcial e dispersa", "Unica e rastreavel ponta a ponta"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description: "Mapa corporativo com varios tenants/plants e camada Guard transversal de controle e auditoria.",
      bullets: ["Tenant isolation", "RBAC hierarchy", "Shared intelligence layer"],
    },
    conclusion:
      "Operacao multi-site sem governanca vira colecao de excecoes. Com arquitetura multi-tenant e Guard transversal, ela vira sistema escalavel.",
    cta: {
      title: "Quer estruturar seu rollout multi-site com risco controlado?",
      primary: "Solicitar plano de arquitetura",
      secondary: "Agendar conversa com time tecnico",
    },
  },
  {
    slug: "rbac-auditoria-rastreabilidade-industrial",
    title: "RBAC Industrial: Permissao por Planta, Linha e Equipamento",
    subtitle: "Como evitar risco operacional quando varias equipes compartilham a mesma plataforma.",
    excerpt:
      "Controle de acesso generico nao atende ambiente industrial complexo. RBAC granular e requisito de operacao segura.",
    pillar: "seguranca-governanca",
    audience: "TI industrial, seguranca da informacao, compliance e operacao",
    readTime: "11 min",
    publishedAt: "2026-04-18",
    tags: ["rbac", "auditoria", "compliance", "seguranca"],
    problem:
      "Em ambiente multi-site, equipes de operacao, engenharia e manutencao acessam o mesmo ecossistema. Sem controle granular, qualquer alteracao mal autorizada pode gerar parada, risco de seguranca e nao conformidade.",
    traditionalLimits: [
      "Permissoes por perfil amplo, sem recorte operacional.",
      "Sem trilha completa de quem alterou regra, limite ou comando.",
      "Dificuldade de aplicar segregacao de funcao por unidade.",
      "Auditoria manual e custosa em revisao de incidente.",
    ],
    iobeeSolution: [
      { title: "Guard com RBAC hierarquico", text: "Permissao por empresa, planta, area, linha, ativo e tipo de acao operacional." },
      { title: "Auditoria por evento de configuracao", text: "Toda mudanca relevante gera historico rastreavel com timestamp, usuario e escopo." },
      { title: "SSO e identidade corporativa", text: "Acesso integrado com politica central de identidade e ciclo de vida de usuario." },
    ],
    operationalBenefits: [
      { area: "Seguranca operacional", gain: "Menos risco de mudanca indevida", how: "Acao sensivel restrita por escopo e papel." },
      { area: "Compliance", gain: "Auditoria mais simples", how: "Evidencia pronta para revisao interna e externa." },
      { area: "Confianca da operacao", gain: "Maior previsibilidade", how: "Equipe sabe quem pode alterar o que e quando." },
      { area: "Resposta a incidente", gain: "Investigacao mais rapida", how: "Timeline completa de mudancas e comandos." },
    ],
    practicalExample: {
      title: "Ambiente com operadores locais e equipe corporativa",
      context: "Havia conflito de alteracao de limite de alarme em horario critico sem registro claro de autoria.",
      execution: [
        "Definicao de matriz RBAC por funcao e escopo operacional.",
        "Habilitacao de trilha de auditoria para regras, comandos e permissao.",
        "Integracao com SSO para padronizar ciclo de acesso.",
      ],
      outcome:
        "A empresa eliminou mudancas anonimas em ambiente produtivo e reduziu tempo de investigacao de incidente de horas para minutos.",
    },
    comparison: {
      columns: ["Tema", "Controle basico", "Guard transversal iobee"],
      rows: [
        ["Escopo de permissao", "Perfil global", "Granular por planta, linha e ativo"],
        ["Evidencia de mudanca", "Log parcial", "Auditoria completa e rastreavel"],
        ["Gestao de identidade", "Manual", "Integrada via SSO e politica corporativa"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description: "Piramide de RBAC com escopo corporativo, planta, area e ativo + trilha de auditoria lateral.",
      bullets: ["Hierarquia de acesso", "Acoes controladas", "Evidencia de auditoria"],
    },
    conclusion:
      "Em industria, permissao e parte da operacao, nao apenas da TI. Guard transforma acesso em governanca operacional concreta.",
    cta: {
      title: "Quer revisar sua matriz de acesso industrial com foco em risco?",
      primary: "Agendar avaliacao de governanca",
      secondary: "Falar com especialista em Guard",
    },
  },
  {
    slug: "seguranca-industrial-alem-de-firewall",
    title: "Seguranca Industrial Vai Alem de Firewall",
    subtitle: "Protecao operacional exige identidade, trilha, contexto e politica de mudanca.",
    excerpt:
      "Firewall protege perimetro, mas nao resolve governanca de acao operacional dentro da plataforma.",
    pillar: "seguranca-governanca",
    audience: "CISO, TI industrial, operacao e compliance",
    readTime: "10 min",
    publishedAt: "2026-04-18",
    tags: ["cyber", "operacao", "governanca", "rastreabilidade"],
    problem:
      "Empresas investem em seguranca de rede, mas seguem expostas a erros internos, permissao excessiva e falta de rastreabilidade de alteracao operacional.",
    traditionalLimits: [
      "Foco em borda de rede sem governanca de acao na aplicacao.",
      "Permissao compartilhada entre usuarios e terceiros.",
      "Ausencia de trilha completa para comando remoto e mudanca de regra.",
      "Baixa capacidade de provar conformidade em auditoria critica.",
    ],
    iobeeSolution: [
      { title: "Guard como camada transversal", text: "Seguranca aplicada em todas as camadas Bees, Pollen, Hive e ICOS." },
      { title: "Identidade e permissao orientada por risco", text: "SSO, RBAC e segregacao de funcao para reduzir superficie de erro humano." },
      { title: "Auditoria operacional de ponta a ponta", text: "Historico unificado de configuracao, evento, acao e justificativa." },
    ],
    operationalBenefits: [
      { area: "Risco cibernetico operacional", gain: "Menor exposicao", how: "Acesso minimo necessario e controle por escopo." },
      { area: "Risco de processo", gain: "Menos alteracao indevida", how: "Fluxo de mudanca auditado com responsabilizacao." },
      { area: "Compliance", gain: "Maior prontidao", how: "Evidencias exportaveis e rastreaveis para auditoria." },
      { area: "Continuidade", gain: "Menos impacto de incidente", how: "Resposta orientada por trilha de evento confiavel." },
    ],
    practicalExample: {
      title: "Projeto global com acesso de integrador externo",
      context: "A organizacao precisava liberar acesso temporario sem expor o ambiente completo.",
      execution: [
        "Criacao de perfil temporario com escopo por planta e ativo.",
        "Registro de todas as mudancas de parametro durante janela de manutencao.",
        "Revogacao automatica apos encerramento da atividade.",
      ],
      outcome:
        "A empresa cumpriu exigencia de auditoria global sem bloquear a manutencao e sem abrir excecao de seguranca irrestrita.",
    },
    comparison: {
      columns: ["Controle", "Modelo tradicional", "Arquitetura iobee"],
      rows: [
        ["Perimetro", "Firewall + VPN", "Firewall + identidade + governanca de acao"],
        ["Mudanca operacional", "Baixa rastreabilidade", "Registro completo e auditavel"],
        ["Acesso de terceiro", "Conta ampla", "Escopo minimo e expiracao controlada"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description: "Camadas da arquitetura com Guard atravessando identidade, permissao, auditoria e criptografia.",
      bullets: ["Network layer", "Application layer", "Governance layer"],
    },
    conclusion:
      "Seguranca industrial efetiva combina tecnologia de protecao com governanca operacional. Sem isso, o risco apenas muda de lugar.",
    cta: {
      title: "Quer validar maturidade de seguranca operacional da sua plataforma?",
      primary: "Solicitar assessment tecnico",
      secondary: "Agendar conversa com especialista",
    },
  },
  {
    slug: "ia-industrial-sem-buzzword",
    title: "IA Industrial Nao e Chatbot: O que Realmente Gera Resultado",
    subtitle: "Como transformar serie temporal e evento operacional em previsao util para manutencao e producao.",
    excerpt:
      "Projetos de IA fracassam quando ignoram contexto operacional. O ganho vem da combinacao de dados, twin e regra de negocio.",
    pillar: "ia-industrial",
    audience: "Diretores industriais, engenharia de dados e confiabilidade",
    readTime: "14 min",
    publishedAt: "2026-04-18",
    tags: ["ia", "predicao", "series temporais", "advisor"],
    problem:
      "A maioria dos projetos de IA industrial nao passa da prova de conceito porque tenta modelar previsao sem qualidade de dado, sem contexto de ativo e sem processo de decisao definido.",
    traditionalLimits: [
      "Modelos treinados sem relacao com condicao real de operacao.",
      "Sinal historico sem anotacao de evento operacional relevante.",
      "Saida de IA sem integracao com rotina de manutencao e turno.",
      "Ausencia de governanca para ajustar regra e explicar recomendacao.",
    ],
    iobeeSolution: [
      { title: "Base operacional no Hive", text: "Dados historicos, eventos, regras e comandos ficam estruturados para analise consistente." },
      { title: "Contexto via Device e Asset Twin", text: "ICOS treina e infera com conhecimento de ativo, processo e dependencia." },
      { title: "Advisor operacional", text: "Saida da IA vira recomendacao acionavel, com prioridade, justificativa e trilha auditavel no Guard." },
    ],
    operationalBenefits: [
      { area: "Previsibilidade", gain: "Antecipacao de falha", how: "Deteccao de tendencia antes do limite fixo de alarme." },
      { area: "Energia", gain: "Reducao de desperdicio", how: "Identificacao de operacao fora da faixa de eficiencia." },
      { area: "Manutencao", gain: "Planejamento orientado por risco", how: "Recomendacao com janela de intervencao sugerida." },
      { area: "Confianca", gain: "Aceitacao operacional", how: "Explicacao de inferencia com sinais que sustentam a recomendacao." },
    ],
    practicalExample: {
      title: "Predicao de falha em bomba de processo",
      context:
        "A planta tinha historico de paradas trimestrais sem padrao evidente em dashboard tradicional.",
      execution: [
        "Consolidacao de serie temporal de corrente, vibracao, temperatura e regime de carga.",
        "Correlacao de eventos de operacao e manutencao para rotular comportamento anormal.",
        "Implementacao de advisor com recomendacao de inspeção por risco crescente.",
      ],
      outcome:
        "A equipe antecipou duas falhas potenciais em janela de 60 dias, evitando parada emergencial e reduzindo custo de manutencao corretiva.",
    },
    comparison: {
      columns: ["Etapa", "IA sem contexto", "IA com arquitetura iobee"],
      rows: [
        ["Entrada", "Tag historica isolada", "Serie temporal + evento + twin"],
        ["Saida", "Score sem acao", "Recomendacao operacional com prioridade"],
        ["Governanca", "Baixa explicabilidade", "Trilha auditavel de inferencia e acao"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description: "Pipeline de IA: Bees/Pollen -> Hive (historico) -> ICOS (modelo) -> Advisor -> Guard (auditoria).",
      bullets: ["Data foundation", "Context layer", "Inference layer", "Action layer"],
    },
    conclusion:
      "IA industrial que gera resultado e aquela que nasce dentro da operacao, com contexto, governanca e conexao direta com rotina de decisao.",
    cta: {
      title: "Quer avaliar um caso de IA com impacto operacional mensuravel?",
      primary: "Agendar sessao tecnica de IA",
      secondary: "Solicitar demonstracao do Advisor",
    },
  },
  {
    slug: "de-alarmes-para-recomendacoes-operacionais",
    title: "De Alarmes para Recomendacoes Operacionais",
    subtitle: "Como sair de notificacao em massa para acao priorizada com contexto de risco.",
    excerpt:
      "Alarme sem priorizacao gera fadiga. Recomendacao operacional reduz ruido e melhora tempo de resposta.",
    pillar: "ia-industrial",
    audience: "Operacao, manutencao, engenharia de processos",
    readTime: "11 min",
    publishedAt: "2026-04-18",
    tags: ["alarmes", "advisor", "priorizacao", "icos"],
    problem:
      "Operadores recebem centenas de alarmes por turno, muitos sem relevancia imediata. O excesso reduz atencao para eventos realmente criticos e aumenta risco de parada.",
    traditionalLimits: [
      "Limites fixos sem considerar fase de processo.",
      "Sem correlacao entre alarmes relacionados.",
      "Sem recomendacao de acao por papel e criticidade.",
      "Escalonamento multicanal sem filtro de ruido.",
    ],
    iobeeSolution: [
      { title: "Regras contextuais no Hive", text: "Alarmes passam a considerar estado de ativo, processo e janela operacional." },
      { title: "Correlacao e prioridade no ICOS", text: "Eventos similares sao agrupados para apontar causa e prioridade de resposta." },
      { title: "Guard para trilha de acao", text: "Resposta, acknowledge e alteracao de regra ficam auditados por usuario e horario." },
    ],
    operationalBenefits: [
      { area: "Carga cognitiva", gain: "Menos ruido por turno", how: "Consolidacao de evento e suppressao inteligente." },
      { area: "Tempo de resposta", gain: "Atuacao mais rapida", how: "Recomendacao clara com contexto do ativo." },
      { area: "Efetividade de manutencao", gain: "Menos chamado improdutivo", how: "Priorizacao por impacto operacional." },
      { area: "Governanca", gain: "Evolucao continua de regras", how: "Historico de decisao para ajuste fino de alerta." },
    ],
    practicalExample: {
      title: "Sala de controle com 24x7 em utilidades",
      context: "Alto volume de notificador impedindo foco no evento critico.",
      execution: [
        "Classificacao de alarmes por criticidade e contexto de processo.",
        "Agrupamento de eventos repetitivos por causa provavel.",
        "Entrega de recomendacao por perfil de operador e manutencao.",
      ],
      outcome:
        "Reducao de 47% no volume efetivo de alarmes e queda significativa em tempo de reconhecimento de evento critico.",
    },
    comparison: {
      columns: ["Modelo de alerta", "Caracteristica", "Resultado tipico"],
      rows: [
        ["Notificacao em massa", "Todo evento vira alarme", "Fadiga e baixa acao efetiva"],
        ["Alarme com regra basica", "Filtro parcial", "Melhora limitada em ambiente complexo"],
        ["Advisor iobee", "Contexto + prioridade + acao", "Resposta focada no risco real"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description: "Funil de evento: captura -> correlacao -> priorizacao -> recomendacao -> acao auditada.",
      bullets: ["Raw event", "Context filter", "Priority score", "Action playbook"],
    },
    conclusion:
      "A maturidade operacional nao esta em receber mais alerta, e sim em receber o alerta certo com orientacao clara de resposta.",
    cta: {
      title: "Quer reduzir ruido de alarme e aumentar resposta efetiva?",
      primary: "Solicitar diagnostico de alertas",
      secondary: "Agendar demonstracao do Advisor",
    },
  },
  {
    slug: "monitoramento-inteligente-de-compressores-industriais",
    title: "Como Monitorar Compressores de Forma Realmente Inteligente",
    subtitle: "De telemetria basica para estrategia de disponibilidade, energia e manutencao.",
    excerpt:
      "Compressores exigem leitura conjunta de carga, vibracao, temperatura e energia para evitar parada e desperdicio.",
    pillar: "casos-operacionais",
    audience: "Utilidades, manutencao, energia, operacao industrial",
    readTime: "13 min",
    publishedAt: "2026-04-18",
    tags: ["compressor", "energia", "utilidades", "predicao"],
    problem:
      "Compressores costumam ser monitorados por poucos indicadores, o que oculta degradacao progressiva e perda energetica antes da falha.",
    traditionalLimits: [
      "Leitura isolada de pressao sem cruzamento com consumo e vibracao.",
      "Alarmes tardios quando o problema ja compromete producao.",
      "Sem correlacao entre regime de carga e eficiencia energetica.",
      "Manutencao baseada em calendario e nao em condicao real.",
    ],
    iobeeSolution: [
      { title: "Bees para coleta multiponto", text: "Capta sinais eletricos, mecanicos e de processo em fluxo continuo." },
      { title: "Asset Twin do sistema de ar", text: "Relaciona compressores, reservatorio, secadores e demanda de linha." },
      { title: "ICOS para tendencia e recomendacao", text: "Identifica comportamento anormal e recomenda janela de intervencao." },
      { title: "Guard para operacao segura", text: "Controle de permissao em comandos e mudancas de regra de utilidades." },
    ],
    operationalBenefits: [
      { area: "Downtime", gain: "Menos parada emergencial", how: "Previsao de desvio antes do alarme critico." },
      { area: "Energia", gain: "Menor consumo especifico", how: "Otimiza regime de carga e elimina operacao ineficiente." },
      { area: "Manutencao", gain: "Intervencao orientada por condicao", how: "Prioriza ativo com degradacao real." },
      { area: "Qualidade de utilidade", gain: "Pressao mais estavel", how: "Correlacao entre demanda e disponibilidade de sistema." },
    ],
    practicalExample: {
      title: "Sistema de ar comprimido em planta de embalagem",
      context: "Queda de pressao em horario de pico com aumento de energia e retrabalho na producao.",
      execution: [
        "Modelagem de Device Twin por compressor e ponto de distribuicao.",
        "Regra de eficiencia combinando pressao entregue e kWh por metro cubico.",
        "Recomendacao ICOS para redistribuicao de carga e manutencao preventiva.",
      ],
      outcome:
        "Reducao de 11% no consumo energetico do sistema e queda de ocorrencias de baixa pressao no horario critico.",
    },
    comparison: {
      columns: ["Abordagem", "Foco", "Resultado"],
      rows: [
        ["Telemetria basica", "Pressao e alarme limite", "Baixa capacidade preditiva"],
        ["Monitoramento com dashboard", "Visualizacao de tendencia", "Analise ainda manual"],
        ["iobee com twin + ICOS", "Contexto e recomendacao", "Acao antecipada e ganho operacional"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description: "Mapa do sistema de ar comprimido com pontos de coleta, ativo principal e recomendacao do ICOS.",
      bullets: ["Supply", "Distribution", "Demand", "Advisor output"],
    },
    conclusion:
      "Compressor e utilidade critica. Tratar apenas como sensor de pressao e perder oportunidade de disponibilidade e eficiencia.",
    cta: {
      title: "Quer um blueprint de monitoramento inteligente para utilidades?",
      primary: "Solicitar conversa tecnica",
      secondary: "Agendar demonstracao por caso de uso",
    },
  },
  {
    slug: "scada-vs-plataforma-de-inteligencia-operacional",
    title: "SCADA vs Plataforma de Inteligencia Operacional",
    subtitle: "Por que supervisao tradicional e necessaria, mas insuficiente para operacao enterprise multi-site.",
    excerpt:
      "SCADA continua relevante para controle local, mas nao substitui arquitetura de contexto, inferencia e governanca.",
    pillar: "comparativos",
    audience: "Direcao industrial, engenharia de automacao, TI e OT",
    readTime: "16 min",
    publishedAt: "2026-04-18",
    tags: ["scada", "comparativo", "enterprise", "multi-site"],
    problem:
      "Empresas tentam escalar operacao corporativa usando apenas SCADA local. O modelo funciona para supervisao de celula, mas falha quando a decisao precisa de contexto multiativo, historico integrado e governanca corporativa.",
    traditionalLimits: [
      "Foco de SCADA em supervisao e controle local, nao em inteligencia corporativa.",
      "Historico e regra dispersos entre sistemas e plantas.",
      "Baixa capacidade de correlacionar eventos entre utilidades, processo e manutencao.",
      "Governanca e auditoria limitadas para ambiente multiempresa.",
    ],
    iobeeSolution: [
      { title: "Convivencia com legado", text: "A iobee integra SCADA, CLPs e historicos existentes sem exigir substituicao imediata." },
      { title: "Arquitetura Bees/Pollen/Hive/ICOS", text: "Cria camada corporativa de dados contextualizados e recomendacao operacional." },
      { title: "Guard transversal", text: "Controla acesso, auditoria e compliance em ambiente distribuido e multi-site." },
    ],
    operationalBenefits: [
      { area: "Visao corporativa", gain: "Comparacao real entre plantas", how: "Modelo unico de ativos e indicadores." },
      { area: "Decisao", gain: "Menos reacao tardia", how: "Advisor operacional com contexto e prioridade." },
      { area: "Governanca", gain: "Maior controle", how: "Trilha auditavel de mudancas e comandos." },
      { area: "Escalabilidade", gain: "Expansao com padrao", how: "Arquitetura multi-tenant e rollout por ondas." },
    ],
    practicalExample: {
      title: "Grupo industrial com SCADA em cada unidade",
      context: "Cada planta tinha controle local funcional, mas o corporativo nao conseguia comparar disponibilidade e energia em criterio unico.",
      execution: [
        "Integracao de fontes SCADA ao fluxo Bees/Pollen sem mexer no controle local.",
        "Camada Hive para normalizacao de eventos, regras e historico.",
        "ICOS para benchmark operacional entre ativos equivalentes em unidades distintas.",
      ],
      outcome:
        "A organizacao passou a priorizar investimentos com base em evidencia operacional consolidada, reduzindo falha recorrente em ativos criticos.",
    },
    comparison: {
      columns: ["Dimensao", "SCADA tradicional", "Plataforma de inteligencia operacional iobee"],
      rows: [
        ["Escopo", "Supervisao local", "Operacao corporativa multi-site"],
        ["Contexto", "Tag e tela", "Twin + relacao entre ativos e processo"],
        ["Resposta", "Alarme para operador", "Recomendacao operacional por criticidade"],
        ["Governanca", "Limitada", "Guard transversal com RBAC e auditoria"],
      ],
    },
    diagram: {
      title: "Diagrama sugerido",
      description:
        "Arquitetura hibrida com SCADA na camada de controle local e iobee na camada de inteligencia e governanca enterprise.",
      bullets: ["Controle local", "Camada de dados", "Camada de decisao", "Camada de seguranca transversal"],
    },
    conclusion:
      "SCADA nao precisa ser descartado; precisa ser complementado por uma arquitetura que transforme supervisao em inteligencia operacional escalavel.",
    cta: {
      title: "Quer desenhar um roadmap SCADA + iobee sem ruptura?",
      primary: "Agendar conversa de arquitetura",
      secondary: "Solicitar plano de evolucao em fases",
    },
  },
];
