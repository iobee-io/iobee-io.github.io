# iobee V3 Website

Site institucional da iobee V3 com foco em produto SaaS enterprise industrial.

## Stack
- React + Vite
- Tailwind CSS v4
- DaisyUI (tema dark/light custom)
- Heroicons
- Framer Motion

## Executar localmente
```bash
npm install
npm run dev
```

## Build (gera `dist/`)
```bash
npm run build
npm run preview
```

O build gera `dist/` e cria automaticamente `dist/404.html` para fallback SPA no GitHub Pages.

## Deploy GitHub Pages
- Deploy automatico via workflow: [deploy-gh-pages.yml](.github/workflows/deploy-gh-pages.yml)
- Branch de origem do workflow: `main`
- Artefato publicado: `dist/`

Configuracoes recomendadas do repositorio:
1. `Settings > Pages > Source`: `GitHub Actions`
2. `Settings > Actions > General`: habilitar workflows
3. Definir repository variables para analytics (`VITE_*`) e endpoint de leads (`VITE_LEADS_ENDPOINT`)

## Dominio customizado
- `public/CNAME` configurado com `iobee.io`
- `public/.nojekyll` incluido

## Formulario de contato em GitHub Pages
GitHub Pages e estatico e nao executa `/api`.

Por isso, configure:
- `VITE_LEADS_ENDPOINT=https://seu-endpoint-de-webhook.com/leads`

O frontend envia o formulario para esse endpoint.

## Estrutura
- `src/` frontend React
- `api/` funcoes serverless (opcional para outros deploys)
- `public/` assets estaticos (sitemap, robots, favicon, manifest, CNAME)
- `.github/workflows/` pipeline de deploy no Pages

## Documentacao
- [Guia de deploy no GitHub Pages](docs/github-pages-deploy.md)
- [Blueprint de UX, IA e estrategia](docs/iobee-v3-site-blueprint.md)
- [Guia de go-live em producao](docs/production-go-live.md)
- [Arquitetura tecnica original do sistema](docs/system-architecture.md)

## Variaveis de ambiente
Use `.env.example` como referencia para:
- `VITE_BASE_PATH` (default `/`)
- `VITE_LEADS_ENDPOINT`
- Analytics/pixels (`VITE_*`)
