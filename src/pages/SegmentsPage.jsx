import { SimplePageTemplate } from "../components/layout/SimplePageTemplate";

export default function SegmentsPage() {
  return (
    <SimplePageTemplate
      badge="Segmentos"
      bullets={[
        "Papel e celulose, quimico, utilidades e saneamento.",
        "Operacoes continuas com ativos criticos e alta variabilidade.",
        "Dosagem quimica, bombas, ETA, ETE, vazao, pressao, pH e consumo.",
        "Processos onde estabilidade, disponibilidade e perda precisam de contexto.",
      ]}
      description="A Iobee atende operacoes industriais em que sinais existentes precisam virar baseline contextual, estados operacionais e decisao acionavel."
      path="/segmentos"
      title="Segmentos industriais com variabilidade operacional"
    />
  );
}
