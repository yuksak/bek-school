import { motion } from 'framer-motion'

import DifferencesCard from '../../DifferencesCard'
import SectionTitle from '../../SectionTitle'
import { cardContainerAnimation } from '../../../animation'

export const Differences = () => {
  return (
    <div>
      <SectionTitle title="Чем отличается школа “Bek” от других школ" />
      <motion.div
        className="flex flex-row flex-wrap gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={cardContainerAnimation}
      >
        {datas.map((data, i) => (
          <DifferencesCard {...data} orderNumber={i + 1} key={data.title} />
        ))}
      </motion.div>
    </div>
  )
}

const datas = [
  {
    id: 'different1',
    title: 'Уникальный педагогический состав',
    description:
      'Основная часть педагогического коллектива “ВЕК” трудится у нас уже на протяжении 5 лет, среди них есть также иностранные преподаватели.',
  },
  {
    id: 'different2',
    title: 'Институт классного руководства',
    description:
      'Классный руководитель не обременен преподаванием, в его задачу входит только работа сосвоим классом: посещаемость детей, выполнение домашнегозадания и т.д.',
  },
  {
    id: 'different3',
    title: 'Преподавание IT-дисциплин',
    description:
      'С 3 класса в учебную программу добавляется информатика ипрограммирование,а с 9 класса - 3D моделирование',
  },
  {
    id: 'different4',
    title: 'Большая экозона',
    description:
      'На территории школы распложена "зеленая зона" с многолетними деревьями, газонами ирастениями',
  },
  {
    id: 'different5',
    title: 'Независимая оценка знаний',
    description:
      'Каждая оценка имеетаргументированное мнение учителя. Полная прозрачность,не предусматривающая завышения или занижения оценки',
  },
  {
    id: 'different6',
    title: 'В нашей школе уважают мнение каждого ученика',
    description:
      'Наша цель — воспитание уверенной самостоятельной личности, с собственным мнением, умеющей решать и находить ответы на любые поставленные задачи',
  },
]
