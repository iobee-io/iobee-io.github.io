import { AtSymbolIcon, BuildingOffice2Icon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { SectionContainer } from "../components/ui/SectionContainer";
import { trackEvent } from "../lib/analytics";

const WHATSAPP_URL = "https://wa.me/5519988148242";
const LEADS_ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT || "/api/leads";

const segments = [
  "Industria",
  "HVAC",
  "Utilities",
  "Agronegocio",
  "OEM",
  "Facilities",
  "Agua e saneamento",
  "Alimentos e bebidas",
  "Outro",
];

const assetRanges = [
  "Ate 50 ativos",
  "51 a 200 ativos",
  "201 a 1.000 ativos",
  "1.001 a 5.000 ativos",
  "Acima de 5.000 ativos",
];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  segment: "",
  assetCount: "",
  message: "",
  website: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const breadcrumbItems = [{ name: "Contato", path: "/contato" }];

  const contacts = [
    { title: "Email", value: "comercial@iobee.io", icon: AtSymbolIcon, href: "mailto:comercial@iobee.io" },
    { title: "WhatsApp", value: "(19) 98814-8242", icon: PhoneIcon, href: WHATSAPP_URL },
    { title: "Comercial", value: "Sao Paulo + atendimento nacional", icon: BuildingOffice2Icon, href: null },
  ];

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const params = new URLSearchParams(window.location.search);

    try {
      const response = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sourceUrl: window.location.href,
          utmSource: params.get("utm_source") || "",
          utmMedium: params.get("utm_medium") || "",
          utmCampaign: params.get("utm_campaign") || "",
        }),
      });

      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        throw new Error(payload.errors?.join(" ") || payload.error || "Nao foi possivel enviar o formulario.");
      }

      setStatus("success");
      setFeedback("Solicitacao enviada com sucesso. Nosso time retornara em breve.");
      setForm(initialForm);
      trackEvent("form_submit", { form: "contact", result: "success" });
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Erro ao enviar. Tente novamente.");
      trackEvent("form_submit", { form: "contact", result: "error" });
    }
  }

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description="Fale com um especialista da iobee para agendar uma demonstracao da plataforma SaaS industrial V3."
        path="/contato"
        title="Contato e Demonstracao"
      />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contato
          </p>
          <h1 className="section-title font-display text-4xl font-semibold md:text-5xl">Agende uma demonstracao da iobee V3</h1>
          <p className="mt-5 max-w-xl text-base text-base-content/75 md:text-lg">
            Vamos mapear sua operacao atual, identificar gargalos e desenhar um plano de rollout por planta e prioridade.
          </p>

          <div className="mt-8 space-y-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const content = (
                <>
                  <span className="rounded-lg bg-primary/15 p-2 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-base-content/55">{contact.title}</p>
                    <p className="text-sm text-base-content/80">{contact.value}</p>
                  </div>
                </>
              );

              if (!contact.href) {
                return (
                  <div className="glass-card flex items-center gap-3 rounded-xl border px-4 py-3" key={contact.title}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  className="glass-card flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors hover:border-primary/40"
                  href={contact.href}
                  key={contact.title}
                  onClick={() => {
                    if (contact.title === "WhatsApp") {
                      trackEvent("whatsapp_click", { context: "contact_page" });
                    }
                  }}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>

        <div className="glass-card rounded-2xl border p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input autoComplete="off" className="hidden" name="website" onChange={handleFieldChange} tabIndex={-1} value={form.website} />

            <label className="form-control w-full">
              <span className="label-text mb-2 text-sm">Nome</span>
              <input className="input input-bordered w-full" name="name" onChange={handleFieldChange} placeholder="Seu nome" required type="text" value={form.name} />
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-2 text-sm">Empresa</span>
              <input
                className="input input-bordered w-full"
                name="company"
                onChange={handleFieldChange}
                placeholder="Nome da empresa"
                required
                type="text"
                value={form.company}
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-2 text-sm">Email corporativo</span>
              <input
                className="input input-bordered w-full"
                name="email"
                onChange={handleFieldChange}
                placeholder="voce@empresa.com"
                required
                type="email"
                value={form.email}
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-2 text-sm">Telefone</span>
              <input
                className="input input-bordered w-full"
                name="phone"
                onChange={handleFieldChange}
                placeholder="(11) 99999-9999"
                required
                type="tel"
                value={form.phone}
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-2 text-sm">Segmento</span>
              <select className="select select-bordered w-full" name="segment" onChange={handleFieldChange} required value={form.segment}>
                <option value="">Selecione</option>
                {segments.map((segment) => (
                  <option key={segment} value={segment}>
                    {segment}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-2 text-sm">Quantidade aproximada de ativos</span>
              <select className="select select-bordered w-full" name="assetCount" onChange={handleFieldChange} required value={form.assetCount}>
                <option value="">Selecione</option>
                {assetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-2 text-sm">Mensagem</span>
              <textarea
                className="textarea textarea-bordered h-28 w-full"
                name="message"
                onChange={handleFieldChange}
                placeholder="Conte em poucas linhas seu desafio operacional"
                required
                value={form.message}
              />
            </label>

            <button aria-label="Enviar formulario de contato" className="btn btn-primary w-full" disabled={status === "loading"} type="submit">
              {status === "loading" ? "Enviando..." : "Agendar demonstracao"}
            </button>

            {feedback ? (
              <p className={`text-sm ${status === "error" ? "text-error" : "text-success"}`} role="status">
                {feedback}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}
