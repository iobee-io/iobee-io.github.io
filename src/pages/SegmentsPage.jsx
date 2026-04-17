import { SimplePageTemplate } from "../components/layout/SimplePageTemplate";

export default function SegmentsPage() {
  return (
    <SimplePageTemplate
      badge="Segmentos"
      bullets={[
        "Industria de processo e manufatura discreta.",
        "HVAC, facilities e utilities.",
        "Agua e saneamento com operacao distribuida.",
        "Agro, alimentos e bebidas com rastreabilidade operacional.",
      ]}
      description="Estruture estudos por segmento com desafios, indicadores e como a plataforma entrega valor operacional em cada contexto."
      path="/segmentos"
      title="Solucoes por Segmento"
    />
  );
}