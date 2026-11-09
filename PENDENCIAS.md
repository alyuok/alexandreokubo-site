# Pendências

Atualizado em 2026-11-07. Ao concluir um item, apague-o. Ao surgir um novo, acrescente-o aqui.

## Do lado do Dr. Alexandre

### Doctoralia
- [ ] Tirar "Especialista em Medicina Estética" do perfil. Medicina estética não é especialidade reconhecida e isso é risco no CFM.
  Em 2026-10-26 ele verificou que o painel não permite a remoção. Próximo passo: pedir ao suporte da Doctoralia, por escrito, citando a Resolução CFM 2.336/2023.
- [ ] Depois de tirar "medicina estética" do perfil, avisar o Claude. A URL do botão de agendamento contém "especialista-em-medicina-estetica" e pode mudar.
- [ ] Pôr alexandreokubo.com.br como site do perfil. Em 2026-10-30 o perfil só linkava a Prime.

### Site da Prime
Tudo o que é da Prime (site primedermatologia.com, perfil do Google da clínica, domínios, DNS, Search Console) está no `PENDENCIAS.md` do repositório `alyuok/clinicaprime`.
O site novo está no ar desde 09/11/2026 e substituiu o WordPress; a Fase 0 da auditoria (CFM) se resolveu com a troca.

### Google Ads e GA4
- [ ] Criar a campanha de cisto sebáceo (Pesquisa, R$ 25/dia, raio de ~10 km nas duas clínicas, URL `/retirada-de-cisto-sebaceo/`). Após 2 semanas, enviar ao Claude o relatório de termos de pesquisa.
- [ ] GA4: marcar como eventos principais `contato_whatsapp`, `contato_doctoralia` e `contato_telefone` (em 07/11, eram 0 eventos principais).
- [ ] Vincular o GA4 ao Google Ads (conta "Prime Dermato"). Se importar eventos do GA4 como conversão, deixá-los como secundários: as principais são as da tag do site.

### Google Ads: correções da auditoria de 07/11 (`Prime Dermato`, 375-279-5144)
- [ ] Rodar o prompt `docs/prompt-ajustes-google-ads-2026-11-07.md` (textos do CFM, recursos, conversões, domínios da tag, lances, região, negativas, GA4) e mandar o relatório final ao Claude.
- [ ] Quem montou as campanhas e os rascunhos "(Clube Fiel)"? Se foi agência, conferir se ainda tem acesso à conta.

### Search Console
- [ ] Conferir se os artigos e páginas recentes já aparecem no relatório de páginas.

### Redes
- [ ] Usar a mesma bio em todos os canais: "Dr. Alexandre Okubo · Dermatologista · CRM-SP 90.743 · RQE 30.051 · alexandreokubo.com.br".
- [ ] TikTok, por volta de 23/11/2026, nesta ordem:
  1. Renomear a conta antiga e vazia (@alexandreokubodermato).
  2. Na mesma sessão, renomear a principal para @alexandreokubodermato.
  3. Avisar o Claude, para atualizar `site.ts`.

### Cadastros
- [ ] Doctoralia: corrigir "Consulta Dermatologia: a partir de R$ 0" (parece erro de cadastro; visto em 2026-10-28).
- [ ] Enviar nota e número de avaliações dos perfis do Google (Prime, perfil pessoal e Clínica Portugal) e o link do perfil da Clínica Portugal.
- [ ] Google: renomear o perfil da Prime de "Clínica Prime Dermatologia" para "Prime Dermatologia e Saúde Emocional" (decidido em 30/10). O Google pode pedir nova verificação.
- [ ] Perfil do Google da Prime: pedir avaliações novas, pôr fotos e lista de serviços. Na medição de 30/10, a Prime ficou em 6º na própria porta.
  Não criar perfil pessoal no endereço da Prime por enquanto: dois perfis no mesmo endereço tendem a disputar a mesma vaga no Maps.

### Site (auditoria de 29/10)
- [ ] Foto da equipe: a do grupo enviada em 29/10 não pode ser usada (Carla Okubo aparece, com a mão no ombro dele). Se quiser foto da equipe no site, tirar outra só com ele e as funcionárias.
- [ ] Para completar as páginas das unidades: horários, metrô e estacionamento, acessibilidade, convênios da Clínica Portugal e regras de cancelamento.

## Do lado do Claude (próximas sessões)

### Auditoria de 29/10 (publicada em 29/10)
Medição no ar depois da publicação: home no celular com desempenho 91 (era 60), CLS 0,001 (era 0,338) e acessibilidade 100 em todas as páginas medidas.

### Aguardando decisão dele
- [ ] Próximos temas: toxina botulínica, fios de PDO, olheiras, bioestimulador.
- [ ] Repetir a medição de `docs/medicao-2026-10-30.md` em janeiro de 2027, com os mesmos termos e pontos.
- [ ] Textos dos anúncios do Google Ads para micose de unha e unha encravada/cantoplastia: rascunho em `docs/anuncios-google-ads.md` (07/11).
  Perguntas respondidas em 07/11. Aguarda o "aprovado".

### Depois que ele enviar a informação
- [ ] Conferir no Google Ads, a partir de 10/11, se a "Clique telefone" passou de "Inativo" para registrando (rótulo publicado em 07/11).
- [ ] Atualizar o TikTok em `site.ts` (`sameAs` e `social`), quando ele confirmar a troca.
- [ ] Conferir e atualizar a URL da Doctoralia em `site.ts` (`primaryUrl` e `sameAs`), quando ele corrigir a especialidade no perfil.
  Em 2026-10-26 a URL passou de `.../santo-andre3` para `.../sao-paulo` (já atualizada). O trecho "especialista-em-medicina-estetica" continua nela.

### Google Ads: nova análise em 21/11/2026 (2 semanas depois dos ajustes de 07/11)
Ele exporta os dados do período de 08/11 a 21/11 e o relatório de termos de pesquisa em CSV. O Claude compara com a linha de base abaixo.
A linha de base é a semana de 31/10 a 06/11, a primeira com as conversões novas do site medindo. Compare taxas e médias por dia, porque os períodos têm tamanhos diferentes.
A força do anúncio não entra na comparação. Ela caiu de "Excelente" para "Médio" com a correção do CFM, e isso já era esperado.

| Métrica (31/10 a 06/11) | Marcação de consultas | Cisto sebáceo |
|---|---|---|
| Impressões | 404 (58/dia) | 480 (69/dia) |
| Cliques | 26 (3,7/dia) | 60 (8,6/dia) |
| Taxa de cliques (CTR) | 6,44% | 12,50% |
| CPC médio | R$ 4,44 | R$ 3,00 |
| Custo | R$ 115,42 (R$ 16,49/dia) | R$ 180,29 (R$ 25,76/dia) |
| Conversões | 4 (3 WhatsApp, 1 Doctoralia) | 7 (5 WhatsApp, 2 Doctoralia) |
| Taxa de conversão | 15,4% | 11,7% |
| Custo por conversão | R$ 28,86 | R$ 25,76 |

O que comparar e como ler:
- [ ] **Marcação, CTR:** se cair abaixo de 5%, rever os títulos, sem voltar aos superlativos.
- [ ] **Marcação, custo por conversão e conversões por dia:** o efeito de Maximizar cliques (CPC máximo de R$ 6) e do raio de 15 km. Se o gasto por dia subir sem conversões, baixar o CPC máximo.
- [ ] **Marcação, termos de pesquisa:** quantos cliques vieram de fora do raio, de nomes de outros médicos ou de buscas por "grátis"/"barato". Deve ser zero.
- [ ] **Cisto, termos de pesquisa:** a parte dos cliques que vem de buscas informacionais ("como tirar", "antibiótico" etc.). Antes, cerca de 1 em cada 4 cliques com termo visível. Deve cair.
- [ ] **Cisto, custo por conversão:** com menos cliques informacionais, deve ficar igual ou menor com o mesmo orçamento.
- [ ] **Conversões:** só as 4 principais contam (Clique WhatsApp, Clique Doctoralia, Clique telefone, Call clicks from ads). Conferir se a "Clique telefone" saiu de "Inativo".
- [ ] **Status:** anúncios da Marcação aprovados, sem reprovação nova nos recursos, e o aviso da tag resolvido depois de adicionar os domínios.
- [ ] **Decisão:** com 15 a 30 conversões por mês em uma campanha, avaliar a troca para lances por conversão. Antes disso, manter Maximizar cliques.

### Manutenção
- [ ] O "Leia também" da dermatologia clínica chegou a 11 links (com probióticos e acne). Deixar só os 6 a 8 artigos mais procurados.
  A escolha deve seguir os dados do Search Console, que ele vai enviar.
- [ ] Atualizar `LAST_REVIEWED` em `site.ts` sempre que ele revisar o conteúdo institucional.
