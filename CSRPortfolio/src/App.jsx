import { useEffect, useState } from 'react'
import './App.css'

const profile = {
  name: 'Mohd Zeeshan Quraishi',
  role: 'Full Stack Developer',
  email: 'your.email@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  resumeUrl: '/MOHD%20Zeeshan%20Quraishi.pdf',
  intro:
    'I build responsive, practical web applications with a focus on clean UI, structured logic, and full-stack fundamentals.',
}

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Server routing', 'Static assets'],
  },
  {
    title: 'Workflow',
    items: ['Git', 'Vite', 'Component structure', 'Debugging', 'Deployment basics'],
  },
  {
    title: 'Strengths',
    items: ['Problem solving', 'Fast learning', 'Ownership', 'Communication', 'Consistency'],
  },
]

const projects = [
  {
    name: 'CSR React Portfolio',
    tag: 'React + Vite',
    text: 'A single-page client-side portfolio with reusable data, smooth section navigation, theme switching, and a static resume download.',
  },
  {
    name: 'Express Portfolio',
    tag: 'Node.js + EJS',
    text: 'A server-rendered monolithic portfolio that explains skills, serves static files, and renders HTML through Express routes.',
  },
  {
    name: 'Cloud Technology Training',
    tag: 'Training experience',
    text: 'Hands-on learning around cloud concepts, project structure, and presenting technical work in a professional way.',
  },
]

const journey = [
  'Learning by building complete web experiences instead of only isolated examples.',
  'Improving frontend polish while also understanding backend routes and file serving.',
  'Preparing for internships, freelance work, and entry-level development opportunities.',
]

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme || (prefersDark ? 'dark' : 'light')
  })

  // React updates the root data attribute whenever theme state changes.
  // CSS variables then repaint the whole page without needing a reload.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="portfolio-app">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home section">
          <span className="brand-mark">ZQ</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="theme-toggle" type="button" onClick={toggleTheme}>
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Client-side React portfolio</p>
            <h1>Full-stack fundamentals with a clean product mindset.</h1>
            <p className="hero-text">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={profile.resumeUrl} download>
                Download Resume
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="capability-panel" aria-label="Capability summary">
            <div className="capability-card large-card">
              <p className="card-label">Currently capable of</p>
              <h2>React interfaces, Express basics, and complete portfolio delivery.</h2>
              <p>
                This version is a CSR application: Vite sends one HTML shell, React mounts in the
                browser, and the UI is created from components and JavaScript data.
              </p>
            </div>

            <div className="mini-grid">
              <article>
                <strong>React</strong>
                <span>Component-based UI</span>
              </article>
              <article>
                <strong>CSR</strong>
                <span>Browser-rendered app</span>
              </article>
              <article>
                <strong>Resume</strong>
                <span>Static PDF asset</span>
              </article>
            </div>
          </aside>
        </section>

        <section className="section-shell split-section" id="skills">
          <div className="section-intro">
            <p className="eyebrow">Skills</p>
            <h2>What I can work with right now.</h2>
            <p>
              The content below comes from arrays in React, so you can add, remove, or rename skills
              by editing JavaScript data instead of repeating HTML manually.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects that show practical ability.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <span>{project.tag}</span>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell split-section" id="journey">
          <div className="section-intro">
            <p className="eyebrow">Journey</p>
            <h2>A focused path into professional development.</h2>
            <p>
              This page keeps the story honest: you are learning, building, and becoming ready for
              real projects through consistent practice.
            </p>
          </div>

          <div className="timeline">
            {journey.map((item, index) => (
              <article className="timeline-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Open to useful work and serious learning.</h2>
              <p>
                I am interested in internships, entry-level web development roles, freelance
                projects, and collaborations where I can contribute while improving.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              <a className="button button-secondary" href={profile.github} target="_blank">
                GitHub
              </a>
              <a className="button button-secondary" href={profile.linkedin} target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
