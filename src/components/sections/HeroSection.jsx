import { motion } from "framer-motion";
import { CTAButtons } from "../ui/CTAButtons";
import { FloatingBadge } from "../ui/FloatingBadge";
import { PlatformMockup } from "../ui/PlatformMockup";
import { SectionContainer } from "../ui/SectionContainer";

const heroBadges = [
  { title: "Conectividade", value: "98.7% online", tone: "success", className: "top-6 -left-6" },
  { title: "WhatsApp", value: "Alerta enviado", tone: "info", className: "top-16 -right-6" },
  { title: "Temperatura", value: "Critico: 88 C", tone: "warning", className: "bottom-20 -left-8" },
  { title: "Asset Twin", value: "Compressor #04", tone: "primary", className: "bottom-2 -right-4" },
  { title: "Energia", value: "-14% custo", tone: "success", className: "-bottom-8 left-20" },
  { title: "Multi-site", value: "18 plantas", tone: "primary", className: "-top-8 right-20" },
  { title: "Uptime", value: "99,92%", tone: "success", className: "top-1/2 -right-10" },
];

export function HeroSection() {
  return (
    <SectionContainer className="pt-14 pb-18 md:pt-20 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_1fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Plataforma SaaS Industrial Enterprise
          </p>
          <h1 className="section-title font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Sua operacao ja gera dados. A iobee V3 transforma esses dados em acao.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-base-content/78 md:text-lg">
            Monitore ativos, crie alertas inteligentes, acompanhe multiplas plantas e escale sua operacao sem depender de planilhas,
            SCADA legado ou dashboards improvisados.
          </p>
          <div className="mt-8">
            <CTAButtons context="hero" />
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-base-content/15 bg-base-100/60 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-base-content/55">Device Twin</p>
              <p className="mt-1 text-sm text-base-content/75">Estado vivo de sensores e dispositivos em tempo real.</p>
            </div>
            <div className="rounded-xl border border-base-content/15 bg-base-100/60 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-base-content/55">Asset Twin</p>
              <p className="mt-1 text-sm text-base-content/75">Contexto completo de ativos e processos operacionais.</p>
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
          {heroBadges.map((badge, index) => (
            <motion.div
              className={`absolute hidden lg:block ${badge.className}`}
              initial={{ opacity: 0, y: 12 }}
              key={`${badge.title}-${badge.value}`}
              transition={{ delay: 0.16 + index * 0.06, duration: 0.45 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <FloatingBadge title={badge.title} tone={badge.tone} value={badge.value} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
