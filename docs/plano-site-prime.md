# Plano do site novo da Prime (aprovado em 07/11/2026)

Projeto de médio e longo prazo. O site novo é outro repositório; este arquivo guarda as decisões para as próximas sessões.
Pendências e perguntas em aberto: `PENDENCIAS.md`, seção "Site da Prime".

## Decisões
- **Domínio:** primedermatologia.com. Os domínios clinicaprime.com.br, clinicaprime.com e primedermatologia.com.br fazem 301 de domínio inteiro para a home.
- **Entidade:** "Prime Dermatologia e Saúde Emocional" (nome curto "Prime Dermatologia"), Rua Borges Lagoa, 1065, conj. 144, Vila Clementino,
  São Paulo, SP, 04038-032, telefone (11) 94174-6037. Categoria do Google: "Clínica de dermatologia" (não trocar para "Dermatologista").
- **Diretor técnico e autor:** Dr. Alexandre Okubo assina e revisa todas as páginas médicas.
- **Dr. Guilherme Kenji Ito:** aparece na equipe com CRM-SP e RQE. Não assina páginas. Sem link nem `sameAs` para o site dele.
- **Carla Okubo:** só em "Quem somos", junto da equipe não médica, como "Administração". Sem linguagem clínica.
- **Estética:** esteticista e fisioterapeuta dermatofuncional, com nome e registro (CREFITO). Sem marcas, sem antes e depois, sem promessa.
- **Sem página de Santo André:** a Clínica Portugal é outro estabelecimento.

## Divisão com alexandreokubo.com.br
| alexandreokubo.com.br | Prime |
|---|---|
| Doenças (todos os artigos atuais e futuros) | Aparelhos: luz intensa pulsada, Nd:YAG, Er:YAG, microagulhamento robótico, plasma |
| Páginas de destino: micose de unha, unha encravada, cisto sebáceo | Injetáveis: preenchimento com ácido hialurônico, skinbooster |
| Pequenas cirurgias: lipoma, xantelasma, ceratose seborreica | Exame: tricoscopia |
| Injetáveis planejados: toxina botulínica, fios de PDO, olheiras, bioestimulador | Estética: limpeza de pele, drenagem facial, lash lifting, peeling superficial, depilação a laser |
| Biografia completa dele | Equipe, unidade, Saúde Emocional, institucional |

Regra: um tema, um dono. O site pessoal não ganha artigo próprio sobre aparelho nem sobre os temas da coluna da Prime, e a Prime não escreve sobre doença.
As páginas de cada lado linkam as do outro, com texto âncora descritivo.

## Arquitetura e URLs
| URL | Página | Fase |
|---|---|---|
| `/` | Home: clínica, equipe, tratamentos, unidade, agendamento | Lançamento |
| `/quem-somos/` | História (desde 2006), equipe médica, Estética, administração | Lançamento |
| `/equipe/dr-alexandre-okubo/` | Resumo e link para alexandreokubo.com.br/sobre/ | Lançamento |
| `/equipe/dr-guilherme-kenji-ito/` | Nome, CRM-SP, RQE, formação confirmada | Lançamento |
| `/unidade-vila-clementino/` | Endereço, mapa, horário, metrô, estacionamento, acessibilidade | Lançamento |
| `/saude-emocional/` | Como a clínica acolhe o paciente; estresse e pele. Assinada por ele | Lançamento |
| `/tratamentos/` | Hub de aparelhos, injetáveis e exames | Lançamento |
| `/estetica/` | Hub da Estética, com a equipe e os serviços | Lançamento |
| `/tratamentos/luz-intensa-pulsada/` | Aparelho | Lançamento |
| `/tratamentos/microagulhamento-robotico/` | Aparelho | Lançamento |
| `/estetica/depilacao-a-laser/` | Estética | Lançamento |
| `/privacidade/` | Política de privacidade e LGPD | Lançamento |
| `/tratamentos/laser-nd-yag/` | Aparelho | Mês 1 |
| `/tratamentos/preenchimento-acido-hialuronico/` | Injetável | Mês 1 |
| `/tratamentos/skinbooster/` | Injetável | Mês 2 |
| `/tratamentos/tricoscopia/` | Exame | Mês 2 |
| `/tratamentos/laser-erbio/` | Aparelho | Mês 3 |
| `/tratamentos/plasma/` | Aparelho | Mês 3 |
| `/estetica/limpeza-de-pele/` | Estética | Mês 3 |
| `/estetica/peeling-superficial/`, `/estetica/drenagem-facial/`, `/estetica/lash-lifting/` | Estética | Mês 4 em diante, se a busca justificar |

A ordem depois do lançamento é provisória. Será refeita com os dados do Search Console e com o volume de busca medido.

## Mapa de 301 das URLs atuais (proposta, a conferir com o Search Console)
| Atual | Nova |
|---|---|
| `/` | `/` |
| `/sobre/` | `/quem-somos/` |
| `/dermatologia-clinica/` | `/` |
| `/dermatologia-estetica/` | `/tratamentos/` |
| `/estetica/` | `/estetica/` |
| `/contato/` | `/unidade-vila-clementino/` |
| `/links/` | `/` |
| `/blog/` | `/` |

## Modelo de página (tratamento ou Estética)
1. H1 com o tema e o bairro: "Luz intensa pulsada na Vila Clementino".
2. Resposta direta de 40 a 60 palavras.
3. Seções `##` em forma de pergunta: o que é, para quem é indicado, como é feito, número de sessões e intervalo, recuperação e cuidados, riscos e contraindicações.
4. Tabela de fatos (sessões, duração, anestesia, retorno às atividades), só com o que ele confirmar.
5. Perguntas frequentes (de 4 a 6) e referências (PubMed, com DOI).
6. Bloco de revisão: "Revisado por Dr. Alexandre Okubo, diretor técnico, CRM-SP 90.743, RQE 30.051, em ‹data›". Na Estética, também a profissional que faz o serviço, com o registro.
7. Links para os artigos de doença do alexandreokubo.com.br e chamada para agendar.

As regras do CFM, das fontes e da revisão anti-clichê do `CLAUDE.md` valem igual. Aparelho pelo nome genérico, sem marca.

## Schema
- `MedicalClinic` com `@id` `https://primedermatologia.com/#clinica` e `employee` para os dois médicos.
- Dr. Alexandre: `@id` `https://alexandreokubo.com.br/#person`, o mesmo do site dele (`src/data/schema.ts`).
- Dr. Guilherme: `Physician` com `@id` `https://primedermatologia.com/#guilherme-kenji-ito`, sem `sameAs`.
- Páginas de tratamento: `MedicalWebPage` com `about` (`MedicalProcedure`), `reviewedBy` e `lastReviewed`.
- Estética: `department` da clínica. Sem `Review` nem `AggregateRating`.

## Base técnica
Astro 5 estático no Cloudflare Pages, num repositório novo, reaproveitando os componentes deste site.
Propriedade própria no GA4 e Consent Mode, como aqui. O mesmo fluxo de rascunho, prévia e "aprovado".

## Perguntas para as páginas do lançamento
1. **Luz intensa pulsada:** para que você usa (manchas de sol, vasinhos, rosácea, outras)? Quantas sessões e qual intervalo? Em que fototipos evita?
2. **Microagulhamento robótico:** em que indicações usa (textura, cicatrizes de acne, poros, melasma com ácido tranexâmico)? Usa anestésico tópico? Quanto tempo de vermelhidão depois?
3. **Depilação a laser:** quem faz, a esteticista ou a fisioterapeuta? Quais áreas? Atende pele morena e negra com o laser de diodo? Quantas sessões, em média?
4. **Nd:YAG (mês 1):** a página de estética do seu site diz "vasinhos". Como o aparelho não tem pulso longo, confirme se ele trata vasinhos ou só vermelhidão, manchas e o modo toning.
5. **Tricoscopia (mês 2):** quem faz o exame e com qual equipamento (dermatoscópio digital, câmera)?
