import { AiFillStar } from 'react-icons/ai'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface IReviewsCardProps {
  name: string
  photo: StaticImageData
  description: string
  date: string
  rating: number
}

const ReviewsCard: FC<IReviewsCardProps> = ({ name, photo, description, date, rating }) => {
  return (
    <div className="flex w-[364px] flex-col gap-3 rounded-2xl bg-light-dark p-6">
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
    </div>
  )
}

export default ReviewsCard
