import { AdvisorRecurringSection } from "../components/sections/AdvisorRecurringSection";
import { DiagnosticOfferSection } from "../components/sections/DiagnosticOfferSection";
import { EdgeArchitectureSection } from "../components/sections/EdgeArchitectureSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";
import { HeroSection } from "../components/sections/HeroSection";
import { IndustrialUseCasesSection } from "../components/sections/IndustrialUseCasesSection";
import { MetricsStrip } from "../components/sections/MetricsStrip";
import { ProblemSection } from "../components/sections/ProblemSection";
import { ScadaComplementSection } from "../components/sections/ScadaComplementSection";
import { SecurityGuardSection } from "../components/sections/SecurityGuardSection";
import { WhatIobeeDoesSection } from "../components/sections/WhatIobeeDoesSection";
import { PageSeo } from "../components/seo/PageSeo";
import { organizationSchema, productSchema } from "../lib/siteConfig";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que e o Diagnostico Operacional Iobee de 30 dias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E uma oferta inicial para conectar sinais criticos, criar baseline operacional, classificar estados, detectar instabilidade e entregar recomendacoes executivas iniciais.",
      },
    },
    {
      "@type": "Question",
      name: "A Iobee substitui PLC, SCADA ou historiador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. A Iobee complementa PLCs, SCADA e historiadores existentes com contexto operacional, baseline, classificacao de estados e Advisor Operacional.",
      },
    },
    {
      "@type": "Question",
      name: "A Iobee depende de inteligencia artificial avancada desde o inicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. A Iobee comeca com baseline contextual, estatisticas e regras explicaveis para gerar valor inicial antes de modelos avancados.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <PageSeo
        description="Operational Decision Intelligence industrial edge-native para baseline contextual, Asset Twin, estados operacionais, deteccao de degradacao e Advisor Operacional recorrente."
        path="/"
        schema={[organizationSchema, productSchema, faqSchema]}
        title="Operational Decision Intelligence Industrial"
      />
      <HeroSection />
      <MetricsStrip />
      <ProblemSection />
      <WhatIobeeDoesSection />
      <DiagnosticOfferSection />
      <AdvisorRecurringSection />
      <IndustrialUseCasesSection />
      <EdgeArchitectureSection />
      <SecurityGuardSection />
      <ScadaComplementSection />
      <FinalCTASection />
    </>
  );
}
