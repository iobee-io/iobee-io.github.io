import { SimplePageTemplate } from "../components/layout/SimplePageTemplate";

export default function PlatformPage() {
  return (
    <SimplePageTemplate
      badge="Plataforma"
      bullets={[
        "Visao operacional em tempo real por planta, linha e ativo.",
        "Device Twin e Asset Twin com contexto tecnico e de negocio.",
        "Alertas inteligentes, historico de eventos e SLA de resposta.",
        "Arquitetura multi-tenant para operacoes globais.",
      ]}
      description="Apresente o produto por modulos: observabilidade industrial, digital twin, regras, alertas e governanca de escala."
      path="/plataforma"
      title="Plataforma iobee V3"
    />
  );
}