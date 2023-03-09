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
      <div className="relative flex h-[410px] w-[419px] rounded-3xl">
        <Image priority={true} src={image} alt="info-banner" className=" absolute rounded-3xl" />
      </div>
    </div>
  )
}

export default InfoBanner
