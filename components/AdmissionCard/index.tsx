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
      <div className="flex w-full max-w-[752px] flex-row items-center gap-5 rounded-2xl bg-light p-6">
        <div className=" rounded-full bg-yellow text-base font-semibold text-grey-darkest md:text-2xl">
          <span className="flex h-9 w-9 items-center justify-center md:h-[51px] md:w-[51px]">
            {index}
          </span>
        </div>
        <p className="whitespace-pre-wrap text-base font-medium md:text-xl">
          {description} {info && <Chip>{info}</Chip>}
        </p>
      </div>
    </motion.div>
  )
}

export default AdmissionCard
