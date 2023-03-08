import { motion } from 'framer-motion'

import SloganBanner from '../../SloganBanner'
import missionImage from '../../../public/images/sec-mission-image.png'

export const OurMission = () => {
  const container = {
    visible: {
      y: 0,
      transition: { duration: 1 },
    },
    hidden: {
      y: 200,
      transition: { duration: 1 },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SloganBanner
        title="Наша миссия - помогать всем и каждому"
        description="Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки
      проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках
      используются дополнительные материалы с разных источников - как российских, так и
      зарубежных изданий."
        image={missionImage}
      />
    </motion.div>
  )
}
