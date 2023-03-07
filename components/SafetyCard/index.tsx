import { FC } from 'react'

interface ISafetyCardProps {
  orderNumber: number
  title: string
  description: string
}
const SafetyCard: FC<ISafetyCardProps> = ({ orderNumber, title, description }) => {
  return (
    <div className="flex h-[204px] w-[558px] flex-col gap-4 rounded-2xl bg-light-dark p-6">
      <div className="flex flex-row items-center gap-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow font-semibold">
          {orderNumber}
        </span>
        <h1 className=" text-[22px] font-semibold text-grey-darkest">{title}</h1>
      </div>
      <p className="text-grey">{description}</p>
    </div>
  )
}

export default SafetyCard
