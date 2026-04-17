import { LegalPageTemplate } from "../components/layout/LegalPageTemplate";

const sections = [
  {
    heading: "O que sao cookies",
    content:
      "Cookies sao pequenos arquivos salvos no navegador para lembrar preferencias e medir interacoes com o site.",
  },
  {
    heading: "Tipos utilizados",
    content:
      "Utilizamos cookies essenciais para funcionamento e cookies analiticos para mensurar desempenho, sempre com finalidade legitima de melhoria continua.",
  },
  {
    heading: "Gestao de preferencias",
    content:
      "Voce pode bloquear cookies no navegador, observando que algumas funcionalidades podem ser impactadas.",
  },
  {
    heading: "Ferramentas de terceiros",
    content:
      "Plataformas como Google, Meta, LinkedIn e Hotjar/PostHog podem definir cookies conforme suas politicas proprias.",
  },
];

export default function CookiesPage() {
  return (
    <LegalPageTemplate
      description="Informacoes sobre o uso de cookies e tecnologias similares no site da iobee."
      path="/cookies"
      sections={sections}
      title="Politica de Cookies"
    />
  );
}