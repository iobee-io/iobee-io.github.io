import { LegalPageTemplate } from "../components/layout/LegalPageTemplate";

const sections = [
  {
    heading: "Dados coletados",
    content:
      "Coletamos dados informados no formulario de contato, dados de navegacao anonimizados e eventos de uso para melhorar a experiencia e o atendimento comercial.",
  },
  {
    heading: "Finalidade",
    content:
      "Utilizamos os dados para responder solicitacoes, agendar demonstracoes, qualificar oportunidades e melhorar o site. Nao comercializamos dados pessoais.",
  },
  {
    heading: "Compartilhamento e armazenamento",
    content:
      "Os dados podem ser processados por provedores de infraestrutura, analytics e CRM contratados pela iobee, sempre sob controles de seguranca e confidencialidade.",
  },
  {
    heading: "Direitos do titular",
    content:
      "Voce pode solicitar acesso, correcao, portabilidade ou eliminacao de dados pessoais pelos canais oficiais da iobee.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      description="Esta politica descreve como a iobee trata dados pessoais no contexto do site institucional e formulários de contato."
      path="/politica-de-privacidade"
      sections={sections}
      title="Politica de Privacidade"
    />
  );
}