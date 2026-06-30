/**
 * Language-neutral site metadata and contact facts.
 * Translatable copy (title, description, summary, role, etc.) lives in
 * src/i18n/ui.ts — keep it there, not here.
 */
export const SITE = {
  author: 'Brandon Venegas-Cervantes',
  // Used for canonical URLs, Open Graph and JSON-LD. Keep in sync with astro.config.mjs.
  url: 'https://brandonvc214858.github.io/',
} as const;

export const PROFILE = {
  name: 'Brandon Venegas-Cervantes',
  email: 'brandon.venegas26@gmail.com',
  phone: '+52 656 128 1886',
  github: 'https://github.com/BrandonVC214858',
  // TODO: replace with your real LinkedIn profile URL.
  linkedin: 'https://www.linkedin.com/in/brandonbc/',
} as const;
