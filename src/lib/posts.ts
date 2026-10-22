import { getCollection } from 'astro:content';

// Rascunhos aparecem só na prévia: com PREVIEW_DRAFTS=1 ou em qualquer branch
// diferente de main na Cloudflare (ex.: rascunhos.alexandreokubo-site.pages.dev).
const branch = process.env.CF_PAGES_BRANCH;
const showDrafts = process.env.PREVIEW_DRAFTS === '1' || (!!branch && branch !== 'main');

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => showDrafts || data.status === 'aprovado');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
