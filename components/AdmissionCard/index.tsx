import { FC } from 'react'
import { motion } from 'framer-motion'

import Chip from './Chip'
import { cardAnimation } from '../../animation'

interface IAdmissionCardProps {
  index: number
  description: string
  info?: string
}

const AdmissionCard: FC<IAdmissionCardProps> = ({ index, description, info }) => {
  return (
    <motion.div variants={cardAnimation}>
      <div className="flex w-[752px] flex-row items-center gap-5 rounded-2xl bg-light p-6">
        <div className="flex h-[51px] w-[51px] items-center justify-center rounded-full bg-yellow text-2xl font-semibold text-grey-darkest">
          {index}
        </div>
        <p className="text-xl font-medium">
          {description} {info && <Chip>{info}</Chip>}
        </p>
      </div>
    </motion.div>
  )
}

export default AdmissionCard
