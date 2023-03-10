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
    visible: { opacity: 1, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      className="mb-3 md:mb-8"
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
        <h1 className="w-full max-w-[590px] text-2xl font-bold leading-9 md:text-[42px] md:leading-[63px]">
          {title}
        </h1>
        {path && (
          <Link
            href={path}
            className="flex flex-row items-center gap-1 whitespace-nowrap font-semibold text-grey-darkest"
          >
            Все {title.toLowerCase()} <MdArrowOutward className="h-5 w-5" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default SectionTitle
