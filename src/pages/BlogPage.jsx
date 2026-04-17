import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { SectionContainer } from "../components/ui/SectionContainer";

const posts = [
  {
    title: "Por que Digital Twin industrial falha sem contexto operacional",
    excerpt: "Como conectar sinal bruto a decisao de manutencao e performance.",
  },
  {
    title: "Da planilha ao monitoramento em tempo real: roteiro em 90 dias",
    excerpt: "Framework pratico para modernizar operacoes multi-planta.",
  },
  {
    title: "White-label industrial: novo canal de receita para OEM",
    excerpt: "Como transformar dados de campo em servicos digitais recorrentes.",
  },
];

export default function BlogPage() {
  const breadcrumbItems = [{ name: "Blog", path: "/blog" }];

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description="Artigos sobre Digital Twin industrial, monitoramento em tempo real, operacao multi-planta e modelo OEM white-label."
        path="/blog"
        title="Blog Tecnico e Estrategico"
      />
      <Breadcrumbs items={breadcrumbItems} />

      <p className="mb-5 inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Blog
      </p>
      <h1 className="section-title font-display text-4xl font-semibold md:text-5xl">Conteudo para lideres de operacao industrial</h1>
      <p className="mt-5 max-w-3xl text-base text-base-content/75 md:text-lg">
        Estruture artigos com profundidade tecnica e impacto de negocio para acelerar confianca e demanda inbound qualificada.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article className="glass-card rounded-2xl border p-5" key={post.title}>
            <p className="font-display text-xl font-semibold">{post.title}</p>
            <p className="mt-2 text-sm text-base-content/72">{post.excerpt}</p>
            <Link className="mt-5 inline-flex text-sm font-semibold text-primary" to="/contato">
              Ler artigo
            </Link>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
