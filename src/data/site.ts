import { projectMedia } from './assets'

export const person = {
  fullName: 'Prince Kumar Sahu',
  firstName: 'Prince',
  lastName: 'Kumar Sahu',
  title: 'AI & ML Enthusiast',
  tagline: 'Exploring Intelligence. Engineering Possibilities.',
  location: 'Faridabad, Haryana, India',
  university: 'Manav Rachna University',
  degree: 'B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
  semester: 'First Semester',
  academicYear: '2026',
  email: 'p4426173@gmail.com',
  github: 'https://github.com/Pr595404',
  githubHandle: '@Pr595404',
  linkedin: 'https://linkedin.com/in/prince-sahu-3b3876399',
  linkedinHandle: '/in/prince-sahu-3b3876399',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'exploration', label: 'Exploration' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const

export const intro = {
  short:
    'First-semester CSE (AI & ML) student at Manav Rachna University, building a foundation in programming, web, and practical engineering while exploring how intelligence can be designed into systems.',
  long: `I am Prince Kumar Sahu, a first-semester B.Tech student in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Manav Rachna University. I am at the beginning of my engineering education, and I treat that beginning seriously: learning the language of machines, the discipline of software, and the craft of turning curiosity into working experiments.

My current practice sits at the intersection of programming, web development, and hands-on hardware. I write in C and Python as I learn them. I shape pages with HTML and CSS. I explore AI tools as thinking partners. On the bench, I work with Arduino — lighting LEDs, connecting Bluetooth, and sensing distance.

I am not claiming mastery. I am documenting a trajectory: from first programs to first systems, with a long view toward intelligent software and responsible engineering.`,
  philosophy:
    'Learn in public, build with honesty, and treat every small circuit or program as a rehearsal for larger systems. Intelligence is interesting; engineered possibilities are useful.',
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Software Development',
    'Web Development',
    'Engineering Exploration',
    'Emerging Technologies',
    'Coding',
    'Technology videos',
  ],
}

export const journey = [
  {
    id: 'mru',
    title: 'Starting B.Tech at Manav Rachna University',
    body: 'Began the B.Tech CSE (AI & ML) program, entering a four-year path in computing, intelligence systems, and engineering practice.',
  },
  {
    id: 'c',
    title: 'Beginning programming with C',
    body: 'Started structured programming through C — syntax, logic, and the first discipline of writing instructions a machine can execute.',
  },
  {
    id: 'python',
    title: 'Exploring Python',
    body: 'Began Python as a second language, approaching it as a tool for experimentation, scripts, and future work in data and AI.',
  },
  {
    id: 'web',
    title: 'Learning HTML and CSS',
    body: 'Started shaping interfaces on the web — structure, type, layout — and treating the browser as an engineering medium.',
  },
  {
    id: 'ai-tools',
    title: 'Exploring AI tools',
    body: 'Working with contemporary AI assistants as study partners: Claude, Claude Code, OpenAI Codex, and ChatGPT.',
  },
  {
    id: 'arduino',
    title: 'Building Arduino projects',
    body: 'Moved from screens to circuits: LED systems, Bluetooth control, and ultrasonic sensing on the Arduino Uno.',
  },
  {
    id: 'aiml',
    title: 'Exploring AI, ML and development',
    body: 'Continuing to connect fundamentals — programming, web, and hardware — with the longer study of artificial intelligence and machine learning.',
  },
] as const

export const skillGroups = [
  {
    id: 'programming',
    label: 'Programming',
    items: [
      { name: 'C', status: 'Learning' },
      { name: 'Python', status: 'Beginner / Learning' },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    items: [
      { name: 'HTML', status: 'Learning' },
      { name: 'CSS', status: 'Learning' },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    items: [
      { name: 'AI fundamentals', status: 'Exploring' },
      { name: 'Machine Learning', status: 'Exploring' },
    ],
  },
  {
    id: 'development',
    label: 'Development',
    items: [
      { name: 'VS Code', status: 'In use' },
      { name: 'GitHub', status: 'In use' },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    items: [
      { name: 'Claude', status: 'In use' },
      { name: 'Claude Code', status: 'In use' },
      { name: 'OpenAI Codex', status: 'In use' },
      { name: 'ChatGPT', status: 'In use' },
    ],
  },
  {
    id: 'productivity',
    label: 'Productivity',
    items: [
      { name: 'MS Office', status: 'In use' },
      { name: 'MS Word', status: 'In use' },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    items: [
      { name: 'Teamwork', status: 'Practicing' },
      { name: 'Leadership', status: 'Practicing' },
    ],
  },
] as const

export const exploration = {
  current: [
    {
      title: 'Artificial Intelligence',
      note: 'Building conceptual foundations while using AI tools as study partners.',
    },
    {
      title: 'Machine Learning',
      note: 'Early exploration of how systems learn from data — study, not production models.',
    },
    {
      title: 'Software Development',
      note: 'Learning to write, structure, and reason about programs in C and Python.',
    },
    {
      title: 'Web Development',
      note: 'HTML and CSS as the first layer of interface engineering.',
    },
    {
      title: 'Arduino',
      note: 'Hands-on embedded experiments with LEDs, Bluetooth, and ultrasonic sensing.',
    },
  ],
  future: [
    {
      title: 'IoT',
      note: 'Connecting sensors and software into networks of things.',
    },
    {
      title: 'Embedded Systems',
      note: 'Deeper work at the boundary of hardware and firmware.',
    },
    {
      title: 'Sensor Technologies',
      note: 'Extending beyond ultrasonic ranging into richer sensing stacks.',
    },
  ],
}

export type ProjectId = keyof typeof projectMedia

export const projects = [
  {
    id: 'led-blinking' as const,
    index: '01',
    title: 'Arduino LED Blinking System',
    summary: 'A first hardware program: driving a single LED from an Arduino Uno to understand digital output and timing.',
    objective: 'Learn how a microcontroller can control an LED through a simple blink cycle.',
    components: ['Arduino Uno', 'LED'],
    working:
      'The Arduino Uno is programmed so that a digital pin turns the LED on and off in a repeating cycle. The exercise focuses on wiring a basic output circuit and uploading a sketch that controls pin state over time.',
    technologies: ['Arduino Uno', 'Embedded C / Arduino IDE'],
    outcomes: [
      'Understood digital output on a microcontroller.',
      'Practiced basic circuit wiring for an LED.',
      'Connected a software sketch to a physical result.',
    ],
  },
  {
    id: 'bluetooth-led' as const,
    index: '02',
    title: 'Bluetooth-Controlled LED System',
    summary: 'Extending LED control with a Bluetooth module so the circuit can respond to wireless commands.',
    objective: 'Control LEDs from a paired Bluetooth connection rather than a fixed blink loop.',
    components: ['Arduino Uno', 'Bluetooth module', 'LEDs'],
    working:
      'The Arduino Uno is connected to a Bluetooth module and LEDs. Incoming wireless commands are used to change LED states, introducing serial communication and remote control into the same family of lighting experiments.',
    technologies: ['Arduino Uno', 'Bluetooth', 'Serial communication'],
    outcomes: [
      'Introduced wireless control into a simple circuit.',
      'Practiced pairing a Bluetooth module with Arduino.',
      'Linked a user command to a physical LED response.',
    ],
  },
  {
    id: 'multiple-led' as const,
    index: '03',
    title: 'Multiple LED Blinking System',
    summary: 'Coordinating several LEDs from one Arduino Uno to study sequenced output and timing.',
    objective: 'Drive multiple LEDs in a coordinated blinking pattern.',
    components: ['Arduino Uno', 'Multiple LEDs'],
    working:
      'Several LEDs are wired as outputs from the Arduino Uno. The sketch sequences their on and off states so more than one light can be orchestrated from a single board.',
    technologies: ['Arduino Uno', 'Digital I/O'],
    outcomes: [
      'Scaled a single-LED circuit to multiple outputs.',
      'Practiced sequencing and timing across pins.',
      'Read a small lighting system as a programmed pattern.',
    ],
  },
  {
    id: 'radar-system' as const,
    index: '04',
    title: 'Arduino-Based Radar System',
    summary: 'An ultrasonic sensing experiment that uses distance readings as a first step toward spatial awareness on the bench.',
    objective: 'Use an ultrasonic sensor with an Arduino Uno to detect distance in a radar-style setup.',
    components: ['Arduino Uno', 'Ultrasonic sensor'],
    working:
      'The ultrasonic sensor emits a pulse and measures the return time. The Arduino Uno reads that signal as a distance value, forming a simple radar-style sensing loop.',
    technologies: ['Arduino Uno', 'Ultrasonic sensing'],
    outcomes: [
      'Connected a sensor, not only an actuator.',
      'Interpreted distance as data from hardware.',
      'Framed a beginner radar experiment as sensing plus computation.',
    ],
  },
]

export const workshops = [
  {
    title: 'Technical workshops',
    status: 'Documentation pending',
    note: 'Workshop attendance and certificates will be added here as they are completed and photographed.',
  },
  {
    title: 'College events',
    status: 'Placeholder',
    note: 'Campus events and technical fests will appear in this timeline with real media.',
  },
  {
    title: 'Extracurricular activities',
    status: 'Placeholder',
    note: 'Clubs, leadership practice, and collaborative work will be logged as they happen.',
  },
]
