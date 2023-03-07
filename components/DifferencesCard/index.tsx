import { FC } from 'react'

interface IDifferencesCardProps {
  orderNumber: number
  title: string
  description: string
}
const DifferencesCard: FC<IDifferencesCardProps> = ({ orderNumber, title, description }) => {
  return (
    <div className="flex h-[245px] w-[365px] flex-col gap-4 rounded-2xl bg-light-dark p-6">
      <div className="flex flex-row items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow font-semibold">
          {orderNumber}
        </div>
        <h1 className="w-[249px] text-lg font-semibold text-grey-darkest">{title}</h1>
      </div>
      <p className="text-grey">{description}</p>
    </div>
  )
}

export default DifferencesCard