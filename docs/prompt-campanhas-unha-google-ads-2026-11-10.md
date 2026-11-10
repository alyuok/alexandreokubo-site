# Prompt: verificar e ativar as campanhas de micose de unha e unha encravada (10/11/2026)

Para colar no Claude que opera a conta do Google Ads "Prime Dermato" (375-279-5144).
Textos: `docs/anuncios-google-ads.md` (rascunho de 07/11, com as decisões dele). Colar este prompt vale como "aprovado" desses textos.

Textos e valores da seção VALORES aprovados por ele em 10/11.
URLs conferidas no ar em 10/11 (todas 200): `/micose-de-unha/`, `/unha-encravada/`, `/sobre/`, `/onde-atendo/`, `/blog/micose-de-unha-onicomicose/`, `/blog/unha-encravada/`.

```text
Você vai verificar e, se tudo estiver certo, criar e ativar duas campanhas de Pesquisa na conta do Google Ads "Prime Dermato" (ID 375-279-5144) do Dr. Alexandre Okubo, dermatologista (CRM-SP 90.743, RQE 30.051). Ele autorizou o que está abaixo. Responda em português.

VALORES (aprovados por ele)
- Orçamento diário: Micose de unha R$ 20,00. Unha encravada R$ 20,00.
- Lance: Maximizar cliques, com limite de CPC máximo de R$ 6,00, nas duas.
- Região da Micose de unha: raio de 15 km em torno da R. Borges Lagoa, 1065, Vila Clementino, São Paulo, SP.
- Região da Unha encravada: raio de 15 km em torno da R. Borges Lagoa, 1065, Vila Clementino, São Paulo, SP, e raio de 10 km em torno da Av. Portugal, 1676, Centro, Santo André, SP.

REGRAS
1. Faça só o que está listado. Não aplique recomendações do Google, não aceite "recursos automáticos" (títulos gerados, imagens automáticas, sitelinks dinâmicos), não mexa em outras campanhas nem em orçamento além dos VALORES.
2. Siga a ordem dos blocos. Se o bloco 0 achar um problema que impede a medição (conversão ausente ou tag sem domínio), pare antes do bloco 5 e relate.
3. Use só os textos deste prompt, letra por letra. Nada de superlativos ("melhor", "mais", "referência"), preço, promessa de resultado ou de cura, "sem dor", "definitivo", "especialista em" ou marca de medicamento.
4. Se algo não puder ser feito ou aparecer uma reprovação de política, pare naquele item, copie o aviso exato e siga para o próximo.
5. Marque cada item do relatório como [Feito], [Não feito: motivo] ou [Parcial: o que faltou].
6. Não remova nada que já exista na conta. Se precisar tirar algo do caminho, pause.

BLOCO 0. VERIFICAÇÃO ANTES DE CRIAR
0.1 Procure na conta (incluindo pausadas, removidas e rascunhos) campanhas, grupos ou anúncios com "micose", "unha", "encravada", "cantoplastia" ou "lunula" no nome ou na URL final. Liste nome, status, data de criação e quem criou (Histórico de alterações).
   - Se existir uma campanha de Pesquisa para o mesmo tema: não crie outra. Edite a existente para ficar igual a este prompt (configurações, textos, palavras-chave, recursos) e só então ative.
   - Se existir só rascunho: descarte o rascunho e crie do zero, para não herdar configurações escondidas.
0.2 Metas > Conversões > Resumo: confirme que as ações PRINCIPAIS são exatamente "Clique WhatsApp", "Clique Doctoralia", "Clique telefone" e "Call clicks from ads". Informe o status de cada uma (Ativa, Inativa, Sem conversões recentes). "Clique telefone" pode estar Inativa; isso não impede seguir.
0.3 Tag do Google AW-1066674224 > Configurar > Seus domínios: confirme que alexandreokubo.com.br está na lista. Se não estiver, adicione (sem domínios pages.dev).
0.4 Recursos da conta: confirme que o recurso de ligação 5511941746037 está ativo no nível da conta. Liste as frases de destaque e sitelinks de nível de conta que vão aparecer também nestas campanhas.
0.5 Confira se as campanhas "[SEARCH] [LEADS] Marcação de consultas" e "Cisto sebáceo - Pesquisa" têm palavras-chave com "unha", "micose" ou "encravada". Só liste; não mexa.

BLOCO 1. CONFIGURAÇÕES (as duas campanhas)
1.1 Tipo: Pesquisa. Objetivo: Leads, com as metas de conversão da conta (as quatro principais do item 0.2). Não usar "Performance Max" nem "Inteligente".
1.2 Nomes: "Micose de unha - Pesquisa" e "Unha encravada - Pesquisa".
1.3 Redes: só Rede de Pesquisa do Google. Desligar "Parceiros de pesquisa do Google" e "Rede de Display".
1.4 Locais: os raios da seção VALORES. Opção de local: "Presença: pessoas que estão ou costumam estar nos locais segmentados" (não "Presença ou interesse").
1.5 Idioma: português.
1.6 Orçamento e lance: os da seção VALORES.
1.7 Programação: todos os dias, o dia inteiro (o agendamento é por WhatsApp e Doctoralia).
1.8 Recursos automáticos de anúncio e "criativos automaticamente": desligados. URL final expandida (Final URL expansion): desligada.
1.9 Rotação de anúncios: padrão (otimizar).

BLOCO 2. CAMPANHA "Micose de unha - Pesquisa"
Grupo de anúncios: "Micose de unha".
URL final: https://alexandreokubo.com.br/micose-de-unha/
Caminho exibido: micose-de-unha / laser-lunula

2.1 Palavras-chave (correspondência de frase, entre aspas):
"micose de unha tratamento", "tratamento micose de unha", "tratamento para micose de unha", "tratamento de micose na unha", "micose na unha do pé tratamento", "onicomicose tratamento", "tratamento onicomicose", "laser para micose de unha", "laser micose unha", "laser lunula", "lunula laser", "dermatologista micose de unha", "dermatologista para micose de unha", "unha com fungo tratamento"
Correspondência exata, entre colchetes:
[micose de unha], [onicomicose], [micose na unha], [micose de unha laser]

2.2 Anúncio responsivo de pesquisa. Títulos (fixação entre parênteses):
1. Micose de unha em São Paulo (fixar na posição 1)
2. Tratamento de micose de unha (fixar na posição 1)
3. CRM-SP 90.743 RQE 30.051 (fixar na posição 2)
4. Dermatologista Vila Clementino
5. Dr. Alexandre Okubo
6. Laser Lunula para micose
7. Diagnóstico antes de tratar
8. Exame pode confirmar o fungo
9. Unha amarelada ou grossa?
10. Unha descolando ou grossa?
11. Laser que não aquece a unha
12. Opção para quem evita remédio
13. Plano para o seu caso
14. Agende pelo WhatsApp
15. Agende pela Doctoralia

Descrições:
1. Dermatologista Dr. Alexandre Okubo, CRM-SP 90.743, RQE 30.051. Prime Dermatologia, SP. (fixar na posição 1)
2. Antes de tratar, confirmo se é fungo. Tratamento tópico, oral ou combinado com laser.
3. Laser Lunula: não aquece a unha e é opção para quem não pode tomar remédio.
4. Avaliação com dermatologista na Vila Clementino. Agende pelo WhatsApp ou Doctoralia.

2.3 Se o anúncio for reprovado por uso de marca ("Lunula"): troque o título 6 por "Laser para micose de unha", na descrição 3 troque "Laser Lunula:" por "O laser usado", o caminho "laser-lunula" por "laser", a frase de destaque "Laser Lunula na Prime" por "Laser na Prime", e as palavras-chave "laser lunula" e "lunula laser" ficam pausadas. Relate o aviso exato.

2.4 Palavras-chave negativas (correspondência de frase, nível da campanha):
grátis, gratis, gratuito, sus, caseiro, caseira, receita caseira, remédio caseiro, vinagre, bicarbonato, como cortar, vídeo, video, imagens, imagem, foto, fotos, cachorro, cão, gato, bebê, bebe, manicure, esmalte, pomada, cid, o que é, sintomas, contagiosa, virilha, couro cabeludo, pele

BLOCO 3. CAMPANHA "Unha encravada - Pesquisa"
Grupo de anúncios: "Unha encravada".
URL final: https://alexandreokubo.com.br/unha-encravada/
Caminho exibido: unha-encravada / cantoplastia

3.1 Palavras-chave (correspondência de frase):
"unha encravada tratamento", "tratamento unha encravada", "cirurgia de unha encravada", "cirurgia unha encravada", "cantoplastia", "matricectomia", "unha encravada dermatologista", "dermatologista unha encravada", "tirar unha encravada", "unha encravada inflamada", "unha encravada com pus", "unha encravada infeccionada", "unha encravada recorrente", "granuloma unha encravada", "unha encravada cirurgia preço", "unha encravada são paulo", "unha encravada santo andré"
Correspondência exata:
[unha encravada], [cirurgia unha encravada], [cantoplastia], [cantoplastia preço]

3.2 Anúncio responsivo de pesquisa. Títulos:
1. Unha encravada que volta (fixar na posição 1)
2. Tratamento de unha encravada (fixar na posição 1)
3. CRM-SP 90.743 RQE 30.051 (fixar na posição 2)
4. Cantoplastia em São Paulo
5. Cantoplastia em Santo André
6. Dermatologista Vila Clementino
7. Dr. Alexandre Okubo
8. Com anestesia local
9. Feita no consultório
10. Retira só a borda que encrava
11. Sem tirar a unha inteira
12. Unha encravada inflamada?
13. Trata a raiz da borda
14. Cuidado especial no diabetes
15. Agende pelo WhatsApp

Descrições:
1. Dermatologista Dr. Alexandre Okubo, CRM-SP 90.743, RQE 30.051. São Paulo e Santo André. (fixar na posição 1)
2. Cantoplastia com matricectomia e anestesia local: retiro só a borda que encrava.
3. Volta a encravar, tem pus ou granuloma? Na consulta, defino o tratamento do seu caso.
4. Casos leves: cuidados simples e orientação de corte e calçados. Agende pelo WhatsApp.

3.3 Palavras-chave negativas (correspondência de frase, nível da campanha):
grátis, gratis, gratuito, sus, caseiro, caseira, remédio caseiro, em casa, sozinho, como desencravar, como tirar em casa, como cortar, corte certo, vídeo, video, imagens, foto, fotos, cachorro, gato, cid, pomada, podólogo, podologo, podologia, manicure, unha de gel, unha postiça

BLOCO 4. RECURSOS (nível da campanha)
4.1 Frases de destaque, nas duas campanhas: "Dermatologista com RQE", "Agenda pela Doctoralia", "Atendimento no WhatsApp".
   Só na Micose de unha: "Laser Lunula na Prime". Só na Unha encravada: "Anestesia local".
4.2 Sitelinks, nas duas campanhas:
   - "Sobre o Dr. Alexandre" → https://alexandreokubo.com.br/sobre/ | "Dermatologista, CRM-SP 90.743" | "Diretor técnico da Prime"
   - "Onde atendo" → https://alexandreokubo.com.br/onde-atendo/ | "Vila Clementino e Santo André" | "Endereços e como chegar"
   Só na Micose de unha:
   - "Entenda a micose de unha" → https://alexandreokubo.com.br/blog/micose-de-unha-onicomicose/ | "Causas, exame e tratamentos" | "Texto revisado por dermatologista"
   Só na Unha encravada:
   - "Entenda a unha encravada" → https://alexandreokubo.com.br/blog/unha-encravada/ | "Causas, cuidados e cirurgia" | "Texto revisado por dermatologista"
4.3 Ligação: usar o recurso de nível da conta, (11) 94174-6037. Não criar outro número.
4.4 Não adicionar imagens, logotipo, preço, promoção nem formulário de lead.

BLOCO 5. REVISÃO FINAL E ATIVAÇÃO
5.1 Antes de ativar, confira e relate em cada campanha: tipo, redes, locais e opção de presença, idioma, orçamento, lance, número de palavras-chave positivas e negativas, títulos e descrições (com contagem) e fixações.
5.2 Confira a "força do anúncio". "Médio" ou "Bom" é aceitável: a fixação de CRM e RQE derruba a nota e é exigência do CFM. Não troque textos para subir a nota.
5.3 Ative as duas campanhas.
5.4 Depois de ativar, informe o status de política de cada anúncio e de cada recurso ("Em análise" é normal nas primeiras horas). Se houver reprovação, copie o motivo exato e aplique só o item 2.3, se for o caso da marca.
5.5 Planejador ou "Estimativas" da campanha: informe as estimativas de cliques e custo por semana, se o Google mostrar.

RELATÓRIO FINAL
- Resultado do bloco 0 (o que já existia, com nome, status e quem criou).
- Uma tabela por bloco: item, o que foi configurado e status.
- Lista das palavras-chave positivas e negativas efetivamente adicionadas, por campanha.
- Status de política de anúncios e recursos.
- Qualquer aviso ou recomendação que o Google tenha mostrado (só relatar, não aplicar).
```

## Depois de rodar
- Mandar o relatório ao Claude.
- Em 7 dias: exportar os termos de pesquisa das duas campanhas, para revisar as negativas.
- Em 14 dias: comparar custo por conversão com a campanha de cisto (R$ 25,76 na semana de 31/10 a 06/11).
