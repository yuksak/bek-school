import { FC, ReactNode } from 'react'

interface IChipProps {
  text?: string
  children: ReactNode
}
const Chip: FC<IChipProps> = ({ text, children }) => {
  return (
    <span className="rounded-lg border border-yellow bg-yellow bg-opacity-25 px-2 py-0.5 text-inherit">
      {children}
    </span>
  )
}

export default Chip
