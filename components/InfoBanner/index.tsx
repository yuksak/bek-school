import Image, { StaticImageData } from 'next/image'
import { FC, ReactNode } from 'react'
interface IInfoBannerProps {
  children: ReactNode
  image: StaticImageData
}

const InfoBanner: FC<IInfoBannerProps> = ({ children, image }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between rounded-3xl bg-yellow-light">
      {children}
      <div className="relative flex h-full max-h-[410px] w-[419px] translate-y-5 rounded-3xl">
        <Image
          priority={true}
          src={image}
          alt="info-banner"
          className="rounded-3xl object-contain"
        />
      </div>
    </div>
  )
}

export default InfoBanner
