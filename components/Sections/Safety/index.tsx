import { motion } from 'framer-motion'
import { cardContainerAnimation } from '../../../animation'

import SafetyCard from '../../SafetyCard'
import SectionTitle from '../../SectionTitle'

export const Safety = () => {
  return (
    <div>
      <SectionTitle title="Безопасность и комфорт" />
      <motion.div
        className="flex flex-row flex-wrap justify-between gap-3 md:gap-6"
        initial="hidden"
        whileInView="visible"
        transition={cardContainerAnimation}
        viewport={{ once: true }}
      >
        {safeties.map((data, i) => (
          <SafetyCard {...data} orderNumber={i + 1} key={data.id} />
        ))}
      </motion.div>
    </div>
  )
}

const safeties = [
  {
    id: 'safety1',
    title: 'Безопасность',
    description: 'Сотрудники охраны школы находятся на своем посту круглосуточно 7 дней в неделю',
  },
  {
    id: 'safety2',
    title: 'Защита',
    description:
      'Посторонние люди не имеют возможность проникнуть на территорию школы без разрешения',
  },
  {
    id: 'safety3',
    title: 'Контроль',
    description:
      'Ни один ребенок не может самовольно и самостоятельно уйти с территории школы. За детьми приезжают родители. Для самостоятельного выхода со школы необходимо иметь расписку от родителей и разрешение директора школы.',
  },
  {
    id: 'safety4',
    title: 'Видеонаблюдения',
    description:
      'По всему периметру здания школы, территории и внутри здания установлены видео и звукозаписывающие камеры наблюдения',
  },
  {
    id: 'safety5',
    title: 'Классные руководители',
    description: 'Во время прогулок все ученики находятся под присмотром классных руководителей',
  },
  {
    id: 'safety6',
    title: 'Беседы по технике безопасности',
    description:
      'Систематически проводится беседы по технике безопасности на уроках технологии, химии, физики, информатики, физкультуры.',
  },
  {
    id: 'safety7',
    title: 'Воспитательные часы',
    description:
      'Во время воспитательных часов классные руководители проводят беседы на темы безопасности во время прогулок и экскурсий.',
  },

  {
    id: 'safety8',
    title: 'Воспитательные часы',
    description:
      'Во время воспитательных часов классные руководители проводят беседы на темы безопасности во время прогулок и экскурсий.',
  },
]
