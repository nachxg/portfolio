import { ArrowDownRight } from "lucide-react"
import Link from 'next/link'
import HeroDeco from "../HeroDeco"

const Hero = () => {
  return (
    <section id="hero" className="lg:min-h-screen flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center lg:gap-10 xl:gap-20 @container">
      <div className="my-auto z-10">
        <div className="w-full lg:w-[clamp(20rem,30vw,32.5rem)] @container flex flex-col">
          
          <div className="flex flex-row w-full justify-start items-center leading-none">
            <h1 className="text-[26cqw] font-mono font-black tracking-tighter m-0 p-0">
              NACH
            </h1>
            <span className="flex-1 border-[4cqw] border-contact rounded-full ml-[1cqw] mt-1 h-[19cqw]" />
          </div>

          <h2 className="flex justify-around w-full text-[9.5cqw] font-mono font-black tracking-tighter whitespace-nowrap mt-[-3cqw] leading-none">
            <span>FULL</span>
            <span>STACK</span>
            <span className="text-tech">DEVELOPER</span>
          </h2>

          <p className="my-6 text-lg leading-tight font-raleway px-[1cqw]">
            ¡Hola! Mi nombre es Ignacio Gimenez (o Nacho, para los amiguis). Soy un desarrollador web full stack enfocado en frontend viviendo en Córdoba, Argentina. Me gusta diseñar cosas lindas y que funcionen bien. Actualmente estudiando Ciencias de la Computación y trabajando de forma freelance.
          </p>

          <Link href='#tecnologias' className="w-fit text-3xl text-contact cursor-pointer group px-[0.8cqw] slide-in-from-bottom">
            <span className="group-hover:underline">
              Chusmeame
            </span>
            <ArrowDownRight className="inline-block self-center transition-transform group-hover:translate-y-1 group-hover:translate-x-1" size={30} strokeWidth={1.75} />
          </Link>

        </div>
      </div>

      <HeroDeco />

    </section>
  )
}

export default Hero