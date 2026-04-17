import { FinalCTASection } from "../components/sections/FinalCTASection";
import { HeroSection } from "../components/sections/HeroSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { MetricsStrip } from "../components/sections/MetricsStrip";
import { OemSection } from "../components/sections/OemSection";
import { ProblemSection } from "../components/sections/ProblemSection";
import { ScaleSection } from "../components/sections/ScaleSection";
import { SegmentsSection } from "../components/sections/SegmentsSection";
import { SmartAlertsSection } from "../components/sections/SmartAlertsSection";
import { TwinSection } from "../components/sections/TwinSection";
import { PageSeo } from "../components/seo/PageSeo";
import { organizationSchema, productSchema } from "../lib/siteConfig";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "A iobee V3 funciona em tempo real?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A plataforma entrega monitoramento em tempo real com atualizacao em baixa latencia e alertas multicanal.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferenca entre Device Twin e Asset Twin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Device Twin representa o estado vivo de dispositivos e sensores. Asset Twin conecta esse estado ao contexto operacional dos ativos industriais.",
      },
    },
    {
      "@type": "Question",
      name: "A plataforma suporta multi-tenant e white-label?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A iobee V3 foi desenhada para operacao multi-tenant com isolamento de dados e suporte a modelos OEM white-label.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <PageSeo
        description="Monitoramento industrial em tempo real com Device Twin, Asset Twin, alertas inteligentes e escala multi-planta."
        path="/"
        schema={[organizationSchema, productSchema, faqSchema]}
        title="Plataforma SaaS Industrial em Tempo Real"
      />
      <HeroSection />
      <MetricsStrip />
      <ProblemSection />
      <HowItWorksSection />
      <TwinSection />
      <SegmentsSection />
      <OemSection />
      <SmartAlertsSection />
      <ScaleSection />
      <FinalCTASection />
    </>
  );
}
