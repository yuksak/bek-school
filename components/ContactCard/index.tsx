import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cardAnimation } from '../../animation'

interface IContactedCardProps {
  title: string
  content: string
  path: string
  children: ReactNode
}

const ContactCard: FC<IContactedCardProps> = ({ title, content, path, children }) => {
  const router = useRouter()
  return (
    <motion.div
      variants={cardAnimation}
      onClick={() => router.push(path)}
      className="box-border flex w-[365px] cursor-pointer flex-row items-center gap-4 rounded-2xl border border-transparent bg-light-dark p-6 hover:border-grey"
    >
      <div className=" rounded-xl bg-light p-3">{children}</div>
      <div className="flex flex-col text-grey-darkest">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-lg font-bold">{content}</span>
      </div>
    </motion.div>
  )
}

export default ContactCard
