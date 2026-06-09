export const seriesGeneratedMaterials = [
  {
    slug: "benchmark-operacional-arquitetura-bees-pollen-hive-icos",
    title: "Artigo tecnico com benchmark operacional: Bees -> Pollen -> Hive -> ICOS",
    summary:
      "Benchmark pratico para comparar operacoes que usam monitoramento passivo versus arquitetura industrial contextualizada.",
    problemType: "Falta de visibilidade da operacao",
    sectors: ["Multissetor", "Alimentos e bebidas", "Manufatura discreta"],
    deciderProfiles: ["Diretor industrial", "Gerente de manutencao", "TI / OT"],
    assetTypes: ["Todos os ativos", "SCADA / CLP / Edge"],
    materialType: "Comparativo",
    featuredFor: ["diretoria", "ti-ot"],
    usageCount: 242,
    downloadCount: 201,
    objective:
      "Entregar referencia objetiva de desempenho operacional para defender evolucao arquitetural com base em evidencia.",
    costOfInaction:
      "Sem benchmark, a decisao segue por opiniao e a operacao continua sem padrao de maturidade entre plantas.",
    financialMatrix: [
      { metric: "Downtime evitavel", formula: "horas reativas x custo/hora", example: "R$ 1,2M/ano" },
      { metric: "Tempo de resposta", formula: "MTTR atual - MTTR alvo", example: "-28% em 6 meses" },
      { metric: "Produtividade de engenharia", formula: "horas analise manual x custo hora", example: "R$ 180k/ano" },
    ],
    internalNarrative: [
      "Hoje medimos indicadores sem benchmark de maturidade operacional comparavel.",
      "O benchmark mostra onde perdemos disponibilidade por falta de contexto de ativo.",
      "A iobee padroniza fluxo de captura, processamento e decisao por planta.",
      "Com Guard transversal, o ganho e reproduzivel e auditavel entre unidades.",
    ],
    pitch2min: [
      "Abrir com diferenca de desempenho entre operacoes com e sem contexto.",
      "Mostrar gap de MTTR e downtime evitavel.",
      "Defender projeto de arquitetura com metas objetivas por etapa.",
    ],
    pitch10min: [
      "Criterios do benchmark e baseline da planta.",
      "Comparativo por camada arquitetural.",
      "Impacto operacional e financeiro por cenario.",
      "Plano de rollout para capturar o gap identificado.",
    ],
    objections: [
      { question: "Benchmark nao reflete nossa realidade.", answer: "O material permite calibrar benchmark com dados internos da propria planta." },
      { question: "Ja temos indicadores.", answer: "Indicador isolado sem benchmark nao orienta prioridade de evolucao." },
      { question: "Comparativo pode enviesar decisao.", answer: "A metodologia expoe premissas e permite validacao por engenharia e TI/OT." },
    ],
    emailTemplate: {
      subject: "Benchmark operacional para evolucao da arquitetura industrial",
      body:
        "Consolidamos benchmark tecnico-operacional para identificar lacunas de resposta e disponibilidade na planta. Recomendo avaliarmos a trilha arquitetural da iobee com metas objetivas de ganho.",
    },
    iobeeDifferentials: ["Fluxo Bees->Pollen->Hive->ICOS", "Contexto operacional", "Decisao acionavel", "Guard transversal"],
  },
  {
    slug: "checklist-maturidade-arquitetural-industrial",
    title: "Checklist de maturidade arquitetural industrial",
    summary:
      "Checklist estruturado por camadas para diagnosticar em minutos o nivel atual da operacao e priorizar investimentos.",
    problemType: "Dificuldade de integracao",
    sectors: ["Multissetor"],
    deciderProfiles: ["TI / OT", "Engenharia", "Diretor industrial"],
    assetTypes: ["SCADA / CLP / Edge", "Todos os ativos"],
    materialType: "Checklist",
    featuredFor: ["ti-ot", "diretoria"],
    usageCount: 269,
    downloadCount: 223,
    objective:
      "Ajudar o time de campo e engenharia a organizar um diagnostico unico da arquitetura antes da reuniao de aprovacao.",
    costOfInaction:
      "Sem checklist comum, cada area avalia por criterio proprio e o projeto perde velocidade de aprovacao.",
    financialMatrix: [
      { metric: "Retrabalho de arquitetura", formula: "iteracoes sem alinhamento x custo de equipe", example: "R$ 95k/ano" },
      { metric: "Atraso de aprovacao", formula: "meses de atraso x custo de nao agir", example: "R$ 420k/ano" },
      { metric: "Risco de integracao", formula: "incidentes de interoperabilidade x custo", example: "R$ 160k/ano" },
    ],
    internalNarrative: [
      "Sem criterio comum, tecnologia vira discussao abstrata entre areas.",
      "O checklist padroniza maturidade por camada: field, edge, core, intelligence e security.",
      "A iobee permite evolucao faseada sem romper sistemas existentes.",
      "Com diagnostico claro, a aprovacao passa de opiniao para evidencia.",
    ],
    pitch2min: [
      "Apresentar o score atual de maturidade.",
      "Mostrar top 3 lacunas de maior risco.",
      "Solicitar aprovacao de fase 1 com escopo controlado.",
    ],
    pitch10min: [
      "Criticos do checklist por camada.",
      "Pontuacao atual e benchmark alvo.",
      "Plano de priorizacao por impacto.",
      "Governanca da evolucao arquitetural.",
    ],
    objections: [
      { question: "Checklist simplifica demais.", answer: "Ele simplifica a leitura executiva sem perder criterio tecnico de camada." },
      { question: "Ja sabemos onde estao os problemas.", answer: "Checklist traz priorizacao objetiva e comparavel entre plantas." },
      { question: "Vai consumir tempo da equipe.", answer: "Aplicacao e curta e reduz semanas de discussao desestruturada." },
    ],
    emailTemplate: {
      subject: "Checklist de maturidade arquitetural para decisao de investimento",
      body:
        "Aplicamos checklist de maturidade em camadas e identificamos lacunas com impacto operacional direto. Sugiro revisao executiva para aprovar a fase inicial do plano arquitetural.",
    },
    iobeeDifferentials: ["Arquitetura em camadas", "Integracao com legado", "Escalabilidade enterprise", "Governanca operacional"],
  },
  {
    slug: "landing-page-campanha-vertical-industrial",
    title: "Landing page de campanha por vertical industrial",
    summary:
      "Template one-page para campanha por segmento com dor operacional, custo de nao agir e proposta iobee.",
    problemType: "Falta de visibilidade da operacao",
    sectors: ["Alimentos e bebidas", "Saneamento", "Energia e utilidades", "OEM"],
    deciderProfiles: ["Diretor industrial", "Compras", "Gerente de producao"],
    assetTypes: ["Todos os ativos"],
    materialType: "One-page comercial",
    featuredFor: ["diretoria", "producao"],
    usageCount: 198,
    downloadCount: 166,
    objective:
      "Gerar pagina de convencimento por vertical com narrativa consultiva para abrir reuniao executiva.",
    costOfInaction:
      "Campanhas genericas nao conectam dor operacional real e reduzem taxa de resposta de decisores.",
    financialMatrix: [
      { metric: "Perda de oportunidade comercial", formula: "leads nao convertidos x valor medio", example: "R$ 480k/ano" },
      { metric: "Ciclo de venda longo", formula: "dias adicionais x custo comercial", example: "+35 dias" },
      { metric: "Baixa qualidade de lead", formula: "reunioes improdutivas x custo hora", example: "R$ 74k/ano" },
    ],
    internalNarrative: [
      "Cada vertical tem riscos e indicadores diferentes; a mensagem precisa refletir isso.",
      "Landing por vertical traduz tecnologia em dor operacional e ganho financeiro especifico.",
      "A iobee se posiciona como arquitetura industrial, nao como dashboard generico.",
    ],
    pitch2min: [
      "Apresentar dor dominante da vertical alvo.",
      "Mostrar custo de nao agir com benchmark do segmento.",
      "Direcionar para CTA tecnico de avaliacao de arquitetura.",
    ],
    pitch10min: [
      "Segmentacao de publico por vertical.",
      "Narrativa por dor operacional critica.",
      "Oferta iobee por camada arquitetural.",
      "Plano de captura e qualificacao de demanda.",
    ],
    objections: [
      { question: "Landing page nao convence diretoria.", answer: "Ela nao fecha venda sozinha; abre conversa executiva com argumento certo." },
      { question: "Ja temos site institucional.", answer: "Pagina vertical aumenta relevancia para dores especificas de cada setor." },
      { question: "Demanda muito conteudo.", answer: "O template reutiliza estrutura e muda apenas contexto operacional por segmento." },
    ],
    emailTemplate: {
      subject: "Template de landing page por vertical para acelerar demanda qualificada",
      body:
        "Estruturamos uma landing page por vertical para conectar dor operacional a ganho financeiro e abrir reunioes com decisores. Recomendo piloto em um segmento prioritario.",
    },
    iobeeDifferentials: ["Narrativa por vertical", "Diferenciacao enterprise", "CTA tecnico", "Prova de valor operacional"],
  },
  {
    slug: "template-governanca-planta-linha-multisite",
    title: "Template de governanca por planta e linha",
    summary:
      "Modelo de governanca para padronizar papeis, permissoes, KPIs e rotina de decisao em operacao distribuida.",
    problemType: "Falta de rastreabilidade",
    sectors: ["Multissetor"],
    deciderProfiles: ["Diretor industrial", "Gerente de manutencao", "TI / OT"],
    assetTypes: ["Todos os ativos"],
    materialType: "Template de projeto",
    featuredFor: ["diretoria", "ti-ot"],
    usageCount: 237,
    downloadCount: 196,
    objective:
      "Acelerar padronizacao multi-site sem perder autonomia local, com regras claras de operacao e governanca.",
    costOfInaction:
      "Sem governanca comum, cada planta opera de forma diferente, aumentando risco e custo de escala.",
    financialMatrix: [
      { metric: "Custo de variacao operacional", formula: "desvio de processo x custo de perda", example: "R$ 610k/ano" },
      { metric: "Tempo de decisao entre plantas", formula: "tempo de escalonamento x custo/hora", example: "R$ 170k/ano" },
      { metric: "Custo de incidente sem trilha", formula: "incidentes sem evidencia x custo medio", example: "R$ 210k/ano" },
    ],
    internalNarrative: [
      "Multi-site sem governanca vira soma de silos digitais.",
      "Template define papeis, responsabilidades e indicadores por nivel.",
      "Guard viabiliza controle granular e trilha de acao por planta e linha.",
    ],
    pitch2min: [
      "Mostrar risco de operar sem padrao entre unidades.",
      "Apresentar estrutura de governanca proposta.",
      "Solicitar aprovacao de piloto em duas plantas.",
    ],
    pitch10min: [
      "Mapa atual de governanca por unidade.",
      "Lacunas de rastreabilidade e permissao.",
      "Template alvo com papeis e KPIs.",
      "Plano de implantacao e auditoria continua.",
    ],
    objections: [
      { question: "Cada planta e diferente.", answer: "Template padroniza o essencial e preserva regras locais onde necessario." },
      { question: "Governanca aumenta burocracia.", answer: "Governanca reduz retrabalho e acelera decisao com responsabilidade clara." },
      { question: "Controle de acesso ja existe.", answer: "O diferencial e controle contextual por planta, linha e ativo com trilha completa." },
    ],
    emailTemplate: {
      subject: "Template de governanca multi-site para padronizar operacao",
      body:
        "Consolidamos um template de governanca por planta e linha para reduzir variacao operacional e risco de escala. Sugiro avaliacao executiva para iniciar piloto controlado.",
    },
    iobeeDifferentials: ["Guard com RBAC", "Padronizacao multi-site", "Rastreabilidade", "Escalabilidade operacional"],
  },
  {
    slug: "guia-rollout-90-dias-multisite",
    title: "Guia de rollout em 90 dias para operacao multi-site",
    summary:
      "Guia tecnico-operacional com ondas de implantacao e metas claras para consolidar controle em operacoes distribuidas.",
    problemType: "Falta de visibilidade da operacao",
    sectors: ["Multissetor"],
    deciderProfiles: ["Diretor industrial", "Gerente de producao", "Gerente de manutencao"],
    assetTypes: ["Todos os ativos"],
    materialType: "Guia tecnico",
    featuredFor: ["diretoria", "producao"],
    usageCount: 284,
    downloadCount: 247,
    objective:
      "Fornecer plano pratico de implantacao em 90 dias com governanca e indicadores de valor por etapa.",
    costOfInaction:
      "Sem plano faseado, projetos multi-site travam em complexidade e demoram para gerar resultado visivel.",
    financialMatrix: [
      { metric: "Atraso de rollout", formula: "meses de atraso x custo de oportunidade", example: "R$ 520k/ano" },
      { metric: "Retrabalho de implantacao", formula: "revisoes por planta x custo equipe", example: "R$ 130k/ano" },
      { metric: "Ganho acelerado", formula: "reducao downtime + energia no trimestre", example: "R$ 340k/90 dias" },
    ],
    internalNarrative: [
      "Rollout multi-site precisa equilibrar velocidade e controle de risco.",
      "O guia divide entrega em ondas com gate de validacao.",
      "A cada fase, iobee gera ganho mensuravel e prepara escala segura.",
    ],
    pitch2min: [
      "Apresentar cronograma 30/60/90 com entregas claras.",
      "Mostrar KPI minimo por fase.",
      "Pedir patrocinio executivo para destravar dependencia entre areas.",
    ],
    pitch10min: [
      "Escopo da onda 1 por planta piloto.",
      "Criticos tecnicos da onda 2.",
      "Escala corporativa na onda 3.",
      "Modelo de governanca e acompanhamento.",
    ],
    objections: [
      { question: "90 dias e agressivo.", answer: "O guia separa entregas essenciais e evita escopo inflado na fase inicial." },
      { question: "Nao temos equipe extra.", answer: "Rollout distribui carga e reduz tarefas manuais com automacao de contexto." },
      { question: "Risco de interromper operacao.", answer: "Implantacao inicia em leitura e analise, sem interferencia em controle critico." },
    ],
    emailTemplate: {
      subject: "Guia de rollout 90 dias para operacao multi-site",
      body:
        "Montamos um plano de rollout em 90 dias com ondas de implantacao e KPI de valor por etapa. Recomendo aprovacao da fase piloto para acelerar padronizacao entre plantas.",
    },
    iobeeDifferentials: ["Implantacao faseada", "Multi-tenant", "Gestao de risco", "Escala enterprise"],
  },
  {
    slug: "calculadora-ganho-reducao-downtime-multisite",
    title: "Calculadora de ganho por reducao de downtime em operacao multi-site",
    summary:
      "Calculadora pronta para estimar retorno financeiro da reducao de parada em varias plantas.",
    problemType: "Paradas inesperadas",
    sectors: ["Multissetor"],
    deciderProfiles: ["Diretor industrial", "Compras", "Gerente de producao"],
    assetTypes: ["Linhas de producao", "Todos os ativos"],
    materialType: "Calculadora de ROI",
    featuredFor: ["diretoria", "producao"],
    usageCount: 327,
    downloadCount: 291,
    objective:
      "Ajudar equipes operacionais a demonstrar impacto economico consolidado e priorizar aprovacao de projeto multi-site.",
    costOfInaction:
      "Paradas recorrentes continuam diluidas entre plantas e o custo anual real fica invisivel para diretoria.",
    financialMatrix: [
      { metric: "Downtime consolidado", formula: "soma horas paradas de todas plantas x custo/hora", example: "R$ 3,4M/ano" },
      { metric: "Cenario com reducao de 20%", formula: "downtime consolidado x 0,20", example: "R$ 680k/ano" },
      { metric: "Payback", formula: "investimento / economia mensal", example: "7 a 11 meses" },
    ],
    internalNarrative: [
      "Sem consolidacao multi-site, o problema parece pequeno em cada planta e grande no total.",
      "A calculadora torna o custo anual visivel para decisao de investimento.",
      "Com iobee, a reducao de downtime vem de contexto, priorizacao e resposta padronizada.",
    ],
    pitch2min: [
      "Mostrar custo anual consolidado de downtime.",
      "Apresentar cenario conservador de reducao.",
      "Solicitar aprovacao de piloto corporativo.",
    ],
    pitch10min: [
      "Premissas por planta e criticidade.",
      "Cenarios de ganho (10%, 20%, 30%).",
      "Comparativo com custo de investimento.",
      "Plano de captura de valor por unidade.",
    ],
    objections: [
      { question: "Calculadora simplifica demais.", answer: "Ela traz cenario inicial e pode ser refinada com dados reais por planta." },
      { question: "Cada unidade tem custo diferente.", answer: "A planilha considera variacao de custo/hora por planta e linha." },
      { question: "Retorno e incerto.", answer: "A proposta usa baseline interno e gates de expansao por resultado medido." },
    ],
    emailTemplate: {
      subject: "Estimativa consolidada de ganho por reducao de downtime",
      body:
        "Consolidamos o custo de downtime das plantas e simulamos cenarios de reducao com retorno financeiro claro. Sugiro revisao executiva para aprovar piloto multi-site com iobee.",
    },
    iobeeDifferentials: ["Visao corporativa", "Padrao de resposta", "Contexto operacional", "Escala multi-site"],
  },
  {
    slug: "whitepaper-metodologia-inferencia-icos",
    title: "Whitepaper de metodologia de inferencia para IA industrial no ICOS",
    summary:
      "Whitepaper tecnico para diferenciar inferencia operacional aplicada de pilotos de IA sem impacto real.",
    problemType: "Dados sem contexto nao geram decisao",
    sectors: ["Multissetor"],
    deciderProfiles: ["TI / OT", "Engenharia", "Diretor industrial"],
    assetTypes: ["Todos os ativos"],
    materialType: "Whitepaper",
    featuredFor: ["ti-ot", "diretoria"],
    usageCount: 212,
    downloadCount: 176,
    objective:
      "Dar base metodologica para explicar como o ICOS transforma series temporais e eventos em inferencias acionaveis.",
    costOfInaction:
      "Sem metodo de inferencia, IA vira prova de conceito sem confianca operacional e sem patrocinio de escala.",
    financialMatrix: [
      { metric: "Pilotos sem escala", formula: "POCs sem retorno x custo de projeto", example: "R$ 420k/ano" },
      { metric: "Falhas nao antecipadas", formula: "eventos evitaveis x custo medio", example: "R$ 690k/ano" },
      { metric: "Ganho com inferencia aplicada", formula: "reducao de falha + energia + MTTR", example: "R$ 1,1M/ano" },
    ],
    internalNarrative: [
      "IA industrial precisa de base de dados confiavel e contexto de ativo.",
      "A metodologia do ICOS combina feature operacional, regra de negocio e inferencia.",
      "Saida do modelo vira recomendacao operacional com trilha de auditoria.",
    ],
    pitch2min: [
      "Mostrar diferenca entre IA de laboratorio e IA operacional.",
      "Explicar por que contexto e condicao de escala.",
      "Propor caso de uso com metrica clara de resultado.",
    ],
    pitch10min: [
      "Camadas da metodologia de inferencia.",
      "Criticos de qualidade de dado.",
      "Como a recomendacao entra no fluxo operacional.",
      "Governanca de ajuste de modelo e regra.",
    ],
    objections: [
      { question: "IA industrial ja tentou e falhou.", answer: "Falha quando ignora contexto e governanca; o whitepaper detalha como evitar isso." },
      { question: "Modelo e caixa preta.", answer: "A metodologia prioriza explicabilidade operacional e trilha de decisao." },
      { question: "Nao temos cientista de dados dedicado.", answer: "A abordagem usa engenharia operacional para guiar modelos com valor pratico." },
    ],
    emailTemplate: {
      subject: "Whitepaper tecnico de inferencia operacional com ICOS",
      body:
        "Organizamos metodologia de inferencia para IA industrial com foco em impacto operacional medivel. Sugiro leitura tecnica conjunta para alinharmos proximo caso de uso.",
    },
    iobeeDifferentials: ["ICOS", "Inferencia contextual", "Advisor operacional", "Guard para governanca"],
  },
  {
    slug: "checklist-prontidao-dados-historicos-ia-industrial",
    title: "Checklist de prontidao de dados historicos para IA industrial",
    summary:
      "Checklist para validar qualidade, contexto e disponibilidade de historico antes de iniciar projeto de IA.",
    problemType: "Falta de historico",
    sectors: ["Multissetor"],
    deciderProfiles: ["TI / OT", "Engenharia", "Gerente de manutencao"],
    assetTypes: ["Todos os ativos", "SCADA / CLP / Edge"],
    materialType: "Checklist",
    featuredFor: ["ti-ot", "manutencao"],
    usageCount: 257,
    downloadCount: 218,
    objective:
      "Reduzir risco de fracasso em projetos de IA garantindo prontidao minima de dados e governanca.",
    costOfInaction:
      "Sem prontidao de dados, o projeto consome tempo e budget sem gerar recomendacao confiavel para operacao.",
    financialMatrix: [
      { metric: "Retrabalho de modelagem", formula: "sprints sem dados validos x custo equipe", example: "R$ 150k/ano" },
      { metric: "Atraso de projeto", formula: "meses de atraso x custo de nao agir", example: "R$ 380k/ano" },
      { metric: "Qualidade de inferencia", formula: "alertas corretos / alertas totais", example: ">80% alvo operacional" },
    ],
    internalNarrative: [
      "IA sem historico consistente produz alertas pouco confiaveis.",
      "Checklist valida completude temporal, semantica e qualidade de dado.",
      "Com Hive e ICOS, o historico ganha estrutura para inferencia aplicada.",
    ],
    pitch2min: [
      "Mostrar porque dados prontos vem antes de modelo.",
      "Apontar 3 gaps de prontidao atuais.",
      "Solicitar fase curta de saneamento e contextualizacao.",
    ],
    pitch10min: [
      "Criticos de qualidade por fonte.",
      "Gap analysis de contexto operacional.",
      "Plano de prontidao em 4 semanas.",
      "Passagem para caso de uso de IA com KPI.",
    ],
    objections: [
      { question: "Ja temos muito dado.", answer: "Volume nao substitui qualidade, contexto e consistencia temporal para inferencia." },
      { question: "Checklist atrasa projeto.", answer: "Ele evita meses de retrabalho com modelo sem base confiavel." },
      { question: "Nao temos dono do dado.", answer: "Checklist define ownership por camada e acelera governanca." },
    ],
    emailTemplate: {
      subject: "Checklist de prontidao de dados para IA industrial",
      body:
        "Aplicamos checklist de prontidao e identificamos gaps de historico que podem comprometer inferencia. Recomendo fase de ajuste antes de escalar o caso de IA.",
    },
    iobeeDifferentials: ["Hive para historico", "Contexto de ativo", "Base para inferencia", "Governanca de dados"],
  },
  {
    slug: "comparativo-advisor-vs-dashboard-convencional",
    title: "Comparativo Advisor vs dashboard convencional",
    summary:
      "Comparativo objetivo para mostrar por que recomendacao operacional supera visualizacao passiva em ambientes criticos.",
    problemType: "Alarmes em excesso",
    sectors: ["Multissetor"],
    deciderProfiles: ["Gerente de producao", "Gerente de manutencao", "Diretor industrial"],
    assetTypes: ["Todos os ativos"],
    materialType: "Comparativo",
    featuredFor: ["producao", "diretoria"],
    usageCount: 338,
    downloadCount: 302,
    objective:
      "Ajudar o time operacional a explicar diferenca entre mostrar dado e orientar decisao com prioridade e contexto.",
    costOfInaction:
      "Com dashboard passivo, operacao segue reagindo tarde, com ruido de alarme e baixa qualidade de resposta.",
    financialMatrix: [
      { metric: "Tempo de triagem de alarme", formula: "alarmes x tempo medio x custo", example: "R$ 210k/ano" },
      { metric: "Paradas por resposta tardia", formula: "eventos criticos x custo medio", example: "R$ 760k/ano" },
      { metric: "Ganho com advisor", formula: "reducao de ruido + resposta mais rapida", example: "R$ 490k/ano" },
    ],
    internalNarrative: [
      "Dashboard e visao. Advisor e orientacao de acao.",
      "Sem contexto, operador recebe volume; com advisor, recebe prioridade e recomendacao.",
      "ICOS converte evento em acao sugerida com justificativa operacional.",
    ],
    pitch2min: [
      "Diferenciar visualizacao de recomendacao operacional.",
      "Mostrar custo de resposta tardia atual.",
      "Propor piloto advisor em ativo critico.",
    ],
    pitch10min: [
      "Comparativo funcional lado a lado.",
      "Impacto em MTTR e estabilidade de turno.",
      "Casos de uso com maior potencial.",
      "Plano de adocao com governanca de regra.",
    ],
    objections: [
      { question: "Dashboard ja atende equipe.", answer: "Atende visualizacao, mas nao reduz carga cognitiva nem prioriza acao automaticamente." },
      { question: "Advisor parece complexo.", answer: "A complexidade fica na plataforma; a operacao recebe orientacao simples e acionavel." },
      { question: "Nao queremos dependencia de IA.", answer: "Advisor combina regra operacional e inferencia, com trilha auditavel no Guard." },
    ],
    emailTemplate: {
      subject: "Comparativo tecnico: Advisor operacional vs dashboard convencional",
      body:
        "Preparamos comparativo objetivo entre abordagem passiva e advisor operacional para reduzir resposta tardia e fadiga de alarme. Sugiro alinhamento rapido com manutencao e producao.",
    },
    iobeeDifferentials: ["Advisor no ICOS", "Priorizacao contextual", "Reducao de ruido", "Acao auditavel"],
  },
];
