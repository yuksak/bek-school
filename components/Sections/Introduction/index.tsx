import Image from 'next/image'
import { motion } from 'framer-motion'

import Logo from '../../Logo'
import intro from '../../../public/images/intro.png'

export const Introduction = () => {
  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
  }

  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 1 } },
  }

  const logoVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2, duration: 1 } },
  }

  return (
    <div className="text-center">
      <div className="relative">
        <Image
          src={intro}
          className="h-[723px] w-full object-cover"
          width={1000}
          height={1000}
          alt="intro background"
        />
        <div className="absolute top-0 h-full w-full bg-grey-dark opacity-60"></div>
        <div className="absolute top-48  mx-auto flex w-full flex-col gap-8 text-light">
          <motion.h1
            className="text-7xl font-semibold"
            variants={titleVariant}
            initial="hidden"
            animate="visible"
          >
            Мы Любим <br />
            Всех и Каждого
          </motion.h1>
          <motion.p
            className="text-2xl font-light"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Школа “Bek” future education
          </motion.p>
          <motion.div
            className="mx-auto mt-28"
            variants={logoVariant}
            initial="hidden"
            animate="visible"
          >
            <Logo variant="grey" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
