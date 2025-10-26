"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const starsRef = useRef<Star[]>([])
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 6000)

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
        })
      }
      starsRef.current = stars
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const numParticles = 20

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3.5 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.2 + 0.1, // Lower opacity for subtlety
        })
      }
      particlesRef.current = particles
    }

    const drawStars = () => {
      starsRef.current.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        // Cyan-teal gradient with subtle flicker
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2)
        gradient.addColorStop(0, `rgba(34, 211, 238, ${0.5 + Math.sin(Date.now() * 0.001 + star.x) * 0.2})`) // cyan-400
        gradient.addColorStop(1, `rgba(20, 184, 166, 0.1)`) // teal-400 with transparency
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    const drawParticles = () => {
      particlesRef.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        // Cyan glow with low opacity
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})` // cyan-400
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(34, 211, 238, 0.3)` // cyan-400 glow
        ctx.fill()
        ctx.shadowBlur = 0 // Reset to avoid affecting other drawings
      })
    }

    const drawConnections = () => {
      const connectionDistance = 150

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            // Gradient line from cyan to teal
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, `rgba(34, 211, 238, ${opacity})`) // cyan-400
            gradient.addColorStop(1, `rgba(20, 184, 166, ${opacity})`) // teal-400
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        // Animate opacity for a floating effect
        particle.opacity = 0.1 + Math.sin(Date.now() * 0.001 + particle.x) * 0.1

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Add subtle radial gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      )
      gradient.addColorStop(0, `rgba(6, 182, 212, 0.08)`) // cyan-500
      gradient.addColorStop(1, `rgba(20, 184, 166, 0.06)`) // teal-400
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawStars()
      updateParticles()
      drawParticles()
      drawConnections()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    createParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createStars()
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}