import { getCollection } from 'astro:content';

// Rascunhos só entram quando PREVIEW_DRAFTS=1 (prévia para aprovação).
const showDrafts = process.env.PREVIEW_DRAFTS === '1';

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => showDrafts || data.status === 'aprovado');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
