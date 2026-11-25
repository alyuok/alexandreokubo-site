# Pendências

Atualizado em 2026-11-25. Ao concluir um item, apague-o. Ao surgir um novo, acrescente-o aqui.

**Dono de cada assunto:** este arquivo é o único dono do Google Ads (todas as campanhas, conta "Prime Dermato", ID em `analytics.adsAccount` de `src/data/site.ts`) e do GA4 `G-PYB8EG1D9J`. O `PENDENCIAS.md` do clinicaprime só aponta para cá.

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
- GA4 conferido em 23/11 (relatório do Chrome): dimensão "Origem do clique" (`origem`) criada; `contato_whatsapp`, `contato_doctoralia` e `contato_telefone` marcados como eventos principais; anotação de 21/11 criada (texto encurtado, limite de 150 caracteres); `clique_interno` com `origem` e `proteina_calculo` vistos no Tempo real. Vínculo com o Google Ads já existia desde 07/11, sem eventos importados.
- Publicidade personalizada desativada no vínculo GA4 e Google Ads em 23/11 (15:05; vínculo continua ativo). Indicadores do Google desativados.
- [ ] GA4 (opcional): testar o aviso de cookies e o botão "Aceitar" numa janela anônima (no teste de 23/11 o consentimento já estava salvo).
- [ ] GA4: os eventos da calculadora (`proteina_calculo`, `proteina_alimento`, `proteina_rotulo`, `proteina_pdf`, `proteina_triagem_bloqueio`) aparecem sozinhos; não marcar como principais nem importar no Ads (são uso da ferramenta, não agendamento).
- [ ] Google Ads: nada a criar nem mudar nas conversões (mesmos rótulos). Na análise de 02/12, ler a conversão Clique Doctoralia levando em conta a mudança de 21/11.
- [ ] Google Ads (opcional): extensão de frase de destaque "Teleconsulta e segunda opinião" e, se houver sitelinks, conferir os textos: os endereços não mudaram, só os nomes do menu ("Como atendo", "Tratamentos").
- [ ] Google Ads: não usar público de quem usou a calculadora para remarketing (política do Google para saúde em anúncios personalizados).

### Google Ads: correções da auditoria de 07/11 (`Prime Dermato`, 138-068-5039)
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
- [ ] Avaliações no Google, estimuladas nas duas clínicas: em 14/11, Prime com 25 e o perfil pessoal dele no endereço da Clínica Portugal ("Dr. Alexandre Okubo Dermatologista", Santo André) com 40. nota 4,9 nas duas. Perfil de Santo André: https://maps.app.goo.gl/eBLbLwwCppLfJYAk8 (o mesmo cid já em site.ts), link de avaliação https://g.page/r/CcPGJf_S_L3wEAI/review. Nova medição do ritmo em 28/11 (lembrete agendado).
- Perfil pessoal do Dr. Alexandre no endereço da Prime: cancelado em 09/11 (dois perfis no mesmo endereço disputam a mesma vaga no Maps). Não recriar.
  O perfil do Google da Prime (avaliações, categorias, telefone) está no `PENDENCIAS.md` do clinicaprime.

### Site (auditoria de 29/10)
- [ ] Foto da equipe: a do grupo enviada em 29/10 não pode ser usada (Carla Okubo aparece, com a mão no ombro dele). Se quiser foto da equipe no site, tirar outra só com ele e as funcionárias.
- [ ] Para completar as páginas das unidades: horários, metrô e estacionamento, acessibilidade, convênios da Clínica Portugal e regras de cancelamento.

## Do lado do Claude (próximas sessões)

### Regras permanentes
- **Foco em SEO e GEO (regra fixa, muito importante, pedido dele em 10/11):** todo artigo e página existe para ser encontrado no Google e citado por ferramentas de IA. Qualquer texto novo ou revisão de linguagem preserva isso: H1 e title com o termo que as pessoas buscam (e o local, quando couber); `answer` direto no topo; subtítulos no formato das perguntas reais; nome popular ao lado do termo técnico; links internos com âncora descritiva; números com fonte. Nunca trocar um termo buscado por sinônimo só para evitar repetição, nem cortar a resposta direta para deixar o texto mais "literário". Também no `CLAUDE.md`.
- Ao terminar qualquer artigo ou página, rodar um agente separado para revisar a linguagem com `docs/glossario-cliches-ia.md` (não aparentar IA) antes de mandar a prévia. Pedido dele em 09/11; também no `CLAUDE.md`.

### Auditoria de 29/10 (publicada em 29/10)
Medição no ar depois da publicação: home no celular com desempenho 91 (era 60), CLS 0,001 (era 0,338) e acessibilidade 100 em todas as páginas medidas.

### Aguardando decisão dele
- [ ] Siringoma publicado em 11/11 (`/blog/siringoma/`): ele pedir a indexação no Search Console. "Plasmage Siringomas" é frase de destaque (sem URL), não grupo de anúncios: não há anúncio de siringoma na conta.
- [ ] Toxina botulínica publicada em 16/11 (`/blog/toxina-botulinica/`): ele pedir a indexação no Search Console.
- [ ] Cisto sebáceo revisado em 18/11 (seção de pomada e cisto inflamado, subtítulos em pergunta; reindexação pedida). No fim de dezembro, conferir no Search Console a posição de `/blog/cisto-sebaceo/` e `/retirada-de-cisto-sebaceo/` (eram 46 e 34) e a busca "pomada para cisto sebáceo inflamado".
- [ ] Câncer de pele publicado em 16/11 (`/blog/cancer-de-pele/`, Dezembro Laranja): indexação pedida; falta ele linkar o artigo no post do Instagram do início de dezembro.
- [ ] Bioestimulador de colágeno publicado em 16/11 (`/blog/bioestimulador-de-colageno/`): ele pedir a indexação no Search Console.
- [ ] Cabelos brancos publicado em 23/11 (`/blog/cabelos-brancos/`, link no "Leia também" da dermatologia clínica, agora com 9 links): ele pedir a indexação no Search Console.
- [ ] Próximos temas: olheiras, melanoma, carcinoma basocelular (os de fios de PDO, dermatite, psoríase e urticária estão no item dos subitens).
- [ ] Repetir a medição de `docs/medicao-2026-10-30.md` em janeiro de 2027, com os mesmos termos e pontos.
- [ ] Campanhas "Micose de unha - Pesquisa" e "Unha encravada - Pesquisa" ativas desde 10/11 (R$ 20/dia cada, Maximizar cliques, CPC máx. R$ 6; relatório de 10/11).
  Força do anúncio e política conferidas em 25/11: Micose "Ruim" (R$ 130 com 1 conversão), "Laser" "Bom", Unha "Ruim"; todos aprovados. Tirar a fixação dos títulos 1 e 2 só se ele escrever "pode tirar a fixação".
  Custo por conversão de 08 a 24/11: Micose R$ 103,39 (3 conversões), Unha R$ 74,21 (4) e Cisto R$ 54,70. A Micose passou do gatilho de R$ 50: decidir em 02/12 se concentra no grupo "Laser".
  Os recursos de mensagem de WhatsApp que o Google anexou às duas campanhas ficaram pausados. Idioma não configurável na interface atual. Em 25/11, a Micose tinha uma mensagem ativa, criada pelo anunciante em 18/11 ("Gostaria de obter mais informações sobre a consulta para micose de unha…"): criada por uma sessão anterior; deixar como está (decisão dele, 25/11).
- [ ] Conversões principais (resultado de 11/11, `docs/prompt-conversoes-secundarias-2026-11-11.md`): as ações criadas pelo Google (perfil da empresa, campanhas inteligentes, "Clicks to call") não podem ser reclassificadas ("criada pelo Google Ads e não pode ser editada").
  Corrigido o que importa: as campanhas de consultas e cisto passaram a usar as metas padrão da conta, e as metas padrão filtram por origem (Contato: só Site; Lead telefônico: só chamadas de anúncios).
  De 04 a 10/11, a coluna Conversões só contou WhatsApp, Doctoralia e telefone. Falta conferir, em Metas > Resumo, se só "Contato" e "Lead telefônico" estão como metas padrão da conta (Rotas, Engajamento, Página, Agendamento e Formulário fora).
  Na exportação de 21/11, segmentar por "Ação de conversão" mesmo assim.
- [ ] Campanhas antigas pausadas ("Unhas - Inicio 18/03 (Clube Fiel)", três Inteligentes de Lunula e unha encravada): deixar pausadas. Não reativar.

### Depois que ele enviar a informação
- [ ] Atualizar o TikTok em `site.ts` (`sameAs` e `social`), quando ele confirmar a troca.
- [ ] Conferir e atualizar a URL da Doctoralia em `site.ts` (`primaryUrl` e `sameAs`), quando ele corrigir a especialidade no perfil.
  Em 2026-10-26 a URL passou de `.../santo-andre3` para `.../sao-paulo` (já atualizada). O trecho "especialista-em-medicina-estetica" continua nela.

### Google Ads: negativas aplicadas em 18/11 (autorizadas por ele)
- Em 10 a 16/11, 72% do gasto visível de micose foi em busca de remédio ou tratamento caseiro, sem conversão (R$ 74,45 por conversão). Se continuar acima de R$ 50 por conversão em 2 semanas, avaliar concentrar a campanha no laser Lunula.
- Unha encravada: a única conversão visível veio de "o que fazer para aliviar a dor"; não negativar "o que fazer", dor, pus, inflamada. Reavaliar "remédio", "antibiótico" e "anti-inflamatório" em 21/11.
- Conversões (18/11): Clique WhatsApp, Doctoralia e telefone funcionam (telefone registrou em 17/11). O "Requer atenção" é só a sugestão de conversões otimizadas com código na página, que não se aplica (o site não tem formulário com e-mail ou telefone). "Lead WhatsApp" e "agendamento" estão com configuração incorreta; em 25/11 nenhuma campanha usava (secundárias, último sinal em 15/02/2023). Remover só com o OK dele. Cisto e Marcação de consultas com aviso "Não há palavras-chave relevantes suficientes".

### Google Ads: Marcação de consultas (análise de 18/11)
- 10 a 16/11: R$ 749 em 7 dias (cerca de R$ 107/dia, contra R$ 16,49/dia na linha de base), 20 conversões, R$ 37,46 por conversão. "consulta com dermatologista": R$ 237 por 1 conversão. Melhores: [dermatologista], "clinica dermatologica sp", "medico de pele" (baixa qualidade), "dermatologista consulta", "dermatologista em sao paulo".
- Palavra-chave "dr alexandre okubo" pausada em 18/11 (ele rodou o prompt).
- Aplicadas em 18/11 (56 negativas no total): dr, dra, doutora, itaquaquecetuba, mairinque, carapicuíba, carapicuiba, jundiaí, jundiai, posto de saúde, posto de saude, ubs. Orçamento caiu de R$ 110 para R$ 30/dia em 13/11 (explica o gasto alto de 10 a 16/11).
- [ ] Teste de 2 semanas aplicado em 18/11 (reavaliar por volta de 02/12): reativada "melhores dermatologistas sp"; acrescentar "melhores dermatologistas" e "dermatologista particular" (frase). Volumes OpenSEO (Brasil): 170, 90 e 320 buscas/mês. Anúncios seguem sem superlativo.
- [ ] Micose de unha (18/11): grupo "Laser" criado (anúncio qualificado, força "Bom" em 25/11; negativas: 78). Avaliar em 02/12: (anúncio sem superlativo, destino /micose-de-unha/, palavras de frase: tratamento a laser para micose de unha, laser para micose de unha, laser micose unha, lunula laser, laser lunula) e negativas "caneta" e "dispositivo". Volumes OpenSEO (Brasil): tratamento a laser 90/mês, lunula laser 30/mês. Artigo de micose ganhou a seção "Qual o melhor tratamento para micose de unha?" (110 + 70 buscas/mês).
- [ ] Termos, orçamento e histórico lidos pelo Chrome em 25/11, sem CSV. "consulta com dermatologista": 131 cliques, R$ 365 e 2 conversões (R$ 182 por conversão; antes R$ 237; última semana R$ 47,72 por 1 conversão). Decidir sobre ela e sobre as negativas convênio, plano de saúde, hospital, residência, curso, vaga, emprego e salário (hospital e posto de saúde somaram 6 cliques e R$ 16,73).

### Google Ads: análise de 25/11/2026 (período 08/11 a 24/11)
Feita em 25/11 (período 08/11 a 24/11), lida direto no Google Ads pelo Chrome. A linha de base abaixo serve para a próxima comparação (02/12).
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

Resultado em 25/11 (período 08/11 a 24/11, lido pelo Chrome; prompt em `docs/prompt-analise-google-ads-2026-11-25.md`). Conversão = clique em botão (WhatsApp, Doctoralia, telefone), não consulta marcada. O Google oculta 56% dos cliques nos termos de pesquisa: os termos visíveis cobrem de 23% a 55% do gasto, conforme a campanha, e os percentuais de termos valem só para essa parte.
- **Marcação:** o orçamento caiu de R$ 110 para R$ 50 e R$ 30 em 13/11. Antes do corte (08 a 12/11): R$ 210/dia e R$ 58,35 por conversão. Depois (13 a 24/11): R$ 32,90/dia, CPC R$ 2,11, taxa de conversão 10,7% e R$ 19,74 por conversão (última semana: R$ 18,89). A taxa da linha de base (15,4%) não serve de comparação: eram 4 conversões. Parcela de impressões 11,85%, perdida por orçamento 32,2% e por classificação 55,9%.
  Fora do alvo: 76 cliques e R$ 220,19 (nomes de outros médicos e clínicas: 50 cliques, R$ 145,73; cidades distantes: 20 cliques, R$ 57,73; hospital e posto de saúde: 6 cliques, R$ 16,73). Pirituba converteu (2,33): não negativar.
- **Cisto:** R$ 54,70 por conversão (base R$ 25,76), 8 conversões em 17 dias, CTR 10,49%. Na última semana, R$ 89,76 com cerca de 2 conversões. Amostra pequena, e o "Clique Doctoralia" mudou em 21/11: esperar 02/12. Termos informacionais: 22% dos cliques (antes 25%); nenhum termo visível converteu.
- **Micose:** R$ 103,39 por conversão (3 conversões), acima do gatilho de R$ 50. Anúncio principal "Ruim" (R$ 130 com 1 conversão). Remédio e tratamento caseiro: 44% do gasto visível (antes 72%). Grupo "Laser": 10 cliques, R$ 13,77, 0 conversões, força "Bom".
- **Unha:** R$ 74,21 por conversão (4 conversões); anúncio "Ruim". "o que fazer para aliviar a dor" ainda converte; "remédio": 11 cliques e R$ 21,55 sem conversão. Uma conversão veio de busca pelo nome de uma podóloga concorrente.
- **Conversões:** "Clique telefone" saiu de "Inativo" (13 conversões; aviso "Requer atenção"); Call clicks from ads: 0. Metas padrão: Contato e Lead telefônico ("Download" e "Outro" também estão marcados, sem ação principal). "Lead WhatsApp" e "agendamento": configuração incorreta, secundárias, nenhuma campanha usa. "Requer atenção" continua (conversão otimizada com código na página, que não se aplica).
- **Anúncios:** todos aprovados. Marcação com os dois anúncios "Excelente" (ninguém os editou desde 17/11). Sem marca de medicamento, superlativo, preço nem promessa. Nome da empresa "Dr. Alexandre Okubo" reprovado na Marcação (irrelevância do nome). Sitelinks limitados: "Preenchimento e lasers" (medicamentos restritos) e "Dermatologia Clínica" (requisitos legais); os demais, "Qualificada (limitada)" por Saúde na publicidade personalizada (esperado).
- **Executado em 25/11 (Chrome; prompt `docs/prompt-aplicar-negativas-google-ads-2026-11-25.md`):** negativas aplicadas e contagens conferidas: Marcação 56 para 109 (42 de nomes de médicos e clínicas, 11 de cidades), Unha 52 para 53 ("podóloga"), conta 252 para 306. Orçamento da Marcação NÃO mudou (o Chrome foi bloqueado pelo sistema de permissões): continua em R$ 30,00/dia.
- **Achados de 25/11:** o local da Marcação é a cidade de São Paulo inteira (não há raio de 15 km), com a opção "Presença"; as cidades fora do alvo vêm de buscas com o nome da cidade, não de "interesse". Ninguém editou os anúncios da Marcação desde 17/11 (as negativas e as imagens de "18/11" foram feitas na noite de 17/11): textos sem violação das regras, só a urgência de "Marque agora mesmo"; os dois anúncios "Excelente" não pedem ação. Imagens novas aprovadas (1200x1200 com 1.073 impressões de 17 a 25/11; 1200x628 sem impressões). GA4: vínculo com a conta 138-068-5039 criado em 07/11, publicidade personalizada "Desativada". "agendamento": último sinal da tag em 15/02/2023.
- **Dados de 25/11 para consulta (08/11 a 24/11, Marcação):**
  - Palavras-chave, todas de frase, salvo [dermatologista] e [dermatologista perto de mim] (exatas). Maior custo: "consulta com dermatologista" (131 cliques, R$ 365,03), "dermatologista consulta" (100, R$ 285,09), "consulta dermatologia" (69, R$ 214,66), "medico de pele" (64, R$ 169,96), "dermatologista em sao paulo" (56, R$ 141,20). Pausadas: "dr alexandre okubo" (5 cliques, R$ 12,67), "dr consulta dermatologista", "dermatologista dr consulta".
  - Anúncios (grupo Termos Focados): 14 títulos e 3 descrições em comum; um tem "Dermatologista perto de mim", o outro "Ligue Agora". Textos aprovados pelas regras do CFM.
  - Histórico (tudo por alyuok@gmail.com): 17/11, 22:09 a 22:39, negativas (Unha +24, Micose +44, Cisto -2, Marcação +12), "dr alexandre okubo" pausada, imagens novas; 18/11, 05:09 a 06:00, grupo "Laser" da Micose, WhatsApp ativo da Micose (05:55), duas imagens antigas removidas da Marcação.
  - Sitelinks da Marcação: "Dermatologia Clínica" (limitado, Requisitos legais) e "Dermatologia Estética" (limitado, medicamentos restritos e mais 1; suspeita: "Preenchimento"). Limitados por "Saúde na publicidade personalizada", o que é esperado: "Sobre o Dr. Okubo", "Cirurgia Dermatológica", "Micose de Unha", "Unha Encravada" e os de Micose, Unha e Cisto, menos "Entenda a unha encravada", aprovado.
  - "agendamento" (e não "Lead WhatsApp") é o que acusa "tag sem sinal nos últimos 7 dias" (último sinal em 15/02/2023).
  - Não conferido: URLs finais dos sitelinks, editor do anúncio e biblioteca de recursos (A5b e A5c), e o "e mais 1" das reprovações (o prompt de sitelinks cobre as mensagens e as URLs).
- **Erro meu no prompt de 25/11:** mandei negativar Perus, Guaianases e "são miguel" e, na mesma frase, não negativar bairros da capital. São bairros da capital, longe da clínica (4 cliques e R$ 11 sem conversão no período). Ficaram aplicadas; reavaliar em 02/12, junto com a teleconsulta, e remover se o Dr. Alexandre preferir a regra.
- [ ] Ele mudar o orçamento da Marcação de R$ 30,00 para R$ 40,00 (autorizado em 25/11; Campanhas, clicar em "R$ 30,00/dia", 40,00, Salvar). Anotar a data e a hora e reavaliar 7 dias depois (custo por conversão, hoje R$ 19,74, e gasto por dia).
- [ ] Rodar `docs/prompt-sitelinks-google-ads-2026-11-25.md` no Chrome: lê as mensagens de política do nome da empresa e dos dois sitelinks e troca as descrições de "Dermatologia Estética" ("Cuidados com a pele do rosto" / "Avaliação com dermatologista") e "Dermatologia Clínica" ("Pele, unhas e cabelos" / "Consulta presencial ou online"), textos aprovados por ele em 25/11. Se o sitelink voltar limitado, a causa está nas mensagens completas.
- [ ] Nome da empresa "Dr. Alexandre Okubo" reprovado: depende da mensagem completa (o "e mais 1" ainda não se leu). Texto alternativo ("Okubo Dermatologia", 18 caracteres) só com o OK dele.
- [ ] Nomes que converteram e não foram negativados: "clínica marina hayashida dermatologia" e "rafael rezende rocha de oliveira" (1 clique cada). Deixar como estão, salvo se ele disser que são colegas da Prime.
- [ ] Ainda sem resposta dele: "pode tirar a fixação" (anúncios "Ruim" de Micose e Unha) e desmarcar "Download" e "Outro" como metas padrão.
- [ ] Ideia, precisa do OK dele: perguntar à recepção quantas consultas vieram do Google Ads, já que a conversão é clique em botão.
- [ ] Reavaliar em 02/12: Cisto, Micose, grupo "Laser" e o teste de 18/11 ("melhores dermatologistas sp": 1 clique e R$ 1,53; "melhores dermatologistas", "dermatologista particular" e "dermatologista especialista em cabelo": 0 cliques).

### Revisão de linguagem por agentes (10/11)
Itens 1 a 19 publicados em 10/11 (CFM, padrões de IA, H1 descritivos, seções "Nem todo" e "Quando procurar", botões, psoríase nas unhas reescrita).
- [ ] Ele validar o conteúdo médico novo das seções "Nem todo" (unha encravada, acne, alimentação, canetas, queda de cabelo) e a frase da Clínica Portugal na página de micose ("consulta e tratamento com remédio").
- [ ] Apagar no GitHub o branch `claude/zealous-cannon-zhcrnu-revisao`, criado por engano em 10/11 (a sessão não tem permissão para apagar).

### Manutenção
- O "Leia também" da dermatologia clínica foi reduzido a 8 links em 18/11 (artigos que não estão nos cartões). Rever com dados do Search Console no fim de dezembro.
  A escolha deve seguir os dados do Search Console, que ele vai enviar.
- [ ] Atualizar `LAST_REVIEWED` em `site.ts` sempre que ele revisar o conteúdo institucional.
