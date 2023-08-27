import Image from "next/image";
import banner from "@/public/Images/Banners/RustiCombos.webp";
import PageNav from "./components/PageNav";
import Combos from "./components/Combos";

const RustiCombos = () => {
  return (
    <div className="pt-[90px] w-full dark:bg-zinc-900">
      <div className="relative h-[calc(100dvh-20rem)] sm:h-[calc(100dvh-10rem)] min-h-[30rem]">
        <div className="absolute z-40 h-[calc(100dvh-20rem)] sm:h-[calc(100dvh-10rem)] min-h-[30rem] inset-0 bg-black opacity-60" />
        <span className="absolute z-50 flex items-center justify-center w-full h-[calc(100dvh-20rem)] sm:h-[calc(100dvh-10rem)] min-h-[30rem] text-5xl sm:text-7xl text-white font-bold">
          RustiCombos
        </span>
        <div
          className="relative w-full h-[calc(100dvh-20rem)] sm:h-[calc(100dvh-10rem)] min-h-[30rem]"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <div className="fixed w-full h-full left-0 top-0">
            <Image
              className="object-cover"
              src={banner}
              alt="RustiCombos"
              fill
              sizes="100vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <PageNav/>

      <Combos/>

    </div>
  );
};

export default RustiCombos;
