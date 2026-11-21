// Base de alimentos da calculadora de proteína.
// Proteína em g por 100 g da parte comestível, conferida na TACO 4ª ed. (NEPA/UNICAMP, 2011): `taco` é o número do item.
// Itens sem valor na TACO (leite, bebidas vegetais, suplementos) usam a média de rótulos e estão marcados com fonte 'rotulo'.
// Medidas caseiras: gramas APROXIMADOS, para quem não pesa a comida. Não vêm da TACO; são estimativas de porção usual.
// dieta: 'o' = contém carne ou peixe; 'v' = vegetariano (ovo ou leite); 'vg' = vegano.

export type Medida = [rotulo: string, gramas: number];
export interface Alimento {
  id: string;
  nome: string;
  grupo: string;
  p100: number;
  fonte: 'taco' | 'rotulo';
  taco?: number;
  dieta: 'o' | 'v' | 'vg';
  medidas: Medida[];
}

const a = (
  id: string, nome: string, grupo: string, p100: number, taco: number | null,
  dieta: Alimento['dieta'], medidas: Medida[],
): Alimento => ({ id, nome, grupo, p100, fonte: taco ? 'taco' : 'rotulo', ...(taco ? { taco } : {}), dieta, medidas });

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
  a('patinho', 'Patinho grelhado (carne magra)', G.carne, 35.9, 377, 'o', [['bife médio', 100], ['bife pequeno', 70]]),
  a('alcatra', 'Alcatra grelhada', G.carne, 31.9, 370, 'o', [['bife médio', 100], ['bife pequeno', 70]]),
  a('contrafile', 'Contrafilé grelhado, sem gordura', G.carne, 35.9, 346, 'o', [['bife médio', 100]]),
  a('filemignon', 'Filé-mignon grelhado', G.carne, 32.8, 358, 'o', [['medalhão', 100]]),
  a('picanha', 'Picanha grelhada, sem gordura', G.carne, 31.9, 383, 'o', [['fatia média', 80]]),
  a('patinho-moido', 'Carne moída (acém) cozida', G.carne, 26.7, 326, 'o', [['colher de sopa cheia', 30], ['concha pequena', 80]]),
  a('musculo', 'Músculo cozido', G.carne, 31.2, 371, 'o', [['pedaço médio', 80], ['concha', 100]]),
  a('coxao-mole', 'Coxão mole cozido (carne de panela)', G.carne, 32.4, 351, 'o', [['fatia média', 80]]),
  a('lagarto', 'Lagarto cozido', G.carne, 32.9, 363, 'o', [['fatia média', 60]]),
  a('figado', 'Fígado bovino grelhado', G.carne, 29.9, 356, 'o', [['bife médio', 100]]),
  a('carne-seca', 'Carne-seca cozida', G.carne, 26.9, 384, 'o', [['colher de sopa cheia', 25], ['porção', 80]]),
  a('hamburguer', 'Hambúrguer bovino frito', G.carne, 20.0, 416, 'o', [['unidade (56 g)', 56], ['unidade grande', 90]]),
  a('lombo', 'Lombo de porco assado', G.carne, 35.7, 432, 'o', [['fatia média', 60]]),
  a('bisteca', 'Bisteca de porco grelhada', G.carne, 28.9, 429, 'o', [['unidade média', 100]]),
  a('pernil', 'Pernil de porco assado', G.carne, 32.1, 435, 'o', [['fatia média', 60]]),
  a('linguica', 'Linguiça de porco grelhada', G.carne, 23.2, 423, 'o', [['gomo', 60]]),
  a('presunto', 'Presunto', G.carne, 14.3, 439, 'o', [['fatia fina', 15]]),
  a('mortadela', 'Mortadela', G.carne, 12.0, 424, 'o', [['fatia fina', 15]]),
  // Aves
  a('peito-grelhado', 'Peito de frango grelhado, sem pele', G.ave, 32.0, 410, 'o', [['filé médio', 100], ['filé pequeno', 70], ['colher de sopa (desfiado)', 25]]),
  a('peito-cozido', 'Peito de frango cozido ou desfiado', G.ave, 31.5, 408, 'o', [['colher de sopa cheia (desfiado)', 25], ['xícara (desfiado)', 120]]),
  a('coxa', 'Coxa de frango assada, com pele', G.ave, 28.5, 396, 'o', [['unidade (só a carne)', 60]]),
  a('sobrecoxa', 'Sobrecoxa de frango assada, sem pele', G.ave, 29.2, 413, 'o', [['unidade (só a carne)', 80]]),
  a('frango-inteiro', 'Frango assado, sem pele (misto)', G.ave, 28.0, 403, 'o', [['pedaço médio', 80]]),
  a('peru', 'Peru assado', G.ave, 26.2, 425, 'o', [['fatia média', 40]]),
  a('linguica-frango', 'Linguiça de frango grelhada', G.ave, 18.2, 420, 'o', [['gomo', 60]]),
  // Peixes
  a('tilapia-merluza', 'Merluza, filé assado', G.peixe, 26.6, 301, 'o', [['filé médio', 100]]),
  a('pescada', 'Pescada, filé frito', G.peixe, 28.6, 308, 'o', [['filé médio', 100]]),
  a('salmao', 'Salmão grelhado, sem pele', G.peixe, 26.1, 317, 'o', [['posta média', 120], ['posta pequena', 80]]),
  a('sardinha-lata', 'Sardinha em lata (em óleo)', G.peixe, 15.9, 319, 'o', [['lata drenada (84 g)', 84], ['unidade', 25]]),
  a('sardinha-assada', 'Sardinha assada', G.peixe, 32.2, 318, 'o', [['unidade', 35]]),
  a('atum', 'Atum em lata (em óleo)', G.peixe, 26.2, 277, 'o', [['lata drenada (120 g)', 120], ['colher de sopa cheia', 20]]),
  a('bacalhau', 'Bacalhau refogado', G.peixe, 24.0, 280, 'o', [['porção', 100]]),
  a('camarao', 'Camarão cozido', G.peixe, 19.0, 284, 'o', [['colher de sopa cheia', 25], ['unidade grande', 15]]),
  a('pintado', 'Pintado grelhado', G.peixe, 30.8, 313, 'o', [['posta média', 120]]),
  // Ovos
  a('ovo-cozido', 'Ovo cozido', G.ovo, 13.3, 488, 'v', [['unidade grande', 50], ['unidade média', 45]]),
  a('ovo-frito', 'Ovo frito', G.ovo, 15.6, 490, 'v', [['unidade', 45]]),
  a('ovo-mexido', 'Ovo mexido ou omelete simples (ovo inteiro)', G.ovo, 13.0, 489, 'v', [['1 ovo', 50]]),
  a('clara', 'Clara de ovo cozida', G.ovo, 13.4, 486, 'v', [['clara de 1 ovo', 30]]),
  a('omelete-queijo', 'Omelete de queijo', G.ovo, 15.6, 484, 'v', [['omelete de 2 ovos', 130]]),
  a('codorna', 'Ovo de codorna', G.ovo, 13.7, 485, 'v', [['unidade', 10]]),
  // Leite e derivados
  a('leite-integral', 'Leite integral', G.leite, 3.0, null, 'v', [['copo americano (190 ml)', 190], ['xícara de chá (240 ml)', 240], ['caixinha (200 ml)', 200]]),
  a('leite-desnatado', 'Leite desnatado ou semidesnatado', G.leite, 3.1, null, 'v', [['copo americano (190 ml)', 190], ['xícara de chá (240 ml)', 240]]),
  a('leite-po', 'Leite em pó integral', G.leite, 25.4, 459, 'v', [['colher de sopa', 15]]),
  a('iogurte-natural', 'Iogurte natural', G.leite, 4.1, 448, 'v', [['pote (170 g)', 170], ['colher de sopa', 20]]),
  a('iogurte-desnatado', 'Iogurte natural desnatado', G.leite, 3.8, 449, 'v', [['pote (170 g)', 170]]),
  a('iogurte-grego', 'Iogurte tipo grego ou "proteico" (confira o rótulo)', G.leite, 8.0, null, 'v', [['pote (100 g)', 100]]),
  a('queijo-minas', 'Queijo minas frescal', G.leite, 17.4, 461, 'v', [['fatia média', 30], ['fatia grossa', 50]]),
  a('queijo-meia-cura', 'Queijo minas meia cura', G.leite, 21.2, 462, 'v', [['fatia média', 30]]),
  a('mussarela', 'Queijo muçarela', G.leite, 22.6, 463, 'v', [['fatia fina', 15], ['fatia média', 20]]),
  a('prato', 'Queijo prato', G.leite, 22.7, 467, 'v', [['fatia fina', 15], ['fatia média', 20]]),
  a('parmesao', 'Queijo parmesão ralado', G.leite, 35.6, 464, 'v', [['colher de sopa', 10]]),
  a('ricota', 'Ricota', G.leite, 12.6, 469, 'v', [['fatia média', 35], ['colher de sopa', 20]]),
  a('requeijao', 'Requeijão cremoso', G.leite, 9.6, 468, 'v', [['colher de sopa', 30], ['ponta de faca', 10]]),
  a('petit-suisse', 'Petit suisse (queijinho)', G.leite, 5.8, 466, 'v', [['unidade (45 g)', 45]]),
  // Feijões e leguminosas
  a('feijao-carioca', 'Feijão carioca cozido', G.leg, 4.8, 561, 'vg', [['concha média', 140], ['concha pequena', 90], ['colher de sopa', 20]]),
  a('feijao-preto', 'Feijão preto cozido', G.leg, 4.5, 567, 'vg', [['concha média', 140], ['concha pequena', 90]]),
  a('feijao-fradinho', 'Feijão-fradinho cozido', G.leg, 5.1, 563, 'vg', [['concha média', 140]]),
  a('feijao-roxo', 'Feijão roxo cozido', G.leg, 5.7, 573, 'vg', [['concha média', 140]]),
  a('lentilha', 'Lentilha cozida', G.leg, 6.3, 577, 'vg', [['concha média', 140], ['colher de sopa', 20]]),
  a('ervilha', 'Ervilha em lata, drenada', G.leg, 4.6, 560, 'vg', [['colher de sopa', 20]]),
  a('tofu', 'Tofu', G.leg, 6.6, 584, 'vg', [['fatia média', 50], ['cubo', 15]]),
  a('feijoada', 'Feijoada', G.prep, 8.7, 540, 'o', [['concha média', 140]]),
  a('tropeiro', 'Feijão tropeiro', G.prep, 10.2, 539, 'o', [['colher de servir', 60]]),
  // Pães, cereais e massas
  a('pao-frances', 'Pão francês', G.cereal, 8.0, 53, 'vg', [['unidade (50 g)', 50]]),
  a('pao-forma-integral', 'Pão de forma integral', G.cereal, 9.4, 52, 'vg', [['fatia', 25]]),
  a('pao-aveia', 'Pão de aveia', G.cereal, 12.4, 48, 'vg', [['fatia', 25]]),
  a('pao-queijo', 'Pão de queijo assado', G.cereal, 5.1, 140, 'v', [['unidade média', 40], ['unidade pequena', 20]]),
  a('torrada', 'Torrada de pão francês', G.cereal, 10.5, 63, 'vg', [['unidade', 10]]),
  a('cream-cracker', 'Biscoito cream cracker', G.cereal, 10.1, 13, 'vg', [['unidade', 6]]),
  a('aveia', 'Aveia em flocos', G.cereal, 13.9, 7, 'vg', [['colher de sopa', 15]]),
  a('arroz-branco', 'Arroz branco cozido', G.cereal, 2.5, 3, 'vg', [['colher de sopa cheia', 25], ['escumadeira cheia', 90]]),
  a('arroz-integral', 'Arroz integral cozido', G.cereal, 2.6, 1, 'vg', [['colher de sopa cheia', 25], ['escumadeira cheia', 90]]),
  a('macarrao', 'Macarrão cozido (massa de trigo)', G.cereal, 4.4, null, 'vg', [['escumadeira cheia', 110], ['prato raso', 220]]),
  a('cuscuz', 'Cuscuz de milho cozido', G.cereal, 2.2, 533, 'vg', [['fatia média', 100]]),
  a('tapioca', 'Tapioca (só a goma)', G.cereal, 0.1, 551, 'vg', [['unidade média', 60]]),
  a('pipoca', 'Pipoca', G.cereal, 9.9, 61, 'vg', [['xícara', 10]]),
  // Raízes e vegetais
  a('batata', 'Batata cozida', G.outros, 1.2, 91, 'vg', [['unidade média', 130]]),
  a('mandioca', 'Mandioca cozida', G.outros, 0.6, 129, 'vg', [['pedaço médio', 100]]),
  a('brocolis', 'Brócolis cozido', G.outros, 2.1, 100, 'vg', [['ramo', 20], ['xícara', 90]]),
  // Castanhas e sementes
  a('amendoim', 'Amendoim torrado', G.oleag, 22.5, 558, 'vg', [['punhado (30 g)', 30], ['colher de sopa', 15]]),
  a('pasta-amendoim', 'Pasta de amendoim integral (confira o rótulo)', G.oleag, 25.0, null, 'vg', [['colher de sopa', 15]]),
  a('pacoca', 'Paçoca de amendoim', G.oleag, 16.0, 579, 'vg', [['unidade (20 g)', 20]]),
  a('castanha-caju', 'Castanha-de-caju torrada', G.oleag, 18.5, 588, 'vg', [['punhado (30 g)', 30], ['unidade', 2.5]]),
  a('castanha-para', 'Castanha-do-pará', G.oleag, 14.5, 589, 'vg', [['unidade', 4]]),
  a('amendoa', 'Amêndoa torrada', G.oleag, 18.6, 587, 'vg', [['punhado (30 g)', 30]]),
  a('noz', 'Noz', G.oleag, 14.0, 597, 'vg', [['unidade (metades)', 5], ['punhado (30 g)', 30]]),
  a('gergelim', 'Gergelim', G.oleag, 21.2, 593, 'vg', [['colher de sopa', 10]]),
  a('linhaca', 'Linhaça', G.oleag, 14.1, 594, 'vg', [['colher de sopa', 10]]),
  // Opções vegetais e bebidas
  a('bebida-soja', 'Bebida de soja (confira o rótulo)', G.vg, 2.4, 582, 'vg', [['copo (200 ml)', 200]]),
  a('bebida-aveia', 'Bebida de aveia, amêndoa ou arroz (confira o rótulo)', G.vg, 0.5, null, 'vg', [['copo (200 ml)', 200]]),
  a('soja-farinha', 'Farinha de soja', G.vg, 36.0, 581, 'vg', [['colher de sopa', 10]]),
  a('tremoco', 'Tremoço em conserva', G.vg, 11.1, 586, 'vg', [['colher de sopa', 20]]),
  // Pratos e salgados
  a('estrogonofe', 'Estrogonofe de carne', G.prep, 15.0, 537, 'o', [['colher de servir', 80]]),
  a('carreteiro', 'Arroz carreteiro', G.prep, 10.8, 526, 'o', [['escumadeira cheia', 90]]),
  a('baiao', 'Baião de dois', G.prep, 6.2, 527, 'o', [['escumadeira cheia', 90]]),
  a('bolonhesa', 'Macarrão à bolonhesa', G.prep, 4.9, 542, 'o', [['prato raso', 250]]),
  a('quibe', 'Quibe assado', G.prep, 14.6, 440, 'o', [['unidade média', 60]]),
  a('coxinha', 'Coxinha de frango frita', G.prep, 9.6, 386, 'o', [['unidade média', 80]]),
  a('pastel-carne', 'Pastel de carne frito', G.prep, 10.1, 56, 'o', [['unidade média', 80]]),
  a('pastel-queijo', 'Pastel de queijo frito', G.prep, 8.7, 58, 'v', [['unidade média', 80]]),
  // Suplementos (por nome genérico; o rótulo prevalece)
  a('whey', 'Proteína do soro do leite em pó (média de rótulos)', G.sup, 75.0, null, 'v', [['dosador (30 g)', 30]]),
  a('proteina-vegetal', 'Proteína vegetal em pó (ervilha, arroz; média de rótulos)', G.sup, 70.0, null, 'vg', [['dosador (30 g)', 30]]),
  a('colageno', 'Colágeno hidrolisado em pó (proteína incompleta)', G.sup, 90.0, null, 'o', [['colher de sopa (10 g)', 10]]),
];

// Proteína do macarrão cozido: a TACO traz só a massa crua (10,0 g, item 40). Conversão: 100 g de massa crua
// rendem cerca de 230 g cozida, logo 10,0 / 2,3 = 4,4 g por 100 g cozido. Estimativa a conferir na TBCA.
