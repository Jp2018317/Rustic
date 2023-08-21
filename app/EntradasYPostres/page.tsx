import Image from "next/image";
import banner from "@/public/Images/Banners/EntradasYPostres.webp";
import PageNav from "./components/PageNav";
import { Postres, Entradas } from "../components/ProductosDatos";
import Productos from "../components/Productos";

const EntradasYPostres = () => {
  return (
    <div className="pt-[90px] w-full dark:bg-zinc-900">
      <div className="relative h-[calc(100svh-20rem)] sm:h-[calc(100svh-10rem)] min-h-[30rem]">
        <div className="absolute z-40 h-[calc(100svh-20rem)] sm:h-[calc(100svh-10rem)] min-h-[30rem] inset-0 bg-black opacity-60" />
        <span className="absolute z-50 flex text-center items-center justify-center w-full h-[calc(100svh-20rem)] sm:h-[calc(100svh-10rem)] min-h-[30rem] text-5xl sm:text-7xl text-white font-bold">
          <span>
            <p>Entradas</p>
            <p className="text-xl sm:text-3xl">&</p>
            <p>Postres</p>
          </span>
        </span>
        <div
          className="relative w-full h-[calc(100svh-20rem)] sm:h-[calc(100svh-10rem)] min-h-[30rem]"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <div className="fixed w-full h-full left-0 top-0">
            <Image
              className="object-cover object-center"
              src={banner}
              alt="EntradasYPostres"
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
          id="entradas-section"
          className="sm:py-5 w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4"
        >
          <div className="flex justify-center">
            <span className="bg-red-800 p-2 px-5 md:p-4 md:px-12">Entradas</span>
          </div>
        </div>
        2
        <div className="p-3 sm:p-5 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 text-white">
          {Entradas.map((productos) => (
            <Productos key={productos.nombre} nombre={productos.nombre} tipo={"EntradasYPostres"} precio={productos.precio} descripcion={productos.descripcion}/>
          ))}
        </div>
        <div
          id="postres-section"
          className="sm:py-5 w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4"
        >
          <div className="flex justify-center gap-x-5">
            <span className="bg-red-800 p-2 px-5 md:p-4 md:px-12 flex items-end">
              Postres Q22<p className="text-lg md:text-xl lg:text-3xl">c/u</p>
            </span>
          </div>
        </div>
        <div className="p-3 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-y-8 text-white">
          {Postres.map((productos) => (
            <Productos
              key={productos.nombre}
              nombre={productos.nombre}
              tipo={"EntradasYPostres"}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default EntradasYPostres;
