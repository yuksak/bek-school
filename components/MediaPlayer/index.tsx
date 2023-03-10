import Image, { StaticImageData } from 'next/image'
import { FC, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'

import { HiChevronLeft, HiChevronRight, HiOutlineX } from 'react-icons/hi'
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

interface IMediaPlayerProps {
  initialSlide: number
  images: { id: string; photo: StaticImageData }[]
  playerCloser: React.Dispatch<React.SetStateAction<boolean>>
}

const MediaPlayer: FC<IMediaPlayerProps> = ({ images, playerCloser, initialSlide }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [activeSlide, setActiveSlide] = useState<string>('')
  const [fullScreen, setFullScreen] = useState<boolean>(false)

  const [hideControllers, setHideControllers] = useState<boolean>(true)

  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 z-50 flex select-none items-center justify-center bg-grey-darkest md:bg-grey-darkest/50 ">
      <div className="relative mx-auto flex h-full w-full justify-center overflow-hidden bg-grey-darkest md:max-h-[475px] md:max-w-[900px] md:rounded-3xl">
        <Swiper
          loop={false}
          spaceBetween={50}
          navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          initialSlide={initialSlide}
          className=" relative w-[900px] md:h-[475px]"
        >
          {images.map(({ id, photo }, i) => (
            <SwiperSlide key={id}>
              {({ isActive }: { isActive: boolean }) => {
                if (isActive) {
                  setActiveSlide(id)
                }

                return (
                  <>
                    <Image
                      src={photo}
                      alt="image thumb"
                      width={2000}
                      height={2000}
                      className={` h-full w-full ${fullScreen ? 'object-cover' : 'object-contain'}`}
                      onClick={() => setHideControllers((prev) => !prev)}
                    />
                    <div
                      className={`absolute top-6 left-6 z-10 flex h-[46px] w-[85px] items-center justify-center rounded-xl text-lg font-bold  text-light backdrop-blur-sm duration-200 ease-in ${
                        hideControllers ? 'bg-grey-darkest/30' : 'bg-grey-dark'
                      }`}
                    >
                      {i + 1} / {images.length}
                    </div>
                  </>
                )
              }}
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`absolute h-[73px] w-full transition-all duration-150 ease-in sm:w-[550px] landscape:w-full sm:landscape:w-[550px] ${
            hideControllers ? '-bottom-16' : 'bottom-4 md:bottom-8'
          }`}
        >
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={false}
            spaceBetween={10}
            breakpoints={{
              376: {
                slidesPerView: 5,
              },
              100: { slidesPerView: 3.25 },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
          >
            {images.map(({ id, photo }) => (
              <SwiperSlide key={id + 'thumbs'} className="h-[73px] w-[97px] rounded-xl ">
                <Image
                  src={photo}
                  alt="slide image"
                  width={2000}
                  height={2000}
                  className={`border-2 duration-200 ease-in hover:opacity-80 ${
                    id === activeSlide ? 'rounded-xl border-light' : 'border-transparent opacity-60'
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={navigationPrevRef}
            className="absolute -left-[50px] bottom-5 z-30 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-grey-darkest/30 text-white backdrop-blur-sm duration-200 ease-in hover:bg-grey-darkest/80 md:flex "
          >
            <HiChevronLeft className="h-6 w-6" />
          </div>
          <div
            ref={navigationNextRef}
            className="absolute -right-[50px] bottom-5 z-30 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-grey-darkest/30 text-white backdrop-blur-sm duration-200 ease-in hover:bg-grey-darkest/80 md:flex"
          >
            <HiChevronRight className="h-6 w-6" />
          </div>
        </div>

        <button
          className={`absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-grey-dark text-light backdrop-blur-sm duration-200 ease-in hover:bg-grey-darkest/80 ${
            hideControllers ? 'bg-grey-darkest/30' : 'bg-grey-dark'
          }`}
          onClick={() => playerCloser(false)}
        >
          <HiOutlineX className="h-5 w-5" />
        </button>
        <button
          className={`absolute right-[90px] top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-grey-dark text-light backdrop-blur-sm duration-200 ease-in hover:bg-grey-darkest/80 ${
            hideControllers ? 'bg-grey-darkest/30' : 'bg-grey-dark'
          }`}
          onClick={() => setFullScreen((prev) => !prev)}
        >
          {!fullScreen ? (
            <BiFullscreen className="h-5 w-5" />
          ) : (
            <BiExitFullscreen className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  )
}
export default MediaPlayer
