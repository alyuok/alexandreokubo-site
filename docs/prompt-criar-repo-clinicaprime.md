# Prompt: criar o repositório do site novo da Prime (alyuok/clinicaprime)

## Antes de colar o prompt (feito por você, no navegador)
1. Em github.com/new: dono `alyuok`, nome `clinicaprime`, **Private**, sem README, sem .gitignore e sem licença.
2. Em https://claude.ai/connect-github: confirme que o app do Claude tem acesso ao repositório `clinicaprime`.
3. Abra uma sessão nova do Claude Code só com `alyuok/clinicaprime` (a interface web não deixa escolher dois repositórios).
   Na sessão, o Claude anexa o `alexandreokubo-site` para leitura com a ferramenta `add_repo`. A primeira mensagem está em "Mensagem de abertura", abaixo.

## Mensagem de abertura (cole na sessão nova)

> Antes de tudo, use a ferramenta add_repo para anexar alyuok/alexandreokubo-site com acesso de leitura e clone-o fora deste repositório, só para consulta.
> Não faça commit nem push nele. Depois, leia o arquivo docs/prompt-criar-repo-clinicaprime.md da branch claude/kind-galileo-q5dtdq desse repositório
> e execute a seção "Prompt", ignorando a parte "Antes de colar o prompt".
> Este repositório (clinicaprime) está vazio: crie a branch main no primeiro commit. Você tem minha autorização para fazer push em main e em rascunhos
> deste repositório, além da branch da sessão. Nenhum domínio está ligado a ele.
> Se o add_repo falhar ou o clone for bloqueado, pare e me diga o erro exato. Não monte o site de memória nem com dados inventados.

## Prompt (copie daqui até o fim)

Você vai montar a base do site novo da Prime Dermatologia e Saúde Emocional no repositório `alyuok/clinicaprime`, que está vazio.
O repositório `alyuok/alexandreokubo-site` é só de consulta: não faça commit nem push nele.

### 1. Leia antes de qualquer coisa (em alexandreokubo-site)
Se `docs/plano-site-prime.md` não estiver na `main`, leia da branch `claude/kind-galileo-q5dtdq` (`git fetch origin claude/kind-galileo-q5dtdq` e `git show origin/claude/kind-galileo-q5dtdq:<arquivo>`).
- `CLAUDE.md`: como falar com ele, as regras do CFM, as fontes, o estilo e a revisão anti-clichê. Tudo vale para a Prime.
- `docs/plano-site-prime.md`: decisões, divisão de temas, URLs, modelo de página, schema e perguntas pendentes. É a especificação.
- `PENDENCIAS.md`, seção "Site da Prime".
- A base técnica para reaproveitar: `package.json`, `astro.config.mjs`, `.nvmrc`, `.gitignore`, `public/_headers`, `public/robots.txt`,
  `scripts/check-dist.mjs`, `src/layouts/`, `src/components/`, `src/data/site.ts`, `src/data/schema.ts` e `src/lib/posts.ts`.

### 2. Monte a base técnica em clinicaprime
- Astro 5 estático, Node 22 (`.nvmrc`), saída `dist`, `npm run build` e `npm run check`, como no site dele.
- Copie e adapte os layouts, os componentes, o `_headers` (com o `noindex` dos endereços `.pages.dev`), o script de checagem e o Consent Mode.
  Não copie artigos nem textos de página do site dele.
- `src/data/site.ts` da Prime, com a grafia exata do plano:
  Prime Dermatologia e Saúde Emocional (nome curto Prime Dermatologia); Rua Borges Lagoa, 1065, conj. 144, Vila Clementino, São Paulo, SP, 04038-032;
  telefone e WhatsApp (11) 94174-6037; URL https://primedermatologia.com; perfil do Google https://www.google.com/maps?cid=5301636228855317904.
  Diretor técnico Dr. Alexandre Okubo, CRM-SP 90.743, RQE 30.051 (Dermatologia). Dr. Guilherme Kenji Ito, CRM-SP 156.804, RQE 66.411,
  com a marca "conferir no portal do CRM antes de publicar". GA4 e Google Ads vazios (a propriedade da Prime ainda não existe).
  Horário, Instagram da Prime e perfil de clínica no Doctoralia: deixe como PENDENTE e pergunte a ele. Não invente.
- `src/data/schema.ts`: `MedicalClinic` com `@id` `https://primedermatologia.com/#clinica`; o Dr. Alexandre com o mesmo `@id` do site dele,
  `https://alexandreokubo.com.br/#person`; o Dr. Guilherme como `Physician` com `@id` `https://primedermatologia.com/#guilherme-kenji-ito`, sem `sameAs`.
- `robots.txt` e sitemap automáticos, como no site dele.

### 3. Documentos do repositório
- `CLAUDE.md` da Prime: adapte o do site dele. Mantenha "Como falar com ele", a regra de ouro, as regras do CFM, as fontes, o estilo e a revisão anti-clichê.
  Troque o que é do site pessoal pelo que é da clínica e acrescente:
  - **Um tema, um dono.** Copie a tabela de divisão do plano. A Prime não escreve sobre doença; linka os artigos do alexandreokubo.com.br.
  - **Autoria:** todas as páginas médicas são assinadas e revisadas pelo Dr. Alexandre. O Dr. Guilherme aparece só na equipe e não assina.
    Nenhum link nem `sameAs` para o site ou o Instagram dele.
  - **Carla Okubo:** só em "Quem somos", como "Administração", junto da equipe não médica. Sem linguagem clínica e sem "graduanda em psicologia".
  - **Estética:** feita por esteticista e por fisioterapeuta dermatofuncional, com nome e registro (CREFITO). Sem marcas, sem antes e depois, sem promessa.
  - **Sem página de Santo André:** a Clínica Portugal é outro estabelecimento.
  - **Domínio:** o primedermatologia.com continua no WordPress atual até o "aprovado" da migração. Não mexa em DNS nem em domínio.
- `PENDENCIAS.md` da Prime: leve para cá os itens da seção "Site da Prime" do site dele que tratam do site novo
  (as perguntas das páginas, a Estética, o Dr. Guilherme, o Search Console, o mapa de 301). Não apague nada no outro repositório; só liste a ele o que foi copiado.
- `README.md` curto: o que é o repositório e os comandos.

### 4. Páginas
- Crie as rotas do lançamento da tabela do plano, só com dados já confirmados.
- As páginas de tratamento (luz intensa pulsada, microagulhamento robótico, depilação a laser) ficam como rascunho escondido em produção,
  com a estrutura do modelo de página e os trechos que dependem dele marcados como PENDENTE. Não escreva o conteúdo médico antes das respostas
  às perguntas do fim do plano. Nunca afirme que ele faz algo que não confirmou.
- O mapa de 301 das URLs atuais fica preparado em `public/_redirects` comentado, para ser ativado só na migração.

### 5. Branches e conferência
- Rode `npm run build` e `npm run check`. Corrija os erros antes do commit.
- Commits em português, com `git -c user.email=alyuok@gmail.com -c user.name="Alexandre Okubo" commit -m "..."`.
- Faça o push para `main` e para `rascunhos` (`git push origin main:rascunhos`). Não crie GitHub Actions nem segredos: quem faz o build é o Cloudflare.

### 6. Entregue a ele
- O que foi criado, em poucas linhas.
- O passo a passo do Cloudflare Pages: criar o projeto `clinicaprime` ligado ao repositório, comando `npm run build`, saída `dist`,
  variável `NODE_VERSION=22`, branch de produção `main`, prévia da branch `rascunhos`. Sem domínio personalizado por enquanto.
  A prévia fica em `https://rascunhos.clinicaprime.pages.dev` e o endereço principal em `https://clinicaprime.pages.dev`, os dois com `noindex`.
- A lista do que ficou PENDENTE e as perguntas numeradas, incluindo as 5 perguntas do plano.
- Responda em português, como conselheiro, com [Certeza]/[Provável]/[Chute].
