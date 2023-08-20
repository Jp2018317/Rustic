import Image from "next/image";
import banner from "@/public/Images/Banners/InitialBanner.webp"
import { alfaSlabOne } from "@/fonts";

export default function Home() {
  return (
    <div className="pt-[90px] w-full dark:bg-zinc-900">
      
      <div className="relative h-[calc(100vh-25rem)] lg:h-[calc(100vh-10rem)]">
        <div className="absolute z-40 h-[calc(100vh-25rem)] lg:h-[calc(100vh-10rem)] inset-0 bg-black opacity-60"></div>
          <div className="absolute z-50 flex items-center justify-center w-full h-[calc(100vh-25rem)] lg:h-[calc(100vh-10rem)]">
            <div className={alfaSlabOne.className}>
                <div className={`text-6xl lg:text-9xl text-white ${alfaSlabOne.className}`}>
                  RUSTIC
                </div>
                <div className="text-lg lg:text-4xl text-center text-white">
                  Sport Bar
                </div>
            </div>
          </div>
        <div className="relative w-full h-[calc(100vh-25rem)] lg:h-[calc(100vh-10rem)]" style={{ clipPath: 'inset(0 0 0 0)'}}>
          <div className="fixed w-full h-full left-0 top-0">
            <Image
              className="object-cover bottom"
              src={banner}
              alt="Home"
              fill
              sizes="100vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}
