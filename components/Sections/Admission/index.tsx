import { motion } from 'framer-motion'
import { cardContainerAnimation } from '../../../animation'
import AdmissionCard from '../../AdmissionCard'

export const Admission = () => {
  const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } },
  }

  const textVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3 } },
  }

  return (
    <div className="flex justify-center rounded-3xl bg-light-dark p-20 pt-10">
      <motion.div
        className="w-[752px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={cardContainerAnimation}
      >
        <motion.h1
          className="mt-10 text-center text-[42px] font-semibold text-grey-darkest"
          variants={titleVariant}
        >
          Как поступить в школу
        </motion.h1>
        <motion.p
          className="mx-auto mb-12 w-[533px] text-center text-2xl font-medium leading-9 text-grey"
          variants={textVariant}
        >
          Поступление в школу состоит из нескольких простых шагов
        </motion.p>
        <motion.div
          className="flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={cardContainerAnimation}
        >
          {admissionSteps.map((step, i) => (
            <AdmissionCard {...step} index={i + 1} key={step.description} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

const admissionSteps = [
  { description: 'Получаем вашу заявку на поступление' },
  { description: 'Телефонная консультация родителя' },
  { description: 'Тур по школе', info: 'по желанию' },
  { description: 'Педагогическая диагностика ребенка' },
  { description: 'Пробный день в школе', info: 'рекомендуется' },
  { description: 'Заключение договора' },
]
