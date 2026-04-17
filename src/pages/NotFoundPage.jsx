import { Link } from "react-router-dom";
import { PageSeo } from "../components/seo/PageSeo";
import { SectionContainer } from "../components/ui/SectionContainer";

export default function NotFoundPage() {
  return (
    <SectionContainer className="py-24 text-center">
      <PageSeo noindex path="/404" title="Pagina nao encontrada" />
      <p className="text-sm uppercase tracking-[0.2em] text-base-content/55">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">Pagina nao encontrada</h1>
      <p className="mt-3 text-base-content/72">O conteudo que voce tentou acessar nao existe nesta versao do site.</p>
      <Link className="btn btn-primary mt-8" to="/">
        Voltar para home
      </Link>
    </SectionContainer>
  );
}
