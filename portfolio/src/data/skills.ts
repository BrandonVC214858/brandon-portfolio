/**
 * Skill groups rendered in the Skills section.
 * Add or reorder groups here; the UI maps over this array.
 */
export interface SkillGroup {
  label: string;
  code: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    code: 'FE',
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
    code: 'BE',
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
    code: 'OPS',
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
    code: 'PRC',
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
    code: 'LNG',
    items: ['Spanish (native)', 'English (professional working proficiency)'],
  },
];
