import Link from 'next/link'
import React, { FC } from 'react'
import { MdArrowOutward } from 'react-icons/md'

interface ISectionTitleProps {
  title: string
  path?: string
  position?: 'start' | 'end'
}

export const SectionTitle: FC<ISectionTitleProps> = ({ title, path, position }) => {
  return (
    <div className="mx-auto my-8 mt-10 max-w-[1142px]">
      <div
        className={`flex flex-row items-center text-grey-darkest ${
          title && path
            ? 'justify-between'
            : `justify-${position ? position : 'center text-center'}`
        }`}
      >
        <h1 className="w-[500px] text-4xl font-semibold">{title}</h1>
        {path && (
          <Link
            href={path}
            className="flex flex-row items-center gap-1 font-semibold text-grey-darkest"
          >
            Все {title.toLowerCase()} <MdArrowOutward className="h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  )
}
