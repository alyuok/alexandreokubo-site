# Pendências

Atualizado em 2026-10-26. Ao concluir um item, apague-o. Ao surgir um novo, acrescente-o aqui.

## Do lado do Dr. Alexandre

### Doctoralia
- [ ] Tirar "Especialista em Medicina Estética" do perfil. Medicina estética não é especialidade reconhecida e isso é risco no CFM.
- [ ] Perfil duplicado "Alexandre Yuji Okubo" (mostra concorrentes): remoção pedida em 2026-10-26, prazo de 48 h.
  Conferir em 28/10 se o perfil saiu do ar. Se não saiu, cobrar a Doctoralia.
- [ ] Depois de tirar "medicina estética" do perfil, avisar o Claude. A URL do botão de agendamento contém "especialista-em-medicina-estetica" e pode mudar.

### Google Ads e GA4
- [ ] Google Ads: criar a conversão "Clique telefone" e enviar o rótulo, para preencher `adsConversions.telefone` em `src/data/site.ts`.
- [ ] GA4: marcar como eventos principais os cliques de WhatsApp, Doctoralia e telefone.

### Search Console
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
- [ ] Artigo "Cigarro faz mal para a pele?" (`/blog/cigarro-e-pele/`): rascunho na prévia desde 2026-10-26.
  Aguardando as respostas às perguntas sobre a prática dele e o "aprovado". Na publicação, acrescentar a pergunta sobre tabagismo no FAQ de `cirurgia-dermatologica.astro`.
- [ ] Textos dos anúncios do Google Ads para micose de unha e unha encravada/cantoplastia.
  Os textos precisam seguir as regras do CFM e do Google e não podem ter marca de medicamento.

### Depois que ele enviar a informação
- [ ] Preencher o rótulo `telefone` em `adsConversions`, quando ele enviar.
- [ ] Atualizar o TikTok em `site.ts` (`sameAs` e `social`), quando ele confirmar a troca.
- [ ] Conferir e atualizar a URL da Doctoralia em `site.ts` (`primaryUrl` e `sameAs`), quando ele corrigir a especialidade no perfil.

### Manutenção
- [ ] O "Leia também" da dermatologia clínica chegou a 11 links (com probióticos e acne). Deixar só os 6 a 8 artigos mais procurados.
  A escolha deve seguir os dados do Search Console, que ele vai enviar.
- [ ] Atualizar `LAST_REVIEWED` em `site.ts` sempre que ele revisar o conteúdo institucional.
