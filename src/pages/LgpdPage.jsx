import { LegalPageTemplate } from "../components/layout/LegalPageTemplate";

const sections = [
  {
    heading: "Compromisso com a LGPD",
    content:
      "A iobee trata dados pessoais conforme os principios da Lei Geral de Protecao de Dados (Lei 13.709/2018), adotando medidas tecnicas e organizacionais adequadas.",
  },
  {
    heading: "Base legal",
    content:
      "O tratamento pode ocorrer por consentimento, execucao de contrato, legitimo interesse ou cumprimento de obrigacao legal, conforme o caso.",
  },
  {
    heading: "Canal do titular",
    content:
      "Solicitacoes sobre dados pessoais podem ser enviadas para contato@iobee.io, incluindo pedidos de acesso, retificacao e eliminacao.",
  },
  {
    heading: "Retencao e seguranca",
    content:
      "Dados sao mantidos pelo periodo necessario para as finalidades declaradas e protegidos por controles de acesso, criptografia e monitoramento.",
  },
];

export default function LgpdPage() {
  return (
    <LegalPageTemplate
      description="Diretrizes de tratamento de dados pessoais da iobee em conformidade com a LGPD."
      path="/lgpd"
      sections={sections}
      title="LGPD"
    />
  );
}