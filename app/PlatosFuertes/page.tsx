import Image from "next/image";
import banner from "@/public/Images/Banners/PlatosFuertes.webp";

const PlatosFuertes = () => {
  return (
    <div className="pt-[90px] w-full dark:bg-zinc-900">
      <div className="relative h-[calc(100dvh-20rem)] sm:h-[calc(100dvh-10rem)] min-h-[30rem]">
        <div className="absolute z-40 h-[calc(100dvh-20rem)] sm:h-[calc(100dvh-10rem)] min-h-[30rem] inset-0 bg-black opacity-60" />
        <span className="absolute z-50 flex text-center items-center justify-center w-full h-[calc(100dvh-20rem)] sm:h-[calc(100dvh-10rem)] min-h-[30rem] text-5xl sm:text-7xl text-white font-bold">
          Platos Fuertes
        </span>
        <div
          className="relative w-full h-[calc(100dvh-20rem)] sm:h-[calc(100dvh-10rem)] min-h-[30rem]"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <div className="fixed w-full h-full left-0 top-0">
            <Image
              className="object-cover object-center"
              src={banner}
              alt="PlatosFuertes"
              fill
              sizes="100vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PlatosFuertes;
