import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { CTAButtons } from "../components/ui/CTAButtons";
import { MotionReveal } from "../components/ui/MotionReveal";
import { SectionContainer } from "../components/ui/SectionContainer";
import { blogArticles, blogPillars, blogSeries, leadAssets } from "../data/blogContent";
import { trackEvent } from "../lib/analytics";

function formatDate(dateInput) {
  const parsedDate = new Date(`${dateInput}T00:00:00`);
  if (Number.isNaN(parsedDate.getTime())) {
    return dateInput;
  }
  return parsedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function buildSearchIndex(article, pillarLabel) {
  return [
    article.title,
    article.subtitle,
    article.excerpt,
    article.audience,
    pillarLabel,
    ...(article.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

function ArticleCard({ article, pillarLabel, featured = false }) {
  return (
    <article
      className={`blog-article-card glass-card rounded-2xl border p-5 ${
        featured ? "md:p-7" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-base-content/70">
        <span className="rounded-full border border-primary/35 bg-primary/12 px-3 py-1 font-semibold uppercase tracking-[0.12em] text-primary">
          {pillarLabel}
        </span>
        <span>{article.readTime}</span>
        <span aria-hidden="true">|</span>
        <span>{formatDate(article.publishedAt)}</span>
      </div>
      <h3 className={`mt-4 font-display font-semibold text-base-content ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
        {article.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-base-content/75 md:text-base">{article.excerpt}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.12em] text-base-content/60">Publico: {article.audience}</p>
      <Link
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        onClick={() => trackEvent("blog_article_open_click", { slug: article.slug, context: "blog_hub" })}
        to={`/blog/${article.slug}`}
      >
        Ler artigo completo
        <ArrowRightIcon className="size-4" />
      </Link>
    </article>
  );
}

export default function BlogPage() {
  const [activePillar, setActivePillar] = useState("all");
  const [query, setQuery] = useState("");

  const breadcrumbItems = [{ name: "Blog", path: "/blog" }];

  const sortedArticles = useMemo(
    () =>
      [...blogArticles].sort((articleA, articleB) => {
        const dateA = new Date(articleA.publishedAt).getTime();
        const dateB = new Date(articleB.publishedAt).getTime();
        return dateB - dateA;
      }),
    []
  );

  const pillarById = useMemo(
    () => Object.fromEntries(blogPillars.map((pillar) => [pillar.id, pillar])),
    []
  );

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return sortedArticles.filter((article) => {
      const pillarMatches = activePillar === "all" || article.pillar === activePillar;
      if (!pillarMatches) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchIndex = buildSearchIndex(article, pillarById[article.pillar]?.label ?? "");
      return searchIndex.includes(normalizedQuery);
    });
  }, [activePillar, pillarById, query, sortedArticles]);

  const featuredArticles = sortedArticles.slice(0, 3);
  const featuredSlugs = useMemo(
    () => new Set(featuredArticles.map((article) => article.slug)),
    [featuredArticles]
  );
  const isDefaultView = activePillar === "all" && !query.trim();
  const listArticles = isDefaultView
    ? filteredArticles.filter((article) => !featuredSlugs.has(article.slug))
    : filteredArticles;

  const stats = [
    { label: "Artigos tecnicos", value: String(blogArticles.length).padStart(2, "0") },
    { label: "Pilares editoriais", value: String(blogPillars.length) },
    { label: "Series de conteudo", value: String(blogSeries.length) },
    { label: "Materiais ricos", value: String(leadAssets.length) },
  ];

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description="Blog tecnico da iobee sobre arquitetura industrial, Digital Twin, inteligencia operacional, governanca e comparativos com solucoes tradicionais."
        path="/blog"
        title="Blog de Inteligencia Operacional Industrial"
      />
      <Breadcrumbs items={breadcrumbItems} />

      <MotionReveal>
        <section className="blog-hero-shell relative overflow-hidden rounded-3xl border border-base-content/12 p-8 md:p-10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_92%_-16%,color-mix(in_oklch,var(--color-primary)_24%,transparent),transparent_56%)]" />
          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Blog institucional iobee
            </p>
            <h1 className="section-title mt-5 max-w-4xl font-display text-4xl font-semibold md:text-5xl">
              Conteudo tecnico para quem decide operacao, arquitetura e governanca industrial
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-base-content/78 md:text-lg">
              O blog da iobee foi estruturado para mostrar, em profundidade, por que operacoes complexas precisam de contexto, baseline operacional, estados, Advisor e arquitetura enterprise alem de telas passivas.
            </p>
            <div className="mt-8">
              <CTAButtons
                context="blog_hero"
                primary="Agendar diagnóstico operacional"
                primaryTo="/contato"
                secondary="Explorar arquitetura"
                secondaryTo="/plataforma"
              />
            </div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-8" delay={0.05}>
        <section className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <article className="glass-card rounded-3xl border p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/90">Novo no blog</p>
            <h2 className="section-title mt-3 font-display text-2xl font-semibold md:text-3xl">Materiais para aprovacao interna</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-base-content/75 md:text-base">
              Uma area dedicada para eletricistas, tecnicos, integradores e supervisores transformarem dor operacional em proposta aprovada pela gestao.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-base-content/66">
              <span className="rounded-full border border-base-content/16 bg-base-100/45 px-3 py-1 uppercase tracking-[0.1em]">Filtro por problema</span>
              <span className="rounded-full border border-base-content/16 bg-base-100/45 px-3 py-1 uppercase tracking-[0.1em]">Filtro por decisor</span>
              <span className="rounded-full border border-base-content/16 bg-base-100/45 px-3 py-1 uppercase tracking-[0.1em]">Filtro por material</span>
              <span className="rounded-full border border-base-content/16 bg-base-100/45 px-3 py-1 uppercase tracking-[0.1em]">Print e PDF</span>
            </div>
            <Link
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              onClick={() => trackEvent("blog_support_materials_open_click", { context: "blog_hub_banner" })}
              to="/blog/materiais"
            >
              Entrar em materiais para aprovacao interna
              <ArrowRightIcon className="size-4" />
            </Link>
          </article>

          <article className="glass-card rounded-3xl border p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/90">Use para convencer</p>
            <ul className="mt-4 space-y-2 text-sm text-base-content/75">
              <li>- Diretoria industrial</li>
              <li>- Gerencia de manutencao</li>
              <li>- Gerencia de producao</li>
              <li>- TI / OT e engenharia</li>
              <li>- Compras e qualidade</li>
              <li>- OEMs e integradores</li>
            </ul>
          </article>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-6" delay={0.07}>
        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div className="glass-card rounded-2xl border p-4" key={stat.label}>
              <p className="text-xs uppercase tracking-[0.14em] text-base-content/62">{stat.label}</p>
              <p className="mt-2 font-display text-3xl font-semibold text-base-content">{stat.value}</p>
            </div>
          ))}
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.1}>
        <section>
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Pilares de autoridade tecnica</h2>
          <p className="mt-3 max-w-3xl text-base text-base-content/75">
            Cada pilar responde uma dor real da industria: reatividade, falta de contexto, baixa escalabilidade, risco de seguranca e decisao sem lastro operacional.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blogPillars.map((pillar) => (
              <article className="glass-card rounded-2xl border p-5" key={pillar.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/90">{pillar.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-base-content/74">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.15}>
        <section>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Artigos tecnicos publicados</h2>
              <p className="mt-3 max-w-3xl text-base text-base-content/75">
                Artigos longos com problema industrial, limite das abordagens tradicionais, arquitetura iobee, beneficio operacional e exemplo de campo.
              </p>
            </div>
            <label className="input input-bordered flex w-full items-center gap-2 md:max-w-sm">
              <MagnifyingGlassIcon className="size-4 text-base-content/55" />
              <input
                className="grow"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por tema, ativo, arquitetura..."
                type="text"
                value={query}
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              className={`blog-pill-button rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                activePillar === "all"
                  ? "border-primary/45 bg-primary/16 text-primary"
                  : "border-base-content/20 text-base-content/70"
              }`}
              onClick={() => setActivePillar("all")}
              type="button"
            >
              Todos os temas
            </button>
            {blogPillars.map((pillar) => (
              <button
                className={`blog-pill-button rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                  activePillar === pillar.id
                    ? "border-primary/45 bg-primary/16 text-primary"
                    : "border-base-content/20 text-base-content/70"
                }`}
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                type="button"
              >
                {pillar.label}
              </button>
            ))}
          </div>

          {isDefaultView ? (
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {featuredArticles.map((article, index) => (
                <div className={index === 0 ? "lg:col-span-2" : ""} key={article.slug}>
                  <ArticleCard
                    article={article}
                    featured={index === 0}
                    pillarLabel={pillarById[article.pillar]?.label ?? article.pillar}
                  />
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {listArticles.map((article) => (
              <ArticleCard
                article={article}
                key={article.slug}
                pillarLabel={pillarById[article.pillar]?.label ?? article.pillar}
              />
            ))}
          </div>

          {listArticles.length === 0 ? (
            <div className="mt-8 glass-card rounded-2xl border p-6">
              <p className="text-base text-base-content/78">
                Nenhum artigo encontrado para esse filtro. Ajuste o pilar ou refine a busca para localizar o conteudo tecnico desejado.
              </p>
            </div>
          ) : null}
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.2}>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-3xl border p-7">
            <h2 className="section-title font-display text-2xl font-semibold md:text-3xl">Series de conteudo estrategicas</h2>
            <p className="mt-3 text-sm leading-relaxed text-base-content/75 md:text-base">
              Trilhas editoriais para aprofundar temas de arquitetura, operacao multi-site e IA industrial com materiais de apoio para venda consultiva.
            </p>
            <div className="mt-6 space-y-4">
              {blogSeries.map((series) => (
                <article className="rounded-2xl border border-base-content/15 bg-base-100/45 p-4" key={series.title}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-display text-lg font-semibold text-base-content">{series.title}</p>
                    <span className="rounded-full border border-primary/26 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                      Trilha completa gerada
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-base-content/72">{series.objective}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-base-content/55">{series.cadence}</p>
                  <p className="mt-2 text-xs text-base-content/60">Publico foco: {series.targetAudience}</p>

                  <div className="mt-4 rounded-xl border border-base-content/12 bg-base-100/40 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/90">Calendario da serie</p>
                    <ul className="mt-2 space-y-1 text-sm text-base-content/74">
                      {(series.timeline ?? []).slice(0, 3).map((item) => (
                        <li key={`${series.slug}-${item.slot}-${item.title}`}>
                          - {item.slot}: {item.title}
                        </li>
                      ))}
                    </ul>
                    {series.timeline?.length ? (
                      <p className="mt-2 text-xs text-base-content/58">+ {series.timeline.length - 3} etapas na trilha completa</p>
                    ) : null}
                  </div>

                  <div className="mt-4 rounded-xl border border-base-content/12 bg-base-100/40 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/90">Materiais ja gerados</p>
                    <ul className="mt-2 space-y-1 text-sm text-base-content/75">
                      {(series.generatedMaterials ?? series.suggestedOutputs.map((item) => ({ title: item }))).map((item) => (
                        <li key={`${series.slug}-${item.title}`}>
                          {item.materialSlug ? (
                            <Link
                              className="text-primary transition-colors hover:text-primary/80"
                              onClick={() =>
                                trackEvent("blog_series_material_open_click", {
                                  series_slug: series.slug,
                                  material_slug: item.materialSlug,
                                  context: "blog_hub_series",
                                })
                              }
                              to={`/blog/materiais/${item.materialSlug}`}
                            >
                              - {item.title}
                            </Link>
                          ) : (
                            <span>- {item.title}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {series.slug ? (
                    <Link
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                      onClick={() => trackEvent("blog_series_detail_open_click", { series_slug: series.slug, context: "blog_hub" })}
                      to={`/blog/series/${series.slug}`}
                    >
                      Ver trilha completa
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl border p-7">
            <h2 className="section-title font-display text-2xl font-semibold md:text-3xl">Materiais ricos para geracao de demanda</h2>
            <p className="mt-3 text-sm leading-relaxed text-base-content/75 md:text-base">
              Ebooks, whitepapers, checklists e calculadoras para capturar leads qualificados e apoiar decisoes de diretoria industrial e engenharia.
            </p>
            <div className="mt-6 space-y-4">
              {leadAssets.map((asset) => (
                <article className="rounded-2xl border border-base-content/15 bg-base-100/45 p-4" key={asset.title}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary/30 bg-primary/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {asset.format}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-base-content/55">{asset.stage}</span>
                  </div>
                  <p className="mt-3 font-display text-lg font-semibold text-base-content">{asset.title}</p>
                  <p className="mt-2 text-sm text-base-content/72">{asset.promise}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.25}>
        <section className="glass-card rounded-3xl border p-8 md:p-10">
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Leve esse conteudo para sua operacao</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-base-content/76 md:text-lg">
            Se voce quer transformar o blog em um diagnostico pratico para disponibilidade, variabilidade, estabilidade e governanca, nosso time tecnico pode montar um plano por planta, area e ativo critico.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="btn btn-primary soft-glow"
              onClick={() => trackEvent("cta_agendar_diagnostico_click", { context: "blog_final_cta" })}
              to="/contato"
            >
              Agendar diagnóstico operacional
            </Link>
            <Link
              className="btn btn-outline"
              onClick={() => trackEvent("cta_falar_com_especialista_click", { context: "blog_final_cta" })}
              to="/contato"
            >
              Falar com especialista
            </Link>
          </div>
        </section>
      </MotionReveal>
    </SectionContainer>
  );
}
