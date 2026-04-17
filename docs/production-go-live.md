# iobee V3 - Go Live (Vercel)

## 1) Deploy
- Criar projeto no Vercel apontando para este repositorio.
- Framework preset: `Vite`.
- Build command: `npm run build`.
- Output directory: `dist`.

## 2) Dominios
- Primary domain: `iobee.io`.
- Redirect domain: `www.iobee.io` -> `iobee.io` (308).
- `blog.iobee.io` pode apontar para este projeto com redirecionamento para `/blog`.
- `app.iobee.io` deve apontar para o projeto da aplicacao SaaS.
- Canonical das paginas institucionais: sempre `https://iobee.io`.

## 3) Variaveis de ambiente
Definir no Vercel (Production + Preview):
- Analytics/pixels (`VITE_*`)
- `DATABASE_URL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `LEADS_TO_EMAIL`, `LEADS_FROM_EMAIL`
- `HUBSPOT_WEBHOOK_URL` (opcional)
- `RD_STATION_WEBHOOK_URL` (opcional)

Referencia: `.env.example`

## 4) Endpoint de leads
- Endpoint: `POST /api/leads`
- Campos suportados:
  - `name`
  - `company`
  - `email`
  - `phone`
  - `segment`
  - `assetCount`
  - `message`
  - `website` (honeypot anti-spam)
  - `utmSource`, `utmMedium`, `utmCampaign`, `sourceUrl`
- Persistencia:
  - Com `DATABASE_URL`: salva em `lead_submissions`
  - Sem `DATABASE_URL`: fallback para log estruturado
- Schema de referencia: `docs/leads-schema.sql`
- Notificacao:
  - Com SMTP: envia email para `LEADS_TO_EMAIL`
- CRM futuro:
  - Forward opcional por webhook para HubSpot/RD

## 5) SEO tecnico
- `public/sitemap.xml`
- `public/robots.txt`
- `public/site.webmanifest`
- Open Graph/Twitter no `index.html` + override por rota via `PageSeo`
- Structured data: Organization, Product, FAQ e BreadcrumbList

## 6) QA pre-publicacao
- Conferir formularios em Production.
- Validar redirects de dominio.
- Validar eventos:
  - `cta_agendar_demonstracao_click`
  - `cta_falar_com_especialista_click`
  - `form_submit`
  - `whatsapp_click`
  - `scroll_50`
  - `scroll_90`
  - `visit_oem_page`
  - `visit_platform_page`
  - `visit_use_cases_page`
- Rodar Lighthouse (mobile/desktop) e ajustar imagens finais.

## 7) Producao de assets finais
Substituir placeholders por capturas reais:
- Hero executivo
- Device Twin
- Asset Twin
- Alertas
- WhatsApp/SMS/Email
- Multi-site
- OEM white-label
- Dashboards operacionais
- Floorplan
- Gestao de ativos
- Regras compostas
- Multi-tenant
- KPI executivo
