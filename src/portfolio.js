const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Portfolio.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kennedy Mwangi',
  role: 'Full stack Engineer',
  description:
    'Am a full stack engineer with four years of experience.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/mwangikibui/',
    github: 'https://github.com/mwangiKibui',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Chamasoft',
    description:
      'Investment group management software.',
    stack: ['PHP','Jenkins','Github Web Hooks','Jenkins'],
    sourceCode: 'https://github.com',
    livePreview: 'https://chamasoft.com',
  },
  {
    name: 'Websacco',
    description:
      'Financial solution for small to medium sized saccos.',
    stack: ['PHP', 'Jenkins', 'Github Web Hooks', 'Jenkins'],
    sourceCode: 'https://github.com',
    livePreview: 'https://websacco.com',
  },
  {
    name: 'JustPostIt',
    description:
      'A fake HTTP client for simulating POST requests',
    stack: ['Supabase', 'NextJS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://justpostit.dev',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Git',
  'CI/CD',
  'ASP.Net'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kenmwangi250@gmail.com',
}

export { header, about, projects, skills, contact }
