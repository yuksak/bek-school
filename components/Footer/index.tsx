import Link from 'next/link'
import { Call, Sms, Location } from 'iconsax-react'

import Socials from '../Socials'
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className="mt-auto bg-grey-dark px-6 py-9 md:px-2 md:pt-16 md:pb-8">
      <div className="mx-auto mb-10 flex max-w-[1140px] flex-wrap justify-between">
        <div className="mb-12 mr-2 flex flex-col gap-6 lg:m-0">
          <Logo variant="light" className="h-[53px] w-[119px]" />
          <Socials />
        </div>
        <div className="flex flex-row flex-wrap gap-12 md:gap-28">
          <ul className="grid grid-flow-row grid-cols-2 items-start gap-y-6 gap-x-10 font-medium text-light md:gap-x-28">
            {navRoutes.map(({ path, name }) => (
              <li key={name}>
                <Link className="whitespace-nowrap hover:text-yellow" href={path}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4 font-semibold">
            {contacts.map(({ name, logo, content }) => (
              <li className="flex items-start" key={name}>
                <span className="mr-2 rounded-full  bg-yellow p-1.5 text-grey-dark">{logo}</span>
                <span className="flex flex-col gap-2">
                  {Array.isArray(content) ? (
                    content.map((el) => (
                      <Link key={el} href={'tel:' + el} className="">
                        {el}
                      </Link>
                    ))
                  ) : (
                    <Link href={content} className="">
                      {name}
                    </Link>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center">
        <span className="text-xs text-grey md:text-base">© BekSchool. Все права защищены.</span>
      </div>
    </footer>
  )
}

export default Footer

const navRoutes = [
  { path: '/', name: 'Главная' },
  { path: '/about-us', name: 'О нас' },
  { path: '/school-system', name: 'Система школы' },
  { path: '/kindergarten-system', name: 'Система садика' },
  { path: '/news', name: 'Новости' },
  { path: '/contacts', name: 'Контакты' },
]

const contacts = [
  {
    name: 'numbers',
    content: ['+998(55) 503-32-93', '+998(55) 513-32-93', '+998(55) 515-05-73'],
    logo: <Call variant="Bold" className="h-3 w-3" />,
  },
  {
    name: 'bekschool@gmail.com',
    content: 'mailto:bekschool@gmail.com',
    logo: <Sms variant="Bold" className="h-3 w-3" />,
  },
  {
    name: '100059, г. Ташкент, ул. Нурафшон',
    content:
      'https://yandex.uz/maps/10335/tashkent/house/YkAYdANiQEMOQFprfX91cH1kYg==/?ll=69.243980%2C41.341555&z=18.38',
    logo: <Location variant="Bold" className="h-3 w-3" />,
  },
]
