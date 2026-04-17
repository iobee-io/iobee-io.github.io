import { SimplePageTemplate } from "../components/layout/SimplePageTemplate";

export default function UseCasesPage() {
  return (
    <SimplePageTemplate
      badge="Casos de Uso"
      bullets={[
        "Deteccao antecipada de anomalias em compressores e bombas.",
        "Gestao de energia com alertas por desvio de consumo.",
        "Acompanhamento de uptime, MTTR e performance por planta.",
        "Padronizacao operacional para multiplos sites.",
      ]}
      description="Monte uma biblioteca de casos de uso com resultados concretos, tempo de implantacao e impacto financeiro."
      path="/casos-de-uso"
      title="Resultados Reais em Operacoes Industriais"
    />
  );
}