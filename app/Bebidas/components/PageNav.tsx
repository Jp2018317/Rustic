"use client";

import { scroller } from "react-scroll";
import Image from "next/image";
import tableBackground from "@/public/Images/TableBackground.webp";
import cerveza from "@/public/Images/Bebidas/Cerveza.webp";
import gaseosa from "@/public/Images/Bebidas/Gaseosa.webp";
import licor from "@/public/Images/Bebidas/Licor.webp";

const PageNav = () => {
  
  return (
    <div className="relative">
        <div className="absolute z-40 h-full inset-0 bg-black opacity-20" />
        <div className="absolute z-50 w-full h-full text-white font-bold">
          <ul className="h-full flex items-end pb-8 lg:pb-12 text-center justify-around text-xl lg:text-4xl font-bold dark:text-zinc-200">
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("refrescos-section", {
                  smooth: true,
                  offset: -70,
                  duration: 800,
                })
              }
            >
              <div>
                  <Image
                    className="w-[30rem]"
                    src={gaseosa}
                    alt="Gaseosa"
                    placeholder="blur"
                  />
                <span>Refrescos</span>
              </div>
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("cervezas-section", {
                  smooth: true,
                  offset: -70,
                  duration: 800,
                })
              }
            >
              <div>
                <Image
                  className="w-[30rem]"
                  src={cerveza}
                  alt="Cerveza"
                  placeholder="blur"
                />
                <span>Cervezas</span>
              </div>
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("licores-section", {
                  smooth: true,
                  offset: -70,
                  duration: 800,
                })
              }
            >
              <div>
                <Image
                  className="w-[30rem]"
                  src={licor}
                  alt="Licor"
                  placeholder="blur"
                />
                <span>Licores</span>
              </div>
            </button>
          </li>
        </ul>
        </div>
          <div className="w-full h-32 lg:h-80">
            <Image
              src={tableBackground}
              fill
              alt="Bebidas"
              placeholder="blur"
            />
          </div>
      </div>
  );
};

export default PageNav;
