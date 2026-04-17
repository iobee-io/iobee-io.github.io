import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Plataforma", path: "/plataforma" },
  { label: "OEM / White-label", path: "/oem" },
  { label: "Segmentos", path: "/segmentos" },
  { label: "Casos de Uso", path: "/casos-de-uso" },
  { label: "Sobre", path: "/sobre" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
  { label: "Privacidade", path: "/politica-de-privacidade" },
  { label: "Termos", path: "/termos-de-uso" },
  { label: "Cookies", path: "/cookies" },
  { label: "LGPD", path: "/lgpd" },
];

export function Footer() {
  return (
    <footer className="border-t border-base-content/10 bg-base-200/35 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">
            iobee <span className="text-primary">V3</span>
          </p>
          <p className="mt-2 max-w-md text-sm text-base-content/70">
            Plataforma SaaS industrial para conectar ativos fisicos a decisoes operacionais em tempo real.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-4">
          {footerLinks.map((item) => (
            <Link className="text-sm text-base-content/75 transition-colors hover:text-base-content" key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
