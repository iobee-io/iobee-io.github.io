import {
  ArrowPathIcon,
  ArrowRightIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { CTAButtons } from "../components/ui/CTAButtons";
import { MotionReveal } from "../components/ui/MotionReveal";
import { SectionContainer } from "../components/ui/SectionContainer";
import {
  supportAssetOptions,
  supportAudienceHighlights,
  supportDeciderProfiles,
  supportMaterialTypeOptions,
  supportMaterials,
  supportMaterialsNaming,
  supportProblemOptions,
  supportSectorOptions,
} from "../data/blogSupportMaterialsIndex";
import { trackEvent } from "../lib/analytics";

function buildSupportSearchIndex(material) {
  return [
    material.title,
    material.summary,
    material.problemType,
    material.materialType,
    ...(material.sectors ?? []),
    ...(material.deciderProfiles ?? []),
    ...(material.assetTypes ?? []),
    ...(material.iobeeDifferentials ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

function SupportMaterialCard({ material, showUsageTag = true }) {
  return (
    <article className="support-material-card glass-card rounded-2xl border p-5">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-primary/35 bg-primary/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
          {material.materialType}
        </span>
        <span className="rounded-full border border-base-content/20 bg-base-100/45 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-base-content/65">
          {material.problemType}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-base-content">{material.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-base-content/75">{material.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {material.deciderProfiles.slice(0, 2).map((profile) => (
          <span
            className="rounded-full border border-base-content/16 bg-base-100/45 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-base-content/62"
            key={`${material.slug}-${profile}`}
          >
            {profile}
          </span>
        ))}
      </div>

      {showUsageTag ? (
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-base-content/65">
          <span>Usos internos: {material.usageCount}</span>
          <span>Downloads: {material.downloadCount}</span>
        </div>
      ) : null}

      <Link
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        onClick={() => trackEvent("blog_support_material_open_click", { slug: material.slug, context: "support_hub" })}
        to={`/blog/materiais/${material.slug}`}
      >
        Abrir material
        <ArrowRightIcon className="size-4" />
      </Link>
    </article>
  );
}

export default function BlogMaterialsPage() {
  const [query, setQuery] = useState("");
  const [problemFilter, setProblemFilter] = useState("all");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [profileFilter, setProfileFilter] = useState("all");
  const [assetFilter, setAssetFilter] = useState("all");
  const [materialTypeFilter, setMaterialTypeFilter] = useState("all");
  const [highlightFilter, setHighlightFilter] = useState("all");

  const breadcrumbItems = [
    { name: "Blog", path: "/blog" },
    { name: supportMaterialsNaming.title, path: "/blog/materiais" },
  ];

  const sortedByUsage = useMemo(
    () => [...supportMaterials].sort((a, b) => b.usageCount - a.usageCount),
    []
  );

  const mostUsed = sortedByUsage.slice(0, 4);
  const mostDownloaded = useMemo(
    () => [...supportMaterials].sort((a, b) => b.downloadCount - a.downloadCount).slice(0, 4),
    []
  );

  const filteredMaterials = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return supportMaterials.filter((material) => {
      const matchesQuery = !normalizedQuery || buildSupportSearchIndex(material).includes(normalizedQuery);
      const matchesProblem = problemFilter === "all" || material.problemType === problemFilter;
      const matchesSector = sectorFilter === "all" || material.sectors.includes(sectorFilter);
      const matchesProfile = profileFilter === "all" || material.deciderProfiles.includes(profileFilter);
      const matchesAsset = assetFilter === "all" || material.assetTypes.includes(assetFilter);
      const matchesMaterialType = materialTypeFilter === "all" || material.materialType === materialTypeFilter;
      const matchesHighlight =
        highlightFilter === "all" || (material.featuredFor ?? []).includes(highlightFilter);

      return (
        matchesQuery &&
        matchesProblem &&
        matchesSector &&
        matchesProfile &&
        matchesAsset &&
        matchesMaterialType &&
        matchesHighlight
      );
    });
  }, [
    assetFilter,
    highlightFilter,
    materialTypeFilter,
    problemFilter,
    profileFilter,
    query,
    sectorFilter,
  ]);

  const stats = [
    { label: "Materiais disponiveis", value: String(supportMaterials.length).padStart(2, "0") },
    { label: "Problemas mapeados", value: String(supportProblemOptions.length) },
    { label: "Perfis de decisor", value: String(supportDeciderProfiles.length) },
    { label: "Categorias de material", value: String(supportMaterialTypeOptions.length) },
  ];

  const isFiltered =
    query.trim() ||
    problemFilter !== "all" ||
    sectorFilter !== "all" ||
    profileFilter !== "all" ||
    assetFilter !== "all" ||
    materialTypeFilter !== "all" ||
    highlightFilter !== "all";

  function clearFilters() {
    setQuery("");
    setProblemFilter("all");
    setSectorFilter("all");
    setProfileFilter("all");
    setAssetFilter("all");
    setMaterialTypeFilter("all");
    setHighlightFilter("all");
  }

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description="Area de materiais para aprovacao interna da iobee com templates, comparativos, calculadoras e argumentos tecnicos para convencer gestores e diretoria."
        path="/blog/materiais"
        title="Materiais Para Aprovacao Interna"
      />
      <Breadcrumbs items={breadcrumbItems} />

      <MotionReveal>
        <section className="blog-hero-shell relative overflow-hidden rounded-3xl border border-base-content/12 p-8 md:p-10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_90%_-18%,color-mix(in_oklch,var(--color-primary)_24%,transparent),transparent_58%)]" />
          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Monte seu caso interno
            </p>
            <h1 className="section-title mt-5 max-w-5xl font-display text-4xl font-semibold md:text-5xl">
              {supportMaterialsNaming.title}
            </h1>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-base-content/78 md:text-lg">
              {supportMaterialsNaming.subtitle} Cada material converte dor tecnica em argumento financeiro, risco de nao agir e proposta objetiva de aprovacao.
            </p>
            <div className="mt-8">
              <CTAButtons
                context="support_materials_hero"
                primary="Agendar diagnóstico operacional"
                primaryTo="/contato"
                secondary="Voltar para artigos"
                secondaryTo="/blog"
              />
            </div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-8" delay={0.05}>
        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <article className="glass-card rounded-2xl border p-4" key={stat.label}>
              <p className="text-xs uppercase tracking-[0.14em] text-base-content/62">{stat.label}</p>
              <p className="mt-2 font-display text-3xl font-semibold text-base-content">{stat.value}</p>
            </article>
          ))}
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.1}>
        <section className="support-filter-shell glass-card rounded-3xl border p-6 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Encontre o material certo em poucos cliques</h2>
              <p className="mt-3 max-w-3xl text-base text-base-content/75">
                Busque por dor operacional, perfil do decisor, setor, ativo e formato de material para montar seu argumento interno.
              </p>
            </div>
            <button
              className="btn btn-outline"
              onClick={clearFilters}
              type="button"
            >
              <ArrowPathIcon className="size-4" />
              Limpar filtros
            </button>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <label className="input input-bordered flex items-center gap-2 xl:col-span-3">
              <MagnifyingGlassIcon className="size-4 text-base-content/55" />
              <input
                className="grow"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por palavra-chave, ativo, objecao ou resultado..."
                type="text"
                value={query}
              />
            </label>

            <select className="select select-bordered" onChange={(event) => setProblemFilter(event.target.value)} value={problemFilter}>
              <option value="all">Todos os problemas</option>
              {supportProblemOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select className="select select-bordered" onChange={(event) => setSectorFilter(event.target.value)} value={sectorFilter}>
              <option value="all">Todos os setores</option>
              {supportSectorOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select className="select select-bordered" onChange={(event) => setProfileFilter(event.target.value)} value={profileFilter}>
              <option value="all">Todos os perfis de decisor</option>
              {supportDeciderProfiles.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select className="select select-bordered" onChange={(event) => setAssetFilter(event.target.value)} value={assetFilter}>
              <option value="all">Todos os ativos</option>
              {supportAssetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select className="select select-bordered" onChange={(event) => setMaterialTypeFilter(event.target.value)} value={materialTypeFilter}>
              <option value="all">Todos os tipos de material</option>
              {supportMaterialTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select className="select select-bordered" onChange={(event) => setHighlightFilter(event.target.value)} value={highlightFilter}>
              <option value="all">Todos os destaques de convencimento</option>
              {supportAudienceHighlights.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-base-content/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/12 px-3 py-1 font-semibold uppercase tracking-[0.12em] text-primary">
              <FunnelIcon className="size-4" />
              {filteredMaterials.length} materiais encontrados
            </span>
            {isFiltered ? <span>Filtros ativos para acelerar sua aprovacao interna.</span> : <span>Nenhum filtro aplicado. Exibindo biblioteca completa.</span>}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.15}>
        <section>
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Destaques por perfil de convencimento</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {supportAudienceHighlights.map((highlight) => (
              <article className="support-highlight-card rounded-2xl border border-base-content/15 bg-base-100/45 p-5" key={highlight.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/90">{highlight.label}</p>
                <p className="mt-3 text-sm text-base-content/74">{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.2}>
        <section className="grid gap-6 xl:grid-cols-2">
          <div>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Materiais mais usados</h2>
            <p className="mt-3 text-base text-base-content/75">Conteudos mais utilizados por equipes de campo para iniciar conversa com gestores.</p>
            <div className="mt-6 grid gap-4">
              {mostUsed.map((material) => (
                <SupportMaterialCard material={material} key={material.slug} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Materiais mais baixados</h2>
            <p className="mt-3 text-base text-base-content/75">Arquivos mais procurados para reunioes com diretoria, compras, engenharia e TI/OT.</p>
            <div className="mt-6 grid gap-4">
              {mostDownloaded.map((material) => (
                <SupportMaterialCard material={material} key={material.slug} />
              ))}
            </div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.25}>
        <section>
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Biblioteca completa para justificativa interna</h2>
          <p className="mt-3 max-w-3xl text-base text-base-content/75">
            Selecione um material, adapte com os dados da sua planta e leve uma proposta mais forte para manutencao, engenharia, TI/OT, compras ou diretoria.
          </p>
          {filteredMaterials.length ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredMaterials.map((material) => (
                <SupportMaterialCard material={material} key={material.slug} />
              ))}
            </div>
          ) : (
            <div className="mt-6 glass-card rounded-2xl border p-6">
              <p className="text-base text-base-content/78">
                Nenhum material atende aos filtros atuais. Ajuste os criterios para encontrar um pacote de justificativa adequado.
              </p>
            </div>
          )}
        </section>
      </MotionReveal>

      <MotionReveal className="mt-14" delay={0.3}>
        <section className="glass-card rounded-3xl border p-8 md:p-10">
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Precisa de ajuda para montar o argumento com seus numeros reais?</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-base-content/76 md:text-lg">
            O time da iobee ajuda voce a converter o material escolhido em um caso interno com baseline da sua operacao, custo de nao agir e plano de rollout.
          </p>
          <div className="mt-8">
            <CTAButtons
              context="support_materials_final_cta"
              primary="Falar com especialista"
              primaryTo="/contato"
              secondary="Explorar plataforma"
              secondaryTo="/plataforma"
            />
          </div>
        </section>
      </MotionReveal>
    </SectionContainer>
  );
}
