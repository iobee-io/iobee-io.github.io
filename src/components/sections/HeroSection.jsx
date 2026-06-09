import { motion } from "framer-motion";
import { CTAButtons } from "../ui/CTAButtons";
import { PlatformMockup } from "../ui/PlatformMockup";
import { SectionContainer } from "../ui/SectionContainer";

export function HeroSection() {
  return (
    <SectionContainer className="pt-14 pb-18 md:pt-20 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_1fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Operational Decision Intelligence Industrial
          </p>
          <h1 className="section-title font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            A Iobee transforma sinais industriais em decisões operacionais.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-base-content/78 md:text-lg">
            Plataforma edge-native para interpretar comportamento operacional, criar baseline contextual, detectar degradacao antes da perda e orientar o proximo passo com um Advisor Operacional explicavel.
          </p>
          <div className="mt-8">
            <CTAButtons
              context="hero"
              primary="Agendar diagnóstico operacional"
              secondary="Ver como funciona"
              secondaryTo="#como-funciona"
            />
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-base-content/15 bg-base-100/60 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-base-content/55">Diagnóstico de 30 dias</p>
              <p className="mt-1 text-sm text-base-content/75">Baseline, estados, instabilidade e recomendacoes iniciais.</p>
            </div>
            <div className="rounded-xl border border-base-content/15 bg-base-100/60 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-base-content/55">Advisor recorrente</p>
              <p className="mt-1 text-sm text-base-content/75">Acompanhamento mensal de estabilidade, disponibilidade e perda.</p>
            </div>
          </div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <PlatformMockup />
        </motion.div>
      </div>
    </SectionContainer>
  );
}
