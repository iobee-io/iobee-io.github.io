import { SimplePageTemplate } from "../components/layout/SimplePageTemplate";

export default function OemPage() {
  return (
    <SimplePageTemplate
      badge="OEM / White-label"
      bullets={[
        "Sua marca em uma camada operacional segura para clientes industriais.",
        "Tenant, governanca e segregacao por cliente ou unidade.",
        "Pacotes por vertical com Asset Twin, baseline e Advisor Operacional.",
        "Modelo recorrente para suporte, acompanhamento e servicos digitais.",
      ]}
      description="Modelo de parceria para OEMs e integradores que precisam transformar base instalada em servico recorrente orientado por contexto operacional."
      path="/oem"
      title="Operational Intelligence white-label para OEM e integradores"
    />
  );
}
