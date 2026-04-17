# Deploy no GitHub Pages (Vite)

## Pre-requisitos
- Repositorio no GitHub
- Branch `main`
- Node 20 no workflow

## 1) Configurar Pages
- Acesse `Settings > Pages`
- Em `Source`, selecione `GitHub Actions`

## 2) Workflow
O projeto ja inclui:
- `.github/workflows/deploy-gh-pages.yml`

Esse workflow:
- instala dependencias
- roda `npm run build`
- publica `dist/` no GitHub Pages

## 3) Build output
- `vite build` gera `dist/`
- `postbuild` gera `dist/404.html` para fallback de rotas SPA

## 4) Dominio customizado
- `public/CNAME` ja configurado com `iobee.io`
- `public/.nojekyll` ja incluido

## 5) Variaveis recomendadas (Repository Variables)
- `VITE_LEADS_ENDPOINT`
- `VITE_GA4_ID`
- `VITE_GTM_ID`
- `VITE_META_PIXEL_ID`
- `VITE_LINKEDIN_PARTNER_ID`
- `VITE_HOTJAR_ID`
- `VITE_POSTHOG_KEY`
- `VITE_POSTHOG_HOST`

## 6) Observacao importante sobre formulario
GitHub Pages nao executa backend `/api`.
Configure `VITE_LEADS_ENDPOINT` para um webhook externo.

## 7) Deploy manual (opcional)
```bash
npm install
npm run build
npm run deploy
```