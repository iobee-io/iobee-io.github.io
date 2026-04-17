import { BellAlertIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { alertFeatures } from "../../data/siteContent";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const channels = [
  { name: "WhatsApp", icon: ChatBubbleBottomCenterTextIcon },
  { name: "SMS", icon: PhoneIcon },
  { name: "Email", icon: EnvelopeIcon },
  { name: "Escalonamento", icon: BellAlertIcon },
];

export function SmartAlertsSection() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeading
        eyebrow="Alertas inteligentes"
        title="Quando algo sai do padrao, a pessoa certa recebe o alerta certo"
        description="Elimine ruido, priorize criticidade e acelere o tempo de resposta com contexto tecnico e operacional."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_1fr]">
        <MotionReveal>
          <div className="glass-card rounded-2xl border p-5 md:p-6">
            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              {channels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <div className="rounded-xl border border-base-content/12 bg-base-100/45 px-4 py-3" key={channel.name}>
                    <div className="flex items-center gap-2 text-sm font-semibold text-base-content/85">
                      <Icon className="size-4 text-primary" />
                      {channel.name}
                    </div>
                    <p className="mt-2 text-xs text-base-content/65">Entrega orientada por regra e criticidade</p>
                  </div>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-xl border border-warning/30 bg-warning/8 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-warning">Snapshot da falha</p>
              <p className="mt-1 text-sm">
                Compressor #04 acima de 88 C por 3 minutos. Vibracao +17%. Regra de escalonamento acionada para manutencao e supervisao.
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <ul className="glass-card rounded-2xl border p-6">
            {alertFeatures.map((feature, index) => (
              <li
                className={`flex items-center gap-3 py-3 text-sm md:text-base ${
                  index !== alertFeatures.length - 1 ? "border-b border-base-content/10" : ""
                }`}
                key={feature}
              >
                <span className="size-2 rounded-full bg-accent" />
                <span className="text-base-content/78">{feature}</span>
              </li>
            ))}
          </ul>
        </MotionReveal>
      </div>
    </SectionContainer>
  );
}
