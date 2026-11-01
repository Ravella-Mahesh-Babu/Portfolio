const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Ravella Mahesh Babu',
  roleHeadline: 'ECE Graduate building toward frontend & software roles',
  summary:
    'Electronics and Communication Engineering graduate with strong fundamentals in systems, Python, and frontend development. Looking for software roles where analytical thinking from ECE meets clean, usable product work.',
  email: 'maheshravella02@gmail.com',
  phone: '+91-9490885353',
  linkedin: 'https://linkedin.com/in/mahesh-babu-ravella/',
  github: 'https://github.com/Ravella-Mahesh-Babu',
  resumePath: asset('resume/Ravella_Mahesh_Babu_Resume.pdf'),
  photoPath: asset('mahesh.jpg'),
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { label: 'Academic CGPA', value: '9.27' },
  { label: 'Major Projects', value: '2+' },
  { label: 'Core Internship', value: '1' },
  { label: 'Certifications', value: '3' },
]

export const skills = {
  Programming: ['Python', 'JavaScript'],
  Frontend: ['HTML5', 'CSS3', 'Bootstrap 4', 'React'],
  Tools: ['Git', 'VS Code', 'Vivado', 'Arduino'],
  Professional: ['Leadership', 'Communication', 'Adaptability', 'Organization'],
}

export const experience = {
  organization: 'Defense Research and Development Laboratory (DRDL)',
  role: 'Intern',
  duration: 'May 2024 - June 2024',
  points: [
    'Designed embedded systems using Micro Blaze processor architecture.',
    'Worked with Xilinx Vivado and SDK workflow for synthesis and deployment.',
    'Performed end-to-end testing and debugging to ensure reliability.',
    'Optimized system-level performance for improved execution efficiency.',
  ],
}

export const projects = [
  {
    title: 'Design and Implementation of Circular Patch Antenna for Wireless Applications',
    description: [
      'Developed circular patch antennas for wireless communication systems.',
      'Analyzed return loss and VSWR metrics using CST simulation workflows.',
      'Optimized antenna design parameters to improve signal performance.',
    ],
    tech: ['CST Simulation', 'Wireless Communication'],
  },
  {
    title: 'Wireless Charging Station for Electric Vehicles using Solar Energy',
    description: [
      'Built a solar-powered wireless EV charging architecture.',
      'Used Arduino Nano for real-time monitoring and control.',
      'Integrated RFID-based vehicle identification for secure access.',
      'Designed with sustainability and practical energy efficiency in mind.',
    ],
    tech: ['Arduino Nano', 'RFID', 'Solar Energy', 'IoT'],
  },
]

export const certifications = [
  'Python Certificate - Coursera',
  'Hackathon Certificate - FACE Prep',
  'Electric Vehicle Technology Workshop - IEEE',
]

export const education = [
  {
    institution: 'GITAM University',
    year: '2021 - 2025',
    detail: 'B.Tech in Electronics and Communication Engineering',
    score: 'CGPA 9.27',
  },
  {
    institution: 'Sri Chaitanya Junior College',
    year: '2019 - 2021',
    detail: 'Intermediate Education',
    score: '96.6%',
  },
  {
    institution: 'Triveni Talent School',
    year: '2019',
    detail: 'Secondary School Education',
    score: 'GPA 9.8',
  },
]
