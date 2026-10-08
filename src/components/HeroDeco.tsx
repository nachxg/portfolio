import { Search } from 'lucide-react'

const HeroDeco = () => {
    return (
        <div className="w-full mt-[20cqw] mb-[5cqw] lg:my-0 xl:max-w-6xl xl:h-auto relative flex items-center justify-center @container z-0">
            <div className="bg-tech bg-[url('/paint-texture.png')] bg-left
             bg-blend-overlay h-[40cqw] w-[65cqw] rounded-[2cqw] flex items-end z-1">
                <img src="/marco-foto.png" alt="" className="h-[24cqw] ml-[3cqw] mb-[7cqw]" />
                <img src="/yop-crop.png" alt="" className="h-[27cqw] ml-[2.12cqw] mb-[7.05cqw] absolute grayscale" />
                <div className='h-[20cqw] w-full mx-[2.5cqw] mb-[7cqw] z-2 flex flex-col'>
                    <div className='w-[25cqw] h-[2cqw] bg-white mt-[2cqw]'></div>
                    <div className='w-[30cqw] h-[.5cqw] bg-white mt-[1cqw]'></div>
                    <div className='w-[30cqw] h-[.5cqw] bg-white mt-[1cqw]'></div>
                    <div className='flex flex-1 flex-row items-end gap-[2cqw]'>
                        <img src="/personita.png" alt="" className='h-[11cqw]' />
                        <img src="/sobre.png" alt="" className='h-[11cqw]' />
                    </div>
                </div>
            </div>
            <img src="/navegador.png" alt="" className="absolute h-[45cqw] mb-[15cqw] z-2" />
            <img src="/code-icono.png" alt="" className="absolute h-[20cqw] mb-[50cqw] ml-[10cqw] z-3 animate-float animation-duration-[4s]" />
            <img src="/grid.png" alt="" className="absolute h-[40cqw] mt-[40cqw] ml-[60cqw]" />
            <img src="/circulo-rosa.png" alt="" className="absolute rounded-full size-[25cqw] mb-[50cqw] mr-[70cqw]" />
            <img src="/estrella-picos2.png" alt="" className="absolute z-3 h-[20cqw] mt-[50cqw] ml-[60cqw]" />
            <img src="/mano-lapiz.png" className="z-3 absolute mr-[76cqw] mt-[30cqw] h-[20cqw] animate-float" />
            <img src="/estrella-asterisco.png" alt="" className="absolute h-[7cqw] mr-[95cqw] mb-[7cqw]" />
            <img src="/mano-pinching.png" alt="" className="z-3 absolute ml-[60cqw] mb-[20cqw] h-[20cqw] animate-float animation-duration-[5s]" />
            <div className="absolute h-[3cqw] w-[30cqw] rounded-full bg-white z-20 mb-[16.5cqw] ml-[11.5cqw] flex items-center justify-start animate-float animation-duration-[5s]">
                <Search color="#000000" className='ml-[.5cqw] size-[2.4cqw]' />
            </div>

            <div className="lg:hidden absolute -bottom-[49cqw] overflow-clip w-screen h-[50cqw] bg-gradient-to-t from-transparent via-background via-60% to-transparent z-3 pointer-events-none" />
            <img src="/triangulito.png" alt="" className="absolute mt-[60cqw] ml-[20cqw] h-[6cqw] animate-float animation-duration-[4s]" />
            <img src="/tuerca-azul.png" alt="" className="absolute ml-[95cqw] mb-[30cqw] h-[10cqw]" />
            <img src="/tuerca-rosa.png" alt="" className="absolute mt-[55cqw] mr-[55cqw] h-[7cqw]" />
        </div>
    )
}

export default HeroDeco