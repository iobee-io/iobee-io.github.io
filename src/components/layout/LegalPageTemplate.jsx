import { Breadcrumbs } from "../seo/Breadcrumbs";
import { PageSeo } from "../seo/PageSeo";
import { SectionContainer } from "../ui/SectionContainer";

export function LegalPageTemplate({ title, description, path, sections }) {
  const breadcrumbItems = [{ name: title, path }];

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
        <h1 className="section-title font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-4 text-base text-base-content/75 md:text-lg">{description}</p>
      </div>

      <div className="mt-8 space-y-4">
        {sections.map((section) => (
          <article className="glass-card rounded-2xl border p-5 md:p-6" key={section.heading}>
            <h2 className="font-display text-xl font-semibold md:text-2xl">{section.heading}</h2>
            <p className="mt-2 text-sm text-base-content/78 md:text-base">{section.content}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}