import { FC } from 'react'
import Chip from './Chip'

interface IAdmissionCardProps {
  index: number
  description: string
  info?: string
}

const AdmissionCard: FC<IAdmissionCardProps> = ({ index, description, info }) => {
  return (
    <div>
      <div className="flex w-[752px] flex-row items-center gap-5 rounded-2xl bg-light p-6">
        <div className="flex h-[51px] w-[51px] items-center justify-center rounded-full bg-yellow text-2xl font-semibold text-grey-darkest">
          {index}
        </div>
        <p className="text-xl">
          {description} {info && <Chip>{info}</Chip>}
        </p>
      </div>
    </div>
  )
}

export default AdmissionCard
