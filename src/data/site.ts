// Dados canônicos da entidade. Tudo que aparece no site, no schema e nos
// perfis externos deve sair daqui, com grafia idêntica.
// Itens marcados PENDENTE ainda precisam de confirmação antes de publicar.

export const SITE_URL = 'https://alexandreokubo.com.br';

export const doctor = {
  name: 'Dr. Alexandre Okubo',
  legalName: 'Alexandre Yuji Okubo',
  specialty: 'Dermatologista',
  crm: 'CRM-SP 90.743',
  rqe: 'RQE 30.051',
  // PENDENTE: confirmar cargo oficial (diretor técnico x diretor clínico).
  role: 'Diretor técnico da Prime Dermatologia e Saúde Emocional',
  education: [
    { year: '1997', title: 'Graduação em Medicina', institution: 'Faculdade de Medicina da Universidade de São Paulo (FMUSP)' },
    { year: '2000', title: 'Residência Médica em Dermatologia', institution: 'Hospital das Clínicas da FMUSP' },
    { year: '2001', title: 'Estágio em Dermatologia', institution: 'University of Michigan, Ann Arbor (EUA)' },
  ],
  memberships: ['Sociedade Brasileira de Dermatologia (SBD)'],
  sameAs: [
    'https://www.instagram.com/alexandreokubodermato/',
    'https://www.doctoralia.com.br/alexandre-yuji-okubo/dermatologista-medico-clinico-geral/sao-paulo',
    // PENDENTE: LinkedIn, perfil SBD, Lattes.
  ],
  instagram: 'https://www.instagram.com/alexandreokubodermato/',
};

export const booking = {
  // Canal principal hoje: Doctoralia (agenda centralizada).
  // PENDENTE: WhatsApp da Prime para particulares.
  primaryUrl: 'https://www.doctoralia.com.br/alexandre-yuji-okubo/dermatologista-medico-clinico-geral/sao-paulo',
  primaryLabel: 'Agende sua avaliação dermatológica',
  whatsapp: null as string | null,
};

export const locations = [
  {
    slug: 'prime-dermatologia',
    name: 'Prime Dermatologia e Saúde Emocional',
    shortName: 'Prime Dermatologia',
    url: 'https://primedermatologia.com',
    street: 'Rua Borges Lagoa, 1065, conj. 144', // PENDENTE: confirmar conjunto e CEP
    district: 'Vila Clementino',
    city: 'São Paulo',
    region: 'SP',
    postalCode: '', // PENDENTE
    phone: '', // PENDENTE
    payment: 'Atendimento particular',
    note: 'Dermatologia clínica, cirúrgica e estética.',
  },
  {
    slug: 'clinica-portugal',
    name: 'Clínica Portugal',
    shortName: 'Clínica Portugal',
    url: 'https://www.clinicaportugal.net.br',
    street: 'Av. Portugal, 1676',
    district: '', // PENDENTE
    city: 'Santo André',
    region: 'SP',
    postalCode: '', // PENDENTE
    phone: '', // PENDENTE
    payment: 'Particular e alguns convênios (consulte a clínica)',
    note: 'Dermatologia clínica e cirúrgica.',
  },
];

export const nav = [
  { href: '/sobre/', label: 'Sobre' },
  { href: '/abordagem/', label: 'Abordagem' },
  { href: '/dermatologia-clinica/', label: 'Clínica' },
  { href: '/cirurgia-dermatologica/', label: 'Cirurgia' },
  { href: '/dermatologia-estetica/', label: 'Estética' },
  { href: '/onde-atendo/', label: 'Onde atendo' },
  { href: '/blog/', label: 'Blog' },
];

// Data da última revisão médica do conteúdo institucional.
export const LAST_REVIEWED = '2026-10-21';
