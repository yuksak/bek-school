import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

interface INewsCardProps {
  image: StaticImageData
  title: string
  description: string
  date: string
}

const NewsCard: FC<INewsCardProps> = ({ image, title, description, date }) => {
  return (
    <div className="box-border flex w-[267px] flex-col gap-2 overflow-hidden">
      <div className=" rounded-2xl">
        <Image src={image} alt="" width={267} height={190} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium text-grey-darkest">{title}</h1>
        <p className="font-normal text-grey">{description}</p>
        <time className="text-sm italic text-grey">{date}</time>
      </div>
    </div>
  )
}

export default NewsCard
