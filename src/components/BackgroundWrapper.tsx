/* "use client"

import { useEffect, useState, useRef, ReactNode } from "react"

interface SectionColor {
  id: string;
  color: string;
}

const sections: SectionColor[] = [
  { id: "hero", color: "oklch(0.1776 0 0)" },
  { id: "tecnologias", color: "oklch(0.6109 0.2133 279.82)" },
  { id: "proyectos", color: "oklch(0.7291 0.1778 343.25)" },
  { id: "contacto", color: "oklch(0.9245 0.1257 116.36)" },
]

function interpolateOklch(from: string, to: string, t: number): string {
  const parse = (s: string) => {
    const match = s.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/)
    return match ? [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])] : [0, 0, 0]
  }

  const [l1, c1, h1] = parse(from)
  const [l2, c2, h2] = parse(to)

  let actualH1 = h1
  let actualH2 = h2

  if (c1 < 0.01) actualH1 = h2
  if (c2 < 0.01) actualH2 = h1

  let deltaH = actualH2 - actualH1
  if (deltaH > 180) deltaH -= 360
  else if (deltaH < -180) deltaH += 360

  const l = l1 + (l2 - l1) * t
  const c = c1 + (c2 - c1) * t
  let h = actualH1 + deltaH * t
  h = (h + 360) % 360

  return `oklch(${l.toFixed(4)} ${c.toFixed(4)} ${h.toFixed(4)})`
}

export default function BackgroundWrapper({ children }: { children: ReactNode }) {
  const [bgColor, setBgColor] = useState<string>(sections[0].color)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let animationFrameId: number

    const handleScroll = () => {
      const firstSection = document.getElementById(sections[0].id)
      if (firstSection && firstSection.getBoundingClientRect().top >= 0) {
        setBgColor(sections[0].color)
        return
      }

      for (let i = 1; i < sections.length; i++) {
        const next = document.getElementById(sections[i].id)
        if (!next) continue

        const rect = next.getBoundingClientRect()

        if (rect.top > 0 && rect.top <= window.innerHeight) {
          const startThreshold = window.innerHeight * 0.8
          let progress = 0

          if (rect.top < startThreshold) {
            progress = 1 - (rect.top / startThreshold)
          }

          const newColor = interpolateOklch(sections[i - 1].color, sections[i].color, progress)
          setBgColor(newColor)
          return
        }
      }

      const lastSection = document.getElementById(sections[sections.length - 1].id)
      if (lastSection && lastSection.getBoundingClientRect().top <= 0) {
        setBgColor(sections[sections.length - 1].color)
      }
    }

    const handleParallax = () => {
      if (imgRef.current) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress = window.scrollY / totalScroll
        const opacity = 0.05 + progress * 0.1 // va de 0.05 a 0.15

        imgRef.current.style.transform = `rotate(17deg) translateY(${360 - window.scrollY * 0.2}px) scale(1.6)`
        imgRef.current.style.opacity = opacity.toFixed(3)
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => {
        handleScroll()
        handleParallax()
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    handleScroll()
    handleParallax()

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <main
      style={{ backgroundColor: bgColor }}
      className="min-h-screen w-full relative px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 "
    >
      <div className="fixed w-full h-full pointer-events-none">
        <img ref={imgRef} src='/rulo3.png' className='opacity-5 min-w-[1280px] min-h-[720px] lg:min-w-[1920px] lg:min-h-[1080px] -z-10' />
      </div>
      {children}
    </main>
  )
} */

"use client"

import { useEffect, useRef, ReactNode } from "react"

export default function BackgroundWrapper({ children }: { children: ReactNode }) {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let animationFrameId: number

    const handleParallax = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `rotate(17deg) translateY(${360 - window.scrollY * 0.2}px) scale(1.6)`
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => {
        handleParallax()
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    
    handleParallax()

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <main className="min-h-screen w-full relative px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-hero">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <img 
          ref={imgRef} 
          src='/rulo3.png' 
          aria-hidden="true" 
          className='opacity-5 min-w-[1280px] min-h-[720px] lg:min-w-[1920px] lg:min-h-[1080px]' 
        />
      </div>
      {children}
    </main>
  )
}