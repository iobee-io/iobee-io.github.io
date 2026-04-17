import { Helmet } from "react-helmet-async";
import { canonicalUrl, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME } from "../../lib/siteConfig";

function normalizeSchema(schema) {
  if (!schema) return [];
  return Array.isArray(schema) ? schema : [schema];
}

function buildBreadcrumbSchema(items = []) {
  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function PageSeo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  schema,
  breadcrumbs = [],
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}`;
  const canonical = canonicalUrl(path);
  const schemas = normalizeSchema(schema);
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

  if (breadcrumbSchema) {
    schemas.push(breadcrumbSchema);
  }

  return (
    <Helmet prioritizeSeoTags>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta content={description} name="description" />
      <meta content={noindex ? "noindex, nofollow" : "index, follow"} name="robots" />
      <link href={canonical} rel="canonical" />

      <meta content="website" property="og:type" />
      <meta content={SITE_NAME} property="og:site_name" />
      <meta content={fullTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={canonical} property="og:url" />
      <meta content={image} property="og:image" />
      <meta content="pt_BR" property="og:locale" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={fullTitle} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={image} name="twitter:image" />

      {schemas.map((item, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}