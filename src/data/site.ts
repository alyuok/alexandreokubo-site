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
  role: 'Diretor técnico da Prime Dermatologia e Saúde Emocional',
  education: [
    { year: '1997', title: 'Graduação em Medicina', institution: 'Faculdade de Medicina da Universidade de São Paulo (FMUSP)' },
    { year: '2000', title: 'Residência Médica em Dermatologia', institution: 'Hospital das Clínicas da FMUSP' },
    { year: '2001', title: 'Estágio em Dermatologia', institution: 'University of Michigan, Ann Arbor (EUA)' },
  ],
  memberships: ['Sociedade Brasileira de Dermatologia (SBD)'],
  sameAs: [
    'https://www.instagram.com/alexandreokubodermato/',
    'https://www.doctoralia.com.br/alexandre-okubo/dermatologista-especialista-em-medicina-estetica/santo-andre3',
    'https://www.linkedin.com/in/alexandre-okubo-dermato',
    'https://www.sbd.org.br/membro/?id=5500',
  ],
  instagram: 'https://www.instagram.com/alexandreokubodermato/',
};

export const booking = {
  // Agenda única: Doctoralia. Cada clínica também agenda pelo próprio telefone.
  primaryUrl: 'https://www.doctoralia.com.br/alexandre-okubo/dermatologista-especialista-em-medicina-estetica/santo-andre3',
  primaryLabel: 'Agende sua avaliação dermatológica',
};

// Medição. Vazio = nada é carregado.
// ga4: ID de medição do fluxo web (formato G-XXXXXXXXXX).
// googleAds: ID da tag do Google Ads (formato AW-XXXXXXXXXX), não o número da conta.
// adsConversions: rótulo de cada ação de conversão criada no Google Ads.
export const analytics = {
  ga4: 'G-PYB8EG1D9J',
  googleAds: 'AW-1066674224',
  adsConversions: { whatsapp: 'FKQACKPi-qYdELDQ0PwD', doctoralia: 'AEreCKbi-qYdELDQ0PwD', telefone: '' } as Record<string, string>,
};

// Telefone no formato internacional, para links tel: e dados estruturados.
export const telIntl = (phone: string) => '+55' + phone.replace(/\D/g, '');

// Link de WhatsApp com mensagem inicial.
export const waLink = (phone: string) =>
  `https://wa.me/${telIntl(phone).slice(1)}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta com o Dr. Alexandre Okubo.')}`;

export const locations = [
  {
    slug: 'prime-dermatologia',
    name: 'Prime Dermatologia e Saúde Emocional',
    shortName: 'Prime Dermatologia',
    url: 'https://primedermatologia.com',
    street: 'Rua Borges Lagoa, 1065, conj. 144',
    district: 'Vila Clementino',
    city: 'São Paulo',
    region: 'SP',
    postalCode: '04038-032',
    phone: '(11) 94174-6037',
    whatsapp: true,
    payment: 'Atendimento particular',
    note: 'Dermatologia clínica, cirúrgica e estética.',
  },
  {
    slug: 'clinica-portugal',
    name: 'Clínica Portugal',
    shortName: 'Clínica Portugal',
    url: 'https://www.clinicaportugal.net.br',
    street: 'Av. Portugal, 1676',
    district: 'Jardim Bela Vista',
    city: 'Santo André',
    region: 'SP',
    postalCode: '09041-320',
    phone: '(11) 4438-6333',
    whatsapp: false,
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
