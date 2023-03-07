import { FaTelegramPlane } from 'react-icons/fa'
import { Call, Facebook, Instagram, Location, Sms } from 'iconsax-react'

import ContactCard from '../../ContactCard'
import { SectionTitle } from '../../UI'
import { YandexMap } from '../../YandexMap'

export const ContactUs = () => {
  return (
    <div className=" mx-auto mb-8 flex max-w-[1142px] flex-col py-14">
      <SectionTitle title="Свяжитесь с нами" />
      <div className="mb-6 grid grid-flow-row grid-cols-3 gap-6">
        {contacts.map(({ title, icon, path, content }) => (
          <ContactCard key={path} title={title} path={path} content={content}>
            {icon}
          </ContactCard>
        ))}
      </div>
      <YandexMap />
    </div>
  )
}

const contacts = [
  {
    title: 'Номер телефона',
    content: '+998(71) 200 11 11',
    path: 'tel:+998(71) 200 11 11',
    icon: <Call className="text-yellow" variant="Bold" />,
  },
  {
    title: 'Электронный адрес',
    content: 'bekschool@gmail.com',
    path: 'mailto:bekschool@gmail.com',
    icon: <Sms className="text-yellow" variant="Bold" />,
  },
  {
    title: 'Адрес',
    content: 'г. Ташкент, ул. Нурафшон',
    path: 'https://yandex.uz/maps/10335/tashkent/house/YkAYdANiQEMOQFprfX91cH1kYg==/?ll=69.243980%2C41.341555&z=18.38',
    icon: <Location className="text-yellow" variant="Bold" />,
  },
  {
    title: 'Телеграмм канал',
    content: '@bekschool',
    path: 'https://t.me/bekschool',
    icon: <FaTelegramPlane className="h-6 w-6 text-yellow" />,
  },
  {
    title: 'Инстаграм',
    content: '@bekschool',
    path: 'https://www.instagram.com/bekschool/',
    icon: <Instagram className="text-yellow" variant="Bold" />,
  },
  {
    title: 'Фейсбук',
    content: '@bekschool',
    path: 'https://www.facebook.com/bekschool',
    icon: <Facebook className="text-yellow" variant="Bold" />,
  },
]
