import { SimplePageTemplate } from "../components/layout/SimplePageTemplate";

export default function AboutPage() {
  return (
    <SimplePageTemplate
      badge="Sobre"
      bullets={[
        "Posicionamento como plataforma SaaS industrial enterprise.",
        "Compromisso com confiabilidade, escala e suporte especializado.",
        "Time de produto com foco em operacao critica.",
        "Roadmap orientado a valor de negocio e robustez tecnica.",
      ]}
      description="Use esta pagina para reforcar visao de produto, credenciais tecnicas e compromisso de longo prazo com clientes enterprise."
      path="/sobre"
      title="Sobre a iobee"
    />
  );
}