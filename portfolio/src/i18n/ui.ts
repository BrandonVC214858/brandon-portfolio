/**
 * All translatable UI strings and localizable profile copy, keyed by locale.
 * Language-neutral facts (name, email, phone, links) stay in site.config.ts.
 *
 * Add a string: add the key to BOTH `en` and `es`. `useTranslations` falls
 * back to English if a key is missing in another locale.
 */
export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'Brandon Venegas-Cervantes — Software Engineer',
    'meta.description':
      'Software Engineer in Ciudad Juárez, MX, building high-performance web applications with React, TypeScript, Python and AWS. Experience in fintech, the public sector and e-commerce.',
    'meta.ogLocale': 'en_US',

    'nav.aria': 'Main',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.backToTop': 'Back to top',
    'lang.aria': 'Language',

    'skip': 'Skip to content',
    'aria.tech': 'Technologies used',

    'hero.availability': 'Open to remote roles',
    'hero.role': 'Software Engineer',
    'hero.focus': 'Frontend-leaning full stack',
    'hero.location': 'Ciudad Juárez, Chihuahua, MX',
    'hero.summary':
      'I build reliable, high-performance web applications — fintech onboarding flows, public-sector ERP tooling and e-commerce storefronts. I work across the stack with the React ecosystem on the front, Python and PHP on the back, and AWS in between, with a habit of documenting requirements before writing code.',
    'hero.cta.email': 'Get in touch',
    'hero.cta.github': 'GitHub',

    'entry': 'Entry',
    'section.experience': 'Experience',
    'section.projects': 'Selected projects',
    'section.skills': 'Skills',
    'section.education': 'Education',

    'edu.dates': 'Aug 2021 — Expected 2026',
    'edu.degree': 'B.S. in Software Engineering',
    'edu.school': 'Universidad Autónoma de Ciudad Juárez (UACJ)',
    'edu.note':
      'Thesis: a financial risk compliance engine built with Python, FastAPI and RAG — see Selected projects.',

    'footer.title': "Let's build something reliable.",
    'footer.note':
      'Open to remote frontend and full-stack roles. The fastest way to reach me is email.',
    'footer.builtWith': 'Built with Astro',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinValue': 'Connect',
  },
  es: {
    'meta.title': 'Brandon Venegas-Cervantes — Ingeniero de Software',
    'meta.description':
      'Ingeniero de Software en Ciudad Juárez, MX, que construye aplicaciones web de alto rendimiento con React, TypeScript, Python y AWS. Experiencia en fintech, sector público y e-commerce.',
    'meta.ogLocale': 'es_MX',

    'nav.aria': 'Principal',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'nav.backToTop': 'Volver al inicio',
    'lang.aria': 'Idioma',

    'skip': 'Saltar al contenido',
    'aria.tech': 'Tecnologías utilizadas',

    'hero.availability': 'Disponible para trabajo remoto',
    'hero.role': 'Ingeniero de Software',
    'hero.focus': 'Full stack con enfoque en frontend',
    'hero.location': 'Ciudad Juárez, Chihuahua, México',
    'hero.summary':
      'Construyo aplicaciones web fiables y de alto rendimiento: flujos de onboarding para fintech, herramientas ERP del sector público y tiendas de e-commerce. Trabajo en todo el stack —con el ecosistema de React en el frontend, Python y PHP en el backend, y AWS en medio— con la costumbre de documentar los requisitos antes de escribir código.',
    'hero.cta.email': 'Contáctame',
    'hero.cta.github': 'GitHub',

    'entry': 'Entrada',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos destacados',
    'section.skills': 'Habilidades',
    'section.education': 'Educación',

    'edu.dates': 'Ago 2021 — Egreso previsto 2026',
    'edu.degree': 'Ing. en Software',
    'edu.school': 'Universidad Autónoma de Ciudad Juárez (UACJ)',
    'edu.note':
      'Tesis: un motor de cumplimiento de riesgo financiero construido con Python, FastAPI y RAG — ver Proyectos destacados.',

    'footer.title': 'Construyamos algo confiable.',
    'footer.note':
      'Disponible para roles remotos de frontend y full-stack. La forma más rápida de contactarme es por correo.',
    'footer.builtWith': 'Hecho con Astro',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinValue': 'Conectar',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
