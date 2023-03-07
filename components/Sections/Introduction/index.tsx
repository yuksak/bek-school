import Image from 'next/image'
import React from 'react'
import intro from '../../../public/images/intro.png'
import { Logo } from '../../UI'

export const Introduction = () => {
  return (
    <div className="text-center">
      <div className="relative">
        <Image
          src={intro}
          className="h-[723px] w-full object-cover"
          width={1000}
          height={1000}
          alt="intro background"
        />
        <div className="absolute top-0 h-full w-full bg-grey-dark opacity-60"></div>
        <div className="absolute top-48  mx-auto flex w-full flex-col gap-8 text-light">
          <h1 className="text-7xl font-semibold">
            Мы Любим <br />
            Всех и Каждого
          </h1>
          <p className="text-2xl font-light">Школа “Bek” future education</p>
          <div className="mx-auto mt-28">
            <Logo variant="grey" />
          </div>
        </div>
      </div>
    </div>
  )
}
