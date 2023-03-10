import InfoBanner from '../../InfoBanner'
import aboutUsImage from '../../../public/images/sec-about-us.png'

import { motion } from 'framer-motion'
import { sectionAnimation } from '../../../animation'

export const AboutUs = () => {
  return (
    <motion.div
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <InfoBanner image={aboutUsImage}>
        <div className="box-content flex w-full max-w-[582px] flex-col gap-3 p-6 text-grey-darkest md:p-12 md:pr-0">
          <h1 className="text-2xl font-bold md:text-4xl">О нас</h1>
          <p>
            Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки
            проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках
            используются дополнительные материалы с разных источников- как российских, так и
            зарубежных изданий.
          </p>
          <p>
            Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки
            проводятся по учебной программе, утверждённой МНО.
          </p>
        </div>
      </InfoBanner>
    </motion.div>
  )
}
