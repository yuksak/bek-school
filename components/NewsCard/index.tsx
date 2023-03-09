import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import { motion } from 'framer-motion'
import { cardAnimation } from '../../animation'
interface INewsCardProps {
  image: StaticImageData
  title: string
  description: string
  date: string
}

const NewsCard: FC<INewsCardProps> = ({ image, title, description, date }) => {
  return (
    <motion.div
      className="box-border flex w-[267px] flex-col gap-2 overflow-hidden"
      variants={cardAnimation}
    >
      <div className=" rounded-2xl">
        <Image src={image} alt="" className="h-[190px] w-[267px]" width={1000} height={1000} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium text-grey-darkest">{title}</h1>
        <p className="font-normal text-grey">{description}</p>
        <time className="text-sm font-medium italic text-grey">{date}</time>
      </div>
    </motion.div>
  )
}

export default NewsCard
