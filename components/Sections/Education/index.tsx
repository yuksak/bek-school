import { motion } from 'framer-motion'

import InfoBanner from '../../InfoBanner'
import image from '../../../public/images/sec-education-pic.png'
import { sectionAnimation } from '../../../animation'

export const Education = () => {
  return (
    <motion.div
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <InfoBanner image={image}>
        <div className="box-content flex w-[582px] flex-col gap-3 p-12">
          <h1 className="text-4xl font-bold text-grey-darkest">Обучение</h1>
          <p className="text-grey-darkest">
            Обучение ведется по Государственной Программе. Также у нас есть факультативы по
            математике, английскому языку, естественным предметам и IT (робототехника, электроника,
            программирование, 3D- моделирование).
          </p>
          <ul className="list-disc pl-5">
            Хотим еще отметить наши действующие кружки:
            <li>Восточные единоборства</li>
            <li>Футбол</li>
            <li>Шахматы</li>
            <li>Актерское мастерство</li>
            <li>Гимнастика</li>
            <li>Хореография</li>
          </ul>
        </div>
      </InfoBanner>
    </motion.div>
  )
}
