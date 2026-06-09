import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { trackEvent } from "../../lib/analytics";

function normalizeLabel(label) {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function trackCta(label, context) {
  const normalizedLabel = normalizeLabel(label);

  if (normalizedLabel.includes("diagnostico")) {
    trackEvent("cta_agendar_diagnostico_click", { context, label });
    return;
  }

  if (normalizedLabel.includes("agendar")) {
    trackEvent("cta_agendar_demonstracao_click", { context, label });
    return;
  }

  if (normalizedLabel.includes("falar")) {
    trackEvent("cta_falar_com_especialista_click", { context, label });
    return;
  }

  trackEvent("cta_click", { context, label });
}

function CTAElement({ children, className, context, label, to }) {
  const handleClick = () => trackCta(label, context);

  if (to.startsWith("#") || to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("tel:")) {
    return (
      <a className={className} href={to} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} onClick={handleClick} to={to}>
      {children}
    </Link>
  );
}

export function CTAButtons({
  primary = "Agendar diagnóstico operacional",
  secondary = "Ver como funciona",
  primaryTo = "/contato",
  secondaryTo = "#como-funciona",
  context = "generic",
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <CTAElement
        className="btn btn-primary soft-glow"
        context={context}
        label={primary}
        to={primaryTo}
      >
        {primary}
        <ArrowRightIcon className="size-4" />
      </CTAElement>
      <CTAElement className="btn btn-outline" context={context} label={secondary} to={secondaryTo}>
        {secondary}
      </CTAElement>
    </div>
  );
}
