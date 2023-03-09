import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from '../Logo'

import { useScrollPosition } from '../../hooks/useScrollPosition'
import { ArrowDown2, Menu } from 'iconsax-react'
import { motion } from 'framer-motion'

export const navRoutes = [
  { id: 'nav-route-1', path: '/', name: 'Главная' },
  { id: 'nav-route-2', path: '/about-us', name: 'О нас' },
  { id: 'nav-route-3', path: '/system', name: 'Системы' },
  { id: 'nav-route-4', path: '/news', name: 'Новости' },
]

const contact = '+998 55 503-32-93'

export const Header = () => {
  const { pathname } = useRouter()
  const { scrollPosition } = useScrollPosition()
  const isHome = pathname === '/'
  const isScrollable = scrollPosition > 1

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed z-50 w-full py-4 px-2 transition-all duration-150 ease-in ${
          isScrollable ? 'bg-light shadow-lg' : ''
        } ${!isHome && 'bg-light'}`}
      >
        <div className="mx-auto flex max-w-[1142px] flex-wrap items-center justify-between">
          <Logo variant={isHome && !isScrollable ? 'light' : 'dark'} size={51} />
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-grey hover:bg-light-dark focus:outline-none focus:ring-2 md:hidden"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
              {navRoutes.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`flex items-center rounded bg-transparent p-0 text-base ${
                      isHome && !isScrollable
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
          <div>
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
