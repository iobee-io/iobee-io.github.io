import { SimplePageTemplate } from "../components/layout/SimplePageTemplate";

export default function OemPage() {
  return (
    <SimplePageTemplate
      badge="OEM / White-label"
      bullets={[
        "Sua marca em toda experiencia do produto.",
        "Subdominio proprio por cliente e tenant.",
        "Dashboards e pacotes customizados por vertical.",
        "Modelo de receita recorrente para canais e OEMs.",
      ]}
      description="Mostre o modelo de partnership para OEMs e integradores que desejam escalar servicos digitais com sua propria marca."
      path="/oem"
      title="White-label para OEM e Integradores"
    />
  );
}