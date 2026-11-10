# Instruções para agentes de IA (alexandreokubo.com.br)

Este arquivo existe para agentes que não leem o `CLAUDE.md` sozinhos (Codex, Cursor, Copilot, Gemini e outros).
**A fonte única das regras é o `CLAUDE.md`, na raiz deste repositório.** Leia-o por inteiro antes de qualquer tarefa e siga-o como instrução de sistema.
Não copie regras para cá: se algo mudar, mude no `CLAUDE.md`.

## Antes de começar
1. Faça `git pull` da `main`.
2. Leia `CLAUDE.md`, `PENDENCIAS.md` e `docs/glossario-cliches-ia.md`.
3. Resuma ao Dr. Alexandre o que está pendente e o que venceu, com datas, antes de alterar qualquer arquivo.

## Regras que valem para qualquer agente
- **Regra de ouro:** nada vai para a `main` sem o "aprovado" explícito dele. A `main` publica o site (alexandreokubo.com.br) pelo Cloudflare Pages.
  Fora desta sessão do Claude, trabalhe numa branch própria e entregue por pull request. O merge dele vale como "aprovado".
- **Uma ferramenta por vez:** não edite este repositório enquanto outro agente (Claude, Codex etc.) estiver trabalhando nele.
- **Fontes:** só cite o que você conseguir conferir, com DOI ou link do PubMed. Se não tiver acesso ao PubMed, diga isso em vez de citar de memória.
- **Prática dele:** não afirme nada que não esteja em "O que ele já decidiu sobre a prática", no `CLAUDE.md`. O que faltar vira pergunta numerada.
- **Revisão de linguagem:** se você não puder rodar um agente separado, faça a revisão com `docs/glossario-cliches-ia.md` e liste o que corrigiu.

## Ao terminar
1. Faça `git pull` de novo e atualize o `PENDENCIAS.md`: apague o concluído, acrescente o novo (com data e responsável) e ponha a data de hoje no cabeçalho.
   Se houver conflito, junte as duas versões. Nunca apague um item de outro agente sem estar concluído.
2. Decisão nova dele sobre a prática ou sobre as regras vai para o `CLAUDE.md`, na seção certa.
3. Commit em português e pull request. Liste também o que foi feito fora do repositório (Google Ads, Search Console, perfis), porque isso não fica no git.
