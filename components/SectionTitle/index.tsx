import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { MdArrowOutward } from 'react-icons/md'

interface ISectionTitleProps {
  title: string
  path?: string
  position?: 'start' | 'end'
}

const SectionTitle: FC<ISectionTitleProps> = ({ title, path, position }) => {
  const titleVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  return (
    <motion.div
      className="mb-8"
      variants={titleVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div
        className={`flex flex-row items-center text-grey-darkest ${
          title && path
            ? 'justify-between'
            : `justify-${position ? position : 'center text-center'}`
        }`}
      >
        <h1 className="w-[590px] text-[42px] font-semibold leading-[50px]">{title}</h1>
        {path && (
          <Link
            href={path}
            className="flex flex-row items-center gap-1 font-semibold text-grey-darkest"
          >
            Все {title.toLowerCase()} <MdArrowOutward className="h-5 w-5" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default SectionTitle
