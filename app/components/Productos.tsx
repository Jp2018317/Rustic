import Image from "next/image";

interface Props {
    nombre:string
    tipo:string
    precio?:string
    descripcion?:string
    cubetazo?:string
    botella?:string
    media?:string
    trago?:string
}

export default function Productos({nombre, tipo, descripcion, precio, cubetazo, botella, media, trago}: Props) {
  return (
      <div className="text-center">
        <div className="flex items-center justify-center" tabIndex={0}>
          <Image
            className={`${ tipo === "Bebidas" ? "md:w-52 md:h-52 w-36 h-36" : "md:w-96 md:h-96 w-72 h-72"}`}
            src={`/Images/${tipo}/${nombre}.webp`}
            alt={`${nombre}Icon`}
            width={300}
            height={300}
          />
        </div>
        <div>
          <div className={`text-lg md:text-xl lg:text-2xl ${!precio && 'h-16'}`}>{nombre}</div>
          {
            !precio ? null : <div className="font-semibold text-xl md:text-2xl lg:text-3xl">Q{precio}.00</div>
          }
          {
            !cubetazo ? null : <div className="md:text-lg lg:text-xl">
            <div className="flex justify-center">
              <span className="bg-red-800 p-1 px-3 mt-1 lg:mt-3 rounded-full font-semibold">
                Cubetazo: <span className="font-normal">Q{cubetazo}.00</span>
              </span>
            </div>
          </div>
          }
          {
            !botella ? null : <div className="md:text-lg lg:text-xl">
            <div className="flex justify-center">
              <span className="bg-red-800 p-1 px-3 mt-1 lg:mt-3 rounded-full font-semibold">
                Botella: <span className="font-normal">Q{botella}.00</span>
              </span>
            </div>
          </div>
          }
          {
            !media ? null : <div className="md:text-lg lg:text-xl">
            <div className="flex justify-center">
              <span className="bg-red-800 p-1 px-3 mt-1 lg:mt-3 rounded-full font-semibold">
                1/2 Botella: <span className="font-normal">Q{media}.00</span>
              </span>
            </div>
          </div>
          }
          {
            !trago ? null : <div className="md:text-lg lg:text-xl">
            <div className="flex justify-center">
              <span className="bg-red-800 p-1 px-3 mt-1 lg:mt-3 rounded-full font-semibold">
                Trago: <span className="font-normal">Q{trago}.00</span>
              </span>
            </div>
          </div>
          }
        </div>
      </div>
  );
};
