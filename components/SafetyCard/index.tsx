import { FC } from 'react'
import { motion } from 'framer-motion'
import { cardAnimation } from '../../animation'

interface ISafetyCardProps {
  orderNumber: number
  title: string
  description: string
}

const SafetyCard: FC<ISafetyCardProps> = ({ orderNumber, title, description }) => {
  return (
    <motion.div
      variants={cardAnimation}
      className="flex h-full w-full flex-col gap-4 rounded-2xl bg-light-dark p-6 md:max-w-[558px]"
    >
      <div className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-yellow font-semibold">
          <span className="flex h-9 w-9 items-center justify-center">{orderNumber}</span>
        </div>
        <h1 className=" text-lg font-semibold text-grey-darkest md:text-[22px]">{title}</h1>
      </div>
      <p className="text-grey">{description}</p>
    </motion.div>
  )
}

export default SafetyCard
