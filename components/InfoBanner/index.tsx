import Image, { StaticImageData } from 'next/image'
import { FC, ReactNode } from 'react'
interface IInfoBannerProps {
  children: ReactNode
  image: StaticImageData
}

const InfoBanner: FC<IInfoBannerProps> = ({ children, image }) => {
  return (
    <div className="flex h-[410px] flex-row items-center justify-between rounded-3xl bg-yellow-light">
      {children}
      <div className="relative flex h-[410px] w-[419px] justify-center rounded-3xl">
        <Image src={image} alt="info-banner" className="absolute" />
      </div>
    </div>
  )
}

export default InfoBanner
