
import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      
     
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 " />
        <div className="absolute top-20 right-10 w-72 h-72  rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72  rounded-full blur-3xl animate-pulse" />
      </div>

      <div
        className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        
        <h1 className="text-5xl md:text-7xl font-bold text-pretty leading-tight">
          <span
            className="
              bg-gradient-to-r
              from-[#6aa7ff]
              via-[#a78bfa]
              to-[#8b9bff]
              bg-clip-text
              text-transparent
              animate-pulse
            "
          >
            Full Stack Developer
          </span>
        </h1>

     
        <p className="text-lg md:text-2xl text-muted-foreground font-light">
          BTech Information Technology from IIEST Shibpur
        </p>

    
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          I craft beautiful, performant web experiences. Passionate about competitive
          programming, scalable architecture, and building products that matter.
        </p>

       
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition-transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-muted-foreground hover:bg-muted/40 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

    
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
