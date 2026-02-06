'use client'

import React from "react"

import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and discussing technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-muted focus:border-blue-500 focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-muted focus:border-blue-500 focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-muted focus:border-blue-500 focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-primary-foreground'
                }`}
              >
                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>

            {/* Direct Email */}
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-muted hover:border-blue-500/50 hover:bg-secondary/30 transition-all duration-300">
                <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">your.email@example.com</p>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-blue-400 text-sm hover:underline mt-2 inline-block"
                  >
                    Send an email →
                  </a>
                </div>
              </div>
            </div>

            {/* Message on LinkedIn */}
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-muted hover:border-blue-500/50 hover:bg-secondary/30 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">LinkedIn</h4>
                  <p className="text-muted-foreground">Connect with me on LinkedIn</p>
                  <a
                    href="https://linkedin.com"
                    className="text-blue-400 text-sm hover:underline mt-2 inline-block"
                  >
                    View profile →
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-muted hover:border-blue-500/50 hover:bg-secondary/30 transition-all duration-300">
                <Github className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">GitHub</h4>
                  <p className="text-muted-foreground">Check out my open source work</p>
                  <a
                    href="https://github.com"
                    className="text-blue-400 text-sm hover:underline mt-2 inline-block"
                  >
                    Visit GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <p className="font-semibold">Available for opportunities</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently open to internship and placement opportunities. Excited to work on challenging projects.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links Footer */}
        <div className="mt-16 pt-12 border-t border-muted text-center">
          <p className="text-muted-foreground mb-6">Follow me on social media</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, label: 'GitHub', url: 'https://github.com' },
              { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
              { icon: Mail, label: 'Email', url: 'mailto:your.email@example.com' },
            ].map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-lg border border-muted hover:border-blue-500 hover:bg-secondary/50 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
