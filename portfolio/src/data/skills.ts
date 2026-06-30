/**
 * Skill groups rendered in the Skills section, per locale.
 * Pick with skillGroups[lang]; the UI maps over the array.
 * Tech names are proper nouns and stay the same — only labels and a few
 * descriptive items are translated.
 */
import type { Lang } from '../i18n/ui';

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: Record<Lang, SkillGroup[]> = {
  en: [
    {
      label: 'Frontend',
      items: [
        'React',
        'TypeScript',
        'JavaScript',
        'Astro',
        'Vite',
        'React Query',
        'TailwindCSS',
        'HTML5 / CSS3',
        'Responsive design',
      ],
    },
    {
      label: 'Backend',
      items: [
        'Python (FastAPI, Django)',
        'PHP (Laravel)',
        'REST APIs',
        'JWT auth',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
      ],
    },
    {
      label: 'Cloud & DevOps',
      items: [
        'AWS (Amplify, EC2, Rekognition)',
        'Cloudflare R2',
        'Docker / Podman',
        'CI/CD pipelines',
        'Linux',
        'Git / GitHub',
      ],
    },
    {
      label: 'Practices',
      items: [
        'Agile / Scrum',
        'Unit testing',
        'Code reviews',
        'SRS & ER diagrams',
        'Figma prototyping',
        'Technical documentation',
      ],
    },
    {
      label: 'Languages',
      items: ['Spanish (native)', 'English (professional working proficiency)'],
    },
  ],
  es: [
    {
      label: 'Frontend',
      items: [
        'React',
        'TypeScript',
        'JavaScript',
        'Astro',
        'Vite',
        'React Query',
        'TailwindCSS',
        'HTML5 / CSS3',
        'Diseño responsivo',
      ],
    },
    {
      label: 'Backend',
      items: [
        'Python (FastAPI, Django)',
        'PHP (Laravel)',
        'APIs REST',
        'Autenticación JWT',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
      ],
    },
    {
      label: 'Cloud & DevOps',
      items: [
        'AWS (Amplify, EC2, Rekognition)',
        'Cloudflare R2',
        'Docker / Podman',
        'Pipelines CI/CD',
        'Linux',
        'Git / GitHub',
      ],
    },
    {
      label: 'Prácticas',
      items: [
        'Agile / Scrum',
        'Pruebas unitarias',
        'Revisiones de código',
        'Diagramas SRS y ER',
        'Prototipado en Figma',
        'Documentación técnica',
      ],
    },
    {
      label: 'Idiomas',
      items: ['Español (nativo)', 'Inglés (competencia profesional de trabajo)'],
    },
  ],
};
