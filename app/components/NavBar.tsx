'use client';

import React, { useState, useEffect, Fragment } from 'react';
import Image from 'next/image'
import Logo from '@/public/Images/Logo/RusticLogo.png'
import {Menu, Transition} from "@headlessui/react"
import { FaAngleDown, FaGlassCheers } from 'react-icons/fa';
import { scroller} from 'react-scroll'
import Link from 'next/link';
import { IoMdWine } from 'react-icons/io'
import { PiCakeBold, PiCoffee } from 'react-icons/pi'
import { GiKnifeFork } from 'react-icons/gi'
import { AiFillBook } from 'react-icons/ai'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const [fade, setFade] = useState('border-b');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50 && currentScrollY > prevScrollY) {
        setFade('-translate-y-24 duration-300');
      } else {
        setFade('duration-200 border-b shadow-lg');
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className="fixed w-full z-50">
      <nav
        className={`bg-white dark:bg-zinc-950  transition-all border-gray-200 dark:border-zinc-700 ${fade}`}
      >
        <div className="h-[90px] font-semibold flex flex-wrap items-center justify-between mx-auto px-8 max-sm:px-4">
        
          <div className='flex items-center max-h-[90px]'>
            <Link href="/" className='w-20 h-20'>
              <Image src={Logo}  alt=""/>
            </Link>
            <div className='max-sm:hidden h-16'>
                <div className="text-4xl font-bold dark:text-white">
                  RUSTIC
                </div>
                <div className="text-center dark:text-white">
                  Sport Bar
                </div>
            </div>
          </div>

          <ul className='flex items-center max-sm:text-xs dark:text-zinc-200'>
            <li className='p-2 md:p-4'> 
              <button onClick={() => 
                scroller.scrollTo('contact-section', {
                  smooth: true,
                  offset: -70,
                  duration: 800,
                })
              }
              > 
                Contáctanos
              </button>
            </li>
            <li className='p-2 md:p-4'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='inline-flex justify-center w-full rounded-md border border-zinc-300 shadow-sm px-4 py-2 dark:bg-zinc-950 max-sm:text-xs font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900'>
                    Menú
                    <FaAngleDown
                      className='-mr-1 sm:mt-1 ml-2 h-4 w-4'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-zinc-100 dark:divide-zinc-800 focus:outline-none'>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='/Carta'
                            className={classNames(
                              active
                                ? 'bg-gray-100 dark:bg-zinc-900'
                                : 'text-zinc-600 dark:text-zinc-100 dark:bg-zinc-900',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            <div className="flex items-center py-1">
                              <AiFillBook className="w-4 h-4 mr-1 md:mr-2" />
                              <p>Nuestra Carta</p>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                          href='/Almuerzos'
                            className={classNames(
                              active
                                ? 'bg-gray-100 dark:bg-zinc-900'
                                : 'text-zinc-600 dark:text-zinc-100 dark:bg-zinc-900',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            <div className="flex items-center py-1">
                              <GiKnifeFork className="w-4 h-4 mr-1 md:mr-2" />
                              <p>Almuerzos</p>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                          href='/Bebidas'
                            className={classNames(
                              active
                                ? 'bg-gray-100 dark:bg-zinc-900'
                                : 'text-zinc-600 dark:text-zinc-100 dark:bg-zinc-900',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            <div className="flex items-center py-1">
                              <IoMdWine className="w-4 h-4 mr-1 md:mr-2" />
                              <p>Bebidas</p>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                          href='/EntradasYPostres'
                            className={classNames(
                              active
                                ? 'bg-gray-100 dark:bg-zinc-900'
                                : 'text-zinc-600 dark:text-zinc-100 dark:bg-zinc-900',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            <div className="flex items-center py-1">
                              <PiCakeBold className="w-4 h-4 mr-1 md:mr-2" />
                              <p>Entradas & Postres</p>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='/RustiCombos'
                            className={classNames(
                              active
                                ? 'bg-gray-100 dark:bg-zinc-900'
                                : 'text-zinc-600 dark:text-zinc-100 dark:bg-zinc-900',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            <div className="flex items-center py-1">
                              <FaGlassCheers className="w-4 h-4 mr-1 md:mr-2" />
                              <p>RustiCombos</p>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
} 

export default NavBar;
