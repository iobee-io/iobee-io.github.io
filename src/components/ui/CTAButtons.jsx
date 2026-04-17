import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { trackEvent } from "../../lib/analytics";

function trackCta(label, context) {
  if (label.toLowerCase().includes("agendar")) {
    trackEvent("cta_agendar_demonstracao_click", { context, label });
    return;
  }

  if (label.toLowerCase().includes("falar")) {
    trackEvent("cta_falar_com_especialista_click", { context, label });
    return;
  }

  trackEvent("cta_click", { context, label });
}

export function CTAButtons({
  primary = "Agendar demonstracao",
  secondary = "Ver plataforma",
  primaryTo = "/contato",
  secondaryTo = "/plataforma",
  context = "generic",
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        className="btn btn-primary soft-glow"
        onClick={() => trackCta(primary, context)}
        to={primaryTo}
      >
        {primary}
        <ArrowRightIcon className="size-4" />
      </Link>
      <Link className="btn btn-outline" onClick={() => trackCta(secondary, context)} to={secondaryTo}>
        {secondary}
      </Link>
    </div>
  );
}
