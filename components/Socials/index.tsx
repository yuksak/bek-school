import Link from 'next/link'

import { Instagram, Facebook, Youtube } from 'iconsax-react'
import { FaTelegramPlane } from 'react-icons/fa'

const socials = [
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/bekschool',
    logo: <Instagram variant="Bold" className="h-4 w-4" />,
  },
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/bekschool',
    logo: <Facebook variant="Bold" className="h-4 w-4" />,
  },
  {
    name: 'Youtube',
    path: 'https://www.youtube.com/channel/UCtUbbO_EQe03qW7HVZIQ6Ag',
    logo: <Youtube variant="Bold" className="h-4 w-4" />,
  },
  {
    name: 'Telegram',
    path: 'https://t.me/bekschool',
    logo: <FaTelegramPlane className="h-4 w-4" />,
  },
]

const Socials = () => {
  return (
    <div className="flex gap-4">
      {socials.map(({ path, name, logo }) => (
        <Link
          key={name}
          href={path}
          className="rounded-full bg-yellow p-1.5 text-grey-dark hover:bg-light hover:text-inherit"
        >
          {logo}
        </Link>
      ))}
    </div>
  )
}

export default Socials
