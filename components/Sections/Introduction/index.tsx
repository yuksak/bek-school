import Image from 'next/image'
import { motion } from 'framer-motion'

import Logo from '../../Logo'
import intro from '../../../public/images/intro.png'
import { logoVariant, textVariant, titleVariant } from '../../../animation'

export const Introduction = () => {
  return (
    <div className="text-center">
      <div className="relative">
        <Image
          src={intro}
          className="h-[723px] w-full object-cover"
          width={4000}
          height={4000}
          alt="intro background"
        />
        <div className="absolute top-48  mx-auto flex w-full flex-col gap-8 text-light">
          <motion.h1
            className="text-7xl font-bold leading-[84px]"
            variants={titleVariant}
            initial="hidden"
            animate="visible"
          >
            Мы Любим <br />
            Всех и Каждого
          </motion.h1>
          <motion.p
            className="text-2xl font-normal"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Школа “Bek” future education
          </motion.p>
          <motion.div
            className="mx-auto mt-24"
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
