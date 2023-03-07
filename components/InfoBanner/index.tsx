import Image, { StaticImageData } from 'next/image'
import React, { FC, ReactNode } from 'react'
import heroPattern from '../../public/images/hero-pattern.svg'
interface IInfoBannerProps {
  children: ReactNode
  image: StaticImageData
}
const InfoBanner: FC<IInfoBannerProps> = ({ children, image }) => {
  return (
    <div className="flex h-[410px] flex-row items-center justify-between overflow-hidden rounded-3xl bg-yellow-light">
      {children}
      <div className="relative flex h-[410px] w-[419px] items-center justify-center rounded-3xl bg-yellow">
        <Image src={heroPattern} alt="pattern" className="absolute opacity-30" />
        <Image src={image} alt="info-banner" className="absolute" />
      </div>
    </div>
  )
}

export default InfoBanner
