import Image from 'next/image'
import React from 'react'

import { BsPlayCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

import partnerImg from '../../../public/images/partner-1.png'
import Button from '../../Button'

export const Partner = () => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <header className="flex flex-row flex-wrap justify-between rounded-3xl border border-yellow bg-yellow-light p-[22px] sm:flex-nowrap md:py-9 md:px-12">
        <div className="flex flex-row items-center gap-6">
          <Image
            src={partnerImg}
            alt="partner image"
            className="h-12 w-12 rounded-full border border-yellow md:h-[105px] md:w-[105px]"
          />
          <h1 className="text-lg font-semibold md:text-2xl">Center for Advanced Technologies</h1>
        </div>
        <div className="hidden items-center sm:flex">
          <Button text="Смотреть видео">
            <BsPlayCircleFill className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex flex-col gap-3 rounded-3xl bg-light-dark px-12 py-9 text-grey">
        <p>
          Школа «Бек» оказывает образовательные услуги только на русском языке. Основные уроки
          проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках
          используются дополнительные материалы с разных источников- как российских, так и
          зарубежных изданий.
        </p>
        <p>
          Школа «Бек» оказывает образовательные услуги только на русском языке. Основные уроки
          проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках
          используются дополнительные материалы с разных источников- как российских, так и
          зарубежных изданий.
        </p>
        <p>
          Школа «Бек» оказывает образовательные услуги только на русском языке. Основные уроки
          проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках
          используются дополнительные материалы с разных источников- как российских, так и
          зарубежных изданий. Школа «Бек» оказывает образовательные услуги только на русском языке.
          Основные уроки проводятся по учебной программе, утверждённой МНО, но в процессе
          преподавания на уроках используются дополнительные материалы с разных источников- как
          российских, так и зарубежных изданий.
        </p>
      </main>
      <div className="mx-auto mt-6 flex items-center sm:hidden">
        <Button text="Смотреть видео">
          <BsPlayCircleFill className="h-6 w-6" />
        </Button>
      </div>
    </motion.div>
  )
}
