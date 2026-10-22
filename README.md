# alexandreokubo.com.br

Site pessoal do Dr. Alexandre Okubo, dermatologista. Astro, gerado como site estático.

## Publicação (Cloudflare Pages)

- Comando de build: `npm run build`
- Pasta de saída: `dist`
- Variável de ambiente: `NODE_VERSION=22`

## Conteúdo

- Dados da entidade (nome, CRM, RQE, endereços, links): `src/data/site.ts`
- Artigos do blog: `src/content/blog/*.md`
  - `status: rascunho` não é publicado; só `status: aprovado` vai ao ar.
  - Prévia com rascunhos: `PREVIEW_DRAFTS=1 npm run build`
