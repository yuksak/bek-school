import { FC, useRef, useState } from 'react'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'

interface IVideoPlayerProps {
  src: string
  poster: string
}
const VideoPlayer: FC<IVideoPlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState<boolean>(false)

  const videoHandler = (control: any) => {
    const value = videoRef.current
    if (control === 'play' && value) {
      value.play()
      setPlaying(true)
    } else if (control === 'pause' && value) {
      value.pause()
      setPlaying(false)
    }
  }
  return (
    <div className="relative flex h-[445px] w-[1142px] items-center justify-center overflow-hidden rounded-3xl">
      <video src={src} className="object-cover" poster={poster} ref={videoRef} />

      <button
        className="group absolute flex h-[75px] w-[75px] items-center justify-center rounded-full bg-light hover:bg-yellow"
        onClick={() => videoHandler(playing ? 'pause' : 'play')}
      >
        {playing ? <BsPauseFill className="h-8 w-8" /> : <BsPlayFill className="h-8 w-8" />}
        {!playing && (
          <div className="absolute flex h-[99px] w-[99px] animate-ping items-center justify-center rounded-full border bg-transparent group-hover:border-yellow" />
        )}
      </button>
    </div>
  )
}

export default VideoPlayer
