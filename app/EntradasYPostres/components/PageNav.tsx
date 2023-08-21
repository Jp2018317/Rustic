"use client";

import { scroller } from "react-scroll";
import Image from "next/image";
import tableBackground from "@/public/Images/TableBackground.webp";
import postres from "@/public/Images/EntradasYPostres/Pastel de Chocolate.webp";

const PageNav = () => {
  return (
    <div className="relative">
      <div className="absolute z-40 h-full inset-0 bg-black opacity-20" />
      <div className="absolute z-50 w-full h-full text-white font-bold">
        <ul className="h-full flex items-end pb-8 lg:pb-12 text-center justify-evenly text-xl lg:text-4xl font-semibold text-white">
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("entradas-section", {
                  smooth: true,
                  offset: -70,
                  duration: 800,
                })
              }
            >
              <div>
                <Image
                  className="w-[25rem]"
                  src={postres}
                  alt="Entradas"
                  placeholder="blur"
                />
                <p>Entradas</p>
              </div>
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("postres-section", {
                  smooth: true,
                  offset: -70,
                  duration: 800,
                })
              }
            >
              <div>
                <Image
                  className="w-[25rem]"
                  src={postres}
                  alt="Postres"
                  placeholder="blur"
                />
                <p>Postres</p>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full h-32 lg:h-72">
        <Image src={tableBackground} fill alt="Bebidas" placeholder="blur" />
      </div>
    </div>
  );
};

export default PageNav;
