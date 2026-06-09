import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { MotionReveal } from "../components/ui/MotionReveal";
import { SectionContainer } from "../components/ui/SectionContainer";
import { blogArticles, blogPillars } from "../data/blogContent";
import { trackEvent } from "../lib/analytics";
import { canonicalUrl } from "../lib/siteConfig";

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

function getPillarLabel(pillarById, pillarId) {
  return pillarById[pillarId]?.label ?? pillarId;
}

export default function BlogPostPage() {
  const { slug } = useParams();

  const pillarById = useMemo(
    () => Object.fromEntries(blogPillars.map((pillar) => [pillar.id, pillar])),
    []
  );

  const article = useMemo(() => blogArticles.find((item) => item.slug === slug), [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) {
      return [];
    }

    return blogArticles
      .filter((item) => item.slug !== article.slug)
      .sort((articleA, articleB) => {
        const scoreA = articleA.pillar === article.pillar ? 1 : 0;
        const scoreB = articleB.pillar === article.pillar ? 1 : 0;
        return scoreB - scoreA;
      })
      .slice(0, 3);
  }, [article]);

  if (!article) {
    return <Navigate replace to="/blog" />;
  }

  const breadcrumbItems = [
    { name: "Blog", path: "/blog" },
    { name: article.title, path: `/blog/${article.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: getPillarLabel(pillarById, article.pillar),
    keywords: article.tags?.join(", "),
    mainEntityOfPage: canonicalUrl(`/blog/${article.slug}`),
    author: {
      "@type": "Organization",
      name: "iobee",
    },
    publisher: {
      "@type": "Organization",
      name: "iobee",
      logo: {
        "@type": "ImageObject",
        url: canonicalUrl("/icons/icon.svg"),
      },
    },
  };

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description={article.excerpt}
        path={`/blog/${article.slug}`}
        schema={articleSchema}
        title={article.title}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <MotionReveal>
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80" to="/blog">
          <ArrowLeftIcon className="size-4" />
          Voltar para o blog
        </Link>
      </MotionReveal>

      <MotionReveal className="mt-6">
        <header className="blog-hero-shell rounded-3xl border border-base-content/12 p-8 md:p-10">
          <p className="inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {getPillarLabel(pillarById, article.pillar)}
          </p>
          <h1 className="section-title mt-5 max-w-5xl font-display text-4xl font-semibold md:text-5xl">{article.title}</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-base-content/78 md:text-lg">{article.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-base-content/74">
            <span className="inline-flex items-center gap-2 rounded-full border border-base-content/14 bg-base-100/45 px-4 py-2">
              <ClockIcon className="size-4 text-primary/90" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-base-content/14 bg-base-100/45 px-4 py-2">
              <CalendarDaysIcon className="size-4 text-primary/90" />
              {formatDate(article.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-base-content/14 bg-base-100/45 px-4 py-2">
              <UserGroupIcon className="size-4 text-primary/90" />
              {article.audience}
            </span>
          </div>
        </header>
      </MotionReveal>

      <article className="mt-10 space-y-10">
        <MotionReveal>
          <section className="glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">1. Problema atual enfrentado pela industria</h2>
            <p className="mt-4 text-base leading-relaxed text-base-content/78">{article.problem}</p>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">2. Limitacoes das abordagens tradicionais</h2>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-base-content/78">
              {article.traditionalLimits.map((item) => (
                <li className="rounded-xl border border-base-content/12 bg-base-100/45 px-4 py-3" key={item}>
                  - {item}
                </li>
              ))}
            </ul>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">3. Como a iobee resolve esse problema</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {article.iobeeSolution.map((item) => (
                <article className="rounded-2xl border border-base-content/14 bg-base-100/45 p-5" key={item.title}>
                  <p className="font-display text-lg font-semibold text-base-content">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-base-content/75">{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">4. Beneficio operacional real</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-base-content/12">
              <table className="table table-zebra w-full min-w-[640px]">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Ganho operacional</th>
                    <th>Como o ganho acontece</th>
                  </tr>
                </thead>
                <tbody>
                  {article.operationalBenefits.map((item) => (
                    <tr key={item.area}>
                      <td className="font-semibold">{item.area}</td>
                      <td>{item.gain}</td>
                      <td>{item.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">5. Exemplo pratico de aplicacao</h2>
            <div className="mt-5 space-y-5">
              <div className="rounded-2xl border border-base-content/12 bg-base-100/45 p-5">
                <p className="font-display text-xl font-semibold text-base-content">{article.practicalExample.title}</p>
                <p className="mt-3 text-base leading-relaxed text-base-content/75">{article.practicalExample.context}</p>
              </div>

              <div className="rounded-2xl border border-base-content/12 bg-base-100/45 p-5">
                <p className="font-display text-lg font-semibold text-base-content">Implementacao</p>
                <ol className="mt-3 space-y-2 text-sm leading-relaxed text-base-content/75 md:text-base">
                  {article.practicalExample.execution.map((step, index) => (
                    <li key={step}>
                      {index + 1}. {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-success/35 bg-success/10 p-5">
                <p className="font-display text-lg font-semibold text-base-content">Resultado operacional</p>
                <p className="mt-2 text-base leading-relaxed text-base-content/78">{article.practicalExample.outcome}</p>
              </div>
            </div>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">6. Comparativo tecnico</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-base-content/12">
              <table className="table table-zebra w-full min-w-[720px]">
                <thead>
                  <tr>
                    {article.comparison.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {article.comparison.rows.map((row, rowIndex) => (
                    <tr key={`${article.slug}-comparison-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <td
                          className={cellIndex === 0 ? "font-semibold" : ""}
                          key={`${article.slug}-${rowIndex}-${cellIndex}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">7. Diagrama sugerido para o time de engenharia</h2>
            <div className="mt-5 rounded-2xl border border-base-content/14 bg-base-100/45 p-5">
              <p className="font-display text-xl font-semibold text-base-content">{article.diagram.title}</p>
              <p className="mt-3 text-base leading-relaxed text-base-content/75">{article.diagram.description}</p>
              <ul className="mt-4 grid gap-2 md:grid-cols-2">
                {article.diagram.bullets.map((item) => (
                  <li className="rounded-xl border border-base-content/12 bg-base-100/40 px-4 py-2 text-sm text-base-content/76" key={item}>
                    - {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">8. Conclusao</h2>
            <p className="mt-4 text-base leading-relaxed text-base-content/78">{article.conclusion}</p>
          </section>
        </MotionReveal>
      </article>

      <MotionReveal className="mt-10">
        <section className="glass-card rounded-3xl border p-8 md:p-10">
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">{article.cta.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-base-content/76 md:text-lg">
            A Iobee foi desenhada para operar em escala enterprise com baseline contextual, estados operacionais, Advisor e governanca transversal em toda a arquitetura.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="btn btn-primary soft-glow"
              onClick={() => trackEvent("cta_agendar_diagnostico_click", { context: "blog_post", slug: article.slug })}
              to="/contato"
            >
              Agendar diagnóstico operacional
            </Link>
            <Link
              className="btn btn-outline"
              onClick={() => trackEvent("cta_falar_com_especialista_click", { context: "blog_post", slug: article.slug })}
              to="/contato"
            >
              {article.cta.secondary}
            </Link>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-12">
        <section>
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Artigos relacionados</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedArticles.map((related) => (
              <article className="blog-article-card glass-card rounded-2xl border p-5" key={related.slug}>
                <p className="text-xs uppercase tracking-[0.12em] text-primary/90">
                  {getPillarLabel(pillarById, related.pillar)}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-base-content">{related.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-base-content/74">{related.excerpt}</p>
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary" to={`/blog/${related.slug}`}>
                  Ler artigo
                  <ArrowRightIcon className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>
    </SectionContainer>
  );
}
