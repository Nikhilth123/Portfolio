'use client'

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Main About Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              I'm a full-stack web developer and student at IIEST Shibpur pursuing BTech in Information Technology. I'm passionate about building scalable applications and solving complex problems with clean, efficient code.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Education</h3>
              <div className="border-l-2 border-blue-500 pl-6 space-y-4">
                <div>
                  <h4 className="text-xl font-bold">BTech Information Technology</h4>
                  <p className="text-blue-400 text-sm font-medium">IIEST Shibpur</p>
                  <p className="text-muted-foreground text-sm mt-1">Currently pursuing</p>
                </div>
              </div>
            </div>

            {/* What I Do */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">What I Do</h3>
              <div className="space-y-3">
                {[
                  'Build full-stack web applications',
                  'Design scalable backend systems',
                  'Create responsive user interfaces',
                  'Solve algorithmic problems',
                  'Contribute to open source',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
