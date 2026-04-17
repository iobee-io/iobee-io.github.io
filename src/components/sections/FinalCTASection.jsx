import { Link } from "react-router-dom";
import { trackEvent } from "../../lib/analytics";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";

export function FinalCTASection() {
  return (
    <SectionContainer className="py-14 md:py-24">
      <MotionReveal>
        <div className="soft-glow relative overflow-hidden rounded-3xl border border-primary/35 bg-primary/14 p-7 md:p-12">
          <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-secondary/20 blur-2xl" />

          <div className="relative max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-content/85">Pronto para escalar</p>
            <h2 className="section-title font-display text-3xl font-semibold text-primary-content md:text-5xl">
              O proximo problema da sua operacao ja esta acontecendo agora. A diferenca e se voce vai descobrir antes ou depois.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="btn btn-neutral"
                onClick={() => trackEvent("cta_agendar_demonstracao_click", { context: "final_cta" })}
                to="/contato"
              >
                Agendar demonstracao
              </Link>
              <Link
                className="btn btn-outline border-primary-content/30 text-primary-content hover:bg-primary-content/10"
                onClick={() => trackEvent("cta_falar_com_especialista_click", { context: "final_cta" })}
                to="/contato"
              >
                Falar com especialista
              </Link>
            </div>
          </div>
        </div>
      </MotionReveal>
    </SectionContainer>
  );
}
