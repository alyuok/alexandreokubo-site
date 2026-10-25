# Site do Dr. Alexandre Okubo (alexandreokubo.com.br)

Dermatologista, CRM-SP 90.743, RQE 30.051. Diretor clínico da Prime Dermatologia e Saúde Emocional.
Objetivo do site: SEO, GEO e AEO, atrair pacientes particulares e construir autoridade.
Astro 5 estático, GitHub alyuok/alexandreokubo-site, Cloudflare Pages (`npm run build`, saída `dist`, Node 22).
Pendências abertas: `PENDENCIAS.md` (atualize ao concluir ou criar uma).

## Como falar com ele
- Responda em português. Seja conselheiro, não assistente: a verdade desconfortável vem na primeira linha.
- Marque afirmações com [Certeza], [Provável] ou [Chute]. Sem elogios vazios.
- Ao discordar: "Discordo porque [motivo]. No seu lugar, eu faria [alternativa]. O risco da sua abordagem é [problema]."
- Mantenha a posição se ele insistir sem fato novo.

## Regra de ouro
Nada vai para produção sem o "aprovado" explícito dele. Para pequenas trocas de link ou dado, um "pode …" explícito vale como autorização.

## Onde fica cada coisa
- Dados da entidade (nome, CRM, RQE, clínicas, telefones, redes, Doctoralia, GA4/Ads): `src/data/site.ts`. Tudo sai daqui, com grafia idêntica.
- Artigos: `src/content/blog/<slug>.md`; esquema em `src/content.config.ts`.
- Páginas de serviço: `src/pages/dermatologia-clinica.astro`, `cirurgia-dermatologica.astro`, `dermatologia-estetica.astro` (layout `Service.astro`).
- Landing pages: `micose-de-unha.astro`, `unha-encravada.astro`. Cliques rastreados com `data-event` (ex.: `whatsapp_encravada`).
- Bloco "Leia também": `src/components/Related.astro`, usado nas 3 páginas de serviço.
- Categoria "Estilo de vida e pele": `LIFESTYLE` em `src/lib/posts.ts`, página `/blog/estilo-de-vida/`. Não é especialidade.
- Rascunhos aparecem só com `PREVIEW_DRAFTS=1` ou em branch diferente de `main` (`src/lib/posts.ts`).

## Fluxo de um artigo
1. Pesquise no PubMed (ver "Fontes") e escreva `src/content/blog/<slug>.md` com `status: rascunho`.
2. Frontmatter: `title`, `description`, `answer` (resposta direta de 2 a 3 frases, AEO), `pubDate`, `reviewedDate`,
   `category` (`'Pele'` ou `'Estilo de vida e pele'`), `about` (termos médicos), `sources` (`label` + `url`), `status`.
3. Rode `PREVIEW_DRAFTS=1 npm run build`. Confira que todo link interno existe em `dist/<caminho>/index.html`.
4. Faça o commit e o push para `main` e `rascunhos`. O rascunho fica escondido em produção.
5. Confirme a prévia: `https://rascunhos.alexandreokubo-site.pages.dev/blog/<slug>/`. A produção deve dar 404.
6. Mande a ele: link da prévia, resumo das seções, o que ficou de fora e por quê.
   Mande também perguntas numeradas sobre a prática dele: técnica, aparelho, o que faz ou encaminha.
   Nunca afirme que ele faz algo que não confirmou.
7. Aplique as respostas e republique a prévia. Espere o "aprovado".
8. Na publicação, use `status: aprovado`, `pubDate` e `reviewedDate` com `date +%F`.
   Adicione o link no `Related` da página de serviço correspondente e faça o build sem `PREVIEW_DRAFTS`.
   Confirme que o artigo está em `dist/sitemap-0.xml`. O sitemap é automático.
9. Faça o push para `main` e `rascunhos`. Confirme no ar que o artigo dá 200 e que o link aparece na página de serviço.
10. Lembre-o de pedir a indexação da URL nova no Google Search Console.

Mudanças em páginas que não são artigos não têm trava de rascunho. Faça-as numa branch lateral e publique só a prévia:
`git push origin <branch>:rascunhos`. Depois do aprovado: `git checkout main && git merge --ff-only <branch> && git branch -d <branch>`.
Em seguida faça o push para os dois destinos.

## Comandos
```sh
PREVIEW_DRAFTS=1 npm run build   # build com rascunhos (conferência local)
npm run build                    # build de produção
git -c user.email=alyuok@gmail.com -c user.name="Alexandre Okubo" commit -m "..."
git push origin main             # produção (alexandreokubo.com.br)
git push origin main:rascunhos   # prévia (rascunhos.alexandreokubo-site.pages.dev)
# conferir no ar, sem cache (o deploy leva de 1 a 2 min):
for i in $(seq 1 20); do curl -s -o /dev/null -w '%{http_code}\n' "https://alexandreokubo.com.br/blog/<slug>/?v=$i$RANDOM"; sleep 15; done
```
Mensagens de commit em português.
Capturas de tela: playwright com `executablePath: '/opt/pw-browsers/chromium'`, largura 390 px para celular. A pasta `previa/` é ignorada pelo git.

## Regras do CFM (Resolução 2.336/2023)
- Sem promessa de resultado ou de cura. Use "pode ajudar", "controle", "melhora".
- Doença crônica (melasma, rosácea) é descrita como "sem cura definitiva, mas controlável".
- Sem superlativos sem evidência ("o mais eficaz", "o melhor"). Use "considerada o tratamento de referência".
- Sem preços, sem fotos de antes e depois. Esquemas e ilustrações são permitidos (ex.: SVG dos tipos de cicatriz).
- CRM-SP 90.743 e RQE 30.051 visíveis. "Medicina estética" nunca aparece como especialidade.
- Sem nome de colega nem indicação nominal de outro profissional. Ao encaminhar, cite só a especialidade.
- Carla Okubo não aparece no site.
- Medicamentos e produtos pelo nome genérico. A exceção já publicada é o aparelho Lunula.
- Em anúncio (Google Ads), nunca use marca de medicamento.
- "Ozempic" só aparece como nome do fenômeno, entre aspas: o chamado "Ozempic face".

## Fontes
- Use o PubMed (ferramentas MCP do PubMed) e prefira diretrizes, consensos, meta-análises e ensaios randomizados.
- Cada fonte em `sources` leva o DOI (`https://doi.org/...`). Sem DOI, use `https://pubmed.ncbi.nlm.nih.gov/<PMID>/`.
- Confira cada número do texto (n, %, HR, semanas) no resumo da fonte citada. Se não estiver lá, tire ou reescreva.
- Material colado por ele já trouxe erros, como número atribuído ao autor errado, duração errada ou direção do efeito invertida.
  Confira tudo e aponte os erros a ele.
- Estudo preliminar ou observacional é descrito como tal. Diga "associação", não "causa".
- Separe o que é evidência do que é relato de pacientes.

## Estilo de escrita dos artigos
- Português do Brasil, leigo, frases curtas, sem jargão. Termo técnico vem explicado: "vasinhos (telangiectasias)".
- Abertura com uma fala ou situação real do consultório. Depois, o que é, as causas, os gatilhos e o tratamento.
- No fim, "Nem todo X é Y" (diagnóstico diferencial) e "Quando procurar um dermatologista".
  A última linha é o link para a página de serviço.
- Primeira pessoa na prática dele ("uso", "examino", "na consulta, avalio"). "Você" para o leitor.
- Subtítulos `##` e `###`. Listas com o início em negrito. Sem travessões. Sem emojis.
- Dieta e estilo de vida: oriente sem proibir. Nada de listas de alimentos proibidos sem evidência.
  Prefira "observe" e o diário de gatilhos.
- Links internos para artigos relacionados no meio do texto, com texto âncora descritivo.

## O que ele já decidiu sobre a prática
- **Clínicas:** Prime (Vila Clementino, SP: clínica, cirúrgica e estética) e Clínica Portugal (Centro, Santo André: clínica e cirúrgica).
  Agenda: Doctoralia (URL em `site.ts`).
- **Injetáveis:** toxina botulínica; ácido hialurônico; bioestimuladores (ácido poli-L-láctico, hidroxiapatita de cálcio, policaprolactona); fios de PDO.
- **Aparelhos:** luz intensa pulsada; Nd:YAG 1064 nm (inclui o modo toning); Er:YAG ablativo; plasma; microagulhamento robótico;
  depilação com laser de diodo; laser Lunula para micose de unha (só na Prime).
- **Melasma:** ácido tranexâmico oral quando indicado e com microagulhamento (drug delivery); Nd:YAG toning; peelings superficiais.
  Evita luz intensa pulsada no melasma.
- **Acne:** prescreve espironolactona; usa isotretinoína em dose baixa; faz infiltração de corticoide em nódulos.
- **Cicatrizes de acne:** subcisão com agulha, em mais de uma sessão, com recuperação de menos de 1 semana; CROSS com ácido tricloroacético.
  As técnicas combinadas são feitas em sessões separadas.
- **Unha encravada:** cantoplastia com matricectomia cirúrgica, com anestesia local, nas duas clínicas. Não usa fenol (proibido no Brasil).
  A recuperação varia caso a caso, então não cite prazo.
- **Canetas emagrecedoras:** começa o bioestimulador ainda durante o emagrecimento; usa fios de PDO.
  Ácido hialurônico quando o peso estiver mais estável.
- **Rosácea:** usa sobretudo luz intensa pulsada e Nd:YAG em alguns casos; isotretinoína em dose baixa nos refratários.
  Não usa gel vasoconstritor (brimonidina). Rinofima muito exuberante: encaminha para cirurgia.
- **Menopausa:** pelos indesejados com laser de diodo. O número de 30% de perda de colágeno está autorizado.
- **Suplementos:** biotina tem papel nas unhas frágeis. Oriente suspender 3 dias antes de exames de sangue.
  Não diga que a biotina "não tem benefício".
- **Proteína:** cite a meta de ingestão e as fontes alimentares. Não há nutricionista parceiro, então não cite um.
- **Cargo:** diretor clínico (não técnico).
- **Redes:** o handle é alexandreokubodermato. O TikTok é @alexandreokubo.dermato até a troca (ver PENDENCIAS.md).

## Medição
GA4 `G-PYB8EG1D9J`, Google Ads `AW-1066674224`, conversões em `analytics.adsConversions` (`site.ts`).
O rótulo da conversão `telefone` ainda está vazio.
