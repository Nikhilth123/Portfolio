'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github: string
  liveUrl: string
  details: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Online Judge',
    description: 'Competitive programming platform for code submission and evaluation',
    longDescription: 'A competitive programming platform where users can solve algorithmic problems and get instant feedback on their submissions.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    image: 'linear-gradient(135deg, from-blue-600 to-cyan-600)',
    github: '#',
    liveUrl: '#',
    details: [
      'Code execution engine for C++, Python, JavaScript',
      'Problem ranking and difficulty levels',
      'User submission history and leaderboards',
      'Real-time verdict feedback',
    ],
  },
  {
    id: 2,
    title: 'File Sharing App',
    description: 'Secure file sharing platform with real-time synchronization',
    longDescription: 'A file sharing application that enables users to securely share files with real-time updates and notifications.',
    tech: ['React', 'Express', 'Socket.io', 'MongoDB', 'TypeScript'],
    image: 'linear-gradient(135deg, from-purple-600 to-pink-600)',
    github: '#',
    liveUrl: '#',
    details: [
      'Drag-and-drop file uploads',
      'Real-time synchronization across devices',
      'Secure sharing links and access control',
      'File versioning and history',
    ],
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    description: 'Messaging platform with live notifications and user presence',
    longDescription: 'A scalable chat application featuring real-time messaging, user presence indicators, and typing notifications.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'TypeScript'],
    image: 'linear-gradient(135deg, from-green-600 to-blue-600)',
    github: '#',
    liveUrl: '#',
    details: [
      'Real-time bidirectional communication with WebSocket',
      'User online status and typing indicators',
      'Message persistence and search functionality',
      'Group chat and private messaging',
    ],
  },
  {
    id: 4,
    title: 'Web Compiler',
    description: 'Interactive online compiler for code execution',
    longDescription: 'A web-based compiler that allows users to write, compile, and execute code with real-time output visualization.',
    tech: ['React', 'Node.js', 'Express', 'TypeScript'],
    image: 'linear-gradient(135deg, from-orange-600 to-red-600)',
    github: '#',
    liveUrl: '#',
    details: [
      'Support for multiple programming languages',
      'Instant code compilation and execution',
      'Error handling and output display',
      'Clean and intuitive editor interface',
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl border border-muted hover:scale-105 smooth duration-300">
                {/* Project Image */}
                <div
                  className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                  style={{ background: project.image }}
                />

                {/* Project Info */}
                <div className="p-6 bg-card border-t border-muted">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-3 py-1 text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card border border-muted rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card border-b border-muted p-6 flex justify-between items-start">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Header Image */}
                <div
                  className="w-full h-64 rounded-lg"
                  style={{ background: selectedProject.image }}
                />

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-blue-400 mt-1">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-muted">
                  <a
                    href={selectedProject.github}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg border border-muted hover:bg-muted/50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
