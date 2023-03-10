import { FaTelegramPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Call, Facebook, Instagram, Location, Sms } from 'iconsax-react'

import ContactCard from '../../ContactCard'
import SectionTitle from '../../SectionTitle'
import YandexMap from '../../YandexMap'
import { cardContainerAnimation } from '../../../animation'

export const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle title="Свяжитесь с нами" />
      <motion.div
        className="mb-6 flex flex-row flex-wrap gap-3 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={cardContainerAnimation}
      >
        {contacts.map(({ title, icon, path, content }) => (
          <ContactCard key={path} title={title} path={path} content={content}>
            {icon}
          </ContactCard>
        ))}
      </motion.div>
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
    content: 'bk2344908@mail.ru',
    path: 'mailto:bk2344908@mail.ru',
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
