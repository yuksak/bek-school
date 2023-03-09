import { FC } from 'react'
import { motion } from 'framer-motion'

import SloganBanner from '../../SloganBanner'
import image1 from '../../../public/images/sec-mission-image-1.png'
import image2 from '../../../public/images/sec-mission-image-2.png'
import { sectionAnimation } from '../../../animation'

interface IOurMissionProps {
  text: 'first' | 'second'
  image: 'teacher' | 'pupil'
}

export const OurMission: FC<IOurMissionProps> = ({ text, image }) => {
  return (
    <motion.div
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SloganBanner
        title="Наша миссия - помогать всем и каждому"
        description={
          text === 'first'
            ? 'Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках используются дополнительные материалы с разных источников - как российских, так и зарубежных изданий.'
            : 'Школа ВЕК и детские сады BEK-KICHKINTOY принимают детей с 2 до 17 лет, 2-7 - детский сад, а с 7-17 - школа. \n \nВесь процесс обучения направлен на то, чтобы ребенок был в постоянном развитии, учебный процесс давался легко и приносил радость от достигнутых результатов. По нашему мнению каждый ребенок имеет право получать качественное образование, не зависимо от его уровня.'
        }
        image={image === 'pupil' ? image1 : image2}
      />
    </motion.div>
  )
}
