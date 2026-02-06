'use client'

import { useState } from 'react'

interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'Socket.io'],
  },
  {
    category: 'Languages',
    icon: '💻',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'C', 'SQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'VS Code', 'Linux', 'Docker', 'Firebase', 'Vercel'],
  },
  {
    category: 'Specializations',
    icon: '🚀',
    skills: ['Full Stack Development', 'Data Structures', 'Competitive Programming', 'System Design'],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    skills: ['Problem Solving', 'Team Collaboration', 'Technical Communication', 'Adaptability'],
  },
]

export  default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              onMouseEnter={() => setHoveredCategory(category.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                aria-hidden="true"
              />

              {/* Card */}
              <div className="relative p-6 rounded-xl border border-muted group-hover:border-muted-foreground/50  backdrop-blur transition-all duration-300 group-hover:bg-purple-300">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={skill}
                      className="transform transition-all duration-300"
                      style={{
                        transitionDelay: `${idx * 50}ms`,
                        opacity: hoveredCategory === null || hoveredCategory === category.category ? 1 : 0.5,
                        transform: hoveredCategory === category.category ? 'translateX(4px)' : 'translateX(0)',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Platforms */}
        <div className="mt-20 space-y-6">
          <h3 className="text-2xl font-bold text-center mb-8">Competitive Programming</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                platform: 'LeetCode',
                icon: '📊',
                url: 'https://leetcode.com',
                color: 'from-orange-500/10 to-orange-600/10 hover:from-orange-500/20 hover:to-orange-600/20 border-orange-500/30 hover:border-orange-500/60',
              },
              {
                platform: 'CodeForces',
                icon: '⭐',
                url: 'https://codeforces.com',
                color: 'from-blue-500/10 to-cyan-600/10 hover:from-blue-500/20 hover:to-cyan-600/20 border-blue-500/30 hover:border-blue-500/60',
              },
              {
                platform: 'CodeChef',
                icon: '🍳',
                url: 'https://www.codechef.com',
                color: 'from-purple-500/10 to-pink-600/10 hover:from-purple-500/20 hover:to-pink-600/20 border-purple-500/30 hover:border-purple-500/60',
              },
            ].map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 rounded-xl border bg-gradient-to-br ${item.color} transition-all duration-300 cursor-pointer hover:scale-105`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-400 transition-colors">{item.platform}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Click to visit profile</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
