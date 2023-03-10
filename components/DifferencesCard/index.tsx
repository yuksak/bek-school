import { FC } from 'react'
import { motion } from 'framer-motion'
import { cardAnimation } from '../../animation'
interface IDifferencesCardProps {
  orderNumber: number
  title: string
  description: string
}

const DifferencesCard: FC<IDifferencesCardProps> = ({ orderNumber, title, description }) => {
  return (
    <motion.div
      className="flex h-full w-full flex-col flex-wrap gap-4 rounded-2xl bg-light-dark p-6 md:h-[245px] md:max-w-[364px]"
      variants={cardAnimation}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-yellow text-2xl font-semibold">
          <span className="flex h-[51px] w-[51px] items-center justify-center">{orderNumber}</span>
        </div>
        <h1 className="w-[249px] text-lg font-semibold leading-6 text-grey-darkest">{title}</h1>
      </div>
      <p className="text-grey">{description}</p>
    </motion.div>
  )
}

export default DifferencesCard
