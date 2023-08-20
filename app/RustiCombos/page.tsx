import Image from "next/image";
import banner from "@/public/Images/Banners/RustiCombos.webp"

const RustiCombos = () => {
  return (
    <div className="pt-[90px] w-full dark:bg-zinc-900">
      
      <div className="relative h-[calc(100vh-35rem)] lg:h-[calc(100vh-15rem)]">
        <div className="absolute z-40 h-[calc(100vh-35rem)] lg:h-[calc(100vh-15rem)] inset-0 bg-black opacity-60"></div>
          <span className="absolute z-50 flex items-center justify-center w-full h-[calc(100vh-35rem)] lg:h-[calc(100vh-15rem)] text-4xl lg:text-7xl text-white font-bold">
            RustiCombos
          </span>
        <div className="relative w-full h-[calc(100vh-35rem)] lg:h-[calc(100vh-15rem)]" style={{ clipPath: 'inset(0 0 0 0)'}}>
          <div className="fixed w-full h-full left-0 top-0">
            <Image
              className="object-cover"
              src={banner}
              alt="EntradasYPostres"
              fill
              sizes="100vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-screen">
        a
      </div>
      
    </div>
  );
};

export default RustiCombos;
