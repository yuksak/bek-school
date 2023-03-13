import { useRef, useState } from 'react'
import SloganBanner from '../../SloganBanner'
import poster from '../../../public/images/experience-thumbnail.png'
import Button from '../../Button'
import { motion } from 'framer-motion'

import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import VideoPlayer from '../../VideoPlayer'
import { sectionAnimation } from '../../../animation'

export const Experience = () => {
  return (
    <motion.div
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SloganBanner
        title="18 Лет в лучшей сфере образования"
        description="Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках используются дополнительные материалы с разных источников- как российских, так и зарубежных изданий."
        link="/experience"
      >
        {/* <VideoPlayer src="https://youtu.be/a43-qyyeZ88" poster="/images/experience-thumbnail.png" /> */}
        <div className="h-[180px] sm:h-80 md:h-[445px]">
          <iframe
            className="h-full w-full rounded-3xl"
            allowFullScreen
            src="https://www.youtube.com/embed/a43-qyyeZ88"
            title="Школа Бек за Мир!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </SloganBanner>
    </motion.div>
  )
}
