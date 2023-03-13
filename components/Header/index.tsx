import { useRouter } from 'next/router'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import Logo from '../Logo'

import { useScrollPosition } from '../../hooks/useScrollPosition'
import { ArrowDown2 } from 'iconsax-react'
import { IoMenuSharp } from 'react-icons/io5'
import { motion } from 'framer-motion'

import { SlClose } from 'react-icons/sl'

export const navRoutes = [
  { id: 'nav-route-1', path: '/', name: 'Главная' },
  { id: 'nav-route-2', path: '/about-us', name: 'О нас' },
  { id: 'nav-route-3', path: '/system', name: 'Системы' },
  { id: 'nav-route-4', path: '/news', name: 'Новости' },
]

const contact = '+998 55 503-32-93'

export const Header = () => {
  const { pathname } = useRouter()
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)
  const { scrollPosition } = useScrollPosition()

  const isHome = pathname === '/'
  const isScrollable = scrollPosition > 1

  useEffect(() => {
    setIsBurgerOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed z-30  w-full p-6 duration-200 ease-in md:py-4 md:px-2 ${
          isScrollable || !isHome ? 'bg-light shadow-lg' : ''
        } ${!isBurgerOpen ? 'h-[94px]' : 'right-0 h-full bg-light'}`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Logo
            variant={isHome && !isScrollable && !isBurgerOpen ? 'light' : 'dark'}
            className="h-[46px] w-[102px]"
          />
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className={`ml-3 inline-flex items-center rounded-lg p-2 text-sm ${
              isScrollable || !isHome || isBurgerOpen
                ? 'text-grey-darkest hover:bg-grey-darkest/5'
                : 'text-light hover:bg-light/10'
            }   md:hidden`}
            aria-controls="navbar-multi-level"
            aria-expanded="false"
            onClick={() => setIsBurgerOpen((prev) => !prev)}
          >
            {!isBurgerOpen ? <IoMenuSharp className="h-7 w-7" /> : <SlClose className="h-6 w-6" />}
          </button>
          <div
            className={`${
              isBurgerOpen ? 'translate-x-0' : 'translate-x-96 md:translate-x-0'
            }  w-full  duration-200 ease-in md:block md:w-auto`}
            id="navbar-multi-level"
          >
            <ul className="mt-4 flex flex-col items-end gap-9 p-4 md:mt-0 md:flex-row md:items-start md:gap-0 md:space-x-8 md:border-0 md:text-sm md:font-medium">
              {navRoutes.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`flex items-center rounded bg-transparent p-0 text-base ${
                      isHome && !isScrollable && !isBurgerOpen
                        ? 'text-light'
                        : 'font-medium text-grey-dark hover:text-yellow'
                    }`}
                    aria-current="page"
                  >
                    {name} {path === '/system' && <ArrowDown2 className="h-4" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <Link
              href={`tel:${contact}`}
              className={`text-xl font-semibold ${
                isHome && !isScrollable ? 'text-light' : 'text-grey-dark'
              } hover:text-yellow`}
            >
              {contact}
            </Link>
          </div>
        </div>
      </motion.nav>
      {!isHome && <div className="h-[91px] w-full bg-light"></div>}
    </>
  )
}
