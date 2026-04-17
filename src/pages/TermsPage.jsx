import { LegalPageTemplate } from "../components/layout/LegalPageTemplate";

const sections = [
  {
    heading: "Aceitacao",
    content:
      "Ao acessar este site, voce concorda com estes Termos de Uso e com a legislacao aplicavel. Caso nao concorde, interrompa a navegacao.",
  },
  {
    heading: "Propriedade intelectual",
    content:
      "Conteudos, marcas, identidade visual e materiais publicados pertencem a iobee ou aos respectivos titulares e nao podem ser usados sem autorizacao.",
  },
  {
    heading: "Limitacao de responsabilidade",
    content:
      "A iobee envida esforcos para manter informacoes atualizadas, mas nao garante ausencia de erros. O uso das informacoes e de responsabilidade do usuario.",
  },
  {
    heading: "Atualizacoes",
    content:
      "Podemos atualizar estes Termos a qualquer momento. Recomendamos revisao periodica desta pagina para acompanhar eventuais mudancas.",
  },
];

export default function TermsPage() {
  return (
    <LegalPageTemplate
      description="Termos que regem o acesso e uso do site institucional da iobee."
      path="/termos-de-uso"
      sections={sections}
      title="Termos de Uso"
    />
  );
}