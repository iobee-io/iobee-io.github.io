export const SITE_URL = "https://iobee.io";
export const SITE_NAME = "iobee V3";
export const DEFAULT_TITLE = "iobee V3 | Plataforma SaaS Industrial em Tempo Real";
export const DEFAULT_DESCRIPTION =
  "Plataforma SaaS industrial para monitoramento em tempo real, Device Twin, Asset Twin, alertas inteligentes e escala multi-planta.";
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
  name: "iobee V3",
  category: "Industrial SaaS Platform",
  brand: {
    "@type": "Brand",
    name: "iobee",
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
