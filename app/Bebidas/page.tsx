import Image from "next/image";
import banner from "@/public/Images/Banners/Bebidas.webp";
import PageNav from "./components/PageNav";

import { Refrescos, Cervezas, Licores } from "./components/BebidasDatos";
import Productos from "./components/Productos";

const Bebidas = () => {
  return (
    <div className="pt-[90px] w-full dark:bg-zinc-900">
      <div className="relative h-[calc(100vh-30rem)] sm:h-[calc(100vh-15rem)]">
        <div className="absolute z-40 h-[calc(100vh-30rem)] sm:h-[calc(100vh-15rem)] inset-0 bg-black opacity-60" />
        <span className="absolute z-50 flex items-center justify-center w-full h-[calc(100vh-30rem)] sm:h-[calc(100vh-15rem)] text-5xl sm:text-7xl text-white font-bold">
          Bebidas
        </span>
        <div
          className="relative w-full h-[calc(100vh-30rem)] sm:h-[calc(100vh-15rem)]"
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

      <div className="bg-[url('/Images/Luces.webp')] object-cover bg-center h-48"/>

      <div className="w-full bg-[url('/Images/Background.webp')] object-cover bg-center">

        <div
          id="refrescos-section"
          className=" py-5"
        >
          <div className="w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4">
            <div className="flex justify-center gap-x-5">
              <span className="bg-red-800 p-1 px-4 lg:p-4 lg:px-8">
                Refrescos
              </span>
            </div>
            <div className="pt-1 px-4 lg:pt-4 lg:px-8">
                Q10
                <span className="text-xl md:text-2xl lg:text-4xl">
                  c/u
                </span>
              </div>
          </div>
          <div className="p-3 sm:p-5 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-white">
            {Refrescos.map((productos) => (
              <Productos
                key={productos.nombre}
                nombre={productos.nombre}
              />
            ))}
          </div>
        </div>

        <div
          id="cervezas-section"
          className=" py-5"
        >
          <div className="w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4">
            <div className="flex justify-center">
              <span className="bg-red-800 p-1 px-4 lg:p-4 lg:px-8">
                Cervezas
              </span>
            </div>
          </div>
          <div className="p-3 sm:p-5 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 text-white">
            {Cervezas.map((productos) => (
              <Productos
                key={productos.nombre}
                nombre={productos.nombre}
                precio={productos.precio}
                cubetazo={productos.cubetazo}
              />
            ))}
          </div>
        </div>

        <div
          id="licores-section"
          className=" py-5"
        >
          <div className="w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4">
            <div className="flex justify-center">
              <span className="bg-red-800 p-1 px-4 lg:p-4 lg:px-8">
                Licores
              </span>
            </div>
          </div>
          <div className="p-3 sm:p-5 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 text-white h-fit">
            {Licores.map((productos) => (
              <Productos
                key={productos.nombre}
                nombre={productos.nombre}
                botella={productos.botella}
                media={productos.media}
                trago={productos.trago}
              />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Bebidas;
