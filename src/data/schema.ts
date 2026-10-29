import { SITE_URL, doctor, locations, LAST_REVIEWED, telIntl, mapLink } from './site';

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const clinicId = (slug: string) => `${SITE_URL}/onde-atendo/${slug}/#clinic`;

export function clinicSchema(loc: (typeof locations)[number]) {
  return {
    '@type': 'MedicalClinic',
    '@id': clinicId(loc.slug),
    name: loc.name,
    url: loc.url,
    medicalSpecialty: 'Dermatology',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.region,
      addressCountry: 'BR',
      ...(loc.postalCode && { postalCode: loc.postalCode }),
    },
    geo: { '@type': 'GeoCoordinates', latitude: loc.geo.lat, longitude: loc.geo.lng },
    hasMap: mapLink(loc),
    ...(loc.phone && { telephone: telIntl(loc.phone) }),
  };
}

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: doctor.name,
    alternateName: doctor.legalName,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/dr-alexandre-okubo-medico-dermatologista.jpg`,
    jobTitle: doctor.specialty,
    hasOccupation: { '@type': 'Occupation', name: 'Dermatologista' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Faculdade de Medicina da Universidade de São Paulo' },
      { '@type': 'CollegeOrUniversity', name: 'University of Michigan' },
    ],
    memberOf: { '@type': 'MedicalOrganization', name: 'Sociedade Brasileira de Dermatologia', url: 'https://www.sbd.org.br/' },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Registro profissional', name: doctor.crm, recognizedBy: { '@type': 'Organization', name: 'Conselho Regional de Medicina do Estado de São Paulo' } },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Registro de Qualificação de Especialista', name: `${doctor.rqe} — Dermatologia` },
    ],
    knowsAbout: ['Dermatologia clínica', 'Cirurgia dermatológica', 'Dermatologia estética', 'Tricologia', 'Medicina do Estilo de Vida'],
    worksFor: locations.map((l) => ({ '@id': clinicId(l.slug) })),
    sameAs: doctor.sameAs,
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: doctor.name,
    inLanguage: 'pt-BR',
    publisher: { '@id': PERSON_ID },
  };
}

export function medicalPageSchema(opts: { url: string; name: string; description: string; about?: string[]; lastReviewed?: string }) {
  return {
    '@type': 'MedicalWebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': WEBSITE_ID },
    author: { '@id': PERSON_ID },
    reviewedBy: { '@id': PERSON_ID },
    lastReviewed: opts.lastReviewed ?? LAST_REVIEWED,
    ...(opts.about && { about: opts.about.map((name) => ({ '@type': 'MedicalCondition', name })) }),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}
