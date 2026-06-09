import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { MotionReveal } from "../components/ui/MotionReveal";
import { SectionContainer } from "../components/ui/SectionContainer";
import { blogSeries } from "../data/blogContent";
import { supportMaterials } from "../data/blogSupportMaterialsIndex";
import { trackEvent } from "../lib/analytics";
import { canonicalUrl } from "../lib/siteConfig";

export default function BlogSeriesDetailPage() {
  const { slug } = useParams();

  const series = useMemo(() => blogSeries.find((item) => item.slug === slug), [slug]);

  const materialBySlug = useMemo(
    () => Object.fromEntries(supportMaterials.map((item) => [item.slug, item])),
    []
  );

  if (!series) {
    return <Navigate replace to="/blog" />;
  }

  const linkedMaterials = (series.generatedMaterials ?? []).map((item) => ({
    ...item,
    material: item.materialSlug ? materialBySlug[item.materialSlug] : null,
  }));

  const breadcrumbItems = [
    { name: "Blog", path: "/blog" },
    { name: "Series estrategicas", path: "/blog" },
    { name: series.title, path: `/blog/series/${series.slug}` },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    name: series.title,
    description: series.objective,
    url: canonicalUrl(`/blog/series/${series.slug}`),
    creator: {
      "@type": "Organization",
      name: "iobee",
    },
  };

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description={series.objective}
        path={`/blog/series/${series.slug}`}
        schema={schema}
        title={`${series.title} | Trilha Editorial Completa`}
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
            Trilha editorial completa
          </p>
          <h1 className="section-title mt-5 max-w-5xl font-display text-4xl font-semibold md:text-5xl">{series.title}</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-base-content/78 md:text-lg">{series.objective}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-base-content/74">
            <span className="inline-flex items-center gap-2 rounded-full border border-base-content/14 bg-base-100/45 px-4 py-2">
              <CalendarDaysIcon className="size-4 text-primary/90" />
              {series.cadence}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-base-content/14 bg-base-100/45 px-4 py-2">
              <ChartBarIcon className="size-4 text-primary/90" />
              {series.kpiFocus?.length ?? 0} KPIs prioritarios
            </span>
          </div>
          <p className="mt-5 text-sm text-base-content/72">Publico foco: {series.targetAudience}</p>
        </header>
      </MotionReveal>

      <MotionReveal className="mt-10">
        <section className="glass-card rounded-3xl border p-7 md:p-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Calendario editorial gerado</h2>
          <p className="mt-3 text-base text-base-content/75">
            Sequencia completa dos conteudos da serie com foco em maturidade operacional e aprovacao executiva.
          </p>
          <div className="mt-6 space-y-3">
            {(series.timeline ?? []).map((item) => (
              <article
                className="rounded-2xl border border-base-content/12 bg-base-100/45 p-4"
                key={`${series.slug}-${item.slot}-${item.title}`}
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-base-content/62">
                  <span className="rounded-full border border-primary/28 bg-primary/10 px-3 py-1 font-semibold uppercase tracking-[0.12em] text-primary">
                    {item.slot}
                  </span>
                  <span className="rounded-full border border-base-content/18 bg-base-100/40 px-3 py-1 uppercase tracking-[0.12em]">
                    {item.type}
                  </span>
                </div>
                <p className="mt-3 font-display text-lg font-semibold text-base-content">{item.title}</p>
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-10">
        <section className="glass-card rounded-3xl border p-7 md:p-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Materiais prometidos gerados</h2>
          <p className="mt-3 text-base text-base-content/75">
            Todos os materiais de apoio da serie ja estao prontos para uso em aprovacao interna.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {linkedMaterials.map((item) => (
              <article className="support-material-card rounded-2xl border border-base-content/14 bg-base-100/45 p-5" key={`${series.slug}-${item.title}`}>
                <p className="text-xs uppercase tracking-[0.12em] text-primary/90">Material gerado</p>
                <p className="mt-3 font-display text-lg font-semibold text-base-content">{item.title}</p>
                <p className="mt-2 text-sm text-base-content/74">
                  {item.material?.summary ?? "Material detalhado pronto para apresentacao tecnica e executiva."}
                </p>
                {item.material ? (
                  <Link
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    onClick={() =>
                      trackEvent("blog_series_material_open_click", {
                        series_slug: series.slug,
                        material_slug: item.material.slug,
                      })
                    }
                    to={`/blog/materiais/${item.material.slug}`}
                  >
                    Abrir material
                    <ArrowRightIcon className="size-4" />
                  </Link>
                ) : (
                  <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary" to="/blog/materiais">
                    Ver biblioteca de materiais
                    <ArrowRightIcon className="size-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-10">
        <section className="glass-card rounded-3xl border p-7 md:p-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">KPIs de validacao da serie</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {(series.kpiFocus ?? []).map((item) => (
              <li className="rounded-xl border border-primary/30 bg-primary/12 px-4 py-3 text-base text-base-content/82" key={`${series.slug}-${item}`}>
                - {item}
              </li>
            ))}
          </ul>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-10">
        <section className="glass-card rounded-3xl border p-8 md:p-10">
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Quer executar essa trilha com seu contexto real?</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-base-content/76 md:text-lg">
            O time iobee ajuda a adaptar o calendario, preencher os materiais com dados da sua planta e acelerar a aprovacao com diretoria, manutencao, TI/OT e producao.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="btn btn-primary soft-glow"
              onClick={() => trackEvent("cta_falar_com_especialista_click", { context: "blog_series_detail", series_slug: series.slug })}
              to="/contato"
            >
              Falar com especialista
            </Link>
            <Link className="btn btn-outline" to="/blog/materiais">
              Ver materiais para aprovacao interna
            </Link>
          </div>
        </section>
      </MotionReveal>
    </SectionContainer>
  );
}
