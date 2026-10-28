# Pendências

Atualizado em 2026-10-28. Ao concluir um item, apague-o. Ao surgir um novo, acrescente-o aqui.

## Do lado do Dr. Alexandre

### Doctoralia
- [ ] Tirar "Especialista em Medicina Estética" do perfil. Medicina estética não é especialidade reconhecida e isso é risco no CFM.
  Em 2026-10-26 ele verificou que o painel não permite a remoção. Próximo passo: pedir ao suporte da Doctoralia, por escrito, citando a Resolução CFM 2.336/2023.
- [ ] Perfil duplicado "Alexandre Yuji Okubo" (mostra concorrentes): remoção pedida em 2026-10-26, prazo de 48 h.
  Conferir em 28/10 se o perfil saiu do ar. Se não saiu, cobrar a Doctoralia.
- [ ] Depois de tirar "medicina estética" do perfil, avisar o Claude. A URL do botão de agendamento contém "especialista-em-medicina-estetica" e pode mudar.

### Google Ads e GA4
- [ ] Criar a campanha de cisto sebáceo (Pesquisa, R$ 25/dia, raio de ~10 km nas duas clínicas, URL `/retirada-de-cisto-sebaceo/`). Após 2 semanas, enviar ao Claude o relatório de termos de pesquisa.
- [ ] Google Ads: criar a conversão "Clique telefone" e enviar o rótulo, para preencher `adsConversions.telefone` em `src/data/site.ts`.
- [ ] GA4: marcar como eventos principais os cliques de WhatsApp, Doctoralia e telefone.

### Meta Ads (Instagram)
Decisão de 2026-10-28: na primeira fase, anúncios só para a Prime. A recepção da Prime não agenda para Santo André.
- [ ] Decidir sobre a campanha "[CF] [REELS] Canetas Emagrecedoras" (ativa desde 19/05/2026, R$ 15/dia).
  De junho a outubro de 2026 trouxe 0 seguidores e 1 conversa. Recomendação do Claude: pausar.
- [ ] Publicar a campanha "MICOSE UNHA | WhatsApp | Prime | nov-2026" pelo Claude do Chrome (raio de 8 km da Prime, R$ 20/dia, até 4 vídeos de micose já publicados).
  Não mexer nela nos primeiros 7 dias.
- [ ] Recepção da Prime: planilha com data, primeira mensagem do paciente, agendou (sim/não) e compareceu (sim/não).
- [ ] No 14º dia da campanha, enviar ao Claude o relatório por anúncio e a planilha da recepção.
- [ ] Enviar os arquivos que faltam do levantamento da conta: anúncios de 29/07 a 27/10/2026, detalhamentos (posicionamento, idade e gênero, estado) e a localização de cada conjunto.

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
- [ ] Doctoralia: corrigir "Consulta Dermatologia: a partir de R$ 0" (parece erro de cadastro; visto em 2026-10-28).
- [ ] Enviar nota e número de avaliações dos perfis do Google (Prime, perfil pessoal e Clínica Portugal) e o link do perfil da Clínica Portugal.

## Do lado do Claude (próximas sessões)

### Aguardando decisão dele
- [ ] Quando ele melhorar os perfis do Google: acrescentá-los em `reviews` e em `sameAs` (`site.ts`), com a URL do Maps de cada um.
- [ ] Próximos temas pela pesquisa de palavras-chave (Google Ads, 2026-10-26): ceratose seborreica, lipoma, xantelasma, toxina botulínica, fios de PDO, olheiras, bioestimulador.
- [ ] Textos dos anúncios do Google Ads para micose de unha e unha encravada/cantoplastia.
  Os textos precisam seguir as regras do CFM e do Google e não podem ter marca de medicamento.
- [ ] Páginas de cisto sebáceo e unha encravada: anunciam as duas clínicas, mas o botão principal "Agendar pelo WhatsApp" leva à Prime, que não agenda para Santo André.
  Propor o ajuste, ou limitar à Prime o raio da campanha de cisto no Google Ads.
- [ ] Anúncios da Meta no ABC: só depois da fase da Prime. A Clínica Portugal não tem WhatsApp. Sem um canal de agendamento lá, não há anúncio de mensagens para o ABC.
- [ ] Estratégia do Instagram (seguidores qualificados em SP). Prioridades definidas em 2026-10-28: laser para micose de unha, retirada de verrugas e pintas,
  retirada de cistos e lipomas, xantelasma e siringoma. Respostas recebidas (técnicas em CLAUDE.md). Entrega: plano de 90 dias e calendário de 30 dias com roteiros.
  Aguardando a confirmação do resumo e 3 respostas: tempo de edição, exame de colesterol no xantelasma e nome do aparelho de plasma.

### Depois que ele enviar a informação
- [ ] Preencher o rótulo `telefone` em `adsConversions`, quando ele enviar.
- [ ] Atualizar o TikTok em `site.ts` (`sameAs` e `social`), quando ele confirmar a troca.
- [ ] Conferir e atualizar a URL da Doctoralia em `site.ts` (`primaryUrl` e `sameAs`), quando ele corrigir a especialidade no perfil.
  Em 2026-10-26 a URL passou de `.../santo-andre3` para `.../sao-paulo` (já atualizada). O trecho "especialista-em-medicina-estetica" continua nela.

### Manutenção
- [ ] O "Leia também" da dermatologia clínica chegou a 11 links (com probióticos e acne). Deixar só os 6 a 8 artigos mais procurados.
  A escolha deve seguir os dados do Search Console, que ele vai enviar.
- [ ] Atualizar `LAST_REVIEWED` em `site.ts` sempre que ele revisar o conteúdo institucional.
