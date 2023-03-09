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
      className="flex w-[364px] flex-col gap-6 rounded-2xl bg-light-dark py-9 px-6"
    >
      <div className="flex flex-row items-center gap-6">
        <Image src={image} alt="" className="h-[87px] w-[87px]" width={87} height={87} />
        <h1 className=" text-xl font-semibold">{title}</h1>
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
