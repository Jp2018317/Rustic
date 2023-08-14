"use client"

import React from "react";
import Logo from '@/public/Images/Logo/RusticLogo.png'
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsPinAngleFill, BsTelephoneFill } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Footer = () => (
  <footer className="w-full px-10 py-4 border-t border-zinc-200 shadow md:flex md:items-center md:justify-between dark:bg-zinc-950 dark:border-zinc-700">
    <div className="w-full">
      <div className="md:flex md:justify-between">
        <div className="flex items-center max-sm:justify-center">
          <Image
            src={Logo}
            alt="Rustic Logo"
            className="w-24 h-24 -ml-5 max-sm:ml-0" />
          <span className="max-sm:hidden text-3xl font-bold whitespace-nowrap dark:text-white">
            Rustic Sport Bar
          </span>
        </div>
        <div className="gap-8 sm:gap-6 max-sm:text-center">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-zinc-200">
              Contáctanos
            </h2>
            <ul className="text-zinc-800 dark:text-zinc-200 font-medium">
              <li className="mb-4 flex max-sm:justify-center">
                <div className="flex items-center pr-1">
                  <BsTelephoneFill className="w-4 h-4 " />
                </div> 3961 8646
              </li>
              <li className="flex max-sm:justify-center">
                <div className="flex items-center pr-1">
                  <BsPinAngleFill className="w-4 h-4" />
                </div> 2da avenida 11-76 zona 9
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div className="flex sm:items-center sm:justify-between h-5 max-sm:justify-center text-zinc-800 dark:text-zinc-200">
        <span className="max-sm:hidden text-xs sm:text-center">
          © 2023 Rustic Sport Bar. All Rights Reserved.
        </span>
        <div className="flex space-x-8 justify-center mt-0 h-full text-center">
          <BsFacebook className="w-5 h-5 flex items-center text-center" />
          <FaTiktok className="w-5 h-5 flex items-center text-center" />
          <BsInstagram className="w-5 h-5 flex items-center text-center" />
          <BiLogoGmail className="w-5 h-5 flex items-center text-center" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
