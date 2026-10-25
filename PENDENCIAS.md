# Pendências

Atualizado em 2026-10-25. Ao concluir um item, apague-o. Ao surgir um novo, acrescente-o aqui.

## Do lado do Dr. Alexandre

### Doctoralia
- [ ] Tirar "Especialista em Medicina Estética" do perfil. Medicina estética não é especialidade reconhecida e isso é risco no CFM.
- [ ] Pedir a remoção ou a fusão do perfil duplicado "Alexandre Yuji Okubo". Esse perfil mostra concorrentes.

### Google Ads e GA4
- [ ] Google Ads: criar a conversão "Clique telefone" e enviar o rótulo, para preencher `adsConversions.telefone` em `src/data/site.ts`.
- [ ] GA4: marcar como eventos principais os cliques de WhatsApp, Doctoralia e telefone.

### Search Console
- [ ] Pedir a indexação das URLs novas, começando por `/blog/rosacea/`.
- [ ] Conferir se os artigos e páginas recentes já aparecem no relatório de páginas.

### Redes
- [ ] Usar a mesma bio em todos os canais: "Dr. Alexandre Okubo · Dermatologista · CRM-SP 90.743 · RQE 30.051 · alexandreokubo.com.br".
- [ ] TikTok, por volta de 23/11/2026, nesta ordem:
  1. Renomear a conta antiga e vazia (@alexandreokubodermato).
  2. Na mesma sessão, renomear a principal para @alexandreokubodermato.
  3. Avisar o Claude, para atualizar `site.ts`.

### Cadastros
- [ ] Confirmar no CREMESP o cargo registrado na Prime (diretor clínico ou técnico).
- [ ] Conferir se o Perfil da Empresa no Google da Clínica Portugal usa o bairro "Centro", como o site e a Doctoralia.

## Do lado do Claude (próximas sessões)

### Aguardando decisão dele
- [ ] Link do artigo de rosácea no "Leia também" da dermatologia estética. Está oferecido; falta ele responder "pode".
- [ ] Textos dos anúncios do Google Ads para micose de unha e unha encravada/cantoplastia.
  Os textos precisam seguir as regras do CFM e do Google e não podem ter marca de medicamento.
- [ ] Próximo artigo: "Psoríase nas unhas", que fecha a série sobre unhas com micose, unha encravada e canetas.

### Depois que ele enviar a informação
- [ ] Preencher o rótulo `telefone` em `adsConversions`, quando ele enviar.
- [ ] Atualizar o TikTok em `site.ts` (`sameAs` e `social`), quando ele confirmar a troca.

### Manutenção
- [ ] O "Leia também" da dermatologia clínica tem 9 links. Ao passar de uns 10, deixar só os 6 a 8 artigos mais procurados.
  A escolha deve seguir os dados do Search Console.
- [ ] Atualizar `LAST_REVIEWED` em `site.ts` sempre que ele revisar o conteúdo institucional.
