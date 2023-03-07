import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

import Button from '../Button'
import SectionTitle from '../SectionTitle'

interface ISloganBannerProps {
  title: string
  description: string
  image?: StaticImageData
  link?: string
  children?: ReactNode
}

const SloganBanner: FC<ISloganBannerProps> = ({ title, image, description, link, children }) => {
  const router = useRouter()
  return (
    <div>
      <div className=" mb-14 flex flex-row justify-between">
        <SectionTitle title={title} position="start" />
        <div className="w-[558px] text-grey-darkest">
          <p className={link && 'mb-6'}>{description}</p>
          {link && <Button text="Подробнее" onClick={() => router.push(link)} />}
        </div>
      </div>
      <div>
        {image && <Image src={image} alt="Our mission pic" />}
        {children && children}
      </div>
    </div>
  )
}

export default SloganBanner
