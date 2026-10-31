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
    'https://www.doctoralia.com.br/alexandre-okubo/dermatologista-especialista-em-medicina-estetica/sao-paulo',
    'https://www.linkedin.com/in/alexandre-okubo-dermato',
    'https://www.sbd.org.br/membro/?id=5500',
    'https://www.youtube.com/@alexandreokubodermato',
    'https://www.tiktok.com/@alexandreokubo.dermato',
    'https://www.facebook.com/alexandreokubodermato',
    // Perfil pessoal do Google (endereço da Clínica Portugal, Santo André).
    'https://www.google.com/maps?cid=17347299322855016131',
  ],
  instagram: 'https://www.instagram.com/alexandreokubodermato/',
  // Redes exibidas no rodapé (também entram no sameAs acima).
  social: [
    { label: 'Instagram', url: 'https://www.instagram.com/alexandreokubodermato/' },
    { label: 'YouTube', url: 'https://www.youtube.com/@alexandreokubodermato' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@alexandreokubo.dermato' },
    { label: 'Facebook', url: 'https://www.facebook.com/alexandreokubodermato' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexandre-okubo-dermato' },
  ],
};

export const booking = {
  // Agenda única: Doctoralia. Cada clínica também agenda pelo próprio telefone.
  primaryUrl: 'https://www.doctoralia.com.br/alexandre-okubo/dermatologista-especialista-em-medicina-estetica/sao-paulo',
  primaryLabel: 'Agende sua avaliação dermatológica',
};

// Avaliações de pacientes: só link para a plataforma, sem copiar textos nem marcar AggregateRating (CFM e
// política do Google para autoavaliação). URL canônica do perfil, que não muda com a especialidade.
// label completa a frase "Ver avaliações …" na página Sobre.
export const reviews = [
  { label: 'na Doctoralia', url: 'https://www.doctoralia.com.br/perfil/alexandre-okubo#profile-reviews' },
  { label: 'no Google (Santo André)', url: 'https://www.google.com/maps?cid=17347299322855016131' },
  { label: 'no Google (Prime Dermatologia)', url: 'https://www.google.com/maps?cid=5301636228855317904' },
];

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

// Link de rota no Google Maps a partir do nome e do endereço da clínica.
export const mapLink = (loc: { name: string; street: string; city: string; region: string }) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.name}, ${loc.street}, ${loc.city} - ${loc.region}`)}`;

// geo: coordenadas do número do endereço (OpenStreetMap, conferidas em 2026-10-29).
export const locations = [
  {
    slug: 'prime-dermatologia',
    name: 'Prime Dermatologia e Saúde Emocional',
    shortName: 'Prime Dermatologia',
    url: 'https://primedermatologia.com',
    // Perfil da clínica no Google (cid conferido em 2026-10-30).
    maps: 'https://www.google.com/maps?cid=5301636228855317904',
    street: 'Rua Borges Lagoa, 1065, conj. 144',
    district: 'Vila Clementino',
    city: 'São Paulo',
    region: 'SP',
    postalCode: '04038-032',
    geo: { lat: -23.59673, lng: -46.64706 },
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
    district: 'Centro',
    city: 'Santo André',
    region: 'SP',
    postalCode: '09041-320',
    geo: { lat: -23.66863, lng: -46.53824 },
    phone: '(11) 4438-6333',
    whatsapp: false,
    payment: 'Particular e alguns convênios (consulte a clínica)',
    note: 'Dermatologia clínica, cirúrgica e estética. Lasers e luz intensa pulsada, só na Prime.',
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
export const LAST_REVIEWED = '2026-10-25';
