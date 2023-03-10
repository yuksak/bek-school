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
        <div className="box-content flex w-[582px] flex-col gap-3 p-6 md:p-12">
          <h1 className="text-2xl font-bold text-grey-darkest md:text-4xl">Обучение</h1>
          <p className="text-grey-darkest">
            Обучение ведется по Государственной Программе. Также у нас есть факультативы по
            математике, английскому языку, естественным предметам и IT (робототехника, электроника,
            программирование, 3D- моделирование).
          </p>
          <ul className="list-disc pl-5">
            Хотим еще отметить наши действующие кружки:
            {lists.map((list, i) => (
              <li key={list + i}>{list}</li>
            ))}
          </ul>
        </div>
      </InfoBanner>
    </motion.div>
  )
}

const lists = [
  'Восточные единоборства',
  'Футбол',
  'Шахматы',
  'Актерское мастерство',
  'Гимнастика',
  'Хореография',
]
