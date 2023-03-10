import Image, { StaticImageData } from 'next/image'
import { FC, ReactNode } from 'react'
interface IInfoBannerProps {
  children: ReactNode
  image: StaticImageData
  message?: boolean
}

const InfoBanner: FC<IInfoBannerProps> = ({ children, image, message }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-end rounded-3xl bg-yellow-light md:flex-nowrap md:justify-between">
      {children}
      <div className="relative block h-[320px] w-[419px] rounded-3xl sm:h-[410px]">
        <Image
          priority={true}
          src={image}
          alt="info-banner"
          className={`absolute  rounded-3xl ${
            message ? '-bottom-5 md:-bottom-[42px] lg:-bottom-[22px]' : 'bottom-0'
          }`}
        />
      </div>
    </div>
  )
}

export default InfoBanner
