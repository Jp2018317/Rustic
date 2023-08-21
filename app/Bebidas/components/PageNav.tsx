"use client";

import { scroller } from "react-scroll";
import Image from "next/image";
import tableBackground from "@/public/Images/TableBackground.webp";
import cerveza from "@/public/Images/Bebidas/Cervezas.webp";
import gaseosa from "@/public/Images/Bebidas/Refrescos.webp";
import licor from "@/public/Images/Bebidas/Licores.webp";

const PageNav = () => {
  
  return (
    <div className="relative">
        <div className="absolute z-40 h-full inset-0 bg-black opacity-20" />
        <div className="absolute z-50 w-full h-full text-white font-bold">
          <ul className="h-full flex items-end pb-8 lg:pb-12 text-center justify-evenly text-xl lg:text-4xl font-semibold text-white">
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
                    className="w-[25rem]"
                    src={gaseosa}
                    alt="Gaseosa"
                    placeholder="blur"
                  />
                <p>Refrescos</p>
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
                  className="w-[25rem]"
                  src={cerveza}
                  alt="Cerveza"
                  placeholder="blur"
                />
                <p>Cervezas</p>
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
                  className="w-[25rem]"
                  src={licor}
                  alt="Licor"
                  placeholder="blur"
                />
                <p>Licores</p>
              </div>
            </button>
          </li>
        </ul>
        </div>
          <div className="w-full h-32 lg:h-72">
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
