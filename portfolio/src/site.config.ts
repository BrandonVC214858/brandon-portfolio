/**
 * Single source of truth for site-wide metadata and personal info.
 * Update values here once — every component reads from this file.
 */
export const SITE = {
  title: 'Brandon Venegas Cervantes — Software Engineer',
  description:
    'Software Engineer in Ciudad Juárez, MX, building high-performance web applications with React, TypeScript, Python and AWS. Experience in fintech, the public sector and e-commerce.',
  author: 'Brandon Venegas Cervantes',
  locale: 'en',
  // Used for canonical URLs, Open Graph and JSON-LD. Keep in sync with astro.config.mjs.
  url: 'https://brandonvc214858.github.io/',
} as const;

export const PROFILE = {
  name: 'Brandon Venegas Cervantes',
  role: 'Software Engineer',
  focus: 'Frontend-leaning full stack',
  location: 'Ciudad Juárez, Chihuahua, MX',
  email: 'brandon.venegas26@gmail.com',
  phone: '+52 656 128 1886',
  github: 'https://github.com/BrandonVC214858',
  // TODO: replace with your real LinkedIn profile URL.
  linkedin: 'https://www.linkedin.com/in/brandonbc/',
  summary:
    'I build reliable, high-performance web applications — fintech onboarding flows, public-sector ERP tooling and e-commerce storefronts. I work across the stack with the React ecosystem on the front, Python and PHP on the back, and AWS in between, with a habit of documenting requirements before writing code.',
  availability: 'Open to remote roles',
} as const;
