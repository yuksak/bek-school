import { motion } from 'framer-motion'

import SectionTitle from '../../SectionTitle'
import ReviewsCard from '../../ReviewsCard'
import { cardContainerAnimation } from '../../../animation'

import photo1 from '../../../public/images/reviewer-1.png'
import photo2 from '../../../public/images/reviewer-2.png'
import photo3 from '../../../public/images/reviewer-3.png'

export const Reviews = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={cardContainerAnimation}
    >
      <SectionTitle title="Отзывы" path="/reviews" />
      <div className="flex flex-row justify-between">
        {reviewers.map((reviewer) => (
          <ReviewsCard {...reviewer} key={reviewer.name} />
        ))}
      </div>
    </motion.div>
  )
}

const reviewers = [
  {
    photo: photo1,
    name: 'Шухрат Пардаев',
    description:
      'Наша школа самая лучшая, да иногда не проходят уроки но это происходит во всех школах. За то в этой школе ребята все дружные. Мы ценим наших одноклассников и учителей. Не бывают плохие и хорошие учителя.',
    date: '30 июня 2022 г.',
    rating: 4,
  },
  {
    photo: photo2,
    name: 'Бобур Юлдашев',
    description:
      'Наша школа самая лучшая, да иногда не проходят уроки но это происходит во всех школах. За то в этой школе ребята все дружные. Мы ценим наших одноклассников и учителей. Не бывают плохие и хорошие учителя.',
    date: '30 июня 2022 г.',
    rating: 4,
  },
  {
    photo: photo3,
    name: 'Тимур Усманов',
    description:
      'Наша школа самая лучшая, да иногда не проходят уроки но это происходит во всех школах. За то в этой школе ребята все дружные. Мы ценим наших одноклассников и учителей. Не бывают плохие и хорошие учителя.',
    date: '30 июня 2022 г.',
    rating: 4,
  },
]
