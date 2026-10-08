import Hero from "@/components/sections/Hero"
import Tecnologias from "@/components/sections/Tecnologias"
import Proyectos from "@/components/sections/Proyectos"
import Contacto from "@/components/sections/Contacto"
import BackgroundWrapper from "@/components/BackgroundWrapper"

export default function Home() {
  return (
      <BackgroundWrapper>
        <Hero />
        <Proyectos />
        <Contacto />
      </BackgroundWrapper>
  )
}