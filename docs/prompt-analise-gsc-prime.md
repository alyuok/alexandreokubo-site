# Prompt: análise do Google Search Console da Prime

Cole o bloco abaixo numa sessão nova do Claude Code, com o repositório alyuok/alexandreokubo-site.
Antes, verifique `sc-domain:primedermatologia.com` no Search Console (registro TXT no DNS).
O clinicaprime.com.br já foi analisado em 07/11 (ver `PENDENCIAS.md`) e fica fora desta análise.

---

Você vai analisar o Google Search Console da Prime Dermatologia e Saúde Emocional. Leia antes `CLAUDE.md`, `PENDENCIAS.md`
(seção "Site da Prime") e `docs/medicao-2026-10-30.md`. Responda em português e siga as regras de conversa do `CLAUDE.md`:
conselheiro, a verdade desconfortável na primeira linha, [Certeza]/[Provável]/[Chute] em cada afirmação.

## Contexto
- A clínica fica na Rua Borges Lagoa, 1065, conj. 144, Vila Clementino, São Paulo. Diretor técnico: Dr. Alexandre Okubo, CRM-SP 90.743, RQE 30.051.
  Telefone principal decidido: (11) 94174-6037.
- Domínios, todos dele:
  - primedermatologia.com: site atual (WordPress, 8 páginas), registrado em 2018. Proposta: continua como o domínio principal do site novo.
  - clinicaprime.com.br: site antigo da Prime, desativado. Analisado em 07/11: spam score 95, só diretórios. Vai com 301 de domínio inteiro para a home.
  - clinicaprime.com: estacionado na GoDaddy, registrado em 2006.
  - primedermatologia.com.br: sem site.
- Os três domínios secundários terão 301 de domínio inteiro para primedermatologia.com. O mapa página a página é só das 8 URLs atuais da primedermatologia.com para as novas.
- Já decidido, não reabrir: a Prime não terá página de Santo André (a Clínica Portugal é outro estabelecimento);
  não haverá disavow (os backlinks de spam de setembro de 2026 não foram contratados); o site do Dr. Guilherme fica de fora.
- Divisão com alexandreokubo.com.br: doenças, as páginas de destino (micose de unha, unha encravada, cisto sebáceo) e os temas
  já planejados (lipoma, xantelasma, ceratose seborreica, toxina botulínica, fios de PDO, olheiras, bioestimulador) ficam no site dele.
  A Prime fica com aparelhos, preenchimento, skinbooster, tricoscopia, Estética, equipe e unidade.

## Acesso aos dados
1. Tente primeiro o OpenSEO: `list_projects`, `list_search_console_sites`. Se houver projeto da Prime ligado ao Search Console,
   use `get_search_console_performance` e `inspect_urls`. Antes de qualquer chamada que gaste créditos, diga o custo e peça autorização.
2. Se não houver acesso, peça a ele estas exportações (botão "Exportar" > CSV ou Planilhas Google) e espere os arquivos:
   - primedermatologia.com > Desempenho > Resultados da pesquisa, últimos 16 meses: abas Consultas, Páginas, Países, Dispositivos e Datas.
     Repita com o filtro "Tipo de pesquisa: Imagem".
   - primedermatologia.com > Links: "Principais páginas vinculadas", "Principais sites vinculados" e "Links externos mais recentes".
   - primedermatologia.com > Indexação > Páginas (com o motivo de cada página não indexada) e Sitemaps.
   - Se ele tiver a propriedade alexandreokubo.com.br: Desempenho > Consultas e Páginas, últimos 3 meses.
   Guarde os arquivos em `previa/gsc/` (pasta ignorada pelo git). Não faça commit dos dados brutos.

## Perguntas a responder
1. **Mapa de 301 das URLs atuais:** para cada uma das 8 URLs da primedermatologia.com, os cliques, as impressões e os links externos,
   e a URL nova proposta. Quando não houver equivalente, aponte para a página mais próxima, não para a home.
2. **O que a primedermatologia.com recebe de verdade?** Cliques, impressões, CTR e posição média dos últimos 16 meses e dos últimos 3.
   Separe as buscas de marca ("prime", "okubo", "kenji") das que não são de marca. Compare com a estimativa da auditoria de 02/11
   (34 palavras-chave, cerca de 34 visitas por mês). Liste as 20 consultas que não são de marca com mais impressões.
3. **Busca local:** consultas com Vila Clementino, Vila Mariana, Moema, Saúde e "perto de mim". Em qual página cai cada uma?
4. **Canibalização:** se houver dados do alexandreokubo.com.br, liste as consultas em que os dois domínios aparecem e diga
   qual site deve ficar com cada uma, pela divisão acima.
5. **Oportunidades para o site novo:** consultas com impressões e sem cliques que caibam nos temas da Prime (aparelhos,
   preenchimento, skinbooster, tricoscopia, limpeza de pele, drenagem facial, lash lifting, peeling, depilação a laser).
   Ordene por impressões. Não sugira temas que são do site dele.
6. **Indexação:** quais páginas estão fora do índice e por quê? Confira /links/, /blog/ e o sitemap.
7. **Backlinks de spam:** confirme o salto de setembro de 2026 (+187 domínios `pages.dev`). Só registre: não proponha disavow.
8. **Linha de base:** guarde os números que vão servir de comparação depois do lançamento do site novo.

## Regras
- Não invente número. A posição do Search Console é uma média e as consultas raras ficam ocultas (anonimizadas). Diga isso quando pesar.
- Volume baixo (menos de 100 impressões) não sustenta conclusão: marque [Chute].
- Não mude nada no Search Console: sem pedido de remoção, sem disavow, sem a ferramenta "Mudança de endereço".
  A mudança de endereço só será usada no dia da migração, com o "aprovado" dele.
- Não publique nada no site.

## Entrega
- Relatório em `docs/gsc-prime-AAAA-MM-DD.md`: primeiro o veredito em 5 linhas, depois uma seção por pergunta, com tabelas.
- Mapa de 301 em `docs/redirects-prime.csv` (colunas: origem, destino, motivo, links_externos).
- No fim, a lista de ações, separando o que ele precisa aprovar do que o Claude pode fazer.
- Atualize `PENDENCIAS.md`, faça o commit em português e o push para a branch da sessão (não para `main`).
