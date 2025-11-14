'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone, Globe, ArrowUpRight, Search, Moon, Sun, ChevronDown, ChevronUp, Code2, Lightbulb } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Logo } from './components/Logo'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiFigma,
  SiPython,
  SiJavascript,
  SiExpress,
  SiPrisma,
  SiFramer
} from 'react-icons/si'

const socialLinks = [
  { name: 'LinkedIn', username: 'eduardo-maciel-wanka', href: 'https://www.linkedin.com/in/eduardo-maciel-wanka-6194a1396', icon: Linkedin, color: '#0A66C2' },
  { name: 'GitHub', username: 'Under Maintenance', href: '#', icon: Github, color: '#fff', disabled: true },
  { name: 'Email', username: 'dudu.wanka@gmail.com', href: 'mailto:dudu.wanka@gmail.com', icon: Mail, color: '#EA4335' },
]

const techStack = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
]

const experiences = [
  {
    company: 'Freelance Developer',
    role: 'Full-Stack Engineer',
    type: 'Full-time',
    period: '2022 — Present',
    icon: '💻',
    description: [
      'Develop and maintain high-performance web applications using React, Next.js, and TypeScript',
      'Build RESTful APIs with Node.js and Express, integrating with PostgreSQL and MongoDB databases',
      'Implement responsive UI/UX designs with TailwindCSS and Framer Motion animations',
      'Collaborate with clients to deliver custom e-commerce solutions and SaaS platforms',
      'Optimize application performance achieving 90+ Lighthouse scores',
      'Deploy and manage applications using Docker and cloud services (Vercel, AWS)',
    ],
    tech: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Docker']
  },
  {
    company: 'Personal Projects',
    role: 'FrontEnd Developer',
    type: 'Part-time',
    period: '2020 — 2022',
    icon: '🚀',
    description: [
      'Created multiple open-source projects with 500+ GitHub stars combined',
      'Built responsive landing pages and web applications for local businesses',
      'Developed interactive dashboards with real-time data visualization using Chart.js',
      'Implemented authentication systems with JWT and OAuth 2.0',
      'Contributed to open-source projects and participated in hackathons',
    ],
    tech: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap', 'Firebase']
  },
  {
    company: 'Learning & Development',
    role: 'Student Developer',
    type: 'Self-taught',
    period: '2019 — 2020',
    icon: '📚',
    description: [
      'Started programming journey at age 11 with HTML, CSS, and JavaScript',
      'Completed online courses on web development fundamentals',
      'Built first personal website and portfolio',
      'Learned Git version control and basic DevOps concepts',
      'Participated in coding challenges and online communities',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub']
  }
]

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
    period: '2024'
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task manager with drag-and-drop, notifications, and team features',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
    period: '2023'
  },
  {
    title: 'Portfolio Generator',
    description: 'SaaS tool that generates beautiful portfolios from GitHub data and markdown files',
    tech: ['Next.js', 'TypeScript', 'GitHub API', 'Vercel'],
    period: '2023'
  }
]

export default function Home() {
  const [expandedExp, setExpandedExp] = useState<number | null>(0)
  const [darkMode, setDarkMode] = useState(true)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') !== 'false'
    setDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Background Pattern - Grid */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: darkMode 
              ? 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
              : 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_50%)]' : 'bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.04),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.04),transparent_50%)]'}`} />
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md transition-colors ${darkMode ? 'bg-black/80 border-zinc-800' : 'bg-white/80 border-zinc-200'} border-b`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className={`${darkMode ? 'text-white' : 'text-black'} hover:opacity-80 transition-opacity`}>
            <Logo />
          </a>
          
          <nav className="flex items-center gap-8">
            <a href="#portfolio" className={`${darkMode ? 'text-white hover:text-zinc-400' : 'text-black hover:text-zinc-600'} transition-colors text-sm font-medium`}>Portfolio</a>
            <a href="#projects" className={`${darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'} transition-colors text-sm`}>Projects</a>
            <a href="#about" className={`${darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'} transition-colors text-sm`}>About</a>
            
            <button className={`flex items-center gap-2 px-3 py-1.5 ${darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'} rounded-md text-sm transition-colors`}>
              <Search className="w-4 h-4" />
              <span>Ctrl K</span>
            </button>
            
            <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-zinc-600' : 'text-zinc-400'} cursor-not-allowed`} title="GitHub under maintenance">
              <Github className="w-4 h-4" />
              <span className="line-through">1K</span>
            </div>
            
            <button 
              onClick={toggleDarkMode}
              className={`p-2 ${darkMode ? 'hover:bg-zinc-900' : 'hover:bg-zinc-100'} rounded-md transition-colors`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Hero */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex flex-col items-center text-center mb-12">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full mb-6 overflow-hidden shadow-2xl ring-4 ring-blue-500/20">
              {!imageError ? (
                <img 
                  src="/avatar.jpg" 
                  alt="Eduardo" 
                  className="w-full h-full object-cover bg-gray-200"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                  ED
                </div>
              )}
            </div>
            <h1 className={`text-4xl font-bold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              Eduardo
              <span className="text-blue-500 text-2xl">✓</span>
            </h1>
            <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Software Enginner & Open Source Contributor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-sm">
            <div className={`flex items-center gap-3 p-3 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-50'} rounded-lg transition-colors`}>
              <Code2 className={`w-4 h-4 ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`} />
              <div>
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>Software Engineer</p>
                <p className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>Working</p>
              </div>
            </div>
            <div className={`flex items-center gap-3 p-3 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-50'} rounded-lg`}>
              <MapPin className={`w-4 h-4 ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`} />
              <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Brazil</p>
            </div>
            <div className={`flex items-center gap-3 p-3 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-50'} rounded-lg`}>
              <Mail className={`w-4 h-4 ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`} />
              <a href="mailto:dudu.wanka@gmail.com" className={`${darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'} transition-colors`}>dudu.wanka@gmail.com</a>
            </div>
            <div className={`flex items-center gap-3 p-3 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-50'} rounded-lg`}>
              <Globe className={`w-4 h-4 ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`} />
              <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>eduardo.dev</p>
            </div>
            <div className={`flex items-center gap-3 p-3 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-50'} rounded-lg`}>
              <Lightbulb className={`w-4 h-4 ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`} />
              <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>5 years of experience</p>
            </div>
            <div className={`flex items-center gap-3 p-3 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-50'} rounded-lg`}>
              <span className={`${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>👤</span>
              <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>he/him • 16 years old</p>
            </div>
          </div>
        </motion.section>

        {/* Social Links */}
        <section className="mb-20">
          <h2 className={`text-sm font-semibold ${darkMode ? 'text-zinc-500' : 'text-zinc-600'} uppercase tracking-wider mb-6`}>Social Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              const isDisabled = link.disabled
              return (
                <motion.a
                  key={link.name}
                  href={isDisabled ? undefined : link.href}
                  target={isDisabled ? undefined : "_blank"}
                  rel={isDisabled ? undefined : "noopener noreferrer"}
                  whileHover={isDisabled ? {} : { scale: 1.02, y: -2 }}
                  className={`flex items-center gap-4 p-6 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'} rounded-xl border transition-all group shadow-lg ${
                    isDisabled 
                      ? 'opacity-60 cursor-not-allowed' 
                      : darkMode ? 'hover:bg-zinc-800 hover:border-zinc-700' : 'hover:bg-zinc-50 hover:border-zinc-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${darkMode ? 'bg-opacity-20' : 'bg-opacity-10'} ${isDisabled ? 'grayscale' : ''}`} style={{ backgroundColor: link.color + (darkMode ? '20' : '10') }}>
                    <Icon className="w-6 h-6" style={{ color: link.name === 'GitHub' && !darkMode ? '#000' : link.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} mb-0.5 flex items-center gap-2`}>
                      {link.name}
                      {isDisabled && <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-500 rounded-full">Maintenance</span>}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{link.username}</p>
                  </div>
                  {!isDisabled && <ArrowUpRight className={`w-5 h-5 ${darkMode ? 'text-zinc-600 group-hover:text-zinc-400' : 'text-zinc-400 group-hover:text-zinc-600'} transition-colors`} />}
                </motion.a>
              )
            })}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-20">
          <h2 className={`text-sm font-semibold ${darkMode ? 'text-zinc-500' : 'text-zinc-600'} uppercase tracking-wider mb-6`}>About</h2>
          <div className="prose prose-invert max-w-none">
            <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed mb-4`}>
              Hello, World! I'm <span className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>Eduardo</span> — a 16-year-old Full-Stack Developer from Brazil with a passion for building exceptional digital experiences that make a difference.
            </p>
            <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed mb-4`}>
              I started my coding journey at the age of <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>11</span>, diving into web development with HTML, CSS, and JavaScript. What began as curiosity quickly became a passion. Over the past <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>5 years</span>, I've evolved from building simple websites to creating full-stack applications with modern technologies like <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>Next.js</span>, <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>React</span>, <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>TypeScript</span>, and <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>Node.js</span>.
            </p>
            <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed mb-4`}>
              I specialize in crafting <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>high-performance web applications</span> with clean, maintainable code. My expertise spans both frontend and backend development, with a strong focus on <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>user experience</span>, <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>responsive design</span>, and <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>performance optimization</span>. I believe that small details matter and every pixel counts when creating digital products.
            </p>
            <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed mb-4`}>
              Beyond coding, I'm an active member of the <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>open-source community</span>, contributing to projects and sharing knowledge. I've built several projects that have gained recognition, with <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>500+ GitHub stars</span> combined. I'm constantly learning new technologies and exploring innovative ways to solve problems.
            </p>
            <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed`}>
              Currently, I work as a <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>freelance developer</span>, helping clients bring their ideas to life through custom web solutions. I'm passionate about creating products that not only look beautiful but also provide real value to users. When I'm not coding, you can find me exploring new frameworks, participating in hackathons, or contributing to the developer community.
            </p>
            <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed mt-6 italic`}>
              💡 Always open to new opportunities, collaborations, and interesting projects. Let's build something amazing together!
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className={`text-sm font-semibold ${darkMode ? 'text-zinc-500' : 'text-zinc-600'} uppercase tracking-wider mb-6`}>Tech Stack</h2>
          <div className="flex flex-wrap gap-6">
            {techStack.map((tech) => {
              const Icon = tech.icon
              const iconColor = tech.name === 'Next.js' || tech.name === 'Express' 
                ? (darkMode ? '#fff' : '#000') 
                : tech.color
              return (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="group cursor-pointer relative"
                  title={tech.name}
                >
                  <Icon 
                    className="w-12 h-12 transition-all drop-shadow-lg"
                    style={{ color: iconColor }}
                  />
                  <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {tech.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-20">
          <h2 className={`text-sm font-semibold ${darkMode ? 'text-zinc-500' : 'text-zinc-600'} uppercase tracking-wider mb-6`}>Featured Projects <sup>({projects.length})</sup></h2>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className={`p-6 ${darkMode ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-800' : 'bg-white hover:bg-zinc-50 border-zinc-200'} rounded-xl border transition-all cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'} transition-colors`}>
                    {project.title}
                  </h3>
                  <span className={`text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>{project.period}</span>
                </div>
                <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-600'} text-sm mb-4`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`px-3 py-1 ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'} rounded-md text-xs`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="portfolio" className="mb-20">
          <h2 className={`text-sm font-semibold ${darkMode ? 'text-zinc-500' : 'text-zinc-600'} uppercase tracking-wider mb-6`}>Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'} rounded-xl border overflow-hidden transition-colors`}>
                <button
                  onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
                  className={`w-full p-6 flex items-start justify-between ${darkMode ? 'hover:bg-zinc-800/50' : 'hover:bg-zinc-50'} transition-colors text-left`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'} flex items-center justify-center text-xl`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-black'} mb-1`}>{exp.role}</h3>
                      <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.company} • {exp.type} • {exp.period}</p>
                    </div>
                  </div>
                  {expandedExp === idx ? (
                    <ChevronUp className={`w-5 h-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`} />
                  )}
                </button>
                
                {expandedExp === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <ul className={`list-disc list-inside space-y-2 mb-4 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'} text-sm ml-14`}>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 ml-14">
                      {exp.tech.map((tech) => (
                        <span key={tech} className={`px-3 py-1 ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'} rounded-md text-xs`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-200'} mt-32 transition-colors`}>
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <p className={`${darkMode ? 'text-zinc-500' : 'text-zinc-600'} text-sm`}>
            Built by Eduardo with Next.js, TypeScript & Framer Motion
          </p>
          <p className={`${darkMode ? 'text-zinc-600' : 'text-zinc-500'} text-xs mt-2`}>
            © 2025 Eduardo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
