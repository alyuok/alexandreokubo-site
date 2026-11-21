// Base de alimentos da calculadora de proteína.
// Proteína em g por 100 g da parte comestível. Fonte primária: TBCA-USP (`tbca` = código; consulta de 21/11/2026,
// base "Composição Informação Estatística"). Conferência: TACO 4ª ed. (NEPA/UNICAMP, 2011; `taco` = nº, `pTaco` = valor).
// Sem correspondente na TBCA: fica a TACO; sem nenhuma das duas: média de rótulos ('rotulo').
// Medidas caseiras: gramas APROXIMADOS, para quem não pesa a comida. Não vêm da TACO; são estimativas de porção usual.
// dieta: 'o' = contém carne ou peixe; 'v' = vegetariano (ovo ou leite); 'vg' = vegano.

export type Medida = [rotulo: string, gramas: number];
export interface Alimento {
  id: string;
  nome: string;
  grupo: string;
  p100: number;
  fonte: 'tbca' | 'taco' | 'rotulo';
  tbca?: string;
  taco?: number;
  pTaco?: number;
  dieta: 'o' | 'v' | 'vg';
  medidas: Medida[];
}

const a = (
  id: string, nome: string, grupo: string, p100: number, taco: number | null,
  dieta: Alimento['dieta'], medidas: Medida[], tbca?: [string, number],
): Alimento => ({
  id, nome, grupo,
  p100: tbca ? tbca[1] : p100,
  fonte: tbca ? 'tbca' : taco ? 'taco' : 'rotulo',
  ...(tbca ? { tbca: tbca[0] } : {}),
  ...(taco ? { taco, pTaco: p100 } : {}),
  dieta, medidas,
});

const G = {
  carne: 'Carnes',
  ave: 'Frango e peru',
  peixe: 'Peixes e frutos do mar',
  ovo: 'Ovos',
  leite: 'Leite e derivados',
  leg: 'Feijões e leguminosas',
  cereal: 'Pães, cereais e massas',
  oleag: 'Castanhas e sementes',
  prep: 'Pratos e salgados',
  vg: 'Opções vegetais',
  sup: 'Suplementos',
  outros: 'Raízes e vegetais',
};

export const grupos = Object.values(G);

export const alimentos: Alimento[] = [
  // Carnes
  a('patinho', 'Patinho grelhado (carne magra)', G.carne, 35.9, 377, 'o', [['bife médio', 100], ['bife pequeno', 70]], ['BRC0045F', 36.0]),
  a('alcatra', 'Alcatra grelhada', G.carne, 31.9, 370, 'o', [['bife médio', 100], ['bife pequeno', 70]], ['BRC0042F', 32.6]),
  a('contrafile', 'Contrafilé grelhado, sem gordura', G.carne, 35.9, 346, 'o', [['bife médio', 100]], ['BRC0031F', 36.0]),
  a('filemignon', 'Filé-mignon grelhado', G.carne, 32.8, 358, 'o', [['medalhão', 100]], ['BRC0036F', 32.9]),
  a('picanha', 'Picanha grelhada, sem gordura', G.carne, 31.9, 383, 'o', [['fatia média', 80]], ['BRC0048F', 32.0]),
  a('patinho-moido', 'Carne moída (acém) cozida', G.carne, 26.7, 326, 'o', [['colher de sopa cheia', 30], ['concha pequena', 80]], ['BRC0025F', 26.7]),
  a('musculo', 'Músculo cozido', G.carne, 31.2, 371, 'o', [['pedaço médio', 80], ['concha', 100]], ['BRC0043F', 30.8]),
  a('coxao-mole', 'Coxão mole cozido (carne de panela)', G.carne, 32.4, 351, 'o', [['fatia média', 80]], ['BRC0034F', 32.2]),
  a('lagarto', 'Lagarto cozido', G.carne, 32.9, 363, 'o', [['fatia média', 60]], ['BRC0039F', 32.6]),
  a('figado', 'Fígado bovino grelhado', G.carne, 29.9, 356, 'o', [['bife médio', 100]], ['BRC0035F', 29.9]),
  a('carne-seca', 'Charque (carne-seca) cozido', G.carne, 26.9, 384, 'o', [['colher de sopa cheia', 25], ['porção', 80]], ['BRC0084F', 37.4]),
  a('hamburguer', 'Hambúrguer bovino frito', G.carne, 20.0, 416, 'o', [['unidade (56 g)', 56], ['unidade grande', 90]], ['BRC0178F', 20.0]),
  a('lombo', 'Lombo de porco assado', G.carne, 35.7, 432, 'o', [['fatia média', 60]], ['BRC0163F', 35.7]),
  a('bisteca', 'Bisteca de porco grelhada', G.carne, 28.9, 429, 'o', [['unidade média', 100]], ['BRC0160F', 28.9]),
  a('pernil', 'Pernil de porco assado', G.carne, 32.1, 435, 'o', [['fatia média', 60]], ['BRC0167F', 33.1]),
  a('linguica', 'Linguiça de porco grelhada', G.carne, 23.2, 423, 'o', [['gomo', 60]], ['BRC0189F', 23.2]),
  a('presunto', 'Presunto', G.carne, 14.3, 439, 'o', [['fatia fina', 15]], ['BRC0203F', 15.7]),
  a('mortadela', 'Mortadela', G.carne, 12.0, 424, 'o', [['fatia fina', 15]], ['BRC0193F', 13.7]),
  // Aves
  a('peito-grelhado', 'Peito de frango grelhado, sem pele', G.ave, 32.0, 410, 'o', [['filé médio', 100], ['filé pequeno', 70], ['colher de sopa (desfiado)', 25]], ['BRC0114F', 32.1]),
  a('peito-cozido', 'Peito de frango cozido ou desfiado', G.ave, 31.5, 408, 'o', [['colher de sopa cheia (desfiado)', 25], ['xícara (desfiado)', 120]], ['BRC0194F', 31.3]),
  a('coxa', 'Coxa de frango assada, com pele', G.ave, 28.5, 396, 'o', [['unidade (só a carne)', 60]], ['BRC0108F', 28.5]),
  a('sobrecoxa', 'Sobrecoxa de frango assada, sem pele', G.ave, 29.2, 413, 'o', [['unidade (só a carne)', 80]], ['BRC0116F', 29.2]),
  a('frango-inteiro', 'Frango assado, sem pele (misto)', G.ave, 28.0, 403, 'o', [['pedaço médio', 80]], ['BRC0110F', 28.0]),
  a('peru', 'Peru assado', G.ave, 26.2, 425, 'o', [['fatia média', 40]], ['BRC0197F', 26.2]),
  a('linguica-frango', 'Linguiça de frango grelhada', G.ave, 18.2, 420, 'o', [['gomo', 60]], ['BRC0188F', 18.2]),
  // Peixes
  a('tilapia-merluza', 'Merluza, filé assado', G.peixe, 26.6, 301, 'o', [['filé médio', 100]], ['BRC0062E', 26.6]),
  a('pescada', 'Pescada, filé frito', G.peixe, 28.6, 308, 'o', [['filé médio', 100]], ['BRC0056E', 28.4]),
  a('salmao', 'Salmão grelhado, sem pele', G.peixe, 26.1, 317, 'o', [['posta média', 120], ['posta pequena', 80]], ['BRC0067E', 26.0]),
  a('sardinha-lata', 'Sardinha em lata (em óleo)', G.peixe, 15.9, 319, 'o', [['lata drenada (84 g)', 84], ['unidade', 25]], ['BRC0073E', 18.1]),
  a('sardinha-assada', 'Sardinha assada', G.peixe, 32.2, 318, 'o', [['unidade', 35]], ['BRC0068E', 27.0]),
  a('atum', 'Atum em lata (em óleo)', G.peixe, 26.2, 277, 'o', [['lata drenada (120 g)', 120], ['colher de sopa cheia', 20]], ['BRC0040E', 26.3]),
  a('bacalhau', 'Bacalhau refogado', G.peixe, 24.0, 280, 'o', [['porção', 100]], ['BRC0044E', 24.0]),
  a('camarao', 'Camarão cozido', G.peixe, 19.0, 284, 'o', [['colher de sopa cheia', 25], ['unidade grande', 15]], ['BRC0001E', 17.7]),
  a('pintado', 'Pintado grelhado', G.peixe, 30.8, 313, 'o', [['posta média', 120]], ['BRC0030E', 30.8]),
  // Ovos
  // Exceção à TBCA (decisão dele em 21/11/2026): a TBCA dá 10,4 g (BRC0010J), fora do que outras tabelas mostram
  // (TACO 13,3 g; USDA, ovo grande de 50 g com cerca de 6,3 g, ou 12,6 g/100 g). Usamos a TACO.
  a('ovo-cozido', 'Ovo cozido', G.ovo, 13.3, 488, 'v', [['unidade grande', 50], ['unidade média', 45]]),
  a('ovo-frito', 'Ovo frito', G.ovo, 15.6, 490, 'v', [['unidade', 45]], ['BRC0015J', 15.6]),
  a('ovo-mexido', 'Ovo mexido ou omelete simples (ovo inteiro)', G.ovo, 13.0, 489, 'v', [['1 ovo', 50]], ['BRC0065J', 12.2]),
  a('clara', 'Clara de ovo cozida', G.ovo, 13.4, 486, 'v', [['clara de 1 ovo', 30]], ['BRC0004J', 13.4]),
  a('omelete-queijo', 'Omelete de queijo', G.ovo, 15.6, 484, 'v', [['omelete de 2 ovos', 130]], ['BRC0030J', 13.6]),
  a('codorna', 'Ovo de codorna', G.ovo, 13.7, 485, 'v', [['unidade', 10]], ['BRC0052J', 13.1]),
  // Leite e derivados
  a('leite-integral', 'Leite integral', G.leite, 3.0, null, 'v', [['copo americano (190 ml)', 190], ['xícara de chá (240 ml)', 240], ['caixinha (200 ml)', 200]], ['BRC0044G', 2.35]),
  a('leite-desnatado', 'Leite desnatado ou semidesnatado', G.leite, 3.1, null, 'v', [['copo americano (190 ml)', 190], ['xícara de chá (240 ml)', 240]], ['BRC0036G', 3.12]),
  a('leite-po', 'Leite em pó integral', G.leite, 25.4, 459, 'v', [['colher de sopa', 15]], ['BRC0039G', 26.0]),
  a('iogurte-natural', 'Iogurte natural', G.leite, 4.1, 448, 'v', [['pote (170 g)', 170], ['colher de sopa', 20]], ['BRC0020G', 4.02]),
  a('iogurte-desnatado', 'Iogurte natural desnatado', G.leite, 3.8, 449, 'v', [['pote (170 g)', 170]], ['BRC0022G', 4.04]),
  a('iogurte-grego', 'Iogurte tipo grego ou "proteico" (confira o rótulo)', G.leite, 8.0, null, 'v', [['pote (100 g)', 100]], ['BRC0133G', 9.0]),
  a('queijo-minas', 'Queijo minas frescal', G.leite, 17.4, 461, 'v', [['fatia média', 30], ['fatia grossa', 50]], ['BRC0052G', 15.9]),
  a('queijo-meia-cura', 'Queijo minas meia cura', G.leite, 21.2, 462, 'v', [['fatia média', 30]], ['BRC0154G', 21.2]),
  a('mussarela', 'Queijo muçarela', G.leite, 22.6, 463, 'v', [['fatia fina', 15], ['fatia média', 20]], ['BRC0059G', 23.8]),
  a('prato', 'Queijo prato', G.leite, 22.7, 467, 'v', [['fatia fina', 15], ['fatia média', 20]], ['BRC0064G', 24.2]),
  a('parmesao', 'Queijo parmesão ralado', G.leite, 35.6, 464, 'v', [['colher de sopa', 10]], ['BRC0061G', 32.1]),
  a('ricota', 'Ricota', G.leite, 12.6, 469, 'v', [['fatia média', 35], ['colher de sopa', 20]], ['BRC0051G', 12.6]),
  a('requeijao', 'Requeijão cremoso', G.leite, 9.6, 468, 'v', [['colher de sopa', 30], ['ponta de faca', 10]], ['BRC0066G', 9.91]),
  a('petit-suisse', 'Petit suisse (queijinho)', G.leite, 5.8, 466, 'v', [['unidade (45 g)', 45]], ['BRC0050G', 5.79]),
  // Feijões e leguminosas
  a('feijao-carioca', 'Feijão carioca cozido', G.leg, 4.8, 561, 'vg', [['concha média', 140], ['concha pequena', 90], ['colher de sopa', 20]], ['BRC0001T', 4.77]),
  a('feijao-preto', 'Feijão preto cozido', G.leg, 4.5, 567, 'vg', [['concha média', 140], ['concha pequena', 90]], ['BRC0008T', 4.48]),
  a('feijao-fradinho', 'Feijão-fradinho cozido', G.leg, 5.1, 563, 'vg', [['concha média', 140]], ['BRC0003T', 5.09]),
  a('feijao-roxo', 'Feijão roxo cozido', G.leg, 5.7, 573, 'vg', [['concha média', 140]], ['BRC0014T', 5.72]),
  a('lentilha', 'Lentilha cozida', G.leg, 6.3, 577, 'vg', [['concha média', 140], ['colher de sopa', 20]], ['BRC0018T', 7.3]),
  a('ervilha', 'Ervilha em lata, drenada', G.leg, 4.6, 560, 'vg', [['colher de sopa', 20]], ['BRC0022T', 5.67]),
  a('grao-de-bico', 'Grão-de-bico em conserva, drenado', G.leg, 6.2, null, 'vg', [['colher de sopa', 20], ['concha média', 140]], ['BRC0031T', 6.2]),
  a('pts', 'Proteína de soja texturizada, hidratada e cozida', G.leg, 25.4, null, 'vg', [['colher de sopa cheia', 25], ['concha pequena', 80]], ['BRC0170T', 25.4]),
  a('quinoa', 'Quinoa cozida', G.cereal, 4.4, null, 'vg', [['colher de sopa cheia', 25], ['escumadeira cheia', 90]], ['BRC0399A', 4.4]),
  a('tofu', 'Tofu', G.leg, 6.6, 584, 'vg', [['fatia média', 50], ['cubo', 15]], ['BRC0056T', 6.55]),
  a('feijoada', 'Feijoada', G.prep, 8.7, 540, 'o', [['concha média', 140]], ['BRC0198T', 9.55]),
  a('tropeiro', 'Feijão tropeiro', G.prep, 10.2, 539, 'o', [['colher de servir', 60]], ['BRC0199T', 10.1]),
  // Pães, cereais e massas
  a('pao-frances', 'Pão francês', G.cereal, 8.0, 53, 'vg', [['unidade (50 g)', 50]], ['BRC0002A', 9.83]),
  a('pao-forma-integral', 'Pão de forma integral', G.cereal, 9.4, 52, 'vg', [['fatia', 25]]),
  a('pao-aveia', 'Pão de aveia', G.cereal, 12.4, 48, 'vg', [['fatia', 25]]),
  a('pao-queijo', 'Pão de queijo assado', G.cereal, 5.1, 140, 'v', [['unidade média', 40], ['unidade pequena', 20]]),
  a('torrada', 'Torrada de pão francês', G.cereal, 10.5, 63, 'vg', [['unidade', 10]], ['BRC0173A', 10.5]),
  a('cream-cracker', 'Biscoito cream cracker', G.cereal, 10.1, 13, 'vg', [['unidade', 6]], ['BRC0060A', 11.6]),
  a('aveia', 'Aveia em flocos', G.cereal, 13.9, 7, 'vg', [['colher de sopa', 15]], ['BRC0024A', 15.6]),
  a('arroz-branco', 'Arroz branco cozido', G.cereal, 2.5, 3, 'vg', [['colher de sopa cheia', 25], ['escumadeira cheia', 90]], ['BRC0208A', 2.41]),
  a('arroz-integral', 'Arroz integral cozido', G.cereal, 2.6, 1, 'vg', [['colher de sopa cheia', 25], ['escumadeira cheia', 90]], ['BRC0016A', 2.44]),
  a('macarrao', 'Macarrão cozido (massa de trigo)', G.cereal, 4.4, null, 'vg', [['escumadeira cheia', 110], ['prato raso', 220]], ['BRC0195A', 3.5]),
  a('cuscuz', 'Cuscuz de milho cozido', G.cereal, 2.2, 533, 'vg', [['fatia média', 100]], ['BRC0409A', 2.16]),
  a('tapioca', 'Tapioca (só a goma)', G.cereal, 0.1, 551, 'vg', [['unidade média', 60]]),
  a('pipoca', 'Pipoca', G.cereal, 9.9, 61, 'vg', [['xícara', 10]], ['BRC0129A', 9.93]),
  // Raízes e vegetais
  a('batata', 'Batata cozida', G.outros, 1.2, 91, 'vg', [['unidade média', 130]], ['BRC0041B', 1.33]),
  a('mandioca', 'Mandioca cozida', G.outros, 0.6, 129, 'vg', [['pedaço médio', 100]], ['BRC0053B', 0.64]),
  a('brocolis', 'Brócolis cozido', G.outros, 2.1, 100, 'vg', [['ramo', 20], ['xícara', 90]], ['BRC0045B', 2.71]),
  // Castanhas e sementes
  a('amendoim', 'Amendoim torrado', G.oleag, 22.5, 558, 'vg', [['punhado (30 g)', 30], ['colher de sopa', 15]], ['BRC0021T', 27.5]),
  a('pasta-amendoim', 'Pasta de amendoim integral (confira o rótulo)', G.oleag, 25.0, null, 'vg', [['colher de sopa', 15]], ['BRC0290T', 26.5]),
  a('pacoca', 'Paçoca de amendoim', G.oleag, 16.0, 579, 'vg', [['unidade (20 g)', 20]], ['BRC0081K', 16.0]),
  a('castanha-caju', 'Castanha-de-caju torrada', G.oleag, 18.5, 588, 'vg', [['punhado (30 g)', 30], ['unidade', 2.5]], ['BRC0012U', 18.2]),
  a('castanha-para', 'Castanha-do-pará', G.oleag, 14.5, 589, 'vg', [['unidade', 4]], ['BRC0003U', 14.5]),
  a('amendoa', 'Amêndoa torrada', G.oleag, 18.6, 587, 'vg', [['punhado (30 g)', 30]], ['BRC0001U', 20.6]),
  a('noz', 'Noz', G.oleag, 14.0, 597, 'vg', [['unidade (metades)', 5], ['punhado (30 g)', 30]], ['BRC0009U', 14.0]),
  a('gergelim', 'Gergelim', G.oleag, 21.2, 593, 'vg', [['colher de sopa', 10]], ['BRC0016U', 21.2]),
  a('linhaca', 'Linhaça', G.oleag, 14.1, 594, 'vg', [['colher de sopa', 10]], ['BRC0006U', 14.1]),
  // Opções vegetais e bebidas
  a('bebida-soja', 'Bebida de soja (confira o rótulo)', G.vg, 2.4, 582, 'vg', [['copo (200 ml)', 200]], ['BRC0042T', 1.76]),
  a('bebida-aveia', 'Bebida de aveia, amêndoa ou arroz (confira o rótulo)', G.vg, 0.5, null, 'vg', [['copo (200 ml)', 200]]),
  a('soja-farinha', 'Farinha de soja', G.vg, 36.0, 581, 'vg', [['colher de sopa', 10]], ['BRC0039T', 38.6]),
  a('tremoco', 'Tremoço em conserva', G.vg, 11.1, 586, 'vg', [['colher de sopa', 20]], ['BRC0058T', 11.1]),
  // Pratos e salgados
  a('estrogonofe', 'Estrogonofe de carne', G.prep, 15.0, 537, 'o', [['colher de servir', 80]], ['BRC0910F', 15.0]),
  a('carreteiro', 'Arroz carreteiro', G.prep, 10.8, 526, 'o', [['escumadeira cheia', 90]], ['BRC0887A', 10.8]),
  a('baiao', 'Baião de dois', G.prep, 6.2, 527, 'o', [['escumadeira cheia', 90]], ['BRC0188A', 5.17]),
  a('bolonhesa', 'Macarrão à bolonhesa', G.prep, 4.9, 542, 'o', [['prato raso', 250]], ['BRC0238A', 4.42]),
  a('quibe', 'Quibe assado', G.prep, 14.6, 440, 'o', [['unidade média', 60]], ['BRC0205F', 14.6]),
  a('coxinha', 'Coxinha de frango frita', G.prep, 9.6, 386, 'o', [['unidade média', 80]], ['BRC0100F', 9.61]),
  a('pastel-carne', 'Pastel de carne frito', G.prep, 10.1, 56, 'o', [['unidade média', 80]]),
  a('pastel-queijo', 'Pastel de queijo frito', G.prep, 8.7, 58, 'v', [['unidade média', 80]]),
  // Suplementos (por nome genérico; o rótulo prevalece)
  a('whey', 'Suplemento de proteína em pó, tipo whey (confira o rótulo)', G.sup, 75.0, null, 'v', [['dosador (30 g)', 30]], ['BRC0097N', 78.1]),
  a('proteina-vegetal', 'Proteína vegetal em pó (ervilha, arroz; média de rótulos)', G.sup, 70.0, null, 'vg', [['dosador (30 g)', 30]]),
  a('colageno', 'Colágeno hidrolisado em pó (proteína incompleta)', G.sup, 90.0, null, 'o', [['colher de sopa (10 g)', 10]]),
];
