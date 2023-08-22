"use client";

import { scroller } from "react-scroll";
import Image from "next/image";
import tableBackground from "@/public/Images/TableBackground.webp";
import combos from "@/public/Images/RustiCombos/Combos.webp"

const PageNav = () => {
  
  return (
    <div className="relative">
        <div className="absolute z-40 h-full inset-0 bg-black opacity-20" />
        <div className="absolute z-50 w-full h-full text-white font-bold">
          <ul className="h-full flex items-end pb-8 lg:pb-12 text-center justify-evenly text-xl lg:text-4xl font-semibold text-white">
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("menusEspeciales-section", {
                  smooth: true,
                  offset: -70,
                  duration: 800,
                })
              }
            >
              <div>
                  <Image
                    className="w-[25rem] px-5"
                    src={combos}
                    alt="MenusEspeciales"
                    placeholder="blur"
                  />
                <p>Menus Especiales</p>
              </div>
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("combos-section", {
                  smooth: true,
                  offset: -70,
                  duration: 800,
                })
              }
            >
              <div>
                <Image
                  className="w-[25rem] px-5"
                  src={combos}
                  alt="Combos"
                  placeholder="blur"
                />
                <p>Combos</p>
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
