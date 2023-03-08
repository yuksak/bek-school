import { motion } from 'framer-motion'

import InfoBanner from '../../InfoBanner'
import image from '../../../public/images/hero.png'

export const Hero = () => {
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
      className="h-full w-full"
    >
      <InfoBanner image={image}>
        <div className="box-content flex w-[582px] flex-col gap-16 p-12">
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
          <div>
            <h1 className="text-2xl font-bold text-grey-darkest">
              Исамухамедова Дильфуза Садриддиновна
            </h1>
            <p className="font-medium text-grey">
              Директор НОУ &quot;Future education&quot;, школа “Bek”
            </p>
          </div>
        </div>
      </InfoBanner>
    </motion.div>
  )
}
