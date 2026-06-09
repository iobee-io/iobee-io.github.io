export const SITE_URL = "https://iobee.io";
export const SITE_NAME = "Iobee";
export const DEFAULT_TITLE = "Iobee | Operational Decision Intelligence Industrial";
export const DEFAULT_DESCRIPTION =
  "Plataforma industrial edge-native de Operational Decision Intelligence para baseline contextual, Asset Twin, estados operacionais, deteccao de degradacao e Advisor Operacional.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.svg`;

export function canonicalUrl(pathname = "/") {
  const normalizedPath = pathname === "/" ? "/" : `/${pathname.replace(/^\/+/, "")}`;
  return `${SITE_URL}${normalizedPath}`;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "iobee",
  url: SITE_URL,
  logo: `${SITE_URL}/icons/icon.svg`,
  sameAs: ["https://www.linkedin.com/company/iobee"],
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Iobee Operational Decision Intelligence",
  category: "Industrial Operational Decision Intelligence Platform",
  brand: {
    "@type": "Brand",
    name: "Iobee",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
  },
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
};
