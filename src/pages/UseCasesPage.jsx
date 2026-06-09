import { SimplePageTemplate } from "../components/layout/SimplePageTemplate";

export default function UseCasesPage() {
  return (
    <SimplePageTemplate
      badge="Casos de Uso"
      bullets={[
        "Deteccao de degradacao em bombas, motores e sistemas de dosagem.",
        "Baseline contextual para utilidades, energia, ar comprimido e vapor.",
        "Classificacao de estados em ETA, ETE e processos continuos.",
        "Identificacao de padroes recorrentes de instabilidade operacional.",
      ]}
      description="Casos de uso focados em perda, variabilidade, estabilidade, disponibilidade e decisao operacional antes que o desvio vire impacto."
      path="/casos-de-uso"
      title="Casos de uso para Operational Decision Intelligence"
    />
  );
}
