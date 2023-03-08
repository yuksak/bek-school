import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import { motion } from 'framer-motion'
import { AiFillStar } from 'react-icons/ai'
import { cardAnimation } from '../../animation'

interface IReviewsCardProps {
  name: string
  photo: StaticImageData
  description: string
  date: string
  rating: number
}

const ReviewsCard: FC<IReviewsCardProps> = ({ name, photo, description, date, rating }) => {
  return (
    <motion.div
      className="flex w-[364px] flex-col gap-3 rounded-2xl bg-light-dark p-6"
      variants={cardAnimation}
    >
      <div className="flex flex-row gap-3">
        <div>
          <Image src={photo} width={45} height={45} alt="user photo" />
        </div>
        <div>
          <span className="text-lg font-medium">{name}</span>
          <span className="flex flex-row gap-1">
            <AiFillStar className="text-yellow" />
            <AiFillStar className="text-yellow" />
            <AiFillStar className="text-yellow" />
            <AiFillStar className="text-yellow" />
            <AiFillStar className="text-grey opacity-30" />
          </span>
        </div>
      </div>
      <p className="text-grey">{description}</p>
      <time className=" text-sm italic text-grey-darkest">{date}</time>
    </motion.div>
  )
}

export default ReviewsCard
