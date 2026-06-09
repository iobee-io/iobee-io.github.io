import {
  ArrowDownTrayIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ClipboardDocumentIcon,
  LinkIcon,
  PrinterIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/seo/Breadcrumbs";
import { PageSeo } from "../components/seo/PageSeo";
import { MotionReveal } from "../components/ui/MotionReveal";
import { SectionContainer } from "../components/ui/SectionContainer";
import { supportMaterials, supportMaterialsNaming } from "../data/blogSupportMaterialsIndex";
import { trackEvent } from "../lib/analytics";
import { canonicalUrl } from "../lib/siteConfig";

async function copyTextToClipboard(text) {
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  return false;
}

export default function BlogMaterialDetailPage() {
  const { slug } = useParams();
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const material = useMemo(() => supportMaterials.find((item) => item.slug === slug), [slug]);

  const relatedMaterials = useMemo(() => {
    if (!material) {
      return [];
    }

    return supportMaterials
      .filter((item) => item.slug !== material.slug)
      .map((item) => {
        let score = 0;
        if (item.problemType === material.problemType) score += 3;
        if (item.materialType === material.materialType) score += 2;
        if (item.deciderProfiles.some((profile) => material.deciderProfiles.includes(profile))) score += 2;
        if (item.assetTypes.some((asset) => material.assetTypes.includes(asset))) score += 1;
        return { ...item, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [material]);

  if (!material) {
    return <Navigate replace to="/blog/materiais" />;
  }

  const breadcrumbItems = [
    { name: "Blog", path: "/blog" },
    { name: supportMaterialsNaming.title, path: "/blog/materiais" },
    { name: material.title, path: `/blog/materiais/${material.slug}` },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: material.title,
    description: material.summary,
    url: canonicalUrl(`/blog/materiais/${material.slug}`),
    creator: {
      "@type": "Organization",
      name: "iobee",
    },
    audience: material.deciderProfiles.join(", "),
    about: [material.problemType, ...material.assetTypes],
  };

  async function handleShare() {
    const shareUrl = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: material.title,
          text: material.summary,
          url: shareUrl,
        });
        setFeedbackMessage("Link compartilhado com sucesso.");
      } else {
        const copied = await copyTextToClipboard(shareUrl);
        if (!copied) {
          throw new Error("clipboard_not_available");
        }
        setFeedbackMessage("Link copiado para a area de transferencia.");
      }
      trackEvent("blog_support_material_share_click", { slug: material.slug });
    } catch (error) {
      setFeedbackMessage("Nao foi possivel compartilhar agora.");
    }
  }

  async function handleCopyEmail() {
    const emailBlock = `Assunto: ${material.emailTemplate.subject}\n\n${material.emailTemplate.body}`;
    try {
      const copied = await copyTextToClipboard(emailBlock);
      if (!copied) {
        throw new Error("clipboard_not_available");
      }
      setFeedbackMessage("Modelo de email copiado.");
      trackEvent("blog_support_material_copy_email_click", { slug: material.slug });
    } catch (error) {
      setFeedbackMessage("Nao foi possivel copiar o modelo de email.");
    }
  }

  function handlePrint(mode = "print") {
    trackEvent("blog_support_material_print_click", { slug: material.slug, mode });
    setFeedbackMessage(
      mode === "pdf"
        ? "Use a opcao Salvar como PDF na janela de impressao."
        : "Abrindo impressao do material."
    );
    window.print();
  }

  return (
    <SectionContainer className="py-16 md:py-24">
      <PageSeo
        breadcrumbs={[{ name: "Home", path: "/" }, ...breadcrumbItems]}
        description={material.summary}
        path={`/blog/materiais/${material.slug}`}
        schema={schema}
        title={`${material.title} | Material de Aprovacao Interna`}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <MotionReveal className="print-hidden">
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80" to="/blog/materiais">
          <ArrowLeftIcon className="size-4" />
          Voltar para materiais
        </Link>
      </MotionReveal>

      <MotionReveal className="mt-6">
        <header className="blog-hero-shell print-surface rounded-3xl border border-base-content/12 p-8 md:p-10">
          <p className="inline-flex rounded-full border border-primary/35 bg-primary/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Ferramenta para convencer internamente
          </p>
          <h1 className="section-title mt-5 max-w-5xl font-display text-4xl font-semibold md:text-5xl">{material.title}</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-base-content/78 md:text-lg">{material.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-primary/35 bg-primary/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
              {material.materialType}
            </span>
            <span className="rounded-full border border-base-content/20 bg-base-100/45 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-base-content/65">
              {material.problemType}
            </span>
            <span className="rounded-full border border-base-content/20 bg-base-100/45 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-base-content/65">
              Usos: {material.usageCount}
            </span>
            <span className="rounded-full border border-base-content/20 bg-base-100/45 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-base-content/65">
              Downloads: {material.downloadCount}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 text-xs text-base-content/70">
            {material.deciderProfiles.map((profile) => (
              <span className="rounded-full border border-base-content/16 bg-base-100/45 px-3 py-1 uppercase tracking-[0.11em]" key={`${material.slug}-profile-${profile}`}>
                {profile}
              </span>
            ))}
          </div>

          <div className="print-hidden mt-8 flex flex-wrap gap-3">
            <button className="btn btn-outline" onClick={handleShare} type="button">
              <ShareIcon className="size-4" />
              Compartilhar link
            </button>
            <button className="btn btn-outline" onClick={() => handlePrint("print")} type="button">
              <PrinterIcon className="size-4" />
              Imprimir
            </button>
            <button className="btn btn-primary soft-glow" onClick={() => handlePrint("pdf")} type="button">
              <ArrowDownTrayIcon className="size-4" />
              Baixar PDF
            </button>
            <button className="btn btn-outline" onClick={handleCopyEmail} type="button">
              <ClipboardDocumentIcon className="size-4" />
              Copiar email pronto
            </button>
          </div>
          {feedbackMessage ? (
            <p className="print-hidden mt-4 inline-flex items-center gap-2 rounded-full border border-success/35 bg-success/12 px-4 py-2 text-sm text-success">
              <CheckIcon className="size-4" />
              {feedbackMessage}
            </p>
          ) : null}
        </header>
      </MotionReveal>

      <article className="mt-10 space-y-8">
        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">1. Objetivo do material</h2>
            <p className="mt-4 text-base leading-relaxed text-base-content/78">{material.objective}</p>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">2. Custo de nao agir</h2>
            <p className="mt-4 text-base leading-relaxed text-base-content/78">{material.costOfInaction}</p>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">3. Matriz de impacto financeiro</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-base-content/12">
              <table className="table table-zebra w-full min-w-[640px]">
                <thead>
                  <tr>
                    <th>Indicador</th>
                    <th>Formula sugerida</th>
                    <th>Exemplo</th>
                  </tr>
                </thead>
                <tbody>
                  {material.financialMatrix.map((item) => (
                    <tr key={`${material.slug}-${item.metric}`}>
                      <td className="font-semibold">{item.metric}</td>
                      <td>{item.formula}</td>
                      <td>{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">4. Narrativa pronta para aprovacao</h2>
            <ol className="mt-5 space-y-3 text-base leading-relaxed text-base-content/78">
              {material.internalNarrative.map((item, index) => (
                <li className="rounded-xl border border-base-content/12 bg-base-100/45 px-4 py-3" key={`${material.slug}-narrative-${index}`}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">5. Pitch de 2 minutos</h2>
            <ol className="mt-5 space-y-3 text-base leading-relaxed text-base-content/78">
              {material.pitch2min.map((item, index) => (
                <li className="rounded-xl border border-base-content/12 bg-base-100/45 px-4 py-3" key={`${material.slug}-pitch2-${index}`}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">6. Pitch de 10 minutos para reuniao com gestao</h2>
            <ol className="mt-5 space-y-3 text-base leading-relaxed text-base-content/78">
              {material.pitch10min.map((item, index) => (
                <li className="rounded-xl border border-base-content/12 bg-base-100/45 px-4 py-3" key={`${material.slug}-pitch10-${index}`}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">7. Objecoes e respostas</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {material.objections.map((objection) => (
                <article className="rounded-2xl border border-base-content/12 bg-base-100/45 p-5" key={`${material.slug}-${objection.question}`}>
                  <p className="font-display text-lg font-semibold text-base-content">Objecao</p>
                  <p className="mt-2 text-base text-base-content/80">{objection.question}</p>
                  <p className="mt-4 font-display text-lg font-semibold text-base-content">Resposta sugerida</p>
                  <p className="mt-2 text-base text-base-content/76">{objection.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">8. Modelo de email para levar ao gestor</h2>
            <div className="mt-5 rounded-2xl border border-base-content/12 bg-base-100/45 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary/90">Assunto</p>
              <p className="mt-2 text-base text-base-content/82">{material.emailTemplate.subject}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary/90">Corpo</p>
              <p className="mt-2 text-base leading-relaxed text-base-content/78">{material.emailTemplate.body}</p>
            </div>
          </section>
        </MotionReveal>

        <MotionReveal>
          <section className="print-surface glass-card rounded-3xl border p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">9. Diferenciais da iobee que reforcam a aprovacao</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {material.iobeeDifferentials.map((item) => (
                <li className="rounded-xl border border-primary/30 bg-primary/12 px-4 py-3 text-base text-base-content/82" key={`${material.slug}-diff-${item}`}>
                  - {item}
                </li>
              ))}
            </ul>
          </section>
        </MotionReveal>
      </article>

      <MotionReveal className="mt-10 print-hidden">
        <section className="print-surface glass-card rounded-3xl border p-8 md:p-10">
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Quer adaptar este material com os dados da sua planta?</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-base-content/76 md:text-lg">
            Em uma sessao tecnica, ajudamos voce a preencher baseline, custo de nao agir e meta de retorno para aumentar a chance de aprovacao interna.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="btn btn-primary soft-glow"
              onClick={() => trackEvent("cta_falar_com_especialista_click", { context: "support_material_detail", slug: material.slug })}
              to="/contato"
            >
              Falar com especialista
            </Link>
            <Link className="btn btn-outline" to="/blog/materiais">
              Ver outros materiais
            </Link>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-12 print-hidden">
        <section>
          <h2 className="section-title font-display text-3xl font-semibold md:text-4xl">Materiais relacionados</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedMaterials.map((item) => (
              <article className="support-material-card glass-card rounded-2xl border p-5" key={item.slug}>
                <p className="text-xs uppercase tracking-[0.12em] text-primary/90">{item.materialType}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-base-content">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-base-content/74">{item.summary}</p>
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary" to={`/blog/materiais/${item.slug}`}>
                  Abrir material
                  <ArrowRightIcon className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal className="mt-8 print-hidden">
        <section className="rounded-2xl border border-base-content/15 bg-base-100/45 p-5 text-sm text-base-content/75">
          <p className="inline-flex items-center gap-2">
            <LinkIcon className="size-4 text-primary/90" />
            Dica: use os botoes de compartilhar e copiar email para levar este material direto para sua gestao.
          </p>
        </section>
      </MotionReveal>
    </SectionContainer>
  );
}
