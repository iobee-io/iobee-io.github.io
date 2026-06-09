import { ClipboardDocumentCheckIcon, EyeIcon, LockClosedIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { MotionReveal } from "../ui/MotionReveal";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";

const guardCapabilities = [
  "Acesso seguro por perfil, planta, ativo e funcao",
  "Conectividade controlada entre campo, edge e cloud",
  "Auditoria de eventos, acessos e alteracoes relevantes",
  "Criptografia e protecao de comunicacao industrial",
  "Governanca multi-tenant para operacoes enterprise",
  "Rastreabilidade para operacao, suporte e compliance",
];

const pillars = [
  { title: "Proteger", text: "Comunicação, identidade e acesso operacional.", icon: LockClosedIcon },
  { title: "Auditar", text: "Eventos, alteracoes e rastros tecnicos relevantes.", icon: EyeIcon },
  { title: "Governar", text: "Tenants, usuarios, politicas e conformidade.", icon: ClipboardDocumentCheckIcon },
];

export function SecurityGuardSection() {
  return (
    <SectionContainer className="py-14 md:py-20" id="seguranca">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Iobee Guard"
            title="Segurança e governança industrial desde a borda."
            description="Operational Decision Intelligence precisa ser confiavel. O Guard protege conectividade, acesso e operacao para ambientes industriais com exigencia enterprise."
          />
          <MotionReveal className="mt-8">
            <div className="flex items-center gap-4 rounded-3xl border border-primary/35 bg-primary/10 p-6">
              <span className="open-hexagon flex size-20 items-center justify-center text-primary">
                <ShieldCheckIcon className="size-9" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Preparado para clientes enterprise</p>
                <p className="mt-2 text-sm leading-relaxed text-base-content/74">
                  A segurança nao e uma camada decorativa. Ela acompanha dispositivos, usuarios, conectividade e operacao.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <MotionReveal delay={index * 0.06} key={pillar.title}>
                  <article className="industrial-card h-full rounded-2xl border p-5">
                    <Icon className="size-6 text-primary" />
                    <h3 className="mt-4 font-display text-lg font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-base-content/70">{pillar.text}</p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>

          <MotionReveal>
            <ul className="glass-card grid gap-3 rounded-2xl border p-6 md:grid-cols-2">
              {guardCapabilities.map((capability) => (
                <li className="flex items-start gap-3 text-sm text-base-content/78" key={capability}>
                  <span className="mt-1.5 size-2 rounded-full bg-primary" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>
    </SectionContainer>
  );
}
