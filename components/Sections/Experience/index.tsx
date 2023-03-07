import { useRef, useState } from 'react'
import SloganBanner from '../../SloganBanner'
import poster from '../../../public/images/experience-thumbnail.png'
import Button from '../../Button'

import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import VideoPlayer from '../../VideoPlayer'

export const Experience = () => {
  return (
    <SloganBanner
      title="18 Лет в лучшей сфере образования"
      description="Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках используются дополнительные материалы с разных источников- как российских, так и зарубежных изданий."
      link="/experience"
    >
      <VideoPlayer src="/video/education.mp4" poster="/images/experience-thumbnail.png" />
    </SloganBanner>
  )
}
