import Image from "next/image";

export default function Combos() {
  return (
    <div className="w-full bg-[url('/Images/Background.webp')] object-cover bg-center">
      <div className="bg-[url('/Images/Luces.webp')] bg-cover bg-center h-36" />
      <div
        id="menusEspeciales-section"
        className="sm:py-5 w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4"
      >
        <div className="flex justify-center">
          <span className="bg-red-800 p-2 px-5 md:p-4 md:px-12">
            Menús Especiales
          </span>
        </div>
      </div>


      <div className="p-3 sm:p-5 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-white"></div>
        <div
            id="combos-section"
            className="sm:py-5 w-full text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold py-4"
        >
            <div className="flex justify-center">
            <span className="bg-red-800 p-2 px-5 md:p-4 md:px-12">
                RustiCombos
            </span>
            </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 text-xl md:text-2xl lg:text-3xl text-white pb-20 p-5 max-sm:p-3 max-sm:pb-16">
        <div
          className="text-center flex justify-center items-center"
          tabIndex={0}
        >
          <div>
            <div className="flex justify-center">
              <span className="bg-red-800 p-4 px-8 md:p-4 md:px-12 mt-8 font-bold text-xl md:text-2xl lg:text-4xl">Combo #1</span>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold py-6 lg:py-10">Q149.00</p>
            <div className="w-full h-full">
              <p>6 cervezas</p>
              <p>6 alitas</p>
              <p>6 camarones</p>
              <p>4 onz. chorizo argentino</p>
              <p>2 DIP</p>
            </div>
          </div>
        </div>
        <div
          className="text-center flex justify-center items-center"
          tabIndex={0}
        >
          <div>
            <div className="flex justify-center">
              <span className="bg-red-800 p-4 px-8 md:p-4 md:px-12 mt-8 font-bold text-xl md:text-2xl lg:text-4xl">Combo #2</span>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold py-6 lg:py-10">Q199.00</p>
            <div className="w-full h-full">
              <p>10 Cervezas</p>
              <p>10 Alitas (al gusto)</p>
              <p>1/2 libra de Costilla</p>
              <p>8 onz. Chorizo Argentino</p>
            </div>
          </div>
        </div>
        <div
          className="text-center flex justify-center items-center"
          tabIndex={0}
        >
          <div>
            <div className="flex justify-center">
              <span className="bg-red-800 p-4 px-8 md:p-4 md:px-12 mt-8 font-bold text-xl md:text-2xl lg:text-4xl">Combo #3</span>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold py-6 lg:py-10">Q259.00</p>
            <div className="w-full h-full">
              <p>10 Cervezas</p>
              <p>4 jugos Mix Michelada</p>
              <p>4 Mojitos/ Margarita / Daiquiri</p>
              <p>1/2 libra de Chorizo Argentino</p>
              <p>1 libra de Papas Fritas</p>
            </div>
          </div>
        </div>
        <div
          className="text-center flex justify-center items-center"
          tabIndex={0}
        >
          <div>
            <div className="flex justify-center">
              <span className="bg-red-800 p-4 px-8 md:p-4 md:px-12 mt-8 font-bold text-xl md:text-2xl lg:text-4xl">Combo #4</span>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold py-6 lg:py-10">Q399.00</p>
            <div className="w-full h-full">
              <p>24 Cervezas</p>
              <p>3 libras de Alitas</p>
              <p>Papas Fritas</p>
              <p>Chorizo Argentino</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
