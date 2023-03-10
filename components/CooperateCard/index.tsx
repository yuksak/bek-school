import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { motion } from 'framer-motion'
import { MdArrowOutward } from 'react-icons/md'
import { cardAnimation } from '../../animation'

interface ICooperateCardProps {
  image: StaticImageData
  title: string
  description: string
  path: string
}

const CooperateCard: FC<ICooperateCardProps> = ({ image, title, description, path }) => {
  return (
    <motion.div
      variants={cardAnimation}
      className="flex w-full flex-col gap-6 rounded-2xl bg-light-dark p-4 md:max-w-[364px] md:py-9 md:px-6"
    >
      <div className="flex flex-row items-center gap-6">
        <Image
          src={image}
          alt=""
          className=" h-16 w-16 md:h-[87px] md:w-[87px]"
          width={87}
          height={87}
        />
        <h1 className=" text-base font-semibold md:text-xl">{title}</h1>
      </div>
      <div>
        <p className="mb-6 font-normal text-grey">{description}</p>
        <Link
          href={path}
          className=" inline-flex flex-row items-center gap-1 font-semibold text-grey-darkest"
        >
          Подробнее <MdArrowOutward className=" h-5 w-5" />
        </Link>
      </div>
    </motion.div>
  )
}

export default CooperateCard
