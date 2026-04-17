import { Link } from "react-router-dom";
import { trackEvent } from "../../lib/analytics";
import { Breadcrumbs } from "../seo/Breadcrumbs";
import { PageSeo } from "../seo/PageSeo";
import { SectionContainer } from "../ui/SectionContainer";

export function SimplePageTemplate({ badge, title, description, bullets = [], path = "/" }) {
  const breadcrumbItems = [{ name: badge, path }];

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description={description}
        path={path}
        title={title}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-4xl">
        <p className="mb-5 inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {badge}
        </p>
        <h1 className="section-title font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-5 text-base text-base-content/75 md:text-lg">{description}</p>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-2">
        {bullets.map((bullet) => (
          <div className="glass-card rounded-2xl border p-5" key={bullet}>
            <p className="text-base-content/80">{bullet}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          className="btn btn-primary"
          onClick={() => trackEvent("cta_agendar_demonstracao_click", { context: "inner_page" })}
          to="/contato"
        >
          Agendar demonstracao
        </Link>
        <Link className="btn btn-outline" to="/">
          Voltar para home
        </Link>
      </div>
    </SectionContainer>
  );
}
