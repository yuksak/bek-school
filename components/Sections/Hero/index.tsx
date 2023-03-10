import { motion } from 'framer-motion'

import InfoBanner from '../../InfoBanner'
import image from '../../../public/images/hero.png'
import { sectionAnimation } from '../../../animation'

export const Hero = () => {
  return (
    <motion.div
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full w-full"
    >
      <InfoBanner image={image}>
        <div className="box-content flex w-full flex-col gap-6 px-6  py-4 md:max-w-[582px] md:gap-16 md:p-12">
          <p className="text-grey-darkest">
            В школу дети приходят учиться, и ничто не должно мешать им в этом. Наша цель - воспитать
            всесторонне развитую личность, обладающую собственным мнением, умеющая находить пути
            решения задач любой сложности, личность, которая быстро адаптируется к изменениям
            вокруг.
            <br />
            <br />
            “Мы хотим видеть ребенка в поисках знаний, а не знания в погоне за ребенком” - Бернард
            Шоу
          </p>
          <div className="flex flex-col gap-2 md:gap-1">
            <h1 className="text-lg font-bold leading-7 text-grey-darkest md:text-2xl">
              Исамухамедова Дильфуза Садриддиновна
            </h1>
            <p className="text-sm font-medium text-grey md:text-base">
              Директор НОУ &quot;Future education&quot;, школа “Bek”
            </p>
          </div>
        </div>
      </InfoBanner>
    </motion.div>
  )
}
