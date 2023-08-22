import Image from "next/image";
import banner from "@/public/Images/Banners/Bebidas.webp";
import PageNav from "./components/PageNav";

import { Refrescos, Cervezas, Licores } from "../components/ProductosDatos";
import Productos from "../components/Productos";

const Bebidas = () => {
  return (
    <div className="pt-[90px] w-full dark:bg-zinc-900">
      <div className="relative h-[calc(100svh-20rem)] sm:h-[calc(100svh-10rem)] min-h-[30rem]">
        <div className="absolute z-40 h-[calc(100svh-20rem)] sm:h-[calc(100svh-10rem)] min-h-[30rem] inset-0 bg-black opacity-60" />
        <span className="absolute z-50 flex items-center justify-center w-full h-[calc(100svh-20rem)] sm:h-[calc(100svh-10rem)] min-h-[30rem] text-5xl sm:text-7xl text-white font-bold">
          Bebidas
        </span>
        <div
          className="relative w-full h-[calc(100svh-20rem)] sm:h-[calc(100svh-10rem)] min-h-[30rem]"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <div className="fixed w-full h-full left-0 top-0">
            <Image
              className="object-cover"
              src={banner}
              alt="Bebidas"
              fill
              sizes="100vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <PageNav />

      <div className="w-full bg-[url('/Images/Background.webp')] object-cover bg-center">
        <div className="bg-[url('/Images/Luces.webp')] bg-cover bg-center h-36" />
        <div
          id="refrescos-section"
          className="sm:py-5 w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4"
        >
          <div className="flex justify-center gap-x-5">
            <span className="bg-red-800 p-2 px-5 md:p-4 md:px-12 flex items-end">
              Refrescos Q10<p className="text-lg md:text-xl lg:text-3xl">c/u</p>
            </span>
          </div>
        </div>
        2
        <div className="p-3 sm:p-5 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-white">
          {Refrescos.map((productos) => (
            <Productos key={productos.nombre} nombre={productos.nombre} tipo={"Bebidas"}/>
          ))}
        </div>
        <div
          id="cervezas-section"
          className="sm:py-5 w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4"
        >
          <div className="flex justify-center">
            <span className="bg-red-800 p-2 px-5 md:p-4 md:px-12">Cervezas</span>
          </div>
        </div>
        <div className="p-3 sm:p-5 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 text-white">
          {Cervezas.map((productos) => (
            <Productos
              key={productos.nombre}
              nombre={productos.nombre}
              tipo={"Bebidas"}
              precio={productos.precio}
              cubetazo={productos.cubetazo}
            />
          ))}
        </div>
        <div
          id="licores-section"
          className="w-full py-5 text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold"
        >
          <div className="flex justify-center py-10">
            <span className="bg-red-800 p-2 px-3 md:p-4 md:px-8 text-xl md:text-2xl lg:text-3xl">* Cócteles desde Q35.00 *</span>
          </div>
          <div className="flex justify-center">
            <span className="bg-red-800 p-2 px-5 md:p-4 md:px-12">Licores</span>
          </div>
        </div>
        <div className="pb-10 p-3 sm:pb-16 sm:p-5 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 text-white h-fit">
          {Licores.map((productos) => (
            <Productos
              key={productos.nombre}
              nombre={productos.nombre}
              tipo={"Bebidas"}
              botella={productos.botella}
              media={productos.media}
              trago={productos.trago}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bebidas;
