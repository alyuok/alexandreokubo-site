// Cálculo da necessidade diária de proteína. Fontes conferidas no PubMed (resumos originais):
// - RDA 0,8 g/kg/dia: referência geral para adultos (citada no artigo suplemento-cabelo-unha-proteina).
// - PROT-AGE (Bauer 2013, doi 10.1016/j.jamda.2013.05.021): >65 anos, 1,0 a 1,2 g/kg; ativos, >= 1,2 g/kg.
// - ISSN (Jäger 2017, doi 10.1186/s12970-017-0177-8): quem se exercita, 1,4 a 2,0 g/kg; por refeição, 0,25 g/kg ou 20 a 40 g.
// - Morton 2018 (doi 10.1136/bjsports-2017-097608): acima de ~1,6 g/kg não houve ganho adicional de massa magra.
// - Leidy 2015 (doi 10.3945/ajcn.114.084038): emagrecimento, 1,2 a 1,6 g/kg e cerca de 25 a 30 g por refeição.
// - Dam 2021 (doi 10.1016/j.clnesp.2021.06.012): no IMC > 30, o peso total superestima a necessidade.
//   Por isso, com IMC >= 30 usamos o peso correspondente ao IMC 25 (peso de referência).

export type Sexo = 'f' | 'm';
export type Atividade = 'sedentario' | 'leve' | 'moderado' | 'intenso';
export type Objetivo = 'manter' | 'massa' | 'emagrecer' | 'caneta';

export interface Perfil {
  sexo: Sexo;
  idade: number;
  peso: number; // kg
  altura: number; // cm
  atividade: Atividade;
  objetivo: Objetivo;
}

export interface Resultado {
  imc: number;
  faixaImc: string;
  pesoRef: number;
  usouPesoRef: boolean;
  gkgMin: number;
  gkgMax: number;
  minimo: number;
  maximo: number;
  alvo: number;
  porRefeicao: number;
  base: string;
}

const r5 = (n: number) => Math.round(n / 5) * 5;

export function faixaImc(imc: number) {
  if (imc < 18.5) return 'abaixo do peso';
  if (imc < 25) return 'peso adequado';
  if (imc < 30) return 'sobrepeso';
  return 'obesidade';
}

// Faixas em g/kg do peso de referência.
function faixa(p: Perfil): [number, number, string] {
  const idoso = p.idade >= 65;
  const ativo = p.atividade === 'moderado' || p.atividade === 'intenso';
  switch (p.objetivo) {
    case 'massa':
      return idoso ? [1.2, 1.6, 'PROT-AGE e ISSN'] : [1.6, 2.0, 'ISSN e Morton 2018'];
    case 'emagrecer':
    case 'caneta':
      return p.atividade === 'intenso' && !idoso ? [1.6, 2.0, 'ISSN'] : [1.2, 1.6, 'Leidy 2015'];
    default:
      if (idoso) return ativo ? [1.2, 1.5, 'PROT-AGE'] : [1.0, 1.2, 'PROT-AGE'];
      if (p.atividade === 'intenso') return [1.4, 1.8, 'ISSN'];
      if (p.atividade === 'moderado') return [1.0, 1.4, 'RDA e ISSN'];
      return [0.8, 1.0, 'RDA'];
  }
}

export function calcular(p: Perfil): Resultado {
  const m = p.altura / 100;
  const imc = p.peso / (m * m);
  const usouPesoRef = imc >= 30;
  const pesoRef = usouPesoRef ? 25 * m * m : p.peso;
  const [gkgMin, gkgMax, base] = faixa(p);
  const minimo = Math.round(pesoRef * gkgMin);
  const maximo = Math.round(pesoRef * gkgMax);
  const alvo = r5((minimo + maximo) / 2);
  const porRefeicao = Math.min(40, Math.max(20, r5(pesoRef * 0.25)));
  return { imc, faixaImc: faixaImc(imc), pesoRef, usouPesoRef, gkgMin, gkgMax, minimo, maximo, alvo, porRefeicao, base };
}
