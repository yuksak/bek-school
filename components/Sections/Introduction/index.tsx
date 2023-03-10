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
          className="h-[747px] w-full object-cover sm:h-[723px]"
          width={4000}
          height={4000}
          alt="intro background"
        />
        <div className="absolute top-48  mx-auto flex w-full flex-col gap-2 text-light sm:gap-8">
          <motion.h1
            className=" text-[42px] font-bold leading-[50px] sm:text-7xl sm:leading-[84px]"
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Мы Любим <br />
            Всех и Каждого
          </motion.h1>
          <motion.p
            className="text-lg font-normal sm:text-2xl"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Школа “Bek” future education
          </motion.p>
          <motion.div
            className="mx-auto mt-48 sm:mt-24"
            variants={logoVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Logo variant="grey" className="h-[80px] w-[152px] md:h-[112px] md:w-[216px]" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
